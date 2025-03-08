import dragAndDrop from "../../../assets/dragAndDrop.svg";
import url from "../../../assets/url.svg";
import dropbox from "../../../assets/dropbox.svg";
import drive from "../../../assets/drive.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-4 max-w-[820px] w-full">
      <div className="max-w-[406px] hover:cursor-pointer flex items-center w-full bg-[#242424] hover:bg-[#292929] transition p-4 rounded-[20px]">
        <img src={dragAndDrop} alt="dragAndDrop" />
        <h1>Drag & drop local files here, or click to select</h1>
      </div>
      <div className="max-w-[406px] flex items-center w-full bg-[#242424] hover:bg-[#292929] transition p-4 rounded-[20px]">
        <img src={url} alt="url" />
        <div className="w-full">
          <h1>Enter in a public URL:</h1>
          <div className="flex items-center relative">
            <Input
              className="bg-[#353535] border-none w-full rounded-[100px]"
              placeholder="https://example.com/file.pdf"
            />
            <Button className="rounded-[100px] bg-[#ffffff26] absolute right-0">
              Add
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-[406px] hover:cursor-pointer flex items-center w-full bg-[#242424] hover:bg-[#292929] transition p-4 rounded-[20px]">
        <img src={dropbox} alt="dropbox" />
        <h1>Add files from Dropbox</h1>
      </div>
      <div className="max-w-[406px] hover:cursor-pointer flex items-center w-full bg-[#242424] hover:bg-[#292929] transition p-4 rounded-[20px]">
        <img src={drive} alt="drive" />
        <h1>Add files from Google Drive</h1>
      </div>
    </div>
  );
};

export default Cards;
