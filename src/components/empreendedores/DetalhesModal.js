import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import {Subscribe} from 'unstated'
import EmpreendedoresContainer from '../containers/EmpreendedoresContainer'
import ImagensCarousel from './ImagensCarousel'

class DetalhesModal extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <Subscribe to={[EmpreendedoresContainer]}>
        {empreendedores => (
          <Modal dimmer={true} open={empreendedores.state.mostrarDetalhesModal} onClose={this.close}>
            <Modal.Content image scrolling>
              <Image
                wrapped
                size='medium'
                src={empreendedores.state.empreendedorSelecionado.imagem}
              />
              <Modal.Description>
                <Header>{empreendedores.state.empreendedorSelecionado.nome}</Header>
                <p>
                {empreendedores.state.empreendedorSelecionado.detalhes}
                </p>
                <ImagensCarousel/>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button basic color='black' icon onClick={() => {empreendedores.setMostrarDetalhesModal(false); this.close()}}>
                <Icon name='close'/> Fechar
              </Button>
              <Button
                positive
                icon='whatsapp'
                content="Abrir chat"
                onClick={() => window.open("https://wa.me/"+empreendedores.state.empreendedorSelecionado.contato, "_blank")}
              />
            </Modal.Actions>
          </Modal>
        )}
      </Subscribe>
    )
  }
}

export default DetalhesModal
