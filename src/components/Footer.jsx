const Footer = () => {
  return (
    <footer className="bg-[#F5F2EB] text-black p-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About the Brand */}
        <div>
          <h3 className="font-bold text-sm">ABOUT THE BRAND</h3>
          <p className="text-md mt-4">
            All products in this store are for demo purposes only. They have
            been generously provided by Wolf Circus and Alohas.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-7">
            <span class="[&>svg]:h-3 [&>svg]:w-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>

            <span className="[&>svg]:h-3 [&>svg]:w-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
              </svg>
            </span>
          </div>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="font-bold text-sm">CUSTOMER CARE</h3>
          <ul className="text-md mt-3 space-y-4">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold text-sm">RESOURCES</h3>
          <ul className="text-md mt-3 space-y-4">
            <li>
              <a href="#">Jewelry Care</a>
            </li>
            <li>
              <a href="#">Sizing</a>
            </li>
            <li>
              <a href="#">Shipping Policy</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="font-bold text-sm ">STAY IN TOUCH</h4>
          <p className="text-lg mt-3 space-y-4">
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>
          <input
            type="text"
            placeholder="Name"
            className="w-full mt-4 border-b border-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full  mt-6 border-b border-black"
          />
          <button className="w-full bg-black text-white p-2 py-1 mt-4">
            JOIN
          </button>
          <h4 className="text-xs mt-4">
            This site is protected by hCaptcha and the hCaptcha Privacy Policy
            and Terms of Service apply.
          </h4>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div className="md:text-[21vw] text-[18vw]  font-serif  text-black  ">
          Broadcast
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center pt-6 text-sm">
        {/* Left Side - Language and Currency */}
        <div className="flex space-x-4 mb-2  mr-15">
          <button className="border border-gray-400 py-2 px-6">English</button>
          <button className="border border-gray-400 py-2 px-6">CAD $</button>
        </div>
        {/* Right Side - Policies and Copyright */}
        <div className="flex flex-col md:flex-row md:space-x-4 text-center md:text-left mt-4">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex justify-center md:justify-start space-x-2 md:space-x-4">
              <a href="#">© Broadcast Clean 2025</a>
              <a href="#">Shipping Policy</a>
            </div>
            <div className="flex justify-center md:justify-start space-x-2 md:space-x-4">
              <a href="#">Refund Policy</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
            <div className="flex justify-center md:justify-start">
              <a href="#">Powered by Shopify</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
