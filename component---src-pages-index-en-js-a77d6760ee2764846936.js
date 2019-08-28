;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    197: function(e, a, n) {
      'use strict'
      n.r(a)
      var t = n(0),
        o = n.n(t),
        r = (n(200), n(224)),
        i = n.n(r),
        l = n(326),
        s = n(208),
        c = n(300),
        u = n(298),
        h = n(250),
        m = n(297),
        d = n(292),
        y = n(296),
        p = (n(334), n(335), n(299)),
        M = n(199),
        g = n(438),
        f = n.n(g),
        E = (n(439), n(440)),
        T = n.n(E)
      Object(M.c)(f.a)
      var k = (function(e) {
        var a, n
        function t(a) {
          var n
          return (
            ((n = e.call(this, a) || this)._handleWaypointEnter = function() {
              n.setState(function() {
                return { stickyNav: !1 }
              })
            }),
            (n._handleWaypointLeave = function() {
              n.setState(function() {
                return { stickyNav: !0 }
              })
            }),
            (n.state = { stickyNav: !1 }),
            n
          )
        }
        return (
          (n = e),
          ((a = t).prototype = Object.create(n.prototype)),
          (a.prototype.constructor = a),
          (a.__proto__ = n),
          (t.prototype.render = function() {
            var e = this
            return o.a.createElement(
              s.a,
              { location: this.props.location, i18nMessages: T.a },
              function(a) {
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(i.a, {
                    title: 'Szent Anna Pension and Apartman',
                  }),
                  o.a.createElement(c.a, { langsMenu: a }),
                  o.a.createElement(l.a, {
                    onEnter: e._handleWaypointEnter,
                    onLeave: e._handleWaypointLeave,
                  }),
                  o.a.createElement(u.a, { sticky: e.state.stickyNav }),
                  o.a.createElement(
                    'div',
                    { id: 'main' },
                    o.a.createElement(h.a, null),
                    o.a.createElement(m.a, null),
                    o.a.createElement(d.a, null),
                    o.a.createElement(p.a, null),
                    o.a.createElement(y.a, { langKey: '/en' })
                  )
                )
              }
            )
          }),
          t
        )
      })(o.a.Component)
      a.default = k
    },
    200: function(e, a, n) {
      'use strict'
      n.d(a, 'b', function() {
        return c
      })
      var t = n(0),
        o = n.n(t),
        r = n(66),
        i = n.n(r)
      n.d(a, 'a', function() {
        return i.a
      }),
        n.d(a, 'd', function() {
          return r.withPrefix
        }),
        n.d(a, 'c', function() {
          return r.navigate
        })
      n(201), n(9).default.enqueue
      var l = o.a.createContext({})
      function s(e) {
        var a = e.staticQueryData,
          n = e.data,
          t = e.query,
          r = e.render,
          i = n ? n.data : a[t] && a[t].data
        return o.a.createElement(
          o.a.Fragment,
          null,
          i && r(i),
          !i && o.a.createElement('div', null, 'Loading (StaticQuery)')
        )
      }
      var c = function(e) {
        var a = e.data,
          n = e.query,
          t = e.render,
          r = e.children
        return o.a.createElement(l.Consumer, null, function(e) {
          return o.a.createElement(s, {
            data: a,
            query: n,
            render: t || r,
            staticQueryData: e,
          })
        })
      }
    },
    201: function(e, a, n) {
      var t
      e.exports = ((t = n(206)) && t.default) || t
    },
    204: function(e, a, n) {
      'use strict'
      var t = n(0),
        o = n.n(t),
        r = n(199)
      n(200), n(207)
      a.a = function(e) {
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
    206: function(e, a, n) {
      'use strict'
      n.r(a)
      n(23)
      var t = n(0),
        o = n.n(t),
        r = n(94)
      a.default = function(e) {
        var a = e.location,
          n = e.pageResources
        return n
          ? o.a.createElement(
              r.a,
              Object.assign({ location: a, pageResources: n }, n.json)
            )
          : null
      }
    },
    207: function(e, a) {
      e.exports =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iODVweCIgaGVpZ2h0PSI4NXB4IiB2aWV3Qm94PSIwIDAgODAgODAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwIDgwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQwLDBjMjIuMDkxLDAsNDAsMTcuOTA5LDQwLDQwUzYyLjA5MSw4MCw0MCw4MFMwLDYyLjA5MSwwLDQwUzE3LjkwOSwwLDQwLDB6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjOGNjOWYwIiBkPSJNNTAuMzc4LDMyLjU3NmMwLDEuMDA1LTAuODE1LDEuODIxLTEuODIxLDEuODIxYy0xLjAwNSwwLTEuODItMC44MTYtMS44Mi0xLjgyMQ0KCQkJYzAtMS4wMDUsMC44MTUtMS44MjEsMS44Mi0xLjgyMUM0OS41NjMsMzAuNzU1LDUwLjM3OCwzMS41NzEsNTAuMzc4LDMyLjU3NnogTTU0LjYyNywyNy4xMTNjMC0wLjM0MS0wLjMwNC0wLjYwNy0wLjY0Ni0wLjYwNw0KCQkJYy02LjYwMSwwLTEwLjIyMywxLjUxOC0xNC45NjQsNi4yNDFjLTEuMDgxLDEuMS0yLjIsMi4zNTItMy4zMzgsMy42OTlsLTcuMTg4LDAuMzc5Yy0wLjE5LDAuMDE5LTAuMzc5LDAuMTMzLTAuNDkzLDAuMzA0DQoJCQlsLTQuMjQ5LDcuMjg0Yy0wLjEzMywwLjIyOC0wLjA5NSwwLjUzLDAuMDk1LDAuNzM5bDEuMjE0LDEuMjE1YzAuMTE0LDAuMTEzLDAuMjg1LDAuMTcsMC40MzcsMC4xN2MwLjA1NywwLDAuMTE0LDAsMC4xNy0wLjAyDQoJCQlsNS4yMzUtMS42MTFsNS4zMyw1LjMzbC0xLjYxMiw1LjIzNmMtMC4wNTcsMC4yMDksMCwwLjQzNywwLjE1MiwwLjYwNmwxLjIxNCwxLjIxNGMwLjEzMywwLjExNCwwLjI4NCwwLjE3MSwwLjQzNiwwLjE3MQ0KCQkJYzAuMTE0LDAsMC4yMDgtMC4wMjEsMC4zMDQtMC4wNzVsNy4yODMtNC4yNWMwLjE3MS0wLjExMywwLjI4NC0wLjMwNCwwLjMwNS0wLjQ5MmwwLjM3OS03LjE5YzEuMzQ3LTEuMTM4LDIuNTk5LTIuMjU3LDMuNjk5LTMuMzM5DQoJCQlDNTIuODgyLDM3LjYwMyw1NC42MjcsMzMuNDExLDU0LjYyNywyNy4xMTN6Ii8+DQoJPC9nPg0KPC9zdmc+'
    },
    208: function(e, a, n) {
      'use strict'
      n(29), n(30), n(13), n(50)
      var t = n(0),
        o = n.n(t),
        r = (n(134), n(135), n(209), n(23), n(14), n(205)),
        i = n(210),
        l = n(200),
        s = n(199),
        c = n(218),
        u = n.n(c),
        h = (n(219),
        function(e) {
          var a = e.children,
            n = e.location,
            t = e.i18nMessages
          return o.a.createElement(l.b, {
            query: '2825539598',
            render: function(e) {
              var r = n ? n.pathname : '',
                l = e.site.siteMetadata.languages,
                c = l.langs,
                h = l.defaultLangKey,
                m = Object(i.getCurrentLangKey)(c, h, r)
              console.log(m)
              var d = ('/' + m).replace('/' + h + '/', '/'),
                y = Object(i.getLangs)(c, m, Object(i.getUrlForLang)(d, r)).map(
                  function(e) {
                    return Object.assign({}, e, {
                      link: e.link.replace('/' + h + '/', '/'),
                    })
                  }
                ),
                p = u()()
              return (
                console.log(c),
                console.log(p),
                c.includes(p) && console.log(r),
                o.a.createElement(s.b, { locale: m, messages: t }, a(y))
              )
            },
            data: r,
          })
        }),
        m = (n(221), n(204))
      var d = (function(e) {
        var a, n
        function t(a) {
          var n
          return (
            ((n = e.call(this, a) || this).state = { loading: 'is-loading' }), n
          )
        }
        ;(n = e),
          ((a = t).prototype = Object.create(n.prototype)),
          (a.prototype.constructor = a),
          (a.__proto__ = n)
        var r = t.prototype
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
              a = this.props,
              n = a.children,
              t = (function(e, a) {
                if (null == e) return {}
                var n,
                  t,
                  o = {},
                  r = Object.keys(e)
                for (t = 0; t < r.length; t++)
                  (n = r[t]), a.indexOf(n) >= 0 || (o[n] = e[n])
                return o
              })(a, ['children'])
            return o.a.createElement(h, t, function(a) {
              return o.a.createElement(
                o.a.Fragment,
                null,
                o.a.createElement(
                  'div',
                  { className: 'body ' + e.state.loading },
                  o.a.createElement(
                    'div',
                    { id: 'wrapper' },
                    n(a),
                    o.a.createElement(m.a, null)
                  )
                )
              )
            })
          }),
          t
        )
      })(o.a.Component)
      a.a = d
    },
    211: function(e, a, n) {
      e.exports = n.p + 'static/door-6b5c5c0d4f5d4cf4c18b0bc0847dc85b.png'
    },
    215: function(e, a) {},
    216: function(e, a) {},
    217: function(e, a) {},
    220: function(e, a) {},
    227: function(e, a, n) {
      'use strict'
      var t = n(0),
        o = n.n(t),
        r = n(237)
      n(211)
      a.a = function(e) {
        var a = e.images.map(function(e) {
          return o.a.createElement(
            'div',
            { className: 'szoba', key: e },
            o.a.createElement(
              'span',
              { className: 'image icon major' },
              o.a.createElement('img', { src: e })
            )
          )
        })
        return o.a.createElement(
          r.Carousel,
          {
            autoPlay: !0,
            infiniteLoop: !0,
            showThumbs: !1,
            showIndicators: !0,
            showStatus: !1,
            showArrows: !1,
            emulateTouch: !0,
            swipeable: !0,
          },
          a
        )
      }
    },
    249: function(e, a, n) {
      e.exports = n.p + 'static/logo2-81cf607e93c22f213ede474179c2d346.png'
    },
    250: function(e, a, n) {
      'use strict'
      var t = n(0),
        o = n.n(t),
        r = (n(200), n(211)),
        i = n.n(r),
        l = n(199)
      a.a = function(e) {
        return o.a.createElement(
          'section',
          { id: 'intro', className: 'main' },
          o.a.createElement(
            'div',
            { className: 'spotlight' },
            o.a.createElement(
              'div',
              { className: 'content' },
              o.a.createElement(
                'header',
                { className: 'major' },
                o.a.createElement(
                  'h2',
                  null,
                  o.a.createElement(l.a, { id: 'bemutatkozasTitle' })
                )
              ),
              o.a.createElement(
                'p',
                null,
                o.a.createElement(l.a, { id: 'bemutatkozasDescription' })
              )
            ),
            o.a.createElement(
              'span',
              { className: 'image' },
              o.a.createElement('img', { src: i.a, alt: '' })
            )
          )
        )
      }
    },
    251: function(e, a, n) {
      e.exports = n.p + 'static/szoba1-c48962c183ebd72f1107367d38ba82bc.png'
    },
    252: function(e, a, n) {
      e.exports = n.p + 'static/sarok-67bd35877446c3c2413640908ef74929.png'
    },
    253: function(e, a, n) {
      e.exports = n.p + 'static/szoba2-c741fa36bbfd3a59b835d178da4bb874.png'
    },
    254: function(e, a, n) {
      e.exports = n.p + 'static/szoba3-f6ac236526f786c747023ea93e0fcdde.png'
    },
    255: function(e, a, n) {
      e.exports = n.p + 'static/fenti-83066dab63083c44fb1f1b3d9579f44c.jpeg'
    },
    256: function(e, a, n) {
      e.exports =
        n.p + 'static/apartman_0-b31bcef9fbf571416827e8812d29e7c8.jpeg'
    },
    257: function(e, a, n) {
      e.exports =
        n.p + 'static/apartman_1-9e6bf00edc3a80672804676e1bf3d6ae.jpeg'
    },
    258: function(e, a, n) {
      e.exports =
        n.p + 'static/apartman_2-65578845439d9b4d0c8e3e2b2e42be7b.jpeg'
    },
    259: function(e, a, n) {
      e.exports =
        n.p + 'static/apartman_3-1eb98b6102274ec2062dda62aea6a74d.jpeg'
    },
    260: function(e, a, n) {
      e.exports =
        n.p + 'static/apartman_4-db3870306c1805badc2c6ad83fbc1aad.jpeg'
    },
    261: function(e, a, n) {
      e.exports =
        n.p + 'static/apartman_5-7064f8e61dad5df25e773c2b3bc3d150.jpeg'
    },
    262: function(e, a, n) {
      e.exports =
        n.p + 'static/apartman_6-3d58cf1617eedfa79cbf94e83b54efe4.jpeg'
    },
    263: function(e, a, n) {
      e.exports = n.p + 'static/0-22597882aa69d7f6141dc40850bbcbd9.jpeg'
    },
    264: function(e, a, n) {
      e.exports = n.p + 'static/1-d685f2f2f976b1dd091eeaab7c60c4cc.jpeg'
    },
    265: function(e, a, n) {
      e.exports = n.p + 'static/2-7d9c2501f0bcc07e84fcde4bbf5e6ebb.jpeg'
    },
    266: function(e, a, n) {
      e.exports = n.p + 'static/3-e04d30923ddfaade75ae12df0336a3cc.jpeg'
    },
    267: function(e, a, n) {
      e.exports = n.p + 'static/0-e769574c8798a47f7d17e61f57db8871.jpeg'
    },
    268: function(e, a, n) {
      e.exports = n.p + 'static/1-8b0c74886dc1bba59d4a0d09b7ef1d7f.jpeg'
    },
    269: function(e, a, n) {
      e.exports = n.p + 'static/2-9f09b8fa838ce7120e165c6e04e0f70e.jpeg'
    },
    270: function(e, a, n) {
      e.exports = n.p + 'static/0-d4952368a1532c5e4be431ea7bb604af.jpeg'
    },
    271: function(e, a, n) {
      e.exports = n.p + 'static/1-9e26e8103984972ba353fd8da19bfb06.jpeg'
    },
    272: function(e, a, n) {
      e.exports = n.p + 'static/2-9f09b8fa838ce7120e165c6e04e0f70e.jpeg'
    },
    273: function(e, a, n) {
      e.exports = n.p + 'static/0-63412415939a46fbdfa072374b6bc6ff.jpeg'
    },
    274: function(e, a, n) {
      e.exports = n.p + 'static/1-0d5e05134affc97ada5036876f920387.jpeg'
    },
    275: function(e, a, n) {
      e.exports = n.p + 'static/0-bbbefcc8d3fe7155f6ea25507877f846.jpeg'
    },
    276: function(e, a, n) {
      e.exports = n.p + 'static/1-4a293e1134df4248f824395cbdae6491.jpeg'
    },
    277: function(e, a, n) {
      e.exports = n.p + 'static/0-5cd88b32be5592924cda74a2b532b16e.jpeg'
    },
    278: function(e, a, n) {
      e.exports = n.p + 'static/1-94e677ca80c75d6c31178f208d9b780d.jpeg'
    },
    279: function(e, a, n) {
      e.exports = n.p + 'static/2-cb5ec0d349f9e2fbc106e6f464e5f75e.jpeg'
    },
    280: function(e, a, n) {
      e.exports = n.p + 'static/3-0d8cdd23d69af7b34966f794421221d4.jpeg'
    },
    281: function(e, a, n) {
      e.exports = n.p + 'static/4-73fcea2184c1cf28079440480e536622.jpeg'
    },
    282: function(e, a, n) {
      e.exports = n.p + 'static/5-3d93b9c16e997b964d8a6784720b799f.jpeg'
    },
    283: function(e, a, n) {
      e.exports = n.p + 'static/6-129e1ee271ec0a5d8dae765d2423cca3.jpeg'
    },
    284: function(e, a, n) {
      e.exports = n.p + 'static/7-7c855695f458dc5da12d6a86a6bc267e.jpeg'
    },
    285: function(e, a, n) {
      e.exports = n.p + 'static/8-c46633445953f6e00d102481d89f9236.jpeg'
    },
    286: function(e, a, n) {
      e.exports = n.p + 'static/9-788890b6b78196d00352a18d73e79074.jpeg'
    },
    287: function(e, a, n) {
      e.exports = n.p + 'static/10-83b9cd4aad03b50f93e1fa290447f4e0.jpeg'
    },
    288: function(e, a, n) {
      e.exports = n.p + 'static/0-9f5447f05d94d17fcf0c0baf67f6ac34.jpeg'
    },
    289: function(e, a, n) {
      e.exports = n.p + 'static/1-79531e2130bbac16c43f4a49d48c97c3.jpeg'
    },
    290: function(e, a, n) {
      e.exports = n.p + 'static/2-4504e3d4ef942d2518b33725928b7903.jpeg'
    },
    291: function(e, a, n) {
      e.exports = n.p + 'static/3-5ef82911808d960bf7405fa48fd8b86e.jpeg'
    },
    292: function(e, a, n) {
      'use strict'
      var t = n(0),
        o = n.n(t),
        r = (n(200), n(199)),
        i = n(227),
        l = n(293),
        s = n.n(l),
        c = n(294),
        u = n.n(c),
        h = n(295),
        m = [n.n(h).a, s.a, u.a]
      a.a = function(e) {
        return o.a.createElement(
          'section',
          { id: 'second', className: 'main special' },
          o.a.createElement(
            'header',
            { className: 'major' },
            o.a.createElement(
              'h2',
              null,
              o.a.createElement(r.a, { id: 'szolgTitle' })
            ),
            o.a.createElement(
              'div',
              { className: 'szoba content' },
              o.a.createElement(
                'h3',
                null,
                o.a.createElement(r.a, { id: 'szolgBreakf' })
              ),
              o.a.createElement(
                'p',
                null,
                o.a.createElement(r.a, { id: 'szolgBreakfDesc' })
              ),
              o.a.createElement(
                'span',
                { style: { width: '100%' } },
                o.a.createElement(i.a, { images: m })
              )
            )
          ),
          o.a.createElement(
            'ul',
            { className: 'statistics' },
            o.a.createElement(
              'li',
              { className: 'style3' },
              o.a.createElement('span', { className: 'icon fa-wifi' }),
              o.a.createElement(
                'strong',
                null,
                o.a.createElement(r.a, { id: 'szolgWiFiTitle' })
              ),
              o.a.createElement(
                'p',
                null,
                o.a.createElement(r.a, { id: 'szolgWiFiDesc' })
              )
            ),
            o.a.createElement(
              'li',
              { className: 'style4' },
              o.a.createElement('span', { className: 'icon fa-bicycle' }),
              o.a.createElement(
                'strong',
                null,
                o.a.createElement(r.a, { id: 'szolgBicycleTitle' })
              ),
              o.a.createElement(
                'p',
                null,
                o.a.createElement(r.a, { id: 'szolgBicycleDesc' })
              )
            ),
            o.a.createElement(
              'li',
              { className: 'style5' },
              o.a.createElement('span', { className: 'icon fa-ship' }),
              o.a.createElement(
                'strong',
                null,
                o.a.createElement(r.a, { id: 'szolgTuraKenuKajakTitle' })
              ),
              o.a.createElement(
                'p',
                null,
                o.a.createElement(r.a, { id: 'szolgTuraKenuKajakDesc' })
              )
            ),
            o.a.createElement(
              'li',
              { className: 'style2' },
              o.a.createElement('i', { className: 'icon fas fa-swimmer' }),
              o.a.createElement(
                'strong',
                null,
                o.a.createElement(r.a, { id: 'szolgAquaTitle' })
              ),
              o.a.createElement(
                'p',
                null,
                o.a.createElement(r.a, { id: 'szolgAquaDesc' })
              )
            )
          )
        )
      }
    },
    293: function(e, a, n) {
      e.exports = n.p + 'static/reggeli-d28e51337b5b4ee885b96b715441fe8e.jpeg'
    },
    294: function(e, a, n) {
      e.exports = n.p + 'static/pic0-df870725690d895b87a74e1eb5b1cbf0.jpg'
    },
    295: function(e, a, n) {
      e.exports = n.p + 'static/pic1-68c646d2999665b2db15efa36e75e064.jpg'
    },
    296: function(e, a, n) {
      'use strict'
      var t = n(0),
        o = n.n(t),
        r = n(200),
        i = n(199)
      a.a = function(e) {
        var a = e.langKey,
          n = Object(t.useState)(!1),
          l = n[0],
          s = n[1]
        return o.a.createElement(
          'section',
          { id: 'foglalas', className: 'main special' },
          o.a.createElement(
            'header',
            { className: 'major' },
            o.a.createElement(
              'h2',
              null,
              o.a.createElement(i.a, { id: 'foglTitle' })
            ),
            o.a.createElement(
              'p',
              null,
              o.a.createElement(i.a, { id: 'foglSubtitle' })
            ),
            o.a.createElement(
              'p',
              null,
              o.a.createElement(i.a, { id: 'foglHaziString' }),
              o.a.createElement(
                r.a,
                { to: a + '/hazirend' },
                o.a.createElement(i.a, { id: 'foglHaziLink' })
              )
            ),
            o.a.createElement('input', {
              type: 'checkbox',
              checked: Boolean(l),
              onChange: function(e) {
                s(Boolean(e.target.checked))
              },
            }),
            o.a.createElement(i.a, { id: 'foglAccept' })
          ),
          l &&
            o.a.createElement(
              'footer',
              { className: 'major' },
              o.a.createElement(
                'ul',
                { clőassName: 'actions' },
                o.a.createElement(
                  'li',
                  null,
                  o.a.createElement(
                    'a',
                    {
                      target: '_blank',
                      href:
                        'https://nethotelbooking.net/hotels/szentannapanzioesztergom',
                      className: 'button special',
                    },
                    o.a.createElement(i.a, { id: 'foglButton' })
                  )
                )
              )
            )
        )
      }
    },
    297: function(e, a, n) {
      'use strict'
      var t = n(0),
        o = n.n(t),
        r = (n(200), n(251), n(252), n(253), n(254), n(255), n(256)),
        i = n.n(r),
        l = n(257),
        s = n.n(l),
        c = n(258),
        u = n.n(c),
        h = n(259),
        m = n.n(h),
        d = n(260),
        y = n.n(d),
        p = n(261),
        M = n.n(p),
        g = n(262),
        f = n.n(g),
        E = [i.a, s.a, u.a, m.a, y.a, M.a, f.a],
        T = n(263),
        k = n.n(T),
        v = n(264),
        b = n.n(v),
        S = n(265),
        w = n.n(S),
        N = n(266),
        L = n.n(N),
        K = [k.a, b.a, w.a, L.a],
        j = n(267),
        A = n.n(j),
        z = n(268),
        C = n.n(z),
        D = n(269),
        x = n.n(D),
        J = [A.a, C.a, x.a],
        B = n(270),
        I = n.n(B),
        F = (n(271), n(272)),
        H = n.n(F),
        P = [I.a, H.a],
        G = n(273),
        R = n.n(G),
        W = n(274),
        O = n.n(W),
        Q = [R.a, O.a],
        Y = n(275),
        U = n.n(Y),
        Z = n(276),
        _ = n.n(Z),
        V = [U.a, _.a],
        X = n(277),
        q = n.n(X),
        $ = n(278),
        ee = n.n($),
        ae = n(279),
        ne = n.n(ae),
        te = n(280),
        oe = n.n(te),
        re = n(281),
        ie = n.n(re),
        le = n(282),
        se = n.n(le),
        ce = n(283),
        ue = n.n(ce),
        he = n(284),
        me = n.n(he),
        de = n(285),
        ye = n.n(de),
        pe = (n(286), n(287)),
        Me = n.n(pe),
        ge = [q.a, ee.a, ne.a, oe.a, ie.a, se.a, ue.a, me.a, ye.a, Me.a],
        fe = n(288),
        Ee = n.n(fe),
        Te = n(289),
        ke = n.n(Te),
        ve = n(290),
        be = n.n(ve),
        Se = n(291),
        we = n.n(Se),
        Ne = [Ee.a, ke.a, be.a, we.a],
        Le = n(227),
        Ke = n(199)
      a.a = function(e) {
        return o.a.createElement(
          'section',
          { id: 'first', className: 'main special' },
          o.a.createElement(
            'header',
            { className: 'major' },
            o.a.createElement(
              'h2',
              null,
              o.a.createElement(Ke.a, { id: 'szobakTitle' })
            )
          ),
          o.a.createElement(
            'div',
            { className: 'spotlight' },
            o.a.createElement(
              'p',
              { className: 'content' },
              o.a.createElement(Ke.a, { id: 'szobakDescription' })
            )
          ),
          o.a.createElement(
            'ul',
            { className: 'features' },
            o.a.createElement(
              'li',
              null,
              o.a.createElement(Le.a, { images: E }),
              o.a.createElement(
                'h3',
                null,
                o.a.createElement(Ke.a, { id: 'szobakKullApTitle' })
              ),
              o.a.createElement(
                'p',
                null,
                o.a.createElement(Ke.a, { id: 'szobakKullApDesc' })
              )
            ),
            o.a.createElement(
              'li',
              null,
              o.a.createElement(Le.a, { images: K }),
              o.a.createElement(
                'h3',
                null,
                o.a.createElement(Ke.a, { id: 'szobakMacTitle' })
              )
            ),
            o.a.createElement(
              'li',
              null,
              o.a.createElement(Le.a, { images: J }),
              o.a.createElement(
                'h3',
                null,
                o.a.createElement(Ke.a, { id: 'szobakMentaTitle' })
              )
            ),
            o.a.createElement(
              'li',
              null,
              o.a.createElement(Le.a, { images: P }),
              o.a.createElement(
                'h3',
                null,
                o.a.createElement(Ke.a, { id: 'szobakPinkTitle' })
              )
            ),
            o.a.createElement(
              'li',
              null,
              o.a.createElement(Le.a, { images: Q }),
              o.a.createElement(
                'h3',
                null,
                o.a.createElement(Ke.a, { id: 'szobakRainforestTitle' })
              )
            ),
            o.a.createElement(
              'li',
              null,
              o.a.createElement(Le.a, { images: V }),
              o.a.createElement(
                'h3',
                null,
                o.a.createElement(Ke.a, { id: 'szobakRoseTitle' })
              )
            ),
            o.a.createElement(
              'li',
              null,
              o.a.createElement(Le.a, { images: ge }),
              o.a.createElement(
                'h3',
                null,
                o.a.createElement(Ke.a, { id: 'szobakApartmanTitle' })
              ),
              o.a.createElement(
                'p',
                null,
                o.a.createElement(Ke.a, { id: 'szobakApartmanDesc' })
              )
            ),
            o.a.createElement(
              'li',
              null,
              o.a.createElement(Le.a, { images: Ne }),
              o.a.createElement(
                'h3',
                null,
                o.a.createElement(Ke.a, { id: 'szobakFloorTitle' })
              ),
              o.a.createElement(
                'p',
                null,
                o.a.createElement(Ke.a, { id: 'szobakFloorDesc' })
              )
            )
          )
        )
      }
    },
    298: function(e, a, n) {
      'use strict'
      var t = n(0),
        o = n.n(t),
        r = n(327),
        i = n.n(r),
        l = n(329),
        s = n.n(l)
      var c = function(e) {
          return e.children
        },
        u = (function(e) {
          var a, n
          function t() {
            var a
            return (
              ((a = e.call(this) || this).handleClick = a.handleClick.bind(
                (function(e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    )
                  return e
                })(a)
              )),
              a
            )
          }
          ;(n = e),
            ((a = t).prototype = Object.create(n.prototype)),
            (a.prototype.constructor = a),
            (a.__proto__ = n)
          var r = t.prototype
          return (
            (r.componentDidMount = function() {
              s.a.polyfill()
            }),
            (r.handleClick = function(e) {
              e.preventDefault()
              var a = 0,
                n = !0,
                t = this.props,
                o = t.type,
                r = t.element,
                i = t.offset,
                l = t.timeout
              if (o && r)
                switch (o) {
                  case 'class':
                    n = !!(a = document.getElementsByClassName(r)[0])
                    break
                  case 'id':
                    n = !!(a = document.getElementById(r))
                }
              n
                ? this.scrollTo(a, i, l)
                : console.log('Element not found: ' + r)
            }),
            (r.scrollTo = function(e, a, n) {
              void 0 === a && (a = 0), void 0 === n && (n = null)
              var t = e ? e.getBoundingClientRect().top + window.pageYOffset : 0
              n
                ? setTimeout(function() {
                    window.scroll({ top: t + a, left: 0, behavior: 'smooth' })
                  }, n)
                : window.scroll({ top: t + a, left: 0, behavior: 'smooth' })
            }),
            (r.render = function() {
              return o.a.createElement(
                c,
                null,
                'object' == typeof this.props.children
                  ? o.a.cloneElement(this.props.children, {
                      onClick: this.handleClick,
                    })
                  : o.a.createElement(
                      'span',
                      { onClick: this.handleClick },
                      this.props.children
                    )
              )
            }),
            t
          )
        })(o.a.Component),
        h = n(199)
      n(204),
        (a.a = function(e) {
          return o.a.createElement(
            'nav',
            { id: 'nav', className: e.sticky ? 'alt' : '' },
            o.a.createElement(
              i.a,
              {
                items: ['intro', 'first', 'second', 'cta'],
                currentClassName: 'is-active',
                offset: -300,
              },
              o.a.createElement(
                'li',
                null,
                o.a.createElement(
                  u,
                  { type: 'id', element: 'intro' },
                  o.a.createElement(
                    'a',
                    { href: '#' },
                    o.a.createElement(h.a, { id: 'navBemutat' })
                  )
                )
              ),
              o.a.createElement(
                'li',
                null,
                o.a.createElement(
                  u,
                  { type: 'id', element: 'first' },
                  o.a.createElement(
                    'a',
                    { href: '#' },
                    o.a.createElement(h.a, { id: 'navSzobak' })
                  )
                )
              ),
              o.a.createElement(
                'li',
                null,
                o.a.createElement(
                  u,
                  { type: 'id', element: 'second' },
                  o.a.createElement(
                    'a',
                    { href: '#' },
                    o.a.createElement(h.a, { id: 'navSzolg' })
                  )
                )
              ),
              o.a.createElement(
                'li',
                null,
                o.a.createElement(
                  u,
                  { type: 'id', element: 'velemenyek' },
                  o.a.createElement(
                    'a',
                    { href: '#' },
                    o.a.createElement(h.a, { id: 'navVelemeny' })
                  )
                )
              ),
              o.a.createElement(
                'li',
                null,
                o.a.createElement(
                  u,
                  { type: 'id', element: 'foglalas' },
                  o.a.createElement(
                    'a',
                    { href: '#' },
                    o.a.createElement(h.a, { id: 'navFoglalas' })
                  )
                )
              )
            )
          )
        })
    },
    299: function(e, a, n) {
      'use strict'
      var t = n(0),
        o = n.n(t),
        r = n(200),
        i = n(237),
        l = (n(211),
        function(e) {
          var a = e.comments.map(function(e) {
            var a = e.comment,
              n = e.userName
            return o.a.createElement(
              'div',
              {
                style: {
                  height: '170px',
                  display: 'flex',
                  justifyContent: 'center',
                },
                key: a,
              },
              o.a.createElement(
                'div',
                { style: { width: '300px' } },
                o.a.createElement('h3', null, a),
                o.a.createElement(
                  'h4',
                  { style: { textAlign: 'right' } },
                  o.a.createElement('i', null, '-', n)
                )
              )
            )
          })
          return o.a.createElement(
            i.Carousel,
            {
              showThumbs: !1,
              showIndicators: !0,
              showStatus: !1,
              showArrows: !1,
              emulateTouch: !0,
              swipeable: !0,
            },
            a
          )
        }),
        s = n(336),
        c = n.n(s),
        u = n(199)
      a.a = function(e) {
        var a = c()('https://sztannabackend.pjatacsuk.now.sh/api/comment.js'),
          n = a.isLoading,
          t = a.data
        return o.a.createElement(
          'section',
          { id: 'velemenyek', className: 'main special' },
          o.a.createElement(
            'header',
            { className: 'major' },
            o.a.createElement(
              'h2',
              null,
              o.a.createElement(u.a, { id: 'commentsTitle' })
            )
          ),
          n || !t
            ? o.a.createElement('div', null)
            : o.a.createElement(l, { comments: t.comments }),
          o.a.createElement(
            'footer',
            { className: 'major' },
            o.a.createElement(
              'ul',
              { className: 'actions' },
              o.a.createElement(
                'li',
                null,
                o.a.createElement(
                  r.a,
                  { to: '/comment', className: 'button' },
                  'Irjon ön is'
                )
              )
            )
          )
        )
      }
    },
    300: function(e, a, n) {
      'use strict'
      var t = n(0),
        o = n.n(t),
        r = (n(209), n(66)),
        i = n.n(r),
        l = n(199),
        s = function(e) {
          var a = e.langs.map(function(e) {
            return o.a.createElement(
              i.a,
              { to: e.link, key: e.langKey, style: { color: 'white' } },
              o.a.createElement('div', null, e.langKey)
            )
          })
          return o.a.createElement(
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
            o.a.createElement('header', { style: { color: 'white' } }),
            o.a.createElement('div', null, a)
          )
        },
        c = n(249),
        u = n.n(c)
      a.a = function(e) {
        return (
          console.log(e.langsMenu),
          o.a.createElement(
            'header',
            { id: 'header', className: 'alt' },
            o.a.createElement(s, { langs: e.langsMenu }),
            o.a.createElement(
              'span',
              { className: 'logo' },
              o.a.createElement('img', { src: u.a, alt: '' })
            ),
            o.a.createElement(
              'h1',
              null,
              o.a.createElement(l.a, { id: 'headerCompTitle' })
            ),
            o.a.createElement(
              'p',
              null,
              o.a.createElement(l.a, { id: 'headerCompSubtitle' })
            )
          )
        )
      }
    },
    438: function(e, a, n) {
      n(214),
        n(38),
        (e.exports = (function() {
          'use strict'
          return [
            {
              locale: 'en',
              pluralRuleFunction: function(e, a) {
                var n = String(e).split('.'),
                  t = !n[1],
                  o = Number(n[0]) == e,
                  r = o && n[0].slice(-1),
                  i = o && n[0].slice(-2)
                return a
                  ? 1 == r && 11 != i
                    ? 'one'
                    : 2 == r && 12 != i
                      ? 'two'
                      : 3 == r && 13 != i
                        ? 'few'
                        : 'other'
                  : 1 == e && t
                    ? 'one'
                    : 'other'
              },
              fields: {
                year: {
                  displayName: 'year',
                  relative: {
                    0: 'this year',
                    1: 'next year',
                    '-1': 'last year',
                  },
                  relativeTime: {
                    future: { one: 'in {0} year', other: 'in {0} years' },
                    past: { one: '{0} year ago', other: '{0} years ago' },
                  },
                },
                'year-short': {
                  displayName: 'yr.',
                  relative: { 0: 'this yr.', 1: 'next yr.', '-1': 'last yr.' },
                  relativeTime: {
                    future: { one: 'in {0} yr.', other: 'in {0} yr.' },
                    past: { one: '{0} yr. ago', other: '{0} yr. ago' },
                  },
                },
                month: {
                  displayName: 'month',
                  relative: {
                    0: 'this month',
                    1: 'next month',
                    '-1': 'last month',
                  },
                  relativeTime: {
                    future: { one: 'in {0} month', other: 'in {0} months' },
                    past: { one: '{0} month ago', other: '{0} months ago' },
                  },
                },
                'month-short': {
                  displayName: 'mo.',
                  relative: { 0: 'this mo.', 1: 'next mo.', '-1': 'last mo.' },
                  relativeTime: {
                    future: { one: 'in {0} mo.', other: 'in {0} mo.' },
                    past: { one: '{0} mo. ago', other: '{0} mo. ago' },
                  },
                },
                day: {
                  displayName: 'day',
                  relative: { 0: 'today', 1: 'tomorrow', '-1': 'yesterday' },
                  relativeTime: {
                    future: { one: 'in {0} day', other: 'in {0} days' },
                    past: { one: '{0} day ago', other: '{0} days ago' },
                  },
                },
                'day-short': {
                  displayName: 'day',
                  relative: { 0: 'today', 1: 'tomorrow', '-1': 'yesterday' },
                  relativeTime: {
                    future: { one: 'in {0} day', other: 'in {0} days' },
                    past: { one: '{0} day ago', other: '{0} days ago' },
                  },
                },
                hour: {
                  displayName: 'hour',
                  relative: { 0: 'this hour' },
                  relativeTime: {
                    future: { one: 'in {0} hour', other: 'in {0} hours' },
                    past: { one: '{0} hour ago', other: '{0} hours ago' },
                  },
                },
                'hour-short': {
                  displayName: 'hr.',
                  relative: { 0: 'this hour' },
                  relativeTime: {
                    future: { one: 'in {0} hr.', other: 'in {0} hr.' },
                    past: { one: '{0} hr. ago', other: '{0} hr. ago' },
                  },
                },
                minute: {
                  displayName: 'minute',
                  relative: { 0: 'this minute' },
                  relativeTime: {
                    future: { one: 'in {0} minute', other: 'in {0} minutes' },
                    past: { one: '{0} minute ago', other: '{0} minutes ago' },
                  },
                },
                'minute-short': {
                  displayName: 'min.',
                  relative: { 0: 'this minute' },
                  relativeTime: {
                    future: { one: 'in {0} min.', other: 'in {0} min.' },
                    past: { one: '{0} min. ago', other: '{0} min. ago' },
                  },
                },
                second: {
                  displayName: 'second',
                  relative: { 0: 'now' },
                  relativeTime: {
                    future: { one: 'in {0} second', other: 'in {0} seconds' },
                    past: { one: '{0} second ago', other: '{0} seconds ago' },
                  },
                },
                'second-short': {
                  displayName: 'sec.',
                  relative: { 0: 'now' },
                  relativeTime: {
                    future: { one: 'in {0} sec.', other: 'in {0} sec.' },
                    past: { one: '{0} sec. ago', other: '{0} sec. ago' },
                  },
                },
              },
            },
            {
              locale: 'en-001',
              parentLocale: 'en',
              fields: {
                year: {
                  displayName: 'year',
                  relative: {
                    0: 'this year',
                    1: 'next year',
                    '-1': 'last year',
                  },
                  relativeTime: {
                    future: { one: 'in {0} year', other: 'in {0} years' },
                    past: { one: '{0} year ago', other: '{0} years ago' },
                  },
                },
                'year-short': {
                  displayName: 'yr',
                  relative: { 0: 'this yr.', 1: 'next yr.', '-1': 'last yr.' },
                  relativeTime: {
                    future: { one: 'in {0} yr', other: 'in {0} yr' },
                    past: { one: '{0} yr ago', other: '{0} yr ago' },
                  },
                },
                month: {
                  displayName: 'month',
                  relative: {
                    0: 'this month',
                    1: 'next month',
                    '-1': 'last month',
                  },
                  relativeTime: {
                    future: { one: 'in {0} month', other: 'in {0} months' },
                    past: { one: '{0} month ago', other: '{0} months ago' },
                  },
                },
                'month-short': {
                  displayName: 'mo',
                  relative: { 0: 'this mo.', 1: 'next mo.', '-1': 'last mo.' },
                  relativeTime: {
                    future: { one: 'in {0} mo', other: 'in {0} mo' },
                    past: { one: '{0} mo ago', other: '{0} mo ago' },
                  },
                },
                day: {
                  displayName: 'day',
                  relative: { 0: 'today', 1: 'tomorrow', '-1': 'yesterday' },
                  relativeTime: {
                    future: { one: 'in {0} day', other: 'in {0} days' },
                    past: { one: '{0} day ago', other: '{0} days ago' },
                  },
                },
                'day-short': {
                  displayName: 'day',
                  relative: { 0: 'today', 1: 'tomorrow', '-1': 'yesterday' },
                  relativeTime: {
                    future: { one: 'in {0} day', other: 'in {0} days' },
                    past: { one: '{0} day ago', other: '{0} days ago' },
                  },
                },
                hour: {
                  displayName: 'hour',
                  relative: { 0: 'this hour' },
                  relativeTime: {
                    future: { one: 'in {0} hour', other: 'in {0} hours' },
                    past: { one: '{0} hour ago', other: '{0} hours ago' },
                  },
                },
                'hour-short': {
                  displayName: 'hr',
                  relative: { 0: 'this hour' },
                  relativeTime: {
                    future: { one: 'in {0} hr', other: 'in {0} hr' },
                    past: { one: '{0} hr ago', other: '{0} hr ago' },
                  },
                },
                minute: {
                  displayName: 'minute',
                  relative: { 0: 'this minute' },
                  relativeTime: {
                    future: { one: 'in {0} minute', other: 'in {0} minutes' },
                    past: { one: '{0} minute ago', other: '{0} minutes ago' },
                  },
                },
                'minute-short': {
                  displayName: 'min',
                  relative: { 0: 'this minute' },
                  relativeTime: {
                    future: { one: 'in {0} min', other: 'in {0} min' },
                    past: { one: '{0} min ago', other: '{0} min ago' },
                  },
                },
                second: {
                  displayName: 'second',
                  relative: { 0: 'now' },
                  relativeTime: {
                    future: { one: 'in {0} second', other: 'in {0} seconds' },
                    past: { one: '{0} second ago', other: '{0} seconds ago' },
                  },
                },
                'second-short': {
                  displayName: 'sec',
                  relative: { 0: 'now' },
                  relativeTime: {
                    future: { one: 'in {0} sec', other: 'in {0} sec' },
                    past: { one: '{0} sec ago', other: '{0} sec ago' },
                  },
                },
              },
            },
            { locale: 'en-150', parentLocale: 'en-001' },
            { locale: 'en-AG', parentLocale: 'en-001' },
            { locale: 'en-AI', parentLocale: 'en-001' },
            { locale: 'en-AS', parentLocale: 'en' },
            { locale: 'en-AT', parentLocale: 'en-150' },
            {
              locale: 'en-AU',
              parentLocale: 'en-001',
              fields: {
                year: {
                  displayName: 'year',
                  relative: {
                    0: 'this year',
                    1: 'next year',
                    '-1': 'last year',
                  },
                  relativeTime: {
                    future: { one: 'in {0} year', other: 'in {0} years' },
                    past: { one: '{0} year ago', other: '{0} years ago' },
                  },
                },
                'year-short': {
                  displayName: 'yr',
                  relative: { 0: 'this yr.', 1: 'next yr.', '-1': 'last yr.' },
                  relativeTime: {
                    future: { one: 'in {0} yr', other: 'in {0} yrs' },
                    past: { one: '{0} yr ago', other: '{0} yrs ago' },
                  },
                },
                month: {
                  displayName: 'month',
                  relative: {
                    0: 'this month',
                    1: 'next month',
                    '-1': 'last month',
                  },
                  relativeTime: {
                    future: { one: 'in {0} month', other: 'in {0} months' },
                    past: { one: '{0} month ago', other: '{0} months ago' },
                  },
                },
                'month-short': {
                  displayName: 'mo.',
                  relative: { 0: 'this mo.', 1: 'next mo.', '-1': 'last mo.' },
                  relativeTime: {
                    future: { one: 'in {0} mo.', other: 'in {0} mo.' },
                    past: { one: '{0} mo. ago', other: '{0} mo. ago' },
                  },
                },
                day: {
                  displayName: 'day',
                  relative: { 0: 'today', 1: 'tomorrow', '-1': 'yesterday' },
                  relativeTime: {
                    future: { one: 'in {0} day', other: 'in {0} days' },
                    past: { one: '{0} day ago', other: '{0} days ago' },
                  },
                },
                'day-short': {
                  displayName: 'day',
                  relative: { 0: 'today', 1: 'tomorrow', '-1': 'yesterday' },
                  relativeTime: {
                    future: { one: 'in {0} day', other: 'in {0} days' },
                    past: { one: '{0} day ago', other: '{0} days ago' },
                  },
                },
                hour: {
                  displayName: 'hour',
                  relative: { 0: 'this hour' },
                  relativeTime: {
                    future: { one: 'in {0} hour', other: 'in {0} hours' },
                    past: { one: '{0} hour ago', other: '{0} hours ago' },
                  },
                },
                'hour-short': {
                  displayName: 'h',
                  relative: { 0: 'this hour' },
                  relativeTime: {
                    future: { one: 'in {0} hr', other: 'in {0} hrs' },
                    past: { one: '{0} hr ago', other: '{0} hrs ago' },
                  },
                },
                minute: {
                  displayName: 'minute',
                  relative: { 0: 'this minute' },
                  relativeTime: {
                    future: { one: 'in {0} minute', other: 'in {0} minutes' },
                    past: { one: '{0} minute ago', other: '{0} minutes ago' },
                  },
                },
                'minute-short': {
                  displayName: 'min.',
                  relative: { 0: 'this minute' },
                  relativeTime: {
                    future: { one: 'in {0} min.', other: 'in {0} mins' },
                    past: { one: '{0} min. ago', other: '{0} mins ago' },
                  },
                },
                second: {
                  displayName: 'second',
                  relative: { 0: 'now' },
                  relativeTime: {
                    future: { one: 'in {0} second', other: 'in {0} seconds' },
                    past: { one: '{0} second ago', other: '{0} seconds ago' },
                  },
                },
                'second-short': {
                  displayName: 'sec.',
                  relative: { 0: 'now' },
                  relativeTime: {
                    future: { one: 'in {0} sec.', other: 'in {0} secs' },
                    past: { one: '{0} sec. ago', other: '{0} secs ago' },
                  },
                },
              },
            },
            { locale: 'en-BB', parentLocale: 'en-001' },
            { locale: 'en-BE', parentLocale: 'en-001' },
            { locale: 'en-BI', parentLocale: 'en' },
            { locale: 'en-BM', parentLocale: 'en-001' },
            { locale: 'en-BS', parentLocale: 'en-001' },
            { locale: 'en-BW', parentLocale: 'en-001' },
            { locale: 'en-BZ', parentLocale: 'en-001' },
            {
              locale: 'en-CA',
              parentLocale: 'en-001',
              fields: {
                year: {
                  displayName: 'year',
                  relative: {
                    0: 'this year',
                    1: 'next year',
                    '-1': 'last year',
                  },
                  relativeTime: {
                    future: { one: 'in {0} year', other: 'in {0} years' },
                    past: { one: '{0} year ago', other: '{0} years ago' },
                  },
                },
                'year-short': {
                  displayName: 'yr.',
                  relative: { 0: 'this yr.', 1: 'next yr.', '-1': 'last yr.' },
                  relativeTime: {
                    future: { one: 'in {0} yr.', other: 'in {0} yrs.' },
                    past: { one: '{0} yr. ago', other: '{0} yrs. ago' },
                  },
                },
                month: {
                  displayName: 'month',
                  relative: {
                    0: 'this month',
                    1: 'next month',
                    '-1': 'last month',
                  },
                  relativeTime: {
                    future: { one: 'in {0} month', other: 'in {0} months' },
                    past: { one: '{0} month ago', other: '{0} months ago' },
                  },
                },
                'month-short': {
                  displayName: 'mo.',
                  relative: { 0: 'this mo.', 1: 'next mo.', '-1': 'last mo.' },
                  relativeTime: {
                    future: { one: 'in {0} mo.', other: 'in {0} mos.' },
                    past: { one: '{0} mo. ago', other: '{0} mos. ago' },
                  },
                },
                day: {
                  displayName: 'day',
                  relative: { 0: 'today', 1: 'tomorrow', '-1': 'yesterday' },
                  relativeTime: {
                    future: { one: 'in {0} day', other: 'in {0} days' },
                    past: { one: '{0} day ago', other: '{0} days ago' },
                  },
                },
                'day-short': {
                  displayName: 'day',
                  relative: { 0: 'today', 1: 'tomorrow', '-1': 'yesterday' },
                  relativeTime: {
                    future: { one: 'in {0} day', other: 'in {0} days' },
                    past: { one: '{0} day ago', other: '{0} days ago' },
                  },
                },
                hour: {
                  displayName: 'hour',
                  relative: { 0: 'this hour' },
                  relativeTime: {
                    future: { one: 'in {0} hour', other: 'in {0} hours' },
                    past: { one: '{0} hour ago', other: '{0} hours ago' },
                  },
                },
                'hour-short': {
                  displayName: 'hr.',
                  relative: { 0: 'this hour' },
                  relativeTime: {
                    future: { one: 'in {0} hr.', other: 'in {0} hrs.' },
                    past: { one: '{0} hr. ago', other: '{0} hrs. ago' },
                  },
                },
                minute: {
                  displayName: 'minute',
                  relative: { 0: 'this minute' },
                  relativeTime: {
                    future: { one: 'in {0} minute', other: 'in {0} minutes' },
                    past: { one: '{0} minute ago', other: '{0} minutes ago' },
                  },
                },
                'minute-short': {
                  displayName: 'min.',
                  relative: { 0: 'this minute' },
                  relativeTime: {
                    future: { one: 'in {0} min.', other: 'in {0} mins.' },
                    past: { one: '{0} min. ago', other: '{0} mins. ago' },
                  },
                },
                second: {
                  displayName: 'second',
                  relative: { 0: 'now' },
                  relativeTime: {
                    future: { one: 'in {0} second', other: 'in {0} seconds' },
                    past: { one: '{0} second ago', other: '{0} seconds ago' },
                  },
                },
                'second-short': {
                  displayName: 'sec.',
                  relative: { 0: 'now' },
                  relativeTime: {
                    future: { one: 'in {0} sec.', other: 'in {0} secs.' },
                    past: { one: '{0} sec. ago', other: '{0} secs. ago' },
                  },
                },
              },
            },
            { locale: 'en-CC', parentLocale: 'en-001' },
            { locale: 'en-CH', parentLocale: 'en-150' },
            { locale: 'en-CK', parentLocale: 'en-001' },
            { locale: 'en-CM', parentLocale: 'en-001' },
            { locale: 'en-CX', parentLocale: 'en-001' },
            { locale: 'en-CY', parentLocale: 'en-001' },
            { locale: 'en-DE', parentLocale: 'en-150' },
            { locale: 'en-DG', parentLocale: 'en-001' },
            { locale: 'en-DK', parentLocale: 'en-150' },
            { locale: 'en-DM', parentLocale: 'en-001' },
            {
              locale: 'en-Dsrt',
              pluralRuleFunction: function(e, a) {
                return 'other'
              },
              fields: {
                year: {
                  displayName: 'Year',
                  relative: {
                    0: 'this year',
                    1: 'next year',
                    '-1': 'last year',
                  },
                  relativeTime: {
                    future: { other: '+{0} y' },
                    past: { other: '-{0} y' },
                  },
                },
                'year-short': {
                  displayName: 'Year',
                  relative: {
                    0: 'this year',
                    1: 'next year',
                    '-1': 'last year',
                  },
                  relativeTime: {
                    future: { other: '+{0} y' },
                    past: { other: '-{0} y' },
                  },
                },
                month: {
                  displayName: 'Month',
                  relative: {
                    0: 'this month',
                    1: 'next month',
                    '-1': 'last month',
                  },
                  relativeTime: {
                    future: { other: '+{0} m' },
                    past: { other: '-{0} m' },
                  },
                },
                'month-short': {
                  displayName: 'Month',
                  relative: {
                    0: 'this month',
                    1: 'next month',
                    '-1': 'last month',
                  },
                  relativeTime: {
                    future: { other: '+{0} m' },
                    past: { other: '-{0} m' },
                  },
                },
                day: {
                  displayName: 'Day',
                  relative: { 0: 'today', 1: 'tomorrow', '-1': 'yesterday' },
                  relativeTime: {
                    future: { other: '+{0} d' },
                    past: { other: '-{0} d' },
                  },
                },
                'day-short': {
                  displayName: 'Day',
                  relative: { 0: 'today', 1: 'tomorrow', '-1': 'yesterday' },
                  relativeTime: {
                    future: { other: '+{0} d' },
                    past: { other: '-{0} d' },
                  },
                },
                hour: {
                  displayName: 'Hour',
                  relative: { 0: 'this hour' },
                  relativeTime: {
                    future: { other: '+{0} h' },
                    past: { other: '-{0} h' },
                  },
                },
                'hour-short': {
                  displayName: 'Hour',
                  relative: { 0: 'this hour' },
                  relativeTime: {
                    future: { other: '+{0} h' },
                    past: { other: '-{0} h' },
                  },
                },
                minute: {
                  displayName: 'Minute',
                  relative: { 0: 'this minute' },
                  relativeTime: {
                    future: { other: '+{0} min' },
                    past: { other: '-{0} min' },
                  },
                },
                'minute-short': {
                  displayName: 'Minute',
                  relative: { 0: 'this minute' },
                  relativeTime: {
                    future: { other: '+{0} min' },
                    past: { other: '-{0} min' },
                  },
                },
                second: {
                  displayName: 'Second',
                  relative: { 0: 'now' },
                  relativeTime: {
                    future: { other: '+{0} s' },
                    past: { other: '-{0} s' },
                  },
                },
                'second-short': {
                  displayName: 'Second',
                  relative: { 0: 'now' },
                  relativeTime: {
                    future: { other: '+{0} s' },
                    past: { other: '-{0} s' },
                  },
                },
              },
            },
            { locale: 'en-ER', parentLocale: 'en-001' },
            { locale: 'en-FI', parentLocale: 'en-150' },
            { locale: 'en-FJ', parentLocale: 'en-001' },
            { locale: 'en-FK', parentLocale: 'en-001' },
            { locale: 'en-FM', parentLocale: 'en-001' },
            { locale: 'en-GB', parentLocale: 'en-001' },
            { locale: 'en-GD', parentLocale: 'en-001' },
            { locale: 'en-GG', parentLocale: 'en-001' },
            { locale: 'en-GH', parentLocale: 'en-001' },
            { locale: 'en-GI', parentLocale: 'en-001' },
            { locale: 'en-GM', parentLocale: 'en-001' },
            { locale: 'en-GU', parentLocale: 'en' },
            { locale: 'en-GY', parentLocale: 'en-001' },
            { locale: 'en-HK', parentLocale: 'en-001' },
            { locale: 'en-IE', parentLocale: 'en-001' },
            { locale: 'en-IL', parentLocale: 'en-001' },
            { locale: 'en-IM', parentLocale: 'en-001' },
            { locale: 'en-IN', parentLocale: 'en-001' },
            { locale: 'en-IO', parentLocale: 'en-001' },
            { locale: 'en-JE', parentLocale: 'en-001' },
            { locale: 'en-JM', parentLocale: 'en-001' },
            { locale: 'en-KE', parentLocale: 'en-001' },
            { locale: 'en-KI', parentLocale: 'en-001' },
            { locale: 'en-KN', parentLocale: 'en-001' },
            { locale: 'en-KY', parentLocale: 'en-001' },
            { locale: 'en-LC', parentLocale: 'en-001' },
            { locale: 'en-LR', parentLocale: 'en-001' },
            { locale: 'en-LS', parentLocale: 'en-001' },
            { locale: 'en-MG', parentLocale: 'en-001' },
            { locale: 'en-MH', parentLocale: 'en' },
            { locale: 'en-MO', parentLocale: 'en-001' },
            { locale: 'en-MP', parentLocale: 'en' },
            { locale: 'en-MS', parentLocale: 'en-001' },
            { locale: 'en-MT', parentLocale: 'en-001' },
            { locale: 'en-MU', parentLocale: 'en-001' },
            { locale: 'en-MW', parentLocale: 'en-001' },
            { locale: 'en-MY', parentLocale: 'en-001' },
            { locale: 'en-NA', parentLocale: 'en-001' },
            { locale: 'en-NF', parentLocale: 'en-001' },
            { locale: 'en-NG', parentLocale: 'en-001' },
            { locale: 'en-NL', parentLocale: 'en-150' },
            { locale: 'en-NR', parentLocale: 'en-001' },
            { locale: 'en-NU', parentLocale: 'en-001' },
            { locale: 'en-NZ', parentLocale: 'en-001' },
            { locale: 'en-PG', parentLocale: 'en-001' },
            { locale: 'en-PH', parentLocale: 'en-001' },
            { locale: 'en-PK', parentLocale: 'en-001' },
            { locale: 'en-PN', parentLocale: 'en-001' },
            { locale: 'en-PR', parentLocale: 'en' },
            { locale: 'en-PW', parentLocale: 'en-001' },
            { locale: 'en-RW', parentLocale: 'en-001' },
            { locale: 'en-SB', parentLocale: 'en-001' },
            { locale: 'en-SC', parentLocale: 'en-001' },
            { locale: 'en-SD', parentLocale: 'en-001' },
            { locale: 'en-SE', parentLocale: 'en-150' },
            {
              locale: 'en-SG',
              parentLocale: 'en-001',
              fields: {
                year: {
                  displayName: 'year',
                  relative: {
                    0: 'this year',
                    1: 'next year',
                    '-1': 'last year',
                  },
                  relativeTime: {
                    future: { one: 'in {0} year', other: 'in {0} years' },
                    past: { one: '{0} year ago', other: '{0} years ago' },
                  },
                },
                'year-short': {
                  displayName: 'yr',
                  relative: { 0: 'this yr', 1: 'next yr', '-1': 'last yr' },
                  relativeTime: {
                    future: { one: 'in {0} yr', other: 'in {0} yr' },
                    past: { one: '{0} yr ago', other: '{0} yr ago' },
                  },
                },
                month: {
                  displayName: 'month',
                  relative: {
                    0: 'this month',
                    1: 'next month',
                    '-1': 'last month',
                  },
                  relativeTime: {
                    future: { one: 'in {0} month', other: 'in {0} months' },
                    past: { one: '{0} month ago', other: '{0} months ago' },
                  },
                },
                'month-short': {
                  displayName: 'mth',
                  relative: { 0: 'this mth', 1: 'next mth', '-1': 'last mth' },
                  relativeTime: {
                    future: { one: 'in {0} mth', other: 'in {0} mth' },
                    past: { one: '{0} mth ago', other: '{0} mth ago' },
                  },
                },
                day: {
                  displayName: 'day',
                  relative: { 0: 'today', 1: 'tomorrow', '-1': 'yesterday' },
                  relativeTime: {
                    future: { one: 'in {0} day', other: 'in {0} days' },
                    past: { one: '{0} day ago', other: '{0} days ago' },
                  },
                },
                'day-short': {
                  displayName: 'day',
                  relative: { 0: 'today', 1: 'tomorrow', '-1': 'yesterday' },
                  relativeTime: {
                    future: { one: 'in {0} day', other: 'in {0} days' },
                    past: { one: '{0} day ago', other: '{0} days ago' },
                  },
                },
                hour: {
                  displayName: 'hour',
                  relative: { 0: 'this hour' },
                  relativeTime: {
                    future: { one: 'in {0} hour', other: 'in {0} hours' },
                    past: { one: '{0} hour ago', other: '{0} hours ago' },
                  },
                },
                'hour-short': {
                  displayName: 'hr',
                  relative: { 0: 'this hour' },
                  relativeTime: {
                    future: { one: 'in {0} hr', other: 'in {0} hr' },
                    past: { one: '{0} hr ago', other: '{0} hr ago' },
                  },
                },
                minute: {
                  displayName: 'minute',
                  relative: { 0: 'this minute' },
                  relativeTime: {
                    future: { one: 'in {0} minute', other: 'in {0} minutes' },
                    past: { one: '{0} minute ago', other: '{0} minutes ago' },
                  },
                },
                'minute-short': {
                  displayName: 'min',
                  relative: { 0: 'this minute' },
                  relativeTime: {
                    future: { one: 'in {0} min', other: 'in {0} min' },
                    past: { one: '{0} min ago', other: '{0} min ago' },
                  },
                },
                second: {
                  displayName: 'second',
                  relative: { 0: 'now' },
                  relativeTime: {
                    future: { one: 'in {0} second', other: 'in {0} seconds' },
                    past: { one: '{0} second ago', other: '{0} seconds ago' },
                  },
                },
                'second-short': {
                  displayName: 'sec',
                  relative: { 0: 'now' },
                  relativeTime: {
                    future: { one: 'in {0} sec', other: 'in {0} sec' },
                    past: { one: '{0} sec ago', other: '{0} sec ago' },
                  },
                },
              },
            },
            { locale: 'en-SH', parentLocale: 'en-001' },
            { locale: 'en-SI', parentLocale: 'en-150' },
            { locale: 'en-SL', parentLocale: 'en-001' },
            { locale: 'en-SS', parentLocale: 'en-001' },
            { locale: 'en-SX', parentLocale: 'en-001' },
            { locale: 'en-SZ', parentLocale: 'en-001' },
            {
              locale: 'en-Shaw',
              pluralRuleFunction: function(e, a) {
                return 'other'
              },
              fields: {
                year: {
                  displayName: 'Year',
                  relative: {
                    0: 'this year',
                    1: 'next year',
                    '-1': 'last year',
                  },
                  relativeTime: {
                    future: { other: '+{0} y' },
                    past: { other: '-{0} y' },
                  },
                },
                'year-short': {
                  displayName: 'Year',
                  relative: {
                    0: 'this year',
                    1: 'next year',
                    '-1': 'last year',
                  },
                  relativeTime: {
                    future: { other: '+{0} y' },
                    past: { other: '-{0} y' },
                  },
                },
                month: {
                  displayName: 'Month',
                  relative: {
                    0: 'this month',
                    1: 'next month',
                    '-1': 'last month',
                  },
                  relativeTime: {
                    future: { other: '+{0} m' },
                    past: { other: '-{0} m' },
                  },
                },
                'month-short': {
                  displayName: 'Month',
                  relative: {
                    0: 'this month',
                    1: 'next month',
                    '-1': 'last month',
                  },
                  relativeTime: {
                    future: { other: '+{0} m' },
                    past: { other: '-{0} m' },
                  },
                },
                day: {
                  displayName: 'Day',
                  relative: { 0: 'today', 1: 'tomorrow', '-1': 'yesterday' },
                  relativeTime: {
                    future: { other: '+{0} d' },
                    past: { other: '-{0} d' },
                  },
                },
                'day-short': {
                  displayName: 'Day',
                  relative: { 0: 'today', 1: 'tomorrow', '-1': 'yesterday' },
                  relativeTime: {
                    future: { other: '+{0} d' },
                    past: { other: '-{0} d' },
                  },
                },
                hour: {
                  displayName: 'Hour',
                  relative: { 0: 'this hour' },
                  relativeTime: {
                    future: { other: '+{0} h' },
                    past: { other: '-{0} h' },
                  },
                },
                'hour-short': {
                  displayName: 'Hour',
                  relative: { 0: 'this hour' },
                  relativeTime: {
                    future: { other: '+{0} h' },
                    past: { other: '-{0} h' },
                  },
                },
                minute: {
                  displayName: 'Minute',
                  relative: { 0: 'this minute' },
                  relativeTime: {
                    future: { other: '+{0} min' },
                    past: { other: '-{0} min' },
                  },
                },
                'minute-short': {
                  displayName: 'Minute',
                  relative: { 0: 'this minute' },
                  relativeTime: {
                    future: { other: '+{0} min' },
                    past: { other: '-{0} min' },
                  },
                },
                second: {
                  displayName: 'Second',
                  relative: { 0: 'now' },
                  relativeTime: {
                    future: { other: '+{0} s' },
                    past: { other: '-{0} s' },
                  },
                },
                'second-short': {
                  displayName: 'Second',
                  relative: { 0: 'now' },
                  relativeTime: {
                    future: { other: '+{0} s' },
                    past: { other: '-{0} s' },
                  },
                },
              },
            },
            { locale: 'en-TC', parentLocale: 'en-001' },
            { locale: 'en-TK', parentLocale: 'en-001' },
            { locale: 'en-TO', parentLocale: 'en-001' },
            { locale: 'en-TT', parentLocale: 'en-001' },
            { locale: 'en-TV', parentLocale: 'en-001' },
            { locale: 'en-TZ', parentLocale: 'en-001' },
            { locale: 'en-UG', parentLocale: 'en-001' },
            { locale: 'en-UM', parentLocale: 'en' },
            { locale: 'en-US', parentLocale: 'en' },
            { locale: 'en-VC', parentLocale: 'en-001' },
            { locale: 'en-VG', parentLocale: 'en-001' },
            { locale: 'en-VI', parentLocale: 'en' },
            { locale: 'en-VU', parentLocale: 'en-001' },
            { locale: 'en-WS', parentLocale: 'en-001' },
            { locale: 'en-ZA', parentLocale: 'en-001' },
            { locale: 'en-ZM', parentLocale: 'en-001' },
            { locale: 'en-ZW', parentLocale: 'en-001' },
          ]
        })())
    },
    439: function(e, a) {
      IntlPolyfill.__addLocaleData({
        locale: 'en',
        date: {
          ca: [
            'gregory',
            'buddhist',
            'chinese',
            'coptic',
            'dangi',
            'ethioaa',
            'ethiopic',
            'generic',
            'hebrew',
            'indian',
            'islamic',
            'islamicc',
            'japanese',
            'persian',
            'roc',
          ],
          hourNo0: !0,
          hour12: !0,
          formats: {
            short: '{1}, {0}',
            medium: '{1}, {0}',
            full: "{1} 'at' {0}",
            long: "{1} 'at' {0}",
            availableFormats: {
              d: 'd',
              E: 'ccc',
              Ed: 'd E',
              Ehm: 'E h:mm a',
              EHm: 'E HH:mm',
              Ehms: 'E h:mm:ss a',
              EHms: 'E HH:mm:ss',
              Gy: 'y G',
              GyMMM: 'MMM y G',
              GyMMMd: 'MMM d, y G',
              GyMMMEd: 'E, MMM d, y G',
              h: 'h a',
              H: 'HH',
              hm: 'h:mm a',
              Hm: 'HH:mm',
              hms: 'h:mm:ss a',
              Hms: 'HH:mm:ss',
              hmsv: 'h:mm:ss a v',
              Hmsv: 'HH:mm:ss v',
              hmv: 'h:mm a v',
              Hmv: 'HH:mm v',
              M: 'L',
              Md: 'M/d',
              MEd: 'E, M/d',
              MMM: 'LLL',
              MMMd: 'MMM d',
              MMMEd: 'E, MMM d',
              MMMMd: 'MMMM d',
              ms: 'mm:ss',
              y: 'y',
              yM: 'M/y',
              yMd: 'M/d/y',
              yMEd: 'E, M/d/y',
              yMMM: 'MMM y',
              yMMMd: 'MMM d, y',
              yMMMEd: 'E, MMM d, y',
              yMMMM: 'MMMM y',
              yQQQ: 'QQQ y',
              yQQQQ: 'QQQQ y',
            },
            dateFormats: {
              yMMMMEEEEd: 'EEEE, MMMM d, y',
              yMMMMd: 'MMMM d, y',
              yMMMd: 'MMM d, y',
              yMd: 'M/d/yy',
            },
            timeFormats: {
              hmmsszzzz: 'h:mm:ss a zzzz',
              hmsz: 'h:mm:ss a z',
              hms: 'h:mm:ss a',
              hm: 'h:mm a',
            },
          },
          calendars: {
            buddhist: {
              months: {
                narrow: [
                  'J',
                  'F',
                  'M',
                  'A',
                  'M',
                  'J',
                  'J',
                  'A',
                  'S',
                  'O',
                  'N',
                  'D',
                ],
                short: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                long: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ],
              },
              days: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                long: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              eras: { narrow: ['BE'], short: ['BE'], long: ['BE'] },
              dayPeriods: { am: 'AM', pm: 'PM' },
            },
            chinese: {
              months: {
                narrow: [
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                ],
                short: [
                  'Mo1',
                  'Mo2',
                  'Mo3',
                  'Mo4',
                  'Mo5',
                  'Mo6',
                  'Mo7',
                  'Mo8',
                  'Mo9',
                  'Mo10',
                  'Mo11',
                  'Mo12',
                ],
                long: [
                  'Month1',
                  'Month2',
                  'Month3',
                  'Month4',
                  'Month5',
                  'Month6',
                  'Month7',
                  'Month8',
                  'Month9',
                  'Month10',
                  'Month11',
                  'Month12',
                ],
              },
              days: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                long: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              dayPeriods: { am: 'AM', pm: 'PM' },
            },
            coptic: {
              months: {
                narrow: [
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                  '13',
                ],
                short: [
                  'Tout',
                  'Baba',
                  'Hator',
                  'Kiahk',
                  'Toba',
                  'Amshir',
                  'Baramhat',
                  'Baramouda',
                  'Bashans',
                  'Paona',
                  'Epep',
                  'Mesra',
                  'Nasie',
                ],
                long: [
                  'Tout',
                  'Baba',
                  'Hator',
                  'Kiahk',
                  'Toba',
                  'Amshir',
                  'Baramhat',
                  'Baramouda',
                  'Bashans',
                  'Paona',
                  'Epep',
                  'Mesra',
                  'Nasie',
                ],
              },
              days: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                long: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              eras: {
                narrow: ['ERA0', 'ERA1'],
                short: ['ERA0', 'ERA1'],
                long: ['ERA0', 'ERA1'],
              },
              dayPeriods: { am: 'AM', pm: 'PM' },
            },
            dangi: {
              months: {
                narrow: [
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                ],
                short: [
                  'Mo1',
                  'Mo2',
                  'Mo3',
                  'Mo4',
                  'Mo5',
                  'Mo6',
                  'Mo7',
                  'Mo8',
                  'Mo9',
                  'Mo10',
                  'Mo11',
                  'Mo12',
                ],
                long: [
                  'Month1',
                  'Month2',
                  'Month3',
                  'Month4',
                  'Month5',
                  'Month6',
                  'Month7',
                  'Month8',
                  'Month9',
                  'Month10',
                  'Month11',
                  'Month12',
                ],
              },
              days: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                long: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              dayPeriods: { am: 'AM', pm: 'PM' },
            },
            ethiopic: {
              months: {
                narrow: [
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                  '13',
                ],
                short: [
                  'Meskerem',
                  'Tekemt',
                  'Hedar',
                  'Tahsas',
                  'Ter',
                  'Yekatit',
                  'Megabit',
                  'Miazia',
                  'Genbot',
                  'Sene',
                  'Hamle',
                  'Nehasse',
                  'Pagumen',
                ],
                long: [
                  'Meskerem',
                  'Tekemt',
                  'Hedar',
                  'Tahsas',
                  'Ter',
                  'Yekatit',
                  'Megabit',
                  'Miazia',
                  'Genbot',
                  'Sene',
                  'Hamle',
                  'Nehasse',
                  'Pagumen',
                ],
              },
              days: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                long: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              eras: {
                narrow: ['ERA0', 'ERA1'],
                short: ['ERA0', 'ERA1'],
                long: ['ERA0', 'ERA1'],
              },
              dayPeriods: { am: 'AM', pm: 'PM' },
            },
            ethioaa: {
              months: {
                narrow: [
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                  '13',
                ],
                short: [
                  'Meskerem',
                  'Tekemt',
                  'Hedar',
                  'Tahsas',
                  'Ter',
                  'Yekatit',
                  'Megabit',
                  'Miazia',
                  'Genbot',
                  'Sene',
                  'Hamle',
                  'Nehasse',
                  'Pagumen',
                ],
                long: [
                  'Meskerem',
                  'Tekemt',
                  'Hedar',
                  'Tahsas',
                  'Ter',
                  'Yekatit',
                  'Megabit',
                  'Miazia',
                  'Genbot',
                  'Sene',
                  'Hamle',
                  'Nehasse',
                  'Pagumen',
                ],
              },
              days: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                long: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              eras: { narrow: ['ERA0'], short: ['ERA0'], long: ['ERA0'] },
              dayPeriods: { am: 'AM', pm: 'PM' },
            },
            generic: {
              months: {
                narrow: [
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                ],
                short: [
                  'M01',
                  'M02',
                  'M03',
                  'M04',
                  'M05',
                  'M06',
                  'M07',
                  'M08',
                  'M09',
                  'M10',
                  'M11',
                  'M12',
                ],
                long: [
                  'M01',
                  'M02',
                  'M03',
                  'M04',
                  'M05',
                  'M06',
                  'M07',
                  'M08',
                  'M09',
                  'M10',
                  'M11',
                  'M12',
                ],
              },
              days: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                long: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              eras: {
                narrow: ['ERA0', 'ERA1'],
                short: ['ERA0', 'ERA1'],
                long: ['ERA0', 'ERA1'],
              },
              dayPeriods: { am: 'AM', pm: 'PM' },
            },
            gregory: {
              months: {
                narrow: [
                  'J',
                  'F',
                  'M',
                  'A',
                  'M',
                  'J',
                  'J',
                  'A',
                  'S',
                  'O',
                  'N',
                  'D',
                ],
                short: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                long: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ],
              },
              days: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                long: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              eras: {
                narrow: ['B', 'A', 'BCE', 'CE'],
                short: ['BC', 'AD', 'BCE', 'CE'],
                long: [
                  'Before Christ',
                  'Anno Domini',
                  'Before Common Era',
                  'Common Era',
                ],
              },
              dayPeriods: { am: 'AM', pm: 'PM' },
            },
            hebrew: {
              months: {
                narrow: [
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                  '13',
                  '7',
                ],
                short: [
                  'Tishri',
                  'Heshvan',
                  'Kislev',
                  'Tevet',
                  'Shevat',
                  'Adar I',
                  'Adar',
                  'Nisan',
                  'Iyar',
                  'Sivan',
                  'Tamuz',
                  'Av',
                  'Elul',
                  'Adar II',
                ],
                long: [
                  'Tishri',
                  'Heshvan',
                  'Kislev',
                  'Tevet',
                  'Shevat',
                  'Adar I',
                  'Adar',
                  'Nisan',
                  'Iyar',
                  'Sivan',
                  'Tamuz',
                  'Av',
                  'Elul',
                  'Adar II',
                ],
              },
              days: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                long: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              eras: { narrow: ['AM'], short: ['AM'], long: ['AM'] },
              dayPeriods: { am: 'AM', pm: 'PM' },
            },
            indian: {
              months: {
                narrow: [
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                ],
                short: [
                  'Chaitra',
                  'Vaisakha',
                  'Jyaistha',
                  'Asadha',
                  'Sravana',
                  'Bhadra',
                  'Asvina',
                  'Kartika',
                  'Agrahayana',
                  'Pausa',
                  'Magha',
                  'Phalguna',
                ],
                long: [
                  'Chaitra',
                  'Vaisakha',
                  'Jyaistha',
                  'Asadha',
                  'Sravana',
                  'Bhadra',
                  'Asvina',
                  'Kartika',
                  'Agrahayana',
                  'Pausa',
                  'Magha',
                  'Phalguna',
                ],
              },
              days: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                long: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              eras: { narrow: ['Saka'], short: ['Saka'], long: ['Saka'] },
              dayPeriods: { am: 'AM', pm: 'PM' },
            },
            islamic: {
              months: {
                narrow: [
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                ],
                short: [
                  'Muh.',
                  'Saf.',
                  'Rab. I',
                  'Rab. II',
                  'Jum. I',
                  'Jum. II',
                  'Raj.',
                  'Sha.',
                  'Ram.',
                  'Shaw.',
                  'Dhuʻl-Q.',
                  'Dhuʻl-H.',
                ],
                long: [
                  'Muharram',
                  'Safar',
                  'Rabiʻ I',
                  'Rabiʻ II',
                  'Jumada I',
                  'Jumada II',
                  'Rajab',
                  'Shaʻban',
                  'Ramadan',
                  'Shawwal',
                  'Dhuʻl-Qiʻdah',
                  'Dhuʻl-Hijjah',
                ],
              },
              days: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                long: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              eras: { narrow: ['AH'], short: ['AH'], long: ['AH'] },
              dayPeriods: { am: 'AM', pm: 'PM' },
            },
            islamicc: {
              months: {
                narrow: [
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                ],
                short: [
                  'Muh.',
                  'Saf.',
                  'Rab. I',
                  'Rab. II',
                  'Jum. I',
                  'Jum. II',
                  'Raj.',
                  'Sha.',
                  'Ram.',
                  'Shaw.',
                  'Dhuʻl-Q.',
                  'Dhuʻl-H.',
                ],
                long: [
                  'Muharram',
                  'Safar',
                  'Rabiʻ I',
                  'Rabiʻ II',
                  'Jumada I',
                  'Jumada II',
                  'Rajab',
                  'Shaʻban',
                  'Ramadan',
                  'Shawwal',
                  'Dhuʻl-Qiʻdah',
                  'Dhuʻl-Hijjah',
                ],
              },
              days: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                long: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              eras: { narrow: ['AH'], short: ['AH'], long: ['AH'] },
              dayPeriods: { am: 'AM', pm: 'PM' },
            },
            japanese: {
              months: {
                narrow: [
                  'J',
                  'F',
                  'M',
                  'A',
                  'M',
                  'J',
                  'J',
                  'A',
                  'S',
                  'O',
                  'N',
                  'D',
                ],
                short: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                long: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ],
              },
              days: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                long: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              eras: {
                narrow: [
                  'Taika (645–650)',
                  'Hakuchi (650–671)',
                  'Hakuhō (672–686)',
                  'Shuchō (686–701)',
                  'Taihō (701–704)',
                  'Keiun (704–708)',
                  'Wadō (708–715)',
                  'Reiki (715–717)',
                  'Yōrō (717–724)',
                  'Jinki (724–729)',
                  'Tenpyō (729–749)',
                  'Tenpyō-kampō (749-749)',
                  'Tenpyō-shōhō (749-757)',
                  'Tenpyō-hōji (757-765)',
                  'Tenpyō-jingo (765-767)',
                  'Jingo-keiun (767-770)',
                  'Hōki (770–780)',
                  'Ten-ō (781-782)',
                  'Enryaku (782–806)',
                  'Daidō (806–810)',
                  'Kōnin (810–824)',
                  'Tenchō (824–834)',
                  'Jōwa (834–848)',
                  'Kajō (848–851)',
                  'Ninju (851–854)',
                  'Saikō (854–857)',
                  'Ten-an (857-859)',
                  'Jōgan (859–877)',
                  'Gangyō (877–885)',
                  'Ninna (885–889)',
                  'Kanpyō (889–898)',
                  'Shōtai (898–901)',
                  'Engi (901–923)',
                  'Enchō (923–931)',
                  'Jōhei (931–938)',
                  'Tengyō (938–947)',
                  'Tenryaku (947–957)',
                  'Tentoku (957–961)',
                  'Ōwa (961–964)',
                  'Kōhō (964–968)',
                  'Anna (968–970)',
                  'Tenroku (970–973)',
                  'Ten’en (973–976)',
                  'Jōgen (976–978)',
                  'Tengen (978–983)',
                  'Eikan (983–985)',
                  'Kanna (985–987)',
                  'Eien (987–989)',
                  'Eiso (989–990)',
                  'Shōryaku (990–995)',
                  'Chōtoku (995–999)',
                  'Chōhō (999–1004)',
                  'Kankō (1004–1012)',
                  'Chōwa (1012–1017)',
                  'Kannin (1017–1021)',
                  'Jian (1021–1024)',
                  'Manju (1024–1028)',
                  'Chōgen (1028–1037)',
                  'Chōryaku (1037–1040)',
                  'Chōkyū (1040–1044)',
                  'Kantoku (1044–1046)',
                  'Eishō (1046–1053)',
                  'Tengi (1053–1058)',
                  'Kōhei (1058–1065)',
                  'Jiryaku (1065–1069)',
                  'Enkyū (1069–1074)',
                  'Shōho (1074–1077)',
                  'Shōryaku (1077–1081)',
                  'Eihō (1081–1084)',
                  'Ōtoku (1084–1087)',
                  'Kanji (1087–1094)',
                  'Kahō (1094–1096)',
                  'Eichō (1096–1097)',
                  'Jōtoku (1097–1099)',
                  'Kōwa (1099–1104)',
                  'Chōji (1104–1106)',
                  'Kashō (1106–1108)',
                  'Tennin (1108–1110)',
                  'Ten-ei (1110-1113)',
                  'Eikyū (1113–1118)',
                  'Gen’ei (1118–1120)',
                  'Hōan (1120–1124)',
                  'Tenji (1124–1126)',
                  'Daiji (1126–1131)',
                  'Tenshō (1131–1132)',
                  'Chōshō (1132–1135)',
                  'Hōen (1135–1141)',
                  'Eiji (1141–1142)',
                  'Kōji (1142–1144)',
                  'Ten’yō (1144–1145)',
                  'Kyūan (1145–1151)',
                  'Ninpei (1151–1154)',
                  'Kyūju (1154–1156)',
                  'Hōgen (1156–1159)',
                  'Heiji (1159–1160)',
                  'Eiryaku (1160–1161)',
                  'Ōho (1161–1163)',
                  'Chōkan (1163–1165)',
                  'Eiman (1165–1166)',
                  'Nin’an (1166–1169)',
                  'Kaō (1169–1171)',
                  'Shōan (1171–1175)',
                  'Angen (1175–1177)',
                  'Jishō (1177–1181)',
                  'Yōwa (1181–1182)',
                  'Juei (1182–1184)',
                  'Genryaku (1184–1185)',
                  'Bunji (1185–1190)',
                  'Kenkyū (1190–1199)',
                  'Shōji (1199–1201)',
                  'Kennin (1201–1204)',
                  'Genkyū (1204–1206)',
                  'Ken’ei (1206–1207)',
                  'Jōgen (1207–1211)',
                  'Kenryaku (1211–1213)',
                  'Kenpō (1213–1219)',
                  'Jōkyū (1219–1222)',
                  'Jōō (1222–1224)',
                  'Gennin (1224–1225)',
                  'Karoku (1225–1227)',
                  'Antei (1227–1229)',
                  'Kanki (1229–1232)',
                  'Jōei (1232–1233)',
                  'Tenpuku (1233–1234)',
                  'Bunryaku (1234–1235)',
                  'Katei (1235–1238)',
                  'Ryakunin (1238–1239)',
                  'En’ō (1239–1240)',
                  'Ninji (1240–1243)',
                  'Kangen (1243–1247)',
                  'Hōji (1247–1249)',
                  'Kenchō (1249–1256)',
                  'Kōgen (1256–1257)',
                  'Shōka (1257–1259)',
                  'Shōgen (1259–1260)',
                  'Bun’ō (1260–1261)',
                  'Kōchō (1261–1264)',
                  'Bun’ei (1264–1275)',
                  'Kenji (1275–1278)',
                  'Kōan (1278–1288)',
                  'Shōō (1288–1293)',
                  'Einin (1293–1299)',
                  'Shōan (1299–1302)',
                  'Kengen (1302–1303)',
                  'Kagen (1303–1306)',
                  'Tokuji (1306–1308)',
                  'Enkyō (1308–1311)',
                  'Ōchō (1311–1312)',
                  'Shōwa (1312–1317)',
                  'Bunpō (1317–1319)',
                  'Genō (1319–1321)',
                  'Genkō (1321–1324)',
                  'Shōchū (1324–1326)',
                  'Karyaku (1326–1329)',
                  'Gentoku (1329–1331)',
                  'Genkō (1331–1334)',
                  'Kenmu (1334–1336)',
                  'Engen (1336–1340)',
                  'Kōkoku (1340–1346)',
                  'Shōhei (1346–1370)',
                  'Kentoku (1370–1372)',
                  'Bunchū (1372–1375)',
                  'Tenju (1375–1379)',
                  'Kōryaku (1379–1381)',
                  'Kōwa (1381–1384)',
                  'Genchū (1384–1392)',
                  'Meitoku (1384–1387)',
                  'Kakei (1387–1389)',
                  'Kōō (1389–1390)',
                  'Meitoku (1390–1394)',
                  'Ōei (1394–1428)',
                  'Shōchō (1428–1429)',
                  'Eikyō (1429–1441)',
                  'Kakitsu (1441–1444)',
                  'Bun’an (1444–1449)',
                  'Hōtoku (1449–1452)',
                  'Kyōtoku (1452–1455)',
                  'Kōshō (1455–1457)',
                  'Chōroku (1457–1460)',
                  'Kanshō (1460–1466)',
                  'Bunshō (1466–1467)',
                  'Ōnin (1467–1469)',
                  'Bunmei (1469–1487)',
                  'Chōkyō (1487–1489)',
                  'Entoku (1489–1492)',
                  'Meiō (1492–1501)',
                  'Bunki (1501–1504)',
                  'Eishō (1504–1521)',
                  'Taiei (1521–1528)',
                  'Kyōroku (1528–1532)',
                  'Tenbun (1532–1555)',
                  'Kōji (1555–1558)',
                  'Eiroku (1558–1570)',
                  'Genki (1570–1573)',
                  'Tenshō (1573–1592)',
                  'Bunroku (1592–1596)',
                  'Keichō (1596–1615)',
                  'Genna (1615–1624)',
                  'Kan’ei (1624–1644)',
                  'Shōho (1644–1648)',
                  'Keian (1648–1652)',
                  'Jōō (1652–1655)',
                  'Meireki (1655–1658)',
                  'Manji (1658–1661)',
                  'Kanbun (1661–1673)',
                  'Enpō (1673–1681)',
                  'Tenna (1681–1684)',
                  'Jōkyō (1684–1688)',
                  'Genroku (1688–1704)',
                  'Hōei (1704–1711)',
                  'Shōtoku (1711–1716)',
                  'Kyōhō (1716–1736)',
                  'Genbun (1736–1741)',
                  'Kanpō (1741–1744)',
                  'Enkyō (1744–1748)',
                  'Kan’en (1748–1751)',
                  'Hōreki (1751–1764)',
                  'Meiwa (1764–1772)',
                  'An’ei (1772–1781)',
                  'Tenmei (1781–1789)',
                  'Kansei (1789–1801)',
                  'Kyōwa (1801–1804)',
                  'Bunka (1804–1818)',
                  'Bunsei (1818–1830)',
                  'Tenpō (1830–1844)',
                  'Kōka (1844–1848)',
                  'Kaei (1848–1854)',
                  'Ansei (1854–1860)',
                  'Man’en (1860–1861)',
                  'Bunkyū (1861–1864)',
                  'Genji (1864–1865)',
                  'Keiō (1865–1868)',
                  'M',
                  'T',
                  'S',
                  'H',
                ],
                short: [
                  'Taika (645–650)',
                  'Hakuchi (650–671)',
                  'Hakuhō (672–686)',
                  'Shuchō (686–701)',
                  'Taihō (701–704)',
                  'Keiun (704–708)',
                  'Wadō (708–715)',
                  'Reiki (715–717)',
                  'Yōrō (717–724)',
                  'Jinki (724–729)',
                  'Tenpyō (729–749)',
                  'Tenpyō-kampō (749-749)',
                  'Tenpyō-shōhō (749-757)',
                  'Tenpyō-hōji (757-765)',
                  'Tenpyō-jingo (765-767)',
                  'Jingo-keiun (767-770)',
                  'Hōki (770–780)',
                  'Ten-ō (781-782)',
                  'Enryaku (782–806)',
                  'Daidō (806–810)',
                  'Kōnin (810–824)',
                  'Tenchō (824–834)',
                  'Jōwa (834–848)',
                  'Kajō (848–851)',
                  'Ninju (851–854)',
                  'Saikō (854–857)',
                  'Ten-an (857-859)',
                  'Jōgan (859–877)',
                  'Gangyō (877–885)',
                  'Ninna (885–889)',
                  'Kanpyō (889–898)',
                  'Shōtai (898–901)',
                  'Engi (901–923)',
                  'Enchō (923–931)',
                  'Jōhei (931–938)',
                  'Tengyō (938–947)',
                  'Tenryaku (947–957)',
                  'Tentoku (957–961)',
                  'Ōwa (961–964)',
                  'Kōhō (964–968)',
                  'Anna (968–970)',
                  'Tenroku (970–973)',
                  'Ten’en (973–976)',
                  'Jōgen (976–978)',
                  'Tengen (978–983)',
                  'Eikan (983–985)',
                  'Kanna (985–987)',
                  'Eien (987–989)',
                  'Eiso (989–990)',
                  'Shōryaku (990–995)',
                  'Chōtoku (995–999)',
                  'Chōhō (999–1004)',
                  'Kankō (1004–1012)',
                  'Chōwa (1012–1017)',
                  'Kannin (1017–1021)',
                  'Jian (1021–1024)',
                  'Manju (1024–1028)',
                  'Chōgen (1028–1037)',
                  'Chōryaku (1037–1040)',
                  'Chōkyū (1040–1044)',
                  'Kantoku (1044–1046)',
                  'Eishō (1046–1053)',
                  'Tengi (1053–1058)',
                  'Kōhei (1058–1065)',
                  'Jiryaku (1065–1069)',
                  'Enkyū (1069–1074)',
                  'Shōho (1074–1077)',
                  'Shōryaku (1077–1081)',
                  'Eihō (1081–1084)',
                  'Ōtoku (1084–1087)',
                  'Kanji (1087–1094)',
                  'Kahō (1094–1096)',
                  'Eichō (1096–1097)',
                  'Jōtoku (1097–1099)',
                  'Kōwa (1099–1104)',
                  'Chōji (1104–1106)',
                  'Kashō (1106–1108)',
                  'Tennin (1108–1110)',
                  'Ten-ei (1110-1113)',
                  'Eikyū (1113–1118)',
                  'Gen’ei (1118–1120)',
                  'Hōan (1120–1124)',
                  'Tenji (1124–1126)',
                  'Daiji (1126–1131)',
                  'Tenshō (1131–1132)',
                  'Chōshō (1132–1135)',
                  'Hōen (1135–1141)',
                  'Eiji (1141–1142)',
                  'Kōji (1142–1144)',
                  'Ten’yō (1144–1145)',
                  'Kyūan (1145–1151)',
                  'Ninpei (1151–1154)',
                  'Kyūju (1154–1156)',
                  'Hōgen (1156–1159)',
                  'Heiji (1159–1160)',
                  'Eiryaku (1160–1161)',
                  'Ōho (1161–1163)',
                  'Chōkan (1163–1165)',
                  'Eiman (1165–1166)',
                  'Nin’an (1166–1169)',
                  'Kaō (1169–1171)',
                  'Shōan (1171–1175)',
                  'Angen (1175–1177)',
                  'Jishō (1177–1181)',
                  'Yōwa (1181–1182)',
                  'Juei (1182–1184)',
                  'Genryaku (1184–1185)',
                  'Bunji (1185–1190)',
                  'Kenkyū (1190–1199)',
                  'Shōji (1199–1201)',
                  'Kennin (1201–1204)',
                  'Genkyū (1204–1206)',
                  'Ken’ei (1206–1207)',
                  'Jōgen (1207–1211)',
                  'Kenryaku (1211–1213)',
                  'Kenpō (1213–1219)',
                  'Jōkyū (1219–1222)',
                  'Jōō (1222–1224)',
                  'Gennin (1224–1225)',
                  'Karoku (1225–1227)',
                  'Antei (1227–1229)',
                  'Kanki (1229–1232)',
                  'Jōei (1232–1233)',
                  'Tenpuku (1233–1234)',
                  'Bunryaku (1234–1235)',
                  'Katei (1235–1238)',
                  'Ryakunin (1238–1239)',
                  'En’ō (1239–1240)',
                  'Ninji (1240–1243)',
                  'Kangen (1243–1247)',
                  'Hōji (1247–1249)',
                  'Kenchō (1249–1256)',
                  'Kōgen (1256–1257)',
                  'Shōka (1257–1259)',
                  'Shōgen (1259–1260)',
                  'Bun’ō (1260–1261)',
                  'Kōchō (1261–1264)',
                  'Bun’ei (1264–1275)',
                  'Kenji (1275–1278)',
                  'Kōan (1278–1288)',
                  'Shōō (1288–1293)',
                  'Einin (1293–1299)',
                  'Shōan (1299–1302)',
                  'Kengen (1302–1303)',
                  'Kagen (1303–1306)',
                  'Tokuji (1306–1308)',
                  'Enkyō (1308–1311)',
                  'Ōchō (1311–1312)',
                  'Shōwa (1312–1317)',
                  'Bunpō (1317–1319)',
                  'Genō (1319–1321)',
                  'Genkō (1321–1324)',
                  'Shōchū (1324–1326)',
                  'Karyaku (1326–1329)',
                  'Gentoku (1329–1331)',
                  'Genkō (1331–1334)',
                  'Kenmu (1334–1336)',
                  'Engen (1336–1340)',
                  'Kōkoku (1340–1346)',
                  'Shōhei (1346–1370)',
                  'Kentoku (1370–1372)',
                  'Bunchū (1372–1375)',
                  'Tenju (1375–1379)',
                  'Kōryaku (1379–1381)',
                  'Kōwa (1381–1384)',
                  'Genchū (1384–1392)',
                  'Meitoku (1384–1387)',
                  'Kakei (1387–1389)',
                  'Kōō (1389–1390)',
                  'Meitoku (1390–1394)',
                  'Ōei (1394–1428)',
                  'Shōchō (1428–1429)',
                  'Eikyō (1429–1441)',
                  'Kakitsu (1441–1444)',
                  'Bun’an (1444–1449)',
                  'Hōtoku (1449–1452)',
                  'Kyōtoku (1452–1455)',
                  'Kōshō (1455–1457)',
                  'Chōroku (1457–1460)',
                  'Kanshō (1460–1466)',
                  'Bunshō (1466–1467)',
                  'Ōnin (1467–1469)',
                  'Bunmei (1469–1487)',
                  'Chōkyō (1487–1489)',
                  'Entoku (1489–1492)',
                  'Meiō (1492–1501)',
                  'Bunki (1501–1504)',
                  'Eishō (1504–1521)',
                  'Taiei (1521–1528)',
                  'Kyōroku (1528–1532)',
                  'Tenbun (1532–1555)',
                  'Kōji (1555–1558)',
                  'Eiroku (1558–1570)',
                  'Genki (1570–1573)',
                  'Tenshō (1573–1592)',
                  'Bunroku (1592–1596)',
                  'Keichō (1596–1615)',
                  'Genna (1615–1624)',
                  'Kan’ei (1624–1644)',
                  'Shōho (1644–1648)',
                  'Keian (1648–1652)',
                  'Jōō (1652–1655)',
                  'Meireki (1655–1658)',
                  'Manji (1658–1661)',
                  'Kanbun (1661–1673)',
                  'Enpō (1673–1681)',
                  'Tenna (1681–1684)',
                  'Jōkyō (1684–1688)',
                  'Genroku (1688–1704)',
                  'Hōei (1704–1711)',
                  'Shōtoku (1711–1716)',
                  'Kyōhō (1716–1736)',
                  'Genbun (1736–1741)',
                  'Kanpō (1741–1744)',
                  'Enkyō (1744–1748)',
                  'Kan’en (1748–1751)',
                  'Hōreki (1751–1764)',
                  'Meiwa (1764–1772)',
                  'An’ei (1772–1781)',
                  'Tenmei (1781–1789)',
                  'Kansei (1789–1801)',
                  'Kyōwa (1801–1804)',
                  'Bunka (1804–1818)',
                  'Bunsei (1818–1830)',
                  'Tenpō (1830–1844)',
                  'Kōka (1844–1848)',
                  'Kaei (1848–1854)',
                  'Ansei (1854–1860)',
                  'Man’en (1860–1861)',
                  'Bunkyū (1861–1864)',
                  'Genji (1864–1865)',
                  'Keiō (1865–1868)',
                  'Meiji',
                  'Taishō',
                  'Shōwa',
                  'Heisei',
                ],
                long: [
                  'Taika (645–650)',
                  'Hakuchi (650–671)',
                  'Hakuhō (672–686)',
                  'Shuchō (686–701)',
                  'Taihō (701–704)',
                  'Keiun (704–708)',
                  'Wadō (708–715)',
                  'Reiki (715–717)',
                  'Yōrō (717–724)',
                  'Jinki (724–729)',
                  'Tenpyō (729–749)',
                  'Tenpyō-kampō (749-749)',
                  'Tenpyō-shōhō (749-757)',
                  'Tenpyō-hōji (757-765)',
                  'Tenpyō-jingo (765-767)',
                  'Jingo-keiun (767-770)',
                  'Hōki (770–780)',
                  'Ten-ō (781-782)',
                  'Enryaku (782–806)',
                  'Daidō (806–810)',
                  'Kōnin (810–824)',
                  'Tenchō (824–834)',
                  'Jōwa (834–848)',
                  'Kajō (848–851)',
                  'Ninju (851–854)',
                  'Saikō (854–857)',
                  'Ten-an (857-859)',
                  'Jōgan (859–877)',
                  'Gangyō (877–885)',
                  'Ninna (885–889)',
                  'Kanpyō (889–898)',
                  'Shōtai (898–901)',
                  'Engi (901–923)',
                  'Enchō (923–931)',
                  'Jōhei (931–938)',
                  'Tengyō (938–947)',
                  'Tenryaku (947–957)',
                  'Tentoku (957–961)',
                  'Ōwa (961–964)',
                  'Kōhō (964–968)',
                  'Anna (968–970)',
                  'Tenroku (970–973)',
                  'Ten’en (973–976)',
                  'Jōgen (976–978)',
                  'Tengen (978–983)',
                  'Eikan (983–985)',
                  'Kanna (985–987)',
                  'Eien (987–989)',
                  'Eiso (989–990)',
                  'Shōryaku (990–995)',
                  'Chōtoku (995–999)',
                  'Chōhō (999–1004)',
                  'Kankō (1004–1012)',
                  'Chōwa (1012–1017)',
                  'Kannin (1017–1021)',
                  'Jian (1021–1024)',
                  'Manju (1024–1028)',
                  'Chōgen (1028–1037)',
                  'Chōryaku (1037–1040)',
                  'Chōkyū (1040–1044)',
                  'Kantoku (1044–1046)',
                  'Eishō (1046–1053)',
                  'Tengi (1053–1058)',
                  'Kōhei (1058–1065)',
                  'Jiryaku (1065–1069)',
                  'Enkyū (1069–1074)',
                  'Shōho (1074–1077)',
                  'Shōryaku (1077–1081)',
                  'Eihō (1081–1084)',
                  'Ōtoku (1084–1087)',
                  'Kanji (1087–1094)',
                  'Kahō (1094–1096)',
                  'Eichō (1096–1097)',
                  'Jōtoku (1097–1099)',
                  'Kōwa (1099–1104)',
                  'Chōji (1104–1106)',
                  'Kashō (1106–1108)',
                  'Tennin (1108–1110)',
                  'Ten-ei (1110-1113)',
                  'Eikyū (1113–1118)',
                  'Gen’ei (1118–1120)',
                  'Hōan (1120–1124)',
                  'Tenji (1124–1126)',
                  'Daiji (1126–1131)',
                  'Tenshō (1131–1132)',
                  'Chōshō (1132–1135)',
                  'Hōen (1135–1141)',
                  'Eiji (1141–1142)',
                  'Kōji (1142–1144)',
                  'Ten’yō (1144–1145)',
                  'Kyūan (1145–1151)',
                  'Ninpei (1151–1154)',
                  'Kyūju (1154–1156)',
                  'Hōgen (1156–1159)',
                  'Heiji (1159–1160)',
                  'Eiryaku (1160–1161)',
                  'Ōho (1161–1163)',
                  'Chōkan (1163–1165)',
                  'Eiman (1165–1166)',
                  'Nin’an (1166–1169)',
                  'Kaō (1169–1171)',
                  'Shōan (1171–1175)',
                  'Angen (1175–1177)',
                  'Jishō (1177–1181)',
                  'Yōwa (1181–1182)',
                  'Juei (1182–1184)',
                  'Genryaku (1184–1185)',
                  'Bunji (1185–1190)',
                  'Kenkyū (1190–1199)',
                  'Shōji (1199–1201)',
                  'Kennin (1201–1204)',
                  'Genkyū (1204–1206)',
                  'Ken’ei (1206–1207)',
                  'Jōgen (1207–1211)',
                  'Kenryaku (1211–1213)',
                  'Kenpō (1213–1219)',
                  'Jōkyū (1219–1222)',
                  'Jōō (1222–1224)',
                  'Gennin (1224–1225)',
                  'Karoku (1225–1227)',
                  'Antei (1227–1229)',
                  'Kanki (1229–1232)',
                  'Jōei (1232–1233)',
                  'Tenpuku (1233–1234)',
                  'Bunryaku (1234–1235)',
                  'Katei (1235–1238)',
                  'Ryakunin (1238–1239)',
                  'En’ō (1239–1240)',
                  'Ninji (1240–1243)',
                  'Kangen (1243–1247)',
                  'Hōji (1247–1249)',
                  'Kenchō (1249–1256)',
                  'Kōgen (1256–1257)',
                  'Shōka (1257–1259)',
                  'Shōgen (1259–1260)',
                  'Bun’ō (1260–1261)',
                  'Kōchō (1261–1264)',
                  'Bun’ei (1264–1275)',
                  'Kenji (1275–1278)',
                  'Kōan (1278–1288)',
                  'Shōō (1288–1293)',
                  'Einin (1293–1299)',
                  'Shōan (1299–1302)',
                  'Kengen (1302–1303)',
                  'Kagen (1303–1306)',
                  'Tokuji (1306–1308)',
                  'Enkyō (1308–1311)',
                  'Ōchō (1311–1312)',
                  'Shōwa (1312–1317)',
                  'Bunpō (1317–1319)',
                  'Genō (1319–1321)',
                  'Genkō (1321–1324)',
                  'Shōchū (1324–1326)',
                  'Karyaku (1326–1329)',
                  'Gentoku (1329–1331)',
                  'Genkō (1331–1334)',
                  'Kenmu (1334–1336)',
                  'Engen (1336–1340)',
                  'Kōkoku (1340–1346)',
                  'Shōhei (1346–1370)',
                  'Kentoku (1370–1372)',
                  'Bunchū (1372–1375)',
                  'Tenju (1375–1379)',
                  'Kōryaku (1379–1381)',
                  'Kōwa (1381–1384)',
                  'Genchū (1384–1392)',
                  'Meitoku (1384–1387)',
                  'Kakei (1387–1389)',
                  'Kōō (1389–1390)',
                  'Meitoku (1390–1394)',
                  'Ōei (1394–1428)',
                  'Shōchō (1428–1429)',
                  'Eikyō (1429–1441)',
                  'Kakitsu (1441–1444)',
                  'Bun’an (1444–1449)',
                  'Hōtoku (1449–1452)',
                  'Kyōtoku (1452–1455)',
                  'Kōshō (1455–1457)',
                  'Chōroku (1457–1460)',
                  'Kanshō (1460–1466)',
                  'Bunshō (1466–1467)',
                  'Ōnin (1467–1469)',
                  'Bunmei (1469–1487)',
                  'Chōkyō (1487–1489)',
                  'Entoku (1489–1492)',
                  'Meiō (1492–1501)',
                  'Bunki (1501–1504)',
                  'Eishō (1504–1521)',
                  'Taiei (1521–1528)',
                  'Kyōroku (1528–1532)',
                  'Tenbun (1532–1555)',
                  'Kōji (1555–1558)',
                  'Eiroku (1558–1570)',
                  'Genki (1570–1573)',
                  'Tenshō (1573–1592)',
                  'Bunroku (1592–1596)',
                  'Keichō (1596–1615)',
                  'Genna (1615–1624)',
                  'Kan’ei (1624–1644)',
                  'Shōho (1644–1648)',
                  'Keian (1648–1652)',
                  'Jōō (1652–1655)',
                  'Meireki (1655–1658)',
                  'Manji (1658–1661)',
                  'Kanbun (1661–1673)',
                  'Enpō (1673–1681)',
                  'Tenna (1681–1684)',
                  'Jōkyō (1684–1688)',
                  'Genroku (1688–1704)',
                  'Hōei (1704–1711)',
                  'Shōtoku (1711–1716)',
                  'Kyōhō (1716–1736)',
                  'Genbun (1736–1741)',
                  'Kanpō (1741–1744)',
                  'Enkyō (1744–1748)',
                  'Kan’en (1748–1751)',
                  'Hōreki (1751–1764)',
                  'Meiwa (1764–1772)',
                  'An’ei (1772–1781)',
                  'Tenmei (1781–1789)',
                  'Kansei (1789–1801)',
                  'Kyōwa (1801–1804)',
                  'Bunka (1804–1818)',
                  'Bunsei (1818–1830)',
                  'Tenpō (1830–1844)',
                  'Kōka (1844–1848)',
                  'Kaei (1848–1854)',
                  'Ansei (1854–1860)',
                  'Man’en (1860–1861)',
                  'Bunkyū (1861–1864)',
                  'Genji (1864–1865)',
                  'Keiō (1865–1868)',
                  'Meiji',
                  'Taishō',
                  'Shōwa',
                  'Heisei',
                ],
              },
              dayPeriods: { am: 'AM', pm: 'PM' },
            },
            persian: {
              months: {
                narrow: [
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                ],
                short: [
                  'Farvardin',
                  'Ordibehesht',
                  'Khordad',
                  'Tir',
                  'Mordad',
                  'Shahrivar',
                  'Mehr',
                  'Aban',
                  'Azar',
                  'Dey',
                  'Bahman',
                  'Esfand',
                ],
                long: [
                  'Farvardin',
                  'Ordibehesht',
                  'Khordad',
                  'Tir',
                  'Mordad',
                  'Shahrivar',
                  'Mehr',
                  'Aban',
                  'Azar',
                  'Dey',
                  'Bahman',
                  'Esfand',
                ],
              },
              days: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                long: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              eras: { narrow: ['AP'], short: ['AP'], long: ['AP'] },
              dayPeriods: { am: 'AM', pm: 'PM' },
            },
            roc: {
              months: {
                narrow: [
                  'J',
                  'F',
                  'M',
                  'A',
                  'M',
                  'J',
                  'J',
                  'A',
                  'S',
                  'O',
                  'N',
                  'D',
                ],
                short: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                long: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ],
              },
              days: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                long: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              eras: {
                narrow: ['Before R.O.C.', 'Minguo'],
                short: ['Before R.O.C.', 'Minguo'],
                long: ['Before R.O.C.', 'Minguo'],
              },
              dayPeriods: { am: 'AM', pm: 'PM' },
            },
          },
        },
        number: {
          nu: ['latn'],
          patterns: {
            decimal: {
              positivePattern: '{number}',
              negativePattern: '{minusSign}{number}',
            },
            currency: {
              positivePattern: '{currency}{number}',
              negativePattern: '{minusSign}{currency}{number}',
            },
            percent: {
              positivePattern: '{number}{percentSign}',
              negativePattern: '{minusSign}{number}{percentSign}',
            },
          },
          symbols: {
            latn: {
              decimal: '.',
              group: ',',
              nan: 'NaN',
              plusSign: '+',
              minusSign: '-',
              percentSign: '%',
              infinity: '∞',
            },
          },
          currencies: {
            AUD: 'A$',
            BRL: 'R$',
            CAD: 'CA$',
            CNY: 'CN¥',
            EUR: '€',
            GBP: '£',
            HKD: 'HK$',
            ILS: '₪',
            INR: '₹',
            JPY: '¥',
            KRW: '₩',
            MXN: 'MX$',
            NZD: 'NZ$',
            TWD: 'NT$',
            USD: '$',
            VND: '₫',
            XAF: 'FCFA',
            XCD: 'EC$',
            XOF: 'CFA',
            XPF: 'CFPF',
          },
        },
      })
    },
    440: function(e, a) {
      e.exports = {
        headerTitle: 'Szent Anna Guesthouse and Apartment',
        headerCompTitle: 'Szent Anna Pension',
        headerCompSubtitle: 'Hidden little oasis in Esztergom',
        navBemutat: 'Introduction',
        navSzobak: 'Rooms',
        navSzolg: 'Services',
        navVelemeny: 'Comments',
        navFoglalas: 'Booking',
        bemutatkozasTitle: 'Charming atmosphere, cosy place',
        bemutatkozasDescription:
          'Our pension opened its doors in 2003. In 2019 we fully renovated every room to the modern standards. We have 6 two person rooms, a four person cosy and a seperated fully furnished 4 person apartman house',
        szobakTitle: 'Unique rooms, high standards',
        szobakDescription:
          'All of our rooms are equipped with multifunctional air cooler, which function either as an air cooler or warmer. In every room you can find a big screen LED TV, where you can watch foreign channels too. You can store your valuable objects in the maximum security home safe. Our minibar has cool refreshments and snacks',
        szobakKullApTitle: 'Separated apartment',
        szobakKullApDesc:
          'Our separated apartment is fully furnished with everything you need for your stay: kitchen, washing machine, bath and shower',
        szobakMacTitle: 'Arany-kék',
        szobakMentaTitle: 'Menta',
        szobakPinkTitle: 'Pink',
        szobakRainforestTitle: 'Esőerdő',
        szobakRoseTitle: 'Rózsa',
        szobakApartmanTitle: 'Apartman',
        szobakApartmanDesc:
          'Our apartment is fully furnished with everything you need for your stay: kitchen, washing machine, bath and shower',
        szobakFloorTitle: 'Floor level room',
        szobakFloorDesc: 'Handicapped room',
        commentsTitle: 'They wrote about us',
        szolgTitle: 'Services',
        szolgBreakf: 'Breakfast',
        szolgBreakfDesc:
          'You can order  breakfast for 1500 HUF / person / night',
        szolgWiFiTitle: 'Wi-Fi',
        szolgWiFiDesc: 'Free Wi-Fi service',
        szolgBicycleTitle: 'Bicycle renting',
        szolgBicycleDesc: 'You can rent bicycles for 1500 HUF / person / day',
        szolgTuraKenuKajakTitle: 'Kayak and kenu renting',
        szolgTuraKenuKajakDesc: 'Please ask for more information in person',
        szolgAquaTitle: 'Aquasziget voucher',
        szolgAquaDesc: '20% voucher for Esztergoms aqua park: Aquaszigetre',
        foglTitle: 'Booking',
        foglSubtitle: "Don't hesitate, book now!",
        foglHaziString: 'In order to book, you must accept ',
        foglHaziLink: 'the house rules, which you can find by clicking here',
        foglAccept: 'I accept the house rules',
        foglButton: 'Book now!',
        elerTitle: 'Contact',
        elerCimTitle: 'Address',
        elerCimPhoneTitle: 'Phone number',
        elerPhone: '+36 20 3914 407',
        elerEmailTitle: 'E-mail',
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-index-en-js-a77d6760ee2764846936.js.map
