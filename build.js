// Custom build script for production
const { execSync } = require('child_process');

console.log('Starting production build...\n');

try {
  // Use the default Next.js build
  execSync('npx next build', {
    stdio: 'inherit',
    cwd: __dirname,
    env: {
      ...process.env,
      NODE_ENV: 'production',
    }
  });
  console.log('\n✅ Build completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
