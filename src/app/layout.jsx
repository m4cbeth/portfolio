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
  <div className="flex justify-center p-3">
    &copy;{(new Date).toString().slice(10,15)} Jaren Whitehouse
  </div>
)