import "../css/projects.css";
const ProjectContainer = ({
  project,
  technologies,
  desc,
  source,
  demoSrc,
  repoSrc,
  demoState,
}) => {
  return (
    <div className="project-card d-flex flex-column flex-md-row align-items-center shadow-lg col-11 col-lg-9 mb-5">
      <div className="card-left col-12 col-md-6">
        <div className="project-title ps-5 mt-5">
          <div className="project-heading">{project}</div>
          <div className="title">{technologies}</div>
        </div>
        <div className="project-description mt-4 mb-3 px-5 py-3">{desc}</div>
        <div className="btn-container px-5 pt-3 pb-5">
          {demoState === "true" ? (
            <a href={demoSrc} className="demo-link">
              Demo
            </a>
          ) : (
            ""
          )}

          <a href={repoSrc} className="repo-link">
            Repo
          </a>
        </div>
      </div>
      <div className="card-right col-12 col-md-6">
        <img src={source} alt="" className="project-img shadow-lg" />
      </div>
    </div>
  );
};

export default ProjectContainer;
