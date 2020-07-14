import { css } from "styled-components";
import theme from "./theme";
const { colors, easing } = theme;

const mixins = {
	link: css`
		color: ${colors.accent};
		font-weight: bold;
		text-decoration: none;

		transition: ${easing};

		&:hover,
		&:active,
		&:focus {
			color: ${colors.grey};
			outline: 0;
		}
	`,

	niceList: css`
		margin: 0;
		padding: 0;
		list-style: none;

		li {
			position: relative;
			padding-left: 25px;
			padding-bottom: 10px;
			&:before {
				content: "🢒";
				position: absolute;
				left: 0;
				color: ${colors.accent};
			}
		}
	`,
};

export default mixins;
