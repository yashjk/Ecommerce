import { Add, Remove } from "@material-ui/icons";
import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
	AmountContainer,
	Bottom,
	Button,
	Container,
	Details,
	Hr,
	Image,
	Info,
	Price,
	PriceDetails,
	Product,
	ProductAmount,
	ProductColor,
	ProductId,
	ProductInfo,
	ProductName,
	ProductSize,
	Summary,
	SummaryItem,
	SummaryItemPrice,
	SummaryItemText,
	SummaryTitle,
	Title,
	Top,
	TopButton,
	TopText,
	TopTexts,
	Wrapper,
} from "../utils/styledComponents/Cart";

const Cart = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title>YOUR BAG</Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTexts>
						<TopText>Shopping Bag (2)</TopText>
						<TopText>Your Wishlist</TopText>
					</TopTexts>
					<TopButton type="filled">CHECKOUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductInfo>
								<Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"></Image>
								<Details>
									<ProductName>
										<b>Product:</b> JESSIE THUNDER SHOES
									</ProductName>
									<ProductId>
										<b>ID:</b> 92344347712
									</ProductId>
									<ProductColor color="black" />
									<ProductSize>
										<b>Size:</b> 37.5
									</ProductSize>
								</Details>
							</ProductInfo>
							<PriceDetails>
								<AmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</AmountContainer>
								<Price>$ 30</Price>
							</PriceDetails>
						</Product>
						<Hr />
						<Product>
							<ProductInfo>
								<Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"></Image>
								<Details>
									<ProductName>
										<b>Product:</b> JESSIE THUNDER SHOES
									</ProductName>
									<ProductId>
										<b>ID:</b> 92344347712
									</ProductId>
									<ProductColor color="black" />
									<ProductSize>
										<b>Size:</b> 37.5
									</ProductSize>
								</Details>
							</ProductInfo>
							<PriceDetails>
								<AmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</AmountContainer>
								<Price>$ 30</Price>
							</PriceDetails>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ 80</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice>$5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ -5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>$ 80 </SummaryItemPrice>
						</SummaryItem>
						<Button>CHECKOUT NOW</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;
