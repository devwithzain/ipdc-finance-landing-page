import { footerIcons } from "@constants";
import Navbar from "./Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import { call, car, hero, house } from "@public";
import { Magnetic } from "@animation";
import Button from "./Button";

export default function Home() {
	return (
		<div className="w-full h-screen">
			<Navbar />
			<div className="w-full h-[85vh] flex items-center justify-between py-[50rem]">
				<div className="flex-1 w-full">
					<div>
						<h1 className="text-[64rem] font-[900] leading-[108%] overflow-hidden">
							Chase Your <br /> Dream with us{" "}
						</h1>
						<p className="text-[16rem] font-normal leading-[137%] text-[#676767] my-[30rem]">
							The harder you work for something, the greater
							<br />
							you&#39;ll feel when you achieve it.
						</p>
						<div className="flex items-center gap-x-[15rem]">
							<Button title="Apply Online" />
							<Button title="Loan Caclulator" />
						</div>
					</div>
					<div className="flex items-center gap-x-[30rem] mt-[30rem]">
						<div className="flex items-center gap-x-[10rem]">
							<Image
								src={call}
								alt="img"
								width={25}
								height={25}
								className="w-[25rem] h-[25rem]"
							/>
							<p className="text-[#363940] text-[18rem] font-semibold leading-[22rem]">
								16519
							</p>
						</div>
						<div className="flex items-center gap-x-[10rem]">
							{footerIcons.map((item) => (
								<Magnetic key={item.id}>
									<Link href={item.link}>
										<Image
											src={item.img}
											alt="img"
											width={20}
											height={20}
											className="w-[20rem] h-[20rem] object-cover"
										/>
									</Link>
								</Magnetic>
							))}
						</div>
					</div>
				</div>
				<div className="flex flex-1 w-full bg-[#ffeaf5] relative">
					<Image
						src={hero}
						alt="img"
						width={800}
						height={400}
						className="w-full h-full object-cover"
					/>
					<div className="bg-white px-[20rem] py-[20rem] h-[71rem] flex items-center gap-x-[20rem] absolute top-[50rem] left-[-50rem] shadow-lg rounded-[55rem]">
						<Image
							src={car}
							alt="img"
							width={30}
							height={30}
							className="w-[30rem] h-[30rem]"
						/>
						<p className="text-[18rem] text-[#343434] font-bold leading-[22rem]">
							Car Loans
						</p>
					</div>
					<div className="bg-white px-[20rem] py-[20rem] h-[71rem] flex items-center gap-x-[20rem] absolute top-[200rem] right-[-80rem] shadow-lg rounded-[55rem]">
						<Image
							src={house}
							alt="img"
							width={30}
							height={30}
							className="w-[30rem] h-[30rem]"
						/>
						<p className="text-[18rem] text-[#343434] font-bold leading-[22rem]">
							House Loans
						</p>
					</div>
					{/* <div className="flex flex-col items-center gap-y-[10rem] absolute top-[380rem] right-[25rem]">
						<p className="bg-[#F467B2] w-[15rem] h-[15rem] rounded-full"></p>
						<p className="bg-[#CCCCCC] w-[12rem] h-[12rem] rounded-full"></p>
						<p className="bg-[#CCCCCC] w-[12rem] h-[12rem] rounded-full"></p>
						<p className="bg-[#CCCCCC] w-[12rem] h-[12rem] rounded-full"></p>
					</div> */}
				</div>
			</div>
		</div>
	);
}
