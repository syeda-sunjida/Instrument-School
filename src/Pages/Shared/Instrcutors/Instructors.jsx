

const Instructors = ({ item }) => {
    const { name,   email, image, specialist } = item;
    return (
        <div className="flex space-x-2 border-s-violet-200">
            <img style={{ border: '' }} className="w-[200px] h-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-xl text-blue-700">{name} </h3> <br />
                <p className="text-red-500" >Class: {specialist}</p>

            </div> 

            
            <br />
            <p >  {email}</p>
        </div>
    );
};

export default Instructors;