# 🚀 Deploy Landing Page Lên Cloudflare Pages

## Tổng Quan
Deploy Neo-Brutalist AI Video Tool landing page lên **Cloudflare Pages** với tên miền **veo3tool.com**.

---

## ✅ Yêu Cầu Trước Khi Deploy

- [x] Code đã push lên GitHub: `https://github.com/hoanglong70018-blip/long`
- [x] Cloudflare account: `Hoanglong70018@gmail.com`
- [x] Domain veo3tool.com đã add vào Cloudflare
- [x] DNS đã setup (Worker route sẵn sàng)

---

## 📋 Bước 1: Tạo Cloudflare Pages Project

### 1.1 Truy cập Cloudflare Dashboard
1. Đăng nhập: https://dash.cloudflare.com
2. Vào **Workers & Pages** (sidebar trái)
3. Click **Create application** → **Pages** → **Connect to Git**

### 1.2 Connect GitHub Repository
1. Click **Connect GitHub**
2. Authorize Cloudflare Pages (nếu chưa)
3. Chọn repository: **hoanglong70018-blip/long**
4. Click **Begin setup**

### 1.3 Configure Build Settings

**Project name:** `longbest-landing` (hoặc `veo3tool-landing`)

**Production branch:** `main`

**Build settings:**
```
Framework preset: Vite
Build command: pnpm build
Build output directory: dist
Root directory: ssskilll/web-builder/longbest-landing
```

**Environment variables:**
```
NODE_VERSION = 18
```

### 1.4 Deploy!
Click **Save and Deploy** → Chờ 2-3 phút build xong.

---

## 📋 Bước 2: Setup Custom Domain veo3tool.com

### 2.1 Add Custom Domain
1. Sau khi deploy xong, vào **Pages project** → **Custom domains**
2. Click **Set up a custom domain**
3. Nhập: `veo3tool.com`
4. Click **Continue**

### 2.2 Cloudflare Tự Động Setup DNS
Cloudflare sẽ tự động:
- Tạo CNAME record: `veo3tool.com` → `longbest-landing.pages.dev`
- Enable Cloudflare proxy (orange cloud)
- SSL/TLS certificate tự động

### 2.3 Add www Subdomain (Optional)
1. Click **Add a domain**
2. Nhập: `www.veo3tool.com`
3. Cloudflare tự động tạo CNAME record

---

## 📋 Bước 3: Verify Deployment

### 3.1 Check URLs
- **Cloudflare Pages URL:** `https://longbest-landing.pages.dev`
- **Custom Domain:** `https://veo3tool.com`
- **WWW Domain:** `https://www.veo3tool.com`

### 3.2 Test Landing Page
Mở browser và test:
1. Hero Section hiển thị đúng
2. All 8 sections load
3. Neon effects hoạt động
4. Responsive trên mobile
5. Font Barlow hiển thị tiếng Việt tốt

---

## 📋 Bước 4: Configure Production Settings

### 4.1 Enable HTTPS Only
1. Vào **SSL/TLS** → **Overview**
2. Chọn mode: **Full (strict)**
3. Bật **Always Use HTTPS**

### 4.2 Performance Optimization
1. Vào **Speed** → **Optimization**
2. Bật:
   - Auto Minify (JS, CSS, HTML)
   - Brotli compression
   - Early Hints
   - Rocket Loader (optional)

### 4.3 Caching Rules
1. Vào **Caching** → **Configuration**
2. Browser Cache TTL: **4 hours**
3. Create Page Rule cho static assets:
   ```
   veo3tool.com/assets/*
   Cache Level: Cache Everything
   Edge Cache TTL: 1 month
   ```

---

## 🔄 Tự Động Deploy Khi Push Code

### Workflow Tự Động
Cloudflare Pages đã tự động setup CI/CD:

1. **Push code lên GitHub:**
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```

2. **Cloudflare tự động:**
   - Detect commit mới
   - Build project với Vite
   - Deploy lên production
   - Update veo3tool.com
   - **Thời gian:** ~2-3 phút

### Preview Deployments
Mỗi Pull Request sẽ có preview URL riêng:
- **Format:** `https://<commit-hash>.longbest-landing.pages.dev`

---

## 🛠️ Troubleshooting

### Issue 1: Build Failed
**Lỗi:** `Command failed: pnpm build`

**Fix:**
1. Check `package.json` có script `build`
2. Verify Node version = 18
3. Check dependencies trong `pnpm-lock.yaml`

### Issue 2: 404 on Routes
**Lỗi:** React Router routes return 404

**Fix:**
1. Tạo file `public/_redirects`:
   ```
   /*    /index.html   200
   ```
2. Hoặc dùng Cloudflare Functions `_routes.json`

### Issue 3: Font Not Loading
**Lỗi:** Barlow font không hiển thị

**Fix:**
1. Check Google Fonts import trong `src/index.css`
2. Verify CSP headers không block fonts

### Issue 4: Images Not Found
**Lỗi:** Images trong `/public/illustrations/` 404

**Fix:**
1. Commit images vào Git
2. Hoặc dùng CDN external

---

## 📊 Monitoring & Analytics

### Cloudflare Analytics
1. **Workers & Pages** → **longbest-landing** → **Analytics**
2. Track:
   - Page views
   - Requests
   - Bandwidth
   - Performance metrics

### Add Google Analytics (Optional)
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

---

## 🔐 Security Headers

### Add Headers via _headers File
Tạo file `public/_headers`:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

## 💰 Pricing

**Cloudflare Pages Free Tier:**
- ✅ Unlimited sites
- ✅ Unlimited bandwidth
- ✅ 500 builds/month
- ✅ 1 concurrent build
- ✅ Free SSL certificate
- ✅ Custom domains

**Paid Plan ($20/month):**
- Advanced build configuration
- More concurrent builds
- Build minutes rollover

---

## 📝 Checklist Deploy Hoàn Chỉnh

- [ ] Push code lên GitHub
- [ ] Create Cloudflare Pages project
- [ ] Connect GitHub repo
- [ ] Configure build settings (Vite, pnpm build, dist)
- [ ] Add custom domain veo3tool.com
- [ ] Verify DNS records
- [ ] Enable HTTPS
- [ ] Test all sections load correctly
- [ ] Test responsive mobile
- [ ] Enable performance optimization
- [ ] Setup caching rules
- [ ] Monitor first deployment
- [ ] Share URL với team/users

---

## 🎉 Deploy Thành Công!

Sau khi hoàn tất, landing page sẽ live tại:
- **Production:** https://veo3tool.com
- **Preview:** https://longbest-landing.pages.dev

Mỗi lần push code lên `main` branch, Cloudflare sẽ tự động build và deploy trong 2-3 phút!

---

## 📞 Support

**Cloudflare Docs:**
- Pages: https://developers.cloudflare.com/pages
- Custom Domains: https://developers.cloudflare.com/pages/platform/custom-domains
- Build Configuration: https://developers.cloudflare.com/pages/platform/build-configuration

**Issues:** GitHub Issues tại repo hoặc Cloudflare Community
