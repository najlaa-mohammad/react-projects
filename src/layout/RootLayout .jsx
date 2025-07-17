import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";


const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
