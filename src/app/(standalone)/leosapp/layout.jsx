'use server';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export default async function RootLeosLayout({children}) {
    return (
        <html>
            <head>                
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}