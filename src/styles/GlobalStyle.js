import { createGlobalStyle } from "styled-components";
import theme from "./theme";

import WebFont from "webfontloader";

const { colors, fonts, fontSizes } = theme;

WebFont.load({
	google: {
		families: ["Inter:400,700", "sans-serif"],
	},
});

const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
        width: 100%;
        font-size: ${fontSizes.base};
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;

        color: ${colors.dark};
        font-family: "Inter", sans-serif;
        font-weight: 400;

    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
        margin: 0 0 10px 0;
    }

    p {
        margin: 0 0 10px 0;
    }
`;

export default GlobalStyle;
