import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  NewsItem, Table, Tbody, Trow, Cell, Heading,
  Info, CompanInfo, Card, Tags, Tag, Desc, Text,
} from './styles';
import { contains } from '../util/helpers';


const News = ({ stock }) => (
  stock.news.map((stockItem) => (
    <NewsItem key={stockItem.url}>
      <a href={stockItem.url}>
        {stockItem.headline}
      </a>
    </NewsItem>
  ))
);

const renderDesc = (stock, expand) => {
  if (expand) {
    return (stock.description);
  }
  return (`${stock.description.slice(0, 350)}... `);
};

const TableComponent = ({ stock }) => {
  const filterStock = (key) => {
    const param = key.toLowerCase();
    if (contains(param, ['iex', 'time', 'description', 'price', 'change', 'symbol', 'logo', '52', 'market'])) {
      return false;
    }
    if (typeof stock[param] === 'number') {
      return true;
    }
    if (typeof stock[param] === 'string') {
      return true;
    }
    return false;
  };
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

TableComponent.defaultProps = {
  stock: {},
};
TableComponent.propTypes = {
  stock: PropTypes.shape({}),
};

const About = ({ stock }) => {
  const [expand, setExpand] = useState(false);
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
            {renderDesc(stock, expand)}
            <Text onClick={() => setExpand(!expand)}>
              {expand ? 'read less' : 'read more'}
            </Text>
          </Desc>
        )
          : null
        }
        <TableComponent stock={stock} />
      </Card>
      <Card>
        {stock.news ? (
          <div>
            <h1>News</h1>
            <ul>
              <News stock={stock} />
            </ul>
          </div>
        ) : (null)}
      </Card>
    </CompanInfo>
  );
};

About.defaultProps = {
  stock: {
  },
};
About.propTypes = {
  stock: PropTypes.shape({
    news: PropTypes.arrayOf(PropTypes.shape({})),
    tags: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
  }),
};
export default About;
