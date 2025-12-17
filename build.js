// Custom build script to avoid Windows path issues
const { execSync } = require('child_process');
const path = require('path');

console.log('Starting custom build process...\n');

// Set environment variables to limit glob scanning
process.env.INIT_CWD = __dirname;
process.env.PWD = __dirname;

try {
  console.log('Running Next.js build...');
  execSync('npx next build --no-lint', {
    stdio: 'inherit',
    cwd: __dirname,
    env: {
      ...process.env,
      NODE_ENV: 'production',
      INIT_CWD: __dirname,
      PWD: __dirname,
    }
  });
  console.log('\n✅ Build completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
