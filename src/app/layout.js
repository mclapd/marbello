import "./globals.css";

export const metadata = {
  title: "MARBELLO - Opened",
  description: "The MARBELLO website will be back soon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}
