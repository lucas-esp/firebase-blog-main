import '../ifsul/css/template-verde.css';
import '../ifsul/css/bootstrap.min.css';
import '../ifsul/css/icones-bmp-verde.css';
import '../ifsul/css/font-awesome.min.css';
import '../ifsul/css/barra-brasil.css';

export const Header = () => {
  return (
    <div>
      <div id="barra-brasil">
        <div id="wrapper-barra-brasil">
          <div className="brasil-flag">
            <a href="https://gov.br" className="link-barra">
              Brasil
            </a>
          </div>
          <nav>
            <ul id="lista-barra-brasil" className="list">
              <li>
                <a href="#" id="menu-icon"></a>
              </li>
              <li className="list-item first">
                <a href="http://www.saude.gov.br/coronavirus" style={{ color: 'red' }}>
                  CORONAVÍRUS (COVID-19)
                </a>
              </li>
              <li className="list-item">
                <a href="http://www.simplifique.gov.br" className="link-barra">
                  Simplifique!
                </a>
              </li>
              <li className="list-item">
                <a href="https://www.gov.br/pt-br/participacao-social/" className="link-barra">
                  Participe
                </a>
              </li>
              <li className="list-item">
                <a href="http://www.acessoainformacao.gov.br" className="link-barra">
                  Acesso à informação
                </a>
              </li>
              <li className="list-item">
                <a href="http://www.planalto.gov.br/legislacao" className="link-barra">
                  Legislação
                </a>
              </li>
              <li className="list-item last last-item">
                <a href="https://gov.br/pt-br/canais-do-executivo-federal" className="link-barra">
                  Canais
                </a>
              </li>
            </ul>
          </nav>
          <span id="brasil-vlibras">
            <a className="logo-vlibras" id="logovlibras" href="#"></a>
            <span className="link-vlibras">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" className="barralazy" data-src="//barra.brasil.gov.br/imagens/vlibras.gif" alt="" width="132" height="116" />
              &nbsp;
              <br />O conteúdo desse portal pode ser acessível em Libras usando o <a href="http://www.vlibras.gov.br">VLibras</a>
            </span>
          </span>
        </div>
      </div>
      {/* <div id="barra-brasil">
        <div id="barra-brasil" style={{ background: '#7F7F7F', height: '20px', padding: '0 0 0 10px', display: 'block' }}>
          <ul id="menu-barra-temp" style={{ listStyle: 'none' }}>
            <li style={{ display: 'inline', float: 'left', paddingRight: '10px', marginRight: '10px', borderRight: '1px solid #EDEDED' }}>
              <a href="http://brasil.gov.br" style={{ fontFamily: 'sans,sans-serif', textDecoration: 'none', color: 'white' }}>
                Portal do Governo Brasileiro
              </a>
            </li>
            <li>
              <a style={{ fontFamily: 'sans,sans-serif', textDecoration: 'none', color: 'white' }} href="http://epwg.governoeletronico.gov.br/barra/atualize.html">
                Atualize sua Barra de Governo
              </a>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="layout">
        <header>
          <div className="container">
            <div className="row-fluid accessibility-language-actions-container">
              <div className="span6 accessibility-container">
                <ul id="accessibility">
                  <li>
                    <a href="#content" id="link-conteudo">
                      Ir para o conteúdo
                      <span>1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#navigation" id="link-navegacao">
                      Ir para o menu
                      <span>2</span>
                    </a>
                  </li>
                  <li>
                    <a href="#portal-searchbox" id="link-buscar">
                      Ir para a busca
                      <span>3</span>
                    </a>
                  </li>
                  <li>
                    <a href="#footer" id="link-rodape">
                      Ir para o rodapé
                      <span>4</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="span6 language-and-actions-container">
                <h2 className="hide">GTranslate</h2>
                <div className="gtranslate_wrapper" id="gt-wrapper-296"></div>
                <h2 className="hide">Opções de acessibilidade</h2>
                <ul className="pull-right" id="portal-siteactions">
                  <li className="item-142">
                    <a href="/create">Criar post</a>
                  </li>
                  <li className="item-262">
                    <a href="/auth">Login</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row-fluid">
              <div id="logo" className="span8">
                <a href="/" title="SUL-RIO-GRANDENSE">
                  <span className="portal-title-1">Instituto Federal de Educação, Ciência e Tecnologia</span>
                  <h1 className="portal-title corto">SUL-RIO-GRANDENSE</h1>
                  <span className="portal-description"></span>
                </a>
              </div>
         <div className="span4">
             <div id="portal-searchbox" className="row">
         <h2 className="hidden">Buscar no portal</h2>
                  <form action="/" method="post" className="pull-right">
                    <fieldset>
                      <legend className="hide">Busca</legend>
                      <h2 className="hidden">Buscar no portal</h2>
                      <div className="input-append">
                        <label htmlFor="portal-searchbox-field" className="hide">
                          Busca:{' '}
                        </label>
                        <input type="text" id="portal-searchbox-field" className="searchField" placeholder="Buscar no portal" title="Buscar no portal" name="searchword" />
                        <button type="submit" className="btn searchButton">
                          <span className="hide">Buscar</span>
                          <i className="icon-search"></i>
                        </button>
                      </div>
                      <input type="hidden" name="task" value="search" />
                      <input type="hidden" name="option" value="com_search" />
                      <input type="hidden" name="Itemid" value="101" />
                    </fieldset>
                  </form>
                </div> 
                <div id="social-icons" className="row">
                  <h2 className="hidden">Redes Sociais</h2>
                  <ul className="pull-right">
                    <li className="portalredes-item item-281">
                      <a href="/webmail">
                        <i className="icon-webmail">
                          <span>Webmail</span>
                        </i>
                      </a>
                    </li>
                    <li className="portalredes-item item-260">
                      <a href="http://intranet.ifsul.edu.br/">
                        <i className="icon-intranet">
                          <span>Intranet</span>
                        </i>
                      </a>
                    </li>
                    <li className="portalredes-item item-138">
                      <a href="https://www.facebook.com/IFSuloficial/" target="_blank" rel="noopener noreferrer">
                        <i className="icon-facebook-sign">
                          <span>Facebook</span>
                        </i>
                      </a>
                    </li>
                    <li className="portalredes-item item-257">
                      <a href="https://instagram.com/ifsul_oficial/" target="_blank" rel="noopener noreferrer">
                        <i className="icon-instagram">
                          <span>Instagram</span>
                        </i>
                      </a>
                    </li>
                    <li className="portalredes-item item-136">
                      <a href="https://twitter.com/ifsul" target="_blank" rel="noopener noreferrer">
                        <i className="icon-twitter-sign">
                          <span>Twitter</span>
                        </i>
                      </a>
                    </li>
                    <li className="portalredes-item item-137">
                      <a href="https://www.youtube.com/channel/UC0VuyoyYbmKgFOG3nk1s1oQ" target="_blank" rel="noopener noreferrer">
                        <i className="icon-youtube">
                          <span>YouTube</span>
                        </i>
                      </a>
                    </li>
                    <li className="portalredes-item item-226">
                      <a href="/ultimas-noticias?format=feed&type=rss">
                        <i className="icon-rss-sign">
                          <span>RSS</span>
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
