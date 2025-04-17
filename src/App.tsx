// import LoginPage from "./pages/auth/loginPage"
// import LandingPage from "./pages/landingPage"
import { ThirdwebProvider } from "thirdweb/react";
import Pages from "./pages/Routes";



function App() {
  return (
    <ThirdwebProvider>
      {/* <LandingPage /> */}
      <Pages />
      </ThirdwebProvider>
  )
}

export default App

