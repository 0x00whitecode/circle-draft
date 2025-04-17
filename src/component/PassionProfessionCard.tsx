import Foot_ball from "../assets/img/foot_ball.png";
import '../App.css'




const PassionProfessionCard = () => {
  return (
    <div className="relative w-full  sm:h-80 md:h-96 lg:h-[30] rounded-xl overflow-hidden mt-4">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#301D18] to-orange-800" />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-start sm:px-6 md:px-10">
        <div className="text-[#E06F26] font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-[60%] sm:max-w-[85%] ml-20">
          Make
          <br />
          Profession
          
          From
          <br />
          Your Passion
        </div>
      </div>

      {/* Responsive Image */}
      <div className="absolute bottom-0 right-0 w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/4 h-full">
        <div className="relative h-full w-full">
          <img
            src={Foot_ball}
            alt="Football inspiration"
            className="absolute bottom-0  right-0 object-contain h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PassionProfessionCard;
