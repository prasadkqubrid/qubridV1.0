import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import AuthBtn from "./AuthBtn";
import { toast } from 'react-toastify';

function Login() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data, e) => {
        e.preventDefault();
        try {
            const url = "http://35.169.143.194:4000/login";
            const { data: res } = await axios.post(url, data);
            if (res.success) {
                localStorage.setItem("token", res.token);
                navigate('/');   
                toast("User Login Success");
            } else {
                toast("Enter Correct Email or Password");
            }
        } catch (error) {
            console.log(error);
            toast("Something went wrong");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <AuthBtn />
                <div className="user-form-field">
                    <label>Email</label>
                    <input
                        {...register("email", {
                            required: true,
                            pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
                        })}
                    />
                    {errors?.email?.type === "required" && <p>Email can't be blank</p>}
                    {errors?.email?.type === "pattern" && (
                        <p>Please Enter Correct Email</p>
                    )}
                    <label>Password</label>
                    <input {...register("password", { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/ })} />
                    {errors?.password?.type === "required" && <p>Password can't be blank</p>}
                    {errors?.password?.type === "pattern" && (
                        <p>Please Enter Correct Password</p>
                    )}
                    <div className="sign-in-check">
                        <input type="checkbox" />
                        <label>Keep me Signed in.</label>
                    </div>
                </div>

                <input type="submit" value="LOGIN" />

                <div className="forget-password-btn">
                    <Link className="link-route"
                        to='/forgetpass'
                    >
                        FORGOT PASSWORD?
                    </Link>
                </div>

                <div className="sign-in-create-account">
                    New to Qubrid?
                    <Link className="link-route"
                        to='/signup'
                    >CREATE AN ACCOUNT</Link>
                </div>
            </form>
        </div>
    );
}

export default Login