import React from 'react';

//Module

export default function AdoptionForm (props) {
  return (
    <div>
      <button onClick={props.adoptSelectedPet} />
      <select onChange={props.previewPet}>
      {props.pets.map(element => {
        return (
        <option key={element.name} >
          {element.name}
        </option>
        );
      })}
      </select>
      <AdoptionForm />
    </div>
  );
}
