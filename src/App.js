import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Layout from "./Layouts/Layout";
import HelpLayout from "./Layouts/HelpLayout";
import Feq from "./Pages/Feq";
import Contact, { fromAction } from "./Pages/Contact";
import CareerLayout from "./Layouts/CareerLayout";
import Careers ,{getCareers} from "./Pages/Careers";
import CareerDetails , {getCareerDetails} from "./Pages/CareerDetails";
import CareerError from "./Pages/CareerError";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />} >
        <Route path="feq" element={<Feq />} />
        <Route path="contact" element={<Contact />}  action={fromAction}/>
      </Route>
      <Route path="careers" element={<CareerLayout />} errorElement={<CareerError />}>
          <Route index element={<Careers />} loader={getCareers}/>
          <Route path=":id" element={<CareerDetails />} loader={getCareerDetails} />
      </Route>
    </Route>
  )

)



function App() {
  return (
   <>
   
    <RouterProvider router={router} />

   
   </>
  
  );
}

export default App
