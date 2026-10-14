// import React, { useState } from 'react';
// import { Button, Flex, Space, Table, Tag, Modal, Input } from 'antd';

// const App = () => {
//   const [data, setData] = useState([
//     {
//       key: '1',
//       name: 'John Brown',
//       age: 32,
//       address: 'New York No. 1 Lake Park',
//       tags: ['nice', 'developer'],
//     },
//     {
//       key: '2',
//       name: 'Jim Green',
//       age: 42,
//       address: 'London No. 1 Lake Park',
//       tags: ['kawaii'],
//     },
//     {
//       key: '3',
//       name: 'Joe Black',
//       age: 32,
//       address: 'Sydney No. 1 Lake Park',
//       tags: ['cool', 'teacher'],
//     },
//   ]);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingUser, setEditingUser] = useState(null);

//   const deleteUser = (key) => {
//     setData((prev) => prev.filter((user) => user.key !== key));
//   };

//   const editUser = (user) => {
//     setEditingUser({ ...user });
//     setIsModalOpen(true);
//   };

//   const saveUser = () => {
//     if (!editingUser.name.trim()) return;

//     setData((prev) =>
//       prev.map((user) =>
//         user.key === editingUser.key ? editingUser : user
//       )
//     );

//     setIsModalOpen(false);
//     setEditingUser(null);
//   };

//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//       render: (text) => <a>{text}</a>,
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//     },
//     {
//       title: 'Tags',
//       key: 'tags',
//       dataIndex: 'tags',
//       render: (_, { tags }) => (
//         <Flex gap="small" align="center" wrap>
//           {tags.map((tag) => {
//             let color = tag.length > 5 ? 'geekblue' : 'green';

//             if (tag === 'kawaii') {
//               color = 'volcano';
//             }

//             return (
//               <Tag color={color} key={tag}>
//                 {tag.toUpperCase()}
//               </Tag>
//             );
//           })}
//         </Flex>
//       ),
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (_, elem) => (
//         <Space size="medium">
//           <Button danger onClick={() => deleteUser(elem.key)}>
//             Delete
//           </Button>

//           <Button type="primary" onClick={() => editUser(elem)}>
//             Edit
//           </Button>

//           <Button>Info</Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div>
//       <Table columns={columns} dataSource={data} />

//       <Modal
//         title="Edit user"
//         open={isModalOpen}
//         onOk={saveUser}
//         onCancel={() => {
//           setIsModalOpen(false);
//           setEditingUser(null);
//         }}
//       >
//         {editingUser && (
//           <>
//             <Input
//               value={editingUser.name}
//               onChange={(e) =>
//                 setEditingUser((prev) => ({
//                   ...prev,
//                   name: e.target.value,
//                 }))
//               }
//               placeholder="Name"
//               style={{ marginBottom: 12 }}
//             />

//             <Input
//               type="number"
//               value={editingUser.age}
//               onChange={(e) =>
//                 setEditingUser((prev) => ({
//                   ...prev,
//                   age: Number(e.target.value),
//                 }))
//               }
//               placeholder="Age"
//               style={{ marginBottom: 12 }}
//             />

//             <Input
//               value={editingUser.address}
//               onChange={(e) =>
//                 setEditingUser((prev) => ({
//                   ...prev,
//                   address: e.target.value,
//                 }))
//               }
//               placeholder="Address"
//             />
//           </>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react'
import { Flex, Space, Table, Tag ,Button} from 'antd';

const App = () => {
  const [data ,setdata] = useState([
   {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['kawaii'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }
])
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <Flex gap="small" align="center" wrap>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'kawaii') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </Flex>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="medium">
       <Button onClick={()=> dltuser(record.key)} type="primary">delete</Button>
       
      </Space>
    ),
  },
];
function dltuser(key){
  setdata((prev) => prev.filter((elem) => elem.key !==key))
}

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default App
