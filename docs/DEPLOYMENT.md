# Hướng dẫn cập nhật Website (veo3tool.com)

Hệ thống đã được thiết lập tự động hóa. Để cập nhật trang web, bạn chỉ cần làm theo các bước đơn giản sau:

## Cách 1: Sử dụng lệnh (Khuyên dùng)

Mỗi khi bạn sửa code xong và muốn "đẩy" lên web:

1. Mở Terminal.
2. Tại thư mục dự án, chạy lệnh:
   ```bash
   pnpm deploy
   ```
   Lệnh này sẽ tự động:
   - Build code mới nhất (`pnpm build`).
   - Upload lên Cloudflare (`wrangler deploy`).
   - Xóa cache và cập nhật nội dung trên tên miền `veo3tool.com`.

## Cách 2: Thủ công (Nếu muốn kiểm soát từng bước)

1. **Build code:**
   ```bash
   pnpm build
   ```
   (Tạo thư mục `dist` chứa file để upload)

2. **Upload:**
   ```bash
   npx wrangler deploy
   ```

## Kiểm tra
Sau khi chạy xong, truy cập: [https://veo3tool.com](https://veo3tool.com) để xem thay đổi.
