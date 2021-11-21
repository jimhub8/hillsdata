"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/elitlodgit/visual"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/visual.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/visual.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dialog: false,
      selectedItem: 1,
      items: [{
        text: 'Real-Time',
        icon: 'mdi-clock'
      }, {
        text: 'Audience',
        icon: 'mdi-account'
      }, {
        text: 'Conversions',
        icon: 'mdi-flag'
      }]
    };
  },
  created: function created() {
    var _this = this;

    eventBus.$on("showIncidence", function (data) {
      _this.form = data;
      _this.dialog = true;
    });
  },
  mounted: function mounted() {
    this.getIncidences();
  },
  methods: {
    getIncidences: function getIncidences() {
      var payload = {
        model: 'incidences',
        id: this.$route.params.id,
        update: 'updateIncidences'
      };
      this.$store.dispatch("showItem", payload).then(function (response) {// this.form = response.data.investigation
      });
    },
    close: function close() {
      this.dialog = false;
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['loading', 'incidences']))
});

/***/ }),

/***/ "./resources/js/components/incidence/visual.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/incidence/visual.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _visual_vue_vue_type_template_id_5300fe94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visual.vue?vue&type=template&id=5300fe94& */ "./resources/js/components/incidence/visual.vue?vue&type=template&id=5300fe94&");
/* harmony import */ var _visual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visual.vue?vue&type=script&lang=js& */ "./resources/js/components/incidence/visual.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _visual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _visual_vue_vue_type_template_id_5300fe94___WEBPACK_IMPORTED_MODULE_0__.render,
  _visual_vue_vue_type_template_id_5300fe94___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/incidence/visual.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/incidence/visual.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/incidence/visual.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_visual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./visual.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/visual.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_visual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/incidence/visual.vue?vue&type=template&id=5300fe94&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/incidence/visual.vue?vue&type=template&id=5300fe94& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_visual_vue_vue_type_template_id_5300fe94___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_visual_vue_vue_type_template_id_5300fe94___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_visual_vue_vue_type_template_id_5300fe94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./visual.vue?vue&type=template&id=5300fe94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/visual.vue?vue&type=template&id=5300fe94&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/visual.vue?vue&type=template&id=5300fe94&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/visual.vue?vue&type=template&id=5300fe94& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { "margin-top": "-60px" } },
    [
      _c(
        "v-container",
        { attrs: { fluid: "", "fill-height": "" } },
        [
          _c(
            "v-layout",
            { attrs: { "justify-center": "", "align-center": "", wrap: "" } },
            [
              _c(
                "v-card",
                { staticStyle: { width: "100%", padding: "30px" } },
                [
                  _c(
                    "v-container",
                    { attrs: { fluid: "" } },
                    [
                      _c(
                        "v-layout",
                        {
                          staticStyle: { "margin-left": "70px" },
                          attrs: { row: "", wrap: "" }
                        },
                        [
                          _c(
                            "v-flex",
                            { attrs: { sm5: "" } },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-flex",
                                        { staticClass: "mb-4" },
                                        [
                                          _c(
                                            "v-avatar",
                                            {
                                              staticClass: "mr-4",
                                              staticStyle: {
                                                width: "100px!important",
                                                height: "100px !important"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticStyle: {
                                                    "font-size": "100px"
                                                  },
                                                  attrs: { color: "primary" }
                                                },
                                                [_vm._v("mdi-account-circle")]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list",
                                        { attrs: { dense: "" } },
                                        [
                                          _c("v-subheader", [
                                            _vm._v("Company")
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-item-group",
                                            {
                                              attrs: { color: "primary" },
                                              model: {
                                                value: _vm.selectedItem,
                                                callback: function($$v) {
                                                  _vm.selectedItem = $$v
                                                },
                                                expression: "selectedItem"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-list-item",
                                                [
                                                  _c(
                                                    "v-list-item-icon",
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v("mdi-timelapse")
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-content",
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v(
                                                          "Incident date&time"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-subtitle",
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.incidences
                                                                .incidence_date
                                                            ) +
                                                              " " +
                                                              _vm._s(
                                                                _vm.incidences
                                                                  .time_reported
                                                              ) +
                                                              " "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item",
                                                [
                                                  _c(
                                                    "v-list-item-icon",
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v(
                                                          "mdi-calendar-range"
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-content",
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v("Reported on")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-subtitle",
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.incidences
                                                                .reported_date
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item",
                                                [
                                                  _c(
                                                    "v-list-item-icon",
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v("mdi-domain")
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-content",
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v("Company")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-subtitle",
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.incidences
                                                                .client
                                                                .company_name
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item",
                                                [
                                                  _c(
                                                    "v-list-item-icon",
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v(
                                                          "mdi-slash-forward-box"
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-content",
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v(
                                                          "Division assigned"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-subtitle",
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.incidences
                                                                .division_id
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item",
                                                [
                                                  _c(
                                                    "v-list-item-icon",
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v(
                                                          "mdi-currency-usd-off"
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-content",
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v("Estimated loss")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-subtitle",
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.incidences
                                                                .estimate_loss
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.incidences.investigation != null
                            ? _c(
                                "v-flex",
                                { attrs: { sm5: "" } },
                                [
                                  _c(
                                    "v-card",
                                    [
                                      _c(
                                        "v-card-text",
                                        [
                                          _c(
                                            "v-flex",
                                            { staticClass: "mb-4" },
                                            [
                                              _c(
                                                "v-avatar",
                                                {
                                                  staticClass: "mr-4",
                                                  staticStyle: {
                                                    width: "100px!important",
                                                    height: "100px !important"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticStyle: {
                                                        "font-size": "100px"
                                                      },
                                                      attrs: {
                                                        color: "primary"
                                                      }
                                                    },
                                                    [_vm._v("mdi-circle-box")]
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            [
                                              _c(
                                                "v-expansion-panels",
                                                { staticClass: "mb-6" },
                                                [
                                                  _c(
                                                    "v-expansion-panel",
                                                    [
                                                      _c(
                                                        "v-expansion-panel-header",
                                                        {
                                                          attrs: {
                                                            "expand-icon":
                                                              "mdi-menu-down"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    Reference terms\n                                                "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-expansion-panel-content",
                                                        [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                _vm.incidences
                                                                  .investigation
                                                                  .reference_terms
                                                              ) +
                                                              "\n                                                "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-expansion-panels",
                                                { staticClass: "mb-6" },
                                                [
                                                  _c(
                                                    "v-expansion-panel",
                                                    [
                                                      _c(
                                                        "v-expansion-panel-header",
                                                        {
                                                          attrs: {
                                                            "expand-icon":
                                                              "mdi-menu-down"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    Activity notes\n                                                "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-expansion-panel-content",
                                                        [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                _vm.incidences
                                                                  .investigation
                                                                  .activity_notes
                                                              ) +
                                                              "\n                                                "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-expansion-panels",
                                                { staticClass: "mb-6" },
                                                [
                                                  _c(
                                                    "v-expansion-panel",
                                                    [
                                                      _c(
                                                        "v-expansion-panel-header",
                                                        {
                                                          attrs: {
                                                            "expand-icon":
                                                              "mdi-menu-down"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    Risk description\n                                                "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-expansion-panel-content",
                                                        [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                _vm.incidences
                                                                  .investigation
                                                                  .risk_description
                                                              ) +
                                                              "\n                                                "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-expansion-panels",
                                                { staticClass: "mb-6" },
                                                [
                                                  _c(
                                                    "v-expansion-panel",
                                                    [
                                                      _c(
                                                        "v-expansion-panel-header",
                                                        {
                                                          attrs: {
                                                            "expand-icon":
                                                              "mdi-menu-down"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    Executive summary\n                                                "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-expansion-panel-content",
                                                        [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                _vm.incidences
                                                                  .investigation
                                                                  .executive_summary
                                                              ) +
                                                              "\n                                                "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-expansion-panels",
                                                { staticClass: "mb-6" },
                                                [
                                                  _c(
                                                    "v-expansion-panel",
                                                    [
                                                      _c(
                                                        "v-expansion-panel-header",
                                                        {
                                                          attrs: {
                                                            "expand-icon":
                                                              "mdi-menu-down"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    Scene analysis\n                                                "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-expansion-panel-content",
                                                        [
                                                          _c("div", {
                                                            domProps: {
                                                              innerHTML: _vm._s(
                                                                _vm.incidences
                                                                  .investigation
                                                                  .scene_analysis
                                                              )
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-expansion-panels",
                                                { staticClass: "mb-6" },
                                                [
                                                  _c(
                                                    "v-expansion-panel",
                                                    [
                                                      _c(
                                                        "v-expansion-panel-header",
                                                        {
                                                          attrs: {
                                                            "expand-icon":
                                                              "mdi-menu-down"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    Evidence summary\n                                                "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-expansion-panel-content",
                                                        [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                _vm.incidences
                                                                  .investigation
                                                                  .evidence_summary
                                                              ) +
                                                              "\n                                                "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-expansion-panels",
                                                { staticClass: "mb-6" },
                                                [
                                                  _c(
                                                    "v-expansion-panel",
                                                    [
                                                      _c(
                                                        "v-expansion-panel-header",
                                                        {
                                                          attrs: {
                                                            "expand-icon":
                                                              "mdi-menu-down"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    Subject matter\n                                                "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-expansion-panel-content",
                                                        [
                                                          _c("div", {
                                                            domProps: {
                                                              innerHTML: _vm._s(
                                                                _vm.incidences
                                                                  .investigation
                                                                  .subject_matter
                                                              )
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-expansion-panels",
                                                { staticClass: "mb-6" },
                                                [
                                                  _c(
                                                    "v-expansion-panel",
                                                    [
                                                      _c(
                                                        "v-expansion-panel-header",
                                                        {
                                                          attrs: {
                                                            "expand-icon":
                                                              "mdi-menu-down"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    Investigation findings\n                                                "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-expansion-panel-content",
                                                        [
                                                          _c("div", {
                                                            domProps: {
                                                              innerHTML: _vm._s(
                                                                _vm.incidences
                                                                  .investigation
                                                                  .investigation_findings
                                                              )
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-expansion-panels",
                                                { staticClass: "mb-6" },
                                                [
                                                  _c(
                                                    "v-expansion-panel",
                                                    [
                                                      _c(
                                                        "v-expansion-panel-header",
                                                        {
                                                          attrs: {
                                                            "expand-icon":
                                                              "mdi-menu-down"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    Analytical observation\n                                                "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-expansion-panel-content",
                                                        [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                _vm.incidences
                                                                  .investigation
                                                                  .analytical_observation
                                                              ) +
                                                              "\n                                                "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-expansion-panels",
                                                { staticClass: "mb-6" },
                                                [
                                                  _c(
                                                    "v-expansion-panel",
                                                    [
                                                      _c(
                                                        "v-expansion-panel-header",
                                                        {
                                                          attrs: {
                                                            "expand-icon":
                                                              "mdi-menu-down"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    Conclusion\n                                                "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-expansion-panel-content",
                                                        [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                _vm.incidences
                                                                  .investigation
                                                                  .conclusion
                                                              ) +
                                                              "\n                                                "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-expansion-panels",
                                                { staticClass: "mb-6" },
                                                [
                                                  _c(
                                                    "v-expansion-panel",
                                                    [
                                                      _c(
                                                        "v-expansion-panel-header",
                                                        {
                                                          attrs: {
                                                            "expand-icon":
                                                              "mdi-menu-down"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    Recommendation\n                                                "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-expansion-panel-content",
                                                        [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                _vm.incidences
                                                                  .investigation
                                                                  .recommendation
                                                              ) +
                                                              "\n                                                "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);