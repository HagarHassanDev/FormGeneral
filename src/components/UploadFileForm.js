import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const UploadFileForm = ()=>{
    const [file , setFile] =useState('');
    const [fileLanguage , setFileLanguage] = useState('');

const handleSubmit =(e)=>{
  e.preventDefault();
  console.log(file )
  console.log(fileLanguage )
}

    return  (
      <div>
        <h3>Upload adaptive lesson</h3>



        <Form onSubmit={handleSubmit}>
  <Form.Group controlId="exampleForm.ControlInput1">
  <Form.File 
    id="custom-file"
    label="Custom file input"
    custom 
    value={file} onChange={(e)=>setFile(e.target.value)}
    />
 
  </Form.Group>

  <Form.Group>
  <Form.Label>Select file language</Form.Label>
    <Form.Control as="select" value={fileLanguage} onChange={(e)=>setFileLanguage(e.target.value)}>
      <option>Arabic</option>
      <option>English</option>
      <option>French</option>
      <option>Spanish</option>
    </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit" >
    Upload file
  </Button>

</Form>





    </div>
    ); 

}