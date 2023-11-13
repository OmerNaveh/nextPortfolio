import { companyExp } from "@/models";
import Image from "next/image";

const ExperienceCard = ({
  companyLogo,
  companyName,
  role,
  techImages,
  summaryPoints,
  date,
}: companyExp) => {
  return (
    <article className="flex flex-col rounded-l items-center flex-shrink-0 snap-center w-full md:w-[600px] xl:w-[900px] bg-primary/10 shadow-sm">
      <Image
        src={companyLogo}
        alt="Company Image"
        width={200}
        height={200}
        className="w-32 h-32 rounded-full object-contain"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light">{role}</h4>
        <p className="text-lg mt-1 font-bold">{companyName}</p>
        <div className="flex flex-wrap gap-1 space-x-2 my-2 ">
          {techImages.map((image) => {
            return (
              <Image
                key={image}
                src={image}
                alt="Tech Image"
                width={50}
                height={50}
                className="h-10 w-10  bg-primary/10 rounded-full object-contain"
              />
            );
          })}
        </div>
        <p className="uppercase py-5 text-sm">{date}</p>
        <ul className="list-disc space-y-4 ml-5 text-sm h-20">
          {summaryPoints.map((point) => {
            return (
              <li key={point} className="text-xs">
                {point}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
