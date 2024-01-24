"use client";
import Link from "next/link";
import { call } from "@public";
import Image from "next/image";
import { Magnetic } from "@animation";
import { motion } from "framer-motion";
import { footerVarient } from "@motion";
import { footerIcons, footerLinks } from "@constants";

export default function MFooter() {
	return (
		<motion.section
			variants={footerVarient}
			initial="hidden"
			whileInView="vissible"
			className="mt-[100rem] w-full overflow-hidden">
			<div className="flex  justify-between py-[60rem] gap-[50rem] flex-col lg:flex-row">
				<div className="flex justify-between items-center lg:flex-col gap-y-[20rem]">
					<div className="flex-col flex">
						<h1 className="text-[#010101] text-[18rem] font-semibold leading-[22rem] mb-[15rem]">
							About the company
						</h1>
						<p className="text-[#676767] text-[14rem] leading-[22rem] font-normal">
							Learn To Love Growth <br /> And Change And You Will <br /> Be A
							Success. Microsoft <br /> Patch
						</p>
					</div>
					<div className="flex gap-[20rem] items-center ">
						{footerIcons.map((item) => (
							<Magnetic key={item.id}>
								<Link href={item.link}>
									<Image
										src={item.img}
										alt="img"
										width={25}
										height={25}
										className="w-auto h-auto object-cover"
									/>
								</Link>
							</Magnetic>
						))}
					</div>
				</div>
				<div className="flex justify-between gap-[80rem] flex-wrap">
					{footerLinks.map((item, i) => (
						<div
							className="flex flex-col gap-y-[10rem] sm:w-[80px]"
							key={item.id}>
							<div className="flex items-center ">
								{i === 3 && (
									<Image
										src={call}
										alt="img"
										width={20}
										height={20}
										className="object-cover w-auto h-auto mt-[-13rem] mr-[7rem]"
									/>
								)}
								<h1 className="text-[#363940] text-[18rem] font-semibold leading-[22rem] mb-[15rem]">
									{item.title}
								</h1>
							</div>
							{item.links?.map((item) => (
								<Link
									href={item.link}
									key={item.id}>
									<p className="text-[#676767] text-[14rem] leading-[22rem] font-normal hover:text-[#363940] transition-all ease-in-out duration-[500] hover:-translate-y-12">
										{item.title}
									</p>
								</Link>
							))}
						</div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
