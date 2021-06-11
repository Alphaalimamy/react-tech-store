import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Default from "./pages/Default";
import SingleProductPages from "./pages/SingleProductPages";

import { FaHome } from "react-icons/fa";

function App() {
  return (
    <div className="">
      <AboutPage />
      <HomePage />
      <ContactPage />
      <ContactPage />

      <Default />
      <SingleProductPages />
      <FaHome />
    </div>
  );
}

export default App;
