import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import contains from '../util/helpers';

const CompanInfo = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media(max-width: 1000px) {
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
  max-width: 40vw;
`;
const Tags = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
`;
const Card = styled.div`
  line-height: 2;
  padding: 1rem;
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
`;

const About = ({ stock }) => {
  const [expand, setExpand] = useState(false);
  const filterStock = (key) => {
    key = key.toLowerCase();
    if (contains(key, ['iex', 'time', 'description', 'price', 'change', 'symbol', 'logo', '52', 'market'])) {
      return false;
    }
    if (typeof stock[key] === 'number') {
      return true;
    }
    if (typeof stock[key] === 'string') {
      return true;
    }
    return false;
  };

  const renderDesc = () => {
    if (expand) {
      return (stock.description);
    }
    return (`${stock.description.slice(0, 350)}... `);
  };
  const renderNews = () => {
    const news = stock.news.map((stock) => <li key={stock.url}><a href={stock.url}>{stock.headline}</a></li>);
    return news;
  };
  const renderTable = () => {
    const stockList = Object.keys(stock).filter(filterStock);
    let tableRow = [];
    const table = [];
    stockList.forEach((sym, i) => {
      if (i % 4 === 0 && i !== 0) {
        table.push(tableRow);
        tableRow = [];
      }
      tableRow.push([
        sym, stock[sym],
      ]);
    });
    table.push(tableRow);
    return (
      <Table>
        <Tbody>
          {table.map((row) => (
            <Trow key={Math.random()}>
              {row.map((info) => (
                <Cell key={info[0]}>
                  <Heading>{info[0]}</Heading>
                  <Info>{info[1]}</Info>
                </Cell>
              ))}
            </Trow>
          ))}
        </Tbody>
      </Table>
    );
  };
  return (
    <CompanInfo>
      <Card>
        <h1>About</h1>
        {
        stock.tags ? (
          <Tags>
            {stock.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        ) : null
      }
        {
        stock.description ? (
          <Desc>
            {renderDesc()}
            <Text onClick={() => setExpand(!expand)}>
              {expand ? 'read less' : 'read more'}
            </Text>
          </Desc>
        )
          : null
        }
        {renderTable()}
      </Card>
      <Card>
        {stock.news ? (
          <div>
            <h1>News</h1>
            {renderNews()}
          </div>
        ) : (null)}
      </Card>
    </CompanInfo>
  );
};

About.defaultProps = {
  stock: {},
};
About.propTypes = {
  stock: PropTypes.shape({
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
};
export default About;
