import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Navbar, Footer } from '@/components/imports';
import './productdetails.css';
import Camera from '../../assets/camera.png';
import { Link } from 'react-router-dom';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// Mock data - in a real app, you would fetch this from an API
const mockProducts = [
  {
    id: 1,
    image: Camera,
    category: "Furniture",
    price: 20000,
    title: "Modern Stool",
    location: "Lagos, Ikeja",
    visits: 16,
    isPremium: true,
    rating: 4.5,
    author: "Furniture Co.",
    description: "A high-quality modern stool perfect for your home or office.",
    content: ["Wooden frame", "Comfortable cushion", "Easy to assemble"],
    format: "Physical Product"
  },
  // Add other products with similar structure
];

const Productdetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(Camera);

  useEffect(() => {
    // Check if product was passed via state (from the Products page)
    if (location.state?.product) {
      setProduct(location.state.product);
      setMainImage(location.state.product.image || Camera);
    } else {
      // Fallback: Find the product in mock data (for direct URL access)
      const foundProduct = mockProducts.find(p => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
        setMainImage(foundProduct.image || Camera);
      }
    }
  }, [id, location.state]);

  if (!product) {
    return <div>Loading...</div>; // Or a proper loading component
  }

  const images = [
    product.image || Camera,
    Camera,
    Camera,
    Camera,
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 md:p-8 mt-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="image-gallery w-5/6 md:w-1/2 lg:w-2/6">
            <div className="main-image mb-4 w-full">
              <img src={mainImage} alt="Main Product" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="thumbnails flex gap-2 overflow-x-auto">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail w-16 h-16 md:w-20 md:h-20 cursor-pointer rounded-lg border-2 border-transparent hover:border-blue-500"
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="product-details w-full md:w-1/2 lg:w-4/6">
            {/* Product Title */}
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.title}</h1>
            
            {/* Product Description - Using the same text twice as in your example */}
            <div className="description mb-6 space-y-2">
              <p className="text-gray-700">{product.description || 'Product description'}</p>
              <p className="text-gray-700">{product.description || 'Product description'}</p>
            </div>

            {/* Price and Details */}
            <div className="details-grid mb-6 grid grid-cols-2 gap-4">
              <div className="detail-item">
                <span className="font-semibold">Price</span>
                <p>₦{product.price.toLocaleString()}</p>
              </div>
              <div className="detail-item">
                <span className="font-semibold">Advert ID</span>
                <p>ID:{product.id}</p>
              </div>
              <div className="detail-item">
                <span className="font-semibold">Category</span>
                <p>{product.category}</p>
              </div>
              <div className="detail-item">
                <span className="font-semibold">Seller</span>
                <p>{product.seller || 'Seller Name'}</p>
              </div>
              <div className="detail-item">
                <span className="font-semibold">Location</span>
                <p>{product.location}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons mb-8 space-y-4">
              <button className="w-full bg-[#0056D2] text-white py-3 rounded-lg font-medium hover:bg-[#0045b0] transition-colors">
                Buy Now
              </button>
              <div className='w-full text-[#0056D2] border border-[#0056D2] py-3 rounded-lg flex items-center justify-center bg-white font-medium hover:bg-gray-50 transition-colors'>
                <Link to={`/message`} className="w-full text-center">
                  Message product owner
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="additional-info">
              <p className="text-sm text-gray-500 mb-4">{product.visits || '1'}) Other people tried this today</p>
              
              <div className="benefits-grid grid grid-cols-2 gap-4 mb-4">
                <div className="benefit-item flex items-center">
                  <span className="mr-2"><IoMdCheckmarkCircleOutline className='text-[1.5rem] text-[#01C014]'/></span>
                  <span>Delivery to your home</span>
                </div>
                <div className="benefit-item flex items-center">
                  <span className="mr-2"><IoMdCheckmarkCircleOutline className='text-[1.5rem] text-[#01C014]'/></span>
                  <span>Delivery to your home</span>
                </div>
                <div className="benefit-item flex items-center">
                  <span className="mr-2"><IoMdCheckmarkCircleOutline className='text-[1.5rem] text-[#01C014]'/></span>
                  <span>Other benefits</span>
                </div>
                <div className="benefit-item flex items-center">
                  <span className="mr-2"><IoMdCheckmarkCircleOutline className='text-[1.5rem] text-[#01C014]'/></span>
                  <span>Other benefits</span>
                </div>
                <div className="benefit-item flex items-center">
                  <span className="mr-2"><IoMdCheckmarkCircleOutline className='text-[1.5rem] text-[#01C014]'/></span>
                  <span>Other benefits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className='text-[40px] font-[500]'>Product details</h3>
          <p className='text-[18px] font-[300]'>Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
            Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
            per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, 
            eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. . Donec ut rhoncus ex. 
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
        </div>
        <div>
          <h3 className='text-[40px] font-[500] mt-10'>Features of this product</h3>
          <p className='text-[18px] font-[300]'>Borem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className='text-[18px] font-[300]'>Borem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className='text-[18px] font-[300]'>Borem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className='text-[18px] font-[300]'>Borem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className='text-[18px] font-[300]'>Borem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className='text-[18px] font-[300]'>Borem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Productdetails;