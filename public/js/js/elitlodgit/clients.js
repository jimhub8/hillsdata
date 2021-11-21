"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/elitlodgit/clients"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/Permission.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/Permission.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // props: ['form'],
  data: function data() {
    return {
      e1: true,
      loader: false,
      loading: false,
      selected: [],
      // permissions: [],
      dialog: false,
      form: {}
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      this.loading = true;
      axios.post("/client/userpermisions/".concat(this.form.id), {
        selected: this.selected
      }).then(function (response) {
        // console.log(response);
        _this.loading = false;

        _this.$emit('alertRequest');

        _this.close();
      })["catch"](function (error) {
        _this.loading = false;
        _this.errors = error.response.data.errors;
      });
    },
    resetForm: function resetForm() {// this.form = Object.assign({}, this.defaultForm)
      // this.$refs.form.reset()
    },
    close: function close() {
      this.dialog = false;
    },
    getPermissions: function getPermissions() {
      var payload = {
        model: 'permissions/client',
        update: 'updatePermissionList'
      };
      this.$store.dispatch("getItems", payload);
    }
  },
  created: function created() {
    var _this2 = this;

    eventBus.$on('permEvent', function (data) {
      _this2.dialog = true;
      _this2.selected = data.data;
      _this2.form.id = data.id;

      _this2.getPermissions();
    });
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['permissions'])), {}, {
    sortPerm: function sortPerm() {
      return _.orderBy(this.permissions, 'name', 'asc');
    }
  }),
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dialog: false,
      form: {
        'code': '',
        'client_name': '',
        'location': '',
        'contact': '',
        'engaged_date': '',
        'renewal_date': '',
        'status': '1'
      }
    };
  },
  created: function created() {
    var _this = this;

    eventBus.$on("openCreateClient", function (data) {
      _this.dialog = true;
    });
  },
  methods: {
    save: function save() {
      this.form.services = this.services;
      var payload = {
        data: this.form,
        model: '/clients'
      };
      this.$store.dispatch('postItems', payload).then(function (response) {
        eventBus.$emit("clientEvent");
      });
    },
    close: function close() {
      this.dialog = false;
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['errors', 'loading', 'services']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dialog: false,
      form: {},
      payload: {
        model: '/client/clients'
      }
    };
  },
  created: function created() {
    var _this = this;

    eventBus.$on("openEditClient", function (data) {
      _this.form = data;
      _this.form.selected = [];
      _this.dialog = true;
    });
  },
  methods: {
    save: function save() {
      this.form.services = this.services;
      var payload = {
        data: this.form,
        id: this.form.id,
        model: '/clients'
      }; // this.payload['data'] = this.form

      this.$store.dispatch('patchItems', payload).then(function (response) {
        eventBus.$emit("clientEvent");
      });
    },
    close: function close() {
      this.dialog = false;
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['errors', 'loading', 'services']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./resources/js/components/users/clients/create.vue");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./resources/js/components/users/clients/edit.vue");
/* harmony import */ var _Permission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Permission */ "./resources/js/components/users/clients/Permission.vue");
var _methods;

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


 // import myUpload from "./excel";


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['user'],
  components: {
    Create: _create__WEBPACK_IMPORTED_MODULE_0__["default"],
    Edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
    PermUser: _Permission__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      form: {},
      loader: false,
      search: "",
      headers: [{
        text: "Client code",
        value: "code"
      }, {
        text: "Client name",
        value: "client_name"
      }, {
        text: "Contact.",
        value: "contact"
      }, {
        text: "Address",
        value: "location"
      }, {
        text: "Engagement date",
        value: "engaged_date"
      }, {
        text: "Renewal date",
        value: "renewal_date"
      }, {
        text: "Status",
        value: "status"
      }, {
        text: "Created On",
        value: "created_at"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }]
    };
  },
  methods: (_methods = {
    openCreate: function openCreate() {
      eventBus.$emit("openCreateClient");
    },
    openUpload: function openUpload() {
      eventBus.$emit("openExcelUploadEvent");
    },
    openEdit: function openEdit(data) {
      eventBus.$emit("openEditClient", data);
    },
    openPerm: function openPerm(id) {
      console.log(id);
      var payload = {
        model: 'client/getClientPerm',
        update: 'updateUserPermission',
        id: id
      };
      this.$store.dispatch("showItem", payload).then(function (response) {
        eventBus.$emit('permEvent', {
          data: response.data,
          id: id
        });
      });
    },
    openShow: function openShow(data) {
      eventBus.$emit("openShowClient", data);
    },
    confirm_delete: function confirm_delete(item) {
      var _this = this;

      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(function () {
        _this.deleteItem(item);
      })["catch"](function () {
        _this.$message({
          type: 'error',
          message: 'Delete canceled'
        });
      });
    },
    deleteItem: function deleteItem(item) {
      var _this2 = this;

      this.$store.dispatch("deleteItem", "clients/" + item.id).then(function (response) {
        _this2.$message({
          type: 'success',
          message: 'Delete completed'
        });

        _this2.getClients();
      });
    }
  }, _defineProperty(_methods, "openShow", function openShow(data) {
    eventBus.$emit("openShowClient", data);
  }), _defineProperty(_methods, "getClients", function getClients() {
    var payload = {
      model: '/clients',
      update: 'updateClientList'
    };
    this.$store.dispatch("getItems", payload);
  }), _defineProperty(_methods, "updateSelected", function updateSelected(url) {
    var _this3 = this;

    // alert('test')
    if (this.checkedRows.length < 1) {
      eventBus.$emit("errorEvent", "Please select atleast one row");
      return;
    }

    this.$store.dispatch("updateSelected", {
      url: url,
      checked: this.checkedRows
    }).then(function (response) {
      eventBus.$emit("alertRequest", "Updated");
      _this3.checkedRows = [];

      _this3.getClients();
    });
  }), _defineProperty(_methods, "selectionChanged", function selectionChanged(params) {
    this.checkedRows = params.selectedRows;
  }), _defineProperty(_methods, "next_page", function next_page(path, page) {
    var payload = {
      path: path,
      page: page,
      update: 'updateClientsList'
    };
    this.$store.dispatch("nextPage", payload);
  }), _methods),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(['clients', 'isLoading'])),
  mounted: function mounted() {
    // this.$store.dispatch('getClients');
    eventBus.$emit("LoadingEvent");
    this.getClients();
  },
  created: function created() {
    var _this4 = this;

    eventBus.$on("clientEvent", function (data) {
      _this4.getClients();
    });
    eventBus.$on("responseChooseEvent", function (data) {
      console.log(data);

      if (data == "Excel") {
        eventBus.$emit("openEditClient");
      } else {
        eventBus.$emit("openCreateClient");
      }
    });
  } //   beforeRouteEnter(to, from, next) {
  //     next(vm => {
  //       if (vm.user.can["view clients"]) {
  //         next();
  //       } else {
  //         next("/");
  //       }
  //     });
  //   }

});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/index.vue?vue&type=style&index=0&id=63b1f649&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/index.vue?vue&type=style&index=0&id=63b1f649&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.el-input--prefix .el-input__inner[data-v-63b1f649] {\n    border-radius: 50px !important;\n}\n.v-toolbar__content[data-v-63b1f649],\n.v-toolbar__extension[data-v-63b1f649] {\n    height: auto !important;\n}\n.v-avatar[data-v-63b1f649] {\n    height: 10px !important;\n    width: 10px !important;\n    margin-left: 40% !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/index.vue?vue&type=style&index=0&id=63b1f649&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/index.vue?vue&type=style&index=0&id=63b1f649&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_63b1f649_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=63b1f649&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/index.vue?vue&type=style&index=0&id=63b1f649&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_63b1f649_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_63b1f649_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/users/clients/Permission.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/users/clients/Permission.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Permission_vue_vue_type_template_id_342d8488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Permission.vue?vue&type=template&id=342d8488& */ "./resources/js/components/users/clients/Permission.vue?vue&type=template&id=342d8488&");
/* harmony import */ var _Permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Permission.vue?vue&type=script&lang=js& */ "./resources/js/components/users/clients/Permission.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Permission_vue_vue_type_template_id_342d8488___WEBPACK_IMPORTED_MODULE_0__.render,
  _Permission_vue_vue_type_template_id_342d8488___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/clients/Permission.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/clients/create.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/users/clients/create.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_3a411d95___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=3a411d95& */ "./resources/js/components/users/clients/create.vue?vue&type=template&id=3a411d95&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/users/clients/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_3a411d95___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_3a411d95___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/clients/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/clients/edit.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/users/clients/edit.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_d484803a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=d484803a& */ "./resources/js/components/users/clients/edit.vue?vue&type=template&id=d484803a&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/components/users/clients/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_d484803a___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_d484803a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/clients/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/clients/index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/users/clients/index.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_63b1f649_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=63b1f649&scoped=true& */ "./resources/js/components/users/clients/index.vue?vue&type=template&id=63b1f649&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/users/clients/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_63b1f649_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=63b1f649&scoped=true&lang=css& */ "./resources/js/components/users/clients/index.vue?vue&type=style&index=0&id=63b1f649&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_63b1f649_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_63b1f649_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "63b1f649",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/clients/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/clients/Permission.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/users/clients/Permission.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Permission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/Permission.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/clients/create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/users/clients/create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/clients/edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/users/clients/edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/clients/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/users/clients/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/clients/index.vue?vue&type=style&index=0&id=63b1f649&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/users/clients/index.vue?vue&type=style&index=0&id=63b1f649&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_63b1f649_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=63b1f649&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/index.vue?vue&type=style&index=0&id=63b1f649&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/users/clients/Permission.vue?vue&type=template&id=342d8488&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/users/clients/Permission.vue?vue&type=template&id=342d8488& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_template_id_342d8488___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_template_id_342d8488___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_template_id_342d8488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Permission.vue?vue&type=template&id=342d8488& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/Permission.vue?vue&type=template&id=342d8488&");


