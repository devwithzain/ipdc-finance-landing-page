"use client";
import { Footer, Hero, NewsLetter } from "@components";
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
			<Sticky />
			<div className="w-full">
				<div className="px-[100rem]">
					<Hero />
				</div>
				{/* <div className="px-[100rem]">
					<Experience />
				</div>
				<Partner />
				<div className="px-[100rem]">
					<Glance />
				</div>
				<div className="px-[100rem]">
					<Result />
				</div> */}
				<NewsLetter />
				<div className="px-[100rem]">
					<Footer />
				</div>
			</div>
		</>
	);
}
