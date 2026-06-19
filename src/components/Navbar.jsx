import { useState } from "react";
import { HiArrowRight, HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
          DeepRank
        </h1>

        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-10 text-gray-700">
            <li className="cursor-pointer hover:text-blue-700">Products</li>

            <li className="cursor-pointer hover:text-blue-700">Services</li>

            <li className="cursor-pointer hover:text-blue-700">Case Study</li>

            <li className="cursor-pointer hover:text-blue-700">Contact Us</li>
          </ul>
        </nav>

        <button className="hidden lg:flex bg-blue-900 text-white px-6 py-3 rounded-md items-center gap-2 hover:bg-blue-800 transition">
          Book Discovery Call
          <HiArrowRight />
        </button>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50 animate-in slide-in-from-top duration-300">
          <div className="px-6 py-6">
            <ul className="flex flex-col gap-2 text-gray-800 font-medium">
              <li className="py-3 px-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition">
                Products
              </li>

              <li className="py-3 px-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition">
                Services
              </li>

              <li className="py-3 px-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition">
                Case Study
              </li>

              <li className="py-3 px-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition">
                Contact Us
              </li>
            </ul>
            <button className="mt-6 w-full bg-[#0B0F9C] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#090c7a] transition">
              Book Discovery Call
              <HiArrowRight />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
