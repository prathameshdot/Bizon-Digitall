UPDATE User SET password = '$2a$10$keWLSNleP0gKbvcd9gGPmOXOyl6xIRQBc1qKlJKuQuS6e9iSLII1u' WHERE email = 'admin@bizondigital.com';
SELECT email, role, LEFT(password, 30) as password_hash FROM User;
