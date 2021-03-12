import React, {Component} from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Progress,
    Button, CardFooter
} from 'reactstrap';
import {Switch} from '../../vibe';
import {Doughnut, Line, Polar, Bar} from 'react-chartjs-2';
import 'react-tabulator/lib/css/bootstrap/tabulator_bootstrap4.min.css';

import {ReactTabulator} from 'react-tabulator'
import {DashboardLayoutContext} from "../../layouts/DashboardLayout";

const chartColors = {
    red: 'rgb(233, 30, 99)',
    danger: 'rgb(233, 30, 99)',
    dangerTransparent: 'rgba(233, 30, 99, 0.8)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 180, 0)',
    green: 'rgb(34, 182, 110)',
    blue: 'rgb(68, 159, 238)',
    primary: 'rgb(68,159,238)',
    primaryTransparent: 'rgba(68,159,238,0.8)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)',

    primaryShade1: 'rgb(68,159,238)',
    primaryShade2: 'rgb(23,139,234)',
    primaryShade3: 'rgb(14,117,202)',
    primaryShade4: 'rgb(9,85,148)',
    primaryShade5: 'rgb(12,70,117)',
    primaryShade6: 'rgb(10,56,93)',
    primaryShade7: 'rgb(10,49,81)',
};

function handler(data) {
    let labels = [];
    let datasets = [];
    let count = 11;
    const objKeys = Object.keys(Object.values(data).shift());
    objKeys.forEach((key) => {
        const newObj = {
            label: key,
            data: [],
            backgroundColor: chartColors[Object.keys(chartColors)[Math.floor(Math.random()*Object.keys(chartColors).length)]],
            //backgroundColor: Object.values(chartColors)[count++],
            fill: false,
        }
        data.forEach((obj) => {
            newObj['data'].push(obj[key]);
        })
        datasets.push(newObj);
    })
    labels = datasets.shift().data;
    /*let ddd = JSON.parse(JSON.stringify(datasets));
    let avr = [];
    ddd.forEach((o) => {
        avr.push(o.data.reduce((a,b) => a + b, 0)/o.data.length);
    })
for (let i = 0; i < avr.length; i++) {
    if (avr[i] < 10* avr[i+1])
    {
        datasets[i]['yAxisID'] = 'ass';
    }
}*/
    return ({
        labels,
        datasets,
    });
}

export default class AnalyticsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            facebook: true,
            twitter: false
        };
    }

    render() {
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
            /*data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'PI',
                        data: [3.675, 2, 5, 4.44, 3.4],
                        backgroundColor: chartColors.primary
                        /!*data: this.sample.map(v => Object.values(v)),*!/
                        /!*borderColor: 'transparent',
                        backgroundColor: chartColors.primaryShade3,
                        pointBackgroundColor: 'rgba(0,0,0,0)',
                        pointBorderColor: 'rgba(0,0,0,0)',
                        borderWidth: 4,*!/
                    },
                    {
                        label: 'cs',
                        data: [3, 5, 2, 4.44, 1, 7],
                        /!*data: this.sample.map(v => Object.values(v)),*!/
                        borderColor: 'transparent',
                        backgroundColor: chartColors.green,
                        fill: false
                    },

                ]
            },*/
            options: {
                scales: {
                    xAxes: [
                        {
                            display: true
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
            {
                date: '2021-02-16',
                Page_Response_Delay_ms: 743.12030075188,
                Page_DL_Throughput_Kbps: 2386.10690493625,
                Page_DL_Throughput_Kbps_nom: 767475824000,

            },
            {
                date: '2021-02-17',
                Page_Response_Delay_ms: 127.389830508475,
                Page_DL_Throughput_Kbps: 3161.337867887,
                Page_DL_Throughput_Kbps_nom: 367047816000,
            },
            {
                date: '2021-02-18',
                Page_Response_Delay_ms: 128.276315789474,
                Page_DL_Throughput_Kbps: 2765.7355910785,
                Page_DL_Throughput_Kbps_nom: 470363032000,
            },
        ]

        const samplePI = [
            {
                date: '2021-01',
                PS: 4.572,
                WEB: 4.68,
                WEB_Browser_Integrity: 4.2,
            },
            {
                date: '2020-12',
                PS: 4.72,
                WEB: 4.223,
                WEB_Browser_Integrity: 4.0,
            }
        ]


        const columns = [
            /* {title: "date", field: "date", },
             {title: "name", field: "name", },
             {title: "value", field: "value"},*/
            /*{title: 'valueBar', field: 'value', hozAlign: 'left', formatter: 'progress', editable: false, formatterParams:{
                min: 3.9,
                max: 5,
                color: chartColors.primary,
              },},*/
        ]

        const options = {
            height: 400,
            layout: "fitColumns",
            columnMinWidth: 150,
            autoColumns: true,
            tooltipsHeader: true,
            downloadDataFormatter: (data) => data,
            downloadReady: (fileContents, blob) => blob,
            /*dataTree: true,
            dataTreeStartExpanded: true,*/
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
            <DashboardLayoutContext.Consumer>{context => (
                <div
                    onMouseEnter={!context.sidebarCollapsed ? context.toggleSideCollapse : null}
                    /*onMouseLeave={context.sidebarCollapsed ? context.toggleSideCollapse : null}*/>
                    <div className="m-b">
                        <h2>Query results: Network Monthly</h2>
                        <p className="text-muted">
                            Here's what's going on with the selected data.
                        </p>
                    </div>
                    <Row>
                        <Col md={{size: 10, offset: 1}}>
                            <Card>
                                <CardHeader> Table </CardHeader>
                                <CardBody>
                                    <ReactTabulator data={samplePI}
                                                    columns={columns}
                                                    options={options}
                                                    ref={ref => (this.ref = ref)}
                                                    hover
                                    />
                                </CardBody>
                                <CardFooter>
                                    <Button color="info" outline
                                            onClick={() => this.ref.table.download("csv", "data.cv")}>Download
                                        Data (CSV format)</Button>
                                    <Button color="success" outline
                                            onClick={() => this.ref.table.download("xlsx", "data.xlsx")}>Download
                                        Data (XLSx format)</Button>
                                </CardFooter>
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
                        <Col md={{size: 10, offset: 1}}>
                            <Card>
                                <CardHeader>Traffic</CardHeader>
                                <CardBody>
                                    <div className="full-bleed">
                                        <Bar
                                            //data={line.data}
                                            data={handler(samplePI)}
                                            width={2068}
                                            height={846}
                                            legend={{display: false}}
                                            options={line.options}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        {/*<Col md={4} sm={12}>
                            <Card>
                                <CardHeader>Product Views</CardHeader>
                                <CardBody>
                                    <Polar
                                        data={donutData}
                                        width={908}
                                        height={768}
                                        legend={{display: false}}
                                    />
                                </CardBody>
                            </Card>
                        </Col>*/}
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
            )}</DashboardLayoutContext.Consumer>
        );
    }
}
