import { servicesIcons } from "@constants";
import { arrow } from "@public";
import Image from "next/image";

export default function Services() {
	return (
		<section className="w-full my-[100rem]">
			<div className="py-[50rem] flex flex-col gap-y-[50rem]">
				<div className="flex flex-col gap-y-[20rem]">
					<h1 className="text-[36rem] text-[#343434] font-bold leading-[43rem] text-center">
						Our Services
					</h1>
					<p className="text-[16rem] text-[#999] font-normal leading-[22rem] text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
						dapibus mattis vel feugiat erat tortor eleifend.
					</p>
				</div>
				<div className="flex items-center justify-between gap-[30rem]">
					{servicesIcons.map((item) => (
						<div
							className=""
							key={item.id}>
							<Image
								src={item.img}
								alt={item.title}
								width={400}
								height={800}
								className="w-[280rem] h-[368rem] object-cover rounded-[9rem]"
							/>
							<div className="flex gap-x-[10rem] mt-[15rem]">
								<p className="text-[21rem] text-[#363940] font-normal leading-[35rem] tracking-[1rem] uppercase">
									{item.title}
								</p>
								<Image
									src={arrow}
									alt="img"
									width={35}
									height={35}
									className="w-[35rem] h-[35rem] bg-[#FCE0EF] rounded-full p-[5rem] object-cover"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
