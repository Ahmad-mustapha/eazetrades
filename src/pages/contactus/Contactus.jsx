import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Contactus = () => {
  return (
    <div className="text-[#333] bg-[#F9F7FF]">
      <div className="flex items-center flex-col justify-center bg-[] p-14 pb-18">
        <h1 className="text-[28px] md:text-[45px] text-[#333] font-[600] mb-4">Contact Us</h1>
        <p className="text-[#333] text-[20px] md:text-[30px] font-[300]">We're Here to Help!</p>
        <p className="text-[#333] text-[20px] md:text-[28px] font-[300] text-center">At EAZETRADES, your satisfaction is our top priority. Whether you have a question, need assistance with an order, or want to provide feedback, we're here to listen and help. <br /> Reach out to us through any of the following channels</p>
      </div>
      <div className="flex justify-center flex-wrap-reverse mx-auto gap-8 py-20 p-6 bg-[#EEEAFF]">
        <div className="flex-1 min-w-[300px] rounded-lg bg-white p-4 md:p-10">
          <h1 className="text-[25px] text-center md:text-[35px] font-bold mb-6">Contact form</h1>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Placeholder"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Placeholder"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Placeholder"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Placeholder"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-full bg-[#5F3AFB] text-white py-3 px-6 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 flex flex-col gap-2 min-w-[300px] p-4 md:p-16 lg:p-20">
          <h2 className="text-[45px] font-[500] mb-6">EAZETRADES</h2>

          {/* Address */}
          <div className="mb-6">
            <h3 className="text-[22px] md:text-[28px] font-semibold mb-2">Address</h3>
            <p className="text-[16px] md:text-[20px] text-gray-600">
              Borem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
            </p>
          </div>

          {/* Email Us */}
          <div className="mb-6">
            <h3 className="text-[22px] md:text-[28px] font-semibold mb-2">Email us</h3>
            <p className="text-[16px] md:text-[20px] text-gray-600">
              Borem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
            </p>
          </div>

          {/* Call Us */}
          <div className="mb-6">
            <h3 className="text-[22px] md:text-[28px] font-semibold mb-2">Call us</h3>
            <p className="text-[16px] md:text-[20px] text-gray-600">
              Borem ipsum dolor sit amet,
              <br />
              Monday - Friday: 9:00 AM to 6:00 PM
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="border-[1px] border-slate-400 rounded-full p-3"><FaLinkedinIn /></span>
              <span className="border-[1px] border-slate-400 rounded-full p-3"><FaFacebookF /></span>
              <span className="border-[1px] border-slate-400 rounded-full p-3"><FaTwitter /></span>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full mx-auto sm:w-5/6 h-[350px] pb-10 relative bottom-10">
        <iframe width="100%" className='h-full' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
      </section>
    </div>
  );
};

export default Contactus;