import avanti from "@assets/avanti.svg";
import FlashSale from "./FlashSale";
import TextField from "../TextField";
import person from "@assets/icons/person.svg";
import cart from "@assets/icons/cart.svg";

const Header = () => {
	return (
		<header className="bg-white">
			<FlashSale />
			<div className="w-dvw container mx-auto flex items-center justify-around p-4">
				<div className="flex gap-10 items-center justify-center">
					<a href="/">
						<img src={avanti} alt="Avanti Logo" className="h-7 max-w-none" />
					</a>
					<div className="searchbar w-full">
						<TextField
							placeholder="Digite aqui o que você procura"
							className="w-full min-w-lg"
							variant="outlined"
							search
						/>
					</div>
				</div>
				<div className="flex items-center gap-6">
					<div className="greetings flex items-center justify-center gap-2">
						<img src={person} alt="Ícone de perfil" className="h-6" />
						<span className="text-sm font-semibold leading-none">
							Olá,
							<br />
							Nome cliente!
						</span>
					</div>
					<div className="relative flex">
						<button type="button">
							<img src={cart} alt="Seu carrinho" />
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
		</header>
	);
};

export default Header;
