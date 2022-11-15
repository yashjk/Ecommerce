import styled from "styled-components";

export const Container = styled.div`
	flex: 1;
	margin: 3px;
	height: 70vh;
	position: relative;
`;
export const Img = styled.img`
	width: 100%;
	height: 100vh;
	object-fit: cover;
`;
export const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
export const Title = styled.h1`
	color: white;
	margin-bottom: 20px;
`;
export const Button = styled.button`
	background-color: white;
	padding: 10px;
	border: none;
	color: gray;
	cursor: pointer;
	font-weight: 600;
`;
