import { Link } from "react-router-dom";
import Slider from "react-slick";

const CarouselSm = ({ data }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 12,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: false,
        arrows: false,
        centerMode: false, 
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 12,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="slider-container relative">
            <style>
                {`
                .slider-container .slick-track {
                    justify-content: flex-start ;
                    display: flex ;
                    min-width: 100%;
                }
                .slider-container .slick-list {
                    overflow: hidden;
                }
                `}
            </style>

            <Slider {...settings}>
                {
                data.map((item) => (
                    <div key={item.id} className="px-1"> 
                    <Link to="" className="block text-center">
                        <div>
                        <img 
                            src={item.cover_image || item.director_img} 
                            className="w-full min-h-20 h-20 sm:h-24 md: 26 lg:h-30 object-cover rounded-md" 
                            alt={item.name} 
                        />
                        </div>
                        <p className="text-white text-xs mt-1">{item.name}</p>
                    </Link>
                    </div>
                ))
                }
            </Slider>
        </div>

    );
};

export default CarouselSm;
