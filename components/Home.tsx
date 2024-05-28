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
			<div className="sm:hidden xm:hidden flex">
				<Sticky />
			</div>
			<div className="w-full">
				<div className="padding-x">
					<Hero />
				</div>
				<div className="padding-x">
					<Experience />
				</div>
				<Partner />
				<div className="padding-x">
					<Glance />
				</div>
				<div className="padding-x">
					<Result />
				</div>
				<NewsLetter />
				<div className="padding-x">
					<Footer />
				</div>
			</div>
		</>
	);
}
