import { Magnetic, TextMask } from "@animation";
import { experienceList } from "@constants";
import Image from "next/image";

export default function Experience() {
	const phrases = ["Extraordinary Customer Experience"];
	return (
		<section
			className="w-full padding-y"
			id="campgains">
			<div className="flex flex-col gap-[50px]">
				<div>
					<div className="flex flex-col gap-y-[20px]">
						<h1 className="heading text-[#343434] font-bold sm:text-left xm:text-left leading-none text-center tracking-wider">
							<TextMask>{phrases}</TextMask>
						</h1>
						<p className="text-[16px] text-[#999] font-normal leading-[22px] text-center sm:text-left xm:text-left">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							bibendum eget morbi <br className="sm:hidden xm:hidden" />{" "}
							dignissim eu pharetra consequat montes, sagittis.
						</p>
					</div>
				</div>
				<div className="w-full grid sm:grid-cols-1 xm:grid-cols-1 md:grid-cols-3 grid-cols-4 gap-x-[100px] gap-y-[20px]">
					{experienceList.map((item, i) => (
						<div
							className="p-[20px] flex flex-col gap-y-[10px] shadow-md rounded-md"
							key={item.id}>
							<Magnetic>
								<Image
									src={item.img}
									alt={item.title}
									width={28}
									height={28}
									className="w-[28px] h-[28px] object-cover cursor-pointer"
								/>
							</Magnetic>
							<h1 className="text-[#343434] paragraph font-bold leading-[22px]">
								{item.title}
							</h1>
							<p className="text-[#999] text-[14px] font-normal leading-[24px]">
								{item.para}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
