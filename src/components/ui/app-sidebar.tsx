import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Headset, Activity, User, FileCheck, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarAccountDropdown } from "../sidebar-account-dropdown";
import { NavLink } from "react-router-dom";

export function AppSideBar() {
  return (
    <SidebarContent className="bg-[#F9F9F9] text-black relative">
      <SidebarHeader className="pb-3 pt-5 pl-6">
        <Button variant="default" className="text-xs w-[96px] h-[32px]">
          Logo
        </Button>
      </SidebarHeader>

      <SidebarSeparator className="mx-0 w-full bg-[#E4E4E7]" />

      <SidebarGroup className="px-2 pt-1 mb-[-24px]">
        <SidebarAccountDropdown />
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel className="mb-[6px]">Menu</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <NavLink to="/" className="w-full">
              {({ isActive }) => (
                <SidebarMenuButton isActive={isActive} className="h-[40px]">
                  <Activity size={16} />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              )}
            </NavLink>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <NavLink to="/usuarios" className="w-full">
              {({ isActive }) => (
                <SidebarMenuButton isActive={isActive} className="h-[40px]">
                  <User size={16} />
                  <span>Usuários</span>
                </SidebarMenuButton>
              )}
            </NavLink>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <NavLink to="/documentos" className="w-full">
              {({ isActive }) => (
                <SidebarMenuButton isActive={isActive} className="h-[40px]">
                  <FileCheck size={16} />
                  <span>Documentos</span>
                </SidebarMenuButton>
              )}
            </NavLink>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarGroup className="p-[-32px] mt-[6px]">
          <SidebarGroupLabel className="mb-[6px] font">
            Configurações
          </SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <NavLink to="/configuracoes" className="w-full">
                {({ isActive }) => (
                  <SidebarMenuButton isActive={isActive} className="h-[40px]">
                    <Settings size={16} />
                    <span>Geral</span>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarGroup>

      <SidebarFooter className="absolute bottom-4 w-full">
        <Button
          variant="outline"
          className="w-full shadow-none justify-between text-muted-foreground !font-sans rounded-full border-none h-[40px] text-[#102822]"
        >
          <span>Precisa de ajuda?</span>
          <Headset size={16} />
        </Button>
      </SidebarFooter>
    </SidebarContent>
  );
}
