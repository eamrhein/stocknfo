import styled from 'styled-components';

const theme = {
  colors: {
    navbar: '#27272f',
    background: '#33333D',
    card: '#373740',
    font: '#FFFFFF',
    primary: '#1EB980',
    secondary: '#045D56',
    third: '#FF6859',
    fourth: '#FFCCF44',
    fifth: '#B15DFF',
    sixth: '#72DEFF',
  },
};

const BaseStyle = styled.div`
  
  background-color: ${(props) => (props.theme.colors.background)};
  color: ${(props) => props.theme.colors.font};
  p {
    font-family: 'Eczar',
    font-size: 12pt;
    font-weight: 'light'
  }
  h1 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 34pt;
    font-weight: light;
  }
  h2 {
    font-family: 'Eczar'
    font-size: 24pt;
    font-weight: bold;
  }
  h3 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20pt;
    font-weight: regular;
  }
`;

export { BaseStyle, theme };
