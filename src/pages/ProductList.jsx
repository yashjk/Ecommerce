import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import {
	Container,
	Filter,
	FilterContainer,
	FilterText,
	Option,
	Select,
	Title,
} from "../utils/styledComponents/ProductList";

const ProductList = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Title>Dresses</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>
					<Select>
						<Option disabled selected>
							Color
						</Option>
						<Option>White</Option>
						<Option>Black</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Yellow</Option>
						<Option>Green</Option>
					</Select>
					<Select>
						<Option disabled selected>
							Size
						</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
					<Select>
						<Option disabled selected>
							Newest
						</Option>
						<Option>Price (asc)</Option>
						<Option>Price (dec)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products />
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductList;
