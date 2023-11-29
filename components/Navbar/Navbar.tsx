import { Button } from "@components";
import { navLinks } from "@constants";
import { logo, magnifier } from "@public";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	return (
		<div>
			<div className="w-full flex items-center justify-between py-[20rem]">
				<div className="">
					<Image
						src={logo}
						alt="logo"
						width={100}
						className="w-[100rem] object-cover"
					/>
				</div>
				<div className="flex gap-[10rem] font-medium tracking-[1rem] uppercase">
					{navLinks.map((item) => (
						<div
							className=""
							key={item.id}>
							<Link
								href={`#${item.link}`}
								className="text-[17rem]">
								{item.title}
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
					<Button title="iSERVICES" />
				</div>
			</div>
		</div>
	);
}
