export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "avatar",
    headerName: "Ảnh đại diện",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.avatar} alt="avatar" />
        </div>
      );
    },
  },
  {
    field: "username",
    headerName: "Tên người dùng",
    width: 125,
  },
  {
    field: "email",
    headerName: "Địa chỉ email",
    width: 150,
  },
  {
    field: "full_name",
    headerName: "Họ và tên",
    width: 180,
  },
  
  {
    field: "phone_number",
    headerName: "Số điện thoại",
    width: 100,
  },
  {
    field: "address",
    headerName: "Địa chỉ",
    width: 100,
  },
  {
    field: "isAdmin",
    headerName: "Quyền quản trị",
    width: 120,
    renderCell: (params) => {
      return (
        <div>
          {params.row.isAdmin? "Quản trị viên" : "Người dùng"}
        </div>
      );
    },
  },
  {
    field: "createdAt",
    headerName: "Ngày tạo",
    width: 100,
  },
  {
    field: "updatedAt",
    headerName: "Ngày cập nhật",
    width: 100,
  }
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "image",
    headerName: "Ảnh bìa",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image} alt="image" />
        </div>
      );
    },
  },
  {
    field: "title",
    headerName: "Tiêu đề",
    width: 200,
  },
  {
    field: "author",
    headerName: "Tác giả",
    width: 150,
  },
  {
    field: "price",
    headerName: "Giá tiền",
    width: 100,
  },
  
  {
    field: "publication_date",
    headerName: "Ngày xuất bản",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Ngày tạo",
    width: 150,
  },
  {
    field: "updatedAt",
    headerName: "Ngày cập nhật",
    width: 150,
  }
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
  {
    id: "3fbc7e57-d622-4f1c-bd0f-ef7575b62955",
    username: "tuyetvi1",
    email: "tuyetvi1@gmail.com",
    phone_number: "0123456789",
    full_name: "Nguyễn Ngọc Tuyết Vi",
    address: "địa chỉ",
    avatar: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    isAdmin: true,
    createdAt: "2023-04-25T14:22:07.000Z",
    updatedAt: "2023-04-25T14:22:07.000Z",
  }
];
