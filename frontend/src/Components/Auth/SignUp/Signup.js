import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, ButtonToolbar, FlexboxGrid } from "rsuite";

const Signup = () => {
  const formRef = React.useRef();

  const [formError, setFormError] = React.useState({});
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    age: "",
    password: "",
    verifyPassword: "",
  });

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error("Form Error");
      return;
    }
    console.log(formValue, "Form Value");
  };

  const handleCheckEmail = () => {
    formRef.current.checkForField("email", (checkResult) => {
      console.log(checkResult);
    });
  };

  const TextField = React.forwardRef((props, ref) => {
    const { name, label, accepter, ...rest } = props;
    return (
      <Form.Group controlId={`${name}-4`} ref={ref}>
        <Form.ControlLabel>{label} </Form.ControlLabel>
        <Form.Control name={name} accepter={accepter} {...rest} />
      </Form.Group>
    );
  });
  return (
    <div>
      <div style={{ margin: "50px" }}>
        <FlexboxGrid align="middle" justify="center">
          <FlexboxGrid.Item colspan={8}>
            <Form
              ref={formRef}
              onChange={setFormValue}
              onCheck={setFormError}
              formValue={formValue}
            >
              <TextField name="name" label="Username" />
              <TextField name="email" label="Email" />
              <TextField name="age" label="Age" />
              <TextField
                name="password"
                label="Password"
                type="password"
                autoComplete="off"
              />
              <TextField
                name="verifyPassword"
                label="Verify password"
                type="password"
                autoComplete="off"
              />

              <ButtonToolbar>
                <Button appearance="primary" onClick={handleSubmit}>
                  Submit
                </Button>

                <Button as={Link} to="/login" >Login</Button>
              </ButtonToolbar>
            </Form>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    </div>
  );
};

export default Signup;
