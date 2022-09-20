import { Routes, Route } from "react-router-dom";
import { Home } from "../../Pages/Home";
import { Notfound } from "../../Pages/Notfound";
import UserProfile from "../../Pages/userProfile";
import FlashMessages from "../../FlashMessages/FlashMessages";
import Modal from "../../Modal/Modal";
import Footer from "../Partials/Footer";
import Header from "../Partials/Header";
import Login from "../../Pages/Login/Login";
import { useLoginStore } from "../../Pages/Login/useLoginStore";

const AppRouter = () => {
  const { loggedIn } = useLoginStore((store) => ({
    loggedIn: store.loggedIn,
  }));
  return (
    <>
      <FlashMessages />
      <Modal />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {!loggedIn &&<Route path="/login" element={<Login />} />}
        {loggedIn && <Route path="/user" element={<UserProfile />} />}
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
