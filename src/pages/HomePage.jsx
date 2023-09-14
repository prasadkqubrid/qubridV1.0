import React, { useContext } from 'react'
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer/Footer';
import { Context } from '../Context';

function HomePage() {
  const { open } = useContext(Context);
  return (
    <div className='flex w-full min-h-screen'>
      <Sidebar className='flex-shrink-0 h-full fixed' />
      <div className='flex flex-col w-full'>
        <div className={`${open ? "ml-60" : "ml-20 "}`}>
          <Navbar className='flex-shrink-0 fixed w-full' />
        </div>
        <div className='flex-grow overflow-y-auto ml-72'>
          {/* Your main content goes here */}
        </div>
        <div className={`${open ? "ml-60" : "ml-20 "}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HomePage