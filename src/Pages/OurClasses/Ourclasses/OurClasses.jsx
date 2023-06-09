import { Helmet } from 'react-helmet-async';



import SectionTitle from '../../../components/SectionTitle';

import useClasses from '../../../hooks/useClasses';
import ClassCategory from '../ClassCategory/ClassCategory';


const OurClasses = () => {
    const [classes] = useClasses();
    const popular = classes.filter(item => item.category === 'popular');
    const classic = classes.filter(item => item.category === 'classic');
    const famous = classes.filter(item => item.category === 'famous'); 
    
    return (
        <div>
            <Helmet>
                <title>Singerella | Our Classes</title>
            </Helmet>
           
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Our Classes"></SectionTitle>
           
            {/* dessert menu items  */}
            <ClassCategory items={popular} title="Popular" ></ClassCategory>
            <ClassCategory items={classic} title="Classic" ></ClassCategory>
            <ClassCategory items={famous} title="Famous" ></ClassCategory>
            
        </div>
    );
};

export default OurClasses;