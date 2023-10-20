/** @version 2.2.25 @source http://softwarepublico.gov.br/gitlab/govbr/barra-govbr/ @license magnet:?xt=urn:btih:90dc5c0be029de84e523b9b3922520e79e0e6f08&dn=cc0.txt CC0 */ !(function () {
  var a, i, t, r, e;
  (a = document.getElementById('barra-brasil')) &&
    (a.removeAttribute('style'),
    (a.innerHTML =
      '<div id="wrapper-barra-brasil"><div class="brasil-flag"><a href="https://gov.br" class="link-barra">Brasil</a></div><nav><ul id="lista-barra-brasil" class="list"><li><a href="#" id="menu-icon"></a></li><li class="list-item first"><a href="http://www.saude.gov.br/coronavirus" style="color:red;">CORONAV&Iacute;RUS (COVID-19)</a></li><li class="list-item"><a href="http://www.simplifique.gov.br" class="link-barra">Simplifique!</a></li><li class="list-item"><a href="https://www.gov.br/pt-br/participacao-social/" class="link-barra">Participe</a></li><li class="list-item"><a href="http://www.acessoainformacao.gov.br" class="link-barra">Acesso &agrave; informa&ccedil;&atilde;o</a></li><li class="list-item"><a href="http://www.planalto.gov.br/legislacao" class="link-barra">Legisla&ccedil;&atilde;o</a></li><li class="list-item last last-item"><a href="https://gov.br/pt-br/canais-do-executivo-federal" class="link-barra">Canais</a></li></ul></nav><span id="brasil-vlibras"><a class="logo-vlibras" id="logovlibras" href="#"></a><span class ="link-vlibras"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" class="barralazy" data-src="//barra.brasil.gov.br/imagens/vlibras.gif" width="132" height="116">&nbsp;<br>O conte&uacute;do desse portal pode ser acess&iacute;vel em Libras usando o <a href="http://www.vlibras.gov.br">VLibras</a></span></span></div>'),
    (t = document.getElementsByTagName('head')[0])),
    (function (a) {
      var i, t, r, e, l, s, M, A;
      for (
        i = function (a, i) {
          var t, r, e, l, s, M;
          if (document.querySelectorAll) i = document.querySelectorAll(a);
          else {
            for ((t = (l = document).styleSheets[0] || l.createStyleSheet()).addRule(a, 'f:b'), r = 0, e = [], s = (M = l.all).length; r < s; ) M[r].currentStyle.f && e.push(M[r]), r++;
            t.removeRule(0), (i = e);
          }
          return i;
        },
          t = function (i, t) {
            a.addEventListener ? document.getElementById('logovlibras').addEventListener(i, t, !1) : a.attachEvent ? document.getElementById('logovlibras').attachEvent('on' + i, t) : (this['on' + i] = t);
          },
          l = new Array(),
          A = i('img.barralazy'),
          M = function () {
            var a;
            for (a = 0; a < l.length; )
              r(l[a]) &&
                s(l[a], function () {
                  l.splice(a, a);
                }),
                a++;
          },
          s = function (a, i) {
            var t, r;
            (t = new Image()),
              (r = a.getAttribute('data-src')),
              (t.onload = function () {
                a.parent ? a.parent.replaceChild(t, a) : (a.src = r), i && i();
              }),
              (t.src = r);
          },
          r = function (i) {
            var t;
            return 0 <= (t = i.getBoundingClientRect()).top && 0 <= t.left && t.top <= (a.innerHeight || document.documentElement.clientHeight);
          },
          e = 0;
        e < A.length;

      )
        l.push(A[e]), e++;
      t('click', M), t('mouseover', M), t('focus', M);
    })(this),
    (r = function () {
      return window.VLibras.Widget('https://vlibras.gov.br/app2', 'https://vlibras.gov.br/config/default_logo.json');
    }),
    ((i = document.createElement('div')).innerHTML = '<div vw class="enabled"><div vw-access-button class="active"></div><div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div><div class="vw-links"><ul></ul></div></div></div>'),
    document.body.appendChild(i),
    (e = document.createElement('script')).setAttribute('src', 'https://vlibras.gov.br/app2/vlibras-plugin.js'),
    (e.type = 'text/javascript'),
    (e.onload = r),
    document.body.appendChild(e),
    (window._barrabrasil = {
      insere_css: function (a) {
        var i;
        return (i = document.createElement('style')).setAttribute('type', 'text/css'), i.setAttribute('media', 'all'), i.appendChild(document.createTextNode(a)), t.appendChild(i);
      },
    });
})(),
  window._barrabrasil.insere_css(
    '#barra-brasil div,#barra-brasil a,#barra-brasil ul,#barra-brasil li{margin:0;padding:0;font-size:100%;font-family:inherit;vertical-align:baseline;border:none}#barra-brasil ul{list-style:none}@font-face{font-family:"Open Sans";font-style:normal;font-weight:700;font-display:swap;src:local("Open Sans Bold"),local("OpenSans-Bold"),url("//barra.brasil.gov.br/static/opensans-bold.woff") format("woff")}#barra-brasil{height:32px;background:#f1f1f1;font-weight:bold;font-size:12px;line-height:32px;font-family:"Open Sans",Arial,Helvetica,sans-serif;border-bottom:1px solid #dfdfdf;box-sizing:content-box}#barra-brasil a{text-decoration:none}body.contraste #barra-brasil,body.contraste .link-vlibras{background:#000 !important}body.contraste #barra-brasil .link-barra,body.contraste #barra-brasil .link-vlibras{color:#FF0 !important;text-decoration:underline}div#wrapper-barra-brasil{position:relative;margin:0 auto;width:100%;max-width:960px;height:100%}#barra-brasil .brasil-flag{float:left;padding:7px 0 6px;width:115px;border-right:2px solid #dfdfdf}#barra-brasil .brasil-flag .link-barra{display:block;padding-left:42px;width:43px;background:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2226%22%20height%3D%2219%22%20viewBox%3D%220%200%201000%20700%22%3E%3Cpath%20fill%3D%22%2300923F%22%20d%3D%22M0%200h1000v700H0z%22%2F%3E%3Cpath%20fill%3D%22%23F8C300%22%20d%3D%22M500%2085L85%20350l415%20265%20415-265L500%2085z%22%2F%3E%3Ccircle%20fill%3D%22%2328166F%22%20cx%3D%22499%22%20cy%3D%22350%22%20r%3D%22174%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M395%20296c103%200%20199%2038%20272%20101%202-8%204-17%205-26-75-61-172-98-277-98-18%200-36%201-53%203-3%208-6%2016-9%2025%2020-3%2041-4%2063-4z%22%2F%3E%3C%2Fsvg%3E") 8px center no-repeat;text-transform:uppercase;line-height:19px}#barra-brasil #brasil-vlibras{position:absolute;top:0;right:0}#barra-brasil #brasil-vlibras .logo-vlibras{background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOSIgaGVpZ2h0PSIyOSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2Ni4yNTAzOCwtMjMxLjY4NTk0KSI+PHBhdGggZD0ibTI5Mi40IDIzNy44Yy0wLjEgMC0wLjItMC4xLTAuMi0wLjIgMC0xLTEuOC0yLjYtNC4xLTIuNmwtMi41IDAtNC44IDMuNi00LjgtMy42LTIuNSAwYy0yLjQgMC00LjEgMS42LTQuMSAyLjYgMCAwLjEtMC4xIDAuMi0wLjIgMC4yLTAuMSAwLTAuMi0wLjEtMC4yLTAuMiAwLTEuNCAyLjEtMy4xIDQuNi0zLjFsMi40IDAgMC42LTAuNmMwLjEtMC4xIDAuMi0wLjEgMC4zIDBsMy45IDQuNiAzLjktNC42YzAuMS0wLjEgMC4yLTAuMSAwLjMgMGwwLjYgMC42IDIuNCAwYzIuNSAwIDQuNiAxLjcgNC42IDMuMSAwIDAuMS0wLjEgMC4yLTAuMiAwLjJ6bS0zIDEwLjRjLTAuMSAwLjctMC4yIDEtMC4zIDEgMCAwLjEtMC4xIDAuMS0wLjIgMC4xLTAuMSAwLTAuMS0wLjEtMC4xLTAuMiAwIDAgMC4xLTAuMyAwLjItMC45IDAuMS0wLjYtMC4yLTEuMS0wLjItMS4xIDAtMC4xIDAtMC4yIDAuMS0wLjIgMC4xIDAgMC4xIDAgMC4yIDAgMCAwIDAgMCAwIDAuMSAwIDAgMC4zIDAuNiAwLjIgMS4zem0tMSAwLjhjMCAwLjEtMC4xIDAuMS0wLjIgMC4xLTAuMSAwLTAuMS0wLjEtMC4xLTAuMiAwIDAgMC4xLTAuMyAwLjEtMC45IDAtMC42LTAuMy0xLjEtMC4zLTEuMSAwLTAuMSAwLTAuMiAwLjEtMC4yIDAuMSAwIDAuMSAwIDAuMiAwIDAgMCAwIDAgMCAwIDAgMCAwLjMgMC42IDAuMyAxLjMgMCAwLjctMC4xIDEtMC4yIDF6bS0wLjctMC40Yy0wLjMgMS4yLTAuOCAyLjItMC45IDIuNi0wLjIgMC40LTAuMyAwLjktMC4yIDIuMiAwIDEuMyAwIDIuMi0wLjEgMi41IDAgMC4yLTAuMiAwLjMtMC40IDAuMy0wLjIgMC0wLjMtMC4xLTAuNC0wLjQtMC4xLTAuNS0wLjMtMi42LTAuMy0yLjkgMC0wLjItMC4yLTAuNC0wLjMtMC40LTAuMSAwLTAuMiAwLjEtMC4zIDAuNS0wLjIgMC45LTAuNSAzLjEtMC42IDMuNi0wLjEgMC41LTAuMyAwLjYtMC40IDAuNi0wLjEgMC0wLjEgMC0wLjEgMCAwIDAgMCAwIDAgMC0wLjEgMC0wLjQgMC0wLjQtMC40IDAtMC41IDAuNC0zLjUgMC40LTMuOCAwLTAuMiAwLTAuMy0wLjEtMC4zLTAuMSAwLTAuMSAwLjEtMC4yIDAuMi0wLjMgMC40LTEuNyAyLjktMi4xIDMuNy0wLjEgMC4yLTAuMiAwLjItMC40IDAuMi0wLjEgMC0wLjIgMC0wLjMtMC4xLTAuMS0wLjEtMC4zLTAuNC0wLjItMC42IDAuMS0wLjIgMS41LTMuNCAxLjctMy44IDAuMS0wLjMgMC4xLTAuNS0wLjEtMC41LTAuMSAwLTAuMiAwLjEtMC40IDAuMi0wLjUgMC41LTIuNCAyLjUtMi43IDIuNy0wLjEgMC4xLTAuMiAwLjItMC4zIDAuMi0wLjEgMC0wLjItMC4xLTAuMy0wLjItMC4yLTAuMi0wLjItMC40LTAuMS0wLjYgMC4yLTAuMiAyLjYtMy4zIDMtNC4xIDAuNC0wLjcgMS0xLjktMC4yLTEuOS0wLjEgMC0wLjEgMC0wLjIgMC0wLjUgMC0wLjggMC4xLTEuMSAwLjEtMC41IDAtMC43LTAuMS0wLjgtMC4xLTAuMi0wLjEtMC42LTAuMy0wLjUtMC42IDAuMS0wLjIgMC43LTAuMSAxLTAuMiAwLjItMC4xIDAuMi0wLjEgMC4yLTAuMSAwIDAgMS4xLTAuMyAxLjgtMC43IDAuNy0wLjQgMi4zLTEuMSAyLjctMS4xIDAuMiAwIDAuNC0wLjEgMC42LTAuMSAwLjMgMCAwLjYgMCAwLjcgMC4xIDAuMyAwLjEgMC42IDAuOSAyIDEuNSAwIDAgMC42IDAuNiAwLjMgMS44em0tMTEuNyAyLjJjLTAuNC0xLjItMC42LTIuMy0wLjYtMi43LTAuMS0wLjQtMC4zLTAuOS0xLTEuOS0wLjctMS0xLjItMS44LTEuMy0yLjEtMC4xLTAuMiAwLjEtMC41IDAuNC0wLjUgMC4xIDAgMC4yIDAgMC4zIDAuMiAwLjQgMC40IDEuNyAyIDEuOSAyLjIgMC4xIDAuMSAwLjMgMC4yIDAuNCAwLjIgMC4yIDAgMC4yLTAuMSAwLjEtMC42LTAuMy0wLjktMS4zLTIuOS0xLjUtMy4zLTAuMy0wLjcgMC4xLTAuNyAwLjEtMC43IDAgMCAwLjEtMC4xIDAuMi0wLjEgMC4xIDAgMC4yIDAgMC4zIDAuMiAwLjIgMC40IDEuNiAzLjIgMS44IDMuNCAwLjEgMC4xIDAuMiAwLjIgMC4zIDAuMiAwLjEgMCAwLjEtMC4xIDAuMS0wLjMgMC0wLjUtMC4yLTMuMy0wLjMtNC4yIDAtMC4zIDAuMy0wLjUgMC41LTAuNSAwIDAgMCAwIDAgMCAwLjIgMCAwLjQgMC4yIDAuNSAwLjQgMC4xIDAuMiAwLjYgMy43IDAuNyA0LjIgMCAwLjIgMC4yIDAuNCAwLjMgMC40IDAuMSAwIDAuMi0wLjEgMC4zLTAuNCAwLjEtMC43IDAuNy0zLjQgMC43LTMuNyAwLTAuMyAwLjItMC40IDAuNC0wLjQgMCAwIDAuMSAwIDAuMSAwIDAuMiAwIDAuNCAwLjIgMC40IDAuNSAwIDAuMy0wLjMgMy43LTAuMiA0LjgtMC41IDAuMi0xIDAuNC0xLjMgMC40bDAgMCAwIDAtMC4yIDAuMWMwIDAtMC4xIDAtMC4yIDAtMC40IDAtMSAwLTEuMyAwLjYtMC4xIDAuMy0wLjIgMC42LTAuMSAwLjggMC4yIDAuNSAwLjggMC44IDAuOSAwLjkgMCAwIDAgMCAwIDAgMC4yIDAuMSAwLjUgMC4yIDEuMSAwLjIgMC4zIDAgMC42IDAgMS4xLTAuMS0wLjEgMC4yLTAuMiAwLjQtMC4zIDAuNmwtMC4xIDAuMWMtMC4yIDAuMy0wLjggMS4yLTEuOCAyLjUtMC4yIDAtMC4zIDAtMC41IDAtMC4zIDAtMC42IDAtMC45IDAuMSAwIDAtMC44LTAuMS0xLjMtMS4zem0wLjggMi4yYzAgMC4xLTAuMSAwLjEtMC4yIDAuMSAwIDAgMCAwLTAuMSAwIDAgMC0wLjYtMC4yLTEtMC44LTAuNC0wLjYtMC41LTAuOS0wLjUtMC45IDAtMC4xIDAtMC4yIDAuMS0wLjIgMC4xIDAgMC4yIDAgMC4yIDAuMSAwIDAgMC4xIDAuMyAwLjQgMC44IDAuNCAwLjUgMC45IDAuNyAwLjkgMC43IDAuMSAwIDAuMSAwLjEgMC4xIDAuMnptLTAuOSAwLjRjMCAwLjEtMC4xIDAuMS0wLjEgMC4xIDAgMC0wLjEgMC0wLjEgMCAwIDAtMC42LTAuMy0wLjktMC45LTAuNC0wLjYtMC40LTAuOS0wLjQtMSAwLTAuMSAwLjEtMC4yIDAuMS0wLjIgMC4xIDAgMC4yIDAuMSAwLjIgMC4xIDAgMCAwIDAuMyAwLjQgMC44IDAuMyAwLjUgMC44IDAuOCAwLjggMC44IDAuMSAwIDAuMSAwLjEgMC4xIDAuMnptMTQuOS0yMS44LTIwLjIgMGMtMi40IDAtNC40IDItNC40IDQuNGwwIDIwLjJjMCAyLjQgMiA0LjQgNC40IDQuNGwyMC4yIDBjMi40IDAgNC40LTIgNC40LTQuNGwwLTIwLjJjMC0yLjQtMi00LjQtNC40LTQuNCIgZmlsbD0iIzFjNGY5YyIvPjwvZz48L3N2Zz4K") 8px center no-repeat;position:absolute;top:0;right:0;width:43px;height:32px;display:block}#barra-brasil #brasil-vlibras .link-vlibras{height:0;top:32px;transition:0.1s;width:166px !important;display:block;border:2px solid #dfdfdf;color:#606060;visibility:hidden;position:relative}#barra-brasil #brasil-vlibras .link-vlibras a:hover,#barra-brasil #brasil-vlibras .link-vlibras a:focus,#barra-brasil #brasil-vlibras .link-vlibras a:active{visibility:visible;background:#f1f1f1;z-index:8}#barra-brasil #brasil-vlibras .logo-vlibras:hover+.link-vlibras,#barra-brasil #brasil-vlibras .logo-vlibras:active+.link-vlibras,#barra-brasil #brasil-vlibras .logo-vlibras:focus+.link-vlibras,#barra-brasil #brasil-vlibras .link-vlibras:hover,#barra-brasil #brasil-vlibras .link-vlibras:active,#barra-brasil #brasil-vlibras .link-vlibras:focus{width:132px !important;height:50px !important;display:inline-table;border:2px solid #dfdfdf;padding:10px 24px 10px 24px;visibility:visible;background:#f1f1f1;z-index:8;line-height:1.75em}#barra-brasil .eselo{position:absolute;top:0;right:44px;display:block;font-size:1.25em;color:blue}#barra-brasil .acesso-info{position:absolute;left:130px}#barra-brasil .list{position:absolute;top:0;right:40px;width:auto}#barra-brasil .list-eselo{right:90px !important}#barra-brasil .list .first{border-left:2px solid #dfdfdf}#barra-brasil .list-item{display:inline-block;height:32px;line-height:32px;border-right:2px solid #dfdfdf}#barra-brasil .list-item a{padding:8px 15px 8px 13px}#barra-brasil .link-barra{color:#606060}#barra-brasil #menu-icon{position:absolute;top:3px;border-top:15px double #606060;border-bottom:5px solid #606060;display:none;width:20px;right:5px}@media only screen and (max-width: 959px){#barra-brasil #menu-icon{display:inline-block;padding:5px 3px 0px 3px}#barra-brasil .list .first{border-left:1px solid #dfdfdf}#barra-brasil nav:hover #menu-icon,#barra-brasil nav:active #menu-icon,#barra-brasil nav:focus #menu-icon{background-color:#DDD}body.contraste #barra-brasil nav:hover #menu-icon,body.contraste #barra-brasil nav:active #menu-icon,body.contraste #barra-brasil nav:focus #menu-icon{background-color:#606060 !important}#barra-brasil ul.list,#barra-brasil ul.list:active,#barra-brasil ul.list:focus{overflow:hidden;height:0px;transition:0.3s;padding-top:32px;width:auto;position:absolute;z-index:9}#barra-brasil .list-item{display:block;text-align:center;height:30px;background:#EEE;border:1px solid #dfdfdf}#barra-brasil .list-item a{padding:8px 30px 8px 28px}body.contraste #barra-brasil .list-item{background:#000 !important}body.contraste #menu-icon{border-top:15px double #fff !important;border-bottom:5px solid #fff !important}#barra-brasil .list a:active li,#barra-brasil .list a:focus li,#barra-brasil .list a:hover li{background:#DDD}body.contraste #barra-brasil .list a:active li,body.contraste #barra-brasil .list a:focus li,body.contraste #barra-brasil .list a:hover li{background:#606060 !important}#barra-brasil nav:active ul.list,#barra-brasil nav:focus ul.list,#barra-brasil nav:hover ul.list{height:165px;transition:0.5s}div#wrapper-barra-brasil{overflow:visible}}@media screen and (min-width: 960px){#wrapper-barra-brasil{width:960px}}@media print{#barra-brasil .list{display:none}#barra-brasil .acesso-info .link-barra:after{content:" Barra GovBr"}}'
  ),
  (function () {
    var a;
    (a = document.getElementById('footer-brasil')) &&
      (a.innerHTML = '<div id="wrapper-footer-brasil"><a href="http://www.acessoainformacao.gov.br/"><span class="logo-acesso-footer"></span></a><a class="logo-governo-federal" href="http://www.brasil.gov.br/" alt="Governo Federal" title="Governo Federal"></a></div>'),
      (window._footerbrasil = {
        insere_css: function (a) {
          var i;
          return (i = document.createElement('style')).setAttribute('type', 'text/css'), i.setAttribute('media', 'all'), i.appendChild(document.createTextNode(a)), document.getElementsByTagName('head')[0].appendChild(i);
        },
      });
  })(),
  window._footerbrasil.insere_css(
    'div#wrapper-footer-brasil{position:relative;overflow:hidden;margin:0 auto;width:auto;padding:0 20px;max-width:960px}#wrapper-footer-brasil .logo-acesso-footer{float:left;width:117px;background:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20117%2049%22%20height%3D%2249%22%20width%3D%22117%22%20shape-rendering%3D%22geometricPrecision%22%20text-rendering%3D%22geometricPrecision%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%3C!%5BCDATA%5B.a%20%7Bfont%3A%20normal%20bold%2011px%20Open%20Sans%2C%20sans-serif%3B%7D%5D%5D%3E%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ccircle%20cx%3D%2222%22%20cy%3D%2223%22%20r%3D%2222%22%20fill%3D%22%23f6a800%22%2F%3E%3Cpath%20style%3D%22stroke%3A%23f6a800%3Bstroke-width%3A4%3Bstroke-linejoin%3Around%3B%22%20d%3D%22m%204%2C43%203%2C-6%204%2C3%20z%22%2F%3E%3Ccircle%20r%3D%224.5%22%20cy%3D%2211%22%20cx%3D%2222%22%20fill%3D%22%2300692c%22%2F%3E%3Cg%20fill%3D%22%23fff%22%3E%3Ctext%20x%3D%2248%22%20y%3D%2222%22%3E%3Ctspan%20class%3D%22a%22%20y%3D%2218%22%3EAcesso%20%C3%A0%3C%2Ftspan%3E%3Ctspan%20class%3D%22a%22%20x%3D%2248%22%20y%3D%2231%22%3EInforma%C3%A7%C3%A3o%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fg%3E%3Cpath%20style%3D%22stroke%3A%2300692c%3Bstroke-width%3A9%3Bstroke-linecap%3Around%3B%22%20d%3D%22m%2022%2C23%20v%2013%22%2F%3E%3C%2Fsvg%3E") center no-repeat;height:49px}body.contraste #footer-brasil{background:#000 !important}@media screen and (min-width: 960px){#wrapper-footer-brasil{width:960px}}@media print{#wrapper-footer-brasil{border-top:2px solid #dfdfdf}#wrapper-footer-brasil:before{content:"Barra GovBr";color:#606060;font-size:12px;font-family:"Open Sans",Arial,Helvetica,sans-serif}}'
  );
/** @license-end */
