import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import {Subscribe} from 'unstated'
import EmpreendedoresContainer from './containers/EmpreendedoresContainer'

class EmpreendedorCard extends React.Component {
  render() {
    return (
      <Subscribe to={[EmpreendedoresContainer]}>
        {empreendedores => (
          <div className="ui card" style={{marginBottom: '20px'}}>
            <div className="image"><img src={this.props.empreendedor.imagem} /></div>
            <div className="content">
              <div className="header-semantic">{this.props.empreendedor.nome}</div>
              <div className="meta">{this.props.empreendedor.categoria}</div>
              <div className="description">{this.props.empreendedor.descricao}</div>
            </div>
            <div className="extra content">
              <Button basic color='green'onClick={() => {
                empreendedores.setMostrarDetalhesModal(true)
                empreendedores.setEmpreendedorSelecionado(this.props.empreendedor)
              }}>
                <Icon name='plus'/>
                Detalhes
              </Button>
              <Button color='green' icon='whatsapp' onClick={() => window.open("https://wa.me/"+this.props.empreendedor.contato, "_blank")}/>
            </div>
          </div>
        )}
      </Subscribe>
    )
  }
}

export default EmpreendedorCard