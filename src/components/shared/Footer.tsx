'use client';

import {
  FaPinterestP,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPaperPlane,
  FaYoutube
} from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#880808] text-white text-sm w-full">

      {/* --- ✅ MOBILE VERSION (Figma design) --- */}
      <div className="block sm:hidden max-w-md mx-auto px-4 py-10 flex flex-col gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-3">Restaurant</h2>
          <p className="mb-3">
            Subscribe our newsletter and <br /> get discount 25%off
          </p>

          {/* Email Input */}
          <div className="flex bg-white rounded-md overflow-hidden w-full mb-4">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="px-3 py-2 w-full text-sm text-black focus:outline-none"
            />
            <button className="bg-[#A52A2A] px-4 text-white flex items-center justify-center">
              <FaPaperPlane size={14} />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-[#A52A2A] text-lg">
            <FaPinterestP />
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-4">Contact us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-1" />
              <span>3517 W. Gray St. Utica, Pennsylvania 57867</span>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone />
              <span>00965 - 96659986</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMail />
              <span>M.Alyaqout@4house.Co</span>
            </li>
            <li className="flex items-center gap-2">
              <FiClock />
              <span>Sun - Sat / 10:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-4">Links</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#">About us</a>
            <a href="#">Team</a>
            <a href="#">FAQ</a>
            <a href="#">Our Menu</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="bg-[#A52A2A] py-3 text-center text-xs mt-6">
          Copyright © 2024. All rights reserved
        </div>
      </div>

      {/* --- ✅ DESKTOP/TABLET VERSION (Your existing design) --- */}
      <div className="hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-bold mb-4">RESTAURANT</h2>
            <p className="mb-3 text-sm">
              Subscribe our newsletter and <br /> get discount 25% off
            </p>
            <div className="flex bg-white rounded overflow-hidden mb-4 max-w-full">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="px-3 py-2 w-full text-sm text-black focus:outline-none"
              />
              <button className="bg-[#A52A2A] px-3 text-white">
                <FaPaperPlane size={14} />
              </button>
            </div>
            <div className="flex gap-3 text-[#A52A2A] text-lg">
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

          {/* Instagram */}
          <div>
            <h3 className="font-semibold mb-4">Instagram Gallery</h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded">
                  <Image
                    src={`/images/insta${i}.jpg`}
                    alt={`Insta ${i}`}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Bottom */}
        <div className="bg-[#A52A2A] py-4 px-4 sm:px-6 md:px-24 flex flex-col sm:flex-row items-center justify-between text-xs gap-2 text-center">
          <p>Copyright © 2025. All rights reserved</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Term of Use</a>
            <a href="#">Partner</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
