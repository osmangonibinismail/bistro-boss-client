import SectionTitle from "../../components/SectionTitle/SectionTitle"
import { useEffect, useState } from "react"
import MenuItem from "../Shard/MenuItem/MenuItem"
import useMenu from "../../Hooks/UseMenu"


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section>
            <SectionTitle
                subHeading={"check it out"}
                heading={"From our menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center align-center">
            <button className="btn btn-outline border-0 border-b-4 mt-4">View full menu</button>
            </div>
        </section>
    )
}

export default PopularMenu
