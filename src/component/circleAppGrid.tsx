import RunBall from "../assets/img/run_ball.png";
import CatchBall from "../assets/img/catch_ball.png";
import ShotBall from "../assets/img/shotting_ball.png";

const CircleAppGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto p-4 min-h-screen mt-20">
      {/* Column 1 */}
      <div className="space-y-4">
        {/* CircleDraft */}
        <div className="relative overflow-hidden bg-black h-[350px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="absolute inset-0 flex flex-col justify-center items-end px-6 z-10">
            <div className="">
              <div>
                <h2 className="text-yellow-400 text-5xl font-bold leading-tight">
                  Build Your
                </h2>
                <h2 className="text-yellow-400 text-4xl font-extrabold leading-tight">
                  Profile
                </h2>
                <div className="flex mt-4">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current text-yellow-400 mr-1"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.176-6.545L.587 7.26l6.545-1.176L10 0l2.868 6.084 6.545 1.176-4.706 4.385 1.176 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <img
                src={CatchBall}
                alt="Build Your Profile"
                className="absolute inset-0 w-full h-full object-contain object-left"
              />
            </div>
          </div>
          <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-sm font-bold py-1 px-3 rounded-md">
            Circle<span className="text-red-500">Draft</span>
          </div>
        </div>

        {/* CircleLive */}
        <div className="relative overflow-hidden bg-yellow-400 h-[168px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="w-full h-full flex items-center p-6 text-black">
            <div>
              <h2 className="text-3xl font-extrabold">Watch Live</h2>
              <h2 className="text-2xl font-extrabold">Tournaments</h2>
            </div>
          </div>
          <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-sm font-bold py-1 px-3 rounded-md">
            Circle<span className="text-red-500">Live</span>
          </div>
        </div>
      </div>

      {/* Column 2 */}
      <div className="space-y-4">
        {/* CircleTeam */}
        <div className="relative overflow-hidden bg-[#3d1d1d] h-[268px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src={ShotBall}
            alt="Organized Tournaments"
            className="absolute inset-0 w-full h-full object-contain object-right "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 z-10">
            <h2 className="text-white text-5xl font-extrabold">Organized</h2>
            <h2 className="text-white text-4xl font-extrabold">Tournaments</h2>
          </div>
          <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-sm font-bold py-1 px-3 rounded-md">
            Circle<span className="text-red-500">Team</span>
          </div>
        </div>

        {/* CircleCoin */}
        <div className="relative overflow-hidden bg-gray-400 h-[250px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src={RunBall}
            alt="Earn Money"
            className="absolute bottom-0 right-0 h-full object-contain"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 z-10">
            <h2 className="text-white text-4xl  px-10 font-extrabold">Earn</h2>
            <h2 className="text-yellow-400 text-4xl px-10 font-extrabold">Money</h2>
          </div>
          <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-sm font-bold py-1 px-3 rounded-md">
            Circle<span className="text-red-500">Coin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleAppGrid;
