import next from "next";
import CleaningS from "./Cleaning/clean";
import { Carousel } from '@mantine/carousel';
import { CarouselSlide } from "@mantine/carousel/lib/CarouselSlide/CarouselSlide";

function CleaningTeam(){
    return(
        <section>
            <h6>Cleaning Team</h6>
            <Carousel
                withControls
                loop
            >
                <Carousel.Slide>
                    <CleaningS
                        profilePic="images/cleangirl.webp"
                        greeting="Hello, my name is Micaela"
                        qualification="4.5⭐"
                        reviews="12 reviews"
                        description="Lorem ipsum dolor sit amet consectetur. Augue sodales amet dictum nisl rhoncus faucibus. Sagittis condimentum diam quis posuere ultricies at. Pellentesque nulla quam amet placerat posuere. Ac id scelerisque phasellus cras pretium vitae sem aliquet. Eget sagittis sem ut nullam. Sagittis et montes odio tristique malesuada turpis amet convallis dolora Ultrices praesent id duis eget. Nisi eget etiam id nisl risus in diam tincidunt facilisis. Quam vitae scelerisque nisl viverra laoreet duis feugiat ornare."
                        languages="English, spanish"
                        lorem="Lorem ipsum dolor sit amet."
                        lorem2="Lorem ipsum dolor sit amet."
                    />
                </Carousel.Slide>
            </Carousel>
        </section>
    );
}

export default CleaningTeam;



