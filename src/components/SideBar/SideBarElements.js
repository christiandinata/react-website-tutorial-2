import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
// import { FaTimes } from "react-icons/fa";

export const SideBarContainer = styled.aside`
	position: fixed;
	z-index: 99;
	width: 100%;
	height: 100%;
	background: #0d0d0d;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
	top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
	right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

// export const CloseIcon = styled(FaTimes)`
//   color: #fff;
// `;

export const CloseIcon = styled.div`
	color: #fff;
`;

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparant;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

export const SideBarWrapper = styled.div`
	color: #fff;
`;
export const SideBarMenu = styled.ul`
	// display: grid;
	// grid-template-columns : 1fr;
	// grid-template-rows: repeat(6, 80px);
	display: flex;
	flex-direction: column;
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat (6, 60px);
	}
`;

export const SideBarLink = styled(LinkS)`
	padding: 10px 0;
	margin: 10px 0;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: #fff;
	cursor: pointer;

	&:hover {
		color: #01bf71;
		text-decoration: none;
		transition: 0.2s ease-in-out;
	}
`;

export const SideBtnWrap = styled.div`
	display: flex;
	justify-content: center;
	padding: 55px 0;
	margin: 10px 0;
`;

export const SideBarRoute = styled(LinkR)`
	border-radius: 50px;
	background: #01bf71;
	white-space: nowrap;
	padding: 10px 40px;
	color: #010606;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: 0.2s all ease-in-out;
	text-decoration: none;

	&:hover {
		transition: 0.2s all ease-in-out;
		background: #fff;
		color: #010606;
	}
`;
