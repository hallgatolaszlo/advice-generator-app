import "@/app/globals.css";
import { manrope } from "@/app/ui/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advice Generator App",
	description: "Generate random advice with our simple app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${manrope.className}`}>
			<body>{children}</body>
		</html>
	);
}
