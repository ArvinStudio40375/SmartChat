# Panduan Deploy SmartChat ke Vercel

## Langkah-langkah Deployment

### 1. Persiapan GitHub Repository

1. Buat repository baru di GitHub
2. Upload semua file project ke repository
3. Pastikan semua file berikut ada:
   - `vercel.json` (konfigurasi Vercel)
   - `api/index.ts` (serverless function)
   - `README.md` (dokumentasi)
   - `.env.example` (template environment)

### 2. Deploy ke Vercel

1. **Login ke Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Login dengan akun GitHub Anda

2. **Import Project**
   - Klik "New Project"
   - Pilih repository GitHub Anda
   - Klik "Import"

3. **Configure Project**
   - Project Name: `smartchat-by-arvin`
   - Framework Preset: Vite (akan terdeteksi otomatis)
   - Root Directory: `./` (default)

4. **Environment Variables**
   Tambahkan variable berikut di dashboard Vercel:
   ```
   OPENROUTER_API_KEY = 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
   NODE_ENV = production
   ```

5. **Deploy**
   - Klik "Deploy"
   - Tunggu proses build selesai (3-5 menit)
   - Vercel akan memberikan URL aplikasi

### 3. Verifikasi Deployment

1. **Cek URL yang diberikan Vercel**
   - Contoh: `https://smartchat-by-arvin.vercel.app`
   
2. **Test Fitur**
   - Buka aplikasi di browser
   - Coba kirim pesan
   - Pastikan chatbot merespons dengan baik

3. **Cek API Health**
   - Buka `https://your-app.vercel.app/api/health`
   - Harus menampilkan: `{"status":"ok","timestamp":"..."}`

### 4. Custom Domain (Opsional)

1. **Di Dashboard Vercel**
   - Buka project settings
   - Pilih tab "Domains"
   - Tambahkan domain custom Anda

2. **Setup DNS**
   - Arahkan domain ke Vercel
   - Ikuti instruksi DNS yang diberikan

### 5. Monitoring dan Updates

1. **Monitoring**
   - Cek dashboard Vercel untuk analytics
   - Monitor error logs jika ada

2. **Updates**
   - Push code baru ke GitHub
   - Vercel akan otomatis redeploy

### Troubleshooting Common Issues

#### Build Failed
```bash
# Periksa di build logs Vercel
# Pastikan semua dependencies ada di package.json
```

#### API Not Working
```bash
# Periksa environment variables
# Pastikan OPENROUTER_API_KEY sudah diset
```

#### Static Files Not Loading
```bash
# Periksa konfigurasi di vercel.json
# Pastikan routing sudah benar
```

### File Structure untuk Vercel

```
smartchat/
├── api/
│   └── index.ts          # Serverless API
├── client/               # Frontend React
│   ├── src/
│   └── index.html
├── server/               # Development server
├── shared/               # Shared types
├── vercel.json          # Vercel config
├── package.json
└── README.md
```

### Environment Variables yang Diperlukan

| Variable | Value | Description |
|----------|-------|-------------|
| `OPENROUTER_API_KEY` | `sk-or-v1-...` | API key OpenRouter |
| `NODE_ENV` | `production` | Environment mode |

### Catatan Penting

1. **Serverless Functions**: Backend berjalan sebagai serverless function di Vercel
2. **Static Files**: Frontend di-build menjadi static files
3. **Cold Start**: Function mungkin lambat di request pertama
4. **Limits**: Vercel free tier memiliki batas usage

### Support

Jika ada masalah:
1. Cek build logs di Vercel dashboard
2. Periksa function logs untuk API errors
3. Pastikan API key masih valid
4. Kontak support Vercel jika perlu