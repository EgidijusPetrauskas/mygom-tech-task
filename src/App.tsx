import React from 'react';

import styled from 'styled-components';

import Dropdown from './components/Dropdown';

const options = [
  {
    id: '1',
    title: 'Red Bull',
  },
  {
    id: '2',
    title: 'Ferrari',
  },
  {
    id: '3',
    title: 'Mercedes',
  },
  {
    id: '4',
    title: 'Alpine',
  },
  {
    id: '5',
    title: 'McLaren',
  },
  {
    id: '6',
    title: 'Haas',
  },
  {
    id: '7',
    title: 'Williams',
  },
  {
    id: '8',
    title: 'Aston Martin',
  },
  {
    id: '9',
    title: 'Alfa Romeo',
  },
  {
    id: '10',
    title: 'Alpha Tauri',
  },
];

const Heading = styled.h1`
  font-size: 26px;
  color: #ffffffc5;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
  background: linear-gradient(to right, #355c7d, #6c5b7b, #c06c84);
`;

const onSelect = (title: string) => {
  alert(title);
};

const App: React.FC = () => (
  <Container>
    <Heading>Pick Your F1 Team</Heading>
    <Dropdown
      options={options}
      background="#6c5b7b"
      borderColor="#ffffff9f"
      selectColor="#18191a"
      color="#ebecde"
      // width={300}
      height={40}
      onSelect={onSelect}
    />
  </Container>
);

export default App;
