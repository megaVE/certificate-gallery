import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export function Button({ className, children, ...props }: ButtonProps) {
	return (
		<button
			type="button"
			className={cn(
				"py-2 px-4 rounded-md cursor-pointer duration-200",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
