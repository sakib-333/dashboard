import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

import siteLogo from "../../assets/siteLogo.svg";
import magnifyingGlass from "../../assets/magnifyingGlass.svg";
import add from "../../assets/add.svg";
import template from "../../assets/template.svg";
import jessicaMills from "../../assets/jessicaMills.svg";
import setting from "../../assets/setting.svg";
import { Button } from "../ui/button";

const AppSidebar = () => {
  return (
    <Sidebar className="bg-black text-white border-none">
      <SidebarHeader className="bg-[#242424] text-white">
        <div className="flex items-center justify-between gap-2 p-3">
          <div className="flex items-center gap-1">
            <img className="w-7 h-7" src={siteLogo} alt="siteLogo" />
            <h1>Socrates</h1>
          </div>
          <div>
            <img
              className="w-6 h-6 cursor-pointer"
              src={magnifyingGlass}
              alt="magnifyingGlass"
            />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-[#242424] p-3 text-white border-none">
        <SidebarMenu className="text-white border-none">
          <div className="space-y-3">
            <Button className="w-full h-[40px] cursor-pointer rounded-[56px] bg-[#242424] border">
              <img src={add} alt="add" /> <span>Add folder</span>
            </Button>
            <Button className="w-full h-[40px] cursor-pointer rounded-[56px] bg-[#ffffff26]">
              <img src={add} alt="add" /> <span>Create chat</span>
            </Button>
          </div>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="bg-[#242424] text-white p-3">
        <div>
          <div className="bg-[#ffffff26] p-3 rounded-[12px]">
            <h1 className="text-sm">Upgrade to Premium</h1>
            <p className="text-[#ffffff50] text-[10px]">
              Make the most of all features!
            </p>
            <Button className="w-full bg-[#ffffff26] cursor-pointer rounded-[56px] border-[#F37F0C] border">
              Upgrade plan
            </Button>
          </div>
          <div className="p-3 flex items-center gap-2">
            <img src={template} alt="template" />
            <span className="text-sm">Flow AI Templates</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={jessicaMills} alt="jessicaMills" />
              <span className="text-sm">Jessica Mills</span>
            </div>
            <img className="cursor-pointer" src={setting} alt="setting" />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
