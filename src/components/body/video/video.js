import React from "react";
import { BsPlay } from "react-icons/bs";

const Video = () => {
  return (
    <div>
      <section class="">
        <div class="container justify-center flex flex-col py-24 lg:flex-row">
          <div class="lg:flex-grow  flex-wrap ml-8 lg:pr-12 flex flex-col mb-16 w-full">
            <h1 class="title-font text-5xl mt-5 mb-4 w-full font-semibold  text-gray-800">
              A team of designers that make dreams come true
            </h1>
            <p className="mt-3 text-2xl"> Unique clothes for everyone!</p>
            <div class="flex ">
              <button class="inline-flex text-white text-lg mt-8 bg-red-600 border-0 py-3 px-12 focus:outline-none hover:bg-red-500 rounded-full">
                Read more
              </button>
            </div>
          </div>

          <div class="pl-7 max-w-6xl lg:mr-10">
            <div className="relative">
              <img
                src="https://cdn.shopify.com/s/files/1/0020/7483/7110/files/banner-4_820x354@2x.png?v=1620720846"
                alt=""
                className=""
              />
              <button className="absolute top-0 right-0 left-0 bottom-0">
                <a
                  href='<iframe width="560" height="315" src="https://www.youtube.com/embed/HidKu1w7msY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe'
                  className="flex justify-center"
                >
                  <div className="text-4xl border hover:border-red-700 text-white  px-3 py-3  hover:bg-red-700 rounded-full ">
                    <BsPlay />
                  </div>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;
