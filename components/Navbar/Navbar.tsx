"use client";
import { LinkHover, MobileNavbar } from "@animation";
import { Button } from "@components";
import { navLinks } from "@constants";
import { navVariants } from "@motion";
import { logo, magnifier } from "@public";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});
	return (
		<>
			<motion.nav
				className="w-full flex items-center justify-between h-[10vh] lg:px-[100rem] px-[70rem] sticky top-0 z-10 bg-white"
				variants={navVariants}
				animate={hidden ? "hidden" : "vissible"}>
				<div>
					<Image
						src={logo}
						alt="logo"
						width={100}
						className="w-[100rem] object-cover"
					/>
				</div>
				<div className="lg:flex gap-[10rem] font-medium tracking-[1rem] uppercase hidden">
					{navLinks.map((item) => (
						<div key={item.id}>
							<Link
								href={`#${item.href}`}
								className="text-[18rem] font-bold text-[#676767]">
								<LinkHover>{item.title}</LinkHover>
							</Link>
						</div>
					))}
				</div>
				<div className="lg:flex items-center gap-[25rem] hidden">
					<div>
						<Image
							src={magnifier}
							alt="magnifier"
							width={50}
							className="w-[25px] object-cover"
						/>
					</div>
					<Button
						title="iSERVICES"
						className="bg-[#ED017F] text-white"
					/>
				</div>
				<div className="block lg:hidden">
					<MobileNavbar />
				</div>
			</motion.nav>
		</>
	);
}
