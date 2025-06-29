import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#F6F7FA] pt-12 pb-6 font-poppins">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About College */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="mb-4">
              AIBS est une institution de formation supérieure qui a pour slogan <br />« UN PAS SÛR VERS L’ENTREPRISE ! »
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook"><FaFacebook className="text-xl hover:text-blue-400" /></a>
              <a href="#" aria-label="Twitter"><FaTwitter className="text-xl hover:text-blue-400" /></a>
              <a href="#" aria-label="Instagram"><FaInstagram className="text-xl hover:text-blue-400" /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin className="text-xl hover:text-blue-400" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Programs</a></li>
              <li><a href="#" className="hover:text-blue-400">Admissions</a></li>
              <li><a href="#" className="hover:text-blue-400">Campus Life</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Undergraduate</a></li>
              <li><a href="#" className="hover:text-blue-400">Graduate</a></li>
              <li><a href="#" className="hover:text-blue-400">Doctoral</a></li>
              <li><a href="#" className="hover:text-blue-400">Professional Certificates</a></li>
              <li><a href="#" className="hover:text-blue-400">Online Learning</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <span>123 College Ave, University City, State 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" />
                <span>info@college.edu</span>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-3" />
                <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} College Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}