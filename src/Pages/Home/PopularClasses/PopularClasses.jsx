import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://singerella-server.vercel.app/classes');
        if (!response.ok) {
          throw new Error('Failed to fetch classes data.');
        }
        const data = await response.json();
        const sortedClasses = data.sort((a, b) => b.students - a.students);
        const popularClasses = sortedClasses.slice(0, 6);
        setPopularClasses(popularClasses);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <section className="mb-12">
      <SectionTitle heading="Our Popular Classes" />

      <div className="grid gap-4 md:grid-cols-3">
        {popularClasses.map((classItem) => (
          <div
            className={`p-4 border rounded-lg shadow ${classItem.availableSeats === 0 ? 'bg-red-200' : ''}`}
            key={classItem._id}
          >
            <img className="w-full h-32 object-cover rounded-md mb-4" src={classItem.image} alt="" />
            <h3 className="text-lg font-bold text-blue-700">{classItem.name}</h3>
            <h3 className="text-lg font-bold text-blue-400">Existing Student: {classItem.students}</h3>
            <p className="text-red-300">Available Seats: {classItem.availableSeats}</p>
            <p className="text-yellow-500">Course fee: ${classItem.price}</p>
            <p className="text-green-500">Instructor: {classItem.instructor}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularClasses;
