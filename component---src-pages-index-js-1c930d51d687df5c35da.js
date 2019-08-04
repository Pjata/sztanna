;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    196: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        l = a.n(n),
        c = a(197),
        s = a(203),
        r = a.n(s),
        i = a(220),
        o = a(201),
        m = a(224),
        u = a.n(m),
        p = function(e) {
          return l.a.createElement(
            'header',
            { id: 'header', className: 'alt' },
            l.a.createElement(
              'span',
              { className: 'logo' },
              l.a.createElement('img', { src: u.a, alt: '' })
            ),
            l.a.createElement('h1', null, 'Szent Anna Panzió'),
            l.a.createElement('p', null, 'Rejtett kis oázis Esztergomban')
          )
        },
        f = a(225),
        d = a.n(f),
        E = a(238),
        g = a.n(E)
      var b = function(e) {
          return e.children
        },
        h = (function(e) {
          var t, a
          function n() {
            var t
            return (
              ((t = e.call(this) || this).handleClick = t.handleClick.bind(
                (function(e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    )
                  return e
                })(t)
              )),
              t
            )
          }
          ;(a = e),
            ((t = n).prototype = Object.create(a.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = a)
          var c = n.prototype
          return (
            (c.componentDidMount = function() {
              g.a.polyfill()
            }),
            (c.handleClick = function(e) {
              e.preventDefault()
              var t = 0,
                a = !0,
                n = this.props,
                l = n.type,
                c = n.element,
                s = n.offset,
                r = n.timeout
              if (l && c)
                switch (l) {
                  case 'class':
                    a = !!(t = document.getElementsByClassName(c)[0])
                    break
                  case 'id':
                    a = !!(t = document.getElementById(c))
                }
              a
                ? this.scrollTo(t, s, r)
                : console.log('Element not found: ' + c)
            }),
            (c.scrollTo = function(e, t, a) {
              void 0 === t && (t = 0), void 0 === a && (a = null)
              var n = e ? e.getBoundingClientRect().top + window.pageYOffset : 0
              a
                ? setTimeout(function() {
                    window.scroll({ top: n + t, left: 0, behavior: 'smooth' })
                  }, a)
                : window.scroll({ top: n + t, left: 0, behavior: 'smooth' })
            }),
            (c.render = function() {
              return l.a.createElement(
                b,
                null,
                'object' == typeof this.props.children
                  ? l.a.cloneElement(this.props.children, {
                      onClick: this.handleClick,
                    })
                  : l.a.createElement(
                      'span',
                      { onClick: this.handleClick },
                      this.props.children
                    )
              )
            }),
            n
          )
        })(l.a.Component),
        j = function(e) {
          return l.a.createElement(
            'nav',
            { id: 'nav', className: e.sticky ? 'alt' : '' },
            l.a.createElement(
              d.a,
              {
                items: ['intro', 'first', 'second', 'cta'],
                currentClassName: 'is-active',
                offset: -300,
              },
              l.a.createElement(
                'li',
                null,
                l.a.createElement(
                  h,
                  { type: 'id', element: 'intro' },
                  l.a.createElement('a', { href: '#' }, 'Bemutatkozás')
                )
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(
                  h,
                  { type: 'id', element: 'first' },
                  l.a.createElement('a', { href: '#' }, 'Szobáink')
                )
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(
                  h,
                  { type: 'id', element: 'second' },
                  l.a.createElement('a', { href: '#' }, 'Szolgáltatások')
                )
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(
                  h,
                  { type: 'id', element: 'velemenyek' },
                  l.a.createElement('a', { href: '#' }, 'Vélemények')
                )
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(
                  h,
                  { type: 'id', element: 'foglalas' },
                  l.a.createElement('a', { href: '#' }, 'Foglalás')
                )
              )
            )
          )
        },
        y = a(206),
        w = a.n(y),
        M = function(e) {
          return l.a.createElement(
            'section',
            { id: 'intro', className: 'main' },
            l.a.createElement(
              'div',
              { className: 'spotlight' },
              l.a.createElement(
                'div',
                { className: 'content' },
                l.a.createElement(
                  'header',
                  { className: 'major' },
                  l.a.createElement(
                    'h2',
                    null,
                    'Családias környezet, meghitt hangulat'
                  )
                ),
                l.a.createElement(
                  'p',
                  null,
                  'Panziónk családi vállalkozásként 2003.-ban nyitotta meg kapuit. 2019.-ben felfrissülve, a mai kor igényeinek megfelelve 6 db két férőhelyes szobával , egy négy fős család számára kényelmes apartmannal és egy különálló szintén négy férőhelyes apartmanházzal várjuk vendégeinket.'
                )
              ),
              l.a.createElement(
                'span',
                { className: 'image' },
                l.a.createElement('img', { src: w.a, alt: '' })
              )
            )
          )
        },
        k = (a(239), a(240), a(241), a(242), a(243), a(244)),
        z = a.n(k),
        L = a(245),
        N = a.n(L),
        x = a(246),
        v = a.n(x),
        D = a(247),
        C = a.n(D),
        I = a(248),
        A = a.n(I),
        T = a(249),
        S = a.n(T),
        Q = a(250),
        O = a.n(Q),
        Y = [z.a, N.a, v.a, C.a, A.a, S.a, O.a],
        B = a(251),
        _ = a.n(B),
        P = a(252),
        R = a.n(P),
        U = a(253),
        W = a.n(U),
        Z = a(254),
        J = a.n(Z),
        F = [_.a, R.a, W.a, J.a],
        G = a(255),
        V = a.n(G),
        H = a(256),
        K = a.n(H),
        X = a(257),
        q = a.n(X),
        $ = [V.a, K.a, q.a],
        ee = a(258),
        te = a.n(ee),
        ae = (a(259), a(260)),
        ne = a.n(ae),
        le = [te.a, ne.a],
        ce = a(261),
        se = a.n(ce),
        re = a(262),
        ie = a.n(re),
        oe = [se.a, ie.a],
        me = a(263),
        ue = a.n(me),
        pe = a(264),
        fe = a.n(pe),
        de = [ue.a, fe.a],
        Ee = a(265),
        ge = a.n(Ee),
        be = a(266),
        he = a.n(be),
        je = a(267),
        ye = a.n(je),
        we = a(268),
        Me = a.n(we),
        ke = a(269),
        ze = a.n(ke),
        Le = a(270),
        Ne = a.n(Le),
        xe = a(271),
        ve = a.n(xe),
        De = a(272),
        Ce = a.n(De),
        Ie = a(273),
        Ae = a.n(Ie),
        Te = (a(274), a(275)),
        Se = a.n(Te),
        Qe = [ge.a, he.a, ye.a, Me.a, ze.a, Ne.a, ve.a, Ce.a, Ae.a, Se.a],
        Oe = a(276),
        Ye = a.n(Oe),
        Be = a(277),
        _e = a.n(Be),
        Pe = a(278),
        Re = a.n(Pe),
        Ue = a(279),
        We = a.n(Ue),
        Ze = [Ye.a, _e.a, Re.a, We.a],
        Je = a(210),
        Fe = function(e) {
          var t = e.images.map(function(e) {
            return l.a.createElement(
              'div',
              { className: 'szoba', key: e },
              l.a.createElement(
                'span',
                { className: 'image icon major' },
                l.a.createElement('img', { src: e })
              )
            )
          })
          return l.a.createElement(
            Je.Carousel,
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
            t
          )
        }
      console.log(Y)
      var Ge = function(e) {
          return l.a.createElement(
            'section',
            { id: 'first', className: 'main special' },
            l.a.createElement(
              'header',
              { className: 'major' },
              l.a.createElement('h2', null, 'Egyedi szobák, magas színvonalon')
            ),
            l.a.createElement(
              'div',
              { className: 'spotlight' },
              l.a.createElement(
                'p',
                { className: 'content' },
                'Szobáink mindegyike multifunkcionális klímával rendelkezik, mely egyénileg szabályozható fűtésre és hűtésre egyaránt. A szobákban nagyméretű LED TV található, melyen külföldi csatornák is foghatóak. Értékes tárgyaikat a szobai széfekben maximális biztonságban tudhatják. Minibárunk hideg italokról és finom snackekről gondoskodik.'
              )
            ),
            l.a.createElement(
              'ul',
              { className: 'features' },
              l.a.createElement(
                'li',
                null,
                l.a.createElement(Fe, { images: Y }),
                l.a.createElement('h3', null, 'Különálló apartmanház'),
                l.a.createElement(
                  'p',
                  null,
                  'A különálló apartmanházunk mindenben kielégíti igényeit. Konyha, mosogatógép, kád és zuhany várja lakóit'
                )
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(Fe, { images: F }),
                l.a.createElement('h3', null, 'Arany-kék')
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(Fe, { images: $ }),
                l.a.createElement('h3', null, 'Menta')
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(Fe, { images: le }),
                l.a.createElement('h3', null, 'Pink')
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(Fe, { images: oe }),
                l.a.createElement('h3', null, 'Esőerdő')
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(Fe, { images: de }),
                l.a.createElement('h3', null, 'Rózsa')
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(Fe, { images: Qe }),
                l.a.createElement('h3', null, 'Apartman'),
                l.a.createElement(
                  'p',
                  null,
                  'A apartmanunk mindenben kielégíti igényeit. Konyha, mosogatógép, kád és zuhany várja lakóit'
                )
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(Fe, { images: Ze }),
                l.a.createElement('h3', null, 'Foldszinti szoba'),
                l.a.createElement('p', null, 'Akadálymentesített')
              )
            )
          )
        },
        Ve = a(284),
        He = a.n(Ve),
        Ke = a(285),
        Xe = a.n(Ke),
        qe = a(286),
        $e = [a.n(qe).a, He.a, Xe.a],
        et = function(e) {
          return l.a.createElement(
            'section',
            { id: 'second', className: 'main special' },
            l.a.createElement(
              'header',
              { className: 'major' },
              l.a.createElement('h2', null, 'Szolgáltatások'),
              l.a.createElement(
                'div',
                { className: 'szoba content' },
                l.a.createElement('h3', null, 'Reggeli'),
                l.a.createElement(
                  'p',
                  null,
                  'Finom reggeli 1500 HUF / fő / éj áron kérhető'
                ),
                l.a.createElement(
                  'span',
                  { style: { width: '100%' } },
                  l.a.createElement(Fe, { images: $e })
                )
              )
            ),
            l.a.createElement(
              'ul',
              { className: 'statistics' },
              l.a.createElement(
                'li',
                { className: 'style3' },
                l.a.createElement('span', { className: 'icon fa-wifi' }),
                l.a.createElement('strong', null, 'Wi-Fi'),
                l.a.createElement('p', null, 'Ingyenes Wi-Fi szolgáltatás')
              ),
              l.a.createElement(
                'li',
                { className: 'style4' },
                l.a.createElement('span', { className: 'icon fa-bicycle' }),
                l.a.createElement('strong', null, 'Bicikli bérlés'),
                l.a.createElement(
                  'p',
                  null,
                  'Kerékpár kölcsönzés 1500 HUF / fő / nap áron'
                )
              ),
              l.a.createElement(
                'li',
                { className: 'style5' },
                l.a.createElement('span', { className: 'icon fa-ship' }),
                l.a.createElement('strong', null, 'Túra kenu és kajak bérlés'),
                l.a.createElement(
                  'p',
                  null,
                  'Lehetőség van túra kenu és kajak bérlésre'
                )
              ),
              l.a.createElement(
                'li',
                { className: 'style2' },
                l.a.createElement('i', {
                  className: 'fas fa-swimming-pool fa-2x',
                }),
                l.a.createElement('strong', null, 'Aquasziget kedvezmény'),
                l.a.createElement(
                  'p',
                  null,
                  '20 % kedvezményt nyújtó kupon az esztergomi Aquaszigetre'
                )
              )
            )
          )
        },
        tt = function(e) {
          var t = Object(n.useState)(!1),
            a = t[0],
            c = t[1]
          return l.a.createElement(
            'section',
            { id: 'foglalas', className: 'main special' },
            l.a.createElement(
              'header',
              { className: 'major' },
              l.a.createElement('h2', null, 'Szoba foglalás'),
              l.a.createElement(
                'p',
                null,
                'Ne késlekedjen, foglaljon most szobát!'
              ),
              l.a.createElement(
                'p',
                null,
                'A foglaláshoz szükséges elfogadni a',
                ' ',
                l.a.createElement(
                  'a',
                  { href: '/hazirend' },
                  'házirendet ami de kattintva elérhető'
                ),
                '.'
              ),
              l.a.createElement('input', {
                type: 'checkbox',
                checked: Boolean(a),
                onChange: function(e) {
                  c(Boolean(e.target.checked))
                },
              }),
              'Elfogadom a házirendet'
            ),
            a &&
              l.a.createElement(
                'footer',
                { className: 'major' },
                l.a.createElement(
                  'ul',
                  { clőassName: 'actions' },
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      'a',
                      {
                        target: '_blank',
                        href:
                          'https://nethotelbooking.net/hotels/szentannapanzioesztergom',
                        className: 'button special',
                      },
                      'Foglalok!'
                    )
                  )
                )
              )
          )
        },
        at = (a(287),
        a(288),
        function(e) {
          var t = e.comments.map(function(e) {
            var t = e.comment,
              a = e.userName
            return l.a.createElement(
              'div',
              {
                style: {
                  height: '170px',
                  display: 'flex',
                  justifyContent: 'center',
                },
                key: t,
              },
              l.a.createElement(
                'div',
                { style: { width: '300px' } },
                l.a.createElement('h3', null, t),
                l.a.createElement(
                  'h4',
                  { style: { textAlign: 'right' } },
                  l.a.createElement('i', null, '-', a)
                )
              )
            )
          })
          return l.a.createElement(
            Je.Carousel,
            {
              showThumbs: !1,
              showIndicators: !0,
              showStatus: !1,
              showArrows: !1,
              emulateTouch: !0,
              swipeable: !0,
            },
            t
          )
        }),
        nt = a(289),
        lt = a.n(nt),
        ct = function(e) {
          var t = lt()(
              'https://sztannabackend.pjatacsuk.now.sh/api/comment.js'
            ),
            a = t.isLoading,
            n = t.data
          return (
            console.log(n),
            console.log(a),
            l.a.createElement(
              'section',
              { id: 'velemenyek', className: 'main special' },
              l.a.createElement(
                'header',
                { className: 'major' },
                l.a.createElement('h2', null, 'Rólunk írták')
              ),
              a || !n
                ? l.a.createElement('div', null)
                : l.a.createElement(at, { comments: n.comments }),
              l.a.createElement(
                'footer',
                { className: 'major' },
                l.a.createElement(
                  'ul',
                  { className: 'actions' },
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      c.a,
                      { to: '/comment', className: 'button' },
                      'Irjon ön is'
                    )
                  )
                )
              )
            )
          )
        }
      var st = (function(e) {
        var t, a
        function n(t) {
          var a
          return (
            ((a = e.call(this, t) || this)._handleWaypointEnter = function() {
              a.setState(function() {
                return { stickyNav: !1 }
              })
            }),
            (a._handleWaypointLeave = function() {
              a.setState(function() {
                return { stickyNav: !0 }
              })
            }),
            (a.state = { stickyNav: !1 }),
            a
          )
        }
        return (
          (a = e),
          ((t = n).prototype = Object.create(a.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = a),
          (n.prototype.render = function() {
            return l.a.createElement(
              o.a,
              null,
              l.a.createElement(r.a, { title: 'Szent Anna Panzio' }),
              l.a.createElement(p, null),
              l.a.createElement(i.a, {
                onEnter: this._handleWaypointEnter,
                onLeave: this._handleWaypointLeave,
              }),
              l.a.createElement(j, { sticky: this.state.stickyNav }),
              l.a.createElement(
                'div',
                { id: 'main' },
                l.a.createElement(M, null),
                l.a.createElement(Ge, null),
                l.a.createElement(et, null),
                l.a.createElement(ct, null),
                l.a.createElement(tt, null)
              )
            )
          }),
          n
        )
      })(l.a.Component)
      t.default = st
    },
    197: function(e, t, a) {
      'use strict'
      var n = a(0),
        l = a.n(n),
        c = a(66),
        s = a.n(c)
      a.d(t, 'a', function() {
        return s.a
      })
      a(198), a(9).default.enqueue, l.a.createContext({})
    },
    198: function(e, t, a) {
      var n
      e.exports = ((n = a(199)) && n.default) || n
    },
    199: function(e, t, a) {
      'use strict'
      a.r(t)
      a(23)
      var n = a(0),
        l = a.n(n),
        c = a(93)
      t.default = function(e) {
        var t = e.location,
          a = e.pageResources
        return a
          ? l.a.createElement(
              c.a,
              Object.assign({ location: t, pageResources: a }, a.json)
            )
          : null
      }
    },
    200: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iODVweCIgaGVpZ2h0PSI4NXB4IiB2aWV3Qm94PSIwIDAgODAgODAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwIDgwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQwLDBjMjIuMDkxLDAsNDAsMTcuOTA5LDQwLDQwUzYyLjA5MSw4MCw0MCw4MFMwLDYyLjA5MSwwLDQwUzE3LjkwOSwwLDQwLDB6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjOGNjOWYwIiBkPSJNNTAuMzc4LDMyLjU3NmMwLDEuMDA1LTAuODE1LDEuODIxLTEuODIxLDEuODIxYy0xLjAwNSwwLTEuODItMC44MTYtMS44Mi0xLjgyMQ0KCQkJYzAtMS4wMDUsMC44MTUtMS44MjEsMS44Mi0xLjgyMUM0OS41NjMsMzAuNzU1LDUwLjM3OCwzMS41NzEsNTAuMzc4LDMyLjU3NnogTTU0LjYyNywyNy4xMTNjMC0wLjM0MS0wLjMwNC0wLjYwNy0wLjY0Ni0wLjYwNw0KCQkJYy02LjYwMSwwLTEwLjIyMywxLjUxOC0xNC45NjQsNi4yNDFjLTEuMDgxLDEuMS0yLjIsMi4zNTItMy4zMzgsMy42OTlsLTcuMTg4LDAuMzc5Yy0wLjE5LDAuMDE5LTAuMzc5LDAuMTMzLTAuNDkzLDAuMzA0DQoJCQlsLTQuMjQ5LDcuMjg0Yy0wLjEzMywwLjIyOC0wLjA5NSwwLjUzLDAuMDk1LDAuNzM5bDEuMjE0LDEuMjE1YzAuMTE0LDAuMTEzLDAuMjg1LDAuMTcsMC40MzcsMC4xN2MwLjA1NywwLDAuMTE0LDAsMC4xNy0wLjAyDQoJCQlsNS4yMzUtMS42MTFsNS4zMyw1LjMzbC0xLjYxMiw1LjIzNmMtMC4wNTcsMC4yMDksMCwwLjQzNywwLjE1MiwwLjYwNmwxLjIxNCwxLjIxNGMwLjEzMywwLjExNCwwLjI4NCwwLjE3MSwwLjQzNiwwLjE3MQ0KCQkJYzAuMTE0LDAsMC4yMDgtMC4wMjEsMC4zMDQtMC4wNzVsNy4yODMtNC4yNWMwLjE3MS0wLjExMywwLjI4NC0wLjMwNCwwLjMwNS0wLjQ5MmwwLjM3OS03LjE5YzEuMzQ3LTEuMTM4LDIuNTk5LTIuMjU3LDMuNjk5LTMuMzM5DQoJCQlDNTIuODgyLDM3LjYwMyw1NC42MjcsMzMuNDExLDU0LjYyNywyNy4xMTN6Ii8+DQoJPC9nPg0KPC9zdmc+'
    },
    201: function(e, t, a) {
      'use strict'
      var n = a(0),
        l = a.n(n),
        c = (a(202),
        a(197),
        a(200),
        function(e) {
          return l.a.createElement(
            'footer',
            { id: 'footer' },
            l.a.createElement(
              'section',
              null,
              l.a.createElement('h2', null, 'Elérhetőségek'),
              l.a.createElement(
                'dl',
                { className: 'alt' },
                l.a.createElement('dt', null, 'Cím'),
                l.a.createElement(
                  'dd',
                  null,
                  'Esztergom, Erzsébet kiralyné út 2'
                ),
                l.a.createElement('dt', null, 'Telefonszám'),
                l.a.createElement('dd', null, '(06) 20 3914 407'),
                l.a.createElement('dt', null, 'Email'),
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
                    l.a.createElement(
                      'span',
                      { className: 'label' },
                      'Facebook'
                    )
                  )
                )
              )
            )
          )
        })
      var s = (function(e) {
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
            var e = this.props.children
            return l.a.createElement(
              'div',
              { className: 'body ' + this.state.loading },
              l.a.createElement(
                'div',
                { id: 'wrapper' },
                e,
                l.a.createElement(c, null)
              )
            )
          }),
          n
        )
      })(l.a.Component)
      t.a = s
    },
    206: function(e, t, a) {
      e.exports = a.p + 'static/door-6b5c5c0d4f5d4cf4c18b0bc0847dc85b.png'
    },
    224: function(e, t, a) {
      e.exports = a.p + 'static/logo2-81cf607e93c22f213ede474179c2d346.png'
    },
    239: function(e, t, a) {
      e.exports = a.p + 'static/szoba1-c48962c183ebd72f1107367d38ba82bc.png'
    },
    240: function(e, t, a) {
      e.exports = a.p + 'static/sarok-67bd35877446c3c2413640908ef74929.png'
    },
    241: function(e, t, a) {
      e.exports = a.p + 'static/szoba2-c741fa36bbfd3a59b835d178da4bb874.png'
    },
    242: function(e, t, a) {
      e.exports = a.p + 'static/szoba3-f6ac236526f786c747023ea93e0fcdde.png'
    },
    243: function(e, t, a) {
      e.exports = a.p + 'static/fenti-83066dab63083c44fb1f1b3d9579f44c.jpeg'
    },
    244: function(e, t, a) {
      e.exports =
        a.p + 'static/apartman_0-b31bcef9fbf571416827e8812d29e7c8.jpeg'
    },
    245: function(e, t, a) {
      e.exports =
        a.p + 'static/apartman_1-9e6bf00edc3a80672804676e1bf3d6ae.jpeg'
    },
    246: function(e, t, a) {
      e.exports =
        a.p + 'static/apartman_2-65578845439d9b4d0c8e3e2b2e42be7b.jpeg'
    },
    247: function(e, t, a) {
      e.exports =
        a.p + 'static/apartman_3-1eb98b6102274ec2062dda62aea6a74d.jpeg'
    },
    248: function(e, t, a) {
      e.exports =
        a.p + 'static/apartman_4-db3870306c1805badc2c6ad83fbc1aad.jpeg'
    },
    249: function(e, t, a) {
      e.exports =
        a.p + 'static/apartman_5-7064f8e61dad5df25e773c2b3bc3d150.jpeg'
    },
    250: function(e, t, a) {
      e.exports =
        a.p + 'static/apartman_6-3d58cf1617eedfa79cbf94e83b54efe4.jpeg'
    },
    251: function(e, t, a) {
      e.exports = a.p + 'static/0-22597882aa69d7f6141dc40850bbcbd9.jpeg'
    },
    252: function(e, t, a) {
      e.exports = a.p + 'static/1-d685f2f2f976b1dd091eeaab7c60c4cc.jpeg'
    },
    253: function(e, t, a) {
      e.exports = a.p + 'static/2-7d9c2501f0bcc07e84fcde4bbf5e6ebb.jpeg'
    },
    254: function(e, t, a) {
      e.exports = a.p + 'static/3-e04d30923ddfaade75ae12df0336a3cc.jpeg'
    },
    255: function(e, t, a) {
      e.exports = a.p + 'static/0-e769574c8798a47f7d17e61f57db8871.jpeg'
    },
    256: function(e, t, a) {
      e.exports = a.p + 'static/1-8b0c74886dc1bba59d4a0d09b7ef1d7f.jpeg'
    },
    257: function(e, t, a) {
      e.exports = a.p + 'static/2-9f09b8fa838ce7120e165c6e04e0f70e.jpeg'
    },
    258: function(e, t, a) {
      e.exports = a.p + 'static/0-d4952368a1532c5e4be431ea7bb604af.jpeg'
    },
    259: function(e, t, a) {
      e.exports = a.p + 'static/1-9e26e8103984972ba353fd8da19bfb06.jpeg'
    },
    260: function(e, t, a) {
      e.exports = a.p + 'static/2-9f09b8fa838ce7120e165c6e04e0f70e.jpeg'
    },
    261: function(e, t, a) {
      e.exports = a.p + 'static/0-63412415939a46fbdfa072374b6bc6ff.jpeg'
    },
    262: function(e, t, a) {
      e.exports = a.p + 'static/1-0d5e05134affc97ada5036876f920387.jpeg'
    },
    263: function(e, t, a) {
      e.exports = a.p + 'static/0-bbbefcc8d3fe7155f6ea25507877f846.jpeg'
    },
    264: function(e, t, a) {
      e.exports = a.p + 'static/1-4a293e1134df4248f824395cbdae6491.jpeg'
    },
    265: function(e, t, a) {
      e.exports = a.p + 'static/0-5cd88b32be5592924cda74a2b532b16e.jpeg'
    },
    266: function(e, t, a) {
      e.exports = a.p + 'static/1-94e677ca80c75d6c31178f208d9b780d.jpeg'
    },
    267: function(e, t, a) {
      e.exports = a.p + 'static/2-cb5ec0d349f9e2fbc106e6f464e5f75e.jpeg'
    },
    268: function(e, t, a) {
      e.exports = a.p + 'static/3-0d8cdd23d69af7b34966f794421221d4.jpeg'
    },
    269: function(e, t, a) {
      e.exports = a.p + 'static/4-73fcea2184c1cf28079440480e536622.jpeg'
    },
    270: function(e, t, a) {
      e.exports = a.p + 'static/5-3d93b9c16e997b964d8a6784720b799f.jpeg'
    },
    271: function(e, t, a) {
      e.exports = a.p + 'static/6-129e1ee271ec0a5d8dae765d2423cca3.jpeg'
    },
    272: function(e, t, a) {
      e.exports = a.p + 'static/7-7c855695f458dc5da12d6a86a6bc267e.jpeg'
    },
    273: function(e, t, a) {
      e.exports = a.p + 'static/8-c46633445953f6e00d102481d89f9236.jpeg'
    },
    274: function(e, t, a) {
      e.exports = a.p + 'static/9-788890b6b78196d00352a18d73e79074.jpeg'
    },
    275: function(e, t, a) {
      e.exports = a.p + 'static/10-83b9cd4aad03b50f93e1fa290447f4e0.jpeg'
    },
    276: function(e, t, a) {
      e.exports = a.p + 'static/0-9f5447f05d94d17fcf0c0baf67f6ac34.jpeg'
    },
    277: function(e, t, a) {
      e.exports = a.p + 'static/1-79531e2130bbac16c43f4a49d48c97c3.jpeg'
    },
    278: function(e, t, a) {
      e.exports = a.p + 'static/2-4504e3d4ef942d2518b33725928b7903.jpeg'
    },
    279: function(e, t, a) {
      e.exports = a.p + 'static/3-5ef82911808d960bf7405fa48fd8b86e.jpeg'
    },
    284: function(e, t, a) {
      e.exports = a.p + 'static/reggeli-d28e51337b5b4ee885b96b715441fe8e.jpeg'
    },
    285: function(e, t, a) {
      e.exports = a.p + 'static/pic0-df870725690d895b87a74e1eb5b1cbf0.jpg'
    },
    286: function(e, t, a) {
      e.exports = a.p + 'static/pic1-68c646d2999665b2db15efa36e75e064.jpg'
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-1c930d51d687df5c35da.js.map
