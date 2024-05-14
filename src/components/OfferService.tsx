import Slider from "react-slick";
// import { StepBack, StepForward } from 'lucide-react';
import OfferCard from "./OfferCard";
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";

interface TypeProps {
    title: string;
    img: string;
    desc: string;
    bg: string;
    shadowcolor: string;
    bordercolor: string;
    hovercolor: string;
}

const itemscards: TypeProps[] = [
    {
        title: "Music Class",
        img: offer1,
        bg: " bg-[#FFF6EB]",
        shadowcolor: "hover:shadow-yellow-500",
        bordercolor: "border-yellow-500",
        hovercolor: "hover:bg-yellow-500",
        desc: "Each day at Mother’s Pride is a celebration! We celebrate all indoor and outdoor activities."
    },
    {
        title: "Music Class",
        img: offer2,
        bg: "bg-[#F5FFFE]",
        shadowcolor: "hover:shadow-green-500",
        bordercolor: "border-green-500",
        hovercolor: "hover:bg-green-500",
        desc: "Each day at Mother’s Pride is a celebration! We celebrate all indoor and outdoor activities."
    },
    {
        title: "Music Class",
        bg: "bg-[#FFF6EB]",
        bordercolor: "border-yellow-500",
        shadowcolor: "hover:shadow-yellow-500",
        img: offer1,
        hovercolor: "hover:bg-yellow-500",
        desc: "Each day at Mother’s Pride is a celebration! We celebrate all indoor and outdoor activities."
    },
    {
        title: "Music Class",
        img: offer2,
        bg: "bg-[#F5FFFE]",
        shadowcolor: "hover:shadow-green-500",
        bordercolor: "border-green-500",
        hovercolor: "hover:bg-green-500",
        desc: "Each day at Mother’s Pride is a celebration! We celebrate all indoor and outdoor activities."
    }
];

function OfferService() {

    

    const settings= {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="padding-x py-10 ">
            <h1 className="text-[#000000] mb-5 text-center font-semibold text-2xl">
                                    Our Offering
                                </h1>
                <p className="text-[#000000] mb-10 text-center mx-auto sm:w-[500px] text-lg font-normal">Our multi-level kindergarten programs cater to the age group of 2-5 years
                    with a curriculum focusing on children.</p>

                <Slider  {...settings}>
                    {itemscards.map((item, ind) => (
                        <OfferCard
                            key={ind}
                            shadowcolor={item.shadowcolor}
                            bordercolor={item.bordercolor}
                            bg={item.bg}
                            hovercolor={item.hovercolor}
                            title={item.title}
                            img={item.img}
                            desc={item.desc}
                        />
                    ))}
                </Slider>
            </div>

            
        </>
    );
}

export default OfferService;


