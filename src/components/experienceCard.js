// ExperienceCard.jsx

const ExperienceCard = ({ company, role, duration, responsibilities }) => {
  return (
    <div className="row">
      <div className="resume_card_body">
        <div className="resume_card_title">
          <h6>{company}</h6>
          <span>{role}</span>
        </div>

        <p className="resume_card_description">
          <span>
            <b>Duration</b> — {duration}
          </span>
          <br />
          {responsibilities.join(" ")}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
