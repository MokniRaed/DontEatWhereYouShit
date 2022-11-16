import React from 'react'
import { Link } from 'react-router-dom';
import {
    Form,
    ButtonToolbar,
    Button,
    Panel,
    FlexboxGrid
  } from 'rsuite';

const Signin = () => {
  return (
    <div style={{margin:"50px"}}>
       <FlexboxGrid align="middle" justify="center" >
          <FlexboxGrid.Item colspan={8}>
            <Panel header={<h3>Login</h3>} bordered  >
              <Form fluid>
                <Form.Group>
                  <Form.ControlLabel>Username or email address</Form.ControlLabel>
                  <Form.Control name="name" />
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Password</Form.ControlLabel>
                  <Form.Control name="password" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button appearance="primary">Sign in</Button>
                    <Button appearance="link">Forgot password?</Button>
                  </ButtonToolbar>
                   <Button as={Link} to="/signup" appearance="link">Create account</Button>

                </Form.Group>
              </Form>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
    </div>
  )
}

export default Signin
