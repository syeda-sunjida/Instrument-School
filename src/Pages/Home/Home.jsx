import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructor/PopularInstructor";
import Extra from "./Extra/Extra";


const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Singerella | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Extra></Extra>
        </div>
    );
};

export default Home;