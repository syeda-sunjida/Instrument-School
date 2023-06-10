import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const MySelectedClasses = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://singerella-server-syeda-sunjida.vercel.app/enrolled");
      if (!response.ok) {
        throw new Error("Failed to fetch selected classes data.");
      }
      const data = await response.json();
      setSelectedClasses(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClass = async (_id) => {
    try {
      const response = await fetch(`https://singerella-server-syeda-sunjida.vercel.app/enrolled/${_id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete class from My Selected Classes.");
      }

      console.log("Deleted class with ID:", _id);
      // Refresh the selected classes data
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const getTotalPrice = () => {
    return selectedClasses.reduce((total, classItem) => {
      return total + classItem.price;
    }, 0);
  };

  const handlePay = () => {
    // Implement the logic for payment
    console.log("Payment logic goes here");
  };

  return (
    <div>
      <h2>My Selected Classes</h2>
      <div style={{ marginBottom: "20px" }}>
        Total Price: ${getTotalPrice().toFixed(2)}
      </div>
      <button className="btn btn-primary" onClick={handlePay}>
        Pay
      </button>
      <table className="table" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Index</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedClasses.map((classItem, index) => (
            <tr key={classItem._id}>
              <td>{index + 1}</td>
              <td>
                <img src={classItem.image} alt="" className="w-16 h-16" />
              </td>
              <td>{classItem.name}</td>
              <td>{classItem.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteClass(classItem._id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default MySelectedClasses;
