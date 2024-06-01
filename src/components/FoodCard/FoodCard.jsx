import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiousSecure from "../../Hooks/UseAxiousSecure";
import UseCart from "../../Hooks/UseCart";
import useAuth from "../../Hooks/useAuth";




const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = UseAxiousSecure();
    const [, refetch] = UseCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }

                })
        }
        else {
            Swal.fire({
                title: "You are not Log in",
                text: "Please log in to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="w-96 bg-base-100 shadow-2xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className=" right-0 mr-4 mt-4 px-4 ab bg-slate-800 text-white">${price}</p>
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-outline bg-slate-200 border-0 border-orange-400 border-b-4 mt-4">Add to Card
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
