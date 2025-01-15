import Image from "next/image";

export const metadata = {
  title: "Evin's Webpage",
  description: "Welcome to Evin's personal website",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Evin's Webpage!
        </h1>
        </div>
      </div>

      );
}
