
// import { Link } from 'react-router-dom';

import Classes from "../../Shared/Classes/Classes";
//title chilo items er pashe
const ClassCategory = ({items}) => {
    return (
        <div className='pt-8'>
            
            
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <Classes
                        key={item._id}
                        item={item}
                    ></Classes>)
                }
            </div>
            {/* <Link to={`/order/${title}`}>
            <button className="btn btn-warning border-0 border-b-4 mt-4">Enroll Now</button>
            </Link> */}
        </div>
    );
};

export default ClassCategory;