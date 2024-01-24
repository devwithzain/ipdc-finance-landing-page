import { TextMask } from "@animation";
import Button from "./Button";

export default function NewsLetter() {
	const phrases = ["Newsletter"];

	return (
		<section className="w-full my-[100rem] bg-[#FEF9FC]">
			<div className="flex flex-col gap-y-[30rem] py-[100rem] flex-wrap">
				<div className="flex flex-col gap-y-[20rem]">
					<h1 className="text-[36rem] text-[#343434] font-bold leading-[43rem] text-center tracking-wider">
						<TextMask>{phrases}</TextMask>
					</h1>
					<p className="text-[#999] text-[16rem] font-normal leading-[22rem] text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Eget
						ac quis aliquam arcu lacus.
					</p>
				</div>
				<div className="flex items-center justify-center gap-x-[20rem]">
					<div className="w-[350rem]">
						<input
							type="email"
							placeholder="Your Email"
							className="py-[10rem] px-[20rem] w-full text-[#CCC] text-[16rem] font-normal leading-[22rem] rounded-[4rem] border-[1rem] border-[#CCC] outline-none"
						/>
					</div>
					<div>
						<Button
							title="SUBSCRIBE"
							className="bg-[#ED017F] text-white"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
