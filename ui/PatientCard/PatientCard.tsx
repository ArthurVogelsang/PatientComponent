import React from "react";
import Image from 'next/image'
import styled from "styled-components";
import { BsFillPlusCircleFill } from "react-icons/bs";
import moment from "moment";
import { TPatient } from "utils/types";

/* Patient Card Component */
function PatientCard({ item }: { item: TPatient }) {
  return (
    <PatientCardContainer data-testid="patient-card">
      {/* Avatar */}
      <PatientAvatar>
        <Image
          src={item.image}
          alt="avatar"
          layout="fill"
        />
      </PatientAvatar>
      <PatientInfo>
        {/* Time */}
        <CardDate>{moment(item.date * 1000).fromNow()}</CardDate>
        {/* Date */}
        <CardName>{item.name}</CardName>
      </PatientInfo>
      <BsFillPlusCircleFill size={24} color="#fff" />
    </PatientCardContainer>
  );
}

export default PatientCard;

const PatientCardContainer = styled.div`
  width: 100%;
  height: 62px;
  border-radius: 10px;
  background-color: #2d629a;
  padding: 6px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;
const PatientAvatar = styled.div`
  position: relative;
  min-width: 50px;
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
const PatientInfo = styled.div`
  margin-left: 26px;
  margin-right: auto;
  color: #fff;
`;
const CardDate = styled.div`
  font-size: 16px;
  margin-bottom: 4px;
`;
const CardName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
