import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clientReviews } from "../assets";

const TestimonialCarousal = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="mx-auto px-4 py-8">
      <Slider {...settings}>
        {clientReviews.map((review) => (
          <article key={review.id} className="p-8 font-poppins">
            <h4 className="text-[19px] mb-12 font-light text-center">
              {review.review}
            </h4>

            <div className="flex items-center justify-center gap-6">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <h3 className="text-pinkish-600 font-semibold text-[23px]">
                {review.name}
              </h3>
            </div>
          </article>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousal;
