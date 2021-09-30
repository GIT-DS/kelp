import React from "react";
import { Link } from "react-router-dom";

const MailButton = ({ mailto, label }) => {
  return (
    <Link to="#" onClick={(e) => { window.location = mailto; e.preventDefault();}}>
      {label}
    </Link>
  );
};

export default MailButton;