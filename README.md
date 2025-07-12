# SmartChat By.Arvin

Aplikasi chatbot AI yang dibangun dengan React dan Express.js, menggunakan OpenRouter API untuk respon AI yang cerdas.

## Fitur

- Interface chat yang modern dan responsif
- Integrasi dengan OpenRouter API
- Riwayat percakapan dengan context
- Typing indicator dan animasi halus
- Panel pengaturan untuk konfigurasi API
- Fungsi clear chat

## Teknologi

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, TypeScript
- **UI Components**: Shadcn/ui dengan Radix UI
- **State Management**: TanStack Query
- **AI Service**: OpenRouter API

## Deployment ke Vercel

### Langkah 1: Persiapan Repository

1. Buat repository baru di GitHub
2. Upload semua file project ke repository tersebut

### Langkah 2: Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com) dan login
2. Klik "New Project" dan hubungkan GitHub repository Anda
3. Vercel akan otomatis mendeteksi konfigurasi dari file `vercel.json`
4. Tambahkan environment variable:
   - `OPENROUTER_API_KEY`: API key OpenRouter Anda
   - `NODE_ENV`: production

### Langkah 3: Build Script

Vercel membutuhkan build script khusus. Tambahkan script berikut ke package.json:

```json
{
  "scripts": {
    "vercel-build": "npm run build"
  }
}
```

### Langkah 4: Konfigurasi Domain

1. Setelah deploy berhasil, Vercel akan memberikan URL default
2. Anda bisa mengatur custom domain di dashboard Vercel

## Struktur File untuk Vercel

```
project/
├── api/
│   └── index.ts          # Serverless function untuk API
├── client/               # Frontend React
├── server/               # Backend Express (untuk development)
├── shared/               # Shared schemas
├── vercel.json          # Konfigurasi Vercel
└── package.json
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

- `OPENROUTER_API_KEY`: API key untuk OpenRouter
- `NODE_ENV`: development/production

## API Endpoints

- `GET /api/messages/:sessionId` - Ambil pesan untuk session
- `POST /api/messages` - Kirim pesan baru
- `DELETE /api/messages/:sessionId` - Hapus semua pesan dalam session
- `GET /api/health` - Health check

## Catatan Deployment

1. File `api/index.ts` adalah entry point untuk Vercel serverless functions
2. File `vercel.json` mengatur routing dan build configuration
3. Frontend akan di-build menjadi static files
4. Backend akan dijalankan sebagai serverless function

## Troubleshooting

Jika ada masalah saat deployment:

1. Pastikan semua dependencies ada di `package.json`
2. Periksa environment variables di dashboard Vercel
3. Cek build logs di Vercel dashboard
4. Pastikan API key OpenRouter masih valid