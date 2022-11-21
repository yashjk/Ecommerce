import React from "react";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { Container } from "../utils/styledComponents/Categories";

const Categories = () => {
	return (
		<Container>
			{categories.map((category) => (
				<CategoryItem item={category} key={category.id} />
			))}
		</Container>
	);
};

export default Categories;
