import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

const ProfilePage = () => {
    return(
        <Container className="mt-5 pt-5">
          <Card>
              <Card.Body>
                  <div className="m-4">
                        <Form>
                        <Form.Group controlId="formGridFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="name" maxLength="50" placeholder="John Doe" required/>
                        </Form.Group>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control maxLength="100" placeholder="1234 Main St" required/>
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control maxLength="100" placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control maxLength="100" required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" required>
                                <option> </option>
                                <option value="Alabama">AL</option>
                                <option value="Alaska">AK</option>
                                <option value="Arizona">AZ</option>
                                <option value="Arkansas">AR</option>
                                <option value="California">CA</option>
                                <option value="Colorado">CO</option>
                                <option value="Connecticut">CT</option>
                                <option value="Delaware">DE</option>
                                <option value="District Of Columbia">DC</option>
                                <option value="Florida">FL</option>
                                <option value="Georgia">GA</option>
                                <option value="Hawaii">HI</option>
                                <option value="Idaho">ID</option>
                                <option value="Illinois">IL</option>
                                <option value="Indiana">IN</option>
                                <option value="Iowa">IA</option>
                                <option value="Kansas">KS</option>
                                <option value="Kentucky">KY</option>
                                <option value="Louisiana">LA</option>
                                <option value="Maine">ME</option>
                                <option value="Maryland">MD</option>
                                <option value="Massachusetts">MA</option>
                                <option value="Michigan">MI</option>
                                <option value="Minnesota">MN</option>
                                <option value="Mississippi">MS</option>
                                <option value="Missouri">MO</option>
                                <option value="Montana">MT</option>
                                <option value="Nebraska">NE</option>
                                <option value="Nevada">NV</option>
                                <option value="New Hampshire">NH</option>
                                <option value="New Jersey">NJ</option>
                                <option value="New Mexico">NM</option>
                                <option value="New York">NY</option>
                                <option value="North Carolina">NC</option>
                                <option value="North Dakota">ND</option>
                                <option value="Ohio">OH</option>
                                <option value="Oklahoma">OK</option>
                                <option value="Oregon">OR</option>
                                <option value="Pennsylvania">PA</option>
                                <option value="Rhode Island">RI</option>
                                <option value="South Carolina">SC</option>
                                <option value="South Dakota">SD</option>
                                <option value="Tennessee">TN</option>
                                <option value="Texas">TX</option>
                                <option value="Utah">UT</option>
                                <option value="Vermont">VT</option>
                                <option value="Virginia">VA</option>
                                <option value="Washington">WA</option>
                                <option value="West Virginia">WV</option>
                                <option value="Wisconsin">WI</option>
                                <option value="Wyoming">WY</option>

                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control minLength="5" maxLength="9" required/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </div>
               </Card.Body>
           </Card>
       </Container>
    );
};
export default ProfilePage

