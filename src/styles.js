import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";

const Styles = () => injectGlobal`
  ${styledNormalize}

  *{
    box-sizing:border-box;
  }

  body{
    font-family:sans-serif;
    line-height:1.5;
  }
`;

export default Styles;
