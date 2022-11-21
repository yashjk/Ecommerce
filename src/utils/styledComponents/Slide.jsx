import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
`;

export const ImgContainer = styled.div`
	height: 100%;
	flex: 1;
`;

export const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;

export const Image = styled.img`
	height: 80%;
`;

export const Title = styled.h1`
	font-size: 70px;
`;
export const Desc = styled.p`
	margin: 10px 0;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`;
export const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
`;