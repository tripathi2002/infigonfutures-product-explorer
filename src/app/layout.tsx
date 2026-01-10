import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en" className="dark">
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
        <header className="border-b dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <span className="font-bold">Product Explorer</span>
            <ThemeToggle />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
