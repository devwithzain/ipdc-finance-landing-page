"use client";
import { TextMask } from "@animation";
import { arrow, plant } from "@public";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Glance() {
	const phrases = ["IPDC AT A GLANCE"];
	const [hovered, setHovered] = useState<boolean>(false);
	return (
		<section
			className="w-full padding-y"
			id="aboutUs">
			<div className="w-full flex flex-row-reverse justify-between gap-x-[30px] sm:flex-col-reverse xm:flex-col-reverse gap-y-[40px]">
				<div className="flex-1 w-full h-[65vh] sm:h-full xm:h-full ">
					<Image
						src={plant}
						alt="img"
						width={800}
						height={400}
						className="w-full h-[65vh] sm:h-[400px] xm:h-[400px] object-cover"
					/>
				</div>
				<div className="flex flex-1 w-full flex-col gap-y-[20px] lg:h-[65vh]">
					<h1 className="text-[#343434] text-[32px] font-bold leading-[38px] tracking-wider">
						<TextMask>{phrases}</TextMask>
					</h1>
					<p className="text-[#676767] paragraph tracking-wide font-normal leading-normal">
						IPDC Finance Limited previously known as Industrial{" "}
						<br className="lg:block hidden" /> Promotion and Development Company
						of Bangladesh <br className="lg:block hidden" /> Limited is the
						first private sector financial institution of{" "}
						<br className="lg:block hidden" /> the country established in 1981
						by a distinguished group of <br className="lg:block hidden" />{" "}
						shareholders namely International Finance Corporation{" "}
						<br className="lg:block hidden" /> (IFC), USA, German Investment and
						Development <br className="lg:block hidden" /> Company (DEG),
						Germany, The Aga Khan Fund for <br className="lg:block hidden" />{" "}
						Economic Development (AKFED), Switzerland,{" "}
						<br className="lg:block hidden" />
						Commonwealth Development Corporation (CDC), UK and{" "}
						<br className="lg:block hidden" /> the Government of Bangladesh
					</p>
					<Link
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}
						href={"/"}
						className="flex items-center w-max gap-x-[5px] group">
						<div className="flex flex-col">
							<p className="text-[#ED017F] text-[20px] font-normal">
								Read more
							</p>
							<div
								className={`${
									hovered ? "w-full scale-100" : "w-0 scale-0"
								} origin-left mt-[2px]  transition ease-in duration-300 h-[2.5px] bg-[#ED017F] rounded-full`}
							/>
						</div>
						<Image
							src={arrow}
							alt="img"
							width={30}
							height={30}
							className="group-hover:translate-x-[3px] ease-in-out duration-200 transition-all"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}
