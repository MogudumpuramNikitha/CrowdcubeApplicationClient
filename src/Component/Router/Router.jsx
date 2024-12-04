import App from "../../App";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";

import Erro from "../ErroPage/Erro";
// import ForgotPassword from "../ForgotPassword/ForgotPassword";
// import MainHome from "../Home/MainHome";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import UpdateProfile from "../UpdateProfile/UpdateProfile";

const RoutersItems = [
  {
    path: "/",
    element: <App></App>,
    errorElement: <Erro></Erro>,
    children: [
      // {
      //   path: "/",
      //   element: <MainHome></MainHome>,
      // },

      // {
      //   path: "/donation-capaings",
      //   element: <CampaignsPage />,
      //   loader: async () => {
      //     const response = await fetch("/FackData/CampaingsData.json");
      //     return response.json();
      //   },
      // },
      // {
      //   path: "/campaigns/:id",
      //   element: (
      //     <PrivateRoute>
      //       <CampaignDetails />
      //     </PrivateRoute>
      //   ),
      //   loader: () => fetch(`/FackData/CampaingsData.json`),
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      // {
      //   path: "/dashboard",
      //   element: (
      //     <PrivateRoute>
      //       <Dashboard />
      //     </PrivateRoute>
      //   ),
      // },

      // {
      //   path: "/forgot-password",
      //   element: <ForgotPassword />,
      // },
    ],
  },
];

export default RoutersItems;
