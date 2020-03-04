import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    html, body, #root {
        min-height: 100%;
        height: auto;
    }

    #root {
        background: #fff;
    }

    ul {
        list-style: none;
    }

    button {
        border: 0;
        outline: none;
    }
`;
