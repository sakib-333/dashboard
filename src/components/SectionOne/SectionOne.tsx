import Buttons from "./Buttons/Buttons";
import Cards from "./Cards/Cards";
import Heading from "./Heading/Heading";
import OptionalSection from "./OptionalSection/OptionalSection";
import Paragraph from "./Paragraph/Paragraph";
import Popup from "./Popup/Popup";

const SectionOne = () => {
  return (
    <div className="min-h-screen bg-[#2B2B2B]">
      <Popup />
      <Heading />
      <Paragraph />
      <Cards />
      <OptionalSection />
      <Buttons />
    </div>
  );
};

export default SectionOne;
