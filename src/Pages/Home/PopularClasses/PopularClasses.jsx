import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/classes.json");
        const data = await response.json();
        const popularClasses = data.filter((classItem) => classItem.category === "popular");
        setPopularClasses(popularClasses);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="mb-12">
      <SectionTitle heading="Our Popular Classes" />

      <div className="grid gap-4 md:grid-cols-3">
        {popularClasses.map((classItem) => (
          <div className="p-4 border rounded-lg shadow" key={classItem._id}>
            <img className="w-full h-32 object-cover rounded-md mb-4" src={classItem.image} alt="" />
            <h3 className="text-lg font-bold text-blue-700">{classItem.name}</h3>
            <p className="text-red-500">Available Seats: {classItem.availableSeats}</p>
            <p className="text-yellow-500">Course fee: ${classItem.price}</p>
            <p className="text-green-500">Instructor: {classItem.instructor}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularClasses;
