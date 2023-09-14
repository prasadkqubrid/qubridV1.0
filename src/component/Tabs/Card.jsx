import React from 'react'

function Card() {
  
    return (
        <div className="bg-white w-full h-card-height rounded-3xl shadow relative">
            <div className='py-8 text-center'>
                <span className="text-xl font-bold">Basic (CPU)</span>
            </div>
            <div className='py-5 mb-5 bg-page-bg-color text-center'>
                <div>
                    <sup className='text-xl font-medium'>$</sup>
                    <span className='text-4xl font-bold'>0</span>
                </div>
                <span className='text-base font-semibold'>Lifetime</span>
            </div>

            <ul className="space-y-5 px-6 my-2 text-card-li-color">
                <li className="flex space-x-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                        <circle cx="3" cy="3" r="3" fill="#2E1F15" />
                    </svg>
                    <span className="text-base font-semibold ">Ubuntu</span>
                </li>
                <li className="flex space-x-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                        <circle cx="3" cy="3" r="3" fill="#2E1F15" />
                    </svg>
                    <span className="text-base font-semibold ">Jupyter Notebook</span>
                </li>
                <li className="flex space-x-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                        <circle cx="3" cy="3" r="3" fill="#2E1F15" />
                    </svg>
                    <span className="text-base font-semibold ">Languages: Python, C/ C++ , R, Julia</span>
                </li>
                <li className="flex space-x-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                        <circle cx="3" cy="3" r="3" fill="#2E1F15" />
                    </svg>
                    <span className="text-base font-semibold ">NVIDIA T4 GPU (4 core VCPU 16 GB RAM)</span>
                </li>
                <li className="flex space-x-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                        <circle cx="3" cy="3" r="3" fill="#2E1F15" />
                    </svg>
                    <span className="text-base font-semibold ">125 NVMe SSD</span>
                </li>
                <li className="flex space-x-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                        <circle cx="3" cy="3" r="3" fill="#2E1F15" />
                    </svg>
                    <span className="text-base font-semibold "> Scikit-learn, Shogun, XGBoost</span>
                </li>
                <li className="flex space-x-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                        <circle cx="3" cy="3" r="3" fill="#2E1F15" />
                    </svg>
                    <span className="text-base font-semibold ">Tensorflow, Keras.io, Apache Spark, NvidiaCUDA</span>
                </li>
                <li className="flex space-x-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                        <circle cx="3" cy="3" r="3" fill="#2E1F15" />
                    </svg>
                    <span className="text-base font-semibold ">Pipelines: Kubeflow, MLFlow</span>
                </li>
            </ul>

            <div className='flex justify-center items-center'>
                <button className='absolute bottom-0 my-6 text-base font-semibold px-16 py-5 rounded-full bg-page-bg-color hover:bg-gradient-pink-purple hover:text-white'>DEPLOY</button>
            </div>
        </div>
    )
}

export default Card