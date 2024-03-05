import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BASE_URL from "../libs/api";
import { Clinic, Patient } from "../libs/model";

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

const Button = styled.button`
  padding: 5px;
  margin-top: 10px;
`;

const PatientDashboard = () => {
  const [listClinics, setListClinics] = useState<Clinic[]>([]);
  const [listPatientByClinics, setListPatientByClinics] = useState<Patient[]>(
    []
  );

  const getListOfClinics = async () => {
    await fetch(`${BASE_URL}/clinics`).then(async (results) => {
      const clinics = await results.json();
      setListClinics(clinics);
    });
  };

  const getListOfPatientByClinics = async (value: string) => {
    await fetch(`${BASE_URL}/patients/${value}`).then(async (results) => {
      const patients = await results.json();
      setListPatientByClinics(patients);
    });
  };

  const onSubmit = async () => {
    const list = listPatientByClinics.sort((a: Patient, b: Patient) => {
      return a.first_name && b.first_name && a.first_name > b.first_name
        ? 1
        : a.first_name && b.first_name && b.first_name > a.first_name
        ? -1
        : 0;
    });
    setListPatientByClinics([...list]);
  };

  useEffect(() => {
    getListOfClinics();
  }, []);

  return (
    <Container>
      <TextField aria-label="title-select-clinic">Select a Clinic:</TextField>
      <Select
        test-id="select-clinic"
        name="select"
        onChange={(e) => getListOfPatientByClinics(e.target.value)}
      >
        {listClinics.map((clinic) => {
          return (
            <option key={clinic.id} value={clinic.id}>
              {clinic.name}
            </option>
          );
        })}
      </Select>
      <Button
        aria-label="submit-button"
        hidden={!listPatientByClinics.length}
        onClick={onSubmit}
      >
        Sort by First Name
      </Button>
      <table hidden={!listPatientByClinics.length}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {listPatientByClinics.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
                <td>{val.date_of_birth}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot />
      </table>
    </Container>
  );
};

export default PatientDashboard;
