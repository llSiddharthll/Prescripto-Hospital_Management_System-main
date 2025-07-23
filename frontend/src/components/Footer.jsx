import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/* -------- Left Column -------- */}
        <div>
          <img
            className="mb-5 w-40"
            src={assets.logo}
            alt="Prescripto Logo" // ✅ Accessibility fix
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* -------- Company Links -------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/about" className="hover:text-primary">About us</a></li>
            <li><a href="/delivery" className="hover:text-primary">Delivery</a></li>
            <li><a href="/privacy-policy" className="hover:text-primary">Privacy policy</a></li>
          </ul>
        </div>

        {/* -------- Contact Links -------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li><a href="tel:+12124567890" className="hover:text-primary">+1-212-456-7890</a></li>
            <li><a href="mailto:prescripto@gmail.com" className="hover:text-primary">prescripto@gmail.com</a></li>
          </ul>
        </div>

      </div>

      {/* -------- Copyright -------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-500">
          © 2024 Prescripto.com - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
