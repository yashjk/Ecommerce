import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 60vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: #fcf5f5;
`;

export const Title = styled.h1`
	font-size: 70px;
	margin-bottom: 20px;
`;

export const Desc = styled.div`
	font-size: 24px;
	font-weight: 300;
	margin-bottom: 20px;
`;

export const InputContainer = styled.div`
	width: 50%;
	height: 40px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	border: 1px solid lightgray;
`;

export const Input = styled.input`
	border: none;
	flex: 8;
	padding-left: 20px;
`;

export const Button = styled.button`
	border: none;
	flex: 1;
	color: white;
	background-color: teal;
`;