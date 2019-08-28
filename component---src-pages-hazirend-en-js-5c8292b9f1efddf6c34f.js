;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    194: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        o = a.n(n),
        r = a(233),
        l = a.n(r),
        i = a(207)
      a(246), a(247)
      var u = (function(e) {
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
            return o.a.createElement(
              i.a,
              { location: this.props.location },
              o.a.createElement(l.a, { title: 'Házirend' }),
              o.a.createElement(
                'div',
                { id: 'main' },
                o.a.createElement(
                  'section',
                  { id: 'content', className: 'main' },
                  o.a.createElement(
                    'h2',
                    null,
                    'Szent Anna Guesthouse and Apartman house rules'
                  ),
                  o.a.createElement('p', null, 'Dear Guest,'),
                  o.a.createElement(
                    'p',
                    null,
                    'To ensure your pleasant rest and to avoid it any misunderstanding, we would like you to familiarize yourself with guidelines.'
                  ),
                  o.a.createElement(
                    'p',
                    null,
                    'When you confirm your reservation, it is assumed that you know and you accept this policy and will abide by it. Not abiding to this rules will result in full charge for your reservation. On arrival, the guest is required to provide the owner with an ID document for checking.'
                  ),
                  o.a.createElement(
                    'p',
                    null,
                    'Please use the property and facilities as intended, obey fire and accident prevention regulations.'
                  ),
                  o.a.createElement(
                    'p',
                    null,
                    'In case of damage whether who has made the damage or who is responsible for who has made the damage has to pay for the harm.'
                  ),
                  o.a.createElement(
                    'p',
                    null,
                    'We are not responsible for any personal belongings. If you leave the guesthouse please close the door and window of your room.'
                  ),
                  o.a.createElement(
                    'p',
                    null,
                    'It is forbidden to accept guests who are not staying at the guesthouse. We preserve the right to cancel your stay, if we notice any non guests in the house.'
                  ),
                  o.a.createElement(
                    'p',
                    null,
                    'Please do not take out the room equipment (towels, blanket) of the pension area, except umbrellas.'
                  ),
                  o.a.createElement(
                    'p',
                    null,
                    'At 22:00 to 8:00 disturbing the silence prohibited.In the area of the hotel SMOKING IS PROHIBITED, it is only allowed outside at the assigned places. Guests under the age of 18 cannot consume alcohol or smoke in the pension area.'
                  ),
                  o.a.createElement(
                    'p',
                    null,
                    'The lost properties have to be given to the reception.'
                  ),
                  o.a.createElement(
                    'p',
                    null,
                    'Possession of weapons are forbidden.'
                  ),
                  o.a.createElement(
                    'p',
                    null,
                    'We kindly ask our guests that in case of comments about the hotel’s services, the behaviour of other guests, the look of the hotel rooms please immediately contact the reception where we will endeavour to solve the problem as soon as possible. We cannot help in case of follow-up comments after leaving the hotel.'
                  ),
                  o.a.createElement(
                    'p',
                    null,
                    'At the hotel area there are several cameras in use for security and safety purposes.'
                  ),
                  o.a.createElement(
                    'p',
                    null,
                    'Not following the rules above can result in full charge for your stay and in forced early leave.'
                  ),
                  o.a.createElement('p', null, ' We wish you a pleasent stay!')
                )
              )
            )
          }),
          n
        )
      })(o.a.Component)
      t.default = u
    },
    199: function(e, t, a) {
      'use strict'
      a.d(t, 'b', function() {
        return s
      })
      var n = a(0),
        o = a.n(n),
        r = a(66),
        l = a.n(r)
      a.d(t, 'a', function() {
        return l.a
      }),
        a.d(t, 'd', function() {
          return r.withPrefix
        }),
        a.d(t, 'c', function() {
          return r.navigate
        })
      a(201), a(9).default.enqueue
      var i = o.a.createContext({})
      function u(e) {
        var t = e.staticQueryData,
          a = e.data,
          n = e.query,
          r = e.render,
          l = a ? a.data : t[n] && t[n].data
        return o.a.createElement(
          o.a.Fragment,
          null,
          l && r(l),
          !l && o.a.createElement('div', null, 'Loading (StaticQuery)')
        )
      }
      var s = function(e) {
        var t = e.data,
          a = e.query,
          n = e.render,
          r = e.children
        return o.a.createElement(i.Consumer, null, function(e) {
          return o.a.createElement(u, {
            data: t,
            query: a,
            render: n || r,
            staticQueryData: e,
          })
        })
      }
    },
    201: function(e, t, a) {
      var n
      e.exports = ((n = a(205)) && n.default) || n
    },
    203: function(e, t, a) {
      'use strict'
      var n = a(0),
        o = a.n(n),
        r = a(198)
      a(199), a(206)
      t.a = function(e) {
        return o.a.createElement(
          'footer',
          { id: 'footer' },
          o.a.createElement(
            'section',
            null,
            o.a.createElement(
              'h2',
              null,
              o.a.createElement(r.a, { id: 'elerTitle' })
            ),
            o.a.createElement(
              'dl',
              { className: 'alt' },
              o.a.createElement(
                'dt',
                null,
                o.a.createElement(r.a, { id: 'elerCimTitle' })
              ),
              o.a.createElement(
                'dd',
                null,
                'Esztergom, Erzsébet kiralyné út 2'
              ),
              o.a.createElement(
                'dt',
                null,
                o.a.createElement(r.a, { id: 'elerCimPhoneTitle' })
              ),
              o.a.createElement(
                'dd',
                null,
                o.a.createElement(r.a, { id: 'elerPhone' })
              ),
              o.a.createElement('dt', null, 'E-mail'),
              o.a.createElement(
                'dd',
                null,
                o.a.createElement(
                  'a',
                  { href: '#' },
                  'szentannapanzio@gmail.com'
                )
              )
            ),
            o.a.createElement(
              'ul',
              { className: 'icons' },
              o.a.createElement(
                'li',
                null,
                o.a.createElement(
                  'a',
                  {
                    href:
                      'https://www.facebook.com/Szent-Anna-Vend%C3%A9gh%C3%A1z-Panzi%C3%B3-Sz%C3%A1ll%C3%A1s-Esztergom-396067390527467/',
                    className: 'icon fa-facebook alt',
                  },
                  o.a.createElement('span', { className: 'label' }, 'Facebook')
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
    205: function(e, t, a) {
      'use strict'
      a.r(t)
      a(23)
      var n = a(0),
        o = a.n(n),
        r = a(95)
      t.default = function(e) {
        var t = e.location,
          a = e.pageResources
        return a
          ? o.a.createElement(
              r.a,
              Object.assign({ location: t, pageResources: a }, a.json)
            )
          : null
      }
    },
    206: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iODVweCIgaGVpZ2h0PSI4NXB4IiB2aWV3Qm94PSIwIDAgODAgODAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwIDgwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQwLDBjMjIuMDkxLDAsNDAsMTcuOTA5LDQwLDQwUzYyLjA5MSw4MCw0MCw4MFMwLDYyLjA5MSwwLDQwUzE3LjkwOSwwLDQwLDB6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjOGNjOWYwIiBkPSJNNTAuMzc4LDMyLjU3NmMwLDEuMDA1LTAuODE1LDEuODIxLTEuODIxLDEuODIxYy0xLjAwNSwwLTEuODItMC44MTYtMS44Mi0xLjgyMQ0KCQkJYzAtMS4wMDUsMC44MTUtMS44MjEsMS44Mi0xLjgyMUM0OS41NjMsMzAuNzU1LDUwLjM3OCwzMS41NzEsNTAuMzc4LDMyLjU3NnogTTU0LjYyNywyNy4xMTNjMC0wLjM0MS0wLjMwNC0wLjYwNy0wLjY0Ni0wLjYwNw0KCQkJYy02LjYwMSwwLTEwLjIyMywxLjUxOC0xNC45NjQsNi4yNDFjLTEuMDgxLDEuMS0yLjIsMi4zNTItMy4zMzgsMy42OTlsLTcuMTg4LDAuMzc5Yy0wLjE5LDAuMDE5LTAuMzc5LDAuMTMzLTAuNDkzLDAuMzA0DQoJCQlsLTQuMjQ5LDcuMjg0Yy0wLjEzMywwLjIyOC0wLjA5NSwwLjUzLDAuMDk1LDAuNzM5bDEuMjE0LDEuMjE1YzAuMTE0LDAuMTEzLDAuMjg1LDAuMTcsMC40MzcsMC4xN2MwLjA1NywwLDAuMTE0LDAsMC4xNy0wLjAyDQoJCQlsNS4yMzUtMS42MTFsNS4zMyw1LjMzbC0xLjYxMiw1LjIzNmMtMC4wNTcsMC4yMDksMCwwLjQzNywwLjE1MiwwLjYwNmwxLjIxNCwxLjIxNGMwLjEzMywwLjExNCwwLjI4NCwwLjE3MSwwLjQzNiwwLjE3MQ0KCQkJYzAuMTE0LDAsMC4yMDgtMC4wMjEsMC4zMDQtMC4wNzVsNy4yODMtNC4yNWMwLjE3MS0wLjExMywwLjI4NC0wLjMwNCwwLjMwNS0wLjQ5MmwwLjM3OS03LjE5YzEuMzQ3LTEuMTM4LDIuNTk5LTIuMjU3LDMuNjk5LTMuMzM5DQoJCQlDNTIuODgyLDM3LjYwMyw1NC42MjcsMzMuNDExLDU0LjYyNywyNy4xMTN6Ii8+DQoJPC9nPg0KPC9zdmc+'
    },
    207: function(e, t, a) {
      'use strict'
      a(29), a(30), a(13), a(50)
      var n = a(0),
        o = a.n(n),
        r = (a(134), a(135), a(208), a(23), a(14), a(204)),
        l = a(209),
        i = a(199),
        u = a(198),
        s = a(219),
        c = a.n(s),
        w = (a(220),
        function(e) {
          var t = e.children,
            a = e.location,
            n = e.i18nMessages
          return o.a.createElement(i.b, {
            query: '2825539598',
            render: function(e) {
              var r = a ? a.pathname : '',
                i = e.site.siteMetadata.languages,
                s = i.langs,
                w = i.defaultLangKey,
                M = Object(l.getCurrentLangKey)(s, w, r)
              console.log(M)
              var d = ('/' + M).replace('/' + w + '/', '/'),
                m = Object(l.getLangs)(s, M, Object(l.getUrlForLang)(d, r)).map(
                  function(e) {
                    return Object.assign({}, e, {
                      link: e.link.replace('/' + w + '/', '/'),
                    })
                  }
                ),
                L = c()()
              return (
                console.log(s),
                console.log(L),
                s.includes(L) && console.log(r),
                o.a.createElement(u.b, { locale: M, messages: n }, t(m))
              )
            },
            data: r,
          })
        }),
        M = (a(222), a(203))
      var d = (function(e) {
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
        var r = n.prototype
        return (
          (r.componentDidMount = function() {
            var e = this
            this.timeoutId = setTimeout(function() {
              e.setState({ loading: '' })
            }, 100)
          }),
          (r.componentWillUnmount = function() {
            this.timeoutId && clearTimeout(this.timeoutId)
          }),
          (r.render = function() {
            var e = this,
              t = this.props,
              a = t.children,
              n = (function(e, t) {
                if (null == e) return {}
                var a,
                  n,
                  o = {},
                  r = Object.keys(e)
                for (n = 0; n < r.length; n++)
                  (a = r[n]), t.indexOf(a) >= 0 || (o[a] = e[a])
                return o
              })(t, ['children'])
            return o.a.createElement(w, n, function(t) {
              return o.a.createElement(
                o.a.Fragment,
                null,
                o.a.createElement(
                  'div',
                  { className: 'body ' + e.state.loading },
                  o.a.createElement(
                    'div',
                    { id: 'wrapper' },
                    a(t),
                    o.a.createElement(M.a, null)
                  )
                )
              )
            })
          }),
          n
        )
      })(o.a.Component)
      t.a = d
    },
    216: function(e, t) {},
    217: function(e, t) {},
    218: function(e, t) {},
    221: function(e, t) {},
    246: function(e, t, a) {
      'use strict'
      a(0)
    },
    247: function(e, t, a) {
      e.exports = a.p + 'static/pic04-1609dea61acb9e992d846c586683a226.jpg'
    },
  },
])
//# sourceMappingURL=component---src-pages-hazirend-en-js-5c8292b9f1efddf6c34f.js.map
