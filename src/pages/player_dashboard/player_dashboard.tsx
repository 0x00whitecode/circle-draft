import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConnectButton } from "thirdweb/react";
import { useActiveAccount, useDisconnect } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import Loader from "../../assets/img/loading.gif";
import logo from "../../assets/img/CircleDraft.png";
import UserType from "../auth/userType";
// import PlayerForm from "../auth/playrFoam";
// import CaptureImage from "../../component/captureImage";


// Use the same client config as in LoginPage
export const client = createThirdwebClient({
  clientId: "8de0130ba5288b868bfc6ae75a9b5480",
});

function Dashboard() {
  const account = useActiveAccount();
  const disconnect = useDisconnect();
  const navigate = useNavigate();
  const [balance, setBalance] = useState(null);
  const [isGatedContentVisible, setIsGatedContentVisible] = useState(false);
  const [loading, setLoading] = useState(true); // loading state

  // Redirect to home if not logged in
  useEffect(() => {
    if (!account) {
      navigate("/");
    } else {
      // Save account address to localStorage
      localStorage.setItem('walletAddress', account.address);
      setLoading(false); // set loading to false once the account is connected
    }
  }, [navigate, account]);

  // Fetch wallet balance and check if the user has enough $TWCOIN
  useEffect(() => {
    const fetchBalance = async () => {
      if (account) {
        try {
          const bal = await client.getBalance({
            address: account.address,
          });
          setBalance(bal.displayValue);

          // Assuming a function that checks if the user has more than 10 $TWCOIN
          if (parseFloat(bal.displayValue) > 10) {
            setIsGatedContentVisible(true);
          }
        } catch (error) {
          console.error("Error fetching balance:", error);
        }
      }
    };
    fetchBalance();
  }, [account]);

  return (
    <div className="min-h-screen flex flex-col ">
      {loading ? ( // Show loading GIF while account is connecting
        <div className="flex items-center justify-center p-8">
          <img src={Loader} alt="Loading..." className="w-16 h-16" />
        </div>
      ) : (
        <>
          {/* Top Navigation */}
          <header className="w-full  p-4  fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
              <img
                src={logo}
                alt="Logo"
                className="w-[70%] max-w-[100px] object-contain"
              />
              <div>
                <ConnectButton
                  client={client}
                  theme="light"
                  
                  onConnect={() => navigate("/dashboard")}
                />
              </div>
            </div>
          </header>

          {/* Content */}
            <UserType />

           
           

        </>
      )}
    </div>
  );
}

export default Dashboard;
