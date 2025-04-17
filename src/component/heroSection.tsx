import Logo from '../assets/img/CircleDraft.png';
import HeroPic from '../assets/img/hero_pic.png';
import { useNavigate } from 'react-router-dom';



const Hero = () => {

  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };


  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <img
              src={Logo}
              alt="CircleDraft Logo"
              className="max-w-xs mx-auto lg:mx-0 mb-6"
            />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Share the <span className="text-red-500 font-black">basketball</span> culture,
             
              connect young <span className="text-orange-500 font-black">talent</span>
            </h2>
            <button className="bg-orange-700 text-white font-semibold py-4 px-8 rounded-md hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
           onClick={handleGetStartedClick}
           >
              Get Started
            </button>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center">
            <img
              src={HeroPic}
              alt="Hero Basketball Player"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
