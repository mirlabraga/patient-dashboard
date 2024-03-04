import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BASE_URL from "../libs/api";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TextField = styled.h3`
  width: 300px;
  padding: 2px;
`;

const Select = styled.select`
  width: 300px;
  padding: 2px;
`;

export class Clinic {
  id: number | undefined;
  name: string | undefined;
}

const PatientDashboard = () => {
  const [listClinics, setListClinics] = useState<Clinic[]>([]);

  const getListOfTaks = async () => {
    await fetch(`${BASE_URL}/clinics`).then(async (results) => {
      const clinics = await results.json();
      setListClinics(clinics);
    });
  };

  useEffect(() => {
    getListOfTaks();
  }, []);

  return (
    <Container>
       <TextField
        aria-label="title-select-clinic"
      >Select a Clinic:</TextField>
      <Select test-id="select-clinic" name="select">
        {listClinics.map((clinic) => {
          return (
            <option key={clinic.id} value={clinic.id}>
              {clinic.name}
            </option>
          );
        })}
      </Select>
    </Container>
  );
};

export default PatientDashboard;
