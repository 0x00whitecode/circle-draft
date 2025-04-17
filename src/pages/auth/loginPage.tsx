import { useNavigate } from "react-router-dom"; // <-- Import useNavigate
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { inAppWallet, createWallet } from "thirdweb/wallets";
import login_display from "../../assets/img/login_display.png";

// Only use clientId on frontend (remove secretKey)
export const client = createThirdwebClient({
  clientId: "8de0130ba5288b868bfc6ae75a9b5480",
});

// Define supported wallets
const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "telegram",
        "farcaster",
        "email",
        "x",
        "passkey",
        "phone",
        "github",
        "twitch",
        "steam",
        "coinbase",
        "apple",
        "facebook",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

function LoginPage() {
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden h-[80vh] ">
      <div className="flex flex-col md:flex-row w-full max-w-7xl overflow-hidden">

        {/* Left Side Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <img
            src={login_display}
            alt="Login Illustration"
            className="h-auto max-w-[90%] md:max-w-[90%] object-contain "
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome CircleDraft!</h2>
          <p className="text-sm font-bold text-center text-gray-400 mb-10 mt-4">Your first web3 Sporting Platform</p>
        
            <ConnectButton
              client={client}
              wallets={wallets}
              theme="light"
              connectModal={{ size: "wide" }}
              onConnect={() => {
                navigate("/dashboard");
              }}
            />
          

          <div className="w-full flex justify-center mt-4">
            {/* <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <a href="/signup" className="text-indigo-600 font-medium">
                Sign Up
              </a>
            </p> */}
          </div>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;
