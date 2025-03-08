import cloudLogo from "../../../assets/cloud.svg";

const Heading = () => {
  return (
    <div className="flex items-center gap-1">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[54px] font-[500]">
        Add Files to
      </h1>
      <img className="w-9 sm:w-12 md:w-[60px] lg:w-[70px]" src={cloudLogo} />
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[54px] font-[500]">
        Cloud Chat
      </h1>
    </div>
  );
};

export default Heading;
