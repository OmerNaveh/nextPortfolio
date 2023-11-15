import Image from "next/image";
import AutoType from "./AutoType";
import BackgroundCircles from "./BackgroundCircles";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center h-screen relative px-5"
    >
      <Image
        src={"/omer-image.webp"}
        width={200}
        height={200}
        alt="Developer Image"
        className="rounded-full h-36 w-36 mx-auto object-cover"
      />
      <div className="w-full text-center mt-8 min-h-[40%] md:min-h-[unset]">
        <h2 className="text-sm uppercase text-primary pb-2 tracking-[10px] ">
          Full-Stack Developer
        </h2>
        <AutoType />
      </div>
      <BackgroundCircles />
    </section>
  );
};

export default Hero;
