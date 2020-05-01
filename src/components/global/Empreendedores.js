import React from 'react'
import {Icon} from 'semantic-ui-react'
import {Subscribe} from 'unstated'
import EmpreendedoresContainer from '../containers/EmpreendedoresContainer'
import CardList from '../CardList'

class Empreendedores extends React.Component {
  state ={
    camaMesaBanho: []
  }

  render() {
    return (
      <Subscribe to={[EmpreendedoresContainer]}>
        {empreendedores => (
          <section id="portfolio">
            <div className="content-wrapper">
              <div className="inner-container container">
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="section-heading">
                      <h4>NOSSOS EMPREENDEDORES</h4>
                      <div className="line-dec"></div>
                      <p>Nossa rede de empreendedores possui diversos serviços como produtos de limpeza, alimentos entregues na sua casa,
                        atendimentos de saúde e serviços domésticos
                      </p>
                      <div className="filter-categories">
                        <ul className="project-filter">
                          <li className="filter" data-filter="all"><span>Todos</span></li>
                          <li className="filter" data-filter="cama-mesa-banho"><span><Icon name='home'/> Cama, mesa, banho</span></li>
                          <li className="filter" data-filter="exercicios-saude"><span><Icon name='heart'/> Saúde</span></li>
                          <li className="filter" data-filter="alimentos"><span><Icon name='food'/> Alimentos</span></li>
                          <li className="filter" data-filter="artesanato"><span><Icon name='paint brush'/> Artesanato</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="projects-holder-3">
                      <div className="projects-holder">
                        <div className="row">
                          {empreendedores.state.categorias.map((categoriaNome, index) => {
                            return <CardList key={index} categoria={categoriaNome}/>
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </section>
        )}
      </Subscribe>
    )
  }
}

export default Empreendedores