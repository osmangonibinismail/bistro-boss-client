import { useForm } from "react-hook-form"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import { FaUtensils } from "react-icons/fa6";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import UseAxiousSecure from "../../../Hooks/UseAxiousSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiousSecure();
  const onSubmit = async (data) => {
    console.log(data)
    // image upload to img bb and then get url
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    if(res.data.success){
      // now send the menu item data to the server with the image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url
      }
      // 
      const menuRes = await axiosSecure.post('/menu', menuItem);
      console.log(menuRes.data)
      if(menuRes.data.insertedId){
        // show success pop up
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} added to the menu.`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log('with image url', res.data);
  };
  return (
    <div>
      <SectionTitle heading="add an item" subHeading="What's new?"></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input type="text"
              placeholder="Recipe name"
              {...register('name', { required: true })}
              required
              className="input input-bordered w-full" />
          </div>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select defaultValue="default" {...register('category', { required: true })}
                className="select select-bordered w-full">
                <option disabled value="default">Select a Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input type="number"
                placeholder="Price"
                {...register('price', { required: true })}
                className="input input-bordered w-full" />
            </div>

          </div>
          {/* recipe details */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
          </div>

          {/* file input */}
          <div className="my-4">
            <input type="file" {...register('image', { required: true })} className="file-input file-input-bordered file-input-md w-full max-w-xs" />
          </div>
          {/* submit button */}
          <button className="btn btn-secondary">
            Add Item <FaUtensils className="ml-2"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddItems
