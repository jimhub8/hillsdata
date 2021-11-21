"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/elitlodgit/incidence"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/adminincident.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/adminincident.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      e1: 1,
      form: {
        task_status: 'Accepted'
      },
      investigator_arr: [{
        division_id: '',
        investigator_id: '',
        type: ''
      }]
    };
  },
  created: function created() {
    var _this = this;

    eventBus.$on("adminIncidence", function (data) {
      _this.form = data;
      _this.dialog = true;

      if (!_this.divisions.data) {
        _this.getDivisions();
      }

      if (!_this.investigators.data) {
        _this.getInvestigators();
      }
    });
  },
  methods: {
    submit: function submit() {
      this.form.investigator_arr = this.investigator_arr;
      var payload = {
        model: 'incidences',
        id: this.form.id,
        data: this.form
      };
      this.$store.dispatch('patchItems', payload).then(function (response) {
        eventBus.$emit("incidenceEvent");
      });
    },
    getDivisions: function getDivisions() {
      var payload = {
        model: 'divisions',
        update: 'updateDivision'
      };
      this.$store.dispatch("getItems", payload);
    },
    getInvestigators: function getInvestigators() {
      var payload = {
        model: 'investigators',
        update: 'updateInvestigator'
      };
      this.$store.dispatch("getItems", payload);
    },
    addInv: function addInv() {
      var inv = {
        division_id: '',
        investigator_id: '',
        type: ''
      };
      this.investigator_arr.push(inv);
    },
    close: function close() {
      this.dialog = false;
      this.form = {
        task_status: 'Accepted'
      };
      this.e1 = 1;
    },
    remove: function remove(index) {
      this.investigator_arr.splice(index, 1);
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['loading', 'errors', 'divisions', 'investigators']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/create.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dialog: false,
      form: {},
      options: [{
        value: 'Burglary/Theft'
      }, {
        value: 'Theft by employee'
      }, {
        value: 'Fraud incidence'
      }, {
        value: 'Motor vehicle accident'
      }, {
        value: 'Motor vehicle vandalism'
      }, {
        value: 'Motor vehicle damage'
      }, {
        value: 'Motor vehicle breakin'
      }, {
        value: 'Fire incidence'
      }, {
        value: 'Property damage/vandalism'
      }],
      payload: {
        model: 'incidences'
      }
    };
  },
  created: function created() {
    var _this = this;

    eventBus.$on("openCreateIncidence", function (data) {
      _this.dialog = true;
    });
  },
  methods: {
    save: function save() {
      var payload = {
        model: 'incidences',
        data: this.form
      };
      this.$store.dispatch('postItems', payload).then(function (response) {
        eventBus.$emit("incidenceEvent");
      });
    },
    searchClients: function searchClients(search) {
      if (search.length > 2) {
        var payload = {
          model: 'client_search',
          update: 'updateClientList',
          search: search
        };
        this.$store.dispatch('searchItems', payload);
      }
    },
    close: function close() {
      this.dialog = false;
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['loading', 'errors', 'clients']))
});

