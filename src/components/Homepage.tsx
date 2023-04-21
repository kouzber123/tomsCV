import { Button } from "semantic-ui-react";
import "./styles/index.css";
import { useNavigate } from "react-router-dom";
export const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="home_content">
      <Button.Group>
        <Button primary onClick={() => navigate("/profile")}>
          View Profile
        </Button>
        <Button secondary onClick={() => navigate("/profile")}>
          Admin page
        </Button>
      </Button.Group>
    </div>
  );
};
