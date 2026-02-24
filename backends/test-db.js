import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

const sql = postgres('postgresql://postgres.vfbckfkwjonijelubelq:BtPBRkJis8txYjey@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres', {
  ssl: 'require'
});

async function testConnection() {
  try {
    console.log('Testing database connection...');
    const result = await sql`SELECT NOW()`;
    console.log('✓ Connection successful!');
    console.log('Server time:', result[0].now);
    await sql.end();
  } catch (error) {
    console.error('✗ Connection failed:', error.message);
    process.exit(1);
  }
}

testConnection();
