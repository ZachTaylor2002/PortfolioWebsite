import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [techs] = useState([
    { name: "Large Language Models", progress: 100, className: "postgre-progress", years: 2 },
    { name: "Natural Language Processing", progress: 100, className: "nlp-progress", years: 2 },
    { name: "ReactJS", progress: 50, className: "react-progress", years: 1.5 },
    { name: "NodeJS", progress: 50, className: "node-progress", years: 1.5 },
    { name: "PHP", progress: 50, className: "llm-progress", years: 1 },
    { name: "Bootstrap", progress: 50, className: "vue-progress", years: 1 },
  ]);

  return (
    <div>
      <h2 className="Frame">Frameworks & Technologies</h2>
      <ul>
        {techs.map((tech, index) => (
          <li key={index}>
            <span>{tech.name}: {`${tech.years} years`}</span>
            <ProgressBar progress={tech.progress} className={tech.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;