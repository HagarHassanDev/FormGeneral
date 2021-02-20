import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const UploadFileForm = ()=>{
    

    return  (
      <div>
        <h3>Upload adaptive lesson</h3>



        <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
  <Form.File 
    id="custom-file"
    label="Custom file input"
    custom
    />
 
  </Form.Group>

  <Form.Group>
  <Form.Label>Select file language</Form.Label>
    <Form.Control as="select" >
      <option>Arabic</option>
      <option>English</option>
      <option>French</option>
      <option>Spanish</option>
    </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
    Upload file
  </Button>

</Form>





    </div>
    ); 

}