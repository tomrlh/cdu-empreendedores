import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import {Subscribe} from 'unstated'
import EmpreendedoresContainer from './containers/EmpreendedoresContainer'

class DetalhesModal extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <Subscribe to={[EmpreendedoresContainer]}>
        {empreendedores => (
          <Modal dimmer={true} open={this.props.mostrar} onClose={this.close}
            style={{marginTop: '85px'}} closeIcon>
            <Modal.Content image scrolling>
              <Image size='medium' bordered src={empreendedores.state.empreendedorSelecionado.imagem} wrapped />

              <Modal.Description>
                <Header>{empreendedores.state.empreendedorSelecionado.nome}</Header>
                <p>
                  {empreendedores.state.empreendedorSelecionado.detalhes}
                </p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={this.close} negative>
                No
              </Button>
              <Button
                onClick={this.close}
                positive
                labelPosition='right'
                icon='checkmark'
                content='Yes'
              />
            </Modal.Actions>
          </Modal>
        )}
      </Subscribe>
    )
  }
}

export default DetalhesModal
