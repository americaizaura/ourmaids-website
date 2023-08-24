import React from "react";
import { Button } from '@mantine/core';

export default function LocationsSection(){
    return (
        <section>
            <h6 className="mb-6">Locations</h6>
            <div className="flex gap-x-4">
                <img src="/images/celular.png" alt="" className="w-3/4 h-40 lg:h-56 object-cover rounded-3xl"/>
                <div>
                    <div className="text-xs text-justify tracking-wide font-medium w-4/5 lg:w-full">
                        Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <Button
                        w={100} 
                        h={28} 
                        color="secondary.0" 
                        radius="xl" 
                        className="tracking-widest text-[10px] font-semibold font-montserrat my-5"
                    >
                        Button
                    </Button>
                </div>
            </div>
        </section>
    );
}