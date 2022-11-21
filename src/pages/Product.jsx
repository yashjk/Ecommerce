import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { Add, Remove } from "@material-ui/icons";
import {
	Amount,
	AmountContainer,
	Button,
	Container,
	Desc,
	Filter,
	FilterColor,
	FilterContainer,
	FilterSize,
	FilterSizeOption,
	FilterTitle,
	Image,
	ImageContainer,
	InfoContainer,
	Price,
	Title,
	TotalItemContainer,
	Wrapper,
} from "../utils/styledComponents/ProductPage";

const Product = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImageContainer>
					<Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
				</ImageContainer>
				<InfoContainer>
					<Title>Denim Jumpsuit</Title>
					<Desc>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
						autem ullam iste nihil, facilis inventore voluptatem, fugiat
						sapiente dolor amet aliquam aut dolorum? Eos nihil adipisci labore
						possimus commodi aut.
					</Desc>
					<Price>$ 20</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color="black" />
							<FilterColor color="darkblue" />
							<FilterColor color="gray" />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<TotalItemContainer>
						<AmountContainer>
							<Remove />
							<Amount>1</Amount>
							<Add />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</TotalItemContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
