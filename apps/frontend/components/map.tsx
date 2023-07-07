type Props = {
	ubicationUrl: string;
	width?: string;
	height?: string;
};

const Map = ({ ubicationUrl, width = "100%", height = "350" }: Props) => {
	return (
		<iframe
			className="rounded-xl overflow-hidden"
			src={ubicationUrl}
			width={width}
			height={height}
			style={{ border: 0 }}
			// allowfullscreen=" allowfullscreen"
			loading="lazy"
			// referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	);
};

export default Map;
