import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';

const Forgetpassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

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
        <h1 className="text-2xl font-bold mb-5 text-center">Forgot password</h1>
        <p className="mb-3">Enter the email you used to create your account so we can send you instructions on how to reset your password.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F3AFB]"
              required
            />
          </div>
          <button className="w-full bg-[#5F3AFB] rounded-[100px] py-2 text-white font-[600] text-[18px] mt-6">
            Send
          </button>
          <div className="w-full text-[#5F3AFB] flex items-center justify-center font-[600] text-[18px] mt-6">
            <Link to='/login' className="w-full py-2 border-[2px] border-[#5F3AFB] rounded-[100px] text-center">
              Back to sign in
            </Link>
          </div>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/signup" className="text-[#5F3AFB] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Forgetpassword