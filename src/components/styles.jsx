import styled from 'styled-components';

const CompanInfo = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media(max-width: 1200px) {
    flex-direction: column;
  }
`;
const Table = styled.div`
  display: table;
`;
const Tbody = styled.div`
  display: table-row-group;
`;
const Trow = styled.div`
  display: table-row;
`;
const Cell = styled.div`
  display: table-cell;
  padding: 0.25rem;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;
const Heading = styled.div`
  text-transform: capitalize;
  font-weight: bold;
  padding-bottom: 10px;
`;
const Text = styled.span`
  cursor: pointer;
  color: #7b1fa2;
  font-weight: 600;
`;
const Info = styled.div`
  font-weight: light;
`;
const Desc = styled.p`
  text-indent: 25px;
  line-height: 1.5;
  font-size: 10pt;
`;
const Card = styled.div`
  line-height: 2;
  padding: 1rem;
  min-width: 30vw;
  h1 {
    text-align: center;
  }
  a {
    text-decoration:none;
    color: ${(props) => props.theme.colors.font}
  }
`;
const Tag = styled.span`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.colors.third};
  color: ${(props) => props.theme.colors.font};
  fill: purple;
  font-size: 10pt;
  font-weight: 700;
  margin: 0 12px 5px 0;
  padding: 8px;
  :hover {
    background-color: darkred;
  }
`;

const Tags = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
`;
const NewsItem = styled.li`
  list-style-type: circle;
  transition: 0.5s;
  a {
    padding: 0.25rem;
  }
  a:hover {
    background-color: ${(props) => props.theme.colors.card};
    color: ${(props) => props.theme.colors.sixth};
    font-weight: normal;
  }
`;
// styles
const StockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  bottom: 5vw;
`;
const ToolWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.navbar};
  padding: 0.5rem;
  strong {
    font-weight: bolder;
  }
`;
const ChartWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.card};
  padding: 1rem;
  margin: 1rem;
`;
const CompanyName = styled.h1`
  text-align: center;
  line-height: 42px;
  font-size: 36px;
  font-weight: 500;
`;
const Price = styled.h2`
  font-size: 36px;
  font-weight: 400;
  line-height: 42px;
  margin-left: 1rem;
`;
const ChangeStyle = styled.div`
  margin-left: 1rem;
`;
const RangeGroup = styled.div`
  cursor: pointer;
  display: flex;
  font-weight: 600;
  margin-left: 1rem;
  #active {
    color: #B15DFF;
  }
`;
const RangeBtn = styled.div`
  font-size: 0.8rem;
  margin: 0rem 0.25rem;
`;
const Img = styled.img`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  max-width: 40px;
  width: 100%;
  height: auto;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
  border-radius: 5px;
  background-color: #FAFAFA;
  color: #cbcbcb;
  border: 1px solid black;
  padding: 0 24px 0 3px;
  width: 100%;
  input {
    width: 100%;
    color: #cbcbcb;
    border: none;
    height: 36px;
    transition: color 150ms ease-out;
  }
  .fa-search {
    font-size: 14pt;
    color: #444444;
  }
`;
const Results = styled.div`
  z-index: 20;
  display: table;
  width: 90vw;
  padding: 10px;
  position: absolute;
  left: 4vw;
  top: 55px;
  right: 1vw;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.navbar};
  .active {
    background-color: ${(props) => props.theme.colors.navbar};
    color: ${(props) => props.theme.colors.primary};
  }
`;
const Result = styled.div`
  background-color: ${(props) => props.theme.colors.card};
  display: table-row;
  cursor: pointer;
  margin: 1px;
  line-height: 1.5;
`;
const SearchHeading = styled.div`
  display: table-row;
  margin: 1px;
`;
const Symbol = styled.span`
  padding-right: 3rem;
  display: table-cell;
  font-weight: bolder;
`;

const Label = styled.div`
  padding: 1px;
  font-size: 10pt;
  color: grey;
  font-weight: bolder;
  display: table-cell;
`;
const Name = styled.span`
  display: table-cell;
`;
export {
  NewsItem,
  Tag,
  Card,
  Tags,
  Desc,
  Info,
  Text,
  Heading,
  Cell,
  Trow,
  Tbody,
  Table,
  CompanInfo,
  StockWrapper,
  ToolWrapper,
  ChartWrapper,
  CompanyName,
  Price,
  ChangeStyle,
  RangeBtn,
  Img,
  Search,
  Name,
  Label,
  Symbol,
  SearchHeading,
  Result,
  Results,
  RangeGroup,
};
