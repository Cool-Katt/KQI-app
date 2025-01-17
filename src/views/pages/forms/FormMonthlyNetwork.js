import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, Col, Row, Card, CardBody} from 'reactstrap';
import selectComponent from '../../../vibe/helpers/handleSelectKQIField'
import Redirect from "react-router-dom/Redirect";
import PageAlertContext from "../../../vibe/components/PageAlert/PageAlertContext";
import {NavLink} from "react-router-dom";

export default class FormsMonthlyMSISDN extends Component {
    constructor(props) {
        super(props);
        let thisMonth = new Date().toISOString().split("T")[0].slice(0, 7);
        //TODO: set min date for startDate after checking the db
        this.state = {
            thisMonth,
            redirectFlag: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        if (!props.location.state) {
            props.location.state = {}
        }
    }

    render() {
        return (
            <Row>
                <Col md={{size: 8, offset: 2}}>
                    <Card>
                        <CardBody>
                            <PageAlertContext.Consumer>
                                {context => (
                                    <Form onSubmit={this.handleSubmit(context, this.props)}>
                                        <legend>Query selection:</legend>
                                        <FormGroup>
                                            <Label for="name">Start Month </Label>
                                            <Input type="month" name="startDate" id="startDate" required
                                                   max={this.state.thisMonth.toString()}
                                                   placeholder="20yy-MM"
                                                   pattern="20[0-9]{2}-[0-1][0-9]"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="name">End Month </Label>
                                            <Input type="month" name="endDate" id="endDate"
                                                   max={this.state.thisMonth.toString()}
                                                   placeholder="20yy-MM"
                                                   pattern="20[0-9]{2}-[0-1][0-9]"/>
                                        </FormGroup>
                                        <legend>KQIs</legend>
                                        <FormGroup>
                                            <Label for="exampleSelect">Select KQIs to query</Label>
                                            {selectComponent()}
                                        </FormGroup>
                                        <Button>Submit</Button>
                                        {this.state.redirect ? <Redirect to={{
                                            pathname: '/apps/analytics',
                                            state: {data: this.props.location.state.data}
                                        }}/> : ''}
                                    </Form>
                                )
                                }
                            </PageAlertContext.Consumer>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }

    handleSubmit(context, props) {
        return (e => {
            e.preventDefault();
            let formData = new FormData(e.currentTarget);

            let data = {
                startDate: formData.get('startDate'),
                endDate: formData.get('endDate'),
                kqis: formData.getAll('kqi'),
                type: 'monthly-network'
            }

            if (formData.getAll('kqi')[0] === '') {
                context.setAlert('⚠️ Please select at least one KQI!', 'warning')
            } else {
                props.location.state.data = data;
                //console.log(data);
                this.setState({redirect: true});
            }
        })
    }
}