import Featured from "../../Featured/Featured"
import PopularMenu from "../../PopularMenu/PopularMenu"
import Banner from "../Banner/Banner"
import Category from "../Category/Category"
import Testimonial from "../Testimonial/Testimonial"
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
            <h2>this is home</h2>
        </div>
    )
}

export default Home
