import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Additional icons for social media

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white py-6 mt-4 shadow-lg border-t-2 border-gray-700">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
        
        {/* Section 1: About */}
        <div>
          <h4 className="font-semibold text-lg mb-2">About</h4>
          <p className="text-sm md:text-base font-light">
            This project is built with passion and dedication. Visit the GitHub repository for more details.
          </p>
        </div>

        {/* Section 2: Links */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <a href="https://github.com/mehul-m-prajapati" target="_blank" rel="noreferrer" className="hover:underline hover:text-gray-300 transition">
                GitHub Profile
              </a>
            </li>
            <li>
              <a href="https://github.com/mehul-m-prajapati/github_tracker" target="_blank" rel="noreferrer" className="hover:underline hover:text-gray-300 transition">
                GitHub Tracker
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Social Media */}
        <div className="flex justify-center md:justify-start space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/mehul-m-prajapati" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-gray-300 transition">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-gray-300 transition">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/mehulmp/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-gray-300 transition">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-sm text-center">
        <p>&copy; 2024 <span className="font-semibold">GitHub Tracker</span>. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;


