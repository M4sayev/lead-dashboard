import { LayoutDashboard, User } from "lucide-react";

function Navbar() {
  return (
    <header className=" py-5 border-b border-0 md:border-b bg-sidebar">
      <div className="max-w-7xl mx-auto flex justify-between px-5">
        <div className="flex items-center gap-2">
          <LayoutDashboard
            aria-hidden="true"
            className="bg-blue-400 text-white p-0.5 rounded"
          />
          <span className="text-fluid-lg">Lead DashBoard</span>
        </div>
        {/* <nav> should be navigation later </nav> */}
        <button
          aria-label="Open user info dropdown"
          type="button"
          className="group cursor-pointer rounded-full border-gray-400 hover:border-blue-500 border-2 p-1 transition-colors ease-in-out duration-150"
        >
          <User
            aria-hidden="true"
            className="text-blue text-gray-500 group-hover:text-blue-500 transition-colors ease-in-out duration-150"
          />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
