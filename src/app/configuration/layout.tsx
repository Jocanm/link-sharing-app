import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ConfigurationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className="h-full w-full bg-gray-light">
        <div className="pt-4">
          <Navbar />
        </div>
        {children}
      </main>
    </div>
  );
}
