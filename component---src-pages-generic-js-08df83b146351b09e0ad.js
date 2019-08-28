;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    194: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        i = a.n(n),
        u = a(224),
        r = a.n(u),
        l = a(208),
        c = a(225),
        s = a(226),
        o = a.n(s)
      var m = (function(e) {
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
            return i.a.createElement(
              l.a,
              null,
              i.a.createElement(r.a, { title: 'Generic Page Title' }),
              i.a.createElement(c.a, null),
              i.a.createElement(
                'div',
                { id: 'main' },
                i.a.createElement(
                  'section',
                  { id: 'content', className: 'main' },
                  i.a.createElement(
                    'span',
                    { className: 'image main' },
                    i.a.createElement('img', { src: o.a, alt: '' })
                  ),
                  i.a.createElement('h2', null, 'Magna feugiat lorem'),
                  i.a.createElement(
                    'p',
                    null,
                    'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis fames ac ante ipsum primis in faucibus.'
                  ),
                  i.a.createElement(
                    'p',
                    null,
                    'Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Consequat leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit enim turpis lorem ipsum dolor sit amet feugiat. Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet est velit quis lorem.'
                  ),
                  i.a.createElement('h2', null, 'Tempus veroeros'),
                  i.a.createElement(
                    'p',
                    null,
                    'Cep risus aliquam gravida cep ut lacus amet. Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae ante vestibulum ante. Blandit. Ante accumsan nisi eu placerat gravida placerat adipiscing in risus fusce vitae ac mi accumsan nunc in accumsan tempor blandit aliquet aliquet lobortis. Ultricies blandit lobortis praesent turpis. Adipiscing accumsan adipiscing adipiscing ac lacinia cep. Orci blandit a iaculis adipiscing ac. Vivamus ornare laoreet odio vis praesent nunc lorem mi. Erat. Tempus sem faucibus ac id. Vis in blandit. Nascetur ultricies blandit ac. Arcu aliquam. Accumsan mi eget adipiscing nulla. Non vestibulum ac interdum condimentum semper commodo massa arcu.'
                  )
                )
              )
            )
          }),
          n
        )
      })(i.a.Component)
      t.default = m
    },
    200: function(e, t, a) {
      'use strict'
      a.d(t, 'b', function() {
        return s
      })
      var n = a(0),
        i = a.n(n),
        u = a(66),
        r = a.n(u)
      a.d(t, 'a', function() {
        return r.a
      }),
        a.d(t, 'd', function() {
          return u.withPrefix
        }),
        a.d(t, 'c', function() {
          return u.navigate
        })
      a(201), a(9).default.enqueue
      var l = i.a.createContext({})
      function c(e) {
        var t = e.staticQueryData,
          a = e.data,
          n = e.query,
          u = e.render,
          r = a ? a.data : t[n] && t[n].data
        return i.a.createElement(
          i.a.Fragment,
          null,
          r && u(r),
          !r && i.a.createElement('div', null, 'Loading (StaticQuery)')
        )
      }
      var s = function(e) {
        var t = e.data,
          a = e.query,
          n = e.render,
          u = e.children
        return i.a.createElement(l.Consumer, null, function(e) {
          return i.a.createElement(c, {
            data: t,
            query: a,
            render: n || u,
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
        i = a.n(n),
        u = a(199)
      a(200), a(207)
      t.a = function(e) {
        return i.a.createElement(
          'footer',
          { id: 'footer' },
          i.a.createElement(
            'section',
            null,
            i.a.createElement(
              'h2',
              null,
              i.a.createElement(u.a, { id: 'elerTitle' })
            ),
            i.a.createElement(
              'dl',
              { className: 'alt' },
              i.a.createElement(
                'dt',
                null,
                i.a.createElement(u.a, { id: 'elerCimTitle' })
              ),
              i.a.createElement(
                'dd',
                null,
                'Esztergom, Erzsébet kiralyné út 2'
              ),
              i.a.createElement(
                'dt',
                null,
                i.a.createElement(u.a, { id: 'elerCimPhoneTitle' })
              ),
              i.a.createElement(
                'dd',
                null,
                i.a.createElement(u.a, { id: 'elerPhone' })
              ),
              i.a.createElement('dt', null, 'E-mail'),
              i.a.createElement(
                'dd',
                null,
                i.a.createElement(
                  'a',
                  { href: '#' },
                  'szentannapanzio@gmail.com'
                )
              )
            ),
            i.a.createElement(
              'ul',
              { className: 'icons' },
              i.a.createElement(
                'li',
                null,
                i.a.createElement(
                  'a',
                  {
                    href:
                      'https://www.facebook.com/Szent-Anna-Vend%C3%A9gh%C3%A1z-Panzi%C3%B3-Sz%C3%A1ll%C3%A1s-Esztergom-396067390527467/',
                    className: 'icon fa-facebook alt',
                  },
                  i.a.createElement('span', { className: 'label' }, 'Facebook')
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
        i = a.n(n),
        u = a(94)
      t.default = function(e) {
        var t = e.location,
          a = e.pageResources
        return a
          ? i.a.createElement(
              u.a,
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
        i = a.n(n),
        u = (a(134), a(135), a(209), a(23), a(14), a(205)),
        r = a(210),
        l = a(200),
        c = a(199),
        s = a(218),
        o = a.n(s),
        m = (a(219),
        function(e) {
          var t = e.children,
            a = e.location,
            n = e.i18nMessages
          return i.a.createElement(l.b, {
            query: '2825539598',
            render: function(e) {
              var u = a.pathname,
                l = e.site.siteMetadata.languages,
                s = l.langs,
                m = l.defaultLangKey,
                d = Object(r.getCurrentLangKey)(s, m, u)
              console.log(d)
              var M = ('/' + d).replace('/' + m + '/', '/'),
                L = Object(r.getLangs)(s, d, Object(r.getUrlForLang)(M, u)).map(
                  function(e) {
                    return Object.assign({}, e, {
                      link: e.link.replace('/' + m + '/', '/'),
                    })
                  }
                ),
                w = o()()
              return (
                console.log(s),
                console.log(w),
                s.includes(w) && console.log(u),
                i.a.createElement(c.b, { locale: d, messages: n }, t(L))
              )
            },
            data: u,
          })
        }),
        d = (a(221), a(204))
      var M = (function(e) {
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
        var u = n.prototype
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
              a = t.children,
              n = (function(e, t) {
                if (null == e) return {}
                var a,
                  n,
                  i = {},
                  u = Object.keys(e)
                for (n = 0; n < u.length; n++)
                  (a = u[n]), t.indexOf(a) >= 0 || (i[a] = e[a])
                return i
              })(t, ['children'])
            return i.a.createElement(m, n, function(t) {
              return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  'div',
                  { className: 'body ' + e.state.loading },
                  i.a.createElement(
                    'div',
                    { id: 'wrapper' },
                    a(t),
                    i.a.createElement(d.a, null)
                  )
                )
              )
            })
          }),
          n
        )
      })(i.a.Component)
      t.a = M
    },
    215: function(e, t) {},
    216: function(e, t) {},
    217: function(e, t) {},
    220: function(e, t) {},
    225: function(e, t, a) {
      'use strict'
      var n = a(0),
        i = a.n(n)
      t.a = function(e) {
        return i.a.createElement(
          'header',
          { id: 'header' },
          i.a.createElement('h1', null, 'Generic'),
          i.a.createElement('p', null, 'Ipsum dolor sit amet nullam')
        )
      }
    },
    226: function(e, t, a) {
      e.exports = a.p + 'static/pic04-1609dea61acb9e992d846c586683a226.jpg'
    },
  },
])
//# sourceMappingURL=component---src-pages-generic-js-08df83b146351b09e0ad.js.map
