import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { useAuthStore } from "@/stores/authUser";

type Props = {
  className?: string;
};

export function LogoutBtn({ className }: Props) {
  const { logout } = useAuthStore();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={className} //style as prop
        >
          <Button
            variant="outline"
            onClick={async () => {
              await logout();
            }}
          >
            <LogOut />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Logout</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
