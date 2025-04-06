import React, { useState, useEffect } from "react"; // ✅ Import useState and useEffect
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HeaderNav from "./Components/HeaderNav";
import MobileHeader from "./Components/MobileHeader"; // ✅ Import MobileHeader
import FooterNav from "./Components/FooterNav";
import HomeLayout from "./Layouts/HomeLayout";
import BlogsLayout from "./Layouts/BlogsLayout";
import BlogPost from "./Components/BlogsPage/BlogPost";
import LikeLayout from "./Layouts/LikeLayout";
import FollowersLayout from "./Layouts/FollowersLayout";
import TikTokVerificationsLayout from "./Layouts/TikTokVerificationsLayout.jsx";
import TiktokUnbanLayout from "./Layouts/TiktokUnbanLayout.jsx";
import TiktokUserClaimsLayout from "./Layouts/TiktokUserClaimsLayout.jsx";
import TiktokBypassLayout from "./Layouts/TiktokBypassLayout.jsx";
import TiktokVerifiedAccountLayout from "./Layouts/TiktokVerifiedAccountLayout.jsx";
import InstagramUnbanLayout from "./Layouts/InstagramUnbanLayout.jsx";
import InstagramUnbanReqLayout from "./Layouts/InstagramUnbanReqLayout.jsx";
import InstagramUsernameClaimLayout from "./Layouts/InstagramUsernameClaimLayout.jsx";
import KickUsernameClaimLayout from "./Layouts/KickUsernameClaimLayout.jsx";
import KickVerificationsLayout from "./Layouts/KickVerificationsLayout.jsx";
import YoutubeVerifiedAccountLayout from "./Layouts/YoutubeVerifiedAccountLayout.jsx";
import YoutubeVerificationLayout from "./Layouts/YoutubeVerificationLayout.jsx";
import OnlyFansLayout from "./Layouts/OnlyFansLayout.jsx";
import TwitterLayout from "./Layouts/TwitterLayout.jsx";
import TelegramLayout from "./Layouts/TelegramLayout.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Popup from "./Layouts/Popup.jsx";
import ViewLayout from "./Layouts/ViewLayout.jsx";
import AutomaticLikesLayout from "./Layouts/AutomaticLikesLayout.jsx";
import AutomaticViewLayout from "./Layouts/AutomaticViewLayout.jsx";

const AppLayout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/signup"; // Hide on both pages

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!hideHeaderFooter && (isMobile ? <MobileHeader /> : <HeaderNav />)}
      <Popup />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Harnessing the Power of Storytelling in Digital Marketing Strategies" element={<BlogPost />} /> 
        <Route path="/blog" element={<BlogsLayout />} />
        <Route path="/buy-instagram-Likes" element={<LikeLayout />} />
        <Route path="/buy-instagram-Views" element={<ViewLayout />} />
        <Route path="/buy-instagram-Followers" element={<FollowersLayout />} />
        <Route path="/premium-tiktok-verifications" element={<TikTokVerificationsLayout />} />
        <Route path="/premium-tiktok-unbans" element={<TiktokUnbanLayout />} />
        <Route path="/premium-tiktok-Username-Claims" element={<TiktokUserClaimsLayout />} />
        <Route path="/premium-tiktok-bypasses" element={<TiktokBypassLayout />} />
        <Route path="/premium-tiktok-verified-accounts" element={<TiktokVerifiedAccountLayout />} />
        <Route path="/premium-instagram-unban" element={<InstagramUnbanLayout />} />
        <Route path="/premium-instagram-unban-request" element={<InstagramUnbanReqLayout />} />
        <Route path="/premium-instagram-username-claims" element={<InstagramUsernameClaimLayout />} />
        <Route path="/premium-kick-username-claims" element={<KickUsernameClaimLayout />} />
        <Route path="/premium-kick-channel-recovery" element={<KickVerificationsLayout />} />
        <Route path="/premium-youtube-verified-channels" element={<YoutubeVerifiedAccountLayout />} />
        <Route path="/premium-youtube-channel-recovery" element={<YoutubeVerificationLayout />} />
        <Route path="/premium-onlyfans-username-claim" element={<OnlyFansLayout />} />
        <Route path="/Gold-badge-verification" element={<TwitterLayout />} />
        <Route path="/Telegram-Services" element={<TelegramLayout />} /> 
        <Route path="/buy-automatic-instagram-likes" element={<AutomaticLikesLayout />} />
        <Route path="/buy-automatic-instagram-views" element={<AutomaticViewLayout />} /> 
      </Routes>
      {!hideHeaderFooter && <FooterNav />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default App;
