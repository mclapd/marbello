import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-8 text-center">
      {/* Update the file extension to .png */}
      <Image
        src="/marbello_logo.png"
        alt="MARBELLO"
        width={300}
        height={300}
        className="max-w-xs h-auto"
        priority
      />

      {/* Text content */}
      <h1 className="mt-8 text-3xl font-bold text-gray-800">
        MARBELLO has officially opened!
      </h1>
      <p className="mt-2 text-lg text-gray-600">
        We will be back online with a better experience soon.
      </p>
    </div>
  );
}
