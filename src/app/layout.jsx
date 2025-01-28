'use server';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from './header'

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
          >
            {/* TODO MAKE A MAIN CONTAINER flex-col; header/children/footer */}
            <Header/>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
