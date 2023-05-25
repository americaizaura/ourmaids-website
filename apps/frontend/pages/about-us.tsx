import React from "react";
import {
  Button,
  Textarea,
  Container,
  Accordion,
  useMantineTheme,
  rem,
} from "@mantine/core";
import Image from "next/image";
import Input from "../components/Input";

export default function AboutUsView() {
  return (
    <div className="lg:mt-16 mt-8">
      <video
        controls
        muted
        autoPlay
        className="lg:h-screen lg:w-screen lg:mb-44 w-full h-auto mt-4"
      >
        <source src="promo.mp4" type="video/mp4" />
      </video>

      <div className="relative">
        {/* <div className="absolute h-full 2xl:w-[15%] w-[50%] 2xl:left-[35%] left-0"> */}
        <div className="absolute h-full w-[50%]">
          <Image
            src="/images/aboutUS/image 21.png"
            alt="Hero"
            objectFit="cover"
            layout="fill"
            className="rounded-r-xl 2xl:rounded-xl"
            objectPosition="0 25%"
          />
        </div>
        <div className="absolute top-[80%] h-full left-[8%]">
          <div className="w-64 h-64 rounded-full flex justify-center items-center  bg-[#76AD77]">
            <h6 className="my-0 text-surface text-center">
              “Lorem ipsum dolor sit amet consectetur. Cras luctus quam netus
              vel massa r”
            </h6>
          </div>
        </div>
        <Container size="xl" className="grid grid-cols-12 mb-60">
          <div className="md:col-start-8 md:col-end-13 col-span-12">
            <h2 className="mt-0">ABOUT OUR MAIDS</h2>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Cras luctus quam netus vel
              massa quis nibh venenatis senectus. Vitae amet elit vulputate quam
              tellus. Neque eget nisi molestie a purus purus ac. Facilisi sed ut
              egestas lectus nunc id pulvinar. Lacus et tincidunt laoreet nulla
              scelerisque. Enim pellentesque vestibulum pretium aenean. Ipsum
              non lacus sagittis morbi aliquet malesuada ac mauris proin.
            </p>
            <div className="flex flex-row ">
              <Image
                priority
                src="/icons/cleaning-equipment.svg"
                height={40}
                width={40}
                alt="Follow us on Twitter"
              />
              <h5 className="ml-4">Lorem ipsum dolor sit</h5>
            </div>
            <div className="flex flex-row">
              <Image
                priority
                src="/icons/bubbles.svg"
                height={40}
                width={40}
                alt="Follow us on Twitter"
              />
              <h5 className="ml-4">Lorem ipsum dolor sit</h5>
            </div>
            <div className="flex flex-row">
              <Image
                priority
                src="/icons/protection.svg"
                height={40}
                width={40}
                alt="Follow us on Twitter"
              />
              <h5 className="ml-4">Lorem ipsum dolor sit</h5>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-primary h-[900px] w-full  mb-28">
        <Container size="xl" className="flex flex-col h-full w-full">
          <div className="grow-0 grid grid-cols-12">
            <h1 className="col-start-1 col-end-6">
              We provide the best cleaning services for you
            </h1>
          </div>
          <div className="grow">
            <div className="grid grid-cols-12 h-full">
              <div className="col-start-2 col-end-5 h-full">
                <div className="flex flex-col justify-evenly h-full">
                  <div>
                    <h3>Flexible prices</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                  <div>
                    <h3>Easy payment</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
              </div>
              <div className="col-start-5 col-end-10 h-full w-full">
                <div className="flex items-center h-full">
                  <Image
                    src="/images/aboutUS/image 22.png"
                    alt="Hero"
                    objectFit="cover"
                    width={500}
                    height={600}
                    className="rounded-r-xl"
                  />
                </div>
              </div>
              <div className="col-start-10 col-end-13">
                <div className="flex flex-col justify-evenly h-full">
                  <div>
                    <h3>Home services</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                  <div>
                    <h3>Deep cleaning</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="w-full mb-60 relative h-full">
        <div className="absolute top-0 right-0 h-[85%] w-[50%]">
          <Image
            src="/images/aboutUS/image 25.png"
            alt="Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-l-xl"
            objectPosition="0 25%"
          />
        </div>
        {/*     <div className="absolute top-[100%] left-[15%] h-full w-[50%]">
          <Image
            src="/images/aboutUS/image 26.png"
            alt="Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            objectPosition="0 25%"
          />
        </div> */}
        <Container size="xl" className="h-full w-full flex flex-col">
          <div className="grid grid-cols-12 mb-14">
            <div className="md:col-span-4 col-span-12">
              <h3 className="mt-0">How it all started</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Bibendum ultrices
                sollicitudin ac quis scelerisque elementum aliquam. Mattis ut
                suspendisse aliquam diam maecenas nulla. Ullamcorper tellus
                habitant placerat hac. Blandit felis id sapien mattis dui dui
                dolor enim semper. Sapien gravida at senectus sit tempus
                venenatis. Vitae ut varius amet sit enim suscipit tincidunt.
              </p>
              <p>
                Commodo fringilla sit turpis ut. Vulputate varius facilisis
                vitae nibh maecenas lacus. Nisl ut nulla et nisl dictumst
                sollicitudin nullam. Vitae placerat turpis semper vel
                pellentesque lectus. Facilisi pellentesque platea magna nisl
                felis duis. Odio nullam egestas massa pharetra. Arcu congue
                risus massa nibh quis quis et et. Ultrices neque sed ut sed in
                lectus nunc tempus urna. Enim dictumst in in sed dolor.
                Pellentesque elementum massa viverra amet dictumst morbi.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 w-full h-full">
            <div className="col-span-4 w-full h-full">
              <Image
                src="/images/aboutUS/image 26.png"
                alt="Hero"
                width={500}
                height={300}
                className="rounded-xl"
                objectPosition="0 25%"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
