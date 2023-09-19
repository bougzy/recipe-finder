// src/components/RecipeFinder.js

import "./Recipe.css"

import  { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function RecipeFinder() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleInputChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleSearch = () => {
    // In a real app, you would make an API request here to fetch recipes
    // based on the ingredients provided.

    // For this example, we simulate fetching some sample recipes.
    // Replace this with your actual API integration.
    const sampleRecipes = [
      { id: 1, title: 'Recipe 1', ingredients: ['Ingredient A', 'Ingredient B'], instructions: 'Step 1, Step 2' },
      { id: 2, title: 'Recipe 2', ingredients: ['Ingredient C', 'Ingredient D'], instructions: 'Step 1, Step 2' },
    ];

    setRecipes(sampleRecipes);
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter ingredients (e.g., chicken, broccoli)"
              value={ingredients}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSearch}>
            Search Recipes
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        {recipes.map((recipe) => (
          <Col key={recipe.id} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Ingredients:</Card.Subtitle>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <Card.Subtitle className="mb-2 text-muted">Instructions:</Card.Subtitle>
                <p>{recipe.instructions}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RecipeFinder;
