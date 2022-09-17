export const userColumns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 70 
  },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar"/>
          {params.row.username}
        </div>
      )
    }
  },
  {
    field: "email",
    headerName: "Email",
    width: 230
  },
  {
    field: "age",
    headerName: "Age",
    width: 100
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
      )
    }
  }
];

// temporary data
export const userRows = [
  {
    id: 1,
    username: "Gojo",
    img: "https://lzd-img-global.slatic.net/g/p/aa9aee7a3f175f0d76ae2563790feecf.jpg_720x720q80.jpg_.webp",
    status: "active",
    email: "gojo@gmail.com",
    age: 30
  },
  {
    id: 2,
    username: "Kakashi",
    img: "https://lzd-img-global.slatic.net/g/p/aa9aee7a3f175f0d76ae2563790feecf.jpg_720x720q80.jpg_.webp",
    status: "passive",
    email: "kakashi@gmail.com",
    age: 32
  },
  {
    id: 3,
    username: "Levi",
    img: "https://lzd-img-global.slatic.net/g/p/aa9aee7a3f175f0d76ae2563790feecf.jpg_720x720q80.jpg_.webp",
    status: "pending",
    email: "levi@gmail.com",
    age: 28
  },
  {
    id: 4,
    username: "Naruto",
    img: "https://lzd-img-global.slatic.net/g/p/aa9aee7a3f175f0d76ae2563790feecf.jpg_720x720q80.jpg_.webp",
    status: "pending",
    email: "naruto@gmail.com",
    age: 19
  },
  {
    id: 5,
    username: "Sasuke",
    img: "https://lzd-img-global.slatic.net/g/p/aa9aee7a3f175f0d76ae2563790feecf.jpg_720x720q80.jpg_.webp",
    status: "active",
    email: "sasuke@gmail.com",
    age: 19
  },
  {
    id: 6,
    username: "Lena",
    img: "https://lzd-img-global.slatic.net/g/p/aa9aee7a3f175f0d76ae2563790feecf.jpg_720x720q80.jpg_.webp",
    status: "passive",
    email: "lena@gmail.com",
    age: 21
  },
  {
    id: 7,
    username: "Alen",
    img: "https://lzd-img-global.slatic.net/g/p/aa9aee7a3f175f0d76ae2563790feecf.jpg_720x720q80.jpg_.webp",
    status: "active",
    email: "alen@gmail.com",
    age: 25
  },
  {
    id: 8,
    username: "Mikasa",
    img: "https://lzd-img-global.slatic.net/g/p/aa9aee7a3f175f0d76ae2563790feecf.jpg_720x720q80.jpg_.webp",
    status: "pending",
    email: "mikasa@gmail.com",
    age: 25
  },
  {
    id: 9,
    username: "Sakura",
    img: "https://lzd-img-global.slatic.net/g/p/aa9aee7a3f175f0d76ae2563790feecf.jpg_720x720q80.jpg_.webp",
    status: "pending",
    email: "sakura@gmail.com",
    age: 24
  },
  {
    id: 10,
    username: "Ichira",
    img: "https://lzd-img-global.slatic.net/g/p/aa9aee7a3f175f0d76ae2563790feecf.jpg_720x720q80.jpg_.webp",
    status: "passive",
    email: "ichira@gmail.com",
    age: 29
  },
];