import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home"
import PostJobs from "../pages/PostJobs";
import MyJobs from "../pages/MyJobs";
import SalaryGuide from "../pages/SalaryGuide";
import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignUpPage";
import JobDetails from "../components/JobDetails";
import Profile from "../components/Profile";
import ProfileEdit from '../pages/ProfileEdit';



  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {path:"/", element:<Home />},
        {path:"/post-job", element:<PostJobs />},
        {path:"/my-job", element:<MyJobs />},
        {path:"/salary-guide", element:<SalaryGuide />},
        {path:"/job/:id", element:<JobDetails />},
        {path:"/profile", element:<Profile />},
        {path:"/profileedit", element:<ProfileEdit />},
      ]
    },
    {
      path: "/login",
      element : <LoginPage />,
    },
    { path:"/signup",
      element:< SignUpPage />}
  ]);
  export default router