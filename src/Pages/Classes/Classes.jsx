import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/classes");
        if (!response.ok) {
          throw new Error("Failed to fetch classes data.");
        }
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div> 
      <SectionTitle heading="Our Popular Classes" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {classes.map((classItem) => (
          <div key={classItem._id} className="bg-gray-200 p-4 rounded">
            <img src={classItem.image} alt={classItem.name} className="w-full h-48 object-cover" />
            <h3 className="text-xl font-bold mt-2">{classItem.name}</h3>
            <p className="text-gray-500">{classItem.instructor}</p>
            <p className="text-gray-500">Available Seats: {classItem.availableSeats}</p>
            <p className="text-gray-500">Price: {classItem.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
