import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LatestCard from './LatestCard';
import item1 from "../assets/item1.png";

interface cardProptypes{
    title:string;
    desc:string;
    img:string;
    link:string;

}

const items:cardProptypes[]=[{
    title:"DayCare",
    desc:"The spiritual significance of February's birthstone, amethyst, is a sign of protection.",
    img:item1,
    link:"#one"
},
{
    title:"DayCare",
    desc:"The spiritual significance of February's birthstone, amethyst, is a sign of protection.",
    img:item1,
    link:"#one"
},
{
    title:"DayCare",
    desc:"The spiritual significance of February's birthstone, amethyst, is a sign of protection.",
    img:item1,
    link:"#one"
},
{
    title:"DayCare",
    desc:"The spiritual significance of February's birthstone, amethyst, is a sign of protection.",
    img:item1,
    link:"#one"
},
{
    title:"DayCare",
    desc:"The spiritual significance of February's birthstone, amethyst, is a sign of protection.",
    img:item1,
    link:"#one"
},
{
    title:"DayCare",
    desc:"The spiritual significance of February's birthstone, amethyst, is a sign of protection.",
    img:item1,
    link:"#one"
},
{
    title:"DayCare",
    desc:"The spiritual significance of February's birthstone, amethyst, is a sign of protection.",
    img:item1,
    link:"#one"
},

]


interface SampleArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}










function ShowItems() {

   




    const SampleNextArrow: React.FC<SampleArrowProps> = ({
        className,
        style,
        onClick,
    }) => {
        return (
            <div className={className} style={{ ...style }} onClick={onClick}>
                <div className="relative  hidden md:block w-[30px]  h-[30px]">
                    {/* <Image src="/assets/fimages/nexticon.png" alt='not found' fill /> */}
                </div>

            </div>
        );
    };

    const SamplePrevArrow: React.FC<SampleArrowProps> = ({
        className,
        style,
        onClick,
    }) => {
        return (
            <div className={className} style={{ ...style }} onClick={onClick}>
                <div className="relative hidden  md:block w-[30px]  h-[30px]">
                {/* <CircleArrowRigh className="text-[red]"/> */}
                    {/* <Image src="/assets/fimages/previcon.png" alt='not found' fill /> */}
                </div>
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />, // Custom Next Arrow component
        prevArrow: <SamplePrevArrow />, // Custom Previous Arrow component
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
           
                        <div className="max-sm:px-5  padding-x py-10">
                            
                                <h1 className="text-[#000000] mb-5 text-center font-semibold text-2xl">
                                    Latest Products
                                </h1>
                           

                            <Slider {...settings}>




                                {items.map((item, index) => (
                                    <>
                                        <div className=" sm:px-3">
                                            <LatestCard
                                                key={index}
                                                title={item.title}
                                                slug={item.link}
                                                desc={item.desc}
                                                img={item.img}
                                               
                                              
                                              
                                            />
                                        </div> </>
                                ))}

                            </Slider>
                        </div>

                 
        </>
    );
}

export default ShowItems;