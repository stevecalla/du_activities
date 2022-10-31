import React from 'react';

function ListTen(props) {
  return (
    <ul className="list-group">
      <p>activity 10</p>

      {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
      
      {props.groceries
        .filter(element => element.purchased === false)
        .map((item) => {
          return (
            // TODO: Your code here
            <li className="list-group-item" key={item.id}>
              { `${item.name} ${item.purchased}` }
            </li>
          );
        })
      }
    </ul>
  );
}

export default ListTen;
