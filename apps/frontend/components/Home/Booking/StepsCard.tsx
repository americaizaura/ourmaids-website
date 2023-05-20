import Image from "next/image";
import { useMantineTheme } from "@mantine/core";
interface props {
  title: string;
  image: string;
  step: number;
  index: number;
}

export default function ({ title, image, step }: props) {
  const theme = useMantineTheme();
  return (
    <div
      className={`flex gap-4  ${step === 2 ? "lg:mt-32 mt-4" : ""} ${
        step === 3 ? "lg:mt-64 mt-4" : ""
      }`}
    >
      <div>
        <div
          className="w-14 h-14 rounded-full flex justify-center items-center "
          style={{
            backgroundColor: theme.colors.primary[0],
          }}
        >
          <h2>{step}</h2>
        </div>
      </div>
      <div>
        <div className="relative w-[278px] h-[250px]">
          <Image
            className="rounded-xl"
            src={image}
            objectFit="cover"
            layout="fill"
            alt={title}
          />
        </div>
        <h5 className="mt-6">{title}</h5>
      </div>
    </div>
  );
}
