import { Checkbox } from "@/components/ui/checkbox";
import pdf from "../../../assets/pdf.svg";
import docx from "../../../assets/docx.svg";
import info from "../../../assets/info.svg";
import cross from "../../../assets/cross.svg";

const OptionalSection = () => {
  return (
    <div className="max-w-[820px] bg-[#242424] p-3 rounded-[34px] flex flex-col md:flex-row items-center">
      <div className="flex items-center gap-1 bg-[#2b2b2b] p-[7px] rounded-[20px]">
        <div className="flex items-center gap-1">
          <img src={pdf} alt="pdf" />
          <h1>Report_file.pdf</h1>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center space-x-1 text-[#B7B7B7]">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Force OCR
            </label>
            <img className="cursor-pointer" src={info} alt="info" />
            <img className="cursor-pointer" src={cross} alt="cross" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 bg-[#2b2b2b] p-[7px] rounded-[20px]">
        <div className="flex items-center gap-1">
          <img src={docx} alt="docx" />
          <h1>Article.docs</h1>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center space-x-1 text-[#B7B7B7]">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Force OCR
            </label>
            <img className="cursor-pointer" src={info} alt="info" />
            <img className="cursor-pointer" src={cross} alt="cross" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionalSection;
