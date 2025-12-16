#!/usr/bin/env node

/**
 * Production Setup Script
 * Run this after deploying to production to set up the database
 */

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('\n🚀 Production Setup\n');
  
  try {
    // Check if DATABASE_URL is set
    if (!process.env.DATABASE_URL) {
      console.error('❌ ERROR: DATABASE_URL environment variable is not set!');
      console.log('\nPlease set your production DATABASE_URL:');
      console.log('Example: DATABASE_URL="postgresql://user:pass@host:5432/dbname" node scripts/production-setup.js\n');
      process.exit(1);
    }

    console.log('✅ DATABASE_URL found');
    console.log('📍 Database:', process.env.DATABASE_URL.split('@')[1]?.split('?')[0] || 'hidden');

    // Confirm before proceeding
    const confirm = await question('\n⚠️  This will run migrations on your production database. Continue? (yes/no): ');
    if (confirm.toLowerCase() !== 'yes') {
      console.log('\nSetup cancelled.');
      rl.close();
      return;
    }

    // Run migrations
    console.log('\n📦 Running database migrations...');
    execSync('npm run prisma:deploy', { stdio: 'inherit' });

    console.log('\n✅ Migrations completed successfully!');

    // Ask if user wants to create admin user
    const createUser = await question('\n👤 Create admin user now? (yes/no): ');
    if (createUser.toLowerCase() === 'yes') {
      console.log('\nRunning user creation script...');
      execSync('node scripts/create-user.js', { stdio: 'inherit' });
    }

    console.log('\n✨ Production setup complete!\n');
    rl.close();

  } catch (error) {
    console.error('\n❌ Setup failed:', error.message);
    rl.close();
    process.exit(1);
  }
}

main();
