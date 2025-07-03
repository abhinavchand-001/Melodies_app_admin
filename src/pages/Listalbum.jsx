import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { url } from '../App'
import { toast } from 'react-toastify'

// #181818
// #ee10b0
// #1070ee

const Listalbum = () => {

  const [data, setData] = useState([]);
  const fetchalbum = async () =>{
    try {
      const response = await axios.get(`${url}/api/album/list`);

      if(response.data.success){
        setData(response.data.albums);

      }
    
      
      
    } catch (error) {

      toast.error("error occured ")
    }

}

const removeAlbum = async (id) => {
  try {
    const response = await axios.post(`${url}/api/album/remove`, { id });

    if (response.data.success) {
      toast.success(response.data.message);
      await fetchalbum();
    }
  } catch (error) {
    toast.error("Error occur");
  }
};

    useEffect(()=> {
      fetchalbum();
    }, [])


  return (
    <div className='m-10'>
      <p className='text-white font-bold text-2xl'>All Albums List</p>
      <br />
      <div className='grid grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2-5 border text-white text-sm border-gray-300 p-5 bg-[#281e29]'>
        <b>Image</b>
        <b>Name</b>
        <b>Description</b>
        <b>Album Colour</b>
        <b>Actions</b>
      </div>

      {data.map((item, index) => (
        <div key={index} className='grid grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2-5 border-b-1 text-white mt-5 p-5 '>
          <img src={item.image} alt="" className='w-15 h-15 object-cover'/>
          <p>{item.name}</p>
          <p>{item.desc}</p>
          <input type="color" value={item.bgColour} />
          <button onClick={() => removeAlbum(item._id)} className='w-20 p-2 bg-[#1070ee] text-white rounded-md cursor-pointer'>Delete</button>
         
        </div>
      ))}
    </div>
  )
}

export default Listalbum