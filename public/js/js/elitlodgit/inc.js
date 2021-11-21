"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/elitlodgit/inc"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/investigator/incident.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/investigator/incident.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['user'],
  data: function data() {
    return {
      selected: [0],
      selectedItem: 1,
      desserts: [{
        name: 'Frozen Yogurt',
        calories: 159
      }, {
        name: 'Ice cream sandwich',
        calories: 237
      }]
    };
  },
  methods: {
    getIncidences: function getIncidences() {
      var payload = {
        model: 'incidences',
        update: 'updateIncidences'
      };
      this.$store.dispatch("getItems", payload);
    },
    open_dashboard: function open_dashboard(data) {
      this.$router.push({
        name: "investigator",
        params: {
          id: data
        }
      });
    }
  },
  mounted: function mounted() {
    this.getIncidences();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['incidences']))
});

/***/ }),

/***/ "./resources/js/components/investigator/incident.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/investigator/incident.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _incident_vue_vue_type_template_id_95054986___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incident.vue?vue&type=template&id=95054986& */ "./resources/js/components/investigator/incident.vue?vue&type=template&id=95054986&");
/* harmony import */ var _incident_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incident.vue?vue&type=script&lang=js& */ "./resources/js/components/investigator/incident.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _incident_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _incident_vue_vue_type_template_id_95054986___WEBPACK_IMPORTED_MODULE_0__.render,
  _incident_vue_vue_type_template_id_95054986___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/investigator/incident.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/investigator/incident.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/investigator/incident.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_incident_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./incident.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/investigator/incident.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_incident_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/investigator/incident.vue?vue&type=template&id=95054986&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/investigator/incident.vue?vue&type=template&id=95054986& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_incident_vue_vue_type_template_id_95054986___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_incident_vue_vue_type_template_id_95054986___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_incident_vue_vue_type_template_id_95054986___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./incident.vue?vue&type=template&id=95054986& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/investigator/incident.vue?vue&type=template&id=95054986&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/investigator/incident.vue?vue&type=template&id=95054986&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/investigator/incident.vue?vue&type=template&id=95054986& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    { staticClass: "mx-auto", attrs: { width: "100%", tile: "" } },
    [
      _c(
        "v-list",
        { staticStyle: { "margin-top": "10px" } },
        [
          _c(
            "v-list-item",
            [
              _c(
                "v-list-item-avatar",
                {
                  staticStyle: {
                    height: "100px !important",
                    "min-width": "100px !important"
                  }
                },
                [
                  _c("v-icon", { staticStyle: { "font-size": "100px" } }, [
                    _vm._v("mdi-account-circle")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item",
            { attrs: { link: "" } },
            [
              _c(
                "v-list-item-content",
                [
                  _c("v-list-item-title", { staticClass: "text-h6" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.user.name) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-list-item-subtitle", [_vm._v(_vm._s(_vm.user.email))])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item-action",
                [_c("v-icon", [_vm._v("mdi-menu-down")])],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-list",
        { attrs: { "two-line": "" } },
        [
          _c(
            "v-list-item-group",
            {
              attrs: { "active-class": "blue--text", multiple: "" },
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            },
            [
              _vm._l(_vm.incidences.data, function(item, index) {
                return [
                  _c("v-list-item", {
                    key: item.title,
                    on: {
                      click: function($event) {
                        return _vm.open_dashboard(item.id)
                      }
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(ref) {
                            var active = ref.active
                            return [
                              _c(
                                "v-list-item-content",
                                [
                                  _c("v-list-item-title", {
                                    domProps: { textContent: _vm._s(item.code) }
                                  }),
                                  _vm._v(" "),
                                  _c("v-list-item-subtitle", {
                                    staticClass: "text--primary",
                                    domProps: {
                                      textContent: _vm._s(item.reported_by)
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-list-item-subtitle", {
                                    domProps: {
                                      textContent: _vm._s(item.incidence_date)
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-action",
                                [
                                  _c("v-list-item-action-text", {
                                    domProps: {
                                      textContent: _vm._s(
                                        "KSH " + item.estimate_loss
                                      )
                                    }
                                  }),
                                  _vm._v(" "),
                                  item.task_status == "pending"
                                    ? _c(
                                        "v-icon",
                                        { attrs: { color: "red" } },
                                        [
                                          _vm._v(
                                            "\n                                mdi-cancel\n                            "
                                          )
                                        ]
                                      )
                                    : item.task_status == "Accepted"
                                    ? _c(
                                        "v-icon",
                                        { attrs: { color: "success" } },
                                        [
                                          _vm._v(
                                            "\n                                mdi-check-circle\n                            "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  }),
                  _vm._v(" "),
                  index < _vm.incidences.data.length - 1
                    ? _c("v-divider", { key: index })
                    : _vm._e()
                ]
              })
            ],
            2
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