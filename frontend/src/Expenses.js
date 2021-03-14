import React, { useState, useEffect } from "react";
import { AppNav } from "./AppNav";
import DatePicker from "react-datepicker";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Form, FormGroup, Button, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

export const Expenses = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [expense, setExpense] = useState([
    {
      description: "",
      expenseDate: new Date(),
      id: 104,
      expenseLocation: "",
      expenseCategory: { id: 1, name: "Travel" },
    },
  ]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/categories");
      const body = await response.json();

      setCategories(body);
    }
    fetchData();
  }, []);
  const handleSubmit = async (event) => {
    await fetch("/api/expenses", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        setExpense({
          description: title,
          expenseDate: startDate,
          id: 104,
          expenseLocation: location,
          expenseCategory: category,
        })
      ),
    });

    event.preventDefault();
  };
  let optionList = categories.map((c) => (
    <option value={c.name} key={c.id}>
      {c.name}
    </option>
  ));
  return (
    <div>
      <AppNav />
      <Container>
        <h3>Add Expense</h3>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
            <Label for="category">Category</Label>
            <select onChange={(e) => setCategory(e.currentTarget.value)}>
              {optionList}
            </select>
          </FormGroup>

          <FormGroup>
            <Label for="expenseDate">Date</Label>

            <DatePicker
              id="startDate"
              name="startDate"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              selectsEnd
            />
          </FormGroup>

          <FormGroup>
            <Label for="location">Location</Label>
            <Input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.currentTarget.value)}
            />
          </FormGroup>

          <FormGroup className="align-middle">
            <Button color="primary" type="submit" onSubmit={handleSubmit}>
              Save
            </Button>{" "}
            <Button color="secondary" tag={Link} to="/categories">
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};
