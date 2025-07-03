import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Addsong from './pages/Addsong';
import Listsong from './pages/Listsong';
import Addalbum from './pages/Addalbum';
import Listalbum from './pages/Listalbum';

export const url = 'http://localhost:4000';


const App = () => {


  return (
    <div className='iamapp flex min-h-screen max-w-screen'>

      <ToastContainer />
      <Sidebar />

      <div className='w-full h-screen bg-[#181818]'>
        <Navbar />

        <Routes>
          <Route path='/add-song' element={<Addsong/>}></Route>
          <Route path='/list-song' element={<Listsong/>}></Route>
          <Route path='/add-album' element={<Addalbum/>}></Route>
          <Route path='/list-album' element={<Listalbum/>}></Route>
        </Routes>

      </div>


    </div>
  )
}

export default App