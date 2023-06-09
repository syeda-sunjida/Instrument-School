

const Classes = ({ item }) => {
    const { name, instructor, availableSeats, price, image } = item;
    return (
        <div className="flex space-x-2 border-s-violet-200">
            <img style={{ border: '' }} className="w-[200px] h-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-xl text-blue-700">{name} </h3> <br />
                <p className="text-red-500" >Available Seats: {availableSeats}</p>
            </div>

            <p className="text-yellow-500">Course fee= ${price}</p>
            <br />
            <p className="text-green-500">Instructor: {instructor}</p>
        </div>
    );
};

export default Classes;