import App from "../../App";
import Home from "../../Pages/Home/Home";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";
import Erro from "../ErroPage/Erro";

const RoutersItems = [
  {
    path: "/",
    element: <App></App>,
    errorElement: <Erro></Erro>,
    children: [
      {
        path: "/",
        element: <Home />,
      },

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
