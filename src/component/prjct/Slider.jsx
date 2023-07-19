import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
     {
            id:1,
            image:"https://i.ibb.co/PNqR6mQ/Screenshot-2023-07-18-170101.png",
            name:"Air Bnb Hotel Management Applicaiton",
            desc:"This is a hotel management application. And this application can handle all the hotel that we add in the application",
            link:"https://airbnb-hotel-management-app.netlify.app",
            skills:["react","node Js","express js","mongoDB",],
            gitHubLink:"https://github.com/IbrahimChowdhury/airbnb-full-project-and-documentation",

        },
        {
            id:2,
            image:"https://i.ibb.co/h8wKKvm/Screenshot-2023-07-18-164256.png",
            name:"All Country Info",
            desc:"This is simple application that shows all the countries in the world and give some small information",
            link:"https://allcountrynme.netlify.app/",
            skills:["react", "api"],
            gitHubLink:"https://allcountrynme.netlify.app/"
        },
        {
            id:3,
            image:"https://i.ibb.co/L8GYFHc/Screenshot-2023-07-18-164322.png",
            name:"User Management",
            desc:"This is applicaiton by which we can manage user from the application. And this is nothing but a small project",
            link:"https://sparkly-chebakia-0b3323.netlify.app/",
            skills:["react","api"],
            gitHubLink:"https://github.com/IbrahimChowdhury/User_manageMent_data"
        },
        {
            id:4,
            image:"https://i.ibb.co/qMNBBKf/Screenshot-2023-07-18-174625.png",
            name:"ToDo Application",
            desc:"This is a todo application. And we can add todos in the applicaiton and the todos never erase until we erase it.",
            link:"https://ibrahimchowdhury.github.io/todo-application-2/?fbclid=IwAR2ityB-3_ti9eLJp0a78wt5CpYa39ZJR69aiscpl4JxD-LDkZwVu1y8vi0",
            skills:["html","css","javascript"],
            gitHubLink:"https://github.com/IbrahimChowdhury/Todo-list-application"
        },
        {
            id:5,
            image:"https://i.ibb.co/bzFQMN0/Screenshot-2023-07-18-164150.png",
            name:"To do Application",
            desc:"This is todo application. And we can add our own todos and the todos ",
            link:"https://todoapp1123.netlify.app/",
            skills:["Html, CSS","Javascript"],
            gitHubLink:"https://github.com/IbrahimChowdhury/todo-application-2"
        },
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
}`;