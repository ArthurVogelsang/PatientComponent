import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <SearchInputContainer>
      <SearchIcon />
      <Search
        placeholder="Search for patients, and more"
        value={value}
        onChange={onChange}
      />
    </SearchInputContainer>
  );
}

export default SearchInput;

const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 19px;
`;
const Search = styled.input`
  width: 100%;
  height: 38px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 8px #00000029;
  border-radius: 15px;
  opacity: 1;
  border: unset;
  padding-left: 58px;
  &:focus-visible {
    outline: none;
  }
`;
const SearchIcon = styled(BsSearch)`
  position: absolute;
  left: 20px;
`;
