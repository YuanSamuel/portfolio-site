import { useState } from "react";
import Burger from "./burger";
import Menu from "./menu";
import { useRef } from "react";
import { useOnClickOutside } from "../scripts/hooks";
import FocusLock from "react-focus-lock";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <nav className="absolute top-6 right-4 lg:right-8 items-center font-cousine md:text-lg hidden sm:flex">
        <div
          className="cursor-pointer"
          onClick={() => {
            const anchor = document.querySelector("#about");
            anchor.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <p className="mr-14">01. About</p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            const anchor = document.querySelector("#projects");
            anchor.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <p className="mr-14">02. Projects</p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            const anchor = document.querySelector("#writing");
            anchor.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <p className="mr-14">03. Writing</p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            const anchor = document.querySelector("#contact");
            anchor.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <p>04. Contact</p>
        </div>
      </nav>
      {/* <div ref={node} className="sm:hidden">
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </FocusLock>
      </div> */}
    </div>
  );
}
