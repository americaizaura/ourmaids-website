import Appbar from "../components/header";
import FooterSection from "../components/footer";

export default function Layout({ children }) {
	return (
		<div className="flex flex-col h-screen">
			<Appbar />
			<main className="grow">{children}</main>
			<FooterSection />
		</div>
	);
}
