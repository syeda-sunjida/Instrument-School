import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import SectionTitle from '../../components/SectionTitle';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://singerella-server-syeda-sunjida.vercel.app/classes');
        if (!response.ok) {
          throw new Error('Failed to fetch classes data.');
        }
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleAddToMyClass = async (classItem) => {
    // Check if the user is logged in
    if (!user) {
      // User is not logged in, redirect to the login page
      window.location.href = '/login'; // Redirect using window.location.href
      return;
    }

    const newClassItem = { ...classItem };
    delete newClassItem._id;

    try {
      const response = await fetch('https://singerella-server-syeda-sunjida.vercel.app/enrolled', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newClassItem),
      });

      if (!response.ok) {
        throw new Error('Failed to add class to My Classes.');
      }

      console.log('Added class with ID:', classItem._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SectionTitle heading="Our Popular Classes" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {classes.map((classItem) => (
          <div
            key={classItem._id}
            className={`bg-gray-200 p-4 rounded ${classItem.availableSeats === 0 ? 'bg-red-500' : ''}`}
          >
            <img src={classItem.image} alt={classItem.name} className="w-full h-48 object-cover" />
            <h3 className="text-xl font-bold mt-2">{classItem.name}</h3>
            <p className="text-gray-500">{classItem.instructor}</p>
            <p className="text-gray-500">Available Seats: {classItem.availableSeats}</p>
            <p className="text-gray-500">Price: {classItem.price}</p>
            <button
              className="btn btn-primary mt-4"
              onClick={() => handleAddToMyClass(classItem)}
              disabled={classItem.availableSeats === 0}
            >
              Add to My Class
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
