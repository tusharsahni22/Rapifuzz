import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Reuse the styled components from Signup
const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #ff69b4;
  color: white;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  color: red;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`;
const Title = styled.h1`
    color: #ff69b4;
    margin-bottom: 20px;
`;

const ResetPaasword = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const formIsValid = true;
    const errors = {};
       
    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      navigate('/login'); // Adjust the navigation path as needed
      // Perform login logic here
    }
  };

  return (
    <Wrapper>
    <Title>Reset Password</Title>
    <Container>
      <Form onSubmit={handleSubmit}>
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
    </Wrapper>
  );
};

export default ResetPaasword;