import PatientCard from "components/PatientCard";
import SearchInput from "components/SearchInput";
import React, { useState } from "react";
import moment from "moment";
import Fuse from "fuse.js";
import styled from "styled-components";
import list from "./list.json";
import { groupBy } from "./util";
import { TPatient } from "utils/types";

/* Patients List Component */
function PatientsList() {
  const [query, setQuery] = useState("");

  /* Fuse Search */
  const fuse = new Fuse(list, {
    keys: [{ name: "name", weight: 1 }],
    threshold: 0.1,
    includeScore: true,
  });

  const results = fuse.search(query);
  /* Group by date */
  const searchResults = groupBy(
    query ? results.map((result: { item: TPatient }) => result.item) : list,
    "date"
  );

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <>
      <PageHeader />
      <PatientsListBody>
        <SearchInput value={query} onChange={onSearch} />
        {Object.keys(searchResults).map((_date: string, _i) =>
          searchResults[_date] && searchResults[_date].length > 0 ? (
            <Block key={_i}>
              {/* Group Date */}
              <GroupTitle>
                {moment(parseInt(_date) * 1000)
                  .utc()
                  .format("MMMM DD")}
              </GroupTitle>
              {/* Patient Cards */}
              {searchResults[_date].map((_item: TPatient, _j: number) => (
                <PatientCard key={_j} item={_item} />
              ))}
            </Block>
          ) : (
            <div key={_i} />
          )
        )}
      </PatientsListBody>
    </>
  );
}

export default PatientsList;

const Block = styled.div`
  margin-bottom: 25px;
`;
const PatientsListBody = styled.div`
  position: relative;
  top: -19px;
  max-width: 428px;
  padding: 0px 17px;
  margin: 0 auto;
`;
const PageHeader = styled.div`
  width: 100%;
  height: 126px;
  background-image: linear-gradient(78deg, #2d629a 0%, #0ba9c6 100%);
`;
const GroupTitle = styled.p`
  font-size: 23px;
  letter-spacing: 0px;
  color: #2d629a;
  margin-bottom: 0;
`;
