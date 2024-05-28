import "@styles/globals.css";
import { Navbar } from "@components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "IPDC Finance",
	description: "IPDC Finance Landing Page BY Zain Ali",
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
