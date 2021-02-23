import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Progress,
  Button
} from 'reactstrap';
import { Switch } from '../../vibe';
import {Doughnut, Line, Polar, Bar} from 'react-chartjs-2';
import 'react-tabulator/lib/css/bootstrap/tabulator_bootstrap4.min.css';

import { ReactTabulator } from 'react-tabulator'


export default class AnalyticsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      facebook: true,
      twitter: false
    };
  }

  render() {
    const chartColors = {
      red: 'rgb(233, 30, 99)',
      danger: 'rgb(233, 30, 99)',
      dangerTransparent: 'rgba(233, 30, 99, .8)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 180, 0)',
      green: 'rgb(34, 182, 110)',
      blue: 'rgb(68, 159, 238)',
      primary: 'rgb(68, 159, 238)',
      primaryTransparent: 'rgba(68, 159, 238, .8)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)',

      primaryShade1: 'rgb(68,159,238)',
      primaryShade2: 'rgb(23,139,234)',
      primaryShade3: 'rgb(14,117,202)',
      primaryShade4: 'rgb(9,85,148)',
      primaryShade5: 'rgb(12,70,117)',
      primaryShade6: 'rgb(10,56,93)',
    };
    const donutData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
      datasets: [
        {
          data: [3.675, 2, 5, 4.44, 3.4],
          backgroundColor: [
            chartColors.primaryShade1,
            chartColors.primaryShade2,
            chartColors.primaryShade3,
            chartColors.primaryShade4,
            chartColors.primaryShade5,
          ],
          hoverBackgroundColor: [
            chartColors.primaryShade6,
            chartColors.primaryShade6,
            chartColors.primaryShade6,
            chartColors.primaryShade6,
            chartColors.primaryShade6,
          ]
        }
      ]
    };
    const line = {
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'PI',
            data: [3.675, 2, 5, 4.44, 3.4],
            borderColor: 'transparent',
            backgroundColor: chartColors.primaryShade3,
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
            borderWidth: 4
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false
            }
          ],
          yAxes: [
            {
              display: false,
              ticks: {
                    suggestedMin: 0,
                  }
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        }
      }
    };


    const sampleKQI = [
      { date: '2021-02-16', _children: [
          { name: 'Page_Response_Delay_ms', value: 743.12030075188, },
          { name: 'Page_DL_Throughput_Kbps', value: 2386.10690493625, },
          { name: 'Page_DL_Throughput_Kbps_nom', value: 767475824000, },
        ]},
      { date: '2021-02-17', _children: [
          { name: 'Page_Response_Delay_ms', value: 127.389830508475, },
          { name: 'Page_DL_Throughput_Kbps', value: 3161.337867887, },
          { name: 'Page_DL_Throughput_Kbps_nom', value: 367047816000, },
        ]},
      { date: '2021-02-18', _children: [
          { name: 'Page_Response_Delay_ms', value: 128.276315789474, },
          { name: 'Page_DL_Throughput_Kbps', value: 2765.7355910785, },
          { name: 'Page_DL_Throughput_Kbps_nom', value: 470363032000, },
        ]},
    ]

    const samplePI = [
      { date: '2021-01', _children: [
          { name: 'PS', value: 4.572, },
          { name: 'WEB', value: 4.68, },
          { name: 'WEB_Browser_Integrity', value: 4.2, },
        ]},
      { date: '2020-12', _children: [
          { name: 'PS', value: 4.72, },
          { name: 'WEB', value: 4.223, },
          { name: 'WEB_Browser_Integrity', value: 4.0, },
        ]},
    ]

    const columns = [
      {title: "date", field: "date", width: 140},
      {title: "name", field: "name", width: 270},
      {title: "value", field: "value"},
      {title: 'valueBar', field: 'value', hozAlign: 'left', formatter: 'progress', editable: false, formatterParams:{
          min: 3.9,
          max: 5,
          color: chartColors.primary,
        },},
    ]

    const options = {
      height: 470,
      layout: "fitColumns",
      dataTree: true,
      dataTreeStartExpanded: true,
      /*dataTreeElementColumn: "name"*/
    };


    /*date		msisdn		Page_Response_Delay_ms	Page_DL_Throughput_Kbps	Page_DL_Throughput_Kbps_nom
    2021-02-16	887592409	743.12030075188			2386.10690493625		767475824000 --
    2021-02-19	887592409	228.1					3140.14673164607		694646680000
    2021-02-21	887592409	1190					4713.40549036594		91930864000
    2021-02-17	887592409	127.389830508475		3161.337867887			367047816000 --
    2021-02-18	887592409	128.276315789474		2765.7355910785			470363032000 --
    2021-02-20	887592409	457.529411764706		2644.47303082192		494199120000

    2021-01     887592409   PS-4.572    WEB-4.68    WEB_Browser_Integrity-4.2
    */

    return (
      <div>
        <div className="m-b">
          <h2>Query results: Network Monthly</h2>
          <p className="text-muted">
            Here's what's going on with the selected data.
          </p>
        </div>
        <Row>
          <Col md={{size: 8, offset: 2}}>
            <Card>
              <CardHeader> Table </CardHeader>
              <CardBody>
                <ReactTabulator data={samplePI}
                                columns={columns}
                                options={options}
                                hover
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/*<Row>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>
                Page Views{' '}
                <Button size="sm" className="pull-right">
                  View
                </Button>
              </CardHeader>
              <CardBody>
                <h2 className="m-b-20 inline-block">
                  <span>13K</span>
                </h2>{' '}
                <i
                  className="fa fa-caret-down text-danger"
                  aria-hidden="true"
                />
                <Progress value={77} color="warning" />
              </CardBody>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>
                Product Sold{' '}
                <Button size="sm" className="pull-right">
                  View
                </Button>
              </CardHeader>
              <CardBody>
                <h2 className="m-b-20 inline-block">
                  <span>1,890</span>
                </h2>{' '}
                <i className="fa fa-caret-up text-danger" aria-hidden="true" />
                <Progress value={77} color="success" />
              </CardBody>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>
                Server Capacity{' '}
                <Button size="sm" className="pull-right">
                  View
                </Button>
              </CardHeader>
              <CardBody>
                <h2 className="inline-block">
                  <span>14%</span>
                </h2>
                <Progress value={14} color="primary" />
              </CardBody>
            </Card>
          </Col>
        </Row>*/}
        <hr/>
        <Row>
          <Col md={8} sm={12}>
            <Card>
              <CardHeader>Traffic</CardHeader>
              <CardBody>
                <div className="full-bleed">
                  <Bar
                    data={line.data}
                    width={2068}
                    height={846}
                    legend={{ display: false }}
                    options={line.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <CardHeader>Product Views</CardHeader>
              <CardBody>
                <Polar
                  data={donutData}
                  width={908}
                  height={768}
                  legend={{ display: false }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/*<Row>
          <Col md={8} sm={12}>
            <Card>
              <CardHeader>Conversions</CardHeader>
              <CardBody>
                <Row className="m-b-md">
                  <Col xs={4}>
                    <h5>Added to Cart</h5>
                    <div className="h2">4.30%</div>
                    <small className="text-muted">23 Visitors</small>
                  </Col>
                  <Col xs={4}>
                    <h5>Reached Checkout</h5>
                    <div className="h2">2.93</div>
                    <small className="text-muted">12 Visitors</small>
                  </Col>
                  <Col xs={4}>
                    <h5>Pruchased</h5>
                    <div className="h2">10</div>
                    <small className="text-muted">10 Customers</small>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>Integrations</CardHeader>
              <CardBody>
                <Switch
                  enabled={this.state.facebook}
                  toggle={() => {
                    this.setState(prevState => ({ facebook: !prevState.facebook }));
                  }}
                />
                <span className="text-facebook pull-right">
                  <i className="fa fa-facebook" /> Facebook
                </span>
                <hr />
                <Switch
                  enabled={this.state.twitter}
                  toggle={() => {
                    this.setState(prevState => ({ twitter: !prevState.twitter }));
                  }}
                />
                <span className="text-twitter pull-right">
                  <i className="fa fa-twitter" /> Twitter
                </span>
              </CardBody>
            </Card>
          </Col>
        </Row>*/}
      </div>
    );
  }
}
