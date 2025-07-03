import React, { useState } from "react";
import { assets } from "../assets copy/admin-assets/assets";
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";

const Addalbum = () => {
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [bgColour, setbgColour] = useState("#121212");

  const onSubmitHandel= async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("image", image);
      formData.append("bgColour", bgColour);

      const response = await axios.post(`${url}/api/album/add`, formData);

      if (response.data && response.data.success) {
        toast.success("album added successfully");
        setName("");
        setDesc("");
        setImage(false);
      } else {
        toast.error(response.data?.message || "something went wrong");
        console.error('Error response:', response.data);      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.response?.data?.message || "error occurred");    }
  };

  return (
    
      <form
        onSubmit={onSubmitHandel}
        action=""
        className="flex flex-col gap-5 text-white pl-15 pt-10"
      >
        <div className="flex gap-10">
          <div className="flex flex-col gap-5">
            <p>Add Image</p>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              accept="image/*"
              hidden
            />
            <label htmlFor="image">
              <img
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt=""
                className="w-28 font-bold cursor-pointer"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[20px]">Album Name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Type here.."
            required
            className="w-[50%] p-2 border-2 border-gray-400 rounded-md"
          />
          <p className="text-[20px]">Album Description</p>
          <input
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            type="text"
            placeholder="Type here.."
            required
            className="w-[50%] p-2 border-2 border-gray-400 rounded-md"
          />

          <p className="text-[20px]">Background Colour</p>
          <input
            onChange={(e) => setbgColour(e.target.value)}
            value={bgColour}
            type="color"
          />
        </div>

        <button className="w-30 mt-5 p-2 bg-[#ee10b0] text-white rounded-md cursor-pointer">
          Add Album
        </button>
      </form>
    
  );
};

export default Addalbum;
