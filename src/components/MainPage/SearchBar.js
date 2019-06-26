import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  margin-left: 10%;
  width: 638px;
  padding-top: 7px;
`;

const Input = styled.input`
  padding: 5px 15% 5px 15%;
  border-radius: 2px;
  border: 1px solid #dfdcdc;
  background-color: #fafafa;
  width: 100px;
  text-align: center;
  color: grey;
  font-size: .8rem;
`;

const SearchBar = props => {
  return (
    <Header>
      <Input
        onChange={props.filterSearch}
        type="text"
        placeholder="&#128269; Search"
        name="search"
      /> 
    </Header>
  );
}

export default SearchBar;