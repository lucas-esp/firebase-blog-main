import '../ifsul/css/template-verde.css';
import '../ifsul/css/bootstrap.min.css';
import '../ifsul/css/icones-bmp-verde.css';
import '../ifsul/css/font-awesome.min.css';
import '../ifsul/css/barra-brasil.css';
import logoInformation from '../ifsul/images/acesso-a-informacao.png';
import logoGoverno from '../ifsul/images/banner_rodapeFINAL.jpg';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-atalhos">
        <div className="container">
          <div className="pull-right voltar-ao-topo">
            <a href="#portal-siteactions">
              <i className="icon-chevron-up"></i> Voltar para o topo
            </a>
          </div>
        </div>
      </div>
      <div className="container container-menus">
        <div id="footer" className="row footer-menus">
          <span className="hide">Início da navegação de rodapé</span>

          <div className="span3">
            <nav className="row redes-sociais nav">
              <h2>Redes Sociais</h2>

              <ul>
                <li className="item-281">
                  <a href="/webmail">Webmail</a>
                </li>
                <li className="item-260">
                  <a href="http://intranet.ifsul.edu.br/">Intranet</a>
                </li>
                <li className="item-138">
                  <a href="https://www.facebook.com/IFSuloficial/" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
                <li className="item-257">
                  <a href="https://instagram.com/ifsul_oficial/" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li className="item-136">
                  <a href="https://twitter.com/ifsul" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </li>
                <li className="item-137">
                  <a href="https://www.youtube.com/channel/UC0VuyoyYbmKgFOG3nk1s1oQ" alt="">
                    YouTube
                  </a>
                </li>
                <li className="item-226">
                  <a href="/ultimas-noticias?format=feed&type=rss">RSS</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="span3">
            <nav className="row sobre nav">
              <h2>Sobre o site</h2>

              <ul>
                <li className="item-172">
                  <a href="/acessibilidade">Acessibilidade</a>
                </li>
                <li className="item-173">
                  <a href="/mapa-do-site">Mapa do site</a>
                </li>
              </ul>
            </nav>
          </div>

          <div style={{ float: 'right' }}>
            <a href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTU3OA==" target="_blank" rel="noreferrer">
              <img width="327px" src="/images/DTI/banner_qrcodeFooter.png" alt="" />
            </a>
          </div>
          <span className="hide">Fim da navegação de rodapé</span>
        </div>
      </div>
      <div className="footer-logos">
        <div className="container" style={{ textAlign: 'center' }}>
          <a href="http://www.acessoainformacao.gov.br/" className="logo-acesso pull-left">
            <img src={logoInformation} alt="Acesso a Informação" />
          </a>
          <div style={{ float: 'right' }}>
            <a href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTU3OA==" target="_blank" rel="noreferrer">
              <img width="327px" src={logoGoverno} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
