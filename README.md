# Vercel Deployment with PostgreSQL

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Database Table
Run `schema.sql` in your Supabase SQL Editor

### 3. Set Environment Variable in Vercel
- Go to Vercel Dashboard → Project Settings → Environment Variables
- Add:
  - **Name:** `DATABASE_URL`
  - **Value:** `postgresql://postgres.vfbckfkwjonijelubelq:BtPBRkJis8txYjey@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres`
  - **Environment:** Production, Preview, Development

### 4. Deploy
```bash
vercel --prod
```

## Files
- `api/save-order.js` - Saves order to PostgreSQL
- `schema.sql` - Database table structure
- `package.json` - Node.js dependencies
