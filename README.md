# Project xây dựng api lấy thông tin sản phẩm và danh mục sản phẩm

## Quá trình setup và build source

-B1: Cài đặt package express bằng cách mở terminal gõ lệnh npm init, npm install express để cài đặt package.json về.

-B2: Xây dựng setup source project theo mô hình MVC gồm folder controller, model, route,start_up, db.

-B3: Cài đặt các gói package cần sử dụng cho project như .env, mongoose... Trong đó .env là thư viện set tự động biến môi trường toàn cục như link kết nối.database, kết nối firebase... cần thiết cho project mà không cần phải viết nhiều lần.

-B4: Viết file index chính là nơi setup để start project trên localhost với port:3000. Trong đó index là nơi import các đường dẫn từ các folder khác vào.

-B5: Sau khi setup hoàn tất bắt đầu start server bằng lệnh npm start.

## Công nghệ, ngôn ngữ

-Javascript

-Typescript

-Node.Js

-Express

-Github

-Mongodb-Compass

## Mô tả project

-Folder model:là nơi xây dựng dữ liệu các filed, để thực hiện kết nối, để lưu dữ liệu vào database.

-Folder controller:nơi xử lý code các thao tác dữ liệu thêm, xóa, sửa, lọc dữ liệu...

-Folder route:nơi import đường dẫn từ controller thực hiện các phương thức get,post,put,delete... từ controllerr.

-Folder start_up: nơi import đường dẫn từ route thực hiện định tuyến cấu hình đường đi api, đường dẫn url.

-Folder db(database): nơi setup code kết nối với link database được tạo từ Mongodb Atlas.

-Thiết kế gồm model product và model Category_Product. Trong model product thêm 1 field category để khi lấy danh sách sản phẩm có thể populate thông tin từ model category.

-Field parentId trong model Categoty_product khi tạo danh mục là danh các danh mục con trong danh mục cha. Ví dụ: Điện thoại danh mục cha là SamSung danh mục con là SamSung galaxy s5, s6...

## Cài đặt

Sau khi tạo project
Cài đặt project

```sh
npm init
npm install express
npm install mongoose
npm install dotenv
...
```

Sau khi clone project về
Cài đặt biến môi trường khi clone về tạo file .env bỏ đường dẫn

```sh
DB_CONNECT=mongodb+srv://manh:manh@cluster0.mkyci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

```sh
cd name project
npm install
npm start
```

##Kết quả:
Localhost
|Postman|[http://localhost:3000/api/category]|

|Postman|[http://localhost:3000/api/product]|

|Heroku|[https://test-review123.herokuapp.com/api/product]|

|Heroku|[https://test-review123.herokuapp.com/api/category]|
