"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/elitlodgit/upload"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/investigator/inc/upload.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/investigator/inc/upload.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['fileList'],
  data: function data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      file_dialog: false,
      dialog: false,
      uploads: [],
      item: {}
    };
  },
  created: function created() {
    var _this = this;

    eventBus.$on("uploadEvent", function () {
      _this.dialog = true;
    });
  },
  methods: {
    handleRemove: function handleRemove(file) {
      console.log(file);
      var index = this.uploads.findIndex(function (data) {
        return data.uid === file.uid;
      }); // console.log(index);

      this.$delete(this.uploads, index);
    },
    handlePictureCardPreview: function handlePictureCardPreview(file) {
      console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleEdit: function handleEdit(file) {
      this.file_dialog = true;
      this.item = file;
      console.log(file);
    },
    handleChange: function handleChange(file) {
      this.uploads.push(file);
      console.log(file);
    },
    update: function update() {
      var _this2 = this;

      // console.log(item);
      var index = this.uploads.findIndex(function (data) {
        return data.uid === _this2.item.uid;
      });
      console.log(index);
      this.uploads[index].name = this.item.name; // this.values.splice(index, 1, replacementItem)
    },
    close: function close() {
      this.dialog = false;
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['errors', 'loading', 'incident']))
});

/***/ }),

/***/ "./resources/js/components/investigator/inc/upload.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/investigator/inc/upload.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _upload_vue_vue_type_template_id_b5876206___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.vue?vue&type=template&id=b5876206& */ "./resources/js/components/investigator/inc/upload.vue?vue&type=template&id=b5876206&");
/* harmony import */ var _upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.vue?vue&type=script&lang=js& */ "./resources/js/components/investigator/inc/upload.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _upload_vue_vue_type_template_id_b5876206___WEBPACK_IMPORTED_MODULE_0__.render,
  _upload_vue_vue_type_template_id_b5876206___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/investigator/inc/upload.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/investigator/inc/upload.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/investigator/inc/upload.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./upload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/investigator/inc/upload.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/investigator/inc/upload.vue?vue&type=template&id=b5876206&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/investigator/inc/upload.vue?vue&type=template&id=b5876206& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_b5876206___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_b5876206___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_b5876206___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./upload.vue?vue&type=template&id=b5876206& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/investigator/inc/upload.vue?vue&type=template&id=b5876206&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/investigator/inc/upload.vue?vue&type=template&id=b5876206&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/investigator/inc/upload.vue?vue&type=template&id=b5876206& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    "v-layout",
    { attrs: { row: "", "justify-center": "" } },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                { attrs: { "primary-title": "" } },
                [
                  _vm._v("\n                Uploads\n                "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", icon: "" },
                      on: { click: _vm.close }
                    },
                    [
                      _c("v-icon", { attrs: { small: "" } }, [
                        _vm._v("mdi-close")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "el-upload",
                    {
                      attrs: {
                        action: "#",
                        "list-type": "picture-card",
                        "auto-upload": false,
                        "on-change": _vm.handleChange
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "file",
                          fn: function(ref) {
                            var file = ref.file
                            return _c("div", {}, [
                              _c("img", {
                                staticClass: "el-upload-list__item-thumbnail",
                                attrs: { src: file.url, alt: "" }
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "el-upload-list__item-actions" },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "el-upload-list__item-preview",
                                      on: {
                                        click: function($event) {
                                          return _vm.handlePictureCardPreview(
                                            file
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "el-icon-zoom-in"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  !_vm.disabled
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "el-upload-list__item-delete",
                                          on: {
                                            click: function($event) {
                                              return _vm.handleEdit(file)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "el-icon-edit"
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  !_vm.disabled
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "el-upload-list__item-delete",
                                          on: {
                                            click: function($event) {
                                              return _vm.handleRemove(file)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "el-icon-delete"
                                          })
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              )
                            ])
                          }
                        }
                      ])
                    },
                    [
                      _c("i", {
                        staticClass: "el-icon-plus",
                        attrs: { slot: "default" },
                        slot: "default"
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-dialog",
                    {
                      attrs: { visible: _vm.dialogVisible },
                      on: {
                        "update:visible": function($event) {
                          _vm.dialogVisible = $event
                        }
                      }
                    },
                    [
                      _c("img", {
                        attrs: {
                          width: "100%",
                          src: _vm.dialogImageUrl,
                          alt: ""
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-dialog",
                    {
                      attrs: {
                        title: "File details",
                        visible: _vm.file_dialog,
                        width: "80%",
                        center: ""
                      },
                      on: {
                        "update:visible": function($event) {
                          _vm.file_dialog = $event
                        }
                      }
                    },
                    [
                      _c(
                        "v-card",
                        { attrs: { elevation: "0" } },
                        [
                          _c(
                            "v-card-text",
                            [
                              _c("el-input", {
                                attrs: { placeholder: "Please input" },
                                model: {
                                  value: _vm.item.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.item, "name", $$v)
                                  },
                                  expression: "item.name"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-list",
                                { attrs: { dense: "" } },
                                [
                                  _c("v-subheader", [_vm._v("Details")]),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-group",
                                    { attrs: { color: "primary" } },
                                    [
                                      _c(
                                        "v-list-item",
                                        [
                                          _c(
                                            "v-list-item-icon",
                                            [
                                              _c("v-icon", [_vm._v("mdi-file")])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-item-content",
                                            [
                                              _c("v-list-item-title", [
                                                _vm._v(
                                                  _vm._s(
                                                    parseInt(
                                                      _vm.item.size / 1024
                                                    )
                                                  ) + "kbs"
                                                )
                                              ])
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _vm.item.raw
                                        ? _c(
                                            "v-list-item",
                                            [
                                              _c(
                                                "v-list-item-icon",
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("mdi-ev-plug-type1")
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
                                                      _vm._s(_vm.item.raw.type)
                                                    )
                                                  ])
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    small: "",
                                    elevation: "0",
                                    color: "primary"
                                  },
                                  on: { click: _vm.update }
                                },
                                [_vm._v("Submit")]
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