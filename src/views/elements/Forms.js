import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Card, CardBody } from 'reactstrap';
import selectComponent from '../../vibe/helpers/handleSelectKQIField'

export default class FormsPage extends Component {
  constructor() {
    super();
    let today = new Date().toISOString().split("T")[0];
    //TODO: set min date for startDate after checking the db
    this.state = {
        today,
    };
  }

  render() {
    return (
      <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <Card>
                <CardBody>
          <Form onSubmit={this.handleSubmit}>
              <legend>Query selection:</legend>
        <FormGroup>
          <Label for="name">MSISDN</Label>
          <Input type="number" name="msisdn" id="msisdn" placeholder="MSISDN" required/>
        </FormGroup>
        <FormGroup>
            <Label for="name">Start Date</Label>
            <Input type="date" name="startDate" id="startDate" required/>
        </FormGroup>
        <FormGroup>
            <Label for="name">End Date</Label>
            <Input type="date" name="endDate" id="endDate" required max={this.state.today.toString()}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select KQIs to query</Label>
          {selectComponent('test')}
          {/*<Input type="select" name="select" id="exampleSelect" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>*/}
        </FormGroup>
        {/*<FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>*/}
        {/*<FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>*/}
       {/* <FormGroup tag="fieldset">*/}
          {/*<FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>*/}
        {/*</FormGroup>*/}
        {/*<hr/>
        <Label>KQIs</Label>
        <FormGroup check>
            <Row>
                <Label check>
                    <Col><Input type="checkbox" name="checkbox" value="checked"/>Check me out</Col>
                </Label>
                <Label check>
                    <Col><Input type="checkbox" name="checkbox" value="checked"/>Check me out</Col>
                </Label>
                <Label check>
                    <Col><Input type="checkbox" name="checkbox" value="checked"/>Check me out</Col>
                </Label>
                <Label check>
                    <Col><Input type="checkbox" name="checkbox" value="checked"/>Check me out</Col>
                </Label>
                <Label check>
                    <Col><Input type="checkbox" name="checkbox" value="checked"/>Check me out</Col>
                </Label>
            </Row>
            <Row>
                <Label check>
                    <Col><Input type="checkbox" name="checkbox" value="checked"/>Check me out</Col>
                </Label>
                <Label check>
                    <Col><Input type="checkbox" name="checkbox" value="checked"/>Check me out</Col>
                </Label>
                <Label check>
                    <Col><Input type="checkbox" name="checkbox" value="checked"/>Check me out</Col>
                </Label>
                <Label check>
                    <Col><Input type="checkbox" name="checkbox" value="checked"/>Check me out</Col>
                </Label>
                <Label check>
                    <Col><Input type="checkbox" name="checkbox" value="checked"/>Check me out</Col>
                </Label>
            </Row>
            <hr/>
        </FormGroup>*/}
        <Button>Submit</Button>
      </Form>
      </CardBody>
      </Card>
      </Col>
      </Row>
    )
  }

    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        console.log(formData.getAll('test'));
        for (let f of formData.entries()) {
            console.log(f[0] + ": " + f[1]);
        }
    }
}
