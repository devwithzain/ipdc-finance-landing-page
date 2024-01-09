"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@components";
import { navVariants } from "@motion";
import { navLinks } from "@constants";
import { LinkHover } from "@animation";
import { logo, magnifier } from "@public";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

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
				className="w-full flex items-center justify-between h-[10vh] px-[100rem] sticky top-0 z-10 bg-white"
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
				<div className="flex gap-[10rem] font-medium tracking-[1rem] uppercase">
					{navLinks.map((item) => (
						<div key={item.id}>
							<Link
								href={`#${item.link}`}
								className="text-[18rem] font-bold text-[#676767]">
								<LinkHover>{item.title}</LinkHover>
							</Link>
						</div>
					))}
				</div>
				<div className="flex items-center gap-[25rem]">
					<div className="">
						<Image
							src={magnifier}
							alt="magnifier"
							width={50}
							className="w-[25px] object-cover"
						/>
					</div>
					<Button
						title="iSERVICES"
						className="bg-[#ED017F]"
					/>
				</div>
			</motion.nav>
		</>
	);
}
