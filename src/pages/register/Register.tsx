import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


interface InputItem {
    name: string;
    type: string;
    label: string;
    placeholder: string;
}

const Inputs: InputItem[] = [
    {
        label: "Username",
        name: "username",
        type: "text",
        placeholder: "Enter your Username"
    },
    {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "Enter your Email"
    },
   
    {
        label: "Password",
        name: "password",
        type: "password",
        placeholder: "Enter your Password"
    },
    {
        label: "Confirm Password",
        name: "cpassword",
        type: "password",
        placeholder: "Enter your Confirm Password"
    }
];

function Register() {
    const [signup, setSignup] = useState({
        username: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });

    const [error, setError] = useState(false);
   

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const { username, email, password, cpassword } = signup;

        try {
            const res = await fetch(`/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    cpassword
                }),
            });

            if (res.status === 201) {
            
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        }
    };

    return (
        <>
        <Navbar/>
            <div className="py-10 flex  justify-center items-center">
                <div className='w-full md:w-[40%] boreder-[#333] border-[1px] py-5 px-10 bg-[#FFF]'>
                    <img className='mt-5' src={logo} alt='not found' width={200} height={100} />
                    <form onSubmit={handleSubmit} className='mt-5 flex flex-col gap-5' action="">
                        {Inputs.map((item, ind) => (
                            <div key={ind}>
                                <label className='text-[#000000] block font-bold  text-xl' htmlFor={item.name}>{item.label} :</label>
                                <input
                                    className='w-full rounded-lg py-3 px-6 border-2 text-[#000000] border-[#000000]'
                                    type={item.type}
                                    name={item.name}
                                    placeholder={item.placeholder}
                                    onChange={(e) => setSignup((prev) => ({ ...prev, [item.name]: e.target.value }))}
                                    required
                                />
                            </div>
                        ))}

                        {error && <h6 className='text-center mt-2 text-[red]'>wrong credentials</h6>}

                        <button className='py-4 hover:-translate-y-1 transition duration-400 rounded-lg px-6 text-2xl font-meduim bg-[#FF9B24] text-[#FFFFFF]'>Sign Up</button>
                    </form>
                    
                    <h5 className='cursor-pointer mt-5 text-center text-lg font-normal  text-[#333]'>Already have an account? <Link to="/login" className='text-[#097DEB]'>Sign in</Link></h5>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Register;
