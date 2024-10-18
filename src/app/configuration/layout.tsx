import Navbar from "@/components/ui/navbar/Navbar";

export default function ConfigurationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className="h-full w-full bg-gray-light">
        <div className="md:pt-4">
          <Navbar />
        </div>
        {children}
      </main>
    </div>
  );
}