/***/ }),

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      var _this = this;

      var payload = {
        model: 'incidences',
        id: this.$route.params.id,
        update: 'updateIncidences'
      };
      this.$store.dispatch("showItem", payload).then(function (response) {
        if (response.data.investigation) {
          _this.form = response.data.investigation;
        }
      });
    },
    save: function save() {
      this.form.incidence_id = this.$route.params.id;
      var payload = {
        model: 'investigations',
        data: this.form
      };
      this.$store.dispatch('postItems', payload).then(function (response) {// eventBus.$emit("incidenceEvent")
      });
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['loading', 'incidences'])),
  mounted: function mounted() {
    this.getIncidences();
  },
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/task_status.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/task_status.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        specialist_task: '1'
      },
      dialog: false
    };
  },
  methods: {
    submit: function submit() {
      payload = {
        model: 'incidences',
        data: this.form
      };
      this.$store.dispatch('postItems', payload).then(function (response) {
        eventBus.$emit("incidenceEvent");
      });
    },
    close: function close() {
      this.dialog = false;
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['loading', 'errors']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./resources/js/components/incidence/create.vue");
/* harmony import */ var _adminincident_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminincident.vue */ "./resources/js/components/incidence/adminincident.vue");
/* harmony import */ var _incident_task_status_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incident/task_status.vue */ "./resources/js/components/incidence/incident/task_status.vue");
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



 // import myVisual from './visual.vue'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['incidence'],
  components: {
    myCreate: _create__WEBPACK_IMPORTED_MODULE_0__["default"],
    myIncidence: _adminincident_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    myTask: _incident_task_status_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      form: {},
      search: "",
      headers: [{
        text: "Incident date",
        value: "incidence_date"
      }, {
        text: "Report date",
        value: "reported_date"
      }, {
        text: "Report time",
        value: "time_reported"
      }, {
        text: "Report by",
        value: "reported_by"
      }, {
        text: "Reporter phone",
        value: "reporter_phone"
      }, {
        text: "Estimated Loss",
        value: "estimate_loss"
      }, {
        text: "Incident nature",
        value: "incidence_nature"
      }, {
        text: "Status",
        value: "task_status"
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
  methods: {
    openCreate: function openCreate() {
      eventBus.$emit("openCreateIncidence");
    },
    openEdit: function openEdit(data) {
      eventBus.$emit("openEditIncidence", data);
    },
    openShow: function openShow(data) {
      // eventBus.$emit("showIncidence", data);
      this.$router.push({
        name: "visual",
        params: {
          id: data
        }
      });
    },
    openAdmin: function openAdmin(data) {
      eventBus.$emit("adminIncidence", data);
    },
    confirm_delete: function confirm_delete(item) {
      var _this = this;

      this.$confirm('This will permanently delete the incidence. Continue?', 'Warning', {
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

      this.$store.dispatch("deleteItem", "incident/" + item.id).then(function (response) {
        _this2.$message({
          type: 'success',
          message: 'Delete completed'
        });

        _this2.getIncidences();
      });
    },
    openIncidence: function openIncidence(data) {
      this.$router.push({
        name: "incidence_report",
        params: {
          id: data
        }
      });
    },
    getIncidences: function getIncidences() {
      var payload = {
        model: 'incidences',
        update: 'updateIncidences'
      };
      this.$store.dispatch("getItems", payload);
    },
    next_page: function next_page(path, page) {
      var payload = {
        path: path,
        page: page,
        update: 'updateIncidences'
      };
      this.$store.dispatch("nextPage", payload);
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(['incidences', 'loading'])),
  mounted: function mounted() {
    this.getIncidences();
  },
  created: function created() {
    var _this3 = this;

    eventBus.$on("incidenceEvent", function (data) {
      _this3.getIncidences();
    });
  } //   beforeRouteEnter(to, from, next) {
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/index.vue?vue&type=style&index=0&id=00a0e7cc&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/index.vue?vue&type=style&index=0&id=00a0e7cc&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.el-input--prefix .el-input__inner[data-v-00a0e7cc] {\n    border-radius: 50px !important;\n}\n.v-toolbar__content[data-v-00a0e7cc],\n.v-toolbar__extension[data-v-00a0e7cc] {\n    height: auto !important;\n}\n.v-avatar[data-v-00a0e7cc] {\n    height: 10px !important;\n    width: 10px !important;\n    margin-left: 40% !important;\n}\n.v-main__wrap[data-v-00a0e7cc],\n.v-main[data-v-00a0e7cc] {\n    padding: 0 !important;\n}\n#address_tab span[data-v-00a0e7cc] {\n    font-style: inherit;\n    font-weight: inherit;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 180px;\n    overflow: hidden;\n    display: block;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/index.vue?vue&type=style&index=0&id=00a0e7cc&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/index.vue?vue&type=style&index=0&id=00a0e7cc&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_00a0e7cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=00a0e7cc&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/index.vue?vue&type=style&index=0&id=00a0e7cc&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_00a0e7cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_00a0e7cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/incidence/adminincident.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/incidence/adminincident.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _adminincident_vue_vue_type_template_id_6de5f2ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminincident.vue?vue&type=template&id=6de5f2ca& */ "./resources/js/components/incidence/adminincident.vue?vue&type=template&id=6de5f2ca&");
/* harmony import */ var _adminincident_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminincident.vue?vue&type=script&lang=js& */ "./resources/js/components/incidence/adminincident.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _adminincident_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _adminincident_vue_vue_type_template_id_6de5f2ca___WEBPACK_IMPORTED_MODULE_0__.render,
  _adminincident_vue_vue_type_template_id_6de5f2ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/incidence/adminincident.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/incidence/create.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/incidence/create.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_3b305c72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=3b305c72& */ "./resources/js/components/incidence/create.vue?vue&type=template&id=3b305c72&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/incidence/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_3b305c72___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_3b305c72___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/incidence/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/components/incidence/incident/task_status.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/incidence/incident/task_status.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_status_vue_vue_type_template_id_886268b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_status.vue?vue&type=template&id=886268b6& */ "./resources/js/components/incidence/incident/task_status.vue?vue&type=template&id=886268b6&");
/* harmony import */ var _task_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task_status.vue?vue&type=script&lang=js& */ "./resources/js/components/incidence/incident/task_status.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _task_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _task_status_vue_vue_type_template_id_886268b6___WEBPACK_IMPORTED_MODULE_0__.render,
  _task_status_vue_vue_type_template_id_886268b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/incidence/incident/task_status.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/incidence/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/incidence/index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_00a0e7cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=00a0e7cc&scoped=true& */ "./resources/js/components/incidence/index.vue?vue&type=template&id=00a0e7cc&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/incidence/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_00a0e7cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=00a0e7cc&scoped=true&lang=css& */ "./resources/js/components/incidence/index.vue?vue&type=style&index=0&id=00a0e7cc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_00a0e7cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_00a0e7cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "00a0e7cc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/incidence/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/incidence/adminincident.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/incidence/adminincident.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminincident_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adminincident.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/adminincident.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminincident_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/incidence/create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/incidence/create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/incidence/incident/task_status.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/incidence/incident/task_status.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_task_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./task_status.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/task_status.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_task_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/incidence/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/incidence/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/incidence/incident/report.vue?vue&type=style&index=0&id=024ff60b&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/incidence/incident/report.vue?vue&type=style&index=0&id=024ff60b&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_style_index_0_id_024ff60b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./report.vue?vue&type=style&index=0&id=024ff60b&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/report.vue?vue&type=style&index=0&id=024ff60b&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/incidence/index.vue?vue&type=style&index=0&id=00a0e7cc&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/incidence/index.vue?vue&type=style&index=0&id=00a0e7cc&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_00a0e7cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=00a0e7cc&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/index.vue?vue&type=style&index=0&id=00a0e7cc&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/incidence/adminincident.vue?vue&type=template&id=6de5f2ca&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/incidence/adminincident.vue?vue&type=template&id=6de5f2ca& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminincident_vue_vue_type_template_id_6de5f2ca___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminincident_vue_vue_type_template_id_6de5f2ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminincident_vue_vue_type_template_id_6de5f2ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adminincident.vue?vue&type=template&id=6de5f2ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/adminincident.vue?vue&type=template&id=6de5f2ca&");


/***/ }),

/***/ "./resources/js/components/incidence/create.vue?vue&type=template&id=3b305c72&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/incidence/create.vue?vue&type=template&id=3b305c72& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3b305c72___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3b305c72___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3b305c72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=3b305c72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/create.vue?vue&type=template&id=3b305c72&");


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

/***/ "./resources/js/components/incidence/incident/task_status.vue?vue&type=template&id=886268b6&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/incidence/incident/task_status.vue?vue&type=template&id=886268b6& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_task_status_vue_vue_type_template_id_886268b6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_task_status_vue_vue_type_template_id_886268b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_task_status_vue_vue_type_template_id_886268b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./task_status.vue?vue&type=template&id=886268b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/task_status.vue?vue&type=template&id=886268b6&");


/***/ }),

