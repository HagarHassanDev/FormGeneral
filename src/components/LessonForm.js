import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CustomizedTreeView from './CustomizedTreeView';


export const LessonForm = ()=>{
    

    return  (
      <div>
        <h3>Define adaptive lesson</h3>
        <Form>
        <Form.Group>
  <Form.Label>Select cognitive level</Form.Label>
    <Form.Control as="select" >
      <option>select</option>
      <option>select</option>
      <option>select</option>
      <option>select</option>
    </Form.Control> </Form.Group>
      <Form.Group>
  <Form.Label>The concept Of</Form.Label>
    <Form.Control as="select" >
      <option>select</option>
      <option>select</option>
      <option>select</option>
      <option>select</option>
    </Form.Control>
      </Form.Group>
      <Form.Group>
  <Form.Label>Select instructional role</Form.Label>
    <Form.Control as="select" >
      <option>remember</option>
      <option>understand</option>
      <option>apply</option>
      <option>analyze</option>
      <option>evaluate</option>
      <option>create</option>
      <option>Cognitive</option>
    </Form.Control>
      </Form.Group>

  <Form.Group>
  <Form.Label>Select depth level</Form.Label>
    <Form.Control as="select" >
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </Form.Control>
      </Form.Group>


      <Form.Group>
  <Form.Label>To achieve the following aims</Form.Label>
    {/* <Form.Control  > */}
    <CustomizedTreeView />

    {/* </Form.Control> */}
      </Form.Group>




      <Button variant="primary" type="submit">
Add Lesson 
  </Button>

</Form>





    </div>
    ); 

}