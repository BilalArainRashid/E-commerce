import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LeftImage from "./leftstory.png";
import RightImage from "./rightstory.png";
import ExtraInfo from "./ExtraInfo";



const Story = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);



    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-4">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            The real stories <br />
                            behind our brand.
                        </h1>
                    </div>
                    {isSmallScreen ? (      
                        <Slider {...settings}>
                            <div>
                                <div className="g h-52 overflow-hidden">
                                    <img
                                        alt="content"
                                        className=" object-center h-full w-full transition-all duration-400 ease-in-out transform hover:scale-105"
                                        src={LeftImage}
                                    />
                                </div>
                                <h2 className="title-font text-2xl hover:text-red-700 text-gray-900 px-10 mt-6 mb-3 cursor-pointer text-center">
                                    The best ways to change your summer wardrobe into autumn
                                    wardrobe.
                                </h2>
                                <p className=" text-gray-600 text-sm text-center">
                                    May 11, 2011
                                </p>
                            </div>
                            <div>
                                <div className="g h-52 overflow-hidden">
                                    <img
                                        alt="content"
                                        className="  h-full w-full transition-all duration-400 ease-in-out transform hover:scale-105"
                                        src={RightImage}
                                    />
                                </div>
                                <h2 className="title-font text-2xl hover:text-red-700 text-gray-900 text-center px-10 mt-6 mb-3 cursor-pointer">
                                    The best ways to change your summer wardrobe into autumn
                                    wardrobe.
                                </h2>
                                <p className=" text-gray-600 text-sm text-center">
                                    May 11, 2011
                                </p>
                            </div>
                        </Slider>
                    ) : (
                        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                            <div className="w-1/2 mb-10 px-4">
                                <div className="g h-60 overflow-hidden">
                                    <img
                                        alt="content"
                                        className=" object-center h-full w-full transition-all duration-400 ease-in-out transform hover:scale-105"
                                        src={LeftImage}
                                    />
                                </div>
                                <h2 className="title-font text-3xl hover:text-red-700 text-gray-900 px-10 mt-6 mb-3 cursor-pointer">
                                    The best ways to change your summer wardrobe into autumn
                                    wardrobe.
                                </h2>
                                <p className="leading-relaxed text-gray-600 text-base">
                                    May 11, 2011
                                </p>
                            </div>
                            <div className="w-1/2 mb-10 px-4">
                                <div className=" h-60 overflow-hidden">
                                    <img
                                        alt="content"
                                        className=" object-center h-full w-full transition-all duration-400 ease-in-out transform hover:scale-105"
                                        src={RightImage}
                                    />
                                </div>
                                <h2 className="title-font text-3xl hover:text-red-700 text-gray-900 px-10 mt-6 mb-3 cursor-pointer">
                                    The best ways to change your summer wardrobe into autumn
                                    wardrobe.
                                </h2>
                                <p className="leading-relaxed text-gray-600 text-base">
                                    May 11, 2011
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <ExtraInfo />
        </div>
    )
}

export default Story
