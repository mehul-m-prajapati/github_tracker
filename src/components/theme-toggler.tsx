import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MoonStar, Sun } from "lucide-react";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      {theme === "dark" ? (
        <Button
          variant={"outline"}
          className="px-3"
          onClick={() => setTheme("light")}
        >
          <Sun />
        </Button>
      ) : (
        <Button
          variant={"outline"}
          className="px-3"
          onClick={() => setTheme("dark")}
        >
          <MoonStar />
        </Button>
      )}
    </div>
  );
};
