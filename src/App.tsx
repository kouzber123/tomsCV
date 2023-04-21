
import { Navbars } from "./components/Navbar";
import 'semantic-ui-css/semantic.min.css'
import { Outlet } from "react-router-dom";
import "./components/styles/index.css"
function App() {
  return (
    <div className="content_container">
      <Navbars />
      <Outlet />
    </div>
  );
}

export default App;
