interface MenuProps {
	title: string;
	image: string;
	onClick?: () => void;
	productType: CatalogItemProductType;
}

enum CatalogItemProductType {
	AppointmentsService = "APPOINTMENTS_SERVICE",
	Regular = "REGULAR",
}

function Menu1(props: MenuProps) {
	return (
		<div>
			<div
				className={`rounded-2xl relative w-full h-20 flex flex-row cursor-pointer overflow-hidden 
				${
					props.productType === CatalogItemProductType.AppointmentsService
						? "shadow-2xl"
						: ""
				}
			`}
				onClick={props.onClick}
			>
				<aside className="absolute w-full h-full">
					<img
						className="w-[150%] md:w-96 h-96 translate-y-[-50%] translate-x-[-10%] object-cover absolute z-10"
						src={props.image}
						alt={props.title}
					/>
					<p className="min-[500px]:px-6 text-base sm:text-lg px-1 absolute z-10 text-[#fff] sm:px-9 font-bold flex py-3">
						{props.title}
					</p>
				</aside>
			</div>
		</div>
	);
}

export default Menu1;
