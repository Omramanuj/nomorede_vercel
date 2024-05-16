import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/provider/ThemeProvider";
import { CardList } from "@/components/cardList/CardList";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Nomorede",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <> 
        {/* <h1>its a profile page for stylist .</h1> */}
        {children}
        </>
    );
}
