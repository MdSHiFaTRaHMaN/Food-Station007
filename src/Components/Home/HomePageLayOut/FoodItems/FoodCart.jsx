import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../AuthProvider/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useCarts from "../../../../Hooks/useCarts";

const FoodCart = ({ food }) => {
    const { name, price, image, category, _id, description } = food;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCarts();

    const handleAddToCart = foodItem => {
        if (user && user.email) {
            // todo
            console.log(user.email, foodItem);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
                description
            }
            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        } else {
            Swal.fire({
                title: "You are not Login",
                text: "Please Login to add cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signup', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-white border-2">
            <Link to={`foodDetails/${_id}`}>
                <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image} />
                </a>
            </Link>
            <div className="flex justify-between">
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
                    <p className="mt-1">${price}</p>
                </div>
                <div className="grid ">
                    <div className="rating rating-md w-20 mt-7 -mb-7 ml-5">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <button
                        onClick={ handleAddToCart }
                        className="btn btn-outline btn-primary mt-10">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;