import React,{ useEffect, useState } from "react";
import { Carousel, Card, Button,Accordion } from "flowbite-react";
export default function IndexContext() {

  return (
  

<div>

<h2 className="pb-5 pt-5 text-center font-medium text-gray-900 dark:text-white text-3xl font-semibold">Novedades: </h2>

  <div className="flex justify-center align-center px-5">

<div className=" text-center h-80 w-80 md:w-5/6 md:h-[25rem] sm:w-screen">
  <Carousel slideInterval={5000}>
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      alt="..."
    />
  </Carousel>
</div>

</div>



</div>

            
          
        

  );
}