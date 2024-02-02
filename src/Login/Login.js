import React from "react";
import * as C from './style';
import { Link } from "react-router-dom";
import * as reactstrap from 'reactstrap';
import { Button,  Label, Input, CardTitle, Row, Col, Card,  CardText,  } from 'reactstrap';

  
const Login = () => {
  return (
    <C.Container>
    <C.Label>Login de usuário</C.Label>
      <C.Content>
      <reactstrap.Form inline>
        <reactstrap.FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail"/>
        </reactstrap.FormGroup>
        <reactstrap.FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Senha</Label>
          <Input type="password" name="password" id="examplePassword" />
        </reactstrap.FormGroup>
        <Button size="lg" outline className="mt-3 lg" to="/">Login</Button>
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/Cadastro">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </reactstrap.Form>
      <Row>
      <Col sm="12">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>Logo.</CardText>
        </Card>
      </Col>
      </Row>
      </C.Content>
    </C.Container>
  );
};


export default Login;