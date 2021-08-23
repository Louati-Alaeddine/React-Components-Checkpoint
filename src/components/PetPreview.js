import React, { Component } from 'react';
import AdoptionForm from './AdoptionForm';

export default class PetPreview extends Component {
  constructor (props) {
    super(props);
    this.state = {
      petToPreview: {}
    };
  this.previewPet = this.previewPet.bind(this);
  this.adoptSelectedPet = this.adoptSelectedPet.bind(this);
}
//Methods
  previewPet (event) {
    const petName = event.target.value;
    this.setState({
      petToPreview: this.props.pets.find((pet) => {
        return petName === pet.name;
      })
    });
  }
  adoptSelectedPet () {
    this.props.adoptPet(this.state.petToPreview);
  }
  render () {
    return (
      <div className="preview">
        <div>
          <h5>Preview:</h5>
          <AdoptionForm
            pets={this.props.pets}
            previewPet={this.previewPet}
            adoptSelectedPet={this.adoptSelectedPet} />
          <img src={this.state.petToPreview.imgUrl} />
        </div>
      </div>
    );
  }
}
