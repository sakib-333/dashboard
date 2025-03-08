import AppSidebar from "./components/AppSidebar/AppSidebar";
import SectionOne from "./components/SectionOne/SectionOne";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

const App = () => {
  return (
    <SidebarProvider className="min-h-screen bg-black text-white">
      <AppSidebar />
      <main className="w-full relative">
        <SidebarTrigger className="absolute z-10" />
        <SectionOne />
      </main>
    </SidebarProvider>
    // <div className="min-h-screen text-white">
    //   <div>
    //     <SectionOne />
    //   </div>
    // </div>
  );
};

export default App;
