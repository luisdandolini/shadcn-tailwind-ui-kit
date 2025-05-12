import { SidebarTrigger } from "./sidebar";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { HelpCircle, Bell } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="flex h-[72px] items-center border-b p-4 lg:px-6">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
        </div>

        <div className="flex items-center gap-2">
          <Button
            className="rounded-full border h-10 w-10 border-[#E4E4E7] bg-white hover:bg-gray-50 shadow-sm"
            size="icon"
          >
            <HelpCircle size={16} className="text-black" />
          </Button>
          <Button
            className="rounded-full border h-10 w-10 border-[#E4E4E7] bg-white hover:bg-gray-50 shadow-sm"
            size="icon"
          >
            <Bell size={16} className="text-black" />
          </Button>

          <Avatar>
            <AvatarImage
              src="https://github.com/luisdandolini.png"
              alt="Avatar"
            />
            <AvatarFallback>LD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
