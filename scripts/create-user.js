const bcrypt = require('bcryptjs');
const readline = require('readline');
const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('\n\u{1F464} Create New User\n');
  console.log('Press Ctrl+C to cancel at any time.\n');

  try {
    const email = await question('Email: ');
    if (!email || !email.includes('@')) {
      console.error('\u{274C} Invalid email address.');
      rl.close();
      return;
    }

    const password = await question('Password: ');
    if (!password || password.length < 6) {
      console.error('\u{274C} Password must be at least 6 characters.');
      rl.close();
      return;
    }

    const name = await question('Name (optional): ') || 'User';
    const roleInput = await question('Role (admin/user) [default: user]: ');
    const role = roleInput.toLowerCase() === 'admin' ? 'admin' : 'user';

    rl.close();

    console.log('\n\u{1F4BE} Creating user...');
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await prisma.user.create({
      data: {
        email: email.trim(),
        password: hashedPassword,
        name: name.trim(),
        role: role,
      },
    });
    
    console.log('\n\u{2705} User created successfully!');
    console.log('\u{1F4E7} Email:', user.email);
    console.log('\u{1F464} Name:', user.name);
    console.log('\u{1F511} Role:', user.role);
    console.log('\n\u{1F310} Login at http://localhost:3000/signin\n');
  } catch (error) {
    rl.close();
    if (error.code === 'P2002') {
      console.error('\n\u{274C} Error: A user with this email already exists.\n');
    } else {
      console.error('\n\u{274C} Error creating user:', error.message, '\n');
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
