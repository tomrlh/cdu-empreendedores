import React from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function EmpreendedorCard(props) {
  return <div className="ui card">
    <div className="image"><img src={props.imagem} /></div>
    <div className="content">
      <div className="header-semantic">{props.nome}</div>
      <div className="meta">{props.categoria}</div>
      <div className="description">{props.descricao}</div>
    </div>
    <div className="extra content">
      <button className="ui teal basic button">Detalhes</button>
      <Button color='green' icon='whatsapp' onClick={()=> window.open("https://wa.me/"+props.contato, "_blank")}/>
    </div>
  </div>
}

export default EmpreendedorCard