interface buttonProps {
	title: string;
	className: string;
}
export default function Button({ title, className }: buttonProps) {
	return (
		<div>
			<button
				className={`rounded-[5rem] px-[34rem] py-[12rem] text-[14rem] font-medium leading-[20rem] tracking-[0.8rem] btn transition-all duration-200 ease-in-out ${className}`}>
				{title}
			</button>
		</div>
	);
}
