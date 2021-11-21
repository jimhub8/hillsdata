"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/elitlodgit/report"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/report.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/report.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['incidence'],
  components: {},
  data: function data() {
    return {
      fileList: null,
      form: {},
      labelPosition: 'top'
    };
  },
  methods: {
    handlePreview: function handlePreview() {},
    handleRemove: function handleRemove() {},
    getIncidences: function getIncidences() {
      var payload = {
        model: 'incidences',
        update: 'updateIncidence'
      };
      this.$store.dispatch("getItems", payload);
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['loading'])),
  mounted: function mounted() {},
  created: function created() {} //   beforeRouteEnter(to, from, next) {
  //     next(vm => {
  //       if (vm.incidence.can["view incidences"]) {
  //         next();
  //       } else {
  //         next("/");
  //       }
  //     });
  //   }

});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/report.vue?vue&type=style&index=0&id=024ff60b&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/report.vue?vue&type=style&index=0&id=024ff60b&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.el-input--prefix .el-input__inner[data-v-024ff60b] {\n    border-radius: 50px !important;\n}\n.v-toolbar__content[data-v-024ff60b],\n.v-toolbar__extension[data-v-024ff60b] {\n    height: auto !important;\n}\n.v-avatar[data-v-024ff60b] {\n    height: 10px !important;\n    width: 10px !important;\n    margin-left: 40% !important;\n}\n.v-main__wrap[data-v-024ff60b],\n.v-main[data-v-024ff60b] {\n    padding: 0 !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/report.vue?vue&type=style&index=0&id=024ff60b&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/report.vue?vue&type=style&index=0&id=024ff60b&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_style_index_0_id_024ff60b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./report.vue?vue&type=style&index=0&id=024ff60b&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/report.vue?vue&type=style&index=0&id=024ff60b&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_style_index_0_id_024ff60b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_style_index_0_id_024ff60b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/incidence/incident/report.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/incidence/incident/report.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _report_vue_vue_type_template_id_024ff60b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report.vue?vue&type=template&id=024ff60b&scoped=true& */ "./resources/js/components/incidence/incident/report.vue?vue&type=template&id=024ff60b&scoped=true&");
/* harmony import */ var _report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.vue?vue&type=script&lang=js& */ "./resources/js/components/incidence/incident/report.vue?vue&type=script&lang=js&");
/* harmony import */ var _report_vue_vue_type_style_index_0_id_024ff60b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report.vue?vue&type=style&index=0&id=024ff60b&scoped=true&lang=css& */ "./resources/js/components/incidence/incident/report.vue?vue&type=style&index=0&id=024ff60b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _report_vue_vue_type_template_id_024ff60b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _report_vue_vue_type_template_id_024ff60b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "024ff60b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/incidence/incident/report.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/incidence/incident/report.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/incidence/incident/report.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/report.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/incidence/incident/report.vue?vue&type=style&index=0&id=024ff60b&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/incidence/incident/report.vue?vue&type=style&index=0&id=024ff60b&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_style_index_0_id_024ff60b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./report.vue?vue&type=style&index=0&id=024ff60b&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/report.vue?vue&type=style&index=0&id=024ff60b&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/incidence/incident/report.vue?vue&type=template&id=024ff60b&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/incidence/incident/report.vue?vue&type=template&id=024ff60b&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_template_id_024ff60b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_template_id_024ff60b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_template_id_024ff60b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./report.vue?vue&type=template&id=024ff60b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/report.vue?vue&type=template&id=024ff60b&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/report.vue?vue&type=template&id=024ff60b&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/report.vue?vue&type=template&id=024ff60b&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "el-form",
                        {
                          attrs: {
                            "label-position": _vm.labelPosition,
                            "label-width": "100px",
                            model: _vm.form
                          }
                        },
                        [
                          _c(
                            "v-layout",
                            {
                              staticStyle: { "padding-left": "30px" },
                              attrs: { row: "", wrap: "" }
                            },
                            [
                              _c(
                                "v-flex",
                                { attrs: { sm11: "" } },
                                [
                                  _c(
                                    "el-form-item",
                                    { attrs: { label: "Terms of reference" } },
                                    [
                                      _c("el-input", {
                                        model: {
                                          value: _vm.form.reference_terms,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "reference_terms",
                                              $$v
                                            )
                                          },
                                          expression: "form.reference_terms"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { sm5: "" } },
                                [
                                  _c(
                                    "el-form-item",
                                    { attrs: { label: "Activity notes" } },
                                    [
                                      _c("el-input", {
                                        attrs: { type: "textarea" },
                                        model: {
                                          value: _vm.form.activity_notes,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "activity_notes",
                                              $$v
                                            )
                                          },
                                          expression: "form.activity_notes"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { sm5: "", "offset-sm1": "" } },
                                [
                                  _c(
                                    "el-form-item",
                                    { attrs: { label: "Risk description" } },
                                    [
                                      _c("el-input", {
                                        attrs: { type: "textarea" },
                                        model: {
                                          value: _vm.form.risk_description,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "risk_description",
                                              $$v
                                            )
                                          },
                                          expression: "form.risk_description"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { sm5: "" } },
                                [
                                  _c(
                                    "el-form-item",
                                    { attrs: { label: "Executive summary" } },
                                    [
                                      _c("el-input", {
                                        attrs: { type: "textarea" },
                                        model: {
                                          value: _vm.form.executive_summary,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "executive_summary",
                                              $$v
                                            )
                                          },
                                          expression: "form.executive_summary"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { sm5: "", "offset-sm1": "" } },
                                [
                                  _c(
                                    "el-form-item",
                                    { attrs: { label: "Summary of evidence" } },
                                    [
                                      _c("el-input", {
                                        attrs: { type: "textarea" },
                                        model: {
                                          value: _vm.form.evidence_summary,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "evidence_summary",
                                              $$v
                                            )
                                          },
                                          expression: "form.evidence_summary"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { sm11: "" } },
                                [
                                  _c(
                                    "el-form-item",
                                    { attrs: { label: "Summary of evidence" } },
                                    [
                                      _c("tinymce", {
                                        attrs: { id: "d1" },
                                        model: {
                                          value: _vm.form.scene_analysis,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "scene_analysis",
                                              $$v
                                            )
                                          },
                                          expression: "form.scene_analysis"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { sm11: "" } },
                                [
                                  _c(
                                    "el-form-item",
                                    {
                                      attrs: {
                                        label: "Subject matter analysis"
                                      }
                                    },
                                    [
                                      _c("tinymce", {
                                        attrs: { id: "d2" },
                                        model: {
                                          value: _vm.form.subject_matter,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "subject_matter",
                                              $$v
                                            )
                                          },
                                          expression: "form.subject_matter"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { sm11: "" } },
                                [
                                  _c(
                                    "el-form-item",
                                    { attrs: { label: "Files" } },
                                    [
                                      _c(
                                        "el-upload",
                                        {
                                          staticClass: "upload-demo",
                                          attrs: {
                                            drag: "",
                                            action:
                                              "https://jsonplaceholder.typicode.com/posts/",
                                            "on-preview": _vm.handlePreview,
                                            "on-remove": _vm.handleRemove,
                                            "file-list": _vm.fileList,
                                            multiple: ""
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "el-icon-upload"
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "el-upload__text" },
                                            [
                                              _vm._v("Drop files here or "),
                                              _c("em", [
                                                _vm._v("click to upload")
                                              ])
                                            ]
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
                                "v-flex",
                                { attrs: { sm11: "" } },
                                [
                                  _c(
                                    "el-form-item",
                                    {
                                      attrs: { label: "Investigation Findings" }
                                    },
                                    [
                                      _c("tinymce", {
                                        attrs: { id: "d3" },
                                        model: {
                                          value:
                                            _vm.form.investigation_findings,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "investigation_findings",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "form.investigation_findings"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { sm5: "" } },
                                [
                                  _c(
                                    "el-form-item",
                                    {
                                      attrs: { label: "Analytical observation" }
                                    },
                                    [
                                      _c("el-input", {
                                        attrs: { type: "textarea" },
                                        model: {
                                          value:
                                            _vm.form.analytical_observation,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "analytical_observation",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "form.analytical_observation"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { sm5: "", "offset-sm1": "" } },
                                [
                                  _c(
                                    "el-form-item",
                                    { attrs: { label: "Liablity&Conclusion" } },
                                    [
                                      _c("el-input", {
                                        attrs: { type: "textarea" },
                                        model: {
                                          value: _vm.form.conclusion,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "conclusion",
                                              $$v
                                            )
                                          },
                                          expression: "form.conclusion"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { sm5: "" } },
                                [
                                  _c(
                                    "el-form-item",
                                    {
                                      attrs: { label: "Risk Recommendations" }
                                    },
                                    [
                                      _c("el-input", {
                                        attrs: { type: "textarea" },
                                        model: {
                                          value: _vm.form.recommendation,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "recommendation",
                                              $$v
                                            )
                                          },
                                          expression: "form.recommendation"
                                        }
                                      })
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