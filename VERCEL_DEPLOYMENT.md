# 🚀 Hướng Dẫn Deploy Lên Vercel

Hướng dẫn chi tiết để deploy LongBest Landing Page lên Vercel.

---

## 📋 Yêu Cầu

- ✅ Tài khoản GitHub
- ✅ Tài khoản Vercel (miễn phí tại [vercel.com](https://vercel.com))
- ✅ Code đã được push lên GitHub repository

---

## 🎯 Phương Pháp 1: Deploy qua Vercel Dashboard (Khuyến nghị)

### Bước 1: Chuẩn bị GitHub Repository

1. **Push code lên GitHub** (nếu chưa):
   ```bash
   cd "/Users/admin/long best AI/ssskilll/web-builder/longbest-landing"
   git add .
   git commit -m "feat: Add Vercel deployment config"
   git push origin main
   ```

### Bước 2: Import Project vào Vercel

1. Truy cập [vercel.com/new](https://vercel.com/new)
2. Click **"Add New Project"**
3. Chọn **"Import Git Repository"**
4. Authorize Vercel truy cập GitHub của bạn
5. Tìm và chọn repository: `hoanglong70018-blip/long`

### Bước 3: Configure Project

Vercel sẽ tự động detect:
- ✅ Framework: **Vite**
- ✅ Root Directory: `ssskilll/web-builder/longbest-landing`
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist`

**Quan trọng**: Trong phần **Root Directory**, nhập:
```
ssskilll/web-builder/longbest-landing
```

### Bước 4: Environment Variables (Optional)

Nếu có biến môi trường, thêm tại **Environment Variables**:
- Key: `VITE_API_URL` (ví dụ)
- Value: `https://api.example.com`

### Bước 5: Deploy

1. Click **"Deploy"**
2. Đợi 2-3 phút cho quá trình build
3. ✅ **Hoàn thành!** Bạn sẽ nhận được:
   - Production URL: `https://your-project.vercel.app`
   - Preview URL cho mỗi commit

---

## 🎯 Phương Pháp 2: Deploy qua Vercel CLI

### Bước 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Bước 2: Login

```bash
vercel login
```

### Bước 3: Deploy

```bash
cd "/Users/admin/long best AI/ssskilll/web-builder/longbest-landing"
vercel
```

Trả lời các câu hỏi:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No
- **What's your project's name?** → longbest-landing
- **In which directory is your code located?** → `./`

### Bước 4: Deploy Production

```bash
vercel --prod
```

---

## 🔧 Cấu Hình Chi Tiết

### vercel.json

File này đã được tạo sẵn với cấu hình:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "regions": ["sin1"]
}
```

**Giải thích**:
- `rewrites`: Cho phép React Router hoạt động (SPA routing)
- `buildCommand`: Command để build project
- `outputDirectory`: Folder chứa build output
- `framework`: Vercel tự động optimize cho Vite
- `regions`: Deploy ở Singapore (gần VN nhất)

### vite.config.ts

Đã được cấu hình để tự động detect Vercel:

```typescript
export default defineConfig(() => {
  const isVercel = process.env.VERCEL === '1';
  return {
    plugins: [react()],
    base: isVercel ? '/' : '/long/',
  };
})
```

---

## ✅ Kiểm Tra Build Local

Trước khi deploy, test build locally:

```bash
# Build project
npm run build

# Preview build
npm run preview
```

Nếu build thành công local → sẽ deploy thành công trên Vercel.

---

## 🌐 Cấu Hình Custom Domain (Optional)

### Bước 1: Mua Domain

Mua domain từ:
- Namecheap
- GoDaddy
- Google Domains
- Hoặc mua trực tiếp từ Vercel

### Bước 2: Add Domain trong Vercel

1. Vào project dashboard
2. Click **"Settings"** → **"Domains"**
3. Add domain của bạn (ví dụ: `longbest.com`)
4. Vercel sẽ cung cấp DNS records

### Bước 3: Configure DNS

Thêm records sau vào DNS provider:

**A Record**:
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record**:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Bước 4: Verify

- SSL certificate sẽ tự động được cấp
- Đợi 5-10 phút cho DNS propagate
- Domain sẽ sẵn sàng!

---

## 🔄 Auto Deploy on Push

Sau khi setup xong, mỗi khi bạn push code:

```bash
git add .
git commit -m "Update feature"
git push origin main
```

→ Vercel sẽ **tự động deploy** lên production!

### Preview Deployments

- Mỗi Pull Request → 1 preview URL riêng
- Mỗi branch → 1 preview URL riêng
- Preview URL: `https://your-project-git-branch.vercel.app`

---

## 📊 Monitor & Analytics

### Vercel Dashboard

1. **Deployments**: Xem lịch sử deploy
2. **Analytics**: Traffic, visitors, performance
3. **Logs**: Real-time logs và errors
4. **Speed Insights**: Core Web Vitals

### Enable Analytics

1. Project Settings → Analytics
2. Enable **Web Analytics**
3. Miễn phí cho 100k pageviews/tháng

---

## 🐛 Xử Lý Lỗi Thường Gặp

### Lỗi 1: Build Failed - "Command not found"

**Giải pháp**:
```bash
# Xóa node_modules và reinstall
rm -rf node_modules
npm install
npm run build
```

### Lỗi 2: 404 on Routes (React Router)

**Giải pháp**: Đảm bảo `vercel.json` có:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Lỗi 3: Build quá lâu

**Giải pháp**:
- Check `.vercelignore` để exclude files không cần
- Optimize dependencies trong `package.json`

### Lỗi 4: Root Directory Wrong

**Giải pháp**: Trong Vercel settings, set:
```
Root Directory: ssskilll/web-builder/longbest-landing
```

---

## 🎨 Best Practices

### 1. Environment Variables

Không commit sensitive data, dùng env vars:
```bash
# .env.production
VITE_API_URL=https://api.longbest.com
VITE_GOOGLE_SHEETS_URL=https://script.google.com/...
```

### 2. Build Optimization

```json
{
  "scripts": {
    "build": "tsc -b && vite build",
    "build:analyze": "vite build --mode analyze"
  }
}
```

### 3. Caching Strategy

Vercel tự động cache:
- ✅ Static assets (images, fonts)
- ✅ Build outputs
- ✅ Node modules

---

## 📱 Testing Production

Sau khi deploy, test các tính năng:

- [ ] Landing page load chính xác
- [ ] Hero animations hoạt động
- [ ] Popup email mở được
- [ ] Email submit lên Google Sheets
- [ ] Toast notifications hiển thị
- [ ] Blog page load chính xác
- [ ] Calendar page hoạt động
- [ ] Routing (/, /blog, /calendar) đúng
- [ ] Mobile responsive
- [ ] Lighthouse score > 90

---

## 📞 Support

Nếu gặp vấn đề:

1. Check [Vercel Docs](https://vercel.com/docs)
2. Check deployment logs trong Vercel dashboard
3. Check browser console (F12)
4. Vercel Discord community

---

## 🎉 Deployment Checklist

Trước khi deploy production:

- [ ] Test build locally (`npm run build`)
- [ ] Test preview (`npm run preview`)
- [ ] Update Google Sheets URL trong `googleSheets.ts`
- [ ] Commit all changes
- [ ] Push to GitHub
- [ ] Import project vào Vercel
- [ ] Set correct Root Directory
- [ ] Deploy!
- [ ] Test production URL
- [ ] Configure custom domain (optional)
- [ ] Enable analytics
- [ ] Share với team! 🚀

---

**✨ Deploy thành công! Website của bạn đã live!**

Production URL sẽ có dạng: `https://longbest-landing.vercel.app`
