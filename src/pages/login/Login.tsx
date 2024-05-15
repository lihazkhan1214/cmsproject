import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface InputItem {
    name: string;
    label: string;
    type: string;
    rlable: string;
    placeholder: string;
}

const Inputs: InputItem[] = [
    {
        rlable: "Email",
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "Enter your Email"
    },
    {
        rlable: "New Password",
        label: "Password",
        name: "password",
        type: "password",
        placeholder: "Enter your Password"
    }
];

function Login() {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });
    const [forget, setForget] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log("login state", login);
        // Implement static handling of form submission, like validation, etc.
        // For static demonstration, just redirect to another page.
    };

    const handleForget = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // Implement static handling of forget password functionality.
        // For static demonstration, just toggle the forget state.
        setForget(!forget);
    };

    const changeForget = (): void => {
        setForget(!forget);
    };

    return (
        <>
        <Navbar/>
            {forget === true ? (
                <div className="py-10  flex justify-center items-center">
                    <div className='w-full md:w-[40%] boreder-[#333] border-[1px] py-5 px-10 bg-[#FFF]'>
                        <img className='mt-5 w-full h-full' src={logo} alt='not found'  />
                        <form onSubmit={handleForget} className='mt-5 flex flex-col gap-5' action="">
                            {Inputs.map((item, ind) => (
                                <div key={ind}>
                                    <label className='text-[#000000] block font-bold  text-xl'>{item.rlable} :</label>
                                    <input
                                        className='w-full rounded-lg py-3 px-6 border-2 placeholder:text-[#000000] border-[#000000]'
                                        type={item.type}
                                        name={item.name}
                                        placeholder={item.placeholder}
                                        onChange={(e) => setLogin((prev) => ({ ...prev, [item.name]: e.target.value }))}
                                        required
                                    />
                                </div>
                            ))}
                            {error && <h6 className='text-center mt-2 text-[red]'>wrong credentials</h6>}
                            <button type='submit' className='py-4 rounded-lg hover:-translate-y-1 transition duration-400 px-6 text-2xl font-meduim bg-[#FF9B24] text-[#FFF]'>Send</button>
                            <span className='text-lg text-center font-normal text-[#333] cursor-pointer' onClick={changeForget}>Back to Sign In</span>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="py-10 flex justify-center items-center">
                    <div className='w-full md:w-[40%] boreder-[#333] border-[1px] py-5 px-10 bg-[#FFF]'>
                        <img className='mt-5' src={logo} alt='not found' width={200} height={100} />
                        <form onSubmit={handleSubmit} className='mt-5 flex flex-col gap-5' action="">
                            {Inputs.map((item, ind) => (
                                <div key={ind}>
                                    <label className='text-[#000000] block font-bold  text-xl'>{item.label} :</label>
                                    <input
                                        className='w-full rounded-lg py-3 px-6 border-2 placeholder:text-[#000000] border-[#000000]'
                                        type={item.type}
                                        name={item.name}
                                        placeholder={item.placeholder}
                                        onChange={(e) => setLogin((prev) => ({ ...prev, [item.name]: e.target.value }))}
                                        required
                                    />
                                </div>
                            ))}
                            <button type='submit' className='py-4 hover:-translate-y-1 transition duration-400 rounded-lg px-6 text-2xl font-meduim bg-[#FF9B24] text-[#FFF]'>Sign In</button>
                            <div className='flex items-center gap-5 justify-between'>
                                <div className='flex gap-5 items-center'>
                                    <input className='w-[20px] h-[20px]' type="checkbox" />
                                    <label className='text-lg font-normal text-[#333]' htmlFor="">Remember me</label>
                                </div>
                                <span className='text-lg font-normal text-[#333] cursor-pointer' onClick={changeForget}>Forget Password?</span>
                            </div>
                        </form>
                     
                        <h5 className='cursor-pointer mt-5 text-center text-lg font-normal  text-[#333]' >Don’t have an account?<span className='text-[#097DEB]'>Sign up</span></h5>
                    </div>
                </div>
            )}

            <Footer/>
        </>
    );
}

export default Login;
