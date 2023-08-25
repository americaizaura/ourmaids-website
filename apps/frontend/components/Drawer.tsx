import { useState } from "react";
import Link from "next/link";

function Drawer() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative">
			<button className="p-2" onClick={toggleDrawer} aria-label="Open Drawer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="w-6 h-6 text-gray-500"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>

			{isOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50">
					<div className="w-64 bg-white h-full shadow-lg">
						<div className="flex justify-end">
							<button className="p-2" onClick={toggleDrawer} aria-label="Close">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="w-4 h-4 text-gray-500"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="py-4 px-6">
							<ul className="space-y-4">
								<li>
									<Link href="/">
										<div className="text-gray-700 transition-colors duration-200 hover:text-gray-900">
											Home
										</div>
									</Link>
								</li>
								<li>
									<Link href="/about">
										<div className="text-gray-700 transition-colors duration-200 hover:text-gray-900">
											About
										</div>
									</Link>
								</li>
								<li>
									<Link href="/contact">
										<div className="text-gray-700 transition-colors duration-200 hover:text-gray-900">
											Contact
										</div>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Drawer;
