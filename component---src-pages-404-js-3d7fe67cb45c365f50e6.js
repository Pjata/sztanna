;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    193: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(0),
        r = n.n(a),
        u = n(207)
      t.default = function() {
        return r.a.createElement(u.a, null, function() {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement('h1', null, 'NOT FOUND'),
            r.a.createElement(
              'p',
              null,
              "You just hit a route that doesn't exist... the sadness."
            )
          )
        })
      }
    },
    199: function(e, t, n) {
      'use strict'
      n.d(t, 'b', function() {
        return M
      })
      var a = n(0),
        r = n.n(a),
        u = n(66),
        l = n.n(u)
      n.d(t, 'a', function() {
        return l.a
      }),
        n.d(t, 'd', function() {
          return u.withPrefix
        }),
        n.d(t, 'c', function() {
          return u.navigate
        })
      n(201), n(9).default.enqueue
      var c = r.a.createContext({})
      function i(e) {
        var t = e.staticQueryData,
          n = e.data,
          a = e.query,
          u = e.render,
          l = n ? n.data : t[a] && t[a].data
        return r.a.createElement(
          r.a.Fragment,
          null,
          l && u(l),
          !l && r.a.createElement('div', null, 'Loading (StaticQuery)')
        )
      }
      var M = function(e) {
        var t = e.data,
          n = e.query,
          a = e.render,
          u = e.children
        return r.a.createElement(c.Consumer, null, function(e) {
          return r.a.createElement(i, {
            data: t,
            query: n,
            render: a || u,
            staticQueryData: e,
          })
        })
      }
    },
    201: function(e, t, n) {
      var a
      e.exports = ((a = n(205)) && a.default) || a
    },
    203: function(e, t, n) {
      'use strict'
      var a = n(0),
        r = n.n(a),
        u = n(198)
      n(199), n(206)
      t.a = function(e) {
        return r.a.createElement(
          'footer',
          { id: 'footer' },
          r.a.createElement(
            'section',
            null,
            r.a.createElement(
              'h2',
              null,
              r.a.createElement(u.a, { id: 'elerTitle' })
            ),
            r.a.createElement(
              'dl',
              { className: 'alt' },
              r.a.createElement(
                'dt',
                null,
                r.a.createElement(u.a, { id: 'elerCimTitle' })
              ),
              r.a.createElement(
                'dd',
                null,
                'Esztergom, Erzsébet kiralyné út 2'
              ),
              r.a.createElement(
                'dt',
                null,
                r.a.createElement(u.a, { id: 'elerCimPhoneTitle' })
              ),
              r.a.createElement(
                'dd',
                null,
                r.a.createElement(u.a, { id: 'elerPhone' })
              ),
              r.a.createElement('dt', null, 'E-mail'),
              r.a.createElement(
                'dd',
                null,
                r.a.createElement(
                  'a',
                  { href: '#' },
                  'szentannapanzio@gmail.com'
                )
              )
            ),
            r.a.createElement(
              'ul',
              { className: 'icons' },
              r.a.createElement(
                'li',
                null,
                r.a.createElement(
                  'a',
                  {
                    href:
                      'https://www.facebook.com/Szent-Anna-Vend%C3%A9gh%C3%A1z-Panzi%C3%B3-Sz%C3%A1ll%C3%A1s-Esztergom-396067390527467/',
                    className: 'icon fa-facebook alt',
                  },
                  r.a.createElement('span', { className: 'label' }, 'Facebook')
                )
              )
            )
          )
        )
      }
    },
    204: function(e) {
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
    205: function(e, t, n) {
      'use strict'
      n.r(t)
      n(23)
      var a = n(0),
        r = n.n(a),
        u = n(95)
      t.default = function(e) {
        var t = e.location,
          n = e.pageResources
        return n
          ? r.a.createElement(
              u.a,
              Object.assign({ location: t, pageResources: n }, n.json)
            )
          : null
      }
    },
    206: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iODVweCIgaGVpZ2h0PSI4NXB4IiB2aWV3Qm94PSIwIDAgODAgODAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwIDgwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQwLDBjMjIuMDkxLDAsNDAsMTcuOTA5LDQwLDQwUzYyLjA5MSw4MCw0MCw4MFMwLDYyLjA5MSwwLDQwUzE3LjkwOSwwLDQwLDB6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjOGNjOWYwIiBkPSJNNTAuMzc4LDMyLjU3NmMwLDEuMDA1LTAuODE1LDEuODIxLTEuODIxLDEuODIxYy0xLjAwNSwwLTEuODItMC44MTYtMS44Mi0xLjgyMQ0KCQkJYzAtMS4wMDUsMC44MTUtMS44MjEsMS44Mi0xLjgyMUM0OS41NjMsMzAuNzU1LDUwLjM3OCwzMS41NzEsNTAuMzc4LDMyLjU3NnogTTU0LjYyNywyNy4xMTNjMC0wLjM0MS0wLjMwNC0wLjYwNy0wLjY0Ni0wLjYwNw0KCQkJYy02LjYwMSwwLTEwLjIyMywxLjUxOC0xNC45NjQsNi4yNDFjLTEuMDgxLDEuMS0yLjIsMi4zNTItMy4zMzgsMy42OTlsLTcuMTg4LDAuMzc5Yy0wLjE5LDAuMDE5LTAuMzc5LDAuMTMzLTAuNDkzLDAuMzA0DQoJCQlsLTQuMjQ5LDcuMjg0Yy0wLjEzMywwLjIyOC0wLjA5NSwwLjUzLDAuMDk1LDAuNzM5bDEuMjE0LDEuMjE1YzAuMTE0LDAuMTEzLDAuMjg1LDAuMTcsMC40MzcsMC4xN2MwLjA1NywwLDAuMTE0LDAsMC4xNy0wLjAyDQoJCQlsNS4yMzUtMS42MTFsNS4zMyw1LjMzbC0xLjYxMiw1LjIzNmMtMC4wNTcsMC4yMDksMCwwLjQzNywwLjE1MiwwLjYwNmwxLjIxNCwxLjIxNGMwLjEzMywwLjExNCwwLjI4NCwwLjE3MSwwLjQzNiwwLjE3MQ0KCQkJYzAuMTE0LDAsMC4yMDgtMC4wMjEsMC4zMDQtMC4wNzVsNy4yODMtNC4yNWMwLjE3MS0wLjExMywwLjI4NC0wLjMwNCwwLjMwNS0wLjQ5MmwwLjM3OS03LjE5YzEuMzQ3LTEuMTM4LDIuNTk5LTIuMjU3LDMuNjk5LTMuMzM5DQoJCQlDNTIuODgyLDM3LjYwMyw1NC42MjcsMzMuNDExLDU0LjYyNywyNy4xMTN6Ii8+DQoJPC9nPg0KPC9zdmc+'
    },
    207: function(e, t, n) {
      'use strict'
      n(29), n(30), n(13), n(50)
      var a = n(0),
        r = n.n(a),
        u = (n(134), n(135), n(208), n(23), n(14), n(204)),
        l = n(209),
        c = n(199),
        i = n(198),
        M = n(219),
        o = n.n(M),
        s = (n(220),
        function(e) {
          var t = e.children,
            n = e.location,
            a = e.i18nMessages
          return r.a.createElement(c.b, {
            query: '2825539598',
            render: function(e) {
              var u = n ? n.pathname : '',
                c = e.site.siteMetadata.languages,
                M = c.langs,
                s = c.defaultLangKey,
                L = Object(l.getCurrentLangKey)(M, s, u)
              console.log(L)
              var w = ('/' + L).replace('/' + s + '/', '/'),
                m = Object(l.getLangs)(M, L, Object(l.getUrlForLang)(w, u)).map(
                  function(e) {
                    return Object.assign({}, e, {
                      link: e.link.replace('/' + s + '/', '/'),
                    })
                  }
                ),
                j = o()()
              return (
                console.log(M),
                console.log(j),
                M.includes(j) && console.log(u),
                r.a.createElement(i.b, { locale: L, messages: a }, t(m))
              )
            },
            data: u,
          })
        }),
        L = (n(222), n(203))
      var w = (function(e) {
        var t, n
        function a(t) {
          var n
          return (
            ((n = e.call(this, t) || this).state = { loading: 'is-loading' }), n
          )
        }
        ;(n = e),
          ((t = a).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n)
        var u = a.prototype
        return (
          (u.componentDidMount = function() {
            var e = this
            this.timeoutId = setTimeout(function() {
              e.setState({ loading: '' })
            }, 100)
          }),
          (u.componentWillUnmount = function() {
            this.timeoutId && clearTimeout(this.timeoutId)
          }),
          (u.render = function() {
            var e = this,
              t = this.props,
              n = t.children,
              a = (function(e, t) {
                if (null == e) return {}
                var n,
                  a,
                  r = {},
                  u = Object.keys(e)
                for (a = 0; a < u.length; a++)
                  (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
                return r
              })(t, ['children'])
            return r.a.createElement(s, a, function(t) {
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  'div',
                  { className: 'body ' + e.state.loading },
                  r.a.createElement(
                    'div',
                    { id: 'wrapper' },
                    n(t),
                    r.a.createElement(L.a, null)
                  )
                )
              )
            })
          }),
          a
        )
      })(r.a.Component)
      t.a = w
    },
    216: function(e, t) {},
    217: function(e, t) {},
    218: function(e, t) {},
    221: function(e, t) {},
  },
])
//# sourceMappingURL=component---src-pages-404-js-3d7fe67cb45c365f50e6.js.map