/***/ }),

/***/ "./resources/js/components/users/clients/create.vue?vue&type=template&id=3a411d95&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/users/clients/create.vue?vue&type=template&id=3a411d95& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3a411d95___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3a411d95___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3a411d95___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=3a411d95& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/create.vue?vue&type=template&id=3a411d95&");


/***/ }),

/***/ "./resources/js/components/users/clients/edit.vue?vue&type=template&id=d484803a&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/users/clients/edit.vue?vue&type=template&id=d484803a& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_d484803a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_d484803a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_d484803a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=d484803a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/edit.vue?vue&type=template&id=d484803a&");


/***/ }),

/***/ "./resources/js/components/users/clients/index.vue?vue&type=template&id=63b1f649&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/users/clients/index.vue?vue&type=template&id=63b1f649&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_63b1f649_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_63b1f649_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_63b1f649_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=63b1f649&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/index.vue?vue&type=template&id=63b1f649&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/Permission.vue?vue&type=template&id=342d8488&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/Permission.vue?vue&type=template&id=342d8488& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
          attrs: { persistent: "", "max-width": "700px" },
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
                { attrs: { fixed: "" } },
                [
                  _c("span", { staticClass: "headline" }, [
                    _vm._v("Permissions")
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { icon: "", dark: "" }, on: { click: _vm.close } },
                    [
                      _c("v-icon", { attrs: { color: "black" } }, [
                        _vm._v("close")
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
                    "v-layout",
                    { attrs: { wrap: "" } },
                    _vm._l(_vm.sortPerm, function(perm) {
                      return _c(
                        "v-flex",
                        { key: perm.id, attrs: { xs6: "", sm3: "" } },
                        [
                          _c("v-checkbox", {
                            attrs: { label: perm.name, value: perm.name },
                            model: {
                              value: _vm.selected,
                              callback: function($$v) {
                                _vm.selected = $$v
                              },
                              expression: "selected"
                            }
                          })
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    { attrs: { text: "" }, on: { click: _vm.close } },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        disabled: _vm.loading,
                        text: "",
                        color: "primary",
                        loading: _vm.loading
                      },
                      on: { click: _vm.save }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/create.vue?vue&type=template&id=3a411d95&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/create.vue?vue&type=template&id=3a411d95& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
              _c("v-card-title", [
                _c(
                  "span",
                  {
                    staticClass: "headline text-center",
                    staticStyle: { margin: "auto" }
                  },
                  [_vm._v("Create Client")]
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    { attrs: { "grid-list-md": "" } },
                    [
                      _c(
                        "v-layout",
                        { attrs: { row: "", wrap: "" } },
                        [
                          _c(
                            "v-flex",
                            { attrs: { sm6: "" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Client code")
                              ]),
                              _vm._v(" "),
                              _c("el-input", {
                                attrs: { placeholder: "ABC " },
                                model: {
                                  value: _vm.form.code,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "code", $$v)
                                  },
                                  expression: "form.code"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.code
                                ? _c(
                                    "small",
                                    { staticClass: "has-text-danger" },
                                    [_vm._v(_vm._s(_vm.errors.code[0]))]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { sm6: "" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Client name")
                              ]),
                              _vm._v(" "),
                              _c("el-input", {
                                attrs: { placeholder: "ABC " },
                                model: {
                                  value: _vm.form.client_name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "client_name", $$v)
                                  },
                                  expression: "form.client_name"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.client_name
                                ? _c(
                                    "small",
                                    { staticClass: "has-text-danger" },
                                    [_vm._v(_vm._s(_vm.errors.client_name[0]))]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { sm6: "" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Location")
                              ]),
                              _vm._v(" "),
                              _c("el-input", {
                                attrs: { placeholder: "123 mainst" },
                                model: {
                                  value: _vm.form.location,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "location", $$v)
                                  },
                                  expression: "form.location"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.company_location
                                ? _c(
                                    "small",
                                    { staticClass: "has-text-danger" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.company_location[0])
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { sm6: "" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Contact")
                              ]),
                              _vm._v(" "),
                              _c("el-input", {
                                attrs: { placeholder: "123 mainst" },
                                model: {
                                  value: _vm.form.contact,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "contact", $$v)
                                  },
                                  expression: "form.contact"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.contact
                                ? _c(
                                    "small",
                                    { staticClass: "has-text-danger" },
                                    [_vm._v(_vm._s(_vm.errors.contact[0]))]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { sm6: "" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Engaged date")
                              ]),
                              _vm._v(" "),
                              _c("el-date-picker", {
                                attrs: {
                                  type: "date",
                                  placeholder: "Pick a Date",
                                  format: "yyyy/MM/dd"
                                },
                                model: {
                                  value: _vm.form.engaged_date,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "engaged_date", $$v)
                                  },
                                  expression: "form.engaged_date"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.engaged_date
                                ? _c(
                                    "small",
                                    { staticClass: "has-text-danger" },
                                    [_vm._v(_vm._s(_vm.errors.engaged_date[0]))]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { sm6: "" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Renewal date")
                              ]),
                              _vm._v(" "),
                              _c("el-date-picker", {
                                attrs: {
                                  type: "date",
                                  placeholder: "Pick a Date",
                                  format: "yyyy/MM/dd"
                                },
                                model: {
                                  value: _vm.form.renewal_date,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "renewal_date", $$v)
                                  },
                                  expression: "form.renewal_date"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.renewal_date
                                ? _c(
                                    "small",
                                    { staticClass: "has-text-danger" },
                                    [_vm._v(_vm._s(_vm.errors.renewal_date[0]))]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { sm6: "" } },
                            [
                              _c(
                                "el-radio",
                                {
                                  attrs: { label: "1" },
                                  model: {
                                    value: _vm.form.status,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "status", $$v)
                                    },
                                    expression: "form.status"
                                  }
                                },
                                [_vm._v("Active")]
                              ),
                              _vm._v(" "),
                              _c(
                                "el-radio",
                                {
                                  attrs: { label: "2" },
                                  model: {
                                    value: _vm.form.status,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "status", $$v)
                                    },
                                    expression: "form.status"
                                  }
                                },
                                [_vm._v("Inactive")]
                              ),
                              _vm._v(" "),
                              _c(
                                "el-radio",
                                {
                                  attrs: { label: "3" },
                                  model: {
                                    value: _vm.form.status,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "status", $$v)
                                    },
                                    expression: "form.status"
                                  }
                                },
                                [_vm._v("Terminated")]
                              ),
                              _vm._v(" "),
                              _vm.errors.company_website
                                ? _c(
                                    "small",
                                    { staticClass: "has-text-danger" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.company_website[0])
                                      )
                                    ]
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
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: { click: _vm.close }
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "blue darken-1",
                        text: "",
                        loading: _vm.loading,
                        disabled: _vm.loading
                      },
                      on: { click: _vm.save }
                    },
                    [_vm._v("Save")]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/edit.vue?vue&type=template&id=d484803a&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/edit.vue?vue&type=template&id=d484803a& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
              _c("v-card-title", [
                _c(
                  "span",
                  {
                    staticClass: "headline text-center",
                    staticStyle: { margin: "auto" }
                  },
                  [_vm._v("Edit Client")]
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    { attrs: { "grid-list-md": "" } },
                    [
                      _c(
                        "v-layout",
                        { attrs: { row: "", wrap: "" } },
                        [
                          _c(
                            "v-flex",
                            { attrs: { sm6: "" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Client code")
                              ]),
                              _vm._v(" "),
                              _c("el-input", {
                                attrs: { placeholder: "ABC " },
                                model: {
                                  value: _vm.form.code,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "code", $$v)
                                  },
                                  expression: "form.code"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.code
                                ? _c(
                                    "small",
                                    { staticClass: "has-text-danger" },
                                    [_vm._v(_vm._s(_vm.errors.code[0]))]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { sm6: "" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Client name")
                              ]),
                              _vm._v(" "),
                              _c("el-input", {
                                attrs: { placeholder: "ABC " },
                                model: {
                                  value: _vm.form.client_name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "client_name", $$v)
                                  },
                                  expression: "form.client_name"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.client_name
                                ? _c(
                                    "small",
                                    { staticClass: "has-text-danger" },
                                    [_vm._v(_vm._s(_vm.errors.client_name[0]))]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { sm6: "" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Location")
                              ]),
                              _vm._v(" "),
                              _c("el-input", {
                                attrs: { placeholder: "123 mainst" },
                                model: {
                                  value: _vm.form.location,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "location", $$v)
                                  },
                                  expression: "form.location"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.company_location
                                ? _c(
                                    "small",
                                    { staticClass: "has-text-danger" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.company_location[0])
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { sm6: "" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Contact")
                              ]),
                              _vm._v(" "),
                              _c("el-input", {
                                attrs: { placeholder: "123 mainst" },
                                model: {
                                  value: _vm.form.contact,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "contact", $$v)
                                  },
                                  expression: "form.contact"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.contact
                                ? _c(
                                    "small",
                                    { staticClass: "has-text-danger" },
                                    [_vm._v(_vm._s(_vm.errors.contact[0]))]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { sm6: "" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Engaged date")
                              ]),
                              _vm._v(" "),
                              _c("el-date-picker", {
                                attrs: {
                                  type: "date",
                                  placeholder: "Pick a Date",
                                  format: "yyyy/MM/dd"
                                },
                                model: {
                                  value: _vm.form.engaged_date,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "engaged_date", $$v)
                                  },
                                  expression: "form.engaged_date"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.engaged_date
                                ? _c(
                                    "small",
                                    { staticClass: "has-text-danger" },
                                    [_vm._v(_vm._s(_vm.errors.engaged_date[0]))]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { sm6: "" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Renewal date")
                              ]),
                              _vm._v(" "),
                              _c("el-date-picker", {
                                attrs: {
                                  type: "date",
                                  placeholder: "Pick a Date",
                                  format: "yyyy/MM/dd"
                                },
                                model: {
                                  value: _vm.form.renewal_date,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "renewal_date", $$v)
                                  },
                                  expression: "form.renewal_date"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.renewal_date
                                ? _c(
                                    "small",
                                    { staticClass: "has-text-danger" },
                                    [_vm._v(_vm._s(_vm.errors.renewal_date[0]))]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { sm6: "" } },
                            [
                              _c(
                                "el-radio",
                                {
                                  attrs: { label: "1" },
                                  model: {
                                    value: _vm.form.status,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "status", $$v)
                                    },
                                    expression: "form.status"
                                  }
                                },
                                [_vm._v("Active")]
                              ),
                              _vm._v(" "),
                              _c(
                                "el-radio",
                                {
                                  attrs: { label: "2" },
                                  model: {
                                    value: _vm.form.status,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "status", $$v)
                                    },
                                    expression: "form.status"
                                  }
                                },
                                [_vm._v("Inactive")]
                              ),
                              _vm._v(" "),
                              _c(
                                "el-radio",
                                {
                                  attrs: { label: "3" },
                                  model: {
                                    value: _vm.form.status,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "status", $$v)
                                    },
                                    expression: "form.status"
                                  }
                                },
                                [_vm._v("Terminated")]
                              ),
                              _vm._v(" "),
                              _vm.errors.company_website
                                ? _c(
                                    "small",
                                    { staticClass: "has-text-danger" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.company_website[0])
                                      )
                                    ]
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
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: { click: _vm.close }
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "blue darken-1",
                        text: "",
                        loading: _vm.loading,
                        disabled: _vm.loading
                      },
                      on: { click: _vm.save }
                    },
                    [_vm._v("Save")]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/index.vue?vue&type=template&id=63b1f649&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/clients/index.vue?vue&type=template&id=63b1f649&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { width: "100%" } },
    [
      _c(
        "v-card-title",
        { attrs: { "primary-title": "" } },
        [
          _c(
            "el-breadcrumb",
            { attrs: { "separator-class": "el-icon-arrow-right" } },
            [
              _c("el-breadcrumb-item", { attrs: { to: { path: "/" } } }, [
                _vm._v("Dashboard")
              ]),
              _vm._v(" "),
              _c("el-breadcrumb-item", [_vm._v("Clients")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        { staticStyle: { "padding-top": "30px" } },
        [
          _c(
            "v-layout",
            { attrs: { "justify-center": "", "align-center": "", wrap: "" } },
            [
              _c("v-flex", { attrs: { sm12: "" } }),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { row: "" } },
                    [
                      _c(
                        "v-flex",
                        {
                          staticStyle: { "margin-left": "10px" },
                          attrs: { sm1: "" }
                        },
                        [
                          _c(
                            "v-tooltip",
                            {
                              attrs: { right: "" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          {
                                            staticClass: "mx-0",
                                            attrs: {
                                              slot: "activator",
                                              icon: ""
                                            },
                                            on: { click: _vm.getClients },
                                            slot: "activator"
                                          },
                                          on
                                        ),
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              attrs: {
                                                color: "blue darken-2",
                                                small: ""
                                              }
                                            },
                                            [_vm._v("mdi-refresh")]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Refresh")])]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-flex", { attrs: { sm2: "" } }, [
                        _c(
                          "h3",
                          {
                            staticStyle: {
                              "margin-left": "30px !important",
                              "margin-top": "10px"
                            }
                          },
                          [
                            _vm._v(
                              "\n                            Clients\n                        "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { "offset-sm5": "", sm3: "" } },
                        [
                          _c(
                            "v-btn-toggle",
                            {
                              attrs: {
                                dense: "",
                                "background-color": "primary",
                                dark: ""
                              }
                            },
                            [
                              _c("v-btn", { on: { click: _vm.openCreate } }, [
                                _vm._v("New Client")
                              ]),
                              _vm._v(" "),
                              _vm.user.can["Client create"]
                                ? _c(
                                    "v-btn",
                                    { on: { click: _vm.openUpload } },
                                    [_vm._v("Upload")]
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
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "" } },
                [
                  _vm.clients.last_page > 1
                    ? _c("v-pagination", {
                        attrs: {
                          length: _vm.clients.last_page,
                          "total-visible": "5",
                          circle: ""
                        },
                        on: {
                          input: function($event) {
                            return _vm.next_page(
                              _vm.clients.path,
                              _vm.clients.current_page
                            )
                          }
                        },
                        model: {
                          value: _vm.clients.current_page,
                          callback: function($$v) {
                            _vm.$set(_vm.clients, "current_page", $$v)
                          },
                          expression: "clients.current_page"
                        }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      "append-icon": "mdi-magnify",
                      label: "Search",
                      "single-line": "",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.search,
                      callback: function($$v) {
                        _vm.search = $$v
                      },
                      expression: "search"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.clients.data,
                      search: _vm.search
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "item.status",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            item.status == 1
                              ? _c(
                                  "v-tooltip",
                                  {
                                    attrs: { bottom: "" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-btn",
                                                _vm._g(
                                                  _vm._b(
                                                    { attrs: { icon: "" } },
                                                    "v-btn",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                ),
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: {
                                                        color: "success",
                                                        small: ""
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                        mdi-check-circle\n                                    "
                                                      )
                                                    ]
                                                  )
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
                                  },
                                  [_vm._v(" "), _c("span", [_vm._v("Active")])]
                                )
                              : item.status == 2
                              ? _c(
                                  "v-tooltip",
                                  {
                                    attrs: { bottom: "" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-btn",
                                                _vm._g(
                                                  _vm._b(
                                                    { attrs: { icon: "" } },
                                                    "v-btn",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                ),
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: {
                                                        color: "warning",
                                                        small: ""
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                        mdi-close\n                                    "
                                                      )
                                                    ]
                                                  )
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
                                  },
                                  [
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Inactive")])
                                  ]
                                )
                              : item.status == 3
                              ? _c(
                                  "v-tooltip",
                                  {
                                    attrs: { bottom: "" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-btn",
                                                _vm._g(
                                                  _vm._b(
                                                    { attrs: { icon: "" } },
                                                    "v-btn",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                ),
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: {
                                                        color: "red",
                                                        small: ""
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                        mdi-cancel\n                                    "
                                                      )
                                                    ]
                                                  )
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
                                  },
                                  [
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Terminated")])
                                  ]
                                )
                              : _vm._e()
                          ]
                        }
                      },
                      {
                        key: "item.actions",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-tooltip",
                              {
                                attrs: { bottom: "" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-btn",
                                            _vm._g(
                                              {
                                                staticClass: "mx-0",
                                                attrs: {
                                                  slot: "activator",
                                                  icon: ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.openEdit(item)
                                                  }
                                                },
                                                slot: "activator"
                                              },
                                              on
                                            ),
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  attrs: {
                                                    small: "",
                                                    color: "blue darken-2"
                                                  }
                                                },
                                                [_vm._v("mdi-pen")]
                                              )
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
                              },
                              [
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v("Edit " + _vm._s(item.name))
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-tooltip",
                              {
                                attrs: { bottom: "" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-btn",
                                            _vm._g(
                                              {
                                                staticClass: "mx-0",
                                                attrs: {
                                                  slot: "activator",
                                                  icon: ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.confirm_delete(
                                                      item
                                                    )
                                                  }
                                                },
                                                slot: "activator"
                                              },
                                              on
                                            ),
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  attrs: {
                                                    small: "",
                                                    color: "pink darken-2"
                                                  }
                                                },
                                                [_vm._v("mdi-delete")]
                                              )
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
                              },
                              [
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v("Delete " + _vm._s(item.name))
                                ])
                              ]
                            )
                          ]
                        }
                      }
                    ])
                  })
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
      _c("Create"),
      _vm._v(" "),
      _c("Edit"),
      _vm._v(" "),
      _c("PermUser")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);