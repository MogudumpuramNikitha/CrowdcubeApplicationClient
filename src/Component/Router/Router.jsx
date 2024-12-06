import App from "../../App";
import AddCampaign from "../../Pages/AddCampaign/AddCampaign";
import AllCampaign from "../../Pages/AllCampaign/AllCampaign";
import CampaignDetails from "../../Pages/CampaignDetails/CampaignDetails";
import ComingSoon from "../../Pages/Comingsoon/ComingSoon";
import Home from "../../Pages/Home/Home";
import MyCampaign from "../../Pages/MyCampaign/MyCampaign";
import MyDonations from "../../Pages/MyDonations/MyDonations";
import UpdateCampaign from "../../Pages/UpdateCampaign/UpdateCampaign";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";
import Erro from "../ErroPage/Erro";
import PrivateRoute from "../ProtectedRoute/ProtectedRoute";

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
      {
        path: "/addCampaign",
        element: (
          <PrivateRoute>
            <AddCampaign />
          </PrivateRoute>
        ),
      },
      {
        path: "/campaign/:id",
        element: (
          <PrivateRoute>
            <CampaignDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/campaigns",
        element: (
          <PrivateRoute>
            <AllCampaign />
          </PrivateRoute>
        ),
      },
      {
        path: "/myCampaign",
        element: (
          <PrivateRoute>
            <MyCampaign />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateCampaign/:id",
        element: (
          <PrivateRoute>
            <UpdateCampaign />
          </PrivateRoute>
        ),
      },
      {
        path: "/myDonations",
        element: (
          <PrivateRoute>
            <MyDonations />
          </PrivateRoute>
        ),
      },
      {
        path: "/comingsoon",
        element: <ComingSoon />,
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
    ],
  },
];

export default RoutersItems;
