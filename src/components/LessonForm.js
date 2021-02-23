import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import CustomizedTreeView from './CustomizedTreeView';


export const LessonForm = () => {
  const [cognitiveLevel, setCognitiveLevel] = useState('');
  const [conceptOf, setConceptOf] = useState('');
  const [instructionalRole, setInstructionalRole] = useState('');
  const [depthLevel, setDepthLevel] = useState('');
  const [treeValues, setTreeValue] = useState({
    Chrome: false,
    Calendar: false,
    Applications: false,
    Documents: false,
    OSS: false,
    Material: false,
    src: false,
    index: false,
    tree: false
  });

  const handleLessonSubmit = (e) => {
    e.preventDefault();
    console.log(cognitiveLevel)
    console.log(conceptOf)
    console.log(instructionalRole)
    console.log(depthLevel)
    console.log(treeValues)
  }

  return (
    <div>
      <h3>Define adaptive lesson</h3>
      <Form onSubmit={handleLessonSubmit}>
        <Form.Group>
          <Form.Label>Select cognitive level</Form.Label>
          <Form.Control as="select" value={cognitiveLevel} onChange={(e) => setCognitiveLevel(e.target.value)} >
            <option>select</option>
            <option>select</option>
            <option>select</option>
            <option>select</option>
          </Form.Control> </Form.Group>
        <Form.Group>
          <Form.Label>The concept Of</Form.Label>
          <Form.Control as="select" value={conceptOf} onChange={(e) => setConceptOf(e.target.value)} >
            <option>select</option>
            <option>select</option>
            <option>select</option>
            <option>select</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Select instructional role</Form.Label>
          <Form.Control as="select" value={instructionalRole} onChange={(e) => setInstructionalRole(e.target.value)}  >
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
          <Form.Control as="select" value={depthLevel} onChange={(e) => setDepthLevel(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Form.Control>
        </Form.Group>


        <Form.Group>
          <Form.Label>To achieve the following aims</Form.Label>
          {/* <Form.Control  > */}
          <CustomizedTreeView treeValues={treeValues} setTreeValue={setTreeValue} />
          {/* </Form.Control> */}
        </Form.Group>




        <Button variant="primary" type="submit">
          Add Lesson
  </Button>


      </Form>





    </div>
  );

}