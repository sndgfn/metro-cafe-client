import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./category.css";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"


const Category = (slider) => {
    const z = 300;
    function rotate() {
        const deg = 360 * slider.track.details.progress;
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length;
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
        });
        rotate();
    });
    slider.on("detailsChanged", rotate);
};
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

export default function App() {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [Category] // Fixed function name here
    );

    return (
        <div>
            <div className=" ">
                <SectionTitle subHeading={"From 11.00am to 10.00pm"}
                    heading={"Order Online"}></SectionTitle>
            </div>
            <div className="mt-20 wrapper">
                <div className="scene">
                    <div className="carousel keen-slider" ref={sliderRef}>
                        <div className="carousel__cell number-slide1">
                            <img src={img1} alt="Slide 1" />
                        </div>
                        <div className="carousel__cell number-slide2">
                            <img src={img2} alt="Slide 2" />
                        </div>
                        <div className="carousel__cell number-slide3">
                            <img src={img3} alt="Slide 3" />
                        </div>
                        <div className="carousel__cell number-slide5">
                            <img src={img5} alt="Slide 5" />
                        </div>
                                           
                        <div className="carousel__cell number-slide4">
                            <img src={img4} alt="Slide 4" />
                        </div>
                        <div className="carousel__cell number-slide2">
                            <img src={img2} alt="Slide 2" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}