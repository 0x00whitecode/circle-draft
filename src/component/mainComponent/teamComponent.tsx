
import banner from '../../assets/img/banner.png';
import TeamCard from './teamCard';



const TeamComponents = () => {
  return (
    <div className="bg-gray-100  font-sans ">
      {/* Header Section */}
      <div className="py-8  text-white flex justify-center items-center">
        <div className="container px-4 flex justify-center items-center">
          <img src={banner} alt="Banner here" className="" />
        </div>
      </div>

      {/* Top Teams Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Top Teams</h2>
          <button className="text-blue-600 text-sm font-medium hover:underline">See more</button>
        </div>
        <div className="container mx-auto px-4 mt-4 flex  justify-center items-center">
          {/* Team Cards */}
         
        <TeamCard />
            
         
          {/* Add more team cards here */}
        </div>
      </div>

      {/* Connect and Collaborate Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Connect and collaborate</h2>
          <p className="text-gray-600 text-sm">Bridge the distance and play together effortlessly.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Team Collaboration Cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img src="/real-flames-logo-1.png" alt="Real Flames Logo" className="w-full h-24 object-cover" /> {/* Placeholder image */}
              <div className="absolute inset-0 bg-black opacity-20"></div> {/* Dark overlay */}
              <div className="absolute top-2 left-2 bg-blue-500 text-white rounded-full px-2 py-1 text-xs font-bold">R</div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800">Real Flames</h3>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500 text-sm mr-1">★★★★☆</span>
                <span className="text-gray-500 text-xs">4.2</span>
              </div>
              <p className="text-gray-600 text-xs mt-1">Reached the finals in the 2024 season, finishing as runners-up.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img src="/real-flames-logo-2.png" alt="Real Flames Logo" className="w-full h-24 object-cover" /> {/* Placeholder image */}
              <div className="absolute inset-0 bg-black opacity-20"></div> {/* Dark overlay */}
              <div className="absolute top-2 left-2 bg-blue-500 text-white rounded-full px-2 py-1 text-xs font-bold">R</div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800">Real Flames</h3>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500 text-sm mr-1">★★★★☆</span>
                <span className="text-gray-500 text-xs">4.2</span>
              </div>
              <p className="text-gray-600 text-xs mt-1">Reached the finals in the 2024 season, finishing as runners-up.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img src="/real-flames-logo-3.png" alt="Real Flames Logo" className="w-full h-24 object-cover" /> {/* Placeholder image */}
              <div className="absolute inset-0 bg-black opacity-20"></div> {/* Dark overlay */}
              <div className="absolute top-2 left-2 bg-blue-500 text-white rounded-full px-2 py-1 text-xs font-bold">R</div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800">Real Flames</h3>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500 text-sm mr-1">★★★★☆</span>
                <span className="text-gray-500 text-xs">4.2</span>
              </div>
              <p className="text-gray-600 text-xs mt-1">Reached the finals in the 2024 season, finishing as runners-up.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img src="/real-flames-logo-4.png" alt="Real Flames Logo" className="w-full h-24 object-cover" /> {/* Placeholder image */}
              <div className="absolute inset-0 bg-black opacity-20"></div> {/* Dark overlay */}
              <div className="absolute top-2 left-2 bg-blue-500 text-white rounded-full px-2 py-1 text-xs font-bold">R</div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800">Real Flames</h3>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500 text-sm mr-1">★★★★☆</span>
                <span className="text-gray-500 text-xs">4.2</span>
              </div>
              <p className="text-gray-600 text-xs mt-1">Reached the finals in the 2024 season, finishing as runners-up.</p>
            </div>
          </div>
          {/* Add more team collaboration cards here */}
        </div>
      </div>

      
    </div>
  );
};

export default TeamComponents;