import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: center;
  max-width: 600rem;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 100%;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  padding: 8px;
  border: none;
  background-color: #0080ff;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  width: 100%;
`;
