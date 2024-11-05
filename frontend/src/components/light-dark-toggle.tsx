import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  className?: string;
};

export function LightDarkToggle({ className }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={className} //style as prop
        >
          <Button
            variant="outline"
            onClick={() => {
              setIsDarkMode((prevValue) => !prevValue);
              document.body.classList.toggle("dark"); //toggle the class dark in the body
            }}
          >
            {isDarkMode ? <MoonIcon /> : <SunIcon />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? "Enable light mode" : "Enable dark mode"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
