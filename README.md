## Xây dựng api get thông tin sản phẩm và danh mục sản phẩm

\*\* B1: Xây dựng source project theo mô hình MVC gồm folder controller, model, route,start_up

\*\* Model: xây dựng dữ liệu, để thực hiện kết nối database

\*\* Controller: xử lý code các thao tác dữ liệu thêm, xóa, sửa, lọc dữ liệu...

\*\* Route: thực hiện các phương thức get,post,put,delete... từ controller

\*\*start_up: nơi thực hiện định tuyến đường đi, đường dẫn url

\*\* Thiết kế gồm model product và model Category_Product. Trong model product thêm 1 field category để khi lấy danh sách sản phẩm có thể populate thông tin từ model category.

\*\* Field parentId trong model Categoty_product khi tạo danh mục là danh các danh mục con trong danh mục cha. Ví dụ: Điện thoại danh mục cha là SamSung danh mục con là SamSung galaxy s5, s6...

\*\* Kết nối với database qua mongodb.

\*\* Sau khi clone project về tạo file .env

\*\* Trong file .env bỏ đường dẫn kết nối database vào khi được tạo thành công trên Web mongoDB Atlas

\*\* DB_CONNECT=mongodb+srv://manh:manh@cluster0.mkyci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

\*\* Tiếp theo dùng lệnh npm install để cài đặt => npm start để chạy.

\*\* Postman:

http://localhost:3000/api/category
http://localhost:3000/api/product
