const EducationCard = ({ className, margin, date, college, degree, location  }) => {
  return (
    <div className={`container education-card ${margin}`}>
      <div className="row me-md-5">
        <div
          className={` col-11 col-md-12 resume-card px-4 py-5 shadow-lg ${className}`}
        >
          <div className="card-heading blue-heading">{date}</div>
          <h6 className="college mt-2">{college}</h6>
          <p className="degree my-2">{degree}</p>
          <p className="location m-0">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
