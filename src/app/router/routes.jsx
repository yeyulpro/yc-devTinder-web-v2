import { createBrowserRouter, } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import App from "../../App";
import Home from "../components/Home";
import FeedPage from "../components/FeedPage";
import RequestReceivedPage from "../components/RequestReceivedPage";
import SecurityPage from "../components/SecurityPage";
import GuidelinesPage from "../components/GuidelinesPage";
import ConnectionsPage from "../components/ConnectionsPage";
import ProfileEditPage from "../components/ProfileEditPage";
import ProfilePage from "../components/ProfilePage";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import Nobody from "../shared/Nobody";
import PaymentChoice from "../components/PaymentChoice";
import PaymentDetails from "../components/PaymentDetails";
import Chat from "../components/Chat";

export const router = createBrowserRouter( 
  
  [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "security", element: <SecurityPage /> },
      { path: "guidelines", element: <GuidelinesPage /> },
      
      {
        element: <RequireAuth />,
        children: [
          { path: "feeds", element: <FeedPage /> },
          { path: "connect-request", element: <RequestReceivedPage /> },
          { path: "connections", element: <ConnectionsPage /> },
          { path: "profile-edit", element: <ProfileEditPage /> },
          { path: "user-profile/:profileId", element: <ProfilePage /> },
          { path: "pay-choice", element: <PaymentChoice /> },
          { path: "details", element: <PaymentDetails /> },
          { path: "chat/:targetUserId", element: <Chat /> },
          { path: "no-user", element: <Nobody /> },
        ],
      },
    ],
  },
]);
