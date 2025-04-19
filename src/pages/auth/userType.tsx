// src/pages/LoginPage.jsx

import { useNavigate } from "react-router-dom";
import login_display from "../../assets/img/Group33.png";
import logo_display from "../../assets/img/CircleDraft_one.png";




function UserType() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full">
      {/* Top Logo */}
      

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-10 mt-4 md:mt-0 flex-grow">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <img
            src={login_display}
            alt="Login Illustration"
            className="w-full max-w-[90%] md:max-w-[90%] object-contain"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center">
          <img src={logo_display} alt="Logo Display" className="w-[120px] mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#990000] mb-6">
            Select Account Type
          </h2>

          <div className="w-full space-y-10">
            {/* Player Box */}
            <div
              onClick={() => navigate("/player")}
              className="group rounded-lg cursor-pointer p-[2px] bg-transparent transition-all duration-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-400"
            >
              <div className="bg-gray-100 rounded-lg p-4 flex items-center transition-all duration-500 group-hover:shadow-lg">
                <div className="relative w-6 h-6 mr-3">
                  <div className="absolute top-0 left-0 w-3 h-3 bg-blue-500 "></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-orange-500 "></div>
                </div>
                <span className="text-lg text-gray-700 transition-all duration-500 group-hover:text-[#990000]">
                  Player
                </span>
              </div>
            </div>

            {/* Organized Tournament Box */}
            <div
              onClick={() => navigate("/tournament")}
              className="group rounded-lg cursor-pointer p-[2px] bg-transparent transition-all duration-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-400"
            >
              <div className="bg-gray-100 rounded-lg p-4 flex items-center transition-all duration-500 group-hover:shadow-lg">
                <div className="relative w-6 h-6 mr-3">
                  <div className="absolute top-0 left-0 w-3 h-3 bg-red-600 "></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-400 "></div>
                </div>
                <span className="text-lg text-gray-700 transition-all duration-500 group-hover:text-[#990000]">
                  Organized Tournament
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserType;
