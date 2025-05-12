import React from "react";
import "../styles/home.css";
import profileImage from "../assets/home/profile.png";
import { useHome } from "../components/logic/useHome";

const Home: React.FC = () => {
  const { homeClass } = useHome();

  return (
    <section className={homeClass}>
      <div className="profile-container">
        {/* Text */}
        <svg viewBox="0 0 3600 1800" className="curved-text-svg">
          <path
            id="curve"
            d="M550,1900 C1460,-250 3500,1700 2600,1800"
            fill="transparent"
          />
          <text
            fill="#e9d5ff"
            stroke="#c084fc"
            strokeWidth="10"
            paintOrder="stroke"
            fontSize={window.innerWidth < 640 ? 250 : 300}
            fontWeight="800"
            textAnchor="middle"
            className="curved-shadow"
          >
            <textPath href="#curve" startOffset="50%">
              MY PORTFOLIO
            </textPath>
          </text>
        </svg>

        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="image-mask" />
      </div>
    </section>
  );
};

export default Home;
