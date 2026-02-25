import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.brand}>
          <h2>Emanuel Teixeira</h2>
          <p>Sinta-se à vontade para entrar em contato!</p>
        </div>

        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:emanuelteixeira.dev@gmail.com">
              emanuelteixeira.dev@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            <a href="https://www.linkedin.com/in/emanuel-coder/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/emTeixeira" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/whatsappIcon.png")} alt="WhatsApp icon" />
            <a
              href="https://wa.me/5521975212775?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20como%20voc%C3%AA%20pode%20contribuir%20com%20um%20projeto%20ou%20integrar%20nosso%20time."
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.bottomSection}>
        <p>© {new Date().getFullYear()} Emanuel Teixeira. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};