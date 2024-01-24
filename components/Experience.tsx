import { Magnetic, TextMask } from "@animation";
import { experienceList } from "@constants";
import Image from "next/image";

export default function Experience() {
	const phrases = ["Extraordinary Customer Experience"];
	return (
		<section
			className="w-full my-[100rem]"
			id="campgains">
			<div className="flex flex-col gap-[70rem]">
				<div>
					<div className="flex flex-col gap-y-[20rem]">
						<h1 className="text-[36rem] text-[#343434] font-bold leading-[43rem] sm:text-left text-center tracking-wider">
							<TextMask>{phrases}</TextMask>
						</h1>
						<p className="text-[16rem] text-[#999] font-normal leading-[22rem] text-center sm:text-left">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							bibendum eget morbi <br /> dignissim eu pharetra consequat montes,
							sagittis.
						</p>
					</div>
				</div>
				<div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[100rem] gap-y-[50rem]">
					{experienceList.map((item, i) => (
						<div
							className="my-[10rem] p-[20rem] flex flex-col gap-y-[12em]"
							key={item.id}>
							<Magnetic>
								<Image
									src={item.img}
									alt={item.title}
									width={28}
									height={28}
									className="w-[28rem] h-[28rem] object-cover cursor-pointer"
								/>
							</Magnetic>
							<h1 className="text-[#343434] text-[22rem] font-bold leading-[22rem]">
								{item.title}
							</h1>
							<p className="text-[#999] text-[14rem] font-normal leading-[24rem]">
								{item.para}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
