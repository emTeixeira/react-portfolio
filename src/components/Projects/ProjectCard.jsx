import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { ExternalLink, Github } from "lucide-react";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source }, onImageClick }) => {
  return (
    <div className={styles.container}>
      <div>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
          onClick={() => onImageClick(getImageUrl(imageSrc), title)}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className={styles.links}>
        {demo && (
          <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} />
            Demo
          </a>
        )}
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
          <Github size={16} />
          Source
        </a>
      </div>
    </div>
  );
};
