import Cards from "./Cards/Cards";
import Heading from "./Heading/Heading";
import Paragraph from "./Paragraph/Paragraph";
import Popup from "./Popup/Popup";

const SectionOne = () => {
  return (
    <div className="min-h-screen bg-[#2B2B2B]">
      <Popup />
      <Heading />
      <Paragraph />
      <Cards />
    </div>
  );
};

export default SectionOne;
