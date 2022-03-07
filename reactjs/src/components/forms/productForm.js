import React from 'react';
import {
  Container, Form, FormGroup, Button,
} from 'react-bootstrap';
import formDuxCont from '../../store/duxContainers/forms/formDuxCont';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      image: '',
      category: '',
      description: '',
      bakeTime: '',
    };
    this.loadData();
  }

  onInputChange = (e) => {
    // Use the event to retrieve the input
    const { changedInput } = e;
    // Get the value of the input
    const inputValue = changedInput.value;
    // Get the input name
    const { inputName } = changedInput;
    // Set the state to the name and the value
    this.setState({
      [inputName]: inputValue,
    });
  };

  loadData = async () => {
    const { match: { params: { id } }, fetchProd } = this.props;
    // If there is no ID, don't load the item
    if (!id) return;
    await fetchProd(id);
    // Update the state with the data from the updated item
    const { prod } = this.props;
    this.setState({ ...prod });
  };

  save = (e) => {
    // Ensure the form doesn't submit with browser
    e.preventDefault();
    const { createProd, updateProd, match: { params: { id } } } = this.props;
    const {
      name, price, image, category, description, bakeTime,
    } = this.state;
    if (id) {
      updateProd({
        id, name, price, image, category, description, bakeTime,
      });
    } else {
      createProd({
        name, price, image, category, description, bakeTime,
      });
    }
  };

  render() {
    // Pull the data from the state.
    const {
      name, price, image, category, description, bakeTime,
    } = this.state;

    return (
      <Container>
        <h1>Product Form</h1>
        <Form onSubmit={this.save}>
          <FormGroup>
            <Input type={'text'} name={'prodtName'} id={'prodName'} onChange={this.onInputChange} value={name} placeholder={'Name'} />
            <Input type={'number'} name={'prodPrice'} id={'prodPrice'} onChange={this.onInputChange} value={price} placeholder={'Price'} />
            <Input type={'text'} name={'prodImage'} id={'prodImage'} onChange={this.onInputChange} value={image} placeholder={'Image URL'} />
            <Input type={'select'} name={'catSelect'} id={'catSelect'} onChange={this.onInputChange} value={category}>
              <Option value={'Cookies'}>Cookies</Option>
              <Option value={'Cakes'}>Cakes</Option>
              <Option value={'Pies'}>Pies</Option>
            </Input>
            <Input type={'textarea'} name={'prodDesc'} id={'prodDesc'} onChange={this.onInputChange} value={description} placeholder={'Description'} />
            <Input type={'textarea'} name={'prodBTime'} id={'prodBTime'} onChange={this.onInputChange} value={bakeTime} placeholder={'Bake time and temp'} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default formDuxCont(ProductForm);
