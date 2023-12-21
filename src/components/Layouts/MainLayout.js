import Foodter from "../Partials/Foodter";
import Header from "../Partials/Header";


const MainLayout = ({ children }) => {
  
  return (
    <div >
      <Header />
      {children}
      <Foodter/>
    </div>
  );
};
export default MainLayout;
