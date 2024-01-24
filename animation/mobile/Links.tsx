"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "@motion";
import { TlinksProps } from "@types";

const Links = ({ data, isActive, setSelectedIndicator }: TlinksProps) => {
	const { title, href, index } = data;

	return (
		<motion.div
			className="relative flex items-center"
			onMouseEnter={() => {
				setSelectedIndicator(href);
			}}
			custom={index}
			variants={slide}
			initial="initial"
			animate="enter"
			exit="exit">
			<motion.div
				variants={scale}
				animate={isActive ? "open" : "closed"}
				className="w-[10rem] h-[10rem] bg-white rounded-full absolute left-[-30rem]"></motion.div>
			<Link href={`#${href}`}>{title}</Link>
		</motion.div>
	);
};
export default Links;
