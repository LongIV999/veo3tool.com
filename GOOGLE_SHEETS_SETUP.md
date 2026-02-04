# 📊 Hướng Dẫn Kết Nối Google Sheets

Hướng dẫn này sẽ giúp bạn thiết lập kết nối Google Sheets để thu thập email từ popup.

## 🎯 Tổng Quan

Khi khách hàng điền email vào popup, dữ liệu sẽ được tự động lưu vào Google Sheets với các thông tin:
- **Timestamp**: Thời gian submit
- **Email**: Email của khách hàng
- **Source**: Nguồn (Hero, Navbar, Pricing, etc.)
- **User Agent**: Thông tin thiết bị/trình duyệt

---

## 📝 Bước 1: Tạo Google Sheet

1. Truy cập [Google Sheets](https://sheets.google.com)
2. Tạo sheet mới và đặt tên: **"LongBest Email Leads"** (hoặc sử dụng [Sheet này](https://docs.google.com/spreadsheets/d/1y_9YONmHzq6Ju5pqzqeYFApQv9zPvqRB4EMakmOvG7E/edit?usp=sharing))
3. Tại dòng 1, tạo các header:
   ```
   A1: Timestamp
   B1: Email
   C1: Source
   D1: User Agent
   ```

---

## ⚙️ Bước 2: Tạo Google Apps Script

1. Trong Google Sheet, click **Extensions** → **Apps Script**
2. Xóa code mặc định
3. Copy và paste đoạn code sau:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);

    // Get current timestamp
    var timestamp = new Date();

    // Append row with data
    sheet.appendRow([
      timestamp,
      data.email || '',
      data.source || 'Unknown',
      data.userAgent || ''
    ]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Email saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Google Sheets API is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

4. Click **Save** (💾)
5. Đặt tên project: **"LongBest Email Collector"**

---

## 🚀 Bước 3: Deploy Web App

1. Click **Deploy** → **New deployment**
2. Click ⚙️ icon **"Select type"** → chọn **Web app**
3. Điền thông tin deployment:
   - **Description**: `Email collection endpoint`
   - **Execute as**: **Me** (your-email@gmail.com)
   - **Who has access**: **Anyone**
4. Click **Deploy**
5. Click **Authorize access** và cấp quyền cho script
6. **Copy Web app URL** (sẽ có dạng: `https://script.google.com/macros/s/ABC.../exec`)

⚠️ **LƯU Ý QUAN TRỌNG**: Giữ URL này, bạn sẽ cần nó ở bước tiếp theo!

---

## 🔧 Bước 4: Cấu Hình Frontend

1. Mở file: `src/services/googleSheets.ts`
2. Tìm dòng:
   ```typescript
   const GOOGLE_SHEETS_WEB_APP_URL = 'YOUR_WEB_APP_URL_HERE';
   ```
3. Thay `YOUR_WEB_APP_URL_HERE` bằng URL bạn vừa copy ở bước 3
4. Ví dụ:
   const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwwys1Majiem9Z_HDbRQ06yPXOUqDzlka7KoulLGqg-x-xGSotVhcDuUrayLpApKJyc/exec';
5. **Save file**

---

## ✅ Bước 5: Test Kết Nối

1. Chạy development server:
   ```bash
   npm run dev
   ```

2. Mở website và test popup:
   - Click "Bắt đầu miễn phí" hoặc "Start Building"
   - Điền email test (ví dụ: `test@example.com`)
   - Tick checkbox điều khoản
   - Click "Bắt Đầu Ngay"

3. Kiểm tra Google Sheet:
   - Mở lại Google Sheet của bạn
   - Bạn sẽ thấy dòng mới với:
     - Timestamp hiện tại
     - Email bạn vừa nhập
     - Source: "Popup"
     - User Agent của trình duyệt

---

## 🐛 Xử Lý Lỗi Thường Gặp

### Lỗi 1: "Access denied" khi deploy
**Giải pháp**:
- Đảm bảo bạn đã authorize access
- Kiểm tra "Who has access" = **Anyone**

### Lỗi 2: Data không xuất hiện trong sheet
**Giải pháp**:
- Kiểm tra Web App URL đã đúng chưa
- Mở Console (F12) → Network tab để xem request
- Kiểm tra Apps Script logs: Apps Script Editor → Executions

### Lỗi 3: CORS error
**Giải pháp**:
- Đảm bảo đang dùng `mode: 'no-cors'` trong fetch (đã có sẵn)
- Google Apps Script Web App không hỗ trợ CORS theo cách thông thường

---

## 🎨 Tùy Chỉnh

### Thêm cột mới trong Google Sheet

1. Thêm header vào dòng 1 (ví dụ: cột E là "Phone")
2. Cập nhật Apps Script:
   ```javascript
   sheet.appendRow([
     timestamp,
     data.email || '',
     data.source || 'Unknown',
     data.userAgent || '',
     data.phone || '' // Thêm dòng này
   ]);
   ```
3. Cập nhật `src/services/googleSheets.ts`:
   ```typescript
   interface EmailData {
       email: string;
       source?: string;
       userAgent?: string;
       phone?: string; // Thêm dòng này
   }
   ```

### Thêm source tracking cho các nút khác

Khi gọi `openEmailPopup()`, truyền source:
```typescript
// Ví dụ trong Pricing component
const { openEmailPopup } = usePopup();
<button onClick={() => openEmailPopup('Pricing')}>
  Mua Ngay
</button>
```

---

## 📊 Xem Báo Cáo

Trong Google Sheet, bạn có thể:
- **Lọc theo source**: Data → Create a filter
- **Tạo chart**: Insert → Chart
- **Export data**: File → Download → CSV/Excel

---

## 🔒 Bảo Mật

- ✅ Apps Script chạy với quyền của bạn (your Google account)
- ✅ Chỉ có bạn mới xem được data trong Sheet
- ✅ URL endpoint công khai nhưng chỉ nhận POST requests
- ⚠️ Không lưu trữ thông tin nhạy cảm (mật khẩu, thẻ tín dụng)

---

## 📞 Hỗ Trợ

Nếu gặp vấn đề, kiểm tra:
1. Console log (F12 → Console)
2. Network tab (F12 → Network)
3. Apps Script Executions log

---

**✨ Setup xong! Giờ bạn đã có hệ thống thu thập email tự động với Google Sheets!**
