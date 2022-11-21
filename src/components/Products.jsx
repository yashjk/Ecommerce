import React from "react";
import { Container } from "../styledComponents/Products";
import { popularProducts } from "../data";
import Product from "./Product";

const Products = () => {
	return (
		<Container>
			{popularProducts.map((productItem) => (
				<Product productItem={productItem} key={productItem.id} />
			))}
		</Container>
	);
};

export default Products;
