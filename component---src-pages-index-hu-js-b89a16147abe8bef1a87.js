;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    198: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(0),
        r = n.n(a),
        i = n(200),
        o = n(224),
        s = n.n(o),
        l = n(326),
        c = n(208),
        u = n(300),
        h = n(298),
        p = n(250),
        d = n(297),
        f = n(292),
        g = n(296),
        m = (n(334), n(335), n(299))
      n(70),
        n(29),
        n(30),
        n(50),
        n(142),
        n(236),
        n(214),
        n(51),
        n(68),
        n(39),
        n(67),
        n(92),
        n(14),
        n(42),
        n(13),
        n(31),
        n(38),
        n(41)
      function y(e) {
        return (y =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function k(e) {
        return (k =
          'function' == typeof Symbol && 'symbol' === y(Symbol.iterator)
            ? function(e) {
                return y(e)
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : y(e)
              })(e)
      }
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n)
          'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              })
            )),
            a.forEach(function(t) {
              v(e, t, n[t])
            })
        }
        return e
      }
      function E(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      function M(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n]
          ;(a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a)
        }
      }
      function z(e, t, n) {
        return t && M(e.prototype, t), n && M(e, n), e
      }
      function j(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }
      function S(e, t) {
        return !t || ('object' !== k(t) && 'function' != typeof t) ? j(e) : t
      }
      function w(e) {
        return (w = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function K(e, t) {
        return (K =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function T(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && K(e, t)
      }
      function x(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t]
              return n
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e)
          })(e) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            )
          })()
        )
      }
      function C(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function(e, t) {
            var n = [],
              a = !0,
              r = !1,
              i = void 0
            try {
              for (
                var o, s = e[Symbol.iterator]();
                !(a = (o = s.next()).done) &&
                (n.push(o.value), !t || n.length !== t);
                a = !0
              );
            } catch (l) {
              ;(r = !0), (i = l)
            } finally {
              try {
                a || null == s.return || s.return()
              } finally {
                if (r) throw i
              }
            }
            return n
          })(e, t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          })()
        )
      }
      var N = {
          type: 'logger',
          log: function(e) {
            this.output('log', e)
          },
          warn: function(e) {
            this.output('warn', e)
          },
          error: function(e) {
            this.output('error', e)
          },
          output: function(e, t) {
            var n
            console && console[e] && (n = console)[e].apply(n, x(t))
          },
        },
        L = new ((function() {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            E(this, e), this.init(t, n)
          }
          return (
            z(e, [
              {
                key: 'init',
                value: function(e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {}
                  ;(this.prefix = t.prefix || 'i18next:'),
                    (this.logger = e || N),
                    (this.options = t),
                    (this.debug = t.debug)
                },
              },
              {
                key: 'setDebug',
                value: function(e) {
                  this.debug = e
                },
              },
              {
                key: 'log',
                value: function() {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n]
                  return this.forward(t, 'log', '', !0)
                },
              },
              {
                key: 'warn',
                value: function() {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n]
                  return this.forward(t, 'warn', '', !0)
                },
              },
              {
                key: 'error',
                value: function() {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n]
                  return this.forward(t, 'error', '')
                },
              },
              {
                key: 'deprecate',
                value: function() {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n]
                  return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0)
                },
              },
              {
                key: 'forward',
                value: function(e, t, n, a) {
                  return a && !this.debug
                    ? null
                    : ('string' == typeof e[0] &&
                        (e[0] = ''
                          .concat(n)
                          .concat(this.prefix, ' ')
                          .concat(e[0])),
                      this.logger[t](e))
                },
              },
              {
                key: 'create',
                value: function(t) {
                  return new e(
                    this.logger,
                    b(
                      {},
                      { prefix: ''.concat(this.prefix, ':').concat(t, ':') },
                      this.options
                    )
                  )
                },
              },
            ]),
            e
          )
        })())(),
        A = (function() {
          function e() {
            E(this, e), (this.observers = {})
          }
          return (
            z(e, [
              {
                key: 'on',
                value: function(e, t) {
                  var n = this
                  return (
                    e.split(' ').forEach(function(e) {
                      ;(n.observers[e] = n.observers[e] || []),
                        n.observers[e].push(t)
                    }),
                    this
                  )
                },
              },
              {
                key: 'off',
                value: function(e, t) {
                  var n = this
                  this.observers[e] &&
                    this.observers[e].forEach(function() {
                      if (t) {
                        var a = n.observers[e].indexOf(t)
                        a > -1 && n.observers[e].splice(a, 1)
                      } else delete n.observers[e]
                    })
                },
              },
              {
                key: 'emit',
                value: function(e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      a = 1;
                    a < t;
                    a++
                  )
                    n[a - 1] = arguments[a]
                  this.observers[e] &&
                    [].concat(this.observers[e]).forEach(function(e) {
                      e.apply(void 0, n)
                    })
                  this.observers['*'] &&
                    [].concat(this.observers['*']).forEach(function(t) {
                      t.apply(t, [e].concat(n))
                    })
                },
              },
            ]),
            e
          )
        })()
      function P() {
        var e,
          t,
          n = new Promise(function(n, a) {
            ;(e = n), (t = a)
          })
        return (n.resolve = e), (n.reject = t), n
      }
      function D(e) {
        return null == e ? '' : '' + e
      }
      function R(e, t, n) {
        function a(e) {
          return e && e.indexOf('###') > -1 ? e.replace(/###/g, '.') : e
        }
        function r() {
          return !e || 'string' == typeof e
        }
        for (
          var i = 'string' != typeof t ? [].concat(t) : t.split('.');
          i.length > 1;

        ) {
          if (r()) return {}
          var o = a(i.shift())
          !e[o] && n && (e[o] = new n()), (e = e[o])
        }
        return r() ? {} : { obj: e, k: a(i.shift()) }
      }
      function O(e, t, n) {
        var a = R(e, t, Object)
        a.obj[a.k] = n
      }
      function H(e, t) {
        var n = R(e, t),
          a = n.obj,
          r = n.k
        if (a) return a[r]
      }
      function B(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
      }
      var F = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
      }
      function I(e) {
        return 'string' == typeof e
          ? e.replace(/[&<>"'\/]/g, function(e) {
              return F[e]
            })
          : e
      }
      var J = (function(e) {
          function t(e) {
            var n,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { ns: ['translation'], defaultNS: 'translation' }
            return (
              E(this, t),
              (n = S(this, w(t).call(this))),
              A.call(j(n)),
              (n.data = e || {}),
              (n.options = a),
              void 0 === n.options.keySeparator &&
                (n.options.keySeparator = '.'),
              n
            )
          }
          return (
            T(t, A),
            z(t, [
              {
                key: 'addNamespaces',
                value: function(e) {
                  this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                },
              },
              {
                key: 'removeNamespaces',
                value: function(e) {
                  var t = this.options.ns.indexOf(e)
                  t > -1 && this.options.ns.splice(t, 1)
                },
              },
              {
                key: 'getResource',
                value: function(e, t, n) {
                  var a =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    r =
                      void 0 !== a.keySeparator
                        ? a.keySeparator
                        : this.options.keySeparator,
                    i = [e, t]
                  return (
                    n && 'string' != typeof n && (i = i.concat(n)),
                    n &&
                      'string' == typeof n &&
                      (i = i.concat(r ? n.split(r) : n)),
                    e.indexOf('.') > -1 && (i = e.split('.')),
                    H(this.data, i)
                  )
                },
              },
              {
                key: 'addResource',
                value: function(e, t, n, a) {
                  var r =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : { silent: !1 },
                    i = this.options.keySeparator
                  void 0 === i && (i = '.')
                  var o = [e, t]
                  n && (o = o.concat(i ? n.split(i) : n)),
                    e.indexOf('.') > -1 &&
                      ((a = t), (t = (o = e.split('.'))[1])),
                    this.addNamespaces(t),
                    O(this.data, o, a),
                    r.silent || this.emit('added', e, t, n, a)
                },
              },
              {
                key: 'addResources',
                value: function(e, t, n) {
                  var a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : { silent: !1 }
                  for (var r in n)
                    ('string' != typeof n[r] &&
                      '[object Array]' !==
                        Object.prototype.toString.apply(n[r])) ||
                      this.addResource(e, t, r, n[r], { silent: !0 })
                  a.silent || this.emit('added', e, t, n)
                },
              },
              {
                key: 'addResourceBundle',
                value: function(e, t, n, a, r) {
                  var i =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : { silent: !1 },
                    o = [e, t]
                  e.indexOf('.') > -1 &&
                    ((a = n), (n = t), (t = (o = e.split('.'))[1])),
                    this.addNamespaces(t)
                  var s = H(this.data, o) || {}
                  a
                    ? (function e(t, n, a) {
                        for (var r in n)
                          r in t
                            ? 'string' == typeof t[r] ||
                              t[r] instanceof String ||
                              'string' == typeof n[r] ||
                              n[r] instanceof String
                              ? a && (t[r] = n[r])
                              : e(t[r], n[r], a)
                            : (t[r] = n[r])
                        return t
                      })(s, n, r)
                    : (s = b({}, s, n)),
                    O(this.data, o, s),
                    i.silent || this.emit('added', e, t, n)
                },
              },
              {
                key: 'removeResourceBundle',
                value: function(e, t) {
                  this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit('removed', e, t)
                },
              },
              {
                key: 'hasResourceBundle',
                value: function(e, t) {
                  return void 0 !== this.getResource(e, t)
                },
              },
              {
                key: 'getResourceBundle',
                value: function(e, t) {
                  return (
                    t || (t = this.options.defaultNS),
                    'v1' === this.options.compatibilityAPI
                      ? b({}, {}, this.getResource(e, t))
                      : this.getResource(e, t)
                  )
                },
              },
              {
                key: 'getDataByLanguage',
                value: function(e) {
                  return this.data[e]
                },
              },
              {
                key: 'toJSON',
                value: function() {
                  return this.data
                },
              },
            ]),
            t
          )
        })(),
        V = {
          processors: {},
          addPostProcessor: function(e) {
            this.processors[e.name] = e
          },
          handle: function(e, t, n, a, r) {
            var i = this
            return (
              e.forEach(function(e) {
                i.processors[e] && (t = i.processors[e].process(t, n, a, r))
              }),
              t
            )
          },
        },
        G = (function(e) {
          function t(e) {
            var n,
              a,
              r,
              i,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
            return (
              E(this, t),
              (n = S(this, w(t).call(this))),
              A.call(j(n)),
              (a = [
                'resourceStore',
                'languageUtils',
                'pluralResolver',
                'interpolator',
                'backendConnector',
                'i18nFormat',
              ]),
              (r = e),
              (i = j(n)),
              a.forEach(function(e) {
                r[e] && (i[e] = r[e])
              }),
              (n.options = o),
              void 0 === n.options.keySeparator &&
                (n.options.keySeparator = '.'),
              (n.logger = L.create('translator')),
              n
            )
          }
          return (
            T(t, A),
            z(t, [
              {
                key: 'changeLanguage',
                value: function(e) {
                  e && (this.language = e)
                },
              },
              {
                key: 'exists',
                value: function(e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { interpolation: {} },
                    n = this.resolve(e, t)
                  return n && void 0 !== n.res
                },
              },
              {
                key: 'extractFromKey',
                value: function(e, t) {
                  var n = t.nsSeparator || this.options.nsSeparator
                  void 0 === n && (n = ':')
                  var a =
                      void 0 !== t.keySeparator
                        ? t.keySeparator
                        : this.options.keySeparator,
                    r = t.ns || this.options.defaultNS
                  if (n && e.indexOf(n) > -1) {
                    var i = e.split(n)
                    ;(n !== a ||
                      (n === a && this.options.ns.indexOf(i[0]) > -1)) &&
                      (r = i.shift()),
                      (e = i.join(a))
                  }
                  return (
                    'string' == typeof r && (r = [r]), { key: e, namespaces: r }
                  )
                },
              },
              {
                key: 'translate',
                value: function(e, t) {
                  var n = this
                  if (
                    ('object' !== k(t) &&
                      this.options.overloadTranslationOptionHandler &&
                      (t = this.options.overloadTranslationOptionHandler(
                        arguments
                      )),
                    t || (t = {}),
                    null == e)
                  )
                    return ''
                  Array.isArray(e) || (e = [String(e)])
                  var a =
                      void 0 !== t.keySeparator
                        ? t.keySeparator
                        : this.options.keySeparator,
                    r = this.extractFromKey(e[e.length - 1], t),
                    i = r.key,
                    o = r.namespaces,
                    s = o[o.length - 1],
                    l = t.lng || this.language,
                    c =
                      t.appendNamespaceToCIMode ||
                      this.options.appendNamespaceToCIMode
                  if (l && 'cimode' === l.toLowerCase()) {
                    if (c) {
                      var u = t.nsSeparator || this.options.nsSeparator
                      return s + u + i
                    }
                    return i
                  }
                  var h = this.resolve(e, t),
                    p = h && h.res,
                    d = (h && h.usedKey) || i,
                    f = (h && h.exactUsedKey) || i,
                    g = Object.prototype.toString.apply(p),
                    m =
                      void 0 !== t.joinArrays
                        ? t.joinArrays
                        : this.options.joinArrays,
                    y = !this.i18nFormat || this.i18nFormat.handleAsObject
                  if (
                    y &&
                    p &&
                    ('string' != typeof p &&
                      'boolean' != typeof p &&
                      'number' != typeof p) &&
                    [
                      '[object Number]',
                      '[object Function]',
                      '[object RegExp]',
                    ].indexOf(g) < 0 &&
                    ('string' != typeof m || '[object Array]' !== g)
                  ) {
                    if (!t.returnObjects && !this.options.returnObjects)
                      return (
                        this.logger.warn(
                          'accessing an object - but returnObjects options is not enabled!'
                        ),
                        this.options.returnedObjectHandler
                          ? this.options.returnedObjectHandler(d, p, t)
                          : "key '"
                              .concat(i, ' (')
                              .concat(
                                this.language,
                                ")' returned an object instead of string."
                              )
                      )
                    if (a) {
                      var v = '[object Array]' === g,
                        E = v ? [] : {},
                        M = v ? f : d
                      for (var z in p)
                        if (Object.prototype.hasOwnProperty.call(p, z)) {
                          var j = ''
                            .concat(M)
                            .concat(a)
                            .concat(z)
                          ;(E[z] = this.translate(
                            j,
                            b({}, t, { joinArrays: !1, ns: o })
                          )),
                            E[z] === j && (E[z] = p[z])
                        }
                      p = E
                    }
                  } else if (
                    y &&
                    'string' == typeof m &&
                    '[object Array]' === g
                  )
                    (p = p.join(m)) && (p = this.extendTranslation(p, e, t))
                  else {
                    var S = !1,
                      w = !1
                    if (!this.isValidLookup(p) && void 0 !== t.defaultValue) {
                      if (((S = !0), void 0 !== t.count)) {
                        var K = this.pluralResolver.getSuffix(l, t.count)
                        p = t['defaultValue'.concat(K)]
                      }
                      p || (p = t.defaultValue)
                    }
                    this.isValidLookup(p) || ((w = !0), (p = i))
                    var T =
                      t.defaultValue &&
                      t.defaultValue !== p &&
                      this.options.updateMissing
                    if (w || S || T) {
                      this.logger.log(
                        T ? 'updateKey' : 'missingKey',
                        l,
                        s,
                        i,
                        T ? t.defaultValue : p
                      )
                      var x = [],
                        C = this.languageUtils.getFallbackCodes(
                          this.options.fallbackLng,
                          t.lng || this.language
                        )
                      if (
                        'fallback' === this.options.saveMissingTo &&
                        C &&
                        C[0]
                      )
                        for (var N = 0; N < C.length; N++) x.push(C[N])
                      else
                        'all' === this.options.saveMissingTo
                          ? (x = this.languageUtils.toResolveHierarchy(
                              t.lng || this.language
                            ))
                          : x.push(t.lng || this.language)
                      var L = function(e, a) {
                        n.options.missingKeyHandler
                          ? n.options.missingKeyHandler(
                              e,
                              s,
                              a,
                              T ? t.defaultValue : p,
                              T,
                              t
                            )
                          : n.backendConnector &&
                            n.backendConnector.saveMissing &&
                            n.backendConnector.saveMissing(
                              e,
                              s,
                              a,
                              T ? t.defaultValue : p,
                              T,
                              t
                            ),
                          n.emit('missingKey', e, s, a, p)
                      }
                      if (this.options.saveMissing) {
                        var A = void 0 !== t.count && 'string' != typeof t.count
                        this.options.saveMissingPlurals && A
                          ? x.forEach(function(e) {
                              n.pluralResolver
                                .getPluralFormsOfKey(e, i)
                                .forEach(function(t) {
                                  return L([e], t)
                                })
                            })
                          : L(x, i)
                      }
                    }
                    ;(p = this.extendTranslation(p, e, t, h)),
                      w &&
                        p === i &&
                        this.options.appendNamespaceToMissingKey &&
                        (p = ''.concat(s, ':').concat(i)),
                      w &&
                        this.options.parseMissingKeyHandler &&
                        (p = this.options.parseMissingKeyHandler(p))
                  }
                  return p
                },
              },
              {
                key: 'extendTranslation',
                value: function(e, t, n, a) {
                  var r = this
                  if (this.i18nFormat && this.i18nFormat.parse)
                    e = this.i18nFormat.parse(
                      e,
                      n,
                      a.usedLng,
                      a.usedNS,
                      a.usedKey,
                      { resolved: a }
                    )
                  else if (!n.skipInterpolation) {
                    n.interpolation &&
                      this.interpolator.init(
                        b({}, n, {
                          interpolation: b(
                            {},
                            this.options.interpolation,
                            n.interpolation
                          ),
                        })
                      )
                    var i =
                      n.replace && 'string' != typeof n.replace ? n.replace : n
                    this.options.interpolation.defaultVariables &&
                      (i = b(
                        {},
                        this.options.interpolation.defaultVariables,
                        i
                      )),
                      (e = this.interpolator.interpolate(
                        e,
                        i,
                        n.lng || this.language,
                        n
                      )),
                      !1 !== n.nest &&
                        (e = this.interpolator.nest(
                          e,
                          function() {
                            return r.translate.apply(r, arguments)
                          },
                          n
                        )),
                      n.interpolation && this.interpolator.reset()
                  }
                  var o = n.postProcess || this.options.postProcess,
                    s = 'string' == typeof o ? [o] : o
                  return (
                    null != e &&
                      s &&
                      s.length &&
                      !1 !== n.applyPostProcessor &&
                      (e = V.handle(s, e, t, n, this)),
                    e
                  )
                },
              },
              {
                key: 'resolve',
                value: function(e) {
                  var t,
                    n,
                    a,
                    r,
                    i,
                    o = this,
                    s =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {}
                  return (
                    'string' == typeof e && (e = [e]),
                    e.forEach(function(e) {
                      if (!o.isValidLookup(t)) {
                        var l = o.extractFromKey(e, s),
                          c = l.key
                        n = c
                        var u = l.namespaces
                        o.options.fallbackNS &&
                          (u = u.concat(o.options.fallbackNS))
                        var h =
                            void 0 !== s.count && 'string' != typeof s.count,
                          p =
                            void 0 !== s.context &&
                            'string' == typeof s.context &&
                            '' !== s.context,
                          d = s.lngs
                            ? s.lngs
                            : o.languageUtils.toResolveHierarchy(
                                s.lng || o.language,
                                s.fallbackLng
                              )
                        u.forEach(function(e) {
                          o.isValidLookup(t) ||
                            ((i = e),
                            d.forEach(function(n) {
                              if (!o.isValidLookup(t)) {
                                r = n
                                var i,
                                  l,
                                  u = c,
                                  d = [u]
                                if (o.i18nFormat && o.i18nFormat.addLookupKeys)
                                  o.i18nFormat.addLookupKeys(d, c, n, e, s)
                                else
                                  h &&
                                    (i = o.pluralResolver.getSuffix(
                                      n,
                                      s.count
                                    )),
                                    h && p && d.push(u + i),
                                    p &&
                                      d.push(
                                        (u += ''
                                          .concat(o.options.contextSeparator)
                                          .concat(s.context))
                                      ),
                                    h && d.push((u += i))
                                for (; (l = d.pop()); )
                                  o.isValidLookup(t) ||
                                    ((a = l), (t = o.getResource(n, e, l, s)))
                              }
                            }))
                        })
                      }
                    }),
                    {
                      res: t,
                      usedKey: n,
                      exactUsedKey: a,
                      usedLng: r,
                      usedNS: i,
                    }
                  )
                },
              },
              {
                key: 'isValidLookup',
                value: function(e) {
                  return !(
                    void 0 === e ||
                    (!this.options.returnNull && null === e) ||
                    (!this.options.returnEmptyString && '' === e)
                  )
                },
              },
              {
                key: 'getResource',
                value: function(e, t, n) {
                  var a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {}
                  return this.i18nFormat && this.i18nFormat.getResource
                    ? this.i18nFormat.getResource(e, t, n, a)
                    : this.resourceStore.getResource(e, t, n, a)
                },
              },
            ]),
            t
          )
        })()
      function U(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
      }
      var Q = (function() {
          function e(t) {
            E(this, e),
              (this.options = t),
              (this.whitelist = this.options.whitelist || !1),
              (this.logger = L.create('languageUtils'))
          }
          return (
            z(e, [
              {
                key: 'getScriptPartFromCode',
                value: function(e) {
                  if (!e || e.indexOf('-') < 0) return null
                  var t = e.split('-')
                  return 2 === t.length
                    ? null
                    : (t.pop(), this.formatLanguageCode(t.join('-')))
                },
              },
              {
                key: 'getLanguagePartFromCode',
                value: function(e) {
                  if (!e || e.indexOf('-') < 0) return e
                  var t = e.split('-')
                  return this.formatLanguageCode(t[0])
                },
              },
              {
                key: 'formatLanguageCode',
                value: function(e) {
                  if ('string' == typeof e && e.indexOf('-') > -1) {
                    var t = [
                        'hans',
                        'hant',
                        'latn',
                        'cyrl',
                        'cans',
                        'mong',
                        'arab',
                      ],
                      n = e.split('-')
                    return (
                      this.options.lowerCaseLng
                        ? (n = n.map(function(e) {
                            return e.toLowerCase()
                          }))
                        : 2 === n.length
                          ? ((n[0] = n[0].toLowerCase()),
                            (n[1] = n[1].toUpperCase()),
                            t.indexOf(n[1].toLowerCase()) > -1 &&
                              (n[1] = U(n[1].toLowerCase())))
                          : 3 === n.length &&
                            ((n[0] = n[0].toLowerCase()),
                            2 === n[1].length && (n[1] = n[1].toUpperCase()),
                            'sgn' !== n[0] &&
                              2 === n[2].length &&
                              (n[2] = n[2].toUpperCase()),
                            t.indexOf(n[1].toLowerCase()) > -1 &&
                              (n[1] = U(n[1].toLowerCase())),
                            t.indexOf(n[2].toLowerCase()) > -1 &&
                              (n[2] = U(n[2].toLowerCase()))),
                      n.join('-')
                    )
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng
                    ? e.toLowerCase()
                    : e
                },
              },
              {
                key: 'isWhitelisted',
                value: function(e) {
                  return (
                    ('languageOnly' === this.options.load ||
                      this.options.nonExplicitWhitelist) &&
                      (e = this.getLanguagePartFromCode(e)),
                    !this.whitelist ||
                      !this.whitelist.length ||
                      this.whitelist.indexOf(e) > -1
                  )
                },
              },
              {
                key: 'getFallbackCodes',
                value: function(e, t) {
                  if (!e) return []
                  if (
                    ('string' == typeof e && (e = [e]),
                    '[object Array]' === Object.prototype.toString.apply(e))
                  )
                    return e
                  if (!t) return e.default || []
                  var n = e[t]
                  return (
                    n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e.default),
                    n || []
                  )
                },
              },
              {
                key: 'toResolveHierarchy',
                value: function(e, t) {
                  var n = this,
                    a = this.getFallbackCodes(
                      t || this.options.fallbackLng || [],
                      e
                    ),
                    r = [],
                    i = function(e) {
                      e &&
                        (n.isWhitelisted(e)
                          ? r.push(e)
                          : n.logger.warn(
                              'rejecting non-whitelisted language code: '.concat(
                                e
                              )
                            ))
                    }
                  return (
                    'string' == typeof e && e.indexOf('-') > -1
                      ? ('languageOnly' !== this.options.load &&
                          i(this.formatLanguageCode(e)),
                        'languageOnly' !== this.options.load &&
                          'currentOnly' !== this.options.load &&
                          i(this.getScriptPartFromCode(e)),
                        'currentOnly' !== this.options.load &&
                          i(this.getLanguagePartFromCode(e)))
                      : 'string' == typeof e && i(this.formatLanguageCode(e)),
                    a.forEach(function(e) {
                      r.indexOf(e) < 0 && i(n.formatLanguageCode(e))
                    }),
                    r
                  )
                },
              },
            ]),
            e
          )
        })(),
        _ = [
          {
            lngs: [
              'ach',
              'ak',
              'am',
              'arn',
              'br',
              'fil',
              'gun',
              'ln',
              'mfe',
              'mg',
              'mi',
              'oc',
              'pt',
              'pt-BR',
              'tg',
              'ti',
              'tr',
              'uz',
              'wa',
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              'af',
              'an',
              'ast',
              'az',
              'bg',
              'bn',
              'ca',
              'da',
              'de',
              'dev',
              'el',
              'en',
              'eo',
              'es',
              'et',
              'eu',
              'fi',
              'fo',
              'fur',
              'fy',
              'gl',
              'gu',
              'ha',
              'hi',
              'hu',
              'hy',
              'ia',
              'it',
              'kn',
              'ku',
              'lb',
              'mai',
              'ml',
              'mn',
              'mr',
              'nah',
              'nap',
              'nb',
              'ne',
              'nl',
              'nn',
              'no',
              'nso',
              'pa',
              'pap',
              'pms',
              'ps',
              'pt-PT',
              'rm',
              'sco',
              'se',
              'si',
              'so',
              'son',
              'sq',
              'sv',
              'sw',
              'ta',
              'te',
              'tk',
              'ur',
              'yo',
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              'ay',
              'bo',
              'cgg',
              'fa',
              'id',
              'ja',
              'jbo',
              'ka',
              'kk',
              'km',
              'ko',
              'ky',
              'lo',
              'ms',
              'sah',
              'su',
              'th',
              'tt',
              'ug',
              'vi',
              'wo',
              'zh',
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
          { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
          { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ['fr'], nr: [1, 2], fc: 9 },
          { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ['is'], nr: [1, 2], fc: 12 },
          { lngs: ['jv'], nr: [0, 1], fc: 13 },
          { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
          { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
          { lngs: ['mk'], nr: [1, 2], fc: 17 },
          { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
          { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ['or'], nr: [2, 1], fc: 2 },
          { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
          { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ['he'], nr: [1, 2, 20, 21], fc: 22 },
        ],
        Y = {
          1: function(e) {
            return Number(e > 1)
          },
          2: function(e) {
            return Number(1 != e)
          },
          3: function(e) {
            return 0
          },
          4: function(e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2
            )
          },
          5: function(e) {
            return Number(
              0 === e
                ? 0
                : 1 == e
                  ? 1
                  : 2 == e
                    ? 2
                    : e % 100 >= 3 && e % 100 <= 10
                      ? 3
                      : e % 100 >= 11
                        ? 4
                        : 5
            )
          },
          6: function(e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
          },
          7: function(e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2
            )
          },
          8: function(e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
          },
          9: function(e) {
            return Number(e >= 2)
          },
          10: function(e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
          },
          11: function(e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                  ? 1
                  : e > 2 && e < 20
                    ? 2
                    : 3
            )
          },
          12: function(e) {
            return Number(e % 10 != 1 || e % 100 == 11)
          },
          13: function(e) {
            return Number(0 !== e)
          },
          14: function(e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
          },
          15: function(e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2
            )
          },
          16: function(e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
          },
          17: function(e) {
            return Number(1 == e || e % 10 == 1 ? 0 : 1)
          },
          18: function(e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2)
          },
          19: function(e) {
            return Number(
              1 == e
                ? 0
                : 0 === e || (e % 100 > 1 && e % 100 < 11)
                  ? 1
                  : e % 100 > 10 && e % 100 < 20
                    ? 2
                    : 3
            )
          },
          20: function(e) {
            return Number(
              1 == e ? 0 : 0 === e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2
            )
          },
          21: function(e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                  ? 2
                  : e % 100 == 3 || e % 100 == 4
                    ? 3
                    : 0
            )
          },
          22: function(e) {
            return Number(
              1 === e
                ? 0
                : 2 === e
                  ? 1
                  : (e < 0 || e > 10) && e % 10 == 0
                    ? 2
                    : 3
            )
          },
        }
      var W = (function() {
          function e(t) {
            var n,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
            E(this, e),
              (this.languageUtils = t),
              (this.options = a),
              (this.logger = L.create('pluralResolver')),
              (this.rules = ((n = {}),
              _.forEach(function(e) {
                e.lngs.forEach(function(t) {
                  n[t] = { numbers: e.nr, plurals: Y[e.fc] }
                })
              }),
              n))
          }
          return (
            z(e, [
              {
                key: 'addRule',
                value: function(e, t) {
                  this.rules[e] = t
                },
              },
              {
                key: 'getRule',
                value: function(e) {
                  return (
                    this.rules[e] ||
                    this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                  )
                },
              },
              {
                key: 'needsPlural',
                value: function(e) {
                  var t = this.getRule(e)
                  return t && t.numbers.length > 1
                },
              },
              {
                key: 'getPluralFormsOfKey',
                value: function(e, t) {
                  var n = this,
                    a = [],
                    r = this.getRule(e)
                  return r
                    ? (r.numbers.forEach(function(r) {
                        var i = n.getSuffix(e, r)
                        a.push(''.concat(t).concat(i))
                      }),
                      a)
                    : a
                },
              },
              {
                key: 'getSuffix',
                value: function(e, t) {
                  var n = this,
                    a = this.getRule(e)
                  if (a) {
                    var r = a.noAbs ? a.plurals(t) : a.plurals(Math.abs(t)),
                      i = a.numbers[r]
                    this.options.simplifyPluralSuffix &&
                      2 === a.numbers.length &&
                      1 === a.numbers[0] &&
                      (2 === i ? (i = 'plural') : 1 === i && (i = ''))
                    var o = function() {
                      return n.options.prepend && i.toString()
                        ? n.options.prepend + i.toString()
                        : i.toString()
                    }
                    return 'v1' === this.options.compatibilityJSON
                      ? 1 === i
                        ? ''
                        : 'number' == typeof i
                          ? '_plural_'.concat(i.toString())
                          : o()
                      : 'v2' === this.options.compatibilityJSON
                        ? o()
                        : this.options.simplifyPluralSuffix &&
                          2 === a.numbers.length &&
                          1 === a.numbers[0]
                          ? o()
                          : this.options.prepend && r.toString()
                            ? this.options.prepend + r.toString()
                            : r.toString()
                  }
                  return (
                    this.logger.warn('no plural rule found for: '.concat(e)), ''
                  )
                },
              },
            ]),
            e
          )
        })(),
        q = (function() {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            E(this, e),
              (this.logger = L.create('interpolator')),
              this.init(t, !0)
          }
          return (
            z(e, [
              {
                key: 'init',
                value: function() {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {}
                  ;(arguments.length > 1 ? arguments[1] : void 0) &&
                    ((this.options = e),
                    (this.format =
                      (e.interpolation && e.interpolation.format) ||
                      function(e) {
                        return e
                      })),
                    e.interpolation || (e.interpolation = { escapeValue: !0 })
                  var t = e.interpolation
                  ;(this.escape = void 0 !== t.escape ? t.escape : I),
                    (this.escapeValue =
                      void 0 === t.escapeValue || t.escapeValue),
                    (this.useRawValueToEscape =
                      void 0 !== t.useRawValueToEscape &&
                      t.useRawValueToEscape),
                    (this.prefix = t.prefix
                      ? B(t.prefix)
                      : t.prefixEscaped || '{{'),
                    (this.suffix = t.suffix
                      ? B(t.suffix)
                      : t.suffixEscaped || '}}'),
                    (this.formatSeparator = t.formatSeparator
                      ? t.formatSeparator
                      : t.formatSeparator || ','),
                    (this.unescapePrefix = t.unescapeSuffix
                      ? ''
                      : t.unescapePrefix || '-'),
                    (this.unescapeSuffix = this.unescapePrefix
                      ? ''
                      : t.unescapeSuffix || ''),
                    (this.nestingPrefix = t.nestingPrefix
                      ? B(t.nestingPrefix)
                      : t.nestingPrefixEscaped || B('$t(')),
                    (this.nestingSuffix = t.nestingSuffix
                      ? B(t.nestingSuffix)
                      : t.nestingSuffixEscaped || B(')')),
                    (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                    this.resetRegExp()
                },
              },
              {
                key: 'reset',
                value: function() {
                  this.options && this.init(this.options)
                },
              },
              {
                key: 'resetRegExp',
                value: function() {
                  var e = ''.concat(this.prefix, '(.+?)').concat(this.suffix)
                  this.regexp = new RegExp(e, 'g')
                  var t = ''
                    .concat(this.prefix)
                    .concat(this.unescapePrefix, '(.+?)')
                    .concat(this.unescapeSuffix)
                    .concat(this.suffix)
                  this.regexpUnescape = new RegExp(t, 'g')
                  var n = ''
                    .concat(this.nestingPrefix, '(.+?)')
                    .concat(this.nestingSuffix)
                  this.nestingRegexp = new RegExp(n, 'g')
                },
              },
              {
                key: 'interpolate',
                value: function(e, t, n, a) {
                  var r,
                    i,
                    o,
                    s = this
                  function l(e) {
                    return e.replace(/\$/g, '$$$$')
                  }
                  var c = function(e) {
                    if (e.indexOf(s.formatSeparator) < 0) return H(t, e)
                    var a = e.split(s.formatSeparator),
                      r = a.shift().trim(),
                      i = a.join(s.formatSeparator).trim()
                    return s.format(H(t, r), i, n)
                  }
                  this.resetRegExp()
                  var u =
                    (a && a.missingInterpolationHandler) ||
                    this.options.missingInterpolationHandler
                  for (
                    o = 0;
                    (r = this.regexpUnescape.exec(e)) &&
                    ((i = c(r[1].trim())),
                    (e = e.replace(r[0], i)),
                    (this.regexpUnescape.lastIndex = 0),
                    !(++o >= this.maxReplaces));

                  );
                  for (o = 0; (r = this.regexp.exec(e)); ) {
                    if (void 0 === (i = c(r[1].trim())))
                      if ('function' == typeof u) {
                        var h = u(e, r, a)
                        i = 'string' == typeof h ? h : ''
                      } else
                        this.logger.warn(
                          'missed to pass in variable '
                            .concat(r[1], ' for interpolating ')
                            .concat(e)
                        ),
                          (i = '')
                    else
                      'string' == typeof i ||
                        this.useRawValueToEscape ||
                        (i = D(i))
                    if (
                      ((i = this.escapeValue ? l(this.escape(i)) : l(i)),
                      (e = e.replace(r[0], i)),
                      (this.regexp.lastIndex = 0),
                      ++o >= this.maxReplaces)
                    )
                      break
                  }
                  return e
                },
              },
              {
                key: 'nest',
                value: function(e, t) {
                  var n,
                    a,
                    r = b(
                      {},
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {}
                    )
                  function i(e, t) {
                    if (e.indexOf(',') < 0) return e
                    var n = e.split(',')
                    e = n.shift()
                    var a = n.join(',')
                    a = (a = this.interpolate(a, r)).replace(/'/g, '"')
                    try {
                      ;(r = JSON.parse(a)), t && (r = b({}, t, r))
                    } catch (i) {
                      this.logger.error(
                        'failed parsing options string in nesting for key '.concat(
                          e
                        ),
                        i
                      )
                    }
                    return e
                  }
                  for (
                    r.applyPostProcessor = !1;
                    (n = this.nestingRegexp.exec(e));

                  ) {
                    if (
                      (a = t(i.call(this, n[1].trim(), r), r)) &&
                      n[0] === e &&
                      'string' != typeof a
                    )
                      return a
                    'string' != typeof a && (a = D(a)),
                      a ||
                        (this.logger.warn(
                          'missed to resolve '
                            .concat(n[1], ' for nesting ')
                            .concat(e)
                        ),
                        (a = '')),
                      (e = e.replace(n[0], a)),
                      (this.regexp.lastIndex = 0)
                  }
                  return e
                },
              },
            ]),
            e
          )
        })()
      var Z = (function(e) {
        function t(e, n, a) {
          var r,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {}
          return (
            E(this, t),
            (r = S(this, w(t).call(this))),
            A.call(j(r)),
            (r.backend = e),
            (r.store = n),
            (r.languageUtils = a.languageUtils),
            (r.options = i),
            (r.logger = L.create('backendConnector')),
            (r.state = {}),
            (r.queue = []),
            r.backend && r.backend.init && r.backend.init(a, i.backend, i),
            r
          )
        }
        return (
          T(t, A),
          z(t, [
            {
              key: 'queueLoad',
              value: function(e, t, n, a) {
                var r = this,
                  i = [],
                  o = [],
                  s = [],
                  l = []
                return (
                  e.forEach(function(e) {
                    var a = !0
                    t.forEach(function(t) {
                      var s = ''.concat(e, '|').concat(t)
                      !n.reload && r.store.hasResourceBundle(e, t)
                        ? (r.state[s] = 2)
                        : r.state[s] < 0 ||
                          (1 === r.state[s]
                            ? o.indexOf(s) < 0 && o.push(s)
                            : ((r.state[s] = 1),
                              (a = !1),
                              o.indexOf(s) < 0 && o.push(s),
                              i.indexOf(s) < 0 && i.push(s),
                              l.indexOf(t) < 0 && l.push(t)))
                    }),
                      a || s.push(e)
                  }),
                  (i.length || o.length) &&
                    this.queue.push({
                      pending: o,
                      loaded: {},
                      errors: [],
                      callback: a,
                    }),
                  {
                    toLoad: i,
                    pending: o,
                    toLoadLanguages: s,
                    toLoadNamespaces: l,
                  }
                )
              },
            },
            {
              key: 'loaded',
              value: function(e, t, n) {
                var a = C(e.split('|'), 2),
                  r = a[0],
                  i = a[1]
                t && this.emit('failedLoading', r, i, t),
                  n && this.store.addResourceBundle(r, i, n),
                  (this.state[e] = t ? -1 : 2)
                var o = {}
                this.queue.forEach(function(n) {
                  var a, s, l, c, u, h
                  ;(a = n.loaded),
                    (s = i),
                    (c = R(a, [r], Object)),
                    (u = c.obj),
                    (h = c.k),
                    (u[h] = u[h] || []),
                    l && (u[h] = u[h].concat(s)),
                    l || u[h].push(s),
                    (function(e, t) {
                      for (var n = e.indexOf(t); -1 !== n; )
                        e.splice(n, 1), (n = e.indexOf(t))
                    })(n.pending, e),
                    t && n.errors.push(t),
                    0 !== n.pending.length ||
                      n.done ||
                      (Object.keys(n.loaded).forEach(function(e) {
                        o[e] || (o[e] = []),
                          n.loaded[e].length &&
                            n.loaded[e].forEach(function(t) {
                              o[e].indexOf(t) < 0 && o[e].push(t)
                            })
                      }),
                      (n.done = !0),
                      n.errors.length ? n.callback(n.errors) : n.callback())
                }),
                  this.emit('loaded', o),
                  (this.queue = this.queue.filter(function(e) {
                    return !e.done
                  }))
              },
            },
            {
              key: 'read',
              value: function(e, t, n) {
                var a = this,
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  i =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 250,
                  o = arguments.length > 5 ? arguments[5] : void 0
                return e.length
                  ? this.backend[n](e, t, function(s, l) {
                      s && l && r < 5
                        ? setTimeout(function() {
                            a.read.call(a, e, t, n, r + 1, 2 * i, o)
                          }, i)
                        : o(s, l)
                    })
                  : o(null, {})
              },
            },
            {
              key: 'prepareLoading',
              value: function(e, t) {
                var n = this,
                  a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r = arguments.length > 3 ? arguments[3] : void 0
                if (!this.backend)
                  return (
                    this.logger.warn(
                      'No backend was added via i18next.use. Will not load resources.'
                    ),
                    r && r()
                  )
                'string' == typeof e &&
                  (e = this.languageUtils.toResolveHierarchy(e)),
                  'string' == typeof t && (t = [t])
                var i = this.queueLoad(e, t, a, r)
                if (!i.toLoad.length) return i.pending.length || r(), null
                i.toLoad.forEach(function(e) {
                  n.loadOne(e)
                })
              },
            },
            {
              key: 'load',
              value: function(e, t, n) {
                this.prepareLoading(e, t, {}, n)
              },
            },
            {
              key: 'reload',
              value: function(e, t, n) {
                this.prepareLoading(e, t, { reload: !0 }, n)
              },
            },
            {
              key: 'loadOne',
              value: function(e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : '',
                  a = C(e.split('|'), 2),
                  r = a[0],
                  i = a[1]
                this.read(r, i, 'read', null, null, function(a, o) {
                  a &&
                    t.logger.warn(
                      ''
                        .concat(n, 'loading namespace ')
                        .concat(i, ' for language ')
                        .concat(r, ' failed'),
                      a
                    ),
                    !a &&
                      o &&
                      t.logger.log(
                        ''
                          .concat(n, 'loaded namespace ')
                          .concat(i, ' for language ')
                          .concat(r),
                        o
                      ),
                    t.loaded(e, a, o)
                })
              },
            },
            {
              key: 'saveMissing',
              value: function(e, t, n, a, r) {
                var i =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : {}
                this.backend &&
                  this.backend.create &&
                  this.backend.create(
                    e,
                    t,
                    n,
                    a,
                    null,
                    b({}, i, { isUpdate: r })
                  ),
                  e && e[0] && this.store.addResource(e[0], t, n, a)
              },
            },
          ]),
          t
        )
      })()
      function X(e) {
        return (
          'string' == typeof e.ns && (e.ns = [e.ns]),
          'string' == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
          'string' == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.whitelist &&
            e.whitelist.indexOf('cimode') < 0 &&
            (e.whitelist = e.whitelist.concat(['cimode'])),
          e
        )
      }
      function $() {}
      new ((function(e) {
        function t() {
          var e,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            a = arguments.length > 1 ? arguments[1] : void 0
          if (
            (E(this, t),
            (e = S(this, w(t).call(this))),
            A.call(j(e)),
            (e.options = X(n)),
            (e.services = {}),
            (e.logger = L),
            (e.modules = { external: [] }),
            a && !e.isInitialized && !n.isClone)
          ) {
            if (!e.options.initImmediate) return e.init(n, a), S(e, j(e))
            setTimeout(function() {
              e.init(n, a)
            }, 0)
          }
          return e
        }
        return (
          T(t, A),
          z(t, [
            {
              key: 'init',
              value: function() {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = arguments.length > 1 ? arguments[1] : void 0
                function a(e) {
                  return e ? ('function' == typeof e ? new e() : e) : null
                }
                if (
                  ('function' == typeof t && ((n = t), (t = {})),
                  (this.options = b(
                    {},
                    {
                      debug: !1,
                      initImmediate: !0,
                      ns: ['translation'],
                      defaultNS: ['translation'],
                      fallbackLng: ['dev'],
                      fallbackNS: !1,
                      whitelist: !1,
                      nonExplicitWhitelist: !1,
                      load: 'all',
                      preload: !1,
                      simplifyPluralSuffix: !0,
                      keySeparator: '.',
                      nsSeparator: ':',
                      pluralSeparator: '_',
                      contextSeparator: '_',
                      partialBundledLanguages: !1,
                      saveMissing: !1,
                      updateMissing: !1,
                      saveMissingTo: 'fallback',
                      saveMissingPlurals: !0,
                      missingKeyHandler: !1,
                      missingInterpolationHandler: !1,
                      postProcess: !1,
                      returnNull: !0,
                      returnEmptyString: !0,
                      returnObjects: !1,
                      joinArrays: !1,
                      returnedObjectHandler: !1,
                      parseMissingKeyHandler: !1,
                      appendNamespaceToMissingKey: !1,
                      appendNamespaceToCIMode: !1,
                      overloadTranslationOptionHandler: function(e) {
                        var t = {}
                        if (
                          ('object' === k(e[1]) && (t = e[1]),
                          'string' == typeof e[1] && (t.defaultValue = e[1]),
                          'string' == typeof e[2] && (t.tDescription = e[2]),
                          'object' === k(e[2]) || 'object' === k(e[3]))
                        ) {
                          var n = e[3] || e[2]
                          Object.keys(n).forEach(function(e) {
                            t[e] = n[e]
                          })
                        }
                        return t
                      },
                      interpolation: {
                        escapeValue: !0,
                        format: function(e, t, n) {
                          return e
                        },
                        prefix: '{{',
                        suffix: '}}',
                        formatSeparator: ',',
                        unescapePrefix: '-',
                        nestingPrefix: '$t(',
                        nestingSuffix: ')',
                        maxReplaces: 1e3,
                      },
                    },
                    this.options,
                    X(t)
                  )),
                  (this.format = this.options.interpolation.format),
                  n || (n = $),
                  !this.options.isClone)
                ) {
                  this.modules.logger
                    ? L.init(a(this.modules.logger), this.options)
                    : L.init(null, this.options)
                  var r = new Q(this.options)
                  this.store = new J(this.options.resources, this.options)
                  var i = this.services
                  ;(i.logger = L),
                    (i.resourceStore = this.store),
                    (i.languageUtils = r),
                    (i.pluralResolver = new W(r, {
                      prepend: this.options.pluralSeparator,
                      compatibilityJSON: this.options.compatibilityJSON,
                      simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                    })),
                    (i.interpolator = new q(this.options)),
                    (i.backendConnector = new Z(
                      a(this.modules.backend),
                      i.resourceStore,
                      i,
                      this.options
                    )),
                    i.backendConnector.on('*', function(t) {
                      for (
                        var n = arguments.length,
                          a = new Array(n > 1 ? n - 1 : 0),
                          r = 1;
                        r < n;
                        r++
                      )
                        a[r - 1] = arguments[r]
                      e.emit.apply(e, [t].concat(a))
                    }),
                    this.modules.languageDetector &&
                      ((i.languageDetector = a(this.modules.languageDetector)),
                      i.languageDetector.init(
                        i,
                        this.options.detection,
                        this.options
                      )),
                    this.modules.i18nFormat &&
                      ((i.i18nFormat = a(this.modules.i18nFormat)),
                      i.i18nFormat.init && i.i18nFormat.init(this)),
                    (this.translator = new G(this.services, this.options)),
                    this.translator.on('*', function(t) {
                      for (
                        var n = arguments.length,
                          a = new Array(n > 1 ? n - 1 : 0),
                          r = 1;
                        r < n;
                        r++
                      )
                        a[r - 1] = arguments[r]
                      e.emit.apply(e, [t].concat(a))
                    }),
                    this.modules.external.forEach(function(t) {
                      t.init && t.init(e)
                    })
                }
                ;[
                  'getResource',
                  'addResource',
                  'addResources',
                  'addResourceBundle',
                  'removeResourceBundle',
                  'hasResourceBundle',
                  'getResourceBundle',
                  'getDataByLanguage',
                ].forEach(function(t) {
                  e[t] = function() {
                    var n
                    return (n = e.store)[t].apply(n, arguments)
                  }
                })
                var o = P(),
                  s = function() {
                    e.changeLanguage(e.options.lng, function(t, a) {
                      ;(e.isInitialized = !0),
                        e.logger.log('initialized', e.options),
                        e.emit('initialized', e.options),
                        o.resolve(a),
                        n(t, a)
                    })
                  }
                return (
                  this.options.resources || !this.options.initImmediate
                    ? s()
                    : setTimeout(s, 0),
                  o
                )
              },
            },
            {
              key: 'loadResources',
              value: function() {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : $
                if (
                  !this.options.resources ||
                  this.options.partialBundledLanguages
                ) {
                  if (this.language && 'cimode' === this.language.toLowerCase())
                    return t()
                  var n = [],
                    a = function(t) {
                      t &&
                        e.services.languageUtils
                          .toResolveHierarchy(t)
                          .forEach(function(e) {
                            n.indexOf(e) < 0 && n.push(e)
                          })
                    }
                  if (this.language) a(this.language)
                  else
                    this.services.languageUtils
                      .getFallbackCodes(this.options.fallbackLng)
                      .forEach(function(e) {
                        return a(e)
                      })
                  this.options.preload &&
                    this.options.preload.forEach(function(e) {
                      return a(e)
                    }),
                    this.services.backendConnector.load(n, this.options.ns, t)
                } else t(null)
              },
            },
            {
              key: 'reloadResources',
              value: function(e, t, n) {
                var a = P()
                return (
                  e || (e = this.languages),
                  t || (t = this.options.ns),
                  n || (n = $),
                  this.services.backendConnector.reload(e, t, function(e) {
                    a.resolve(), n(e)
                  }),
                  a
                )
              },
            },
            {
              key: 'use',
              value: function(e) {
                return (
                  'backend' === e.type && (this.modules.backend = e),
                  ('logger' === e.type || (e.log && e.warn && e.error)) &&
                    (this.modules.logger = e),
                  'languageDetector' === e.type &&
                    (this.modules.languageDetector = e),
                  'i18nFormat' === e.type && (this.modules.i18nFormat = e),
                  'postProcessor' === e.type && V.addPostProcessor(e),
                  '3rdParty' === e.type && this.modules.external.push(e),
                  this
                )
              },
            },
            {
              key: 'changeLanguage',
              value: function(e, t) {
                var n = this,
                  a = P()
                this.emit('languageChanging', e)
                var r = function(e) {
                  e &&
                    ((n.language = e),
                    (n.languages = n.services.languageUtils.toResolveHierarchy(
                      e
                    )),
                    n.translator.language || n.translator.changeLanguage(e),
                    n.services.languageDetector &&
                      n.services.languageDetector.cacheUserLanguage(e)),
                    n.loadResources(function(r) {
                      !(function(e, r) {
                        n.translator.changeLanguage(r),
                          r &&
                            (n.emit('languageChanged', r),
                            n.logger.log('languageChanged', r)),
                          a.resolve(function() {
                            return n.t.apply(n, arguments)
                          }),
                          t &&
                            t(e, function() {
                              return n.t.apply(n, arguments)
                            })
                      })(r, e)
                    })
                }
                return (
                  e ||
                  !this.services.languageDetector ||
                  this.services.languageDetector.async
                    ? !e &&
                      this.services.languageDetector &&
                      this.services.languageDetector.async
                      ? this.services.languageDetector.detect(r)
                      : r(e)
                    : r(this.services.languageDetector.detect()),
                  a
                )
              },
            },
            {
              key: 'getFixedT',
              value: function(e, t) {
                var n = this,
                  a = function e(t, a) {
                    var r = b({}, a)
                    if ('object' !== k(a)) {
                      for (
                        var i = arguments.length,
                          o = new Array(i > 2 ? i - 2 : 0),
                          s = 2;
                        s < i;
                        s++
                      )
                        o[s - 2] = arguments[s]
                      r = n.options.overloadTranslationOptionHandler(
                        [t, a].concat(o)
                      )
                    }
                    return (
                      (r.lng = r.lng || e.lng),
                      (r.lngs = r.lngs || e.lngs),
                      (r.ns = r.ns || e.ns),
                      n.t(t, r)
                    )
                  }
                return (
                  'string' == typeof e ? (a.lng = e) : (a.lngs = e),
                  (a.ns = t),
                  a
                )
              },
            },
            {
              key: 't',
              value: function() {
                var e
                return (
                  this.translator &&
                  (e = this.translator).translate.apply(e, arguments)
                )
              },
            },
            {
              key: 'exists',
              value: function() {
                var e
                return (
                  this.translator &&
                  (e = this.translator).exists.apply(e, arguments)
                )
              },
            },
            {
              key: 'setDefaultNamespace',
              value: function(e) {
                this.options.defaultNS = e
              },
            },
            {
              key: 'loadNamespaces',
              value: function(e, t) {
                var n = this,
                  a = P()
                return this.options.ns
                  ? ('string' == typeof e && (e = [e]),
                    e.forEach(function(e) {
                      n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                    }),
                    this.loadResources(function(e) {
                      a.resolve(), t && t(e)
                    }),
                    a)
                  : (t && t(), Promise.resolve())
              },
            },
            {
              key: 'loadLanguages',
              value: function(e, t) {
                var n = P()
                'string' == typeof e && (e = [e])
                var a = this.options.preload || [],
                  r = e.filter(function(e) {
                    return a.indexOf(e) < 0
                  })
                return r.length
                  ? ((this.options.preload = a.concat(r)),
                    this.loadResources(function(e) {
                      n.resolve(), t && t(e)
                    }),
                    n)
                  : (t && t(), Promise.resolve())
              },
            },
            {
              key: 'dir',
              value: function(e) {
                if (
                  (e ||
                    (e =
                      this.languages && this.languages.length > 0
                        ? this.languages[0]
                        : this.language),
                  !e)
                )
                  return 'rtl'
                return [
                  'ar',
                  'shu',
                  'sqr',
                  'ssh',
                  'xaa',
                  'yhd',
                  'yud',
                  'aao',
                  'abh',
                  'abv',
                  'acm',
                  'acq',
                  'acw',
                  'acx',
                  'acy',
                  'adf',
                  'ads',
                  'aeb',
                  'aec',
                  'afb',
                  'ajp',
                  'apc',
                  'apd',
                  'arb',
                  'arq',
                  'ars',
                  'ary',
                  'arz',
                  'auz',
                  'avl',
                  'ayh',
                  'ayl',
                  'ayn',
                  'ayp',
                  'bbz',
                  'pga',
                  'he',
                  'iw',
                  'ps',
                  'pbt',
                  'pbu',
                  'pst',
                  'prp',
                  'prd',
                  'ur',
                  'ydd',
                  'yds',
                  'yih',
                  'ji',
                  'yi',
                  'hbo',
                  'men',
                  'xmn',
                  'fa',
                  'jpr',
                  'peo',
                  'pes',
                  'prs',
                  'dv',
                  'sam',
                ].indexOf(
                  this.services.languageUtils.getLanguagePartFromCode(e)
                ) >= 0
                  ? 'rtl'
                  : 'ltr'
              },
            },
            {
              key: 'createInstance',
              value: function() {
                return new t(
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                  arguments.length > 1 ? arguments[1] : void 0
                )
              },
            },
            {
              key: 'cloneInstance',
              value: function() {
                var e = this,
                  n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  a =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : $,
                  r = b({}, this.options, n, { isClone: !0 }),
                  i = new t(r)
                return (
                  ['store', 'services', 'language'].forEach(function(t) {
                    i[t] = e[t]
                  }),
                  (i.translator = new G(i.services, i.options)),
                  i.translator.on('*', function(e) {
                    for (
                      var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        a = 1;
                      a < t;
                      a++
                    )
                      n[a - 1] = arguments[a]
                    i.emit.apply(i, [e].concat(n))
                  }),
                  i.init(r, a),
                  (i.translator.options = i.options),
                  i
                )
              },
            },
          ]),
          t
        )
      })())()
      var ee = n(199),
        te = n(441),
        ne = n.n(te),
        ae = (n(442), n(443)),
        re = n.n(ae),
        ie = n(444),
        oe = n(210)
      var se = (function(e) {
          var t, n
          function a(t) {
            var n
            if (((n = e.call(this, t) || this), 'undefined' != typeof window)) {
              var a = t.data.site.siteMetadata.languages,
                r = a.langs,
                o = a.defaultLangKey,
                s = Object(oe.getUserLangKey)(r, o),
                l = Object(i.d)('/' + s + '/')
              'hu' !== s && Object(i.c)(l)
            }
            return n
          }
          return (
            (n = e),
            ((t = a).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (a.prototype.render = function() {
              return r.a.createElement('div', null)
            }),
            a
          )
        })(r.a.PureComponent),
        le = function() {
          return r.a.createElement(i.b, {
            query: ce,
            render: function(e) {
              return r.a.createElement(se, { data: e })
            },
            data: ie,
          })
        },
        ce = '2174690774'
      Object(ee.c)(ne.a)
      var ue = (function(e) {
        var t, n
        function a(t) {
          var n
          return (
            ((n = e.call(this, t) || this)._handleWaypointEnter = function() {
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
          ((t = a).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n),
          (a.prototype.render = function() {
            var e = this
            return r.a.createElement(
              c.a,
              { location: this.props.location, i18nMessages: re.a },
              function(t) {
                return r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(s.a, { title: 'Szent Anna Panzió' }),
                  r.a.createElement(le, null),
                  r.a.createElement(u.a, { langsMenu: t }),
                  r.a.createElement(l.a, {
                    onEnter: e._handleWaypointEnter,
                    onLeave: e._handleWaypointLeave,
                  }),
                  r.a.createElement(h.a, { sticky: e.state.stickyNav }),
                  r.a.createElement(
                    'div',
                    { id: 'main' },
                    r.a.createElement(p.a, null),
                    r.a.createElement(d.a, null),
                    r.a.createElement(f.a, null),
                    r.a.createElement(m.a, null),
                    r.a.createElement(g.a, { langKey: '' })
                  )
                )
              }
            )
          }),
          a
        )
      })(r.a.Component)
      t.default = ue
    },
    200: function(e, t, n) {
      'use strict'
      n.d(t, 'b', function() {
        return c
      })
      var a = n(0),
        r = n.n(a),
        i = n(66),
        o = n.n(i)
      n.d(t, 'a', function() {
        return o.a
      }),
        n.d(t, 'd', function() {
          return i.withPrefix
        }),
        n.d(t, 'c', function() {
          return i.navigate
        })
      n(201), n(9).default.enqueue
      var s = r.a.createContext({})
      function l(e) {
        var t = e.staticQueryData,
          n = e.data,
          a = e.query,
          i = e.render,
          o = n ? n.data : t[a] && t[a].data
        return r.a.createElement(
          r.a.Fragment,
          null,
          o && i(o),
          !o && r.a.createElement('div', null, 'Loading (StaticQuery)')
        )
      }
      var c = function(e) {
        var t = e.data,
          n = e.query,
          a = e.render,
          i = e.children
        return r.a.createElement(s.Consumer, null, function(e) {
          return r.a.createElement(l, {
            data: t,
            query: n,
            render: a || i,
            staticQueryData: e,
          })
        })
      }
    },
    201: function(e, t, n) {
      var a
      e.exports = ((a = n(206)) && a.default) || a
    },
    204: function(e, t, n) {
      'use strict'
      var a = n(0),
        r = n.n(a),
        i = n(199)
      n(200), n(207)
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
              r.a.createElement(i.a, { id: 'elerTitle' })
            ),
            r.a.createElement(
              'dl',
              { className: 'alt' },
              r.a.createElement(
                'dt',
                null,
                r.a.createElement(i.a, { id: 'elerCimTitle' })
              ),
              r.a.createElement(
                'dd',
                null,
                'Esztergom, Erzsébet kiralyné út 2'
              ),
              r.a.createElement(
                'dt',
                null,
                r.a.createElement(i.a, { id: 'elerCimPhoneTitle' })
              ),
              r.a.createElement(
                'dd',
                null,
                r.a.createElement(i.a, { id: 'elerPhone' })
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
        i = n(94)
      t.default = function(e) {
        var t = e.location,
          n = e.pageResources
        return n
          ? r.a.createElement(
              i.a,
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
        i = (n(134), n(135), n(209), n(23), n(14), n(205)),
        o = n(210),
        s = n(200),
        l = n(199),
        c = n(218),
        u = n.n(c),
        h = (n(219),
        function(e) {
          var t = e.children,
            n = e.location,
            a = e.i18nMessages
          return r.a.createElement(s.b, {
            query: '2825539598',
            render: function(e) {
              var i = n ? n.pathname : null,
                s = e.site.siteMetadata.languages,
                c = s.langs,
                h = s.defaultLangKey,
                p = Object(o.getCurrentLangKey)(c, h, i)
              console.log(p)
              var d = ('/' + p).replace('/' + h + '/', '/'),
                f = Object(o.getLangs)(c, p, Object(o.getUrlForLang)(d, i)).map(
                  function(e) {
                    return Object.assign({}, e, {
                      link: e.link.replace('/' + h + '/', '/'),
                    })
                  }
                ),
                g = u()()
              return (
                console.log(c),
                console.log(g),
                c.includes(g) && console.log(i),
                r.a.createElement(l.b, { locale: p, messages: a }, t(f))
              )
            },
            data: i,
          })
        }),
        p = (n(221), n(204))
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
        var i = a.prototype
        return (
          (i.componentDidMount = function() {
            var e = this
            this.timeoutId = setTimeout(function() {
              e.setState({ loading: '' })
            }, 100)
          }),
          (i.componentWillUnmount = function() {
            this.timeoutId && clearTimeout(this.timeoutId)
          }),
          (i.render = function() {
            var e = this,
              t = this.props,
              n = t.children,
              a = (function(e, t) {
                if (null == e) return {}
                var n,
                  a,
                  r = {},
                  i = Object.keys(e)
                for (a = 0; a < i.length; a++)
                  (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
                return r
              })(t, ['children'])
            return r.a.createElement(h, a, function(t) {
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
                    r.a.createElement(p.a, null)
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
    211: function(e, t, n) {
      e.exports = n.p + 'static/door-6b5c5c0d4f5d4cf4c18b0bc0847dc85b.png'
    },
    215: function(e, t) {},
    216: function(e, t) {},
    217: function(e, t) {},
    220: function(e, t) {},
    227: function(e, t, n) {
      'use strict'
      var a = n(0),
        r = n.n(a),
        i = n(237)
      n(211)
      t.a = function(e) {
        var t = e.images.map(function(e) {
          return r.a.createElement(
            'div',
            { className: 'szoba', key: e },
            r.a.createElement(
              'span',
              { className: 'image icon major' },
              r.a.createElement('img', { src: e })
            )
          )
        })
        return r.a.createElement(
          i.Carousel,
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
    },
    249: function(e, t, n) {
      e.exports = n.p + 'static/logo2-81cf607e93c22f213ede474179c2d346.png'
    },
    250: function(e, t, n) {
      'use strict'
      var a = n(0),
        r = n.n(a),
        i = (n(200), n(211)),
        o = n.n(i),
        s = n(199)
      t.a = function(e) {
        return r.a.createElement(
          'section',
          { id: 'intro', className: 'main' },
          r.a.createElement(
            'div',
            { className: 'spotlight' },
            r.a.createElement(
              'div',
              { className: 'content' },
              r.a.createElement(
                'header',
                { className: 'major' },
                r.a.createElement(
                  'h2',
                  null,
                  r.a.createElement(s.a, { id: 'bemutatkozasTitle' })
                )
              ),
              r.a.createElement(
                'p',
                null,
                r.a.createElement(s.a, { id: 'bemutatkozasDescription' })
              )
            ),
            r.a.createElement(
              'span',
              { className: 'image' },
              r.a.createElement('img', { src: o.a, alt: '' })
            )
          )
        )
      }
    },
    251: function(e, t, n) {
      e.exports = n.p + 'static/szoba1-c48962c183ebd72f1107367d38ba82bc.png'
    },
    252: function(e, t, n) {
      e.exports = n.p + 'static/sarok-67bd35877446c3c2413640908ef74929.png'
    },
    253: function(e, t, n) {
      e.exports = n.p + 'static/szoba2-c741fa36bbfd3a59b835d178da4bb874.png'
    },
    254: function(e, t, n) {
      e.exports = n.p + 'static/szoba3-f6ac236526f786c747023ea93e0fcdde.png'
    },
    255: function(e, t, n) {
      e.exports = n.p + 'static/fenti-83066dab63083c44fb1f1b3d9579f44c.jpeg'
    },
    256: function(e, t, n) {
      e.exports =
        n.p + 'static/apartman_0-b31bcef9fbf571416827e8812d29e7c8.jpeg'
    },
    257: function(e, t, n) {
      e.exports =
        n.p + 'static/apartman_1-9e6bf00edc3a80672804676e1bf3d6ae.jpeg'
    },
    258: function(e, t, n) {
      e.exports =
        n.p + 'static/apartman_2-65578845439d9b4d0c8e3e2b2e42be7b.jpeg'
    },
    259: function(e, t, n) {
      e.exports =
        n.p + 'static/apartman_3-1eb98b6102274ec2062dda62aea6a74d.jpeg'
    },
    260: function(e, t, n) {
      e.exports =
        n.p + 'static/apartman_4-db3870306c1805badc2c6ad83fbc1aad.jpeg'
    },
    261: function(e, t, n) {
      e.exports =
        n.p + 'static/apartman_5-7064f8e61dad5df25e773c2b3bc3d150.jpeg'
    },
    262: function(e, t, n) {
      e.exports =
        n.p + 'static/apartman_6-3d58cf1617eedfa79cbf94e83b54efe4.jpeg'
    },
    263: function(e, t, n) {
      e.exports = n.p + 'static/0-22597882aa69d7f6141dc40850bbcbd9.jpeg'
    },
    264: function(e, t, n) {
      e.exports = n.p + 'static/1-d685f2f2f976b1dd091eeaab7c60c4cc.jpeg'
    },
    265: function(e, t, n) {
      e.exports = n.p + 'static/2-7d9c2501f0bcc07e84fcde4bbf5e6ebb.jpeg'
    },
    266: function(e, t, n) {
      e.exports = n.p + 'static/3-e04d30923ddfaade75ae12df0336a3cc.jpeg'
    },
    267: function(e, t, n) {
      e.exports = n.p + 'static/0-e769574c8798a47f7d17e61f57db8871.jpeg'
    },
    268: function(e, t, n) {
      e.exports = n.p + 'static/1-8b0c74886dc1bba59d4a0d09b7ef1d7f.jpeg'
    },
    269: function(e, t, n) {
      e.exports = n.p + 'static/2-9f09b8fa838ce7120e165c6e04e0f70e.jpeg'
    },
    270: function(e, t, n) {
      e.exports = n.p + 'static/0-d4952368a1532c5e4be431ea7bb604af.jpeg'
    },
    271: function(e, t, n) {
      e.exports = n.p + 'static/1-9e26e8103984972ba353fd8da19bfb06.jpeg'
    },
    272: function(e, t, n) {
      e.exports = n.p + 'static/2-9f09b8fa838ce7120e165c6e04e0f70e.jpeg'
    },
    273: function(e, t, n) {
      e.exports = n.p + 'static/0-63412415939a46fbdfa072374b6bc6ff.jpeg'
    },
    274: function(e, t, n) {
      e.exports = n.p + 'static/1-0d5e05134affc97ada5036876f920387.jpeg'
    },
    275: function(e, t, n) {
      e.exports = n.p + 'static/0-bbbefcc8d3fe7155f6ea25507877f846.jpeg'
    },
    276: function(e, t, n) {
      e.exports = n.p + 'static/1-4a293e1134df4248f824395cbdae6491.jpeg'
    },
    277: function(e, t, n) {
      e.exports = n.p + 'static/0-5cd88b32be5592924cda74a2b532b16e.jpeg'
    },
    278: function(e, t, n) {
      e.exports = n.p + 'static/1-94e677ca80c75d6c31178f208d9b780d.jpeg'
    },
    279: function(e, t, n) {
      e.exports = n.p + 'static/2-cb5ec0d349f9e2fbc106e6f464e5f75e.jpeg'
    },
    280: function(e, t, n) {
      e.exports = n.p + 'static/3-0d8cdd23d69af7b34966f794421221d4.jpeg'
    },
    281: function(e, t, n) {
      e.exports = n.p + 'static/4-73fcea2184c1cf28079440480e536622.jpeg'
    },
    282: function(e, t, n) {
      e.exports = n.p + 'static/5-3d93b9c16e997b964d8a6784720b799f.jpeg'
    },
    283: function(e, t, n) {
      e.exports = n.p + 'static/6-129e1ee271ec0a5d8dae765d2423cca3.jpeg'
    },
    284: function(e, t, n) {
      e.exports = n.p + 'static/7-7c855695f458dc5da12d6a86a6bc267e.jpeg'
    },
    285: function(e, t, n) {
      e.exports = n.p + 'static/8-c46633445953f6e00d102481d89f9236.jpeg'
    },
    286: function(e, t, n) {
      e.exports = n.p + 'static/9-788890b6b78196d00352a18d73e79074.jpeg'
    },
    287: function(e, t, n) {
      e.exports = n.p + 'static/10-83b9cd4aad03b50f93e1fa290447f4e0.jpeg'
    },
    288: function(e, t, n) {
      e.exports = n.p + 'static/0-9f5447f05d94d17fcf0c0baf67f6ac34.jpeg'
    },
    289: function(e, t, n) {
      e.exports = n.p + 'static/1-79531e2130bbac16c43f4a49d48c97c3.jpeg'
    },
    290: function(e, t, n) {
      e.exports = n.p + 'static/2-4504e3d4ef942d2518b33725928b7903.jpeg'
    },
    291: function(e, t, n) {
      e.exports = n.p + 'static/3-5ef82911808d960bf7405fa48fd8b86e.jpeg'
    },
    292: function(e, t, n) {
      'use strict'
      var a = n(0),
        r = n.n(a),
        i = (n(200), n(199)),
        o = n(227),
        s = n(293),
        l = n.n(s),
        c = n(294),
        u = n.n(c),
        h = n(295),
        p = [n.n(h).a, l.a, u.a]
      t.a = function(e) {
        return r.a.createElement(
          'section',
          { id: 'second', className: 'main special' },
          r.a.createElement(
            'header',
            { className: 'major' },
            r.a.createElement(
              'h2',
              null,
              r.a.createElement(i.a, { id: 'szolgTitle' })
            ),
            r.a.createElement(
              'div',
              { className: 'szoba content' },
              r.a.createElement(
                'h3',
                null,
                r.a.createElement(i.a, { id: 'szolgBreakf' })
              ),
              r.a.createElement(
                'p',
                null,
                r.a.createElement(i.a, { id: 'szolgBreakfDesc' })
              ),
              r.a.createElement(
                'span',
                { style: { width: '100%' } },
                r.a.createElement(o.a, { images: p })
              )
            )
          ),
          r.a.createElement(
            'ul',
            { className: 'statistics' },
            r.a.createElement(
              'li',
              { className: 'style3' },
              r.a.createElement('span', { className: 'icon fa-wifi' }),
              r.a.createElement(
                'strong',
                null,
                r.a.createElement(i.a, { id: 'szolgWiFiTitle' })
              ),
              r.a.createElement(
                'p',
                null,
                r.a.createElement(i.a, { id: 'szolgWiFiDesc' })
              )
            ),
            r.a.createElement(
              'li',
              { className: 'style4' },
              r.a.createElement('span', { className: 'icon fa-bicycle' }),
              r.a.createElement(
                'strong',
                null,
                r.a.createElement(i.a, { id: 'szolgBicycleTitle' })
              ),
              r.a.createElement(
                'p',
                null,
                r.a.createElement(i.a, { id: 'szolgBicycleDesc' })
              )
            ),
            r.a.createElement(
              'li',
              { className: 'style5' },
              r.a.createElement('span', { className: 'icon fa-ship' }),
              r.a.createElement(
                'strong',
                null,
                r.a.createElement(i.a, { id: 'szolgTuraKenuKajakTitle' })
              ),
              r.a.createElement(
                'p',
                null,
                r.a.createElement(i.a, { id: 'szolgTuraKenuKajakDesc' })
              )
            ),
            r.a.createElement(
              'li',
              { className: 'style2' },
              r.a.createElement('i', { className: 'icon fas fa-swimmer' }),
              r.a.createElement(
                'strong',
                null,
                r.a.createElement(i.a, { id: 'szolgAquaTitle' })
              ),
              r.a.createElement(
                'p',
                null,
                r.a.createElement(i.a, { id: 'szolgAquaDesc' })
              )
            )
          )
        )
      }
    },
    293: function(e, t, n) {
      e.exports = n.p + 'static/reggeli-d28e51337b5b4ee885b96b715441fe8e.jpeg'
    },
    294: function(e, t, n) {
      e.exports = n.p + 'static/pic0-df870725690d895b87a74e1eb5b1cbf0.jpg'
    },
    295: function(e, t, n) {
      e.exports = n.p + 'static/pic1-68c646d2999665b2db15efa36e75e064.jpg'
    },
    296: function(e, t, n) {
      'use strict'
      var a = n(0),
        r = n.n(a),
        i = n(200),
        o = n(199)
      t.a = function(e) {
        var t = e.langKey,
          n = Object(a.useState)(!1),
          s = n[0],
          l = n[1]
        return r.a.createElement(
          'section',
          { id: 'foglalas', className: 'main special' },
          r.a.createElement(
            'header',
            { className: 'major' },
            r.a.createElement(
              'h2',
              null,
              r.a.createElement(o.a, { id: 'foglTitle' })
            ),
            r.a.createElement(
              'p',
              null,
              r.a.createElement(o.a, { id: 'foglSubtitle' })
            ),
            r.a.createElement(
              'p',
              null,
              r.a.createElement(o.a, { id: 'foglHaziString' }),
              r.a.createElement(
                i.a,
                { to: t + '/hazirend' },
                r.a.createElement(o.a, { id: 'foglHaziLink' })
              )
            ),
            r.a.createElement('input', {
              type: 'checkbox',
              checked: Boolean(s),
              onChange: function(e) {
                l(Boolean(e.target.checked))
              },
            }),
            r.a.createElement(o.a, { id: 'foglAccept' })
          ),
          s &&
            r.a.createElement(
              'footer',
              { className: 'major' },
              r.a.createElement(
                'ul',
                { clőassName: 'actions' },
                r.a.createElement(
                  'li',
                  null,
                  r.a.createElement(
                    'a',
                    {
                      target: '_blank',
                      href:
                        'https://nethotelbooking.net/hotels/szentannapanzioesztergom',
                      className: 'button special',
                    },
                    r.a.createElement(o.a, { id: 'foglButton' })
                  )
                )
              )
            )
        )
      }
    },
    297: function(e, t, n) {
      'use strict'
      var a = n(0),
        r = n.n(a),
        i = (n(200), n(251), n(252), n(253), n(254), n(255), n(256)),
        o = n.n(i),
        s = n(257),
        l = n.n(s),
        c = n(258),
        u = n.n(c),
        h = n(259),
        p = n.n(h),
        d = n(260),
        f = n.n(d),
        g = n(261),
        m = n.n(g),
        y = n(262),
        k = n.n(y),
        v = [o.a, l.a, u.a, p.a, f.a, m.a, k.a],
        b = n(263),
        E = n.n(b),
        M = n(264),
        z = n.n(M),
        j = n(265),
        S = n.n(j),
        w = n(266),
        K = n.n(w),
        T = [E.a, z.a, S.a, K.a],
        x = n(267),
        C = n.n(x),
        N = n(268),
        L = n.n(N),
        A = n(269),
        P = n.n(A),
        D = [C.a, L.a, P.a],
        R = n(270),
        O = n.n(R),
        H = (n(271), n(272)),
        B = n.n(H),
        F = [O.a, B.a],
        I = n(273),
        J = n.n(I),
        V = n(274),
        G = n.n(V),
        U = [J.a, G.a],
        Q = n(275),
        _ = n.n(Q),
        Y = n(276),
        W = n.n(Y),
        q = [_.a, W.a],
        Z = n(277),
        X = n.n(Z),
        $ = n(278),
        ee = n.n($),
        te = n(279),
        ne = n.n(te),
        ae = n(280),
        re = n.n(ae),
        ie = n(281),
        oe = n.n(ie),
        se = n(282),
        le = n.n(se),
        ce = n(283),
        ue = n.n(ce),
        he = n(284),
        pe = n.n(he),
        de = n(285),
        fe = n.n(de),
        ge = (n(286), n(287)),
        me = n.n(ge),
        ye = [X.a, ee.a, ne.a, re.a, oe.a, le.a, ue.a, pe.a, fe.a, me.a],
        ke = n(288),
        ve = n.n(ke),
        be = n(289),
        Ee = n.n(be),
        Me = n(290),
        ze = n.n(Me),
        je = n(291),
        Se = n.n(je),
        we = [ve.a, Ee.a, ze.a, Se.a],
        Ke = n(227),
        Te = n(199)
      t.a = function(e) {
        return r.a.createElement(
          'section',
          { id: 'first', className: 'main special' },
          r.a.createElement(
            'header',
            { className: 'major' },
            r.a.createElement(
              'h2',
              null,
              r.a.createElement(Te.a, { id: 'szobakTitle' })
            )
          ),
          r.a.createElement(
            'div',
            { className: 'spotlight' },
            r.a.createElement(
              'p',
              { className: 'content' },
              r.a.createElement(Te.a, { id: 'szobakDescription' })
            )
          ),
          r.a.createElement(
            'ul',
            { className: 'features' },
            r.a.createElement(
              'li',
              null,
              r.a.createElement(Ke.a, { images: v }),
              r.a.createElement(
                'h3',
                null,
                r.a.createElement(Te.a, { id: 'szobakKullApTitle' })
              ),
              r.a.createElement(
                'p',
                null,
                r.a.createElement(Te.a, { id: 'szobakKullApDesc' })
              )
            ),
            r.a.createElement(
              'li',
              null,
              r.a.createElement(Ke.a, { images: T }),
              r.a.createElement(
                'h3',
                null,
                r.a.createElement(Te.a, { id: 'szobakMacTitle' })
              )
            ),
            r.a.createElement(
              'li',
              null,
              r.a.createElement(Ke.a, { images: D }),
              r.a.createElement(
                'h3',
                null,
                r.a.createElement(Te.a, { id: 'szobakMentaTitle' })
              )
            ),
            r.a.createElement(
              'li',
              null,
              r.a.createElement(Ke.a, { images: F }),
              r.a.createElement(
                'h3',
                null,
                r.a.createElement(Te.a, { id: 'szobakPinkTitle' })
              )
            ),
            r.a.createElement(
              'li',
              null,
              r.a.createElement(Ke.a, { images: U }),
              r.a.createElement(
                'h3',
                null,
                r.a.createElement(Te.a, { id: 'szobakRainforestTitle' })
              )
            ),
            r.a.createElement(
              'li',
              null,
              r.a.createElement(Ke.a, { images: q }),
              r.a.createElement(
                'h3',
                null,
                r.a.createElement(Te.a, { id: 'szobakRoseTitle' })
              )
            ),
            r.a.createElement(
              'li',
              null,
              r.a.createElement(Ke.a, { images: ye }),
              r.a.createElement(
                'h3',
                null,
                r.a.createElement(Te.a, { id: 'szobakApartmanTitle' })
              ),
              r.a.createElement(
                'p',
                null,
                r.a.createElement(Te.a, { id: 'szobakApartmanDesc' })
              )
            ),
            r.a.createElement(
              'li',
              null,
              r.a.createElement(Ke.a, { images: we }),
              r.a.createElement(
                'h3',
                null,
                r.a.createElement(Te.a, { id: 'szobakFloorTitle' })
              ),
              r.a.createElement(
                'p',
                null,
                r.a.createElement(Te.a, { id: 'szobakFloorDesc' })
              )
            )
          )
        )
      }
    },
    298: function(e, t, n) {
      'use strict'
      var a = n(0),
        r = n.n(a),
        i = n(327),
        o = n.n(i),
        s = n(329),
        l = n.n(s)
      var c = function(e) {
          return e.children
        },
        u = (function(e) {
          var t, n
          function a() {
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
          ;(n = e),
            ((t = a).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n)
          var i = a.prototype
          return (
            (i.componentDidMount = function() {
              l.a.polyfill()
            }),
            (i.handleClick = function(e) {
              e.preventDefault()
              var t = 0,
                n = !0,
                a = this.props,
                r = a.type,
                i = a.element,
                o = a.offset,
                s = a.timeout
              if (r && i)
                switch (r) {
                  case 'class':
                    n = !!(t = document.getElementsByClassName(i)[0])
                    break
                  case 'id':
                    n = !!(t = document.getElementById(i))
                }
              n
                ? this.scrollTo(t, o, s)
                : console.log('Element not found: ' + i)
            }),
            (i.scrollTo = function(e, t, n) {
              void 0 === t && (t = 0), void 0 === n && (n = null)
              var a = e ? e.getBoundingClientRect().top + window.pageYOffset : 0
              n
                ? setTimeout(function() {
                    window.scroll({ top: a + t, left: 0, behavior: 'smooth' })
                  }, n)
                : window.scroll({ top: a + t, left: 0, behavior: 'smooth' })
            }),
            (i.render = function() {
              return r.a.createElement(
                c,
                null,
                'object' == typeof this.props.children
                  ? r.a.cloneElement(this.props.children, {
                      onClick: this.handleClick,
                    })
                  : r.a.createElement(
                      'span',
                      { onClick: this.handleClick },
                      this.props.children
                    )
              )
            }),
            a
          )
        })(r.a.Component),
        h = n(199)
      n(204),
        (t.a = function(e) {
          return r.a.createElement(
            'nav',
            { id: 'nav', className: e.sticky ? 'alt' : '' },
            r.a.createElement(
              o.a,
              {
                items: ['intro', 'first', 'second', 'cta'],
                currentClassName: 'is-active',
                offset: -300,
              },
              r.a.createElement(
                'li',
                null,
                r.a.createElement(
                  u,
                  { type: 'id', element: 'intro' },
                  r.a.createElement(
                    'a',
                    { href: '#' },
                    r.a.createElement(h.a, { id: 'navBemutat' })
                  )
                )
              ),
              r.a.createElement(
                'li',
                null,
                r.a.createElement(
                  u,
                  { type: 'id', element: 'first' },
                  r.a.createElement(
                    'a',
                    { href: '#' },
                    r.a.createElement(h.a, { id: 'navSzobak' })
                  )
                )
              ),
              r.a.createElement(
                'li',
                null,
                r.a.createElement(
                  u,
                  { type: 'id', element: 'second' },
                  r.a.createElement(
                    'a',
                    { href: '#' },
                    r.a.createElement(h.a, { id: 'navSzolg' })
                  )
                )
              ),
              r.a.createElement(
                'li',
                null,
                r.a.createElement(
                  u,
                  { type: 'id', element: 'velemenyek' },
                  r.a.createElement(
                    'a',
                    { href: '#' },
                    r.a.createElement(h.a, { id: 'navVelemeny' })
                  )
                )
              ),
              r.a.createElement(
                'li',
                null,
                r.a.createElement(
                  u,
                  { type: 'id', element: 'foglalas' },
                  r.a.createElement(
                    'a',
                    { href: '#' },
                    r.a.createElement(h.a, { id: 'navFoglalas' })
                  )
                )
              )
            )
          )
        })
    },
    299: function(e, t, n) {
      'use strict'
      var a = n(0),
        r = n.n(a),
        i = n(200),
        o = n(237),
        s = (n(211),
        function(e) {
          var t = e.comments.map(function(e) {
            var t = e.comment,
              n = e.userName
            return r.a.createElement(
              'div',
              {
                style: {
                  height: '170px',
                  display: 'flex',
                  justifyContent: 'center',
                },
                key: t,
              },
              r.a.createElement(
                'div',
                { style: { width: '300px' } },
                r.a.createElement('h3', null, t),
                r.a.createElement(
                  'h4',
                  { style: { textAlign: 'right' } },
                  r.a.createElement('i', null, '-', n)
                )
              )
            )
          })
          return r.a.createElement(
            o.Carousel,
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
        l = n(336),
        c = n.n(l),
        u = n(199)
      t.a = function(e) {
        var t = c()('https://sztannabackend.pjatacsuk.now.sh/api/comment.js'),
          n = t.isLoading,
          a = t.data
        return r.a.createElement(
          'section',
          { id: 'velemenyek', className: 'main special' },
          r.a.createElement(
            'header',
            { className: 'major' },
            r.a.createElement(
              'h2',
              null,
              r.a.createElement(u.a, { id: 'commentsTitle' })
            )
          ),
          n || !a
            ? r.a.createElement('div', null)
            : r.a.createElement(s, { comments: a.comments }),
          r.a.createElement(
            'footer',
            { className: 'major' },
            r.a.createElement(
              'ul',
              { className: 'actions' },
              r.a.createElement(
                'li',
                null,
                r.a.createElement(
                  i.a,
                  { to: '/comment', className: 'button' },
                  'Irjon ön is'
                )
              )
            )
          )
        )
      }
    },
    300: function(e, t, n) {
      'use strict'
      var a = n(0),
        r = n.n(a),
        i = (n(209), n(66)),
        o = n.n(i),
        s = n(199),
        l = function(e) {
          var t = e.langs.map(function(e) {
            return r.a.createElement(
              o.a,
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
        },
        c = n(249),
        u = n.n(c)
      t.a = function(e) {
        return (
          console.log(e.langsMenu),
          r.a.createElement(
            'header',
            { id: 'header', className: 'alt' },
            r.a.createElement(l, { langs: e.langsMenu }),
            r.a.createElement(
              'span',
              { className: 'logo' },
              r.a.createElement('img', { src: u.a, alt: '' })
            ),
            r.a.createElement(
              'h1',
              null,
              r.a.createElement(s.a, { id: 'headerCompTitle' })
            ),
            r.a.createElement(
              'p',
              null,
              r.a.createElement(s.a, { id: 'headerCompSubtitle' })
            )
          )
        )
      }
    },
    441: function(e, t, n) {
      e.exports = (function() {
        'use strict'
        return [
          {
            locale: 'hu',
            pluralRuleFunction: function(e, t) {
              return t
                ? 1 == e || 5 == e
                  ? 'one'
                  : 'other'
                : 1 == e
                  ? 'one'
                  : 'other'
            },
            fields: {
              year: {
                displayName: 'év',
                relative: {
                  0: 'ez az év',
                  1: 'következő év',
                  '-1': 'előző év',
                },
                relativeTime: {
                  future: { one: '{0} év múlva', other: '{0} év múlva' },
                  past: {
                    one: '{0} évvel ezelőtt',
                    other: '{0} évvel ezelőtt',
                  },
                },
              },
              'year-short': {
                displayName: 'év',
                relative: {
                  0: 'ez az év',
                  1: 'következő év',
                  '-1': 'előző év',
                },
                relativeTime: {
                  future: { one: '{0} év múlva', other: '{0} év múlva' },
                  past: {
                    one: '{0} évvel ezelőtt',
                    other: '{0} évvel ezelőtt',
                  },
                },
              },
              month: {
                displayName: 'hónap',
                relative: {
                  0: 'ez a hónap',
                  1: 'következő hónap',
                  '-1': 'előző hónap',
                },
                relativeTime: {
                  future: { one: '{0} hónap múlva', other: '{0} hónap múlva' },
                  past: {
                    one: '{0} hónappal ezelőtt',
                    other: '{0} hónappal ezelőtt',
                  },
                },
              },
              'month-short': {
                displayName: 'hónap',
                relative: {
                  0: 'ez a hónap',
                  1: 'következő hónap',
                  '-1': 'előző hónap',
                },
                relativeTime: {
                  future: { one: '{0} hónap múlva', other: '{0} hónap múlva' },
                  past: {
                    one: '{0} hónappal ezelőtt',
                    other: '{0} hónappal ezelőtt',
                  },
                },
              },
              day: {
                displayName: 'nap',
                relative: {
                  0: 'ma',
                  1: 'holnap',
                  2: 'holnapután',
                  '-2': 'tegnapelőtt',
                  '-1': 'tegnap',
                },
                relativeTime: {
                  future: { one: '{0} nap múlva', other: '{0} nap múlva' },
                  past: {
                    one: '{0} nappal ezelőtt',
                    other: '{0} nappal ezelőtt',
                  },
                },
              },
              'day-short': {
                displayName: 'nap',
                relative: {
                  0: 'ma',
                  1: 'holnap',
                  2: 'holnapután',
                  '-2': 'tegnapelőtt',
                  '-1': 'tegnap',
                },
                relativeTime: {
                  future: { one: '{0} nap múlva', other: '{0} nap múlva' },
                  past: { one: '{0} napja', other: '{0} napja' },
                },
              },
              hour: {
                displayName: 'óra',
                relative: { 0: 'ebben az órában' },
                relativeTime: {
                  future: { one: '{0} óra múlva', other: '{0} óra múlva' },
                  past: {
                    one: '{0} órával ezelőtt',
                    other: '{0} órával ezelőtt',
                  },
                },
              },
              'hour-short': {
                displayName: 'óra',
                relative: { 0: 'ebben az órában' },
                relativeTime: {
                  future: { one: '{0} óra múlva', other: '{0} óra múlva' },
                  past: {
                    one: '{0} órával ezelőtt',
                    other: '{0} órával ezelőtt',
                  },
                },
              },
              minute: {
                displayName: 'perc',
                relative: { 0: 'ebben a percben' },
                relativeTime: {
                  future: { one: '{0} perc múlva', other: '{0} perc múlva' },
                  past: {
                    one: '{0} perccel ezelőtt',
                    other: '{0} perccel ezelőtt',
                  },
                },
              },
              'minute-short': {
                displayName: 'perc',
                relative: { 0: 'ebben a percben' },
                relativeTime: {
                  future: { one: '{0} perc múlva', other: '{0} perc múlva' },
                  past: {
                    one: '{0} perccel ezelőtt',
                    other: '{0} perccel ezelőtt',
                  },
                },
              },
              second: {
                displayName: 'másodperc',
                relative: { 0: 'most' },
                relativeTime: {
                  future: {
                    one: '{0} másodperc múlva',
                    other: '{0} másodperc múlva',
                  },
                  past: {
                    one: '{0} másodperccel ezelőtt',
                    other: '{0} másodperccel ezelőtt',
                  },
                },
              },
              'second-short': {
                displayName: 'másodperc',
                relative: { 0: 'most' },
                relativeTime: {
                  future: {
                    one: '{0} másodperc múlva',
                    other: '{0} másodperc múlva',
                  },
                  past: {
                    one: '{0} másodperccel ezelőtt',
                    other: '{0} másodperccel ezelőtt',
                  },
                },
              },
            },
          },
        ]
      })()
    },
    442: function(e, t) {
      IntlPolyfill.__addLocaleData({
        locale: 'hu',
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
          hour12: !1,
          formats: {
            short: '{1} {0}',
            medium: '{1} {0}',
            full: '{1} {0}',
            long: '{1} {0}',
            availableFormats: {
              d: 'd',
              E: 'ccc',
              Ed: 'd., E',
              Ehm: 'E h:mm a',
              EHm: 'E HH:mm',
              Ehms: 'E h:mm:ss a',
              EHms: 'E HH:mm:ss',
              Gy: 'G y.',
              GyMMM: 'G y. MMM',
              GyMMMd: 'G y. MMM d.',
              GyMMMEd: 'G y. MMM d., E',
              h: 'a h',
              H: 'H',
              hm: 'a h:mm',
              Hm: 'H:mm',
              hms: 'a h:mm:ss',
              Hms: 'H:mm:ss',
              hmsv: 'h:mm:ss a v',
              Hmsv: 'HH:mm:ss v',
              hmv: 'h:mm a v',
              Hmv: 'HH:mm v',
              M: 'L',
              Md: 'M. d.',
              MEd: 'M. d., E',
              MMM: 'LLL',
              MMMd: 'MMM d.',
              MMMEd: 'MMM d., E',
              MMMMd: 'MMMM d.',
              mmss: 'mm:ss',
              ms: 'mm:ss',
              y: 'y.',
              yM: 'y. M.',
              yMd: 'y. MM. dd.',
              yMEd: 'y. MM. dd., E',
              yMMM: 'y. MMM',
              yMMMd: 'y. MMM d.',
              yMMMEd: 'y. MMM d., E',
              yMMMM: 'y. MMMM',
              yQQQ: 'y. QQQ',
              yQQQQ: 'y. QQQQ',
            },
            dateFormats: {
              yMMMMEEEEd: 'y. MMMM d., EEEE',
              yMMMMd: 'y. MMMM d.',
              yMMMd: 'y. MMM d.',
              yMd: 'y. MM. dd.',
            },
            timeFormats: {
              hmmsszzzz: 'H:mm:ss zzzz',
              hmsz: 'H:mm:ss z',
              hms: 'H:mm:ss',
              hm: 'H:mm',
            },
          },
          calendars: {
            buddhist: {
              months: {
                narrow: [
                  'J',
                  'F',
                  'M',
                  'Á',
                  'M',
                  'J',
                  'J',
                  'A',
                  'Sz',
                  'O',
                  'N',
                  'D',
                ],
                short: [
                  'jan.',
                  'febr.',
                  'márc.',
                  'ápr.',
                  'máj.',
                  'jún.',
                  'júl.',
                  'aug.',
                  'szept.',
                  'okt.',
                  'nov.',
                  'dec.',
                ],
                long: [
                  'január',
                  'február',
                  'március',
                  'április',
                  'május',
                  'június',
                  'július',
                  'augusztus',
                  'szeptember',
                  'október',
                  'november',
                  'december',
                ],
              },
              days: {
                narrow: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
                short: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                long: [
                  'vasárnap',
                  'hétfő',
                  'kedd',
                  'szerda',
                  'csütörtök',
                  'péntek',
                  'szombat',
                ],
              },
              eras: { narrow: ['BK'], short: ['BK'], long: ['BK'] },
              dayPeriods: { am: 'de.', pm: 'du.' },
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
                narrow: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
                short: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                long: [
                  'vasárnap',
                  'hétfő',
                  'kedd',
                  'szerda',
                  'csütörtök',
                  'péntek',
                  'szombat',
                ],
              },
              dayPeriods: { am: 'de.', pm: 'du.' },
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
                narrow: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
                short: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                long: [
                  'vasárnap',
                  'hétfő',
                  'kedd',
                  'szerda',
                  'csütörtök',
                  'péntek',
                  'szombat',
                ],
              },
              eras: {
                narrow: ['ERA0', 'ERA1'],
                short: ['ERA0', 'ERA1'],
                long: ['ERA0', 'ERA1'],
              },
              dayPeriods: { am: 'de.', pm: 'du.' },
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
                narrow: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
                short: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                long: [
                  'vasárnap',
                  'hétfő',
                  'kedd',
                  'szerda',
                  'csütörtök',
                  'péntek',
                  'szombat',
                ],
              },
              dayPeriods: { am: 'de.', pm: 'du.' },
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
                narrow: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
                short: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                long: [
                  'vasárnap',
                  'hétfő',
                  'kedd',
                  'szerda',
                  'csütörtök',
                  'péntek',
                  'szombat',
                ],
              },
              eras: {
                narrow: ['ERA0', 'ERA1'],
                short: ['ERA0', 'ERA1'],
                long: ['ERA0', 'ERA1'],
              },
              dayPeriods: { am: 'de.', pm: 'du.' },
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
                narrow: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
                short: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                long: [
                  'vasárnap',
                  'hétfő',
                  'kedd',
                  'szerda',
                  'csütörtök',
                  'péntek',
                  'szombat',
                ],
              },
              eras: { narrow: ['ERA0'], short: ['ERA0'], long: ['ERA0'] },
              dayPeriods: { am: 'de.', pm: 'du.' },
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
                narrow: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
                short: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                long: [
                  'vasárnap',
                  'hétfő',
                  'kedd',
                  'szerda',
                  'csütörtök',
                  'péntek',
                  'szombat',
                ],
              },
              eras: {
                narrow: ['ERA0', 'ERA1'],
                short: ['ERA0', 'ERA1'],
                long: ['ERA0', 'ERA1'],
              },
              dayPeriods: { am: 'de.', pm: 'du.' },
            },
            gregory: {
              months: {
                narrow: [
                  'J',
                  'F',
                  'M',
                  'Á',
                  'M',
                  'J',
                  'J',
                  'A',
                  'Sz',
                  'O',
                  'N',
                  'D',
                ],
                short: [
                  'jan.',
                  'febr.',
                  'márc.',
                  'ápr.',
                  'máj.',
                  'jún.',
                  'júl.',
                  'aug.',
                  'szept.',
                  'okt.',
                  'nov.',
                  'dec.',
                ],
                long: [
                  'január',
                  'február',
                  'március',
                  'április',
                  'május',
                  'június',
                  'július',
                  'augusztus',
                  'szeptember',
                  'október',
                  'november',
                  'december',
                ],
              },
              days: {
                narrow: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
                short: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                long: [
                  'vasárnap',
                  'hétfő',
                  'kedd',
                  'szerda',
                  'csütörtök',
                  'péntek',
                  'szombat',
                ],
              },
              eras: {
                narrow: ['ie.', 'isz.', 'BCE', 'CE'],
                short: ['i. e.', 'i. sz.', 'BCE', 'CE'],
                long: [
                  'időszámításunk előtt',
                  'időszámításunk szerint',
                  'i. e.',
                  'i. sz.',
                ],
              },
              dayPeriods: { am: 'de.', pm: 'du.' },
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
                  'Tisri',
                  'Hesván',
                  'Kiszlév',
                  'Tévész',
                  'Svát',
                  'Ádár I',
                  'Ádár',
                  'Niszán',
                  'Ijár',
                  'Sziván',
                  'Tamuz',
                  'Áv',
                  'Elul',
                  'Ádár II',
                ],
                long: [
                  'Tisri',
                  'Hesván',
                  'Kiszlév',
                  'Tévész',
                  'Svát',
                  'Ádár I',
                  'Ádár',
                  'Niszán',
                  'Ijár',
                  'Sziván',
                  'Tamuz',
                  'Áv',
                  'Elul',
                  'Ádár II',
                ],
              },
              days: {
                narrow: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
                short: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                long: [
                  'vasárnap',
                  'hétfő',
                  'kedd',
                  'szerda',
                  'csütörtök',
                  'péntek',
                  'szombat',
                ],
              },
              eras: { narrow: ['TÉ'], short: ['TÉ'], long: ['TÉ'] },
              dayPeriods: { am: 'de.', pm: 'du.' },
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
                narrow: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
                short: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                long: [
                  'vasárnap',
                  'hétfő',
                  'kedd',
                  'szerda',
                  'csütörtök',
                  'péntek',
                  'szombat',
                ],
              },
              eras: { narrow: ['Saka'], short: ['Saka'], long: ['Saka'] },
              dayPeriods: { am: 'de.', pm: 'du.' },
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
                  'Moh.',
                  'Saf.',
                  'Réb. 1',
                  'Réb. 2',
                  'Dsem. I',
                  'Dsem. II',
                  'Red.',
                  'Sab.',
                  'Ram.',
                  'Sev.',
                  'Dsül k.',
                  'Dsül h.',
                ],
                long: [
                  'Moharrem',
                  'Safar',
                  'Rébi el avvel',
                  'Rébi el accher',
                  'Dsemádi el avvel',
                  'Dsemádi el accher',
                  'Redseb',
                  'Sabán',
                  'Ramadán',
                  'Sevvál',
                  'Dsül kade',
                  'Dsül hedse',
                ],
              },
              days: {
                narrow: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
                short: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                long: [
                  'vasárnap',
                  'hétfő',
                  'kedd',
                  'szerda',
                  'csütörtök',
                  'péntek',
                  'szombat',
                ],
              },
              eras: { narrow: ['MF'], short: ['MF'], long: ['MF'] },
              dayPeriods: { am: 'de.', pm: 'du.' },
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
                  'Moh.',
                  'Saf.',
                  'Réb. 1',
                  'Réb. 2',
                  'Dsem. I',
                  'Dsem. II',
                  'Red.',
                  'Sab.',
                  'Ram.',
                  'Sev.',
                  'Dsül k.',
                  'Dsül h.',
                ],
                long: [
                  'Moharrem',
                  'Safar',
                  'Rébi el avvel',
                  'Rébi el accher',
                  'Dsemádi el avvel',
                  'Dsemádi el accher',
                  'Redseb',
                  'Sabán',
                  'Ramadán',
                  'Sevvál',
                  'Dsül kade',
                  'Dsül hedse',
                ],
              },
              days: {
                narrow: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
                short: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                long: [
                  'vasárnap',
                  'hétfő',
                  'kedd',
                  'szerda',
                  'csütörtök',
                  'péntek',
                  'szombat',
                ],
              },
              eras: { narrow: ['MF'], short: ['MF'], long: ['MF'] },
              dayPeriods: { am: 'de.', pm: 'du.' },
            },
            japanese: {
              months: {
                narrow: [
                  'J',
                  'F',
                  'M',
                  'Á',
                  'M',
                  'J',
                  'J',
                  'A',
                  'Sz',
                  'O',
                  'N',
                  'D',
                ],
                short: [
                  'jan.',
                  'febr.',
                  'márc.',
                  'ápr.',
                  'máj.',
                  'jún.',
                  'júl.',
                  'aug.',
                  'szept.',
                  'okt.',
                  'nov.',
                  'dec.',
                ],
                long: [
                  'január',
                  'február',
                  'március',
                  'április',
                  'május',
                  'június',
                  'július',
                  'augusztus',
                  'szeptember',
                  'október',
                  'november',
                  'december',
                ],
              },
              days: {
                narrow: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
                short: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                long: [
                  'vasárnap',
                  'hétfő',
                  'kedd',
                  'szerda',
                  'csütörtök',
                  'péntek',
                  'szombat',
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
              dayPeriods: { am: 'de.', pm: 'du.' },
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
                narrow: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
                short: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                long: [
                  'vasárnap',
                  'hétfő',
                  'kedd',
                  'szerda',
                  'csütörtök',
                  'péntek',
                  'szombat',
                ],
              },
              eras: { narrow: ['AP'], short: ['AP'], long: ['AP'] },
              dayPeriods: { am: 'de.', pm: 'du.' },
            },
            roc: {
              months: {
                narrow: [
                  'J',
                  'F',
                  'M',
                  'Á',
                  'M',
                  'J',
                  'J',
                  'A',
                  'Sz',
                  'O',
                  'N',
                  'D',
                ],
                short: [
                  'jan.',
                  'febr.',
                  'márc.',
                  'ápr.',
                  'máj.',
                  'jún.',
                  'júl.',
                  'aug.',
                  'szept.',
                  'okt.',
                  'nov.',
                  'dec.',
                ],
                long: [
                  'január',
                  'február',
                  'március',
                  'április',
                  'május',
                  'június',
                  'július',
                  'augusztus',
                  'szeptember',
                  'október',
                  'november',
                  'december',
                ],
              },
              days: {
                narrow: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
                short: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                long: [
                  'vasárnap',
                  'hétfő',
                  'kedd',
                  'szerda',
                  'csütörtök',
                  'péntek',
                  'szombat',
                ],
              },
              eras: {
                narrow: ['R.O.C. előtt', 'R.O.C.'],
                short: ['R.O.C. előtt', 'R.O.C.'],
                long: ['R.O.C. előtt', 'R.O.C.'],
              },
              dayPeriods: { am: 'de.', pm: 'du.' },
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
              positivePattern: '{number} {currency}',
              negativePattern: '{minusSign}{number} {currency}',
            },
            percent: {
              positivePattern: '{number}{percentSign}',
              negativePattern: '{minusSign}{number}{percentSign}',
            },
          },
          symbols: {
            latn: {
              decimal: ',',
              group: ' ',
              nan: 'NaN',
              plusSign: '+',
              minusSign: '-',
              percentSign: '%',
              infinity: '∞',
            },
          },
          currencies: {
            HUF: 'Ft',
            JPY: '¥',
            XAF: 'FCFA',
            XOF: 'CFA',
            XPF: 'CFPF',
          },
        },
      })
    },
    443: function(e, t) {
      e.exports = {
        headerTitle: 'Szent Anna Panzió és Apartman',
        headerCompTitle: 'Szent Anna Panzió',
        headerCompSubtitle: 'Rejtett kis oázis Esztergomban',
        navBemutat: 'Bemutatkozás',
        navSzobak: 'Szobáink',
        navSzolg: 'Szolgáltatások',
        navVelemeny: 'Vélemények',
        navFoglalas: 'Foglalás',
        bemutatkozasTitle: 'Családias környezet, meghitt hangulat',
        bemutatkozasDescription:
          'Panziónk családi vállalkozásként 2003.-ban nyitotta meg kapuit. 2019.-ben felfrissülve, a mai kor igényeinek megfelelve 6 db két férőhelyes szobával , egy négy fős család számára kényelmes apartmannal és egy különálló szintén négy férőhelyes apartmanházzal várjuk vendégeinket.',
        szobakTitle: 'Egyedi szobák, magas színvonalon',
        szobakDescription:
          'Szobáink mindegyike multifunkcionális klímával rendelkezik, mely egyénileg szabályozható fűtésre és hűtésre egyaránt. A szobákban nagyméretű LED TV található, melyen külföldi csatornák is foghatóak. Értékes tárgyaikat a szobai széfekben maximális biztonságban tudhatják. Minibárunk hideg italokról és finom snackekről gondoskodik.',
        szobakKullApTitle: 'Különálló apartmanház',
        szobakKullApDesc:
          'A különálló apartmanházunk mindenben kielégíti igényeit. Konyha, mosogatógép, kád és zuhany várja lakóit',
        szobakMacTitle: 'Arany-kék',
        szobakMentaTitle: 'Menta',
        szobakPinkTitle: 'Pink',
        szobakRainforestTitle: 'Esőerdő',
        szobakRoseTitle: 'Rózsa',
        szobakApartmanTitle: 'Apartman',
        szobakApartmanDesc:
          'A apartmanunk mindenben kielégíti igényeit. Konyha, mosogatógép, kád és zuhany várja lakóit',
        szobakFloorTitle: 'Földszinti szoba',
        szobakFloorDesc: 'Akadálymentesített',
        szolgTitle: 'Szolgáltatások',
        szolgBreakf: 'Reggeli',
        szolgBreakfDesc: 'A reggeli 1500 HUF / fő / éj áron kérhető',
        szolgWiFiTitle: 'Wi-Fi',
        szolgWiFiDesc: 'Ingyenes Wi-Fi szolgáltatás',
        szolgBicycleTitle: 'Bicikli bérlés',
        szolgBicycleDesc: 'Kerékpár kölcsönzés 1500 HUF / fő / nap áron',
        szolgTuraKenuKajakTitle: 'Túra kenu és kajak bérlés',
        szolgTuraKenuKajakDesc: 'Lehetőség van túra kenu és kajak bérlésre',
        szolgAquaTitle: 'Aquasziget kedvezmény',
        szolgAquaDesc:
          '20 % kedvezményt nyújtó kupon az esztergomi Aquaszigetre',
        commentsTitle: 'Rólunk írták',
        foglTitle: 'Szobafoglalás',
        foglSubtitle: 'Ne késlekedjen, foglaljon most szobát!',
        foglHaziString: 'A foglaláshoz szükséges elfogadni a ',
        foglHaziLink: 'házirendet ami ide kattintva elérhető',
        foglAccept: 'Elfogadom a házirendet',
        foglButton: 'Foglalok',
        elerTitle: 'Elérhetőségek',
        elerCimTitle: 'Cím',
        elerCimPhoneTitle: 'Telefonszám',
        elerPhone: '(06) 20 3914 407',
        elerEmailTitle: 'E-mail',
      }
    },
    444: function(e) {
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
  },
])
//# sourceMappingURL=component---src-pages-index-hu-js-b89a16147abe8bef1a87.js.map
