import { BookOpenCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center ">
      <div className="navbar bg-blend-darken">
        <div className="container">
          <div className="flex-none"></div>
          <div className="flex-1">
            <Link href="/">
              <BookOpenCheck color="blue" />
            </Link>
          </div>
          <div className="flex-none">
            <Link href="/create" className="btn btn-ghost">
              Create post
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="divider divider-info w-full">Manage Post</div>
      </div>
    </div>
  );
};

export default Navbar;
