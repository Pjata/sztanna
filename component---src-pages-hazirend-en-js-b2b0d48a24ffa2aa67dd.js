;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    194: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(0),
        r = n.n(a),
        o = n(234),
        l = n.n(o),
        i = n(208),
        u = (n(247), n(248), n(210))
      var s = (function(e) {
        var t, n
        function a() {
          return e.apply(this, arguments) || this
        }
        return (
          (n = e),
          ((t = a).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n),
          (a.prototype.render = function() {
            return r.a.createElement(
              i.a,
              { location: this.props.location },
              function(e) {
                return r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(l.a, { title: 'Házirend' }),
                  r.a.createElement(u.a, { langs: e }),
                  r.a.createElement(
                    'div',
                    { id: 'main' },
                    r.a.createElement(
                      'section',
                      { id: 'content', className: 'main' },
                      r.a.createElement(
                        'h2',
                        null,
                        'Szent Anna Guesthouse and Apartman house rules'
                      ),
                      r.a.createElement('p', null, 'Dear Guest,'),
                      r.a.createElement(
                        'p',
                        null,
                        'To ensure your pleasant rest and to avoid it any misunderstanding, we would like you to familiarize yourself with guidelines.'
                      ),
                      r.a.createElement(
                        'p',
                        null,
                        'When you confirm your reservation, it is assumed that you know and you accept this policy and will abide by it. Not abiding to this rules will result in full charge for your reservation. On arrival, the guest is required to provide the owner with an ID document for checking.'
                      ),
                      r.a.createElement(
                        'p',
                        null,
                        'Please use the property and facilities as intended, obey fire and accident prevention regulations.'
                      ),
                      r.a.createElement(
                        'p',
                        null,
                        'In case of damage whether who has made the damage or who is responsible for who has made the damage has to pay for the harm.'
                      ),
                      r.a.createElement(
                        'p',
                        null,
                        'We are not responsible for any personal belongings. If you leave the guesthouse please close the door and window of your room.'
                      ),
                      r.a.createElement(
                        'p',
                        null,
                        'It is forbidden to accept guests who are not staying at the guesthouse. We preserve the right to cancel your stay, if we notice any non guests in the house.'
                      ),
                      r.a.createElement(
                        'p',
                        null,
                        'Please do not take out the room equipment (towels, blanket) of the pension area, except umbrellas.'
                      ),
                      r.a.createElement(
                        'p',
                        null,
                        'At 22:00 to 8:00 disturbing the silence prohibited.In the area of the hotel SMOKING IS PROHIBITED, it is only allowed outside at the assigned places. Guests under the age of 18 cannot consume alcohol or smoke in the pension area.'
                      ),
                      r.a.createElement(
                        'p',
                        null,
                        'The lost properties have to be given to the reception.'
                      ),
                      r.a.createElement(
                        'p',
                        null,
                        'Possession of weapons are forbidden.'
                      ),
                      r.a.createElement(
                        'p',
                        null,
                        'We kindly ask our guests that in case of comments about the hotel’s services, the behaviour of other guests, the look of the hotel rooms please immediately contact the reception where we will endeavour to solve the problem as soon as possible. We cannot help in case of follow-up comments after leaving the hotel.'
                      ),
                      r.a.createElement(
                        'p',
                        null,
                        'At the hotel area there are several cameras in use for security and safety purposes.'
                      ),
                      r.a.createElement(
                        'p',
                        null,
                        'Not following the rules above can result in full charge for your stay and in forced early leave.'
                      ),
                      r.a.createElement(
                        'p',
                        null,
                        ' We wish you a pleasent stay!'
                      )
                    )
                  )
                )
              }
            )
          }),
          a
        )
      })(r.a.Component)
      t.default = s
    },
    199: function(e, t, n) {
      'use strict'
      n.d(t, 'b', function() {
        return s
      })
      var a = n(0),
        r = n.n(a),
        o = n(66),
        l = n.n(o)
      n.d(t, 'a', function() {
        return l.a
      }),
        n.d(t, 'd', function() {
          return o.withPrefix
        }),
        n.d(t, 'c', function() {
          return o.navigate
        })
      n(201), n(9).default.enqueue
      var i = r.a.createContext({})
      function u(e) {
        var t = e.staticQueryData,
          n = e.data,
          a = e.query,
          o = e.render,
          l = n ? n.data : t[a] && t[a].data
        return r.a.createElement(
          r.a.Fragment,
          null,
          l && o(l),
          !l && r.a.createElement('div', null, 'Loading (StaticQuery)')
        )
      }
      var s = function(e) {
        var t = e.data,
          n = e.query,
          a = e.render,
          o = e.children
        return r.a.createElement(i.Consumer, null, function(e) {
          return r.a.createElement(u, {
            data: t,
            query: n,
            render: a || o,
            staticQueryData: e,
          })
        })
      }
    },
    201: function(e, t, n) {
      var a
      e.exports = ((a = n(206)) && a.default) || a
    },
    203: function(e, t, n) {
      'use strict'
      var a = n(0),
        r = n.n(a),
        o = n(198)
      n(199), n(207)
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
              r.a.createElement(o.a, { id: 'elerTitle' })
            ),
            r.a.createElement(
              'dl',
              { className: 'alt' },
              r.a.createElement(
                'dt',
                null,
                r.a.createElement(o.a, { id: 'elerCimTitle' })
              ),
              r.a.createElement(
                'dd',
                null,
                'Esztergom, Erzsébet kiralyné út 2'
              ),
              r.a.createElement(
                'dt',
                null,
                r.a.createElement(o.a, { id: 'elerCimPhoneTitle' })
              ),
              r.a.createElement(
                'dd',
                null,
                r.a.createElement(o.a, { id: 'elerPhone' })
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
    206: function(e, t, n) {
      'use strict'
      n.r(t)
      n(23)
      var a = n(0),
        r = n.n(a),
        o = n(95)
      t.default = function(e) {
        var t = e.location,
          n = e.pageResources
        return n
          ? r.a.createElement(
              o.a,
              Object.assign({ location: t, pageResources: n }, n.json)
            )
          : null
      }
    },
    207: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iODVweCIgaGVpZ2h0PSI4NXB4IiB2aWV3Qm94PSIwIDAgODAgODAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwIDgwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQwLDBjMjIuMDkxLDAsNDAsMTcuOTA5LDQwLDQwUzYyLjA5MSw4MCw0MCw4MFMwLDYyLjA5MSwwLDQwUzE3LjkwOSwwLDQwLDB6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjOGNjOWYwIiBkPSJNNTAuMzc4LDMyLjU3NmMwLDEuMDA1LTAuODE1LDEuODIxLTEuODIxLDEuODIxYy0xLjAwNSwwLTEuODItMC44MTYtMS44Mi0xLjgyMQ0KCQkJYzAtMS4wMDUsMC44MTUtMS44MjEsMS44Mi0xLjgyMUM0OS41NjMsMzAuNzU1LDUwLjM3OCwzMS41NzEsNTAuMzc4LDMyLjU3NnogTTU0LjYyNywyNy4xMTNjMC0wLjM0MS0wLjMwNC0wLjYwNy0wLjY0Ni0wLjYwNw0KCQkJYy02LjYwMSwwLTEwLjIyMywxLjUxOC0xNC45NjQsNi4yNDFjLTEuMDgxLDEuMS0yLjIsMi4zNTItMy4zMzgsMy42OTlsLTcuMTg4LDAuMzc5Yy0wLjE5LDAuMDE5LTAuMzc5LDAuMTMzLTAuNDkzLDAuMzA0DQoJCQlsLTQuMjQ5LDcuMjg0Yy0wLjEzMywwLjIyOC0wLjA5NSwwLjUzLDAuMDk1LDAuNzM5bDEuMjE0LDEuMjE1YzAuMTE0LDAuMTEzLDAuMjg1LDAuMTcsMC40MzcsMC4xN2MwLjA1NywwLDAuMTE0LDAsMC4xNy0wLjAyDQoJCQlsNS4yMzUtMS42MTFsNS4zMyw1LjMzbC0xLjYxMiw1LjIzNmMtMC4wNTcsMC4yMDksMCwwLjQzNywwLjE1MiwwLjYwNmwxLjIxNCwxLjIxNGMwLjEzMywwLjExNCwwLjI4NCwwLjE3MSwwLjQzNiwwLjE3MQ0KCQkJYzAuMTE0LDAsMC4yMDgtMC4wMjEsMC4zMDQtMC4wNzVsNy4yODMtNC4yNWMwLjE3MS0wLjExMywwLjI4NC0wLjMwNCwwLjMwNS0wLjQ5MmwwLjM3OS03LjE5YzEuMzQ3LTEuMTM4LDIuNTk5LTIuMjU3LDMuNjk5LTMuMzM5DQoJCQlDNTIuODgyLDM3LjYwMyw1NC42MjcsMzMuNDExLDU0LjYyNywyNy4xMTN6Ii8+DQoJPC9nPg0KPC9zdmc+'
    },
    208: function(e, t, n) {
      'use strict'
      n(29), n(30), n(13), n(50)
      var a = n(0),
        r = n.n(a),
        o = (n(134), n(135), n(204), n(23), n(14), n(205)),
        l = n(209),
        i = n(199),
        u = n(198),
        s = n(220),
        c = n.n(s),
        m = (n(221),
        function(e) {
          var t = e.children,
            n = e.location,
            a = e.i18nMessages
          return r.a.createElement(i.b, {
            query: '2825539598',
            render: function(e) {
              var o = n ? n.pathname : '',
                i = e.site.siteMetadata.languages,
                s = i.langs,
                m = i.defaultLangKey,
                w = Object(l.getCurrentLangKey)(s, m, o)
              console.log(w)
              var d = ('/' + w).replace('/' + m + '/', '/'),
                M = Object(l.getLangs)(s, w, Object(l.getUrlForLang)(d, o)).map(
                  function(e) {
                    return Object.assign({}, e, {
                      link: e.link.replace('/' + m + '/', '/'),
                    })
                  }
                ),
                L = c()()
              return (
                console.log(s),
                console.log(L),
                s.includes(L) && console.log(o),
                r.a.createElement(u.b, { locale: w, messages: a }, t(M))
              )
            },
            data: o,
          })
        }),
        w = (n(223), n(203))
      var d = (function(e) {
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
        var o = a.prototype
        return (
          (o.componentDidMount = function() {
            var e = this
            this.timeoutId = setTimeout(function() {
              e.setState({ loading: '' })
            }, 100)
          }),
          (o.componentWillUnmount = function() {
            this.timeoutId && clearTimeout(this.timeoutId)
          }),
          (o.render = function() {
            var e = this,
              t = this.props,
              n = t.children,
              a = (function(e, t) {
                if (null == e) return {}
                var n,
                  a,
                  r = {},
                  o = Object.keys(e)
                for (a = 0; a < o.length; a++)
                  (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
                return r
              })(t, ['children'])
            return r.a.createElement(m, a, function(t) {
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
                    r.a.createElement(w.a, null)
                  )
                )
              )
            })
          }),
          a
        )
      })(r.a.Component)
      t.a = d
    },
    210: function(e, t, n) {
      'use strict'
      n(204)
      var a = n(0),
        r = n.n(a),
        o = n(66),
        l = n.n(o)
      n(198)
      t.a = function(e) {
        var t = e.langs.map(function(e) {
          return r.a.createElement(
            l.a,
            { to: e.link, key: e.langKey, style: { color: 'white' } },
            r.a.createElement('div', null, e.langKey)
          )
        })
        return r.a.createElement(
          'section',
          {
            style: {
              position: 'absolute',
              top: 0,
              right: 0,
              width: 100,
              backgroundColor: 'black',
            },
          },
          r.a.createElement('header', { style: { color: 'white' } }),
          r.a.createElement('div', null, t)
        )
      }
    },
    217: function(e, t) {},
    218: function(e, t) {},
    219: function(e, t) {},
    222: function(e, t) {},
    247: function(e, t, n) {
      'use strict'
      n(0)
    },
    248: function(e, t, n) {
      e.exports = n.p + 'static/pic04-1609dea61acb9e992d846c586683a226.jpg'
    },
  },
])
//# sourceMappingURL=component---src-pages-hazirend-en-js-b2b0d48a24ffa2aa67dd.js.map
