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
  const [showPrev, setShowPrev] = useState(false);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projetos</h2>

      <Swiper
        onSlideChange={(swiper) => setShowPrev(swiper.isEnd)}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2, autoplay: false },
          1024: { slidesPerView: 3, autoplay: false },
          1400: { slidesPerView: 4, autoplay: false },
        }}
        style={{ width: "100%" }}
      >
        {projects.map((project, id) => (
          <SwiperSlide key={id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev" style={{ display: showPrev ? "block" : "none" }}></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </section>
  );
};