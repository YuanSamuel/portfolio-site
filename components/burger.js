import Image from "next/image";

export default function Burger({ open, setOpen }) {
  return (
    <nav
      className="absolute top-6 right-6 lg:right-8 items-center font-cousine md:text-lg z-20 hover:cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <Image src="/list.svg" alt="Navigation Icon" width={40} height={40} />
    </nav>
  );
}