/***/ "./resources/js/components/incidence/index.vue?vue&type=template&id=00a0e7cc&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/incidence/index.vue?vue&type=template&id=00a0e7cc&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_00a0e7cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_00a0e7cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_00a0e7cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=00a0e7cc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/index.vue?vue&type=template&id=00a0e7cc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/adminincident.vue?vue&type=template&id=6de5f2ca&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/adminincident.vue?vue&type=template&id=6de5f2ca& ***!
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
          attrs: { persistent: "", "max-width": "500px" },
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
            "v-stepper",
            {
              model: {
                value: _vm.e1,
                callback: function($$v) {
                  _vm.e1 = $$v
                },
                expression: "e1"
              }
            },
            [
              _c(
                "v-stepper-header",
                [
                  _c(
                    "v-stepper-step",
                    { attrs: { complete: _vm.e1 > 1, step: "1" } },
                    [
                      _vm._v(
                        "\n                    Accept/Reject\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _vm.form.task_status == "Accepted"
                    ? _c(
                        "v-stepper-step",
                        { attrs: { complete: _vm.e1 > 2, step: "2" } },
                        [
                          _vm._v(
                            "\n                    Assign Task\n                "
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-stepper-items",
                [
                  _c(
                    "v-stepper-content",
                    { attrs: { step: "1" } },
                    [
                      _c(
                        "v-card",
                        { staticStyle: { padding: "30px 10px" } },
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-layout",
                                { attrs: { row: "", wrap: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { sm12: "" } },
                                    [
                                      _c(
                                        "el-radio",
                                        {
                                          attrs: { label: "Accepted" },
                                          model: {
                                            value: _vm.form.task_status,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "task_status",
                                                $$v
                                              )
                                            },
                                            expression: "form.task_status"
                                          }
                                        },
                                        [_vm._v("Accept")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "el-radio",
                                        {
                                          attrs: { label: "Rejected" },
                                          model: {
                                            value: _vm.form.task_status,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "task_status",
                                                $$v
                                              )
                                            },
                                            expression: "form.task_status"
                                          }
                                        },
                                        [_vm._v("Reject")]
                                      ),
                                      _vm._v(" "),
                                      _vm.errors.task_status
                                        ? _c(
                                            "small",
                                            { staticClass: "has-text-danger" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.task_status[0]
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.form.task_status == "Rejected"
                                    ? _c(
                                        "v-flex",
                                        { attrs: { sm12: "" } },
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Reason for rejection")
                                          ]),
                                          _vm._v(" "),
                                          _c("el-input", {
                                            attrs: {
                                              type: "textarea",
                                              placeholder: "Please input"
                                            },
                                            model: {
                                              value: _vm.form.rejection_reason,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "rejection_reason",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.rejection_reason"
                                            }
                                          })
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
                          _c(
                            "v-btn",
                            { attrs: { text: "" }, on: { click: _vm.close } },
                            [
                              _vm._v(
                                "\n                            Cancel\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _vm.form.task_status == "Accepted"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: { color: "primary", text: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.e1 = 2
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            Next\n                        "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.task_status == "Rejected"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: { color: "primary", text: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.e1 = 2
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            Save&Exit\n                        "
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.form.task_status == "Accepted"
                    ? _c(
                        "v-stepper-content",
                        { attrs: { step: "2" } },
                        [
                          _c(
                            "v-card",
                            { staticClass: "mb-12" },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _vm._l(_vm.investigator_arr, function(
                                    val,
                                    index
                                  ) {
                                    return _c(
                                      "v-layout",
                                      {
                                        key: index,
                                        attrs: { row: "", wrap: "" }
                                      },
                                      [
                                        _c(
                                          "v-flex",
                                          { attrs: { sm12: "" } },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v("Division")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "el-select",
                                              {
                                                staticStyle: { width: "100%" },
                                                attrs: {
                                                  placeholder: "Select"
                                                },
                                                model: {
                                                  value: val.division_id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      val,
                                                      "division_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "val.division_id"
                                                }
                                              },
                                              _vm._l(
                                                _vm.divisions.data,
                                                function(item) {
                                                  return _c("el-option", {
                                                    key: item.id,
                                                    attrs: {
                                                      label: item.name,
                                                      value: item.id
                                                    }
                                                  })
                                                }
                                              ),
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
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v("Specialist")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "el-select",
                                              {
                                                staticStyle: { width: "100%" },
                                                attrs: {
                                                  placeholder: "Select"
                                                },
                                                model: {
                                                  value: val.investigator_id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      val,
                                                      "investigator_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "val.investigator_id"
                                                }
                                              },
                                              _vm._l(
                                                _vm.investigators.data,
                                                function(item) {
                                                  return _c("el-option", {
                                                    key: item.id,
                                                    attrs: {
                                                      label: item.name,
                                                      value: item.id
                                                    }
                                                  })
                                                }
                                              ),
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
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v("Investigator Type")]
                                            ),
                                            _vm._v(" "),
                                            _c("el-input", {
                                              attrs: {
                                                placeholder:
                                                  "Subject Matter Expert"
                                              },
                                              model: {
                                                value: val.type,
                                                callback: function($$v) {
                                                  _vm.$set(val, "type", $$v)
                                                },
                                                expression: "val.type"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        index < _vm.investigator_arr.length - 1
                                          ? _c(
                                              "v-flex",
                                              {
                                                key: index,
                                                attrs: { sm12: "" }
                                              },
                                              [
                                                _c("v-divider"),
                                                _vm._v(" "),
                                                _c("h2", [
                                                  _vm._v("Investigator")
                                                ])
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        index > 0
                                          ? _c(
                                              "v-flex",
                                              {
                                                key: index,
                                                attrs: { sm12: "" }
                                              },
                                              [
                                                _c(
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      block: "",
                                                      color: "red",
                                                      dark: ""
                                                    },
                                                    on: { click: _vm.remove }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                        Remove\n                                    "
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        small: "",
                                        color: "primary",
                                        text: ""
                                      },
                                      on: { click: _vm.addInv }
                                    },
                                    [
                                      _c("v-icon", { attrs: { small: "" } }, [
                                        _vm._v("mdi-plus")
                                      ]),
                                      _vm._v(
                                        "\n                                Add investigator\n                            "
                                      )
                                    ],
                                    1
                                  )
                                ],
                                2
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
                                  attrs: { text: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.e1 = 1
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            Back\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "" },
                                  on: { click: _vm.close }
                                },
                                [
                                  _vm._v(
                                    "\n                            Cancel\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "primary", text: "" },
                                  on: { click: _vm.submit }
                                },
                                [
                                  _vm._v(
                                    "\n                            Submit\n                        "
                                  )
                                ]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/create.vue?vue&type=template&id=3b305c72&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/create.vue?vue&type=template&id=3b305c72& ***!
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
                  [_vm._v("Create Incidence")]
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticStyle: { "padding-top": "10px" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { sm12: "" } },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Date of incidence")
                          ]),
                          _vm._v(" "),
                          _c("el-date-picker", {
                            staticStyle: { width: "100%" },
                            attrs: {
                              type: "date",
                              placeholder: "Pick a Date",
                              format: "yyyy/MM/dd",
                              "value-format": "yyyy/MM/dd"
                            },
                            model: {
                              value: _vm.form.incidence_date,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "incidence_date", $$v)
                              },
                              expression: "form.incidence_date"
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.incidence_date
                            ? _c("small", { staticClass: "has-text-danger" }, [
                                _vm._v(_vm._s(_vm.errors.incidence_date[0]))
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { sm12: "" } },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Date reported")
                          ]),
                          _vm._v(" "),
                          _c("el-date-picker", {
                            staticStyle: { width: "100%" },
                            attrs: {
                              type: "date",
                              placeholder: "Pick a Date",
                              format: "yyyy/MM/dd",
                              "value-format": "yyyy/MM/dd"
                            },
                            model: {
                              value: _vm.form.reported_date,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "reported_date", $$v)
                              },
                              expression: "form.reported_date"
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.reported_date
                            ? _c("small", { staticClass: "has-text-danger" }, [
                                _vm._v(_vm._s(_vm.errors.reported_date[0]))
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { sm12: "" } },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Time reported")
                          ]),
                          _vm._v(" "),
                          _c("el-time-select", {
                            staticStyle: { width: "100%" },
                            attrs: { placeholder: "Select time" },
                            model: {
                              value: _vm.form.time_reported,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "time_reported", $$v)
                              },
                              expression: "form.time_reported"
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.time_reported
                            ? _c("small", { staticClass: "has-text-danger" }, [
                                _vm._v(_vm._s(_vm.errors.time_reported[0]))
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { sm12: "" } },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Reported by")
                          ]),
                          _vm._v(" "),
                          _c("el-input", {
                            attrs: { placeholder: "John Doe" },
                            model: {
                              value: _vm.form.reported_by,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "reported_by", $$v)
                              },
                              expression: "form.reported_by"
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.reported_by
                            ? _c("small", { staticClass: "has-text-danger" }, [
                                _vm._v(_vm._s(_vm.errors.reported_by[0]))
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { sm12: "" } },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Company")
                          ]),
                          _vm._v(" "),
                          _c(
                            "el-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: {
                                filterable: "",
                                remote: "",
                                "reserve-keyword": "",
                                placeholder: "Please enter a keyword",
                                "remote-method": _vm.searchClients,
                                loading: _vm.loading
                              },
                              model: {
                                value: _vm.form.client_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "client_id", $$v)
                                },
                                expression: "form.client_id"
                              }
                            },
                            _vm._l(_vm.clients.data, function(item) {
                              return _c("el-option", {
                                key: item.id,
                                attrs: {
                                  label: item.company_name,
                                  value: item.id
                                }
                              })
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _vm.errors.client_id
                            ? _c("small", { staticClass: "has-text-danger" }, [
                                _vm._v(_vm._s(_vm.errors.client_id[0]))
                              ])
                            : _vm._e()
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
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    [
                      _c("h5", [_vm._v("Contacts for person reporting")]),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { sm12: "" } },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Reporter phone")
                          ]),
                          _vm._v(" "),
                          _c("el-input", {
                            attrs: { placeholder: "+254..." },
                            model: {
                              value: _vm.form.reporter_phone,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "reporter_phone", $$v)
                              },
                              expression: "form.reporter_phone"
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.reporter_phone
                            ? _c("small", { staticClass: "has-text-danger" }, [
                                _vm._v(_vm._s(_vm.errors.reporter_phone[0]))
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { sm12: "" } },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Reporter Email")
                          ]),
                          _vm._v(" "),
                          _c("el-input", {
                            attrs: { placeholder: "john@gmail.com" },
                            model: {
                              value: _vm.form.reporter_email,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "reporter_email", $$v)
                              },
                              expression: "form.reporter_email"
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.reporter_email
                            ? _c("small", { staticClass: "has-text-danger" }, [
                                _vm._v(_vm._s(_vm.errors.reporter_email[0]))
                              ])
                            : _vm._e()
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
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    [
                      _c("h5", [_vm._v("Incident")]),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { sm12: "" } },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Incidence Nature")
                          ]),
                          _vm._v(" "),
                          _c(
                            "el-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: { placeholder: "Select" },
                              model: {
                                value: _vm.form.incidence_nature,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "incidence_nature", $$v)
                                },
                                expression: "form.incidence_nature"
                              }
                            },
                            _vm._l(_vm.options, function(item) {
                              return _c("el-option", {
                                key: item.value,
                                attrs: { label: item.value, value: item.value }
                              })
                            }),
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
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Estimated loss amount")
                          ]),
                          _vm._v(" "),
                          _c("el-input", {
                            attrs: { placeholder: "20000", type: "number" },
                            model: {
                              value: _vm.form.estimate_loss,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "estimate_loss", $$v)
                              },
                              expression: "form.estimate_loss"
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.estimate_loss
                            ? _c("small", { staticClass: "has-text-danger" }, [
                                _vm._v(_vm._s(_vm.errors.estimate_loss[0]))
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { sm12: "" } },
                        [
                          _c(
                            "el-form-item",
                            { attrs: { label: "Summary notes" } },
                            [
                              _c("el-input", {
                                attrs: { type: "textarea" },
                                model: {
                                  value: _vm.form.summary_notes,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "summary_notes", $$v)
                                  },
                                  expression: "form.summary_notes"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.errors.summary_notes
                            ? _c("small", { staticClass: "has-text-danger" }, [
                                _vm._v(_vm._s(_vm.errors.summary_notes[0]))
                              ])
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
    {},
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
                { staticStyle: { width: "100%" } },
                [
                  _c(
                    "v-card-title",
                    { attrs: { "primary-title": "" } },
                    [
                      _c(
                        "el-breadcrumb",
                        { attrs: { separator: "/" } },
                        [
                          _c(
                            "el-breadcrumb-item",
                            {
                              attrs: {
                                to: {
                                  path: "/investigator/" + this.$route.params.id
                                }
                              }
                            },
                            [_vm._v("Dashboard")]
                          ),
                          _vm._v(" "),
                          _c("el-breadcrumb-item", [_vm._v("Incident report")])
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
                                "el-collapse",
                                {
                                  staticStyle: { width: "100%" },
                                  attrs: { accordion: "" }
                                },
                                [
                                  _c(
                                    "el-collapse-item",
                                    { attrs: { name: "1" } },
                                    [
                                      _c("template", { slot: "title" }, [
                                        _vm._v(
                                          "\n                                        Terms of reference"
                                        ),
                                        _c("i", {
                                          staticClass:
                                            "header-icon el-icon-info"
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "el-form-item",
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
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "el-collapse-item",
                                    { attrs: { title: "Summary", name: "2" } },
                                    [
                                      _c(
                                        "v-layout",
                                        {
                                          staticStyle: {
                                            "padding-left": "30px"
                                          },
                                          attrs: { row: "", wrap: "" }
                                        },
                                        [
                                          _c(
                                            "v-flex",
                                            { attrs: { sm5: "" } },
                                            [
                                              _c(
                                                "el-form-item",
                                                {
                                                  attrs: {
                                                    label: "Activity notes"
                                                  }
                                                },
                                                [
                                                  _c("el-input", {
                                                    attrs: { type: "textarea" },
                                                    model: {
                                                      value:
                                                        _vm.form.activity_notes,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "activity_notes",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.activity_notes"
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
                                                  attrs: {
                                                    label: "Risk description"
                                                  }
                                                },
                                                [
                                                  _c("el-input", {
                                                    attrs: { type: "textarea" },
                                                    model: {
                                                      value:
                                                        _vm.form
                                                          .risk_description,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "risk_description",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.risk_description"
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
                                                  attrs: {
                                                    label: "Executive summary"
                                                  }
                                                },
                                                [
                                                  _c("el-input", {
                                                    attrs: { type: "textarea" },
                                                    model: {
                                                      value:
                                                        _vm.form
                                                          .executive_summary,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "executive_summary",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.executive_summary"
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
                                                  attrs: {
                                                    label: "Summary of evidence"
                                                  }
                                                },
                                                [
                                                  _c("el-input", {
                                                    attrs: { type: "textarea" },
                                                    model: {
                                                      value:
                                                        _vm.form
                                                          .evidence_summary,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "evidence_summary",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.evidence_summary"
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
                                            { attrs: { sm12: "" } },
                                            [
                                              _c(
                                                "el-form-item",
                                                {
                                                  attrs: {
                                                    label: "Summary of evidence"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticStyle: {
                                                        "padding-right": "10px"
                                                      }
                                                    },
                                                    [
                                                      _c("tinymce", {
                                                        attrs: { id: "d1" },
                                                        model: {
                                                          value:
                                                            _vm.form
                                                              .scene_analysis,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.form,
                                                              "scene_analysis",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "form.scene_analysis"
                                                        }
                                                      })
                                                    ],
                                                    1
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
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "el-collapse-item",
                                    {
                                      attrs: {
                                        title: "Subject matter",
                                        name: "3"
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticStyle: {
                                            "padding-right": "10px"
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
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "el-collapse-item",
                                    {
                                      attrs: {
                                        title: "Investigation Findings",
                                        name: "4"
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticStyle: {
                                            "padding-right": "10px"
                                          }
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
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "el-collapse-item",
                                    {
                                      attrs: {
                                        title: "Investigation observations",
                                        name: "5"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-layout",
                                        {
                                          staticStyle: {
                                            "padding-left": "30px"
                                          },
                                          attrs: { row: "", wrap: "" }
                                        },
                                        [
                                          _c(
                                            "v-flex",
                                            { attrs: { sm5: "" } },
                                            [
                                              _c(
                                                "el-form-item",
                                                {
                                                  attrs: {
                                                    label:
                                                      "Analytical observation"
                                                  }
                                                },
                                                [
                                                  _c("el-input", {
                                                    attrs: { type: "textarea" },
                                                    model: {
                                                      value:
                                                        _vm.form
                                                          .analytical_observation,
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
                                            { attrs: { sm5: "" } },
                                            [
                                              _c(
                                                "el-form-item",
                                                {
                                                  attrs: {
                                                    label: "Liablity&Conclusion"
                                                  }
                                                },
                                                [
                                                  _c("el-input", {
                                                    attrs: { type: "textarea" },
                                                    model: {
                                                      value:
                                                        _vm.form.conclusion,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "conclusion",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.conclusion"
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
                                                  attrs: {
                                                    label:
                                                      "Risk Recommendations"
                                                  }
                                                },
                                                [
                                                  _c("el-input", {
                                                    attrs: { type: "textarea" },
                                                    model: {
                                                      value:
                                                        _vm.form.recommendation,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "recommendation",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.recommendation"
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
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "el-collapse-item",
                                    {
                                      attrs: {
                                        title: "Loss analysis",
                                        name: "6"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-layout",
                                        {
                                          staticStyle: {
                                            "padding-left": "30px"
                                          },
                                          attrs: { row: "", wrap: "" }
                                        },
                                        [
                                          _c(
                                            "v-flex",
                                            { attrs: { sm5: "" } },
                                            [
                                              _c(
                                                "el-form-item",
                                                {
                                                  attrs: { label: "Real loss" }
                                                },
                                                [
                                                  _c("el-input", {
                                                    attrs: { type: "number" },
                                                    model: {
                                                      value: _vm.form.real_loss,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "real_loss",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.real_loss"
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
                                                  attrs: {
                                                    label: "Recoverable loss"
                                                  }
                                                },
                                                [
                                                  _c("el-input", {
                                                    attrs: { type: "number" },
                                                    model: {
                                                      value:
                                                        _vm.form
                                                          .recoverable_loss,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "recoverable_loss",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.recoverable_loss"
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
                                                  attrs: {
                                                    label: "Adjusted loss"
                                                  }
                                                },
                                                [
                                                  _c("el-input", {
                                                    attrs: { type: "number" },
                                                    model: {
                                                      value:
                                                        _vm.form.adjusted_loss,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "adjusted_loss",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.adjusted_loss"
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/task_status.vue?vue&type=template&id=886268b6&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/incident/task_status.vue?vue&type=template&id=886268b6& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
          attrs: { persistent: "", "max-width": "500px" },
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
              _c("v-card-title", { attrs: { "primary-title": "" } }, [
                _vm._v("\n                Incidence\n            ")
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticStyle: { padding: "30px" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { sm12: "" } },
                        [
                          _c(
                            "el-radio",
                            {
                              attrs: { label: "1" },
                              model: {
                                value: _vm.form.specialist_task,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "specialist_task", $$v)
                                },
                                expression: "form.specialist_task"
                              }
                            },
                            [_vm._v("Accept")]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-radio",
                            {
                              attrs: { label: "2" },
                              model: {
                                value: _vm.form.specialist_task,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "specialist_task", $$v)
                                },
                                expression: "form.specialist_task"
                              }
                            },
                            [_vm._v("Reject")]
                          ),
                          _vm._v(" "),
                          _vm.errors.specialist_task
                            ? _c("small", { staticClass: "has-text-danger" }, [
                                _vm._v(_vm._s(_vm.errors.specialist_task[0]))
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.form.specialist_task == "2"
                        ? _c(
                            "v-flex",
                            { attrs: { sm12: "" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Reason for rejection")
                              ]),
                              _vm._v(" "),
                              _c("el-input", {
                                attrs: {
                                  type: "textarea",
                                  placeholder: "Please input"
                                },
                                model: {
                                  value: _vm.form.rejection_reason,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "rejection_reason", $$v)
                                  },
                                  expression: "form.rejection_reason"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
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
                    { attrs: { text: "" }, on: { click: _vm.close } },
                    [_vm._v("\n                    Cancel\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", text: "" },
                      on: { click: _vm.submit }
                    },
                    [_vm._v("\n                    Submit\n                ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/index.vue?vue&type=template&id=00a0e7cc&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/incidence/index.vue?vue&type=template&id=00a0e7cc&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
              _c("el-breadcrumb-item", [_vm._v("Incidents")])
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
                                            on: { click: _vm.getIncidences },
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
                          [_vm._v("Incidents")]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { "offset-sm8": "", sm3: "" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "info", text: "" },
                              on: { click: _vm.openCreate }
                            },
                            [_vm._v("New Incident")]
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
                  _vm.incidences.last_page > 1
                    ? _c("v-pagination", {
                        attrs: {
                          length: _vm.incidences.last_page,
                          "total-visible": "5",
                          circle: ""
                        },
                        on: {
                          input: function($event) {
                            return _vm.next_page(
                              _vm.incidences.path,
                              _vm.incidences.current_page
                            )
                          }
                        },
                        model: {
                          value: _vm.incidences.current_page,
                          callback: function($$v) {
                            _vm.$set(_vm.incidences, "current_page", $$v)
                          },
                          expression: "incidences.current_page"
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
                      items: _vm.incidences.data,
                      search: _vm.search
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "item.incidence_nature",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "span",
                              { attrs: { id: "address_tab" } },
                              [
                                _c(
                                  "el-tooltip",
                                  {
                                    staticClass: "item",
                                    attrs: {
                                      effect: "dark",
                                      content: item.incidence_nature,
                                      placement: "top-start"
                                    }
                                  },
                                  [
                                    _c("span", [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(item.incidence_nature) +
                                          "\n                                "
                                      )
                                    ])
                                  ]
                                )
                              ],
                              1
                            )
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
                                                    return _vm.openShow(item.id)
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
                                                [_vm._v("mdi-eye")]
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
                              [_vm._v(" "), _c("span", [_vm._v("View")])]
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
                                                    return _vm.openAdmin(item)
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
                                                [
                                                  _vm._v(
                                                    "mdi-arrow-decision-auto"
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
                                _c("span", [_vm._v("Accept or Reject")])
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
                                                    return _vm.openIncidence(
                                                      item.id
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
                                                    color: "blue darken-2"
                                                  }
                                                },
                                                [_vm._v("mdi-book")]
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
                                _c("span", [_vm._v("Incident report")])
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
          ),
          _vm._v(" "),
          _c("myCreate"),
          _vm._v(" "),
          _c("myIncidence"),
          _vm._v(" "),
          _c("myTask")
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