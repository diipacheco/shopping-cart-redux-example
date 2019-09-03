import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

   *{
     padding: 0;
     outline: 0;
     margin: 0;
     box-sizing: border-box
   }

   body{
     font-family: 'Roboto', sans-serif;
     color: #FFF;
     background: #353535;
     font-size: 16px;
     -webkit-font-smoothing: antialiased;

   }

   html, body, #root{
     height: 100%;
   }
`;
