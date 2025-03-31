import avanti from "@assets/avanti.svg";
import FlashSale from "./FlashSale";
import TextField from "../TextField";
import person from "@assets/icons/person.svg";
import cart from "@assets/icons/cart.svg";
import menu from "@assets/icons/menu.svg";
import { useState } from "react";

const Navbar = () => {
	const [categoriesOpened, setCategoriesOpened] = useState(false);

	return (
		<nav className="bg-white">
			<FlashSale />
			<div className="flex flex-col w-dvw px-16 2xl:px-96">
				<div className="w-full flex items-center justify-between p-4">
					<div className="flex gap-10 items-center justify-center">
						<a href="/">
							<img src={avanti} alt="Avanti Logo" className="h-7 max-w-none" />
						</a>
						<div className="searchbar w-full flex-1 pr-2">
							<TextField
								placeholder="Digite aqui o que você procura"
								className="w-full min-w-lg xl:min-w-2xl"
								variant="outlined"
								search
							/>
						</div>
					</div>
					<div className="flex items-center gap-6">
						<div className="greetings flex items-center justify-center gap-2">
							<img
								src={person}
								alt="Ícone de perfil"
								className="h-6 max-w-none"
							/>
							<span className="text-sm font-semibold leading-none whitespace-nowrap">
								Olá,
								<br />
								Nome cliente!
							</span>
						</div>
						<div className="relative flex">
							<button type="button">
								<img src={cart} alt="Seu carrinho" className="max-w-none" />
							</button>
							<div
								className="absolute flex items-center -right-1.5 -top-1 justify-center
												 h-4 w-4 bg-blue-600 rounded-full"
							>
								<p className="text-xs text-white font-bold">2</p>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full mt-4 px-4">
					<ul className="flex justify-between">
						<li className="flex whitespace-nowrap">
							<button
								type="button"
								onClick={() => setCategoriesOpened(!categoriesOpened)}
								className="font-bold flex gap-2 cursor-pointer"
							>
								<img src={menu} alt="hamburger" />
								Todas as Categorias
							</button>
						</li>
						{[...Array(5)].map((x) => (
							<li key={x}>
								<a href="/">Departamento</a>
							</li>
						))}
					</ul>
				</div>

				<div
					className={`${!categoriesOpened && "hidden"} flex h-96 w-full shadow-lg rounded-lg overflow-hidden`}
				>
					<div className="flex h-full w-64 p-5 bg-gray-300 overflow-hidden">
						<ul
							className="flex flex-1 flex-col pr-4 gap-3 overflow-auto
												[&::-webkit-scrollbar]:w-1.5
												[&::-webkit-scrollbar-track]:bg-transparent
												[&::-webkit-scrollbar-thumb]:rounded-full
											[&::-webkit-scrollbar-thumb]:bg-gray-500"
						>
							{[...Array(16)].map((x) => (
								<li
									key={x}
									className="w-full flex-1 flex justify-between items-center first:*:font-bold first:*:text-blue-600"
								>
									<a href="/" className="">
										Departamento
									</a>
									<svg
										width="5"
										height="9"
										viewBox="0 0 5 9"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										className="text-black"
									>
										<path
											d="M4.45948 5.03932L1.27979 8.27623C0.987123 8.57459 0.512778 8.57459 0.219501 8.27623C-0.0731669 7.97892 -0.0731669 7.49559 0.219501 7.1978L2.86978 4.49986L0.219501 1.80232C-0.0731669 1.50453 -0.0731669 1.02185 0.219501 0.723405C0.512778 0.425531 0.987123 0.425531 1.27979 0.723405L4.45948 3.96032C4.60614 4.10958 4.67943 4.3048 4.67943 4.50002C4.67943 4.69524 4.60614 4.89038 4.45948 5.03932Z"
											fill="currentColor"
										/>
									</svg>
								</li>
							))}
						</ul>
					</div>
					<div className="flex py-4 px-8 gap-20">
						{[...Array(3)].map((x) => (
							<ul key={x} className="*:first:text-blue-600 *:first:font-bold">
								{[...Array(8)].map((y) => (
									<li className="p-1.5 text-gray-500" key={y}>
										Categoria
									</li>
								))}
							</ul>
						))}
					</div>
					<div className="flex ml-auto">
						<div
							className="relative flex my-10 mr-10 rounded-2xl overflow-hidden
							bg-linear-to-r from-black/25 to-black/60"
						>
							<div
								className="flex w-60 
							bg-[url(/canecaMenu.png)] bg-[20%] bg-cover
							mix-blend-multiply"
							/>
							<div className="absolute p-10 pr-20">
								<p className="text-2xl text-white font-medium z-10">
									Confira os produtos{" "}
									<span className="font-bold">que acabaram de chegar</span>
								</p>
								<button
									type="button"
									className="cursor-pointer text-white border-white border rounded-lg py-2 px-4 mt-8"
								>
									Ver todos{" "}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
