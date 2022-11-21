import React from "react";

import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Room,
	Telegram,
	Twitter,
} from "@material-ui/icons";

import {
	Center,
	ContactItem,
	Container,
	Desc,
	Left,
	List,
	ListItem,
	Logo,
	Payment,
	Right,
	SocialContainer,
	SocialIcon,
	Title,
} from "../styledComponents/Footer";

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>SPODER.</Logo>
				<Desc>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Exercitationem cupiditate harum nostrum ea optio quod dignissimos,
					reiciendis magnam aliquam error dolore a molestiae nulla sequi commodi
					maxime quidem corrupti labore.
				</Desc>
				<SocialContainer>
					<SocialIcon color="3b5998">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="00acee">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="bc2a8d">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="0088cc">
						<Telegram />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Men's Fashion</ListItem>
					<ListItem>Women's Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{marginRight: "10px"}}/>
					London N1 9AP, United Kingdom
				</ContactItem>
				<ContactItem>
					<Phone style={{marginRight: "10px"}}/>
					+44 20 7833 1137
				</ContactItem>
				<ContactItem>
					<MailOutline style={{marginRight: "10px"}}/>
					contact@spoder.dev
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;
