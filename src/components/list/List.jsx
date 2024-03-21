import "./list.scss";
import { listData } from "../../lib/dumydata.ts";
import Card from "../card/Card";

const List = () => {
	return (
		<div className="list">
			{listData.map((item) => (
				<Card key={item.id} item={item} />
			))}
		</div>
	);
};
export default List;
