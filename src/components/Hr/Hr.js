import React from 'react';
import styled from 'styled-components';

const StyledHr = styled.hr`
  border: 0;
  height: 1px;
  margin: 5px auto 20px auto;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.001),
    white,
    rgba(255, 255, 255, 0.001)
  );
  width: 50%;
`;

const Hr = () => <StyledHr />;

export default Hr;
