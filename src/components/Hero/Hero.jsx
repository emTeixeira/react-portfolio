import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, eu sou Emanuel</h1>
        <p className={styles.description}>
          Sou um desenvolvedor full-stack com 5 anos de experiência usando React e
          NodeJS. Entre em contato se quiser saber mais!
        </p>
        <a
          href={getImageUrl("cv/Emanuel-CV.pdf")}
          download
          className={styles.contactBtn}
        >
          Baixar CV
        </a>

        <a
          href="https://wa.me/5521975212775?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20como%20voc%C3%AA%20pode%20contribuir%20com%20um%20projeto%20ou%20integrar%20nosso%20time."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtnOutline}
        >
          Contato
        </a>

      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

