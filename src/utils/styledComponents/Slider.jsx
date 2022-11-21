import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	width: 100vw;
	display: flex;
	position: relative;
	overflow: hidden;
`;

export const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff7f7;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	cursor: pointer;
	opacity: 0.5;
	z-index: 2;
`;

export const Wrapper = styled.div`
	display: flex;
	height: 100%;
	transition: all 1.5s ease;
	transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;
