;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    196: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        l = a.n(n),
        s = a(224),
        r = a.n(s),
        i = a(208)
      a(225), a(226)
      var o = (function(e) {
        var t, a
        function n() {
          return e.apply(this, arguments) || this
        }
        return (
          (a = e),
          ((t = n).prototype = Object.create(a.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = a),
          (n.prototype.render = function() {
            return l.a.createElement(
              i.a,
              { location: this.props.location },
              l.a.createElement(r.a, { title: 'Házirend' }),
              l.a.createElement(
                'div',
                { id: 'main' },
                l.a.createElement(
                  'section',
                  { id: 'content', className: 'main' },
                  l.a.createElement(
                    'h2',
                    null,
                    'Szent Anna Panzió és Apartman ház házirendje'
                  ),
                  l.a.createElement('p', null, 'Kedves Vendégünk!'),
                  l.a.createElement(
                    'p',
                    null,
                    'Hogy biztosítsuk az Ön kellemes pihenését és elkerüljük az esetleges félreértéseket, szeretnénk,ha megismerkedne a házirendünkkel.'
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    'A foglalás igazolásánál feltételezhető, hogy Ön ismeri és elfogadja ezt a házirendet és be is fogja tartani . A házirend be nem tartása a foglalás lemondását és az egész összeg megfizettetését vonja magával , tekintet nélkül a szállás korábbi elhagyására. A tulajdonos minden információval és esetleges segítséggel az Önök szolgálatában áll a tartózkodás alatt. Javasoljuk, hogy a szállás minőségére vonatkozó esetleges kifogásokat rögtön érkezéskor hozzák a tulajdonos tudomására. Érkezéskor a vendég köteles a tulajdonosnak átadni az adatfelvétel miatt a személyes dokumentumait.'
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    'Kérjük a szálláshely épületét és eszközeit rendeltetésszerűen használni, a tűz-és balesetvédelmi szabályokat betartani.'
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    'A szállás területén okozott kárt a károkozó vagy annak törvényes képviselője köteles megtéríteni.'
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    'A szálláshely területére behozott személyes értéktárgyakért felelősséget nem vállalunk. A vendég köteles vigyázni a személyes holmijára és értékeire, amennyiben a szálláshelyen hagyja őket, vállalja a felelősséget az esetleges eltűnésükért. Ez a felelősség a tulajdonost nem terheli. Amennyiben elhagyja a szállás területét ,kötelező bezárni az ajtót és az ablakokat.'
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    'A szálláshelyre szigorúan tilos beengedni olyan személyeket, akik nem használói a szállásnak. Amennyiben a tulaj észrevesz olyan személyeket, akik nincsenek regisztrálva vagy nincsenek bejelentve a foglalás során, akkor a tulajdonosnak teljes körű jogában áll lemondani a szállást minden vendég részére.'
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    'Kérjük, hogy a szobák és a panzió felszerelését ( törölköző, pokróc ) ne vigyék ki a panzió területéről,kivéve esernyő.'
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    'A szálláshelyen este 22.00-8.00-ig hangoskodni, a többi vendég pihenését zavarni szigorúan tilos. Dohányozni az arra kijelölt helyeken szabad. A szálláson 18 éven aluli vendégek szeszes italt nem fogyaszthatnak , nem dohányozhatnak.'
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    'Talált tárgyakat kérjük leadni a szálláshely vezetőjének. Balesetről vagy egyéb rendkívüli eseményről a szállás vezetőjét azonnal tájékoztatni kell.'
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    'Nem engedélyezett a szálláshelyre bevinni fegyvert, gyúlékony és robbanó anyagot, illetve olyan anyagot, aminek szúrós, erős szaga van, valamint olyan készüléket ami étel készítésére szolgál( főzőlap) vagy más elektromos készüléket a tulajdonos beleegyezése nélkül.'
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    'A szállásról kizárható az a személy, aki bűncselekményt vagy szándékos rongálást követ el, saját vagy mások testi épségét veszélyezteti, 22.00-8.00 óra között a pihenni vágyó vendégeket zavarja.'
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    'A szállás területe és az épület előtti utcarész kamerával megfigyelt terület.'
                  ),
                  l.a.createElement('p', null, ' Kellemes pihenést kívánunk !')
                )
              )
            )
          }),
          n
        )
      })(l.a.Component)
      t.default = o
    },
    200: function(e, t, a) {
      'use strict'
      a.d(t, 'b', function() {
        return u
      })
      var n = a(0),
        l = a.n(n),
        s = a(66),
        r = a.n(s)
      a.d(t, 'a', function() {
        return r.a
      }),
        a.d(t, 'd', function() {
          return s.withPrefix
        }),
        a.d(t, 'c', function() {
          return s.navigate
        })
      a(201), a(9).default.enqueue
      var i = l.a.createContext({})
      function o(e) {
        var t = e.staticQueryData,
          a = e.data,
          n = e.query,
          s = e.render,
          r = a ? a.data : t[n] && t[n].data
        return l.a.createElement(
          l.a.Fragment,
          null,
          r && s(r),
          !r && l.a.createElement('div', null, 'Loading (StaticQuery)')
        )
      }
      var u = function(e) {
        var t = e.data,
          a = e.query,
          n = e.render,
          s = e.children
        return l.a.createElement(i.Consumer, null, function(e) {
          return l.a.createElement(o, {
            data: t,
            query: a,
            render: n || s,
            staticQueryData: e,
          })
        })
      }
    },
    201: function(e, t, a) {
      var n
      e.exports = ((n = a(206)) && n.default) || n
    },
    204: function(e, t, a) {
      'use strict'
      var n = a(0),
        l = a.n(n),
        s = a(199)
      a(200), a(207)
      t.a = function(e) {
        return l.a.createElement(
          'footer',
          { id: 'footer' },
          l.a.createElement(
            'section',
            null,
            l.a.createElement(
              'h2',
              null,
              l.a.createElement(s.a, { id: 'elerTitle' })
            ),
            l.a.createElement(
              'dl',
              { className: 'alt' },
              l.a.createElement(
                'dt',
                null,
                l.a.createElement(s.a, { id: 'elerCimTitle' })
              ),
              l.a.createElement(
                'dd',
                null,
                'Esztergom, Erzsébet kiralyné út 2'
              ),
              l.a.createElement(
                'dt',
                null,
                l.a.createElement(s.a, { id: 'elerCimPhoneTitle' })
              ),
              l.a.createElement(
                'dd',
                null,
                l.a.createElement(s.a, { id: 'elerPhone' })
              ),
              l.a.createElement('dt', null, 'E-mail'),
              l.a.createElement(
                'dd',
                null,
                l.a.createElement(
                  'a',
                  { href: '#' },
                  'szentannapanzio@gmail.com'
                )
              )
            ),
            l.a.createElement(
              'ul',
              { className: 'icons' },
              l.a.createElement(
                'li',
                null,
                l.a.createElement(
                  'a',
                  {
                    href:
                      'https://www.facebook.com/Szent-Anna-Vend%C3%A9gh%C3%A1z-Panzi%C3%B3-Sz%C3%A1ll%C3%A1s-Esztergom-396067390527467/',
                    className: 'icon fa-facebook alt',
                  },
                  l.a.createElement('span', { className: 'label' }, 'Facebook')
                )
              )
            )
          )
        )
      }
    },
    205: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: {
              languages: { defaultLangKey: 'hu', langs: ['en', 'hu'] },
            },
          },
        },
      }
    },
    206: function(e, t, a) {
      'use strict'
      a.r(t)
      a(23)
      var n = a(0),
        l = a.n(n),
        s = a(94)
      t.default = function(e) {
        var t = e.location,
          a = e.pageResources
        return a
          ? l.a.createElement(
              s.a,
              Object.assign({ location: t, pageResources: a }, a.json)
            )
          : null
      }
    },
    207: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iODVweCIgaGVpZ2h0PSI4NXB4IiB2aWV3Qm94PSIwIDAgODAgODAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwIDgwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQwLDBjMjIuMDkxLDAsNDAsMTcuOTA5LDQwLDQwUzYyLjA5MSw4MCw0MCw4MFMwLDYyLjA5MSwwLDQwUzE3LjkwOSwwLDQwLDB6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjOGNjOWYwIiBkPSJNNTAuMzc4LDMyLjU3NmMwLDEuMDA1LTAuODE1LDEuODIxLTEuODIxLDEuODIxYy0xLjAwNSwwLTEuODItMC44MTYtMS44Mi0xLjgyMQ0KCQkJYzAtMS4wMDUsMC44MTUtMS44MjEsMS44Mi0xLjgyMUM0OS41NjMsMzAuNzU1LDUwLjM3OCwzMS41NzEsNTAuMzc4LDMyLjU3NnogTTU0LjYyNywyNy4xMTNjMC0wLjM0MS0wLjMwNC0wLjYwNy0wLjY0Ni0wLjYwNw0KCQkJYy02LjYwMSwwLTEwLjIyMywxLjUxOC0xNC45NjQsNi4yNDFjLTEuMDgxLDEuMS0yLjIsMi4zNTItMy4zMzgsMy42OTlsLTcuMTg4LDAuMzc5Yy0wLjE5LDAuMDE5LTAuMzc5LDAuMTMzLTAuNDkzLDAuMzA0DQoJCQlsLTQuMjQ5LDcuMjg0Yy0wLjEzMywwLjIyOC0wLjA5NSwwLjUzLDAuMDk1LDAuNzM5bDEuMjE0LDEuMjE1YzAuMTE0LDAuMTEzLDAuMjg1LDAuMTcsMC40MzcsMC4xN2MwLjA1NywwLDAuMTE0LDAsMC4xNy0wLjAyDQoJCQlsNS4yMzUtMS42MTFsNS4zMyw1LjMzbC0xLjYxMiw1LjIzNmMtMC4wNTcsMC4yMDksMCwwLjQzNywwLjE1MiwwLjYwNmwxLjIxNCwxLjIxNGMwLjEzMywwLjExNCwwLjI4NCwwLjE3MSwwLjQzNiwwLjE3MQ0KCQkJYzAuMTE0LDAsMC4yMDgtMC4wMjEsMC4zMDQtMC4wNzVsNy4yODMtNC4yNWMwLjE3MS0wLjExMywwLjI4NC0wLjMwNCwwLjMwNS0wLjQ5MmwwLjM3OS03LjE5YzEuMzQ3LTEuMTM4LDIuNTk5LTIuMjU3LDMuNjk5LTMuMzM5DQoJCQlDNTIuODgyLDM3LjYwMyw1NC42MjcsMzMuNDExLDU0LjYyNywyNy4xMTN6Ii8+DQoJPC9nPg0KPC9zdmc+'
    },
    208: function(e, t, a) {
      'use strict'
      a(29), a(30), a(13), a(50)
      var n = a(0),
        l = a.n(n),
        s = (a(134), a(135), a(209), a(23), a(14), a(205)),
        r = a(210),
        i = a(200),
        o = a(199),
        u = a(218),
        c = a.n(u),
        z = (a(219),
        function(e) {
          var t = e.children,
            a = e.location,
            n = e.i18nMessages
          return l.a.createElement(i.b, {
            query: '2825539598',
            render: function(e) {
              var s = a ? a.pathname : '',
                i = e.site.siteMetadata.languages,
                u = i.langs,
                z = i.defaultLangKey,
                m = Object(r.getCurrentLangKey)(u, z, s)
              console.log(m)
              var g = ('/' + m).replace('/' + z + '/', '/'),
                y = Object(r.getLangs)(u, m, Object(r.getUrlForLang)(g, s)).map(
                  function(e) {
                    return Object.assign({}, e, {
                      link: e.link.replace('/' + z + '/', '/'),
                    })
                  }
                ),
                M = c()()
              return (
                console.log(u),
                console.log(M),
                u.includes(M) && console.log(s),
                l.a.createElement(o.b, { locale: m, messages: n }, t(y))
              )
            },
            data: s,
          })
        }),
        m = (a(221), a(204))
      var g = (function(e) {
        var t, a
        function n(t) {
          var a
          return (
            ((a = e.call(this, t) || this).state = { loading: 'is-loading' }), a
          )
        }
        ;(a = e),
          ((t = n).prototype = Object.create(a.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = a)
        var s = n.prototype
        return (
          (s.componentDidMount = function() {
            var e = this
            this.timeoutId = setTimeout(function() {
              e.setState({ loading: '' })
            }, 100)
          }),
          (s.componentWillUnmount = function() {
            this.timeoutId && clearTimeout(this.timeoutId)
          }),
          (s.render = function() {
            var e = this,
              t = this.props,
              a = t.children,
              n = (function(e, t) {
                if (null == e) return {}
                var a,
                  n,
                  l = {},
                  s = Object.keys(e)
                for (n = 0; n < s.length; n++)
                  (a = s[n]), t.indexOf(a) >= 0 || (l[a] = e[a])
                return l
              })(t, ['children'])
            return l.a.createElement(z, n, function(t) {
              return l.a.createElement(
                l.a.Fragment,
                null,
                l.a.createElement(
                  'div',
                  { className: 'body ' + e.state.loading },
                  l.a.createElement(
                    'div',
                    { id: 'wrapper' },
                    a(t),
                    l.a.createElement(m.a, null)
                  )
                )
              )
            })
          }),
          n
        )
      })(l.a.Component)
      t.a = g
    },
    215: function(e, t) {},
    216: function(e, t) {},
    217: function(e, t) {},
    220: function(e, t) {},
    225: function(e, t, a) {
      'use strict'
      var n = a(0),
        l = a.n(n)
      t.a = function(e) {
        return l.a.createElement(
          'header',
          { id: 'header' },
          l.a.createElement('h1', null, 'Generic'),
          l.a.createElement('p', null, 'Ipsum dolor sit amet nullam')
        )
      }
    },
    226: function(e, t, a) {
      e.exports = a.p + 'static/pic04-1609dea61acb9e992d846c586683a226.jpg'
    },
  },
])
//# sourceMappingURL=component---src-pages-hazirend-js-b58b9dd87429cb09c0d9.js.map
