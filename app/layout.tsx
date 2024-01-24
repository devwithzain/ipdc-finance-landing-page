import "@styles/globals.css";
import { Navbar } from "@components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "IND Finance",
	description: "IND Finance",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
