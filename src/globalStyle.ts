import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray-100: #ECEDF3;
    --gray-300: #DFDFDF;

    --gray-900: #252B5C;

    --blue-200: #234F68
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, input, textarea, button {
	font-family: 'Roboto', sans-serif;
	font-size: 1rem;
}
`
