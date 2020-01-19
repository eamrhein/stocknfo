import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CompanInfo = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Cell = styled.td`
  padding: 1rem;
`;
const Heading = styled.div`
  font-weight: 800;
  padding-bottom: 10px;
`;
const Title = styled.h1`
  font-size: 30pt;
  margin: 0.5rem;
`;
const Title2 = styled.h2`
  font-size: 20pt;
  margin: 0.5rem;
`;
const Text = styled.span`
  cursor: pointer;
  color: #7b1fa2;
  font-weight: 600;
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
  const { company } = stock;
  const [expand, setExpand] = useState(false);
  return (
    <CompanInfo>
      <Title>About</Title>
      <Desc>
        {expand
          ? company.description
          : `${company.description.slice(0, 350)}... `}
        <Text onClick={() => setExpand(!expand)}>
          {expand ? 'read less' : 'read more'}
        </Text>
      </Desc>
      <table>
        <tbody>
          <tr>
            <Cell>
              <Heading>CEO</Heading>
              <div>{company.CEO || 'n/a'}</div>
            </Cell>
            <Cell>
              <Heading>Employees</Heading>
              <div>{company.employees || 'n/a'}</div>
            </Cell>
            <Cell>
              <Heading>Location</Heading>
              <div>{`${company.city}, ${company.state}` || 'n/a'}</div>
            </Cell>
            <Cell>
              <Heading>Website</Heading>
              <div>
                <a href={company.website}>{company.website}</a>
              </div>
            </Cell>
          </tr>
          <tr>
            <Cell>
              <Heading>Market Cap</Heading>
              <div>{stock.marketCap || 'n/a'}</div>
            </Cell>
            <Cell>
              <Heading>Price-Earnings Ratio</Heading>
              <div>{stock.peRatio || 'n/a'}</div>
            </Cell>
            <Cell>
              <Heading>Dividend Yield</Heading>
              <div>{stock.dividendYield || 'n/a'}</div>
            </Cell>
            <Cell>
              <Heading>Volume</Heading>
              <div>{stock.volume || 'n/a'}</div>
            </Cell>
          </tr>
        </tbody>
      </table>
      <Title2>Investment Type</Title2>
      <Tags>
        {company.tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
    </CompanInfo>
  );
};

About.defaultProps = {
  stock: {
    company: {},
  },
};
About.propTypes = {
  stock: {
    company: {
      CEO: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      employees: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
    },
  },
};
export default About;
