import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import AuthBtn from "./AuthBtn";
import { toast } from 'react-toastify';

function SignUp() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data, e) => {
        e.preventDefault();
        console.log(JSON.stringify(data));
        try {
            const url = "http://35.169.143.194:4000/register";
            const res = await axios.post(url, JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json' }
            });
            if (res.success) {
                toast(res.message);
                navigate("/login");
                console.log(res.data); // Access the response data, not res.message   
            } else {
                toast(res.message);
            }
        } catch (error) {
            console.log(error);
            toast("Something went wrong");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <AuthBtn/>
                <div className="user-form-field">
                    {/* <label>First Name</label>
                    <input
                        {...register("firstName", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i
                        })}
                    />
                    {errors?.firstName?.type === "required" && <p>This field is required</p>}
                    {errors?.firstName?.type === "maxLength" && (
                        <p>First name cannot exceed 20 characters</p>
                    )}
                    {errors?.firstName?.type === "pattern" && (
                        <p>Alphabetical characters only</p>
                    )}
                    <label>Laste Name</label>
                    <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                    {errors?.lastName?.type === "pattern" && (
                        <p>Alphabetical characters only</p>
                    )} */}
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
                    <input {...register("password")}/>
                    {errors?.password?.type === "required" && <p>Password can't be blank</p>}
                    {errors?.password?.type === "pattern" && (
                        <p>Please Enter Correct Password</p>
                    )}

                </div>
                <input type="submit" value='Sign Up' />

                <div className="sign-in-create-account">
                    Already Signed Up? <Link className="link-route" to='/'>LOG IN</Link>
                </div>
            </form>
        </div>
    );
}

export default SignUp

