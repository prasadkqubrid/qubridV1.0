import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { Context } from '../../Context';
import Footer from '../Footer/Footer';
import DashBoardTab from '../Tabs/DashBoardTab';
import EnvironmentForm from '../EnvironmentForm/EnvironmentForm';
import { MdClose } from 'react-icons/md';

function EnvironmentAndInfra() {
  const { open } = useContext(Context);
  const [customShowModal, customSetShowModal] = useState(false);

  return (
    <>
      <div className='flex w-full min-h-screen'>
        <Sidebar className='flex-shrink-0 h-full fixed' />
        <div className='flex flex-col w-full'>
          <div className={`${open ? "ml-60" : "ml-20 "}`}>
            <Navbar />
          </div>
          {/* Page Content */}
          <div className={`${open ? "ml-64" : "ml-20 "} px-8 pt-24`}>
            {/* Your main content goes here */}
            <div className='flex justify-between py-4'>
              <div>
                <h2 className="text-2xl font-bold text-heading-black">Dashboard</h2>
                <span className="text-base font-semibold text-gray-70">Select infrastructure and a programming environment or create your own</span>
              </div>
              <div className='px-6 py-4 bg-create-new-btn-color rounded-full cursor-pointer' onClick={() => customSetShowModal(true)}>
                <span className='text-tab-active-color text-base font-semibold'>Create New Program</span>
              </div>
            </div>
            {/* <Tabs /> */}
            <DashBoardTab />
          </div>
          {/* Footer */}
          <div className={`${open ? "ml-60" : "ml-20 "}`}>
            <Footer />
          </div>
        </div>
      </div>

      {/* Custum Modal */}
      {customShowModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-6 border-b border-solid border-slate-200 rounded-t">
                  <div>
                    <h5 className="text-base font-bold text-heading-black">
                      Create New Program
                    </h5>
                    <p className='text-sm font-semibold text-gray-70'>Choose any one AI Package</p>
                  </div>
                  <button
                    className=" background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => customSetShowModal(false)}
                  >
                    <MdClose className='w-5 h-5 mt-1' />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <EnvironmentForm />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b gap-x-3">
                  <button
                    type="button"
                    className={`bg-page-bg-color text-tab-active-color  text-base font-semibold px-12 py-4 rounded-full`}
                    onClick={() => customSetShowModal(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className={`bg-gradient-pink-purple text-white text-base font-semibold  px-12 py-4 rounded-full`}
                    onClick={() => customSetShowModal(false)}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default EnvironmentAndInfra;