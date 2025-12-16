const readline = require('readline');
const fs = require('fs');
const { execSync } = require('child_process');

// Add PostgreSQL to PATH for this session
try {
  const pgPath = 'C:\\Program Files\\PostgreSQL\\18\\bin';
  if (fs.existsSync(pgPath)) {
    process.env.Path += `;${pgPath}`;
  }
} catch (e) {
  // Ignore if can't add to PATH
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function setupWizard() {
  console.log('\n🚀 Bizon Digital Blog Admin Setup Wizard\n');
  console.log('This wizard will help you configure your database and create an admin user.\n');

  // Step 1: Database Configuration
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📊 STEP 1: Database Configuration');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  const dbHost = await question('Database host (default: localhost): ') || 'localhost';
  const dbPort = await question('Database port (default: 5432): ') || '5432';
  const dbUser = await question('Database username (default: postgres): ') || 'postgres';
  const dbPassword = await question('Database password: ');
  const dbName = await question('Database name (default: bizondigital): ') || 'bizondigital';

  const DATABASE_URL = `postgresql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}?schema=public`;

  // Step 2: JWT Secret
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🔐 STEP 2: JWT Secret Configuration');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  const generateSecret = await question('Generate random JWT secret? (Y/n): ');
  let JWT_SECRET;

  if (generateSecret.toLowerCase() !== 'n') {
    JWT_SECRET = require('crypto').randomBytes(32).toString('hex');
    console.log(`✅ Generated: ${JWT_SECRET}\n`);
  } else {
    JWT_SECRET = await question('Enter your JWT secret: ');
  }

  // Step 3: Write .env file
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📝 STEP 3: Writing Configuration');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  const envContent = `# Database
DATABASE_URL="${DATABASE_URL}"

# JWT Secret
JWT_SECRET="${JWT_SECRET}"

# Email Configuration (optional)
EMAIL_USER="your-email@gmail.com"
EMAIL_PASSWORD="your-app-password"

# Next.js
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
`;

  fs.writeFileSync('.env', envContent);
  console.log('✅ .env file updated successfully!\n');

  // Step 4: Create Database
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🗄️  STEP 4: Database Creation');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  const createDb = await question(`Create database "${dbName}"? (Y/n): `);
  
  if (createDb.toLowerCase() !== 'n') {
    try {
      const createDbCommand = `psql -U ${dbUser} -h ${dbHost} -p ${dbPort} -c "CREATE DATABASE ${dbName};"`;
      console.log('\nAttempting to create database...');
      execSync(createDbCommand, { env: { ...process.env, PGPASSWORD: dbPassword } });
      console.log(`✅ Database "${dbName}" created successfully!\n`);
    } catch (error) {
      console.log('⚠️  Could not create database automatically.');
      console.log('Please create it manually using pgAdmin or psql:\n');
      console.log(`  psql -U ${dbUser}`);
      console.log(`  CREATE DATABASE ${dbName};`);
      console.log(`  \\q\n`);
      
      const continueSetup = await question('Press Enter to continue after creating the database...');
    }
  }

  // Step 5: Run Migrations
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🔄 STEP 5: Database Migrations');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  const runMigrations = await question('Run database migrations? (Y/n): ');
  
  if (runMigrations.toLowerCase() !== 'n') {
    try {
      console.log('\nRunning migrations...\n');
      execSync('npm run prisma:migrate', { stdio: 'inherit' });
      console.log('\n✅ Migrations completed successfully!\n');
    } catch (error) {
      console.log('❌ Migration failed. Please run manually:');
      console.log('  npm run prisma:migrate\n');
    }
  }

  // Step 6: Create Admin User
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('👤 STEP 6: Admin User Creation');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  const createAdmin = await question('Create admin user? (Y/n): ');
  
  if (createAdmin.toLowerCase() !== 'n') {
    const adminEmail = await question('Admin email (default: admin@bizondigital.com): ') || 'admin@bizondigital.com';
    const adminPassword = await question('Admin password: ');
    const adminName = await question('Admin name (default: Admin User): ') || 'Admin User';

    // Update create-admin.js
    const adminScript = `const bcrypt = require('bcryptjs');
const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

async function main() {
  const email = '${adminEmail}';
  const password = '${adminPassword}';
  const name = '${adminName}';
  
  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    const admin = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        name: name,
        role: 'admin',
      },
    });
    
    console.log('✅ Admin user created successfully!');
    console.log('Email:', admin.email);
    console.log('Name:', admin.name);
    console.log('Role:', admin.role);
    console.log('\\nYou can now login at http://localhost:3000/signin');
  } catch (error) {
    if (error.code === 'P2002') {
      console.error('❌ Error: A user with this email already exists.');
    } else {
      console.error('❌ Error creating admin user:', error.message);
    }
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error('Fatal error:', e);
    prisma.$disconnect();
    process.exit(1);
  });
`;

    fs.writeFileSync('scripts/create-admin.js', adminScript);

    try {
      console.log('\nCreating admin user...\n');
      execSync('node scripts/create-admin.js', { stdio: 'inherit' });
    } catch (error) {
      console.log('\n❌ Could not create admin user automatically.');
      console.log('Please run manually: node scripts/create-admin.js\n');
    }
  }

  // Step 7: Summary
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🎉 Setup Complete!');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  console.log('✅ Configuration saved to .env');
  console.log('✅ Database configured');
  console.log('✅ Migrations completed');
  console.log('✅ Admin user created\n');

  console.log('📝 Next Steps:\n');
  console.log('1. Start the development server:');
  console.log('   npm run dev\n');
  console.log('2. Open your browser:');
  console.log('   http://localhost:3000/signin\n');
  console.log('3. Login with your admin credentials\n');
  console.log('4. Go to the admin panel:');
  console.log('   http://localhost:3000/adminBlog\n');
  console.log('5. Start creating blog posts! 🚀\n');

  console.log('📚 Documentation:');
  console.log('   - STEP_BY_STEP_GUIDE.md');
  console.log('   - BLOG_SETUP_GUIDE.md');
  console.log('   - QUICK_START.md\n');

  rl.close();
}

setupWizard().catch(error => {
  console.error('Setup failed:', error);
  rl.close();
  process.exit(1);
});
