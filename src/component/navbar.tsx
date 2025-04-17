import Logo from '../assets/img/CircleDraft.png'
import '../App.css'

const Navbar = () => {
  return (
    <nav className="bg-[#D9D9D9] py-4 shadow-lg px-8 rounded-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
         
          <img src={Logo} className="font-bold text-xl text-red-500 mr-12" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 px-12">
          <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Tournament</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Drafts</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Leader Board</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">About us</a>
        </div>

        {/* Mobile Menu (you would typically add a hamburger icon and dropdown here) */}
        <div className="md:hidden">
          {/* Add your mobile menu icon here */}
          {/* Example: */}
          {/* <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" clipRule="evenodd" />
            </svg>
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;