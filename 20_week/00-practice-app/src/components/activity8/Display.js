import React from 'react';
import Card from './Card';

const canine = {
  name: 'Spot',
  description: 'The best boy',
  id: 1,
};

// TODO: Write logic that will render a Card component for the dog
// TODO: Pass `name`, `description`, and `id` to the Card component as props
export default function Display() {
  return (
    <div>
        <p>activity 8</p>
        <Card name={canine.name} description={canine.description} id={canine.id} />
        <hr />
    </div>
  );
}
