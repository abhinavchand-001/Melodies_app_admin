import React, { useEffect, useState } from 'react'
import { assets } from '../assets copy/admin-assets/assets'
import axios from 'axios'
import { url } from '../App'
import { toast } from 'react-toastify';

const Addsong = () => {

    const [image, setImage] = useState(false);
    const [song, setSong] = useState(false);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [album, setAlbum] = useState("none");
    const [albumData, setAlbumData] = useState([]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('desc', desc);
            formData.append('image', image);
            formData.append('audio', song);
            formData.append('album', album);

            const response = await axios.post(`${url}/api/song/add`, formData);

            if(response.data.success) {
                toast.success("song added successfully");
                setName("");
                setDesc("");
                setImage(false);
                setSong(false);
                setAlbum("none");
            }

            else{
                toast.error("something went wrong");
            }


          } catch (error) {
            toast.error("error occured");
          }       

    }

    const loadAlbumData = async () => {
        try {
            const response = await axios.get(`${url}/api/album/list`);
            if(response.data.success){
                setAlbumData(response.data.albums);
            }

            else{
                toast.error("something went wrong");
            }
        } catch (error) {
            toast.error("error occured");
        }
    }

    useEffect(() => {
        loadAlbumData();
    }, []);


  return (
    <form onSubmit={onSubmitHandler} action="" className='flex flex-col gap-5 text-white pl-15 pt-10'>

        <div className='flex gap-10'>
            <div className='flex flex-col gap-5'>
                <p>Add Song</p>
                <input onChange={(e) => setSong(e.target.files[0])} type="file" id='song' accept='audio/*' hidden />
                <label htmlFor="song">
                    <img src={song ? assets.upload_added : assets.upload_song} alt="" className='w-28 font-bold cursor-pointer'/>
                </label>
            </div>


            <div className='flex flex-col gap-5'>
            <p>Add Image</p>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' accept='image/*' hidden />
            <label htmlFor="image">
                    <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" className='w-28 font-bold cursor-pointer'/>
                </label>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <p className='text-[20px]'>Song Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Type here..' required className='w-[50%] p-2 border-2 border-gray-400 rounded-md'/>
            <p className='text-[20px]'>Song Description</p>
            <input onChange={(e) => setDesc(e.target.value)} value={desc} type="text" placeholder='Type here..' required className='w-[50%] p-2 border-2 border-gray-400 rounded-md'/>

            <p className='text-[20px]'>Album</p>
            <select onChange={(e) => setAlbum(e.target.value)} value={album} name="" id="" className='w-40 p-2 border-2 border-gray-400 rounded-md'>
                <option className='bg-[#181818] text-white' value="none">none</option>
                {albumData.map((item, index) => (
                    <option className='bg-[#181818] text-white'  key={index} value={item.name}>{item.name}</option>
                ))}
            </select>
        </div>

        <button className='w-30 mt-5 p-2 bg-[#ee10b0] text-white rounded-md cursor-pointer'>Add Song</button>
    </form>
  )
}

export default Addsong