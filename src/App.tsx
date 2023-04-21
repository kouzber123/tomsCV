import "./index.css";
import { Navbars } from "./components/Navbar";
import { ContentBody } from "./components/ContentBody";
import 'semantic-ui-css/semantic.min.css'
function App() {
  return (
    <div className="content_container">
      <Navbars />
      <ContentBody />
    </div>
  );
}

export default App;
