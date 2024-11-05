import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import MainMenu from "../components/main-menu";
import MenuTitle from "../components/menu-title";
import { ChevronLeft, ChevronRight, Loader, MenuIcon } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuthStore } from "@/stores/authUser";
import { useUserStore } from "@/stores/userStore";

export default function LayoutLoggedIn() {
  const { user, isCheckingAuth } = useAuthStore();
  const { isLoadingUsers } = useUserStore();

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
      <MainMenu className="hidden md:flex" />

      {!isDesktop && (
        <div className="p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border">
          {/* title - mobile */}
          <MenuTitle />

          {/* menu - mobile */}
          <Drawer
            direction="right"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenChange={(open) => setMobileMenuOpen(open)}
          >
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <MainMenu className=" h-full " />
            </DrawerContent>
          </Drawer>
        </div>
      )}

      {/*   {isCheckingAuth || isLoadingUsers ? (
        <div className="h-screen">
          <div className="flex justify-center items-center bg-background h-full">
            <Loader className="animate-spin text-blue-500 size-10" />
          </div>
        </div>
      ) : (
        <div className="overflow-auto py-2 px-4">
          <h1 className="pb-4">{`Welcome back, ${user?.username}!`}</h1>
          <Outlet />
        </div>
      )} */}
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4 md:flex items-center gap-2">
          <ChevronLeft size={48} className=" hidden md:block" />
          Welcome, <span className=" capitalize">{user?.username}</span>
          <ChevronRight size={48} className="hidden md:block" />
        </h1>
        <Outlet />
      </div>
    </div>
  );
}
