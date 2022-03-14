import fontsStyles from './fonts.styles';

const getGlobalStyles = () => `
    ${fontsStyles}
    html {
      height: 100%;
      overflow-x: hidden;
    }

   html,
   body {
     position: relative;
   }

   body {
     font-family: 'SourceSansProRegular', sans-serif;
     min-height: 100%;
   }

  * {
    vertical-align: baseline;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
    border: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

export default getGlobalStyles;
