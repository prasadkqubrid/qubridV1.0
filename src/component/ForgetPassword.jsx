import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function ForgetPassword() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    console.log(watch("example"));

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    <Link to='/'>
                        <AiOutlineArrowLeft style={{ color: 'white' }} />
                    </Link>
                </div>
                <input type="submit" value='Reset' />
            </form>
        </div>
    );
}

export default ForgetPassword