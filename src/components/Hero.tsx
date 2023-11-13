import AutoType from "./AutoType";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center h-screen space-y-8 relative snap-start"
    >
      <Image
        src={"/omer-image.jpeg"}
        width={200}
        height={200}
        alt="Developer Image"
        className="relative rounded-full h-36 w-36 mx-auto object-cover "
      />
      <div className="w-full text-center">
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
