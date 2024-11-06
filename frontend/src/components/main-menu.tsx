import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import MenuItem from "./menu-item";
import MenuTitle from "./menu-title";
import { LightDarkToggle } from "@/components/light-dark-toggle";
import { cn } from "@/lib/utils";
import { LogoutBtn } from "./logout-btn";
import { useAuthStore } from "@/stores/authUser";

export default function MainMenu({ className }: { className?: string }) {
  const { user } = useAuthStore();

  return (
    <nav
      className={cn(`md:bg-muted overflow-auto p-4 flex flex-col`, className)}
    >
      <header className="block border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>
      <ul className="py-4 grow">
        <MenuItem href="/">My dashboard</MenuItem>

        {user && user.role === "Admin" && (
          <>
            <MenuItem href="/all-users">All Users</MenuItem>
            <MenuItem href="/admins">Admins</MenuItem>
          </>
        )}

        {user && user.role !== "Employee" && (
          <MenuItem href="/managers">Managers</MenuItem>
        )}

        <MenuItem href="/employees">Employees</MenuItem>
      </ul>
      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-blue-500 dark:bg-blue-500 font-bold">
            N
          </AvatarFallback>
        </Avatar>
        <LogoutBtn className="ml-auto" />
        <LightDarkToggle />
      </footer>
    </nav>
  );
}
