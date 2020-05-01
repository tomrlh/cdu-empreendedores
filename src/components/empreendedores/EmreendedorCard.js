import React from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import {Subscribe} from 'unstated'
import EmpreendedoresContainer from '../containers/EmpreendedoresContainer'

class EmpreendedorCard extends React.Component {
  render() {
    return (
      <Subscribe to={[EmpreendedoresContainer]}>
        {empreendedores => (
          <Card style={{width: '255px'}}>
            <Image src={this.props.empreendedor.imagem} wrapped ui={false} />
             <Card.Content>
              <Card.Header>{this.props.empreendedor.nome}</Card.Header>
              <Card.Meta>
                <span className='date'>{this.props.empreendedor.categoria}</span>
              </Card.Meta>
              <Card.Description>
                {this.props.empreendedor.descricao}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button basic color='green'onClick={() => {
                empreendedores.setMostrarDetalhesModal(true)
                empreendedores.setEmpreendedorSelecionado(this.props.empreendedor)
              }}>
                <Icon name='plus'/>
                Detalhes
              </Button>
              <Button color='green' icon='whatsapp' onClick={() => window.open("https://wa.me/"+this.props.empreendedor.contato, "_blank")}/>
            </Card.Content>
          </Card>
        )}
      </Subscribe>
    )
  }
}

export default EmpreendedorCard