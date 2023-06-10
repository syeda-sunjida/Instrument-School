import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const MySelectedClasses = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/enrolled");
        if (!response.ok) {
          throw new Error("Failed to fetch selected classes data.");
        }
        const data = await response.json();
        setSelectedClasses(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteClass = (classId) => {
    // Add logic here to handle deleting the class from the selected classes
    console.log("Deleted class with ID:", classId);
  };

  return (
    <div>
      <h2>My Selected Classes</h2>
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