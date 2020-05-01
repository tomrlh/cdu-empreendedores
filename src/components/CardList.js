import React from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'
import EmpreendedorCard from './EmpreendedorCard'
import {Subscribe} from 'unstated'
import EmpreendedoresContainer from './containers/EmpreendedoresContainer'

class CardList extends React.Component {
  render() {
    return (
      <Subscribe to={[EmpreendedoresContainer]}>
        {empreendedores => (
          <div className={"col-md-6 col-sm-6 project-item mix " + this.props.categoria}>
            {empreendedores.state.empreendedores.filter(e => e.categoria == this.props.categoria)
              .map((empreendedor, index) => {
                return <EmpreendedorCard 
                key={index+empreendedor.nome}
                nome={empreendedor.nome}
                descricao={empreendedor.descricao}
                imagem={empreendedor.imagem}
              />
            })}
          </div>
        )}
      </Subscribe>
    )
  }
}

export default CardList