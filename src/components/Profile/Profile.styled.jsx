import styled from 'styled-components';

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  & img {
    border-radius: 50%;
    background-color: #b2edec;
    width: 300px;
    height: 300px;
  }
  & .name {
    font-size: 48px;
    color: black;
    margin: 5px;
    text-align: center;
  }
  & .location,
  & .tag {
    font-size: 24px;
    color: #bbc4c4;
    margin: 5px;
    text-align: center;
  }
`;

const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  & li {
    font-size: 22px;
    width: 33%;
    background-color: #f2f7f7;
    & .label {
      display: block;
      text-align: center;
      margin: 5px;
      color: #bbc4c4;
    }
    & .quantity {
      display: block;
      text-align: center;
      font-weight: bold;
      margin: 5px;
    }
  }
`;

export { Description, Stats };
