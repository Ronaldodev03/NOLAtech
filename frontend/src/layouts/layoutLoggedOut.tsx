import { LightDarkToggle } from "@/components/light-dark-toggle";
import { Link, Outlet } from "react-router-dom";

export default function LayoutLoggedOut() {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col mx-auto ">
        <nav className=" flex items-center justify-between py-3 px-3 md:px-6 w-full //border-b">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl text-blue-500">NOLAtech</h1>
          </Link>

          <LightDarkToggle />
        </nav>
        <div className=" container mx-auto flex flex-col justify-center items-center px-4 md:px-6 flex-1">
          <Outlet />
        </div>
      </section>
    </>
  );
}
