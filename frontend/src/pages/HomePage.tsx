import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className=" flex items-center gap-2">
      <div className=" flex flex-col items-center lg:items-start gap-2">
        <h1 className="text-5xl text-center">
          <span className=" hidden sm:inline">Hello, We are </span>
          <span className="font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
            NOLAtech
          </span>
        </h1>

        <p className=" text-center sm:text-xl">
          The best dashboard to manage organizations
        </p>
        <div className="flex gap-2 items-center mt-2">
          <Button asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <small>or</small>
          <Button asChild variant="outline">
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
      <img
        src="/undraw_website.svg"
        alt="home image"
        className="hidden lg:block w-[400px]"
      />
    </div>
  );
}
