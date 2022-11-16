import React from "react";
import {
	Container,
	Desc,
	Image,
	ImgContainer,
	InfoContainer,
	Title,
	Button,
} from "./utils/styledComponents/Slide";

const Slide = ({sliderItem}) => {
	return (
		<Container>
			<ImgContainer>
				<Image src={sliderItem.img}></Image>
			</ImgContainer>
			<InfoContainer>
				<Title>{sliderItem.title}</Title>
				<Desc>{sliderItem.desc} </Desc>
				<Button>SHOP NOW</Button>
			</InfoContainer>
		</Container>
	);
};

export default Slide;
