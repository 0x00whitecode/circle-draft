import backgroundImage from '../assets/img/pattern.png'; // Import your image file
import Rolling_ball from '../assets/img/bin-6550_256.gif'; // Import your image file

function BasketballBroadcast() {
  return (
    <div
      className="flex items-center justify-center  bg-cover bg-center mt-20 px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="p-6 md:p-8 flex flex-col md:flex-row items-center  md:space-x-8 space-y-6 md:space-y-0">
        {/* Basketball Image */}
        <div className="relative w-48 h-48 md:w-72 md:h-72">
          <img src={Rolling_ball} alt="" className="w-full h-full" />
        </div>

        {/* Text and Button */}
        <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
          <div className="text-6xl md:text-2xl font-black text-gray-800">Broadcast Local</div>
          <div className="text-4xl md:text-3xl font-black text-blue-600">League live</div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline">
            Stream
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketballBroadcast;
