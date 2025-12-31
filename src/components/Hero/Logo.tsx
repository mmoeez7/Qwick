import Image from "next/image";

export default function Logo({ size = "default" }: { size?: "default" | "small" }) {
  const sizeClasses = size === "small" ? "w-6 h-6" : "w-12 h-11";
  
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/Logo.svg"
        alt="QWICK Logo"
        width={size === "small" ? 24 : 48}
        height={size === "small" ? 22 : 44}
        className={sizeClasses}
      />
    </div>
  );
}

