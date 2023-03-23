import "../css/projects.css";
import ProjectContainer from "../components/ProjectContainer.jsx";
import faceTracking from "/public/img/face-mesh.png";
import tweetSpam from "/public/img/tweet-spam.png";
import examPortal from "/public/img/mcq-zone.png";
import portfolio from "/public/img/portfolio.png";

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="heading-container d-flex flex-row align-items-center justify-content-center mb-4">
        <div className="blue-dot me-2 p-2"></div>
        <h1 className="heading p-0 my-4">Projects</h1>
      </div>
      <div className="projects-container">
        <ProjectContainer
          project="Exam Application"
          technologies="HTML | CSS | Javascript | Bootstrap
          "
          desc="The website allows users to take a test of multiple choice questions to test their knowledge on various programming languages. You can also see your previous score to compare with your current score. Each test is of 10 minutes duration and to prevent any malpractice, selection of text is disabled and the window goes fullscreen during the test."
          source={examPortal}
          demoSrc="https://mcq-zone.netlify.app/"
          demoState="true"
          repoSrc="https://github.com/charanGIT06/exam-portal"
        />
        <ProjectContainer
          project="Face Tracking using Mediapipe"
          technologies="Python | OpenCV | Mediapipe"
          desc="The aim of the project is to track a human face and form a mesh. This project uses a machine learning framework Mediapipe that takes camera input and estimates around 468 3D face landmarks in real-time. The ouput is a face mesh with various landmarks that are actively being tracked. These landmarks can be used to identify facial movements, expression change, eyes close and open, and many other observations can be made."
          source={faceTracking}
          demoSrc=""
          demoState="false"
          repoSrc="https://github.com/charanGIT06/exam-portal"
        />
        <ProjectContainer
          project="Tweet Spam Detection using Twitter API"
          technologies="Python | ML | NLP | Twitter API "
          desc="Twitter has become a popular platform for people to share their opinions and ideas. However, it is also a platform for spammers to spread their spam messages. Spam messages are messages that are posted on social media platforms to promote a product or service. This project aims to detect spam messages on Twitter using machine learning algorithms. Tweets are collected using Twitter API and then preprocessed. The preprocessed data is then used to train the machine learning model. The model is then tested on the test data and the accuracy is calculated."
          source={tweetSpam}
          demoSrc=""
          demoState="false"
          repoSrc="https://github.com/charanGIT06/spammer-detection-and-fake-user-identification-on-social-networks-python"
        />
        <ProjectContainer
          project="Portfolio Website"
          technologies="HTML | CSS | JavaScrip | React | Bootstrap
          "
          desc="A portfolio website project is a digital platform that showcases a person's professional work and accomplishments in a visually appealing and user-friendly manner. It typically includes sections such as About Me, Portfolio, Skills, Testimonials, and Contact, and is designed to highlight the individual's brand identity and attract potential clients or employers."
          source={portfolio}
          demoSrc="https://charank06.netlify.app/"
          demoState="true"
          repoSrc="https://github.com/charanGIT06/exam-portal"
        />
      </div>
    </div>
  );
};

export default Projects;
