import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="RedFlag OverSize Shirt"
            price="30.00"
            color="Red"
            badge={true}
            des="Red Flag: Elevate your style with this bold and vibrant T-shirt, a statement piece that seamlessly blends comfort with a touch of rebellious flair because only reg flag person is buy"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Mi Amor Sweat Shirt"
            price="100.00"
            color="Blue"
            badge={true}
            des="Wrap yourself in cozy elegance with the 'Mi Amour' sweatshirt, a chic blend of comfort and style. Crafted with love, its soft fabric and trendy design make it your perfect companion for casual sophistication"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Karachi Hoddie"
            price="110.00"
            color="Mixed"
            badge={true}
            des="Embrace comfort and style with the Karachi Hoodie, a versatile essential that effortlessly blends urban cool with cozy warmth. Elevate your casual look with this wardrobe staple featuring a bold design inspired by the vibrant spirit of Karachi."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="David Bust Sweat Shirt"
            price="90.00"
            color="Black"
            badge={false}
            des="Wrap yourself in cozy elegance with the 'David Bust' sweatshirt, a chic blend of comfort and style. Crafted with love, its soft fabric and trendy design make it your perfect companion for casual sophistication."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Funny toys for babies"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
