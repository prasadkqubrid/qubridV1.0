import { Route, Routes } from "react-router-dom";
import ForgetPassword from "./component/ForgetPassword";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import HomePage from "./pages/HomePage";
import AuthRoute from "./component/AuthRoute";
import { initializeApp } from 'firebase/app';
import { config } from './config/config';
import EnvironmentAndInfra from "./component/EnvironmentAndInfra/EnvironmentAndInfra";
import CreateMLOps from "./component/CreateMLOps/CreateMLOps";
import TryQuantum from "./component/TryQuantum/TryQuantum";
import RunExistingProgram from "./component/RunExistingProgram/RunExistingProgram";
import { Context } from "./Context";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
initializeApp(config.firebaseConfig);

function App() {
  const [open, setOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <Context.Provider value={{open,setOpen,isLoading,setIsLoading}}>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <HomePage/>
            </AuthRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpass" element={<ForgetPassword />} />
        
        <Route path="/environment" element={<EnvironmentAndInfra />} />
        
        <Route path="/runexistingprogram" element={<RunExistingProgram/>}/>
        <Route path="/tryquantum" element={<TryQuantum/>} />
        <Route path="/createmlops" element={<CreateMLOps />} />
      </Routes>
      <ToastContainer />
    </Context.Provider>
  );
}

export default App;
