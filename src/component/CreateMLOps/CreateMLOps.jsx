import React from 'react'
import Sidebar from '../Sidebar'
import comingsoon from '../../assets/vecteezy_coming-soon-background-illustration-template-design_.jpg'

function CreateMLOps() {
    return (
        <div className='flex w-full'>
            <Sidebar />
            <div className='w-full'>
                <img src={comingsoon} alt='coming soon banner' className='h-screen'/>
            </div>
        </div>
    )
}

export default CreateMLOps