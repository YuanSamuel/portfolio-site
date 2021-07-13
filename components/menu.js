import { motion } from "framer-motion";

export default function Menu({ open, setOpen }) {
  const variants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: "-100%",
    },
  };

  return (
    <motion.div
      initial="hidden"
      className="flex flex-col pt-24 bg-white h-screen text-left pl-6 absolute top-0 left-0 w-64 z-10 font-cousine text-lg"
      animate={open ? "open" : "closed"}
      variants={variants}
    >
      <div
        className="cursor-pointer mb-4"
        onClick={() => {
          setOpen(false);
          const anchor = document.querySelector("#about");
          anchor.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <p>01. About</p>
      </div>
      <div
        className="cursor-pointer mb-4"
        onClick={() => {
          setOpen(false);
          const anchor = document.querySelector("#projects");
          anchor.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <p>02. Projects</p>
      </div>
      <div
        className="cursor-pointer mb-4"
        onClick={() => {
          setOpen(false);
          const anchor = document.querySelector("#writing");
          anchor.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <p>03. Writing</p>
      </div>
      <div
        className="cursor-pointer mb-4"
        onClick={() => {
          setOpen(false);
          const anchor = document.querySelector("#contact");
          anchor.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <p>04. Contact</p>
      </div>
    </motion.div>
  );
}
