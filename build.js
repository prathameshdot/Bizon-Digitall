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
      // Prevent tools that glob through the user profile from scanning protected
      // Windows junctions like "Application Data" during build.
      // Point common home/app dirs to the project directory for the build process.
      HOME: __dirname,
      USERPROFILE: __dirname,
      APPDATA: __dirname,
      LOCALAPPDATA: __dirname,
    }
  });
  console.log('\n✅ Build completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
