import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo1.png";
import { FaArrowLeft } from "react-icons/fa";

function ProjectNavBar() {
  const navigate = useNavigate();
  return (
    <div className="fixed z-20 flex h-[80px] w-full items-center justify-between bg-[#f39404] px-4">
      <img className="h-[50px]" src={Logo} alt="Logo" />
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 bg-white px-4 py-3 text-xl font-semibold drop-shadow-3xl hover:bg-stone-900 hover:text-white hover:drop-shadow-2xl"
      >
        <FaArrowLeft />
        Go back
      </button>
    </div>
  );
}

export default ProjectNavBar;
