import React from "react";

const Card = ({ icon, title, body }) => {
  return (
    <div className="card_custom">
      <div className="card_image">
        <img src={icon} alt="icon" className="icon_large" />
      </div>
      <div className="card_body">
        <div className="card_title">{title}</div>
        <div className="card_content">{body}</div>
      </div>
    </div>
  );
};
export default Card;
