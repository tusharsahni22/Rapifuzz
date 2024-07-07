import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #dfa4a4;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


const Input = styled.input`
  padding: 10px;
  border: 1px solid #ff69b4;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ff69b4;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #ff69b4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  color: red;
`;

// Sample data for countries, states, and cities
const countryStatesMap = {
  USA: ['California', 'New York'],
  India: ['Delhi', 'Maharashtra'],
};

const stateCitiesMap = {
  California: ['Los Angeles', 'San Francisco'],
  "New York": ['New York City', 'Buffalo'],
  Delhi: ['New Delhi', 'Delhi'],
  Maharashtra: ['Mumbai', 'Pune'],
};

const SignupForm = () => {
  const navigate = useNavigate();

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState('');
    setSelectedCity('');
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    // Handle form submission here
    console.log({ username, email, password, selectedCountry, selectedState, selectedCity });
    navigate('/login');
  };

  const validateForm = () => {
    let formIsValid = true;
    const errors = {};

    if (!username) {
      formIsValid = false;
      errors.username = 'Username is required';
    }

    if (!email) {
      formIsValid = false;
      errors.email = 'Email is required';
    }

    if (!password) {
      formIsValid = false;
      errors.password = 'Password is required';
    }

    if (!selectedCountry) {
      formIsValid = false;
      errors.selectedCountry = 'Country is required';
    }

    if (!selectedState) {
      formIsValid = false;
      errors.selectedState = 'State is required';
    }

    if (!selectedCity) {
      formIsValid = false;
      errors.selectedCity = 'City is required';
    }

    if (!address) {
      formIsValid = false;
      errors.address = 'Address is required';
    }

    if (!phone) {
      formIsValid = false;
      errors.phone = 'Phone is required';
    }

    setErrors(errors);
    return formIsValid;
  };

  return (
    <Wrapper>
    <Form onSubmit={handleSubmit}>
      {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
      <Input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      <Input
        placeholder="Email"
        value={email}
        type='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.selectedCountry && <ErrorMessage>{errors.selectedCountry}</ErrorMessage>}
      <Select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {Object.keys(countryStatesMap).map((country) => (
          <option key={country} value={country}>{country}</option>
        ))}
      </Select>
      {errors.selectedState && <ErrorMessage>{errors.selectedState}</ErrorMessage>}
      <Select value={selectedState} onChange={handleStateChange} disabled={!selectedCountry}>
        <option value="">Select State</option>
        {selectedCountry && countryStatesMap[selectedCountry].map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </Select>
      {errors.selectedCity && <ErrorMessage>{errors.selectedCity}</ErrorMessage>}
      <Select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} disabled={!selectedState}>
        <option value="">Select City</option>
        {selectedState && stateCitiesMap[selectedState].map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </Select>
      {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
      <Input
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
      <Input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Button type="submit">Sign Up</Button>
    </Form>
    </Wrapper>
  );
};

export default SignupForm;