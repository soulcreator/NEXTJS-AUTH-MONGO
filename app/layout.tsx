import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar/>
          <main className="flex justify-center pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
