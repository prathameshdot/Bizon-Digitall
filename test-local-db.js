const mysql = require('mysql2/promise');

async function testLocal() {
  try {
    const conn = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root123',
      database: 'bizondigital_local'
    });
    console.log('✅ Connected to bizondigital_local!');
    
    const [tables] = await conn.query('SHOW TABLES');
    console.log('\nTables in database:');
    tables.forEach(t => console.log('  ✅', Object.values(t)[0]));
    
    // Check admin user
    const [users] = await conn.query('SELECT email, role FROM User');
    console.log('\nUsers in database:');
    users.forEach(u => console.log('  ✅', u.email, '-', u.role));
    
    await conn.end();
    console.log('\n✅ Local database is ready!');
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

testLocal();
