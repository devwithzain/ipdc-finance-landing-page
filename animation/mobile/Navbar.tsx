"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { curve, menuSlide } from "@motion";
import Links from "./Links";
import Link from "next/link";
import { navLinks } from "@constants";

const Navbar = () => {
	const pathname = usePathname();
	const [selectedIndicator, setSelectedIndicator] = useState(pathname);

	return (
		<>
			<motion.div
				variants={menuSlide}
				initial="initial"
				animate="enter"
				exit="exit"
				className="h-screen bg-[#292929] fixed right-[0rem] top-[0rem] text-white">
				<div className="box-border h-full p-[100rem] flex flex-col justify-between">
					<div
						onMouseLeave={() => {
							setSelectedIndicator(pathname);
						}}
						className="flex flex-col text-[56rem] gap-[12rem] mt-[80rem]">
						<div className="text-[#999999] border-b-[1px] border-[#999999] uppercase text-[11px] mb-[40px]">
							<p>Navigation</p>
						</div>
						{navLinks.map((data, index) => {
							return (
								<Links
									className="text-white font-light"
									key={index}
									data={{ ...data, index }}
									isActive={selectedIndicator == data.href}
									setSelectedIndicator={setSelectedIndicator}></Links>
							);
						})}
					</div>
					<div className="flex w-full justify-between text-[12rem] gap-[40rem]">
						<Link href={"/"}>Awwwards</Link>
						<Link href={"/"}>Instagram</Link>
						<Link href={"/"}>Dribble</Link>
						<Link href={"/"}>LinkedIn</Link>
					</div>
				</div>
				<svg className="absolute top-0 left-[-99px] w-[100px] h-full fill-[#292929] stroke-none">
					<motion.path
						variants={curve}
						initial="initial"
						animate="enter"
						exit="exit"
					/>
				</svg>
			</motion.div>
		</>
	);
};
export default Navbar;
