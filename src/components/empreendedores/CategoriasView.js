import React, { Component } from 'react'
import { Card, Grid, Icon, Menu, Segment } from 'semantic-ui-react'
import {Subscribe} from 'unstated'
import EmpreendedorCard from './EmreendedorCard'
import DetalhesModal from './DetalhesModal'
import EmpreendedoresContainer from '../containers/EmpreendedoresContainer'
import ImagensCarousel from './ImagensCarousel'

export default class CategoriasView extends Component {
  state = {
    activeItem: 'todas',
    categoria: 'todas',
    empreendedoresFiltrados: []
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  filtrarEmpreendedores(empreendedores, categoria=null) {
    if(categoria == null) {
      this.setState({empreendedoresFiltrados: empreendedores})
      return this.state.empreendedoresFiltrados
    }
    else {
      this.setState({empreendedoresFiltrados: empreendedores.filter(e => e.categoria == categoria)})
      return this.state.empreendedoresFiltrados
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      <Subscribe to={[EmpreendedoresContainer]}>
        {empreendedores => (
          <div>
            <Grid stackable>
              <Grid.Column width={4}>
                <Menu fluid vertical tabular>
                  <Menu.Item
                    name='todas'
                    active={activeItem === 'todas'}
                    onClick={(e, {name}) => {
                      this.handleItemClick(e, {name}); this.setState({categoria: 'todas'})}}
                  />
                  <Menu.Item
                    name='cama-mesa-banho'
                    active={activeItem === 'cama-mesa-banho'}
                    onClick={(e, {name}) => {this.handleItemClick(e, {name}); this.setState({categoria: 'cama-mesa-banho'})}}
                    ><Icon name='home' color='violet'/> Cama Mesa e Banho</Menu.Item>
                  <Menu.Item
                    name='alimentos'
                    active={activeItem === 'alimentos'}
                    onClick={(e, {name}) => {this.handleItemClick(e, {name}); this.setState({categoria: 'alimentos'})}}
                  ><Icon name='food' color='teal'/> Alimentos</Menu.Item>
                  <Menu.Item
                    name='artesanato'
                    active={activeItem === 'artesanato'}
                    onClick={(e, {name}) => {this.handleItemClick(e, {name}); this.setState({categoria: 'artesanato'})}}
                  ><Icon name='paint brush' color='olive'/> Artesanato</Menu.Item>
                  <Menu.Item
                    name='saude'
                    active={activeItem === 'saude'}
                    onClick={(e, {name}) => {this.handleItemClick(e, {name}); this.setState({categoria: 'saude'})}}
                  ><Icon name='heart' color='red'/> Saúde</Menu.Item>
                </Menu>
              </Grid.Column>

              <Grid.Column width={12}>
                <Segment style={{overflow: 'auto', maxHeight: 750 }}>
                  <Card.Group>
                    {empreendedores.state.empreendedores.filter(e => {
                      if(this.state.categoria == 'todas')
                        return e
                      else if(e.categoria == this.state.categoria)
                        return e
                    })
                    .map((empreendedor, index) => {
                      return <EmpreendedorCard 
                        key={index+empreendedor.nome}
                        empreendedor={empreendedor}
                      />
                    })}
                  </Card.Group>
                </Segment>
              </Grid.Column>
            </Grid>
            <DetalhesModal/>
          </div>
        )}
      </Subscribe>
    )
  }
}
