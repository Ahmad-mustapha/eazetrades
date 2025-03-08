import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Logo from '../../assets/logo.png'

const product = [
  { id: 1, text: 'Employee database', link: '' },
  { id: 2, text: 'Payroll', link: '' },
  { id: 3, text: 'Absences', link: '' },
  { id: 4, text: 'Time tracking', link: '' },
  { id: 5, text: 'Shift planner', link: '' },
  { id: 6, text: 'Recruiting', link: '' },
];

const service = [
  { id: 1, text: 'Employee database', link: '' },
  { id: 2, text: 'Payroll', link: '' },
  { id: 3, text: 'Absences', link: '' },
  { id: 4, text: 'Time tracking', link: '' },
  { id: 5, text: 'Shift planner', link: '' },
  { id: 6, text: 'Recruiting', link: '' },
];

const information = [
  { id: 1, text: 'FAQ', link: '' },
  { id: 2, text: 'Blog', link: '' },
  { id: 3, text: 'Support', link: '' },
];

const company = [
  { id: 1, text: 'About us', link: '' },
  { id: 2, text: 'Careers', link: '' },
  { id: 3, text: 'Contact us', link: '' },
  { id: 4, text: 'Lift Media', link: '' },
];

const Footer = () => {
  return (
    <footer className="bg-[#E8E2FF] py-14 px-6 md:px-12 lg:px-20">
      <section className="max-w-7xl mx-auto flex items-start flex-col md:flex-row justify-between gap-8">
        {/* Left Section: Product, Service, Information, Company */}
        <div className="flex flex-wrap justify-between gap-8 w-full md:w-3/4">
          <div>
            <h4 className="text-[#333333] font-[600] mb-4">Product</h4>
            <ul className="space-y-2">
              {product.map((item) => (
                <li key={item.id}>
                  <a className="text-slate-500 hover:text-[#5F3AFB]" href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#333333] font-[600] mb-4">Service</h4>
            <ul className="space-y-2">
              {service.map((city) => (
                <li key={city.id}>
                  <a className="text-slate-500 hover:text-[#5F3AFB]" href={city.link}>{city.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#333333] font-[600] mb-4">Information</h4>
            <ul className="space-y-2">
              {information.map((item) => (
                <li key={item.id}>
                  <a className="text-slate-500 hover:text-[#5F3AFB]" href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#333333] font-[600] mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.id}>
                  <a className="text-slate-500 hover:text-[#5F3AFB]" href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section: Subscribe Form */}
        <div className="w-full md:w-1/4 bg-[#203C860D] p-6 rounded-lg">
          <form>
            <p className="text-[#333333] font-[600] mb-4">Subscribe</p>
            <div className="flex items-center mb-4">
              <input
                className="outline-none bg-white w-full p-2 rounded-l-md"
                type="text"
                placeholder="Your email"
              />
              <button className="bg-[#5F3AFB] p-3 rounded-r-md text-white">
                <FaArrowRight />
              </button>
            </div>
            <p className="text-xs text-slate-500">
              Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.
            </p>
          </form>
        </div>
      </section>
      <section className="mt-12 flex items-center justify-between border-t-2 border-slate-300 pt-10 flex-wrap sm:flex-nowrap">
        <div className="w-[2rem]"><img className="w-full" src={Logo} alt="" /></div>
        <ul className="flex items-center gap-4 font-[500] text-[14px]">
          <li><Link>Terms</Link></li>
          <li><Link>Privacy</Link></li>
          <li><Link>Cookies</Link></li>
        </ul>
        <div className="flex items-center gap-4">
          <span className="border-[2px] border-slate-400 rounded-full p-3"><FaLinkedinIn /></span>
          <span className="border-[2px] border-slate-400 rounded-full p-3"><FaFacebookF /></span>
          <span className="border-[2px] border-slate-400 rounded-full p-3"><FaTwitter /></span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;