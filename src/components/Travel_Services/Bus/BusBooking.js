// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 300px;
  padding: 8px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function BusBooking() {
    const [form, setForm] = useState({
        departure: '',
        destination: '',
        date: '',
        passengers: 1,
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(form);
    };

    return (
        <Container>
            <FormWrapper>
                <FormTitle>Bus Booking Form</FormTitle>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="departure">Departure City</Label>
                        <Select name="departure" id="departure" value={form.departure} onChange={handleChange} required>
                            <option value="">Select City</option>
                            <option value="Hydrabad">Hydrabad </option>
                            <option value="Bengulur">Bengulur</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Pune">Pune</option>
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="destination">Destination City</Label>
                        <Select name="destination" id="destination" value={form.destination} onChange={handleChange} required>
                            <option value="">Select City</option>
                            <option value="Hydrabad">Hydrabad</option>
                            <option value="Bengulur">Bengulur</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Pune">Pune</option>
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="date">Date of Travel</Label>
                        <Input type="date" name="date" id="date" value={form.date} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="passengers">Number of Passengers</Label>
                        <Input type="number" name="passengers" id="passengers" min="1" value={form.passengers} onChange={handleChange} required />
                    </FormGroup>
                    <Button type="submit">Book Now</Button>
                </form>
            </FormWrapper>
        </Container>
    );
}

export default BusBooking;
