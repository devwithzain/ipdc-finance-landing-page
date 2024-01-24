import { TextMask } from "@animation";
import { resultList } from "@constants";

export default function Result() {
	const phrases = ["Our best results for the year"];

	return (
		<section className="w-full my-[100rem]">
			<div className="flex flex-col gap-[70rem]">
				<div>
					<div className="flex flex-col gap-y-[20rem]">
						<h1 className="text-[36rem] text-[#343434] font-bold leading-[43rem] text-center tracking-wider sm:text-left">
							<TextMask>{phrases}</TextMask>
						</h1>
						<p className="text-[16rem] text-[#999] font-normal leading-[22rem] text-center sm:text-left">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
							dapibus <br />
							mattis vel feugiat erat tortor eleifend.
						</p>
					</div>
				</div>
				<div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[100rem] gap-y-[50rem]">
					{resultList.map((item, i) => (
						<div
							className="my-[10rem] text-center sm:text-left p-[20rem]"
							key={item.id}>
							{i === 0 ? (
								<h1 className="text-[#ED017F] text-[40rem] font-bold leading-[43rem]">
									{item.title}
								</h1>
							) : (
								<h1 className="text-[#343434] text-[40rem] font-bold leading-[43rem]">
									{item.title}
								</h1>
							)}
							<p className="text-[#676767] text-[16rem] font-normal leading-[25rem] uppercase tracking-[1rem]">
								{item.para}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
