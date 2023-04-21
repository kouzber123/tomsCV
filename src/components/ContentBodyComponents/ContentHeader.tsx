import { ContentAbout } from "./ContentAbout";
import { ContentProfile } from "./ContentProfile";
import "./contentStyle.css";
import { Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: "History",
    render: () => <Tab.Pane  attached={false}><ContentProfile /></Tab.Pane>
  },
  {
    menuItem: "Projects",
    render: () => <Tab.Pane attached={false}><ContentAbout /></Tab.Pane>
  },
  {
    menuItem: "Contact",
    render: () => <Tab.Pane attached={false}>Contact</Tab.Pane>
  }
];

export const ContentHeader = () => {
  return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
};
