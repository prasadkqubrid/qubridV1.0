import React, { useContext, useState } from "react";
import { MdOutlineDeleteOutline, MdVisibility, MdOutlineFileDownload, MdSync, MdContentCopy, MdOutlineTextSnippet } from 'react-icons/md';
import loader from "../../assets/ui_img/loader.svg";
import { MdClose } from 'react-icons/md';
import './loader.css';
import { Context } from "../../Context";

const ModalTab = () => {
    const [openTab, setOpenTab] = useState(1);
    const [deleteResourceModal, setDeleteResourceModal] = useState(false);
    const { isLoading } = useContext(Context);
   
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex list-none px-6 border-b space-x-8"
                        role="tablist"
                    >
                        <li className={`${openTab === 1 ? "text-tab-active-color border-b-4 border-tab-active-color" : "text-gray-60"} text-base font-bold px-1.5 pb-3`}>
                            <a
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}

                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Overview
                            </a>
                        </li>

                        <li className={`${openTab === 2 ? "text-tab-active-color border-b-4 border-tab-active-color" : "text-gray-60"} text-base font-bold px-1.5 pb-3`}>
                            <a
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Manage
                            </a>
                        </li>
                    </ul>

                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className="bg-create-new-btn-color p-4 rounded w-full">
                                        <div className="flex space-x-3">
                                            <div className="w-64">
                                                <h2 className="text-sm font-normal">Languages</h2>
                                                <span className="text-sm font-medium">Python, C, C++, R, Julia</span>
                                            </div>
                                            <div className="w-64">
                                                <h2 className="text-sm font-normal">Storage</h2>
                                                <span className="text-sm font-medium">4 Core CPU & 8 GB RAM</span>
                                            </div>
                                            <div className="w-64">
                                                <h2 className="text-sm font-normal">Framework</h2>
                                                <span className="text-sm font-medium">Scikit-learn, PyTorch, Tensorflow</span>
                                            </div>
                                            <div className="w-72">
                                                <h2 className="text-sm font-normal">APIs</h2>
                                                <span className="text-sm font-medium">Keras.io, Apache Spark, NvidiaCUDA</span>
                                            </div>

                                            <div className="flex px-8 py-3 border cursor-pointer border-stop-color rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M9.99935 2.91675C6.08733 2.91675 2.91602 6.08806 2.91602 10.0001C2.91602 13.9121 6.08733 17.0834 9.99935 17.0834C13.9113 17.0834 17.0827 13.9121 17.0827 10.0001C17.0827 6.08806 13.9113 2.91675 9.99935 2.91675ZM1.66602 10.0001C1.66602 5.39771 5.39697 1.66675 9.99935 1.66675C14.6017 1.66675 18.3327 5.39771 18.3327 10.0001C18.3327 14.6024 14.6017 18.3334 9.99935 18.3334C5.39697 18.3334 1.66602 14.6024 1.66602 10.0001ZM6.66601 7.91675C6.66601 7.22639 7.22566 6.66675 7.91601 6.66675H12.0827C12.773 6.66675 13.3327 7.22639 13.3327 7.91675V12.0834C13.3327 12.7737 12.773 13.3334 12.0827 13.3334H7.91601C7.22566 13.3334 6.66601 12.7737 6.66601 12.0834V7.91675Z" fill="#F6274D" />
                                                </svg>
                                                <span className="text-sm font-medium text-stop-color">Stop</span>
                                            </div>
                                        </div>

                                        <div className="flex space-x-3 mt-4">
                                            <div className="w-64">
                                                <h2 className="text-sm font-normal">Pipelines</h2>
                                                <span className="text-sm font-medium">Kubeflow, MLflow</span>
                                            </div>
                                            <div className="w-64">
                                                <h2 className="text-sm font-normal">Storage</h2>
                                                <span className="text-sm font-medium">100 NVMe SSD</span>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="flex items-center justify-center py-10">
                                        {
                                            isLoading ? (<div><img src={loader} alt="img_loader" className="spinner" /> <span className="text-sm font-medium text-stop-color -ml-24 mt-2.5">Wait 3 Min Have Have a Cup Of Coffee</span></div>):(null)
                                        }
                                    </div>

                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className="flex justify-between p-2.5 bg-modal-bg-color rounded">
                                        <div>
                                            <h2 className="text-lg font-medium">Delete Resource</h2>
                                            <span className="text-sm font-normal">This will permanently delete the resource and attached disk.</span>
                                        </div>
                                        <div className="flex space-x-2 cursor-pointer border border-card-li-color py-3 px-7 rounded-full" onClick={() => setDeleteResourceModal(true)}>
                                            <MdOutlineDeleteOutline className="w-5 h-5 mt-1" />
                                            <h2 className="text-lg font-medium">Delete</h2>
                                        </div>
                                    </div>

                                    <div className="flex justify-between p-2.5 my-2.5 bg-modal-bg-color  rounded">
                                        <div>
                                            <h2 className="text-lg font-medium">Visibility</h2>
                                            <span className="text-sm font-normal">Control who can access the running resource.</span>
                                        </div>
                                        <div className="flex space-x-2 cursor-pointer border border-card-li-color py-3 px-7 rounded-full">
                                            <MdVisibility className="w-5 h-5 mt-1" />
                                            <h2 className="text-lg font-medium">View Access</h2>
                                        </div>
                                    </div>

                                    <div className="flex justify-between p-2.5 bg-modal-bg-color  rounded">
                                        <div>
                                            <h2 className="text-lg font-medium">Download Recipe</h2>
                                            <span className="text-sm font-normal">A recipe contains the exact configuration to recreate a resource. </span>
                                        </div>
                                        <div className="flex space-x-2 cursor-pointer border border-card-li-color py-3 px-7 rounded-full">
                                            <MdOutlineFileDownload className="w-5 h-5 mt-1" />
                                            <h2 className="text-lg font-medium">Download Recipe</h2>
                                        </div>
                                    </div>


                                    <div className="p-2.5 bg-modal-bg-color my-2.5 rounded">
                                        <div className="flex justify-between ">
                                            <div>
                                                <h2 className="text-lg font-medium">API Token</h2>
                                                <span className="text-sm font-normal">API Token for the resource</span>
                                            </div>
                                            <div className="flex space-x-2 cursor-pointer border border-card-li-color py-3 px-7 rounded-full">
                                                <MdSync className="w-5 h-5 mt-1" />
                                                <h2 className="text-lg font-medium">Replace Key</h2>
                                            </div>
                                        </div>
                                        <div className="relative mt-2">
                                            <input type="password" id="input-group-1" className="bg-modal-bg-color border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="*******************" />
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                                                <MdVisibility className="w-5 h-5" />
                                            </div>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-10 pointer-events-none">
                                                <MdContentCopy className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-2.5 p-2.5 bg-modal-bg-color rounded">
                                        <div className="flex justify-between ">
                                            <div>
                                                <h2 className="text-lg font-medium">Share Resource</h2>
                                                <span className="text-sm font-normal">Allow other users in your organization to clone this resource by publishing it as a template.</span>
                                            </div>
                                            <div className="flex space-x-2 cursor-pointer border border-card-li-color py-3 px-7 rounded-full">
                                                <MdOutlineTextSnippet className="w-5 h-5 mt-1" />
                                                <h2 className="text-lg font-medium">Update Template</h2>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-sm font-normal">Copy & Share link</span>
                                        </div>
                                        <div className="relative my-2">
                                            <input type="text" id="input-group-1" className="bg-modal-bg-color border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="*******************" />
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                                                <MdVisibility className="w-5 h-5" />
                                            </div>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-10 pointer-events-none">
                                                <MdContentCopy className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <input type="text" id="input-group-1" className="bg-modal-bg-color border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="*******************" />
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                                                <MdVisibility className="w-5 h-5" />
                                            </div>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-10 pointer-events-none">
                                                <MdContentCopy className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-2.5 p-2.5 bg-modal-bg-color  rounded">
                                        <div className="flex justify-between ">
                                            <div>
                                                <h2 className="text-lg font-medium">Clone Resource</h2>
                                                <span className="text-sm font-normal">Create a new resource with the same settings as this one.</span>
                                            </div>
                                        </div>

                                        <div className="flex space-x-5 my-2">
                                            <div className="h-20 w-64 flex justify-center items-center bg-modal-bg-color">
                                                <span className="font-medium text-sm">Clone as a Python Server</span>
                                            </div>
                                            <div className="h-20 w-64 flex justify-center items-center bg-modal-bg-color">
                                                <span className="font-medium text-sm">Clone as a Deployment</span>
                                            </div>
                                            <div className="h-20 w-64 flex justify-center items-center bg-modal-bg-color">
                                                <span className="font-medium text-sm">Clone as a job</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Free Modal */}
            {deleteResourceModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative my-6 mx-auto">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-6 border-b border-solid border-slate-200 rounded-t">
                                    <div>
                                        <h5 className="text-xl font-semibold">
                                            Confirmation
                                        </h5>
                                    </div>

                                    <button
                                        className=" background-transparent font-bold uppercase pt-1.5 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setDeleteResourceModal(false)}
                                    >
                                        <MdClose className='w-5 h-5' />
                                    </button>

                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="text-xl font-medium text-black">
                                        <span>Are you sure you want to delete this Jupyter Server?</span>
                                    </div>
                                </div>
                                {/* Footer */}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b gap-x-3">
                                    <button
                                        type="button"
                                        className={`bg-page-bg-color text-tab-active-color  text-base font-semibold px-12 py-3 rounded-full`}
                                        onClick={() => setDeleteResourceModal(false)}
                                    >
                                        No
                                    </button>

                                    <button
                                        type="button"
                                        className={`bg-gradient-pink-purple text-white text-base font-semibold  px-12 py-3 rounded-full`}
                                        onClick={() => setDeleteResourceModal(false)}
                                    >
                                        Yes
                                    </button>
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


export default ModalTab;