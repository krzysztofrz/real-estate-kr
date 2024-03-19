import "./map.scss";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/pin.jsx";

const Map = ({ items }) => {
	return (
		<MapContainer
			center={[52.2493, 21.01406]}
			zoom={12}
			// zoom={13}
			scrollWheelZoom={true}
			className="map"
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{items.map((item) => (
				<Pin key={item.id} {...item} item={item} />
			))}
		</MapContainer>
	);
};

export default Map;
