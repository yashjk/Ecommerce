import React from "react";
import { Circle, Container, Info, Image, Icon } from "./utils/styledComponents/Product";
import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from "@material-ui/icons";

const Product = ({ productItem }) => {
	return (
		<Container>
			<Circle />
			<Image src={productItem.img} />
			<Info>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>
				<Icon>
					<SearchOutlined />
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
