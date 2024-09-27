import React from "react";
import { Tab, Row, Col, Nav, NavItem, NavDropdown, } from 'react-bootstrap';
import data from "../data/journal-publications.json"

function Publication(){

    console.log(data)
    return (
        <>
        <h2 className="mt-5">Publications</h2>
        <div className="mt-5">
        <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
      <Row className="clearfix">
        <Col sm={12}>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="first">Journal Papers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Conference Papers</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={12}>
          <Tab.Content animation>
            <Tab.Pane eventKey="first">
            <table class="table table-bordered">
                  <thead class="table-light">
                      <tr>
                          <th scope="col" class="col-1 text-left">No.</th>
                          <th scope="col" class="col-8 text-center">Paper Title</th>
                          <th scope="col" class="col-4 text-center">Journal Name</th>
                      </tr>
                  </thead>
                  <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                            <a href={item['paper-link']} target="_blank" rel="noopener noreferrer">
                            {item['paper-title']}
                            </a>
                        </td>
                        <td>{item['journal-name']}</td>
                        </tr>
                    ))}
                      
                  </tbody>
              </table>
            </Tab.Pane>
            <Tab.Pane eventKey="second">No conference papers has been published as of yet.</Tab.Pane>
            
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
        </>
    )
}

export default Publication