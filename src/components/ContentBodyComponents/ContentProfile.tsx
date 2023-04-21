import "./contentStyle.css";
import Image from "react-bootstrap/Image";
export const ContentProfile = () => {
  return (
    <>
      <div className="about_tab">
        <div className="content_profile content_general about_tab_item1">
          <div className="content_profile_title">
            <div className="profile_image">
              <Image style={{ border: "0.3rem solid black" }} rounded width={150} src="https://media.licdn.com/dms/image/C4E03AQENjaVeAyoMgg/profile-displayphoto-shrink_800_800/0/1573155227100?e=2147483647&v=beta&t=NqL4qoRsJ7A8T8J8vwH3nJZMuTyG7Od7t2pYQj3eUaw" />
            </div>

            <div className="profile_name">
              <h4>Tom Lee Nguyen</h4>
              <div className="profile_summary">
                <ul>
                  <li>Laurea University of Applied Sciences</li>
                  <li>.NET Full stack developer</li>
                  <li>Date of Birth: 1997</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="profile_technologies">
            <h3>Programming languages/technologies</h3>
            <p className="profile_skills">C#, ASP.NET, JavaScript, React.js, .NET, Entity Framework, SQL, Angular, TypeScript, NodeJS, Keycloak, Express, MongoDB, Mongoose, AJAX, REST API, Azure, Swagger, Firebase, React-Router, React-Bootstrap, EJS, Figma, Motoko, BLADE, CSS, HTML, Blade, Laravel, PHP, SQLite, Redux</p>
          </div>
        </div>
        <div className="about_summary  content_general content_profile about_tab_item2">
          <h2 className="about_title">Introduction</h2>
          <p className="about_p">Tom Nguyen is a full-stack developer working as an IT consultant at Experis Academy. He is well versed in business administration and information technology due to being a student at Laurea University of Applied Sciences and has gained practical experience through various projects with companies. However, he decided to specialize in full-stack development and product- and service design as he loves solving problems and finding new solutions while creating meaningful applications for the end users.</p>
          <p className="about_p">Tom has worked in an agile environment with Kesko, Moor and Vermo to improve their digital marketing and service design. He has also worked on product design in a school project. For this very reason, Tom has learned to work efficiently and successfully in a busy environment where the emphasis on teamwork and soft skills are not optional but a must. He has taken multiple programming courses related to full-stack development with MongoDB, Express, ReactJS, and NodeJS through school- and independent projects. Tom continued to study and specialize in C# .NET, Entity Framework, and ReactJS while building complex web applications. Tom also has experience designing user interfaces and databases with SQL through projects.</p>
          <p className="about_p">Having walked the path of the full-stack developer and gained excellent business – and interpersonal skills. He is becoming ever more proficient through the continued work in order be a first-rate asset in a team. With a can-do mentality and great enthusiasm, Tom loves to research and learn new ways of doing and improving his work. Tom believes that the tech industry has so much to offer as he is diving deeper into programming. In the future, he wants to get into Deep Learning and Web3 technology to stay ahead of the curve and create better, more meaningful services.</p>
          <div className="about_summary  content_general content_profile about_tab_item2">
            <h3>Work experience</h3>
            <p >2023-2023 Experis Academy Finland Role: Role: .NET Full-Stack Developer</p>
            <p className="about_p">Experis Academy’s .NET Full-Stack program starts with a tailor-made course lasts for 3 months. Accelerated learning period combines theory, practical case work and certification in Microsoft technologies with our partner Noroff, where the educational program is pedagogically based on accelerated learning and flipped classroom principles. For three months period participants will learn and deepen their skills different languages and frameworks such as .NET, C#, SQL, Entity framework, REST API, Azure, Docker, Scrum, JavaScript, React and Angular. After the course participants will start their career as a software development consultant with Experis</p>
          </div>
        </div>
      </div>
    </>
  );
};
