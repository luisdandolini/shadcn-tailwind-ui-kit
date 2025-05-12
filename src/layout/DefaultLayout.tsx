import { AppSideBar } from "@/components/ui/app-sidebar";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/ui/site-header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "15rem",
          "--sidebar-width-mobile": "15rem",
        } as React.CSSProperties
      }
    >
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <AppSideBar />
        </Sidebar>
        <div className="flex flex-col w-full">
          <SiteHeader />
          <main className="w-full h-full p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
