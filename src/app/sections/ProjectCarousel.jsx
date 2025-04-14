"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project from "./Project";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const projects = [
    { title: "Portfolio Website", description: "A personal portfolio website showcasing my work.", timeEstimation: "1 month" },
    { title: "E-Commerce App", description: "An online store with full payment integration.", timeEstimation: "3 months" },
    { title: "Chat Application", description: "A real-time chat app using Firebase.", timeEstimation: "2 months" },
];

export default function ProjectCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-full max-w-lg mx-auto">
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </Slider>
        </div>
    );
}
