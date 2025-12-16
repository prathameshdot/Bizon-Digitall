const bcrypt = require('bcryptjs');
const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

// Usage instructions
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log('\n📖 Usage:');
  console.log('  node scripts/create-admin.js [email] [password] [name]\n');
  console.log('Example:');
  console.log('  node scripts/create-admin.js admin@company.com mypassword "Admin User"\n');
  console.log('Or run without arguments to use defaults:');
  console.log('  Email: admin@bizondigital.com');
  console.log('  Password: 123456');
  console.log('  Name: Admin\n');
  process.exit(0);
}

async function main() {
  // Get credentials from command-line arguments or use defaults
  const email = process.argv[2] || 'admin@bizondigital.com';
  const password = process.argv[3] || '123456';
  const name = process.argv[4] || 'Admin';
  
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
    console.log('\nYou can now login at http://localhost:3000/signin');
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
