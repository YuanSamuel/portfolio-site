export default function NavBar() {
  return (
    <nav className="absolute top-6 right-8 flex items-center font-cousine text-lg">
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
  );
}
