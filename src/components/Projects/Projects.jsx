import React, { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const Projects = () => {
  const [modal, setModal] = useState(null);

  const openModal = (src, title) => setModal({ src, title });
  const closeModal = () => setModal(null);

  // Fechar com Escape
  React.useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") closeModal(); };
    if (modal) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [modal]);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projetos</h2>

      <div className={styles.carouselWrapper}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: `.${styles.navNext}`,
            prevEl: `.${styles.navPrev}`,
          }}
          pagination={{
            el: `.${styles.pagination}`,
            clickable: true,
            bulletClass: styles.bullet,
            bulletActiveClass: styles.bulletActive,
          }}
          autoplay={{ delay: 3500, disableOnInteraction: true }}
          breakpoints={{
            0:    { slidesPerView: 1 },
            640:  { slidesPerView: 1 },
            768:  { slidesPerView: 2, autoplay: false },
            1024: { slidesPerView: 3, autoplay: false },
            1400: { slidesPerView: 4, autoplay: false },
          }}
          style={{ width: "100%", padding: "0 4px 4px" }}
        >
          {projects.map((project, id) => (
            <SwiperSlide key={id} style={{ display: "flex", justifyContent: "center" }}>
              <ProjectCard project={project} onImageClick={openModal} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões fora do fluxo do Swiper */}
        <button className={styles.navPrev} aria-label="Anterior">❮</button>
        <button className={styles.navNext} aria-label="Próximo">❯</button>
      </div>

      {/* Paginação abaixo do carrossel */}
      <div className={styles.pagination}></div>

      {/* Dica mobile */}
      <p className={styles.swipeHint}>← Deslize para ver mais →</p>

      {/* Modal fullscreen */}
      {modal && (
        <div className={styles.modal} onClick={closeModal}>
          <button className={styles.modalClose} onClick={closeModal}>✕</button>
          <img
            src={modal.src}
            alt={modal.title}
            className={styles.modalImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
