

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-center md:justify-start">
          <img
            src="data:image/jpeg;base64,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"
            alt="Logo"
            className="h-12 w-12 mr-2"
          />
          <h2 className="text-lg font-semibold">Singerella</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
          <div className="md:mr-8">
            <h3 className="text-gray-400 font-semibold mb-2">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instruments
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a9 9 0 100 18A9 9 0 0010 1zm0 16a7 7 0 100-14 7 7 0 000 14zm2.707-9.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 101.414-1.414L11.414 10l1.293-1.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.939 2a1 1 0 00-.765.36L3.25 6H2a1 1 0 00-1 1v6a1 1 0 001 1h1v2a1 1 0 001.707.707l2.5-2.5A2 2 0 008.25 14H15a1 1 0 001-1V3a1 1 0 00-1-1H7.939zM4.293 8H6.25a1 1 0 01.707.293L10 11.586l1.646-1.646a1 1 0 011.414 0L16 11.586V5H4.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <a href="mailto:info@singerella.com" className="text-gray-400 hover:text-white">
                  info@singerella.com
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.828 3.086a1 1 0 01.172 1.32l-2.586 4.5A1 1 0 019 9.5h2.5a1 1 0 01.85 1.53l-2.586 4.5a1 1 0 01-1.702-.232l-1.5-3a1 1 0 111.802-.874L10.4 14H13a1 1 0 01.809.419l3 4a1 1 0 01-1.638 1.163l-2.333-3.11L10.4 18.8A1 1 0 019 18.5H6.5a1 1 0 01-.85-1.53l2.586-4.5a1 1 0 011.638.162l1.5 3a1 1 0 11-1.802.874l-1.5-3.001L6 8.2A1 1 0 017 7.5H4a1 1 0 01-.809-.419l-3-4a1 1 0 111.638-1.163l2.333 3.11L6.6 1.2A1 1 0 017 1.5H9a1 1 0 01.828 1.586L8.242 6l1.586 2.914A1 1 0 019 9.5H6.5H5h-2H1a1 1 0 110-2h1.5H5H6.5H9h.5H13H14.5H16h2a1 1 0 110 2h-1.5H14H12.5H11h-.5H9.828z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-400">123 Music Street, City, Country</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 py-4 bg-gray-800 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Singerella. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
