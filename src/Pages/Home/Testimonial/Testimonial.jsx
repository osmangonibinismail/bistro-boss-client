import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { RiSingleQuotesL } from "react-icons/ri";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle
                subHeading='What Our clients say' heading='testimonials'
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <div className="flex mt-2 mb-2">
                            <p className="font-bold text-6xl"><RiSingleQuotesL /></p>
                            <p className="font-bold text-6xl"><RiSingleQuotesL /></p>
                            </div>
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    )
}

export default Testimonial
