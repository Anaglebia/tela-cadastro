import React from "react";
import { Link } from "react-router-dom";
import { Button, Label, Input,Container, Row, Col } from 'reactstrap';


const Usuario = () => {
  return (
      <Container>
         <Row>
         <h1>Cadastrar Pessoa Fisica</h1>
        </Row>
        <Row>
          <Col>Dados Pessoais</Col>
        </Row>
        <Row>
          <Col>
          <Label  className="mr-sm-2 mt-2">Nome</Label>
          <Input type="text"  placeholder="Nome" />
          </Col>
          <Col>
          <Label  className="mr-sm-2">Sobrenome</Label>
          <Input type="text"  placeholder="Sobrenom" />
          </Col>
          <Col>
          <Label  className="mr-sm-2">Data de Nascimento</Label>
          <Input  type="text"  placeholder="31/01/1900" />
          </Col>
          <Row>
          <Col >
          <Label  className="mr-sm-2">Email</Label>
          <Input  type="email"  placeholder="email@email.com" />
          </Col>
          <Col >
          <Label  className="mr-sm-2">CPF</Label>
          <Input  type="text"  placeholder="999.999.999.99" />
          </Col>
          <Col>
          <Label  className="mr-sm-2">RG</Label>
          <Input className="mr-sm-2 mb-4"  type="text"  placeholder="999.999.999.99" />
          </Col>
        </Row>
         <hr></hr>
        </Row>

        <Row>
        <Row>
          <Col>Endereços</Col>
        </Row>
          <Col>
          <Label  className="mr-sm-2 mt-2">Logradouro</Label>
          <Input  type="text"  placeholder="Rua Sem Nome" />
          </Col>
          <Col>
          <Label  className="mr-sm-2">Numero</Label>
          <Input  type="text"  placeholder="999999" />
          </Col>
          <Col>
          <Label  className="mr-sm-2">CEP</Label>
          <Input  type="text"  placeholder="99999-999" />
          </Col>
        </Row>
        <Row>
          <Col>
          <Label  className="mr-sm-2">Complemento</Label>
          <Input  type="text"  placeholder="Casa 999" />
          </Col>
          <Col>
          <Label  className="mr-sm-2">Cidade</Label>
          <Input  type="text"  placeholder="Rio de Janeiro" />
          </Col>
          <Col>
          <Label  className="mr-sm-2">Estado</Label>
          <Input  type="text"  placeholder="RJ" />
          </Col>
        </Row>
        <Row>
          <Col>
          <Label  className="mr-sm-2 mt-2">Logradouro</Label>
          <Input  type="text"  placeholder="Rua Sem Nome" />
          </Col>
          <Col>
          <Label  className="mr-sm-2">Numero</Label>
          <Input  type="text"  placeholder="999999" />
          </Col>
          <Col>
          <Label  className="mr-sm-2">CEP</Label>
          <Input  type="text"  placeholder="99999-999" />
          </Col>
        </Row>
        <Row>
          <Col>
          <Label  className="mr-sm-2">Complemento</Label>
          <Input  type="text"  placeholder="Casa 999" />
          </Col>
          <Col>
          <Label  className="mr-sm-2">Cidade</Label>
          <Input  type="text"  placeholder="Rio de Janeiro" />
          </Col>
          <Col>
          <Label  className="mr-sm-2">Estado</Label>
          <Input  type="text"  placeholder="RJ" />
          </Col>
        </Row>
        <Button size="lg" outline className="mt-3 lg mb-3" to="/">Adicionar novo endereço</Button>
        <hr></hr>
        <Row>
        <Row>
          <Col>Contatos</Col>
        </Row>
          <Col>
          <Label  className="mr-sm-2">Nome</Label>
          <Input  type="text"  placeholder="Nome Contato" />
          </Col>
          <Col>
          <Label  className="mr-sm-2">Contato</Label>
          <Input  type="text"  placeholder="email/Telefone" />
          </Col>
          <Col>
          <Label  className="mr-sm-2">Tipo Contato</Label>
          <Input  type="text"  placeholder="email" />
          </Col>
        </Row>
        <Row>
          <Col>
          <Label  className="mr-sm-2">Nome</Label>
          <Input  type="text"  placeholder="Nome Contato" />
          </Col>
          <Col>
          <Label  className="mr-sm-2">Contato</Label>
          <Input  type="text"  placeholder="email/Telefone" />
          </Col>
          <Col>
          <Label  className="mr-sm-2">Tipo Contato</Label>
          <Input  type="text"  placeholder="email" />
          </Col>
        </Row>
        <Button size="lg" outline className="mt-3 lg mb-3" to="/">Adicionar novo endereço</Button>
        <hr></hr>
        <Link to="/">
        <Button size="lg" outline className="mt-3 lg mb-3" to="/">Salvar</Button>
        </Link>
        
      </Container>
  );
};

export default Usuario;
