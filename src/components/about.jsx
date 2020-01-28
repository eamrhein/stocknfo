import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import contains from '../util/helpers';

const CompanInfo = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding: 1rem;
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
const Tags = styled.div`
  display: flex;
`;
const Tag = styled.span`
  flex-direction: row;
  align-items: center;
  background-color: #7b1fa2;
  color: #e8c9f5;
  fill: purple;
  font-size: 10pt;
  font-weight: 700;
  margin: 0 12px 5px 0;
  padding: 8px;
  border-radius: 17px;
`;

const About = ({ stock }) => {
  const [expand, setExpand] = useState(false);
  const filterStock = (key) => {
    key = key.toLowerCase();
    if (contains(key, ['iex', 'time', 'description', 'price', 'change', 'symbol', 'logo'])) {
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
      <h1>About</h1>
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

      <h2>Investment Type</h2>
      {
        stock.tags ? (
          <Tags>
            {stock.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        ) : null
      }

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
