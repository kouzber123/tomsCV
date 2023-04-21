import { ContentAbout } from "./ContentBodyComponents/ContentAbout";
import { ContentHeader } from "./ContentBodyComponents/ContentHeader";
import { ContentProfile } from "./ContentBodyComponents/ContentProfile";
import "./styles/contentBody.css";
export const ContentBody = () => {
  return (
    <>

      <div className="contentBody">
      <ContentHeader />
      </div>
    </>
  );
};
