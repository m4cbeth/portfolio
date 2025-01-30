'use server';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from './header'
import ThemeButton from "./themebutton";

export async function generateMetadata({params}) {
  return {
    title: "Jaren Whitehouse's Portfolio"
  }
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&display=swap" rel="stylesheet"/>
      </head>
      <body>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        header={Header}
      >
          <Header ThemeButton={ThemeButton} />
          {children}
          <Footer />
      </ThemeProvider>

      </body>
    </html>
  );
}

const Footer = () => (
  <div className="flex justify-center p-10">
    &copy;{(new Date).toString().slice(10,15)} Jaren Whitehouse
  </div>
)