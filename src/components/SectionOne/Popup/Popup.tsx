import { AlertCircle } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";

const Popup = () => {
  return (
    <Alert
      variant="destructive"
      className="bg-[#242424] max-w-max border-none px-3 py-2 rounded-full"
    >
      <AlertCircle className="h-4 w-4" color="#FB9937" />
      <AlertTitle className="font-normal">
        <span className="text-white">
          The web version does not display local chats. To access all features,
        </span>{" "}
        <span className="text-[#FB9937]">please install the app.</span>
      </AlertTitle>
    </Alert>
  );
};

export default Popup;
