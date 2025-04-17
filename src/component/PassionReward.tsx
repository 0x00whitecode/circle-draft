import Wallet from "../assets/img/wallet.png"

function PassionReward() {
  return (
    <div className=" py-16">
      <div className="flex max-w-4xl mx-auto justify-around">
       

        {/* Content */}
        <div className="p-10">
          <h2 className="text-gray-500 font-black mb-4">Reward for</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 mb-6">PASSION</h1>
          <p className="text-gray-700 leading-relaxed mb-8">
            promote financial inclusion, speed up transactions, and reward players through
            a secure, modern, and transparent system.
          </p>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Highlights:</h3>
            <ul className="list-disc pl-5 text-gray-600 leading-relaxed">
              <li>Crypto Rewards for MVPs, top scorers, team wins, and tournament milestones.</li>
              <li>Payments will be made using stable cryptocurrencies like USDT to ensure value stability.</li>
              <li>Players will receive digital wallet setup support and financial literacy guidance.</li>
              <li>All rewards will follow KYC and regulatory compliance.</li>
            </ul>
          </div>
        </div>

         {/* Background Icons */}
       <img src={Wallet} alt="wallet_icons"  className="h-1/3 w-2/3"/>
      </div>
    </div>
  );
}

export default PassionReward;