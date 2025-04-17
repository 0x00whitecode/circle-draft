import Navbar from "../../component/mainComponent/navBar";
import TabComponent from "../../component/mainComponent/tabComponent";
import './style.css';



function Main() {
  return (
     <div className="fullscreen-override">
      <Navbar />
      <TabComponent />
    </div>
  );
}

export default Main;