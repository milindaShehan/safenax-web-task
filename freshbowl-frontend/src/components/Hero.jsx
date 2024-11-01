import React from 'react';
import HeroImg from "../../public/hero.png";
import { Button } from '@nextui-org/react';

const Hero = () => {
    return (
        <>
            <div className="w-full  px-5"></div>
                <div className="relative mx-auto w-full bg-cover bg-center max-w-[1366px] rounded-3xl min-h-[75vh] flex p-10 items-center justify-start" style={{ backgroundImage: `url(${HeroImg}), linear-gradient(0deg, #D9D9D9, #D9D9D9), linear-gradient(360deg, rgba(0, 0, 255, 0.5) 0%, rgba(0, 0, 0, 0) 100%)` }}>
                    <div className="rounded-3xl opacity-70 inset-0 absolute bg-gradient-to-r from-black via-transparent to-transparent"></div>
                    <div className="relative w-2/3 gap-5">
                        <h1 className="font-bold text-gray-50 text-6xl mb-5">Fuel Your Body</h1>
                        <h1 className="font-bold text-gray-50 text-6xl mb-5">With Healthy</h1>
                        <h1 className="font-bold text-gray-50 text-6xl mb-10">Choices</h1>


                        <Button  color="primary" href="#" variant="flat" radius="full" className="bg-primary text-white">
                        Explore the menu
                    </Button>
                    </div>
                </div>
            
        </>
    );
};

export default Hero;
