import React from "react";
import * as C from './styles';
import { Link } from "react-router-dom";
import { Button,FormGroup,Form,  Label, Input, CardTitle, Row, Col, Card,  CardText,  } from 'reactstrap';

const Cadastro = () => {

  return (
    <C.Container> 
        <C.Label>Cadastrar usuário</C.Label>
      <C.Content>
        <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Username</Label>
          <Input type="email"   placeholder="email@emaail.com" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email"   placeholder="email@emaail.com" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Telefone</Label>
          <Input type="text"   placeholder="+55 13 99999 9999" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Senha</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="******" />
        </FormGroup>
        <Link to="/Usuario">
        <Button size="lg" outline className="mt-3 lg" to="/Usuario">Cadastrar Usuário</Button>
      </Link>
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
          </C.LabelSignin>
      </Form>
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
export default Cadastro;
