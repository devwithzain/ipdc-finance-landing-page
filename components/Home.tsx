"use client";
import {
	Experience,
	Footer,
	Glance,
	Hero,
	NewsLetter,
	Partner,
	Result,
} from "@components";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Sticky } from "@animation";

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<div className="hidden lg:block">
				<Sticky />
			</div>
			<div className="w-full">
				<div className="md:px-[70rem] px-[100rem]">
					<Hero />
				</div>
				<div className="md:px-[70rem] px-[100rem]">
					<Experience />
				</div>
				<Partner />
				<div className="md:px-[70rem] px-[100rem]">
					<Glance />
				</div>
				<div className="md:px-[70rem] px-[100rem]">
					<Result />
				</div>
				<NewsLetter />
				<div className="md:px-[70rem] px-[100rem]">
					<Footer />
				</div>
			</div>
		</>
	);
}
