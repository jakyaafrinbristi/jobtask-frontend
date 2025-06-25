import { FaPinterestP, FaTwitter, FaFacebookF, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#880808] text-white text-sm">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
       
        <div>
          <h2 className="text-lg font-bold mb-4">RESTAURANT</h2>
          <p className="mb-3">Subscribe our newsletter and <br /> get discount 25%off</p>
          <div className="flex bg-white rounded overflow-hidden mb-4 w-full max-w-[250px]">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="px-3 py-2 w-full text-sm text-black focus:outline-none"
            />
            <button className="bg-[#A52A2A] px-3 text-white">
              <FaPaperPlane size={14} />
            </button>
          </div>
          <div className="flex gap-4 text-[#A52A2A] text-lg">
            <FaPinterestP />
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <button className="bg-[#A52A2A] w-5 h-5 rounded-sm"></button>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact us</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 3517 W. Gray St. Utica, Pennsylvania 57867</li>
            <li>📞 (480) 555-0103</li>
            <li>✉️ M.Alyaqout@4house.Co</li>
            <li>🕒 Sun - Sat / 10:00 AM - 8:00 PM</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Our Menu</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Instagram Gallery */}
        <div>
          <h3 className="font-semibold mb-4">Instagram Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-20 h-20 overflow-hidden rounded">
                <Image
                  src={`/images/insta${i}.jpg`} 
                  alt={`Insta ${i}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom  */}
      <div className="bg-[#A52A2A] py-4 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between text-xs">
        <p className="mb-2 md:mb-0">Copyright © 2025. All rights reserved</p>
        <div className="flex gap-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Term of Use</a>
          <a href="#">Partner</a>
        </div>
      </div>
    </footer>
  );
}
