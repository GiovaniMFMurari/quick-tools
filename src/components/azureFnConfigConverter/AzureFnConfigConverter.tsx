import { Button, Card, Form } from "react-bootstrap";
import { convertFnConfig } from "../../scripts/azureFnConfigConverter";
import { useState } from "react";
import "./style.scss";

export default function AzureFnConfigConverter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const onConvertClick = () => {
    try {
      const objInput = JSON.parse(input);
      const result = convertFnConfig(objInput);
      const resultJSON = JSON.stringify(result);
      alert(resultJSON);
      setOutput(resultJSON);
    } catch(err) {
      alert('Error converting! Check the console(F12) for more info');
      console.error(err);
    }
  };

  const onClearClick = () => {
    setInput('');
  };

  return (
    <div>
      <Card>
        <Card.Header as="h5">Azure Function Config to local.settings Converter</Card.Header>
        <Card.Body>
          <Card.Text>
            Explain...
          </Card.Text>
          <Form>
            <Button variant="primary" onClick={onConvertClick}>Convert</Button>{' '}
            <Button variant="outline-primary" onClick={onClearClick}>Clear</Button>{' '}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Azure Function Config Input</Form.Label>
              <Form.Control style={{height: "25vh"}} as="textarea" placeholder="" size="sm" onChange={(e) => setInput(e.target.value)} value={input}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Output</Form.Label>
              <Form.Control style={{height: "25vh"}} as="textarea" placeholder="" size="sm" value={output} />
            </Form.Group>
            <Button variant="primary" onClick={onConvertClick}>Convert</Button>{' '}
            <Button variant="outline-primary" onClick={onClearClick}>Clear</Button>{' '}
            {/* TODO: Copy Output Button */}
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
