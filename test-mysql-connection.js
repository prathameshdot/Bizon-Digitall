const mysql = require('mysql2/promise');

// Test MySQL connection with the Hostinger credentials
async function testConnection() {
  console.log('Testing MySQL connection...\n');
  
  const connectionConfig = {
    host: 'auth-db1836.hstgr.io',
    port: 3306,
    user: 'u566621883_admin',
    password: 'Mnd456@s#',
    database: 'u566621883_BizonDigital'
  };

  console.log('Connection config:');
  console.log(`Host: ${connectionConfig.host}`);
  console.log(`Database: ${connectionConfig.database}`);
  console.log(`Username: ${connectionConfig.user}`);
  console.log(`Password: ${connectionConfig.password.replace(/./g, '*')}\n`);

  try {
    console.log('Attempting to connect...');
    const connection = await mysql.createConnection(connectionConfig);
    console.log('✅ CONNECTION SUCCESSFUL!\n');

    // Test query to verify database access
    const [tables] = await connection.query('SHOW TABLES');
    console.log('✅ Database accessible!');
    console.log('\nTables in database:');
    tables.forEach((table, index) => {
      const tableName = Object.values(table)[0];
      console.log(`  ${index + 1}. ${tableName}`);
    });

    // Check if User table exists
    const userTableExists = tables.some(t => Object.values(t)[0] === 'User');
    if (userTableExists) {
      console.log('\n✅ User table exists');
      
      // Check if admin user exists
      const [users] = await connection.query('SELECT email FROM User WHERE email = ?', ['admin@bizondigital.com']);
      if (users.length > 0) {
        console.log('✅ Admin user (admin@bizondigital.com) exists');
      } else {
        console.log('❌ Admin user NOT found');
      }
    }

    await connection.end();
    
    console.log('\n' + '='.repeat(60));
    console.log('🎉 SUCCESS! Connection is working.');
    console.log('Your .env file has been updated with the correct credentials.');
    console.log('='.repeat(60));
    
  } catch (error) {
    console.log(`❌ Connection failed: ${error.message}`);
    console.log(`Error code: ${error.code}`);
  }
}

testConnection();
