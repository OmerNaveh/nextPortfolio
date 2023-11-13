import Image from "next/image";

type props = {
  name: string;
  src: string;
};

const Skill = ({ name, src }: props) => {
  return (
    <div className="group relative flex justify-center">
      <Image
        src={src}
        alt="Skill Image"
        height={80}
        width={80}
        className="rounded-full border border-primary/60 object-contain h-14 w-14 sm:w-20 sm:h-20 filter md:group-hover:grayscale md:group-hover:opacity-20 transition duration-300 ease-in-out"
      />
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 text-center
      md:group-hover:opacity-80 transition duration-300 ease-in-out rounded-full z-0 "
      >
        <p className="capitalize text-xs font-bold opacity-100">
          {name === "reactNative" ? "react native" : name}
        </p>
      </div>
    </div>
  );
};

export default Skill;
