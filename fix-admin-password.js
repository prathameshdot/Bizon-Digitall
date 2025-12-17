const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');

async function updatePassword() {
  // Generate hash
  const newHash = await bcrypt.hash('123456', 10);
  console.log('Generated hash:', newHash);
  
  // Verify it works
  const isValid = await bcrypt.compare('123456', newHash);
  console.log('Hash verification:', isValid);
  
  // Update database
  const conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'bizondigital_local'
  });
  
  await conn.execute(
    'UPDATE User SET password = ? WHERE email = ?',
    [newHash, 'admin@bizondigital.com']
  );
  
  console.log('✅ Password updated in database');
  
  // Verify from database
  const [rows] = await conn.execute(
    'SELECT password FROM User WHERE email = ?',
    ['admin@bizondigital.com']
  );
  
  const dbHash = rows[0].password;
  const dbVerify = await bcrypt.compare('123456', dbHash);
  console.log('✅ Database verification:', dbVerify);
  
  await conn.end();
}

updatePassword().catch(console.error);
