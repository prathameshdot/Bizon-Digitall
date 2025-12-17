-- ====================================================
-- CREATE ADMIN USER FOR BIZON DIGITAL
-- Email: admin@bizondigital.com
-- Password: 123456
-- ====================================================

-- Insert admin user with bcrypt hashed password
-- Password hash for "123456" using bcrypt with 10 rounds
INSERT INTO `User` (`email`, `password`, `name`, `role`, `createdAt`, `updatedAt`) 
VALUES (
  'admin@bizondigital.com',
  '$2a$10$YourHashedPasswordHere',
  'Admin',
  'admin',
  NOW(3),
  NOW(3)
);

-- ====================================================
-- ALTERNATIVE: Use this Node.js script to create user
-- Run in your project terminal:
-- ====================================================
-- node scripts/create-admin.js

-- ====================================================
-- OR manually hash password and insert:
-- ====================================================
-- 1. Run this in terminal:
--    node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('123456', 10));"
-- 2. Copy the hash output
-- 3. Replace '$2a$10$YourHashedPasswordHere' above with the actual hash
-- 4. Run the INSERT query in phpMyAdmin

-- ====================================================
-- VERIFY USER WAS CREATED:
-- ====================================================
SELECT * FROM `User` WHERE email = 'admin@bizondigital.com';

-- ====================================================
-- DELETE USER (if needed):
-- ====================================================
-- DELETE FROM `User` WHERE email = 'admin@bizondigital.com';
