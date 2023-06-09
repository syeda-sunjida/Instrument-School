import SectionTitle from "../../../components/SectionTitle";
import useClasses from "../../../hooks/useClasses";
import Classes from "../../Shared/Classes/Classes";




const PopularClasses = () => {
    const [menu] = useClasses();
    const popular = menu.filter(item => item.category === 'popular');
    
    return (
        <section className="mb-12"> 
            <SectionTitle
                heading="Our Popular Classes"
            ></SectionTitle> 
            <div className="grid md:grid-cols-2 gap-10 border-s-orange-200-orange-400">
                {
                    popular.map(item => <Classes
                        key={item._id}
                        item={item}
                    > </Classes>)
                }
            </div>
            {/* <button className="btn btn-warning border-0 border-b-4 mt-4 ">View All Classes</button> */}
        </section>
    );
};

export default PopularClasses;