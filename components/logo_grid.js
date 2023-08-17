import Image from "next/image";

export default function LogoGrid({ logos }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-10 md:gap-6 mt-5 mb-5 justify-center items-center">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="w-32 h-24 relative flex items-center justify-center"
        >
          <Image
            src={logo}
            alt={`Logo ${index + 1}`}
            fill
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
}
