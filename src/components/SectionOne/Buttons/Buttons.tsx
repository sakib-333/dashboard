import { Button } from "@/components/ui/button";
import stars from "../../../assets/stars.svg";
import info from "../../../assets/info.svg";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Buttons = () => {
  return (
    <div className="max-w-[528px] w-full flex flex-col md:flex-row items-center gap-2">
      <Button
        variant="outline"
        className="bg-[#2b2b2b] cursor-pointer max-w-[240px] w-full h-[60px] rounded-[56px] border-[#FB9937] hover:bg-[#FB9937]"
      >
        Start
      </Button>
      <h1 className="font-bold">Or</h1>
      <Button
        variant="outline"
        className="max-w-[240px] w-full border-none cursor-pointer h-[60px] rounded-[56px] bg-[#FB9937] hover:bg-[#2b2b2b] hover:text-white"
      >
        <img src={stars} alt="stars" />
        Start with Deep Dive
      </Button>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {/* <Button variant="outline">Hover</Button> */}
            <img className="cursor-pointer" src={info} alt="info" />
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-[225px]">
              Deep Dive processes documents section by section for "unlimited"
              context, enabling complete answers. Run once per chat to unlock
              Table AI and Prompt Loops
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Buttons;
