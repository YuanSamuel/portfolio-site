export default function Burger({ open, setOpen }) {
  return (
    <div
      className="absolute top-8 left-6 lg:right-8 items-center font-cousine md:text-lg z-20 hover:cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="border-t-2 h-0 w-7 border-gray-500 mb-2"></div>
      <div className="border-t-2 w-7 border-gray-500 mb-2"></div>
      <div className="border-t-2 w-7 border-gray-500 "></div>
    </div>
  );
}
