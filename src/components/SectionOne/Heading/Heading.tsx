import cloudLogo from "../../../assets/cloud.svg";

const Heading = () => {
  return (
    <div className="flex items-center">
      <h1 className="text-[54px] font-[500]">Add Files to</h1>
      <img src={cloudLogo} />
      <h1 className="text-[54px] font-[500]">Cloud Chat</h1>
    </div>
  );
};

export default Heading;
