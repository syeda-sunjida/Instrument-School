import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/instructors");
        if (!response.ok) {
          throw new Error("Failed to fetch instructors data.");
        }
        const data = await response.json();
        setInstructors(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <SectionTitle heading="Our Instructors" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="bg-gray-200 p-4 rounded">
            <img src={instructor.image} alt={instructor.name} className="w-full h-48 object-cover" />
            <h3 className="text-xl font-bold mt-2">Name:{instructor.name}</h3>
            <p className="text-gray-500">Claass: {instructor.specialist}</p>
            <p className="text-gray-500">Email: {instructor.email}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
