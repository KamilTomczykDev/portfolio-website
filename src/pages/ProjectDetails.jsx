import { Navigate, useNavigate } from "react-router-dom";

function ProjectDetails() {
  const navigate = useNavigate();

  return <div onClick={() => navigate(-1)}>Go back to the shadows</div>;
}

export default ProjectDetails;
