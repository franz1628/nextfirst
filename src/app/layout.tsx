
import "./globals.css";
import "tailwindcss/tailwind.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <title>Nest</title>
      </head>
      <body
        className={` antialiased flex flex-col min-h-screen`}
      >
  

    
          <main className="flex-grow">
          {children}
          </main>
       
     
      </body>
    </html>
  );
}
