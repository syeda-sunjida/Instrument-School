// import { Helmet } from "react-helmet-async";

// // import { FaTrashAlt } from "react-icons/fa";
// import Swal from "sweetalert2";

// // import useClasses from "../../hooks/useClasses";

// const MyClasses = () => {
//     // const [enrolled] = useClasses();
//     // console.log(enrolled);
    
//     // const total = enrolled.reduce((sum, item) => item.price + sum, 0);

//     const handleDelete = item => {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/enrolled/${item._id}`, {
//                     method: 'DELETE'
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         if (data.deletedCount > 0) {
//                             // refetch();
//                             Swal.fire(
//                                 'Deleted!',
//                                 'Your file has been deleted.',
//                                 'success'
//                             )
//                         }
//                     })
//             }
//         })
//     }

//     return (
//         <div className="w-full">
//             <Helmet>
//                 <title>Sinerella | My Enrolled Classes</title>
//             </Helmet>
//             <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
//                 {/* <h3 className="text-3xl">Total Items: {enrolled.length}</h3>
//                 <h3 className="text-3xl">Total Price: ${total}</h3> */}
//                 <button className="btn btn-warning btn-sm">PAY</button>
//             </div>
//             <div className="overflow-x-auto w-full">
//                 <table className="table w-full">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>Instrument</th>
//                             <th>Name</th>
//                             <th>Price</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* {
//                             enrolled.map((item, index) => <tr
//                                 key={item._id}
//                             >
//                                 <td>
//                                     {index + 1}
//                                 </td>
//                                 <td>
//                                     <div className="avatar">
//                                         <div className="mask mask-squircle w-12 h-12">
//                                             <img src={item.image} alt="Avatar Tailwind CSS Component" />
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     {item.name}
//                                 </td>
//                                 <td className="text-end">${item.price}</td>
//                                 <td>
//                                     <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
//                                 </td>
//                             </tr>)
//                         } */}
                        


//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default MyClasses;