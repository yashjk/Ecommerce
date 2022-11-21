import React from "react";
import {
	Container,
	Img,
	Title,
	Info,
	Button,
} from "../utils/styledComponents/CategoryItem";

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Img src={item.img} />
			<Info>
				<Title>{item.title}</Title>
				<Button>SHOP NOW</Button>
			</Info>
		</Container>
	);
};

export default CategoryItem;
