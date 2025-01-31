import React, { useState } from "react";

const TechnologiesTabs = () => {
  const [tabs, setTabs] = useState("Front End");
  return (
    <div>
      {/* tabs */}
      <div className="flex flex-wrap items-center gap-7">
        {[
          "Front End",
          "Back End",
          "Mobile",
          "CMS",
          "Data Base",
          "Devops & Cloud",
          "Project Management",
          "Graphic Design and UI/UX",
        ].map((tab, index) => (
          <button
            key={index}
            className={`py-1 px-2 rounded-md text-lg font-semibold  cursor-pointer ${tabs === tab ? "bg-[#7C3AED]": ""}`}
            onClick={() => setTabs(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesTabs;
