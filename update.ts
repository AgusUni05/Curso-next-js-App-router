import bcrypt from 'bcrypt';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const hash = await bcrypt.hash('46562971', 10);
console.log('Hash generado:', hash);

const query = await sql`UPDATE users 
SET email = 'cuentauniagus@gmail.com', password = ${hash}
WHERE id = '410544b2-4001-4271-9855-fec4b6a6442a';`;

console.log('Usuario actualizado');