import React, { useState } from 'react';

function BucketForm(props) {
  const [input, setInput] = useState('');
  let [eagerness, setEagerness] = useState('');
  //section to prevent empty item from being added
  let [isDisabled, setDisabled] = useState(true);

  // TODO: Use this array in the return statement below
  const eagernessLevel = ['high', 'medium', 'low']

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eagerness) {
      eagerness = 'low';
    }

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      eagerness: eagerness,
    });

    setInput('');
    setEagerness('');
    setDisabled(true);
  };

  const handleChange = (e) => {
    console.log(e, e.target.value)
    setInput(e.target.value);
    //section to prevent empty item from being added
    let trimValue = e.target.value.trim();
    console.log('length = ', e.target.value.length);
    console.log('length = ', trimValue.length);
    if (trimValue.length > 0) {setDisabled(false)};
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          {/* section added disabled to prevent adding an item */}
          <button className={`dropbtn ${eagerness}`} disabled={true}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {/* TODO:Add an onClick event that will set the corresponding eagerness level from the `eagernessLevel` array */}
            <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
            <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
            <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
          </div>
        </div>
        {/* section set disabled to prevent empty item from being added*/}
        <button className="bucket-button" disabled={isDisabled}>Add bucket list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {/* TODO:Add an onClick event that will set the corresponding eagerness level from the `eagernessLevel` array */}
            <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
            <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
            <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
          </div>
        </div>
        <button className="bucket-button" >Update</button>
      </form>
    </div>
  );
}

export default BucketForm;
