const BackgroundCircles = () => {
  return (
    <div className="absolute hidden justify-center items-center z-[-1] h-full w-full md:flex">
      <div className="absolute border border-primary rounded-full h-[300px] w-[300px] animate-ping " />
      <div className="absolute border border-primary/20 rounded-full h-[600px] w-[600px]" />
      <div className="absolute border border-primary/60 rounded-full h-full aspect-square" />
    </div>
  );
};

export default BackgroundCircles;
