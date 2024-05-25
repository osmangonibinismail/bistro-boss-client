import SectionTitle from "../../components/SectionTitle/SectionTitle"
import featured from '../../assets/home/feature.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className="text-white featured-item bg-fixed pt-8 my-20">
            <SectionTitle
                subHeading='check it out' heading='Featured Item'
            ></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2024</p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quis pariatur nostrum assumenda hic quas illum accusamus, minus aperiam ea veritatis ad sapiente ducimus omnis perspiciatis nam quasi culpa deleniti beatae possimus repellendus, totam nisi voluptas sed. Sequi, voluptas enim.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Featured
