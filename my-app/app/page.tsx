import Image from "next/image";

export const metadata = {
  title: "Evin's Webpage",
  description: "Welcome to Evin's personal website",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center max-h-screen py-2">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Image
          src="/logo-big.svg"
          alt="Evin Rasho"
          width={600}
          height={500}
          className="rounded-full"></Image>
        <h1 className="text-6xl font-bold">
          Welcome to Evin's Webpage!
        </h1>
        </div>
      </div>

      );
}
