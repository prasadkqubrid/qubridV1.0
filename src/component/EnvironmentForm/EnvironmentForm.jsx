import React from 'react'
import './EnvForm.css';
import jupyter_logo from '../../assets/Jupyter_logo.svg.png';
import nvidiaNotebook from '../../assets/ui_img/nvidia-notebook.svg';
import tensorflow from '../../assets/ui_img/tenserflow.svg';
import keras from '../../assets/ui_img/keras.svg';
import pytorch from '../../assets/ui_img/pytorch.svg';
import caffe_img from '../../assets/ui_img/caffe2.svg';
import caffe_text from '../../assets/ui_img/caffe2_text.svg';
import theano from '../../assets/ui_img/theano.svg';
import nvidai_cuda from '../../assets/ui_img/nvidia_cuda.svg';
import cudnn from '../../assets/ui_img/cudnn.svg';

function EnvironmentForm() {
    return (
        <div className='w-full'>
            <div className='flex justify-between'>
                <div className=''>
                    <label htmlFor="gpu" className="block my-1.5 text-sm font-semibold text-gray-70 ">Select GPU Infrastructure</label>
                    <select id="gpu" className="min-w-300px border border-gray-300 text-heading-black text-sm rounded-lg font-medium p-3">
                        <option defaultValue>Choose a Infrastructure</option>
                        <option value="NVIDIA Tesla V100 GPUs">NVIDIA Tesla V100 GPUs</option>
                        <option value="NVIDIA Tesla H100 GPUs(P5)">NVIDIA Tesla H100 GPUs(P5)</option>
                        <option value="NVIDIA Tesla A100 GPUs(P4,P3)">NVIDIA Tesla A100 GPUs(P4,P3)</option>
                        <option value="NVIDIA Tesla M60 GPUs()">NVIDIA Tesla M60 GPUs()</option>
                        <option value="NVIDIA T4 GPUs(g4)">NVIDIA T4 GPUs(g4)</option>
                        <option value="NVIDIA A10G GPUs">NVIDIA A10G GPUs</option>
                    </select>
                </div>

                <div className=''>
                    <label htmlFor="qpu" className="block my-1.5 text-sm font-semibold text-gray-70 ">Select Quantum Infrastructure</label>
                    <select id="qpu" className="min-w-300px border border-gray-300 text-heading-black text-sm rounded-lg font-medium p-3">
                        <option defaultValue>Choose a Infrastructure</option>
                        <option value="IBM">IBM</option>
                        <option value="Quantinium">Quantinium</option>
                        <option value="IONQ">IONQ</option>
                        <option value="DWAVE">DWAVE</option>
                        <option value="Riggeti">Riggeti</option>
                        <option value="Harmony">Harmony</option>
                    </select>
                </div>

                <div className=''>
                    <label htmlFor="classical" className="block my-1.5 text-sm font-semibold text-gray-70">Select Quantum-Classical GPU Infrastructure</label>
                    <select id="classical" className="min-w-300px border border-gray-300 text-heading-black text-sm rounded-lg font-medium p-3">
                        <option defaultValue>Choose a Infrastructure</option>
                        <option value="QPU + GPU + CPU">QPU + GPU + CPU</option>
                    </select>
                </div>
            </div>
            <div>
                <h5 className="text-sm font-bold text-heading-black py-4">
                    Select Operating System
                </h5>

                <div className='flex space-x-5'>
                    <div className="flex items-start mb-6 cursor-pointer">
                        <div className="flex items-center h-5">
                            <input type='radio' id='ubuntu' name='operatingSystem' />
                        </div>
                        <label htmlFor="ubuntu" className="ml-2 text-sm font-semibold text-heading-black">Ubuntu Linux 18.1</label>
                    </div>

                    <div className="flex items-start mb-6 cursor-pointer">
                        <div className="flex items-center h-5">
                            <input type='radio' id='window' name='operatingSystem' />
                        </div>
                        <label htmlFor="window" className="ml-2 text-sm font-semibold   text-gray-60">Windows Server</label>
                    </div>

                    <div className="flex items-start mb-6 cursor-pointer">
                        <div className="flex items-center h-5">
                            <input type='radio' id='nvidia' name='operatingSystem' />
                        </div>
                        <label htmlFor="nvidia" className="ml-2 text-sm font-semibold  text-gray-60">NVIDIA</label>
                    </div>
                </div>
            </div>

            <div>
                <h5 className='text-sm font-bold text-heading-black pb-4'>
                    Notebook
                </h5>

                <div className='flex space-x-5'>
                    <div className='flex w-32 h-16 p-2 bg-page-bg-color rounded space-x-8 cursor-pointer'>
                        <input type='radio' className='ml-1 -mt-8' name='notebook' />
                        <img src={jupyter_logo} className='w-9 h-10 mt-1' alt='jupiter-logo' />
                    </div>

                    <div className='flex w-32 h-16 p-2 bg-page-bg-color rounded space-x-8 cursor-pointer'>
                        <input type='radio' className='ml-1 -mt-8' name='notebook' />
                        <img src={nvidiaNotebook} className='w-9 h-10 mt-1' alt='jupiter-logo' />
                    </div>

                    <div className='flex w-32 h-16 p-2 bg-page-bg-color rounded space-x-8 cursor-pointer'>
                        <input type='radio' className='ml-1 -mt-8' name='notebook' />
                        <img src={jupyter_logo} className='w-9 h-10 mt-1' alt='jupiter-logo' />
                    </div>
                </div>
            </div>

            <div>
                <h5 className="text-sm font-bold text-heading-black py-4">
                    Select AI Packages
                </h5>

                <div className='flex space-x-5'>
                    <div className='flex w-32 h-16 p-2 bg-page-bg-color rounded cursor-pointer  space-x-8'>
                        <input type='checkbox' className='ml-1 -mt-8' />
                        <div>
                            <img src={tensorflow} className='w-5 h-5 mt-0.5' alt='tensorflow' />
                            <span className='font-semibold text-xs -ml-5'>TensorFlow</span>
                        </div>
                    </div>

                    <div className='flex w-32 h-16 p-2 bg-page-bg-color rounded cursor-pointer space-x-8'>
                        <input type='checkbox' className='ml-1 -mt-8' />
                        <div>
                            <img src={keras} className='w-5 h-5 mt-0.5' alt='tensorflow' />
                            <span className='font-semibold text-xs -ml-1'>Keras</span>
                        </div>
                    </div>

                    <div className='flex w-32 h-16 p-2 bg-page-bg-color rounded cursor-pointer space-x-8'>
                        <input type='checkbox' className='ml-1 -mt-8' />
                        <div>
                            <img src={pytorch} className='w-5 h-5 mt-0.5' alt='tensorflow' />
                            <span className='font-semibold text-xs -ml-3'>PyTorch</span>
                        </div>
                    </div>

                    <div className='flex w-32 h-16 p-2 bg-page-bg-color rounded cursor-pointer space-x-8'>
                        <input type='checkbox' className='ml-1 -mt-8' />
                        <div>
                            <img src={caffe_img} className='mt-0.5' alt='tensorflow' />
                            <img src={caffe_text} className='w-10 h-3 -mt-2' alt='tensorflow' />
                        </div>
                    </div>

                    <div className='flex w-32 h-16 p-2 bg-page-bg-color rounded cursor-pointer  space-x-5'>
                        <input type='radio' className='ml-1 -mt-8' name='notebook' />
                        <img src={theano} className='w-14 h-10 mt-1' alt='jupiter-logo' />
                    </div>

                    <div className='flex w-32 h-16 p-2 bg-page-bg-color rounded cursor-pointer space-x-8'>
                        <input type='radio' className='ml-1 -mt-8' name='notebook' />
                        <img src={nvidai_cuda} className='w-9 h-10 mt-1' alt='jupiter-logo' />
                    </div>

                    <div className='flex w-32 h-16 p-2 bg-page-bg-color rounded cursor-pointer space-x-5'>
                        <input type='radio' className='ml-1 -mt-8' name='notebook' />
                        <img src={cudnn} className='h-10 mt-1' alt='jupiter-logo' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnvironmentForm