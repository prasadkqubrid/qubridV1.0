import React, { useContext, useState } from "react";
import Card from "./Card";
import { MdClose } from 'react-icons/md';
import ModalTab from "./ModalTab";
import keras from "../../assets/ui_img/keras.svg";
import tensorflow from "../../assets/ui_img/tenserflow.svg";
import pytorch from "../../assets/ui_img/pytorch.svg";
import { Context } from "../../Context";

const DashBoardTab = () => {
    const [openTab, setOpenTab] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const [freeShowModal, setFreeShowModal] = useState(false);
    const [paidShowModal, setPaidShowModal] = useState(false);
    const notebookuri = localStorage.getItem("notebookUrl");
    const { isLoading, setIsLoading } = useContext(Context);

    function handleFreeCPU() {
        setFreeShowModal(true);
        
        if (notebookuri) {
            setIsLoading(false);
            window.open(notebookuri, "_blank"); 
        } else {
            var myHeaders = new Headers();
            const token = localStorage.getItem("token");
            myHeaders.append("x-access-token", token);
            myHeaders.append("Content-Type", "application/json");
    
            var raw = JSON.stringify({
                "vpcId": "vpc-05042c31af80eecff",
                "subnetId": "subnet-03f50386d25deb02e",
                "allocatePublicIp": true
            });
    
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
    
            fetch("http://35.169.143.194:4000/launch-instance", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result) {
                    console.log(result.notebookUrl);
                    localStorage.setItem("notebookUrl", result.notebookUrl);
                    window.open(result.notebookUrl, "_blank");
                }
                setIsLoading(false);
            })
            .catch(error =>
                { console.log('error', error); setIsLoading(false) }
            );
        }
    }

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-lg font-semibold  py-7 shadow-lg rounded block rounded-t-2xl " +
                                    (openTab === 1
                                        ? "text-tab-active-color bg-white"
                                        : "text-gray-60 tab-not-active-color")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Classical Infrastructure
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-lg font-semibold py-7 rounded-t-2xl shadow-lg rounded block  " +
                                    (openTab === 2
                                        ? "text-tab-active-color bg-white"
                                        : "text-gray-60 tab-not-active-color")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Quantum Infrastructure
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-lg font-semibold  py-7 rounded-t-2xl shadow-lg rounded block  " +
                                    (openTab === 3
                                        ? "text-tab-active-color bg-white"
                                        : "text-gray-60 tab-not-active-color")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Quantum - Classical Hybrid Infrastructure
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className="flex space-x-10">
                                        <div className="bg-white w-full h-card-height rounded-3xl shadow relative"
                                            onMouseEnter={() => setIsHovered('cpu')}
                                            onMouseLeave={() => setIsHovered('')}
                                        >
                                            <div className='py-8 text-center'>
                                                <span className="text-xl font-bold">Basic (CPU)</span>
                                            </div>

                                            <div className={`${isHovered === 'cpu' ? "bg-card-hover-color text-card-hover-text-color" : "bg-page-bg-color"} py-5 mb-5 text-center`}
                                            >
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
                                                    <span className="text-base font-semibold ">Framework: Jupyter, Qiskit, Python</span>
                                                </li>
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
                                                    <span className="text-base font-semibold ">4 core CPU 8 GB RAM</span>
                                                </li>
                                                <li className="flex space-x-3 items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                                        <circle cx="3" cy="3" r="3" fill="#2E1F15" />
                                                    </svg>
                                                    <span className="text-base font-semibold ">100 NVMe SSD</span>
                                                </li>
                                                <li className="flex space-x-3 items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                                        <circle cx="3" cy="3" r="3" fill="#2E1F15" />
                                                    </svg>
                                                    <span className="text-base font-semibold ">Scikit-learn, PyTorch, Tensorflow</span>
                                                </li>
                                            </ul>

                                            <div className='flex justify-center items-center'
                                                onClick={handleFreeCPU}
                                            >
                                                <button
                                                    className={`${isHovered === 'cpu' ? "bg-gradient-pink-purple text-white" : "bg-page-bg-color"} absolute bottom-0 my-6 text-base font-semibold px-16 py-5 rounded-full`}
                                                >
                                                    DEPLOY
                                                </button>
                                            </div>

                                        </div>

                                        <div className="bg-white w-full h-card-height rounded-3xl shadow relative"
                                            onMouseEnter={() => setIsHovered('gpu')}
                                            onMouseLeave={() => setIsHovered('')}
                                        >
                                            <div className='py-8 text-center'>
                                                <span className="text-xl font-bold">Basic (GPU)</span>
                                            </div>

                                            <div className={`${isHovered === 'gpu' ? "bg-card-hover-color text-card-hover-text-color" : "bg-page-bg-color"} py-5 mb-5 text-center`}
                                            >
                                                <div>
                                                    <sup className='text-xl font-medium'>$</sup>
                                                    <span className='text-4xl font-bold'>1</span>
                                                </div>
                                                <span className='text-base font-semibold'>Hour</span>
                                            </div>

                                            <ul className="space-y-5 px-6 my-2 text-card-li-color">
                                                <li className="flex space-x-3 items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                                        <circle cx="3" cy="3" r="3" fill="#2E1F15" />
                                                    </svg>
                                                    <span className="text-base font-semibold ">Framework: Jupyter, Qiskit, Python</span>
                                                </li>
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
                                                    <span className="text-base font-semibold ">NVIDIA T4 GPU (4 core  CPU 16 GB RAM)</span>
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
                                            </ul>

                                            <div className='flex justify-center items-center' onClick={() => setPaidShowModal(true)}>
                                                <button className={`${isHovered === 'gpu' ? "bg-gradient-pink-purple text-white" : "bg-page-bg-color"} absolute bottom-0 my-6 text-base font-semibold px-16 py-5 rounded-full`}>DEPLOY</button>
                                            </div>
                                        </div>

                                        <div className="bg-white w-full h-card-height rounded-3xl shadow relative"
                                            onMouseEnter={() => setIsHovered('qpu')}
                                            onMouseLeave={() => setIsHovered('')}
                                        >
                                            <div className='py-8 text-center'>
                                                <span className="text-xl font-bold">Basic (GPU)</span>
                                            </div>

                                            <div className={`${isHovered === 'qpu' ? "bg-card-hover-color text-card-hover-text-color" : "bg-page-bg-color"} py-5 mb-5 text-center`}>
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
                                            <a href={notebookuri} target="_blank" rel="noreferrer">
                                                <div className='flex justify-center items-center'>
                                                    <button className={`${isHovered === 'qpu' ? "bg-gradient-pink-purple text-white" : "bg-page-bg-color"} absolute bottom-0 my-6 text-base font-semibold px-16 py-5 rounded-full`}>DEPLOY</button>
                                                </div>
                                            </a>
                                        </div>

                                    </div>

                                    <div className="flex my-14 space-x-10">
                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                </div>

                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                </div>

                                <div className={openTab === 3 ? "block" : "hidden"} id="link2">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Free Modal */}
            {freeShowModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative my-6 mx-auto">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <div>
                                        <h5 className="text-xl font-semibold">
                                            Basic (CPU)
                                        </h5>
                                    </div>

                                    <button
                                        className=" background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setFreeShowModal(false)}
                                        disabled={isLoading}
                                    >
                                        <MdClose className='w-5 h-5' />
                                    </button>

                                </div>
                                {/*body*/}
                                <div className="relative py-6 flex-auto">
                                    <ModalTab />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

            {/* Paid Modal */}
            {paidShowModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative my-6 mx-auto w-1/2">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <div>
                                        <h5 className="text-base font-bold text-heading-black">
                                            Basic GPU
                                        </h5>
                                        <p className='text-sm font-semibold text-gray-70'>Choose any one AI Package</p>
                                    </div>

                                    <button
                                        className=" background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setPaidShowModal(false)}
                                    >
                                        <MdClose className='w-5 h-5 mt-2' />
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="flex justify-between p-6">

                                    <div className="flex items-center justify-center flex-wrap w-64 h-44 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                                        <div className='text-center'>
                                            <img src={tensorflow} alt='paid_instance' />
                                            <p className="font-normal text-gray-700 dark:text-gray-400">TensorFlow</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center w-64 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                                        <div className='text-center'>
                                            <img src={keras} alt='paid_instance' />
                                            <p className="font-normal text-gray-700 dark:text-gray-400">Keras</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center w-64 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                                        <div className='text-center'>
                                            <img src={pytorch} alt='paid_instance' />
                                            <p className="font-normal text-gray-700 dark:text-gray-400">PyTorch</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};


export default DashBoardTab;