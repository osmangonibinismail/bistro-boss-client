import FoodCard from "../../../components/FoodCard/FoodCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div>

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-5 gap-10'>
                    {
                        items.map(item => <FoodCard
                            key={item._id}
                            item={item}
                        ></FoodCard>)
                    }
                    </div>
                    
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default OrderTab
