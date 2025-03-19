import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';

export const Checkmail = () => {

const handleSubmit = (e) => {
  e.preventDefault();
  // Simulate sending OTP to the user's email
};
  return (
    <div className="flex items-center justify-center bg-gray-100 py-10 h-screen text-[#333]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center items-center gap-2">
          <div className="md:w-[2rem] w-[1.8rem]">
            <img className="w-full" src={Logo} alt="Logo" />
          </div>
          <p className="flex md:text-[19px] font-bold text-[#333]">EAZETRADES</p>
        </div>
        <h1 className="text-2xl font-bold mb-5 text-center">Check your mail</h1>
        <p className="mb-3">We have sent an email with password reset information to n****e@e***e.com.</p>
        <p className="mt-6">Didn't receive the email? Check spam or promotion folder or</p>
        <button className="w-full bg-[#5F3AFB] rounded-[100px] py-2 text-white font-[600] text-[18px] mt-6">
            Send
        </button>
        <div className="w-full text-[#5F3AFB] flex items-center justify-center font-[600] text-[18px] mt-6">
        <Link to='/login' className="w-full py-2 border-[2px] border-[#5F3AFB] rounded-[100px] text-center">
            Back to sign in
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Checkmail