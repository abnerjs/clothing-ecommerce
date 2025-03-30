import type { FunctionComponent, SVGProps } from "react";
import React from "react";

type Props = {
	placeholder?: string;
	value?: string;
	onChange?: (value: string) => void;
	onBlur?: () => void;
	onFocus?: () => void;
	disabled?: boolean;
	error?: string | null;
	className?: string;
	style?: React.CSSProperties;
	type?: string;
	variant?: "default" | "filled" | "outlined";
	icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
	search?: boolean;
};

const TextField = (props: Props) => {
	const {
		placeholder,
		value,
		onChange,
		onBlur,
		onFocus,
		disabled = false,
		error = null,
		className = "",
		style = {},
		type = "text",
		variant = "default",
		icon,
		search = false,
	} = props;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(event.target.value);
		}
	};

	return (
		<div className="relative w-full">
			<input
				type={type}
				value={value}
				onChange={handleChange}
				onBlur={onBlur}
				onFocus={onFocus}
				disabled={disabled}
				style={style}
				placeholder={placeholder}
				className={`bg-white
											${variant === "outlined" && "border border-gray-300"}
											${variant === "filled" && "bg-gray-100"}
						 	  			text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 
											block w-full pe-10 p-2 pl-4 placeholder-gray-400
											${className}
											${error && "border-red-500 focus:ring-red-500 focus:border-red-500"}`}
			/>
			{icon && (
				<button
					type="button"
					className="absolute inset-y-0 end-0 flex items-center pe-3"
				>
					<svg
						className="w-4 h-4 text-gray-500 hover:text-gray-900"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 16 20"
					>
						{React.createElement(icon)}
					</svg>
				</button>
			)}
			{search && (
				<button
					type="button"
					className="absolute inset-y-0 end-0 flex items-center pe-3"
				>
					<svg
						width="19"
						height="20"
						viewBox="0 0 19 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						className="w-4 h-4 text-gray-500 hover:text-gray-900"
					>
						<path
							d="M8.3629 0.651367C8.69891 0.699463 9.03741 0.734594 9.37057 0.797882C10.9895 1.10537 12.3752 1.85715 13.5286 3.02887C14.5778 4.09478 15.2714 5.36123 15.5693 6.82992C15.9436 8.6761 15.6853 10.4367 14.7601 12.0801C14.4637 12.6066 14.0889 13.089 13.7501 13.5915C13.7181 13.6035 13.6862 13.6156 13.6541 13.6276C13.7143 13.6586 13.7866 13.6772 13.8328 13.7224C15.3654 15.2265 16.8966 16.7319 18.4235 18.2418C18.5326 18.3496 18.6071 18.4923 18.6978 18.6187V18.8744C18.6181 19.1112 18.4552 19.2648 18.223 19.3491H17.9674C17.8202 19.2455 17.6555 19.1598 17.5286 19.0356C15.9975 17.537 14.472 16.0326 12.9449 14.53C12.9064 14.4921 12.8659 14.4562 12.8191 14.4125C12.7663 14.4486 12.7155 14.4799 12.6683 14.5159C11.6533 15.2896 10.5152 15.7942 9.26046 16.008C7.38521 16.3275 5.60063 16.0475 3.94278 15.093C2.21795 14.1001 1.02144 12.6628 0.381222 10.7732C0.19136 10.2127 0.0757405 9.63509 0.031589 9.04388C0.0281197 8.99696 0.0108827 8.95105 0 8.90467V7.88214C0.0111748 7.82955 0.0251616 7.7774 0.0330497 7.72434C0.0785525 7.41806 0.106197 7.10804 0.169996 6.80567C0.475332 5.35864 1.15265 4.10622 2.1853 3.05019C3.34467 1.86464 4.73853 1.10523 6.37111 0.79664C6.69182 0.735982 7.01714 0.699171 7.34037 0.651367H8.3629ZM1.20747 8.35371C1.22185 8.62479 1.22109 8.8511 1.24771 9.07416C1.41628 10.4865 1.9537 11.7387 2.93504 12.775C4.65216 14.5881 6.77355 15.2695 9.20455 14.7967C11.3358 14.3821 12.9285 13.1556 13.8726 11.1834C14.8242 9.19547 14.7663 7.18616 13.7007 5.26526C12.6086 3.2963 10.8855 2.17407 8.65103 1.89926C6.88662 1.68223 5.26393 2.11158 3.84191 3.18919C2.1219 4.49266 1.26637 6.2485 1.20747 8.35371Z"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			)}
		</div>
	);
};

export default TextField;
