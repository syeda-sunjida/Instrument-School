import SectionTitle from "../../../components/SectionTitle";

import useInstructors from "../../../hooks/useInstructors";

import Instructors from "../../Shared/Instrcutors/Instructors";




const PopularInstructors = () => {
    const [menu] = useInstructors();
    const popular = menu.filter(item => item.category === 'popular');
    
    return (
        <section className="mb-12">
            <SectionTitle
                heading="Our Popular Instructors"
            ></SectionTitle> 
            <div className="grid md:grid-cols-2 gap-10 border-s-orange-200-orange-400">
                {
                    popular.map(item => <Instructors
                        key={item._id}
                        item={item}
                    > </Instructors>)
                }
            </div>
           
        </section>
    );
};

export default PopularInstructors;