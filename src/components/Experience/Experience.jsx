import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const repeatedSkills = [...skills, ...skills, ...skills];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Linguagens</h2>
      <div className={styles.skillsWrapper}>
        <div className={styles.skills}>
          {repeatedSkills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
