"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/elitlodgit/users"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/Password.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/Password.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      show: false,
      loading: false,
      form: {
        password: ''
      },
      errors: {},
      rules: {
        required: function required(value) {
          return !!value || 'Required.';
        },
        min: function min(v) {
          return v.length >= 8 || 'Min 8 characters';
        },
        emailMatch: function emailMatch() {
          return 'The email and password you entered don\'t match';
        }
      }
    };
  },
  created: function created() {
    var _this = this;

    eventBus.$on("openPasswordEvent", function (data) {
      // console.log(data);
      _this.dialog = true;
      _this.form.id = data;
    });
  },
  methods: {
    passwordChange: function passwordChange() {
      var payload = {
        data: this.form,
        id: this.form.id,
        model: 'change_password'
      };
      this.$store.dispatch('patchItems', payload).then(function (response) {// eventBus.$emit("userEvent")
      });
    },
    // passwordChange(id) {
    //     this.loading = true;
    //     axios
    //         .post(`/change_password/${this.form.id}`, this.form)
    //         .then(response => {
    //             this.loading = false;
    //             eventBus.$emit('alertRequest', 'updated')
    //         })
    //         .catch(error => {
    //             this.loading = false;
    //             if (error.response.status === 500) {
    //                 eventBus.$emit('errorEvent', error.response.statusText)
    //                 this.loading = false
    //                 return
    //             } else if (error.response.status === 401 || error.response.status === 409) {
    //                 this.loading = false
    //                 eventBus.$emit('reloadRequest')
    //                 return
    //             } else if (error.response.status === 422) {
    //                 this.loading = false
    //                 eventBus.$emit('errorEvent', error.response.data.message + ': ' + error.response.statusText)
    //                 return
    //             }
    //             this.errors = error.response.data.errors;
    //         });
    // },
    close: function close() {
      this.dialog = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/Permission.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/Permission.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      axios.post("/userpermisions/".concat(this.form.id), {
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
        model: 'permissions/web',
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/create.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dialog: false,
      form: {},
      payload: {
        model: 'users'
      }
    };
  },
  created: function created() {
    var _this = this;

    eventBus.$on("openCreateUser", function (data) {
      _this.dialog = true;

      if (_this.roles.length < 1) {
        _this.getRole();
      }
    });
  },
  methods: {
    save: function save() {
      this.payload['data'] = this.form;
      this.$store.dispatch('postItems', this.payload).then(function (response) {
        eventBus.$emit("userEvent");
      });
    },
    close: function close() {
      this.dialog = false;
    },
    getRole: function getRole() {
      var payload = {
        model: 'roles',
        update: 'updateRoleList'
      };
      this.$store.dispatch("getItems", payload);
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['roles', 'countries', 'loading', 'errors']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/edit.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dialog: false,
      form: {},
      payload: {
        model: 'users'
      },
      gender: [{
        value: 'Male',
        lable: 'Male'
      }, {
        value: 'Female',
        lable: 'Female'
      }]
    };
  },
  created: function created() {
    var _this = this;

    eventBus.$on("openEditUser", function (data) {
      _this.form = data;
      _this.dialog = true;

      if (_this.roles.length < 1) {
        _this.getRole();
      }
    });
  },
  methods: {
    save: function save() {
      var payload = {
        data: this.form,
        id: this.form.id,
        model: 'users'
      };
      this.$store.dispatch('patchItems', payload).then(function (response) {
        eventBus.$emit("userEvent");
      });
    },
    close: function close() {
      this.dialog = false;
    },
    getRole: function getRole() {
      var payload = {
        model: 'roles',
        update: 'updateRoleList'
      };
      this.$store.dispatch("getItems", payload);
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['countries', 'roles', 'errors', 'loading']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./resources/js/components/users/users/create.vue");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./resources/js/components/users/users/edit.vue");
/* harmony import */ var _Password__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Password */ "./resources/js/components/users/users/Password.vue");
/* harmony import */ var _Permission_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Permission.vue */ "./resources/js/components/users/users/Permission.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['user'],
  components: {
    Create: _create__WEBPACK_IMPORTED_MODULE_0__["default"],
    Edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
    PermUser: _Permission_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    myPassword: _Password__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      form: {},
      loader: false,
      search: "",
      users_det: {
        data: []
      },
      users_search: [],
      temp: "",
      checkedRows: [],
      headers: [// {
      //     text: "Id#",
      //     value: "id",
      //     type: "number"
      // },
      {
        text: "Name",
        value: "name"
      }, {
        text: "Email",
        value: "email"
      }, {
        text: "Phone No.",
        value: "phone"
      }, {
        text: "Created On",
        value: "created_at" // type: "date",
        // dateInputFormat: "YYYY-MM-DD",
        // dateOutputFormat: "Do MMMM YYYY"

      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }]
    };
  },
  methods: {
    openCreate: function openCreate() {
      eventBus.$emit("openCreateUser");
    },
    openUpload: function openUpload() {
      eventBus.$emit("openExcelUploadEvent");
    },
    openEdit: function openEdit(data) {
      eventBus.$emit("openEditUser", data);
    },
    openPerm: function openPerm(id) {
      console.log(id);
      var payload = {
        model: 'getUserPerm',
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
    openPassword: function openPassword(data) {
      eventBus.$emit('openPasswordEvent', data);
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

      this.$store.dispatch("deleteItem", "users/" + item.id).then(function (response) {
        _this2.$message({
          type: 'success',
          message: 'Delete completed'
        });

        _this2.getUsers();
      });
    },
    openShow: function openShow(data) {
      eventBus.$emit("openShowUser", data);
    },
    getUsers: function getUsers() {
      var payload = {
        model: 'users',
        update: 'updateUsersList'
      };
      this.$store.dispatch("getItems", payload);
    },
    updateSelected: function updateSelected(url) {
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

        _this3.getUsers();
      });
    },
    selectionChanged: function selectionChanged(params) {
      this.checkedRows = params.selectedRows;
    },
    next_page: function next_page(path, page) {
      var payload = {
        path: path,
        page: page,
        update: 'updateUsersList'
      };
      this.$store.dispatch("nextPage", payload);
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapState)(['users', 'loading', 'user_permissions', 'permissions'])),
  mounted: function mounted() {
    // this.$store.dispatch('getUsers');
    eventBus.$emit("LoadingEvent");
    this.getUsers();
  },
  created: function created() {
    var _this4 = this;

    eventBus.$on("userEvent", function (data) {
      _this4.getUsers();
    });
    eventBus.$on("responseChooseEvent", function (data) {
      console.log(data);

      if (data == "Excel") {
        eventBus.$emit("openEditUser");
      } else {
        eventBus.$emit("openCreateUser");
      }
    });
  } //   beforeRouteEnter(to, from, next) {
  //     next(vm => {
  //       if (vm.user.can["view users"]) {
  //         next();
  //       } else {
  //         next("/");
  //       }
  //     });
  //   }

});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/index.vue?vue&type=style&index=0&id=34518fc9&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/index.vue?vue&type=style&index=0&id=34518fc9&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.el-input--prefix .el-input__inner[data-v-34518fc9] {\n    border-radius: 50px !important;\n}\n.v-toolbar__content[data-v-34518fc9],\n.v-toolbar__extension[data-v-34518fc9] {\n    height: auto !important;\n}\n.v-avatar[data-v-34518fc9] {\n    height: 10px !important;\n    width: 10px !important;\n    margin-left: 40% !important;\n}\n.v-main__wrap[data-v-34518fc9],\n.v-main[data-v-34518fc9] {\n    padding: 0 !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/index.vue?vue&type=style&index=0&id=34518fc9&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/index.vue?vue&type=style&index=0&id=34518fc9&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34518fc9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=34518fc9&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/index.vue?vue&type=style&index=0&id=34518fc9&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34518fc9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34518fc9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/users/users/Password.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/users/users/Password.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Password_vue_vue_type_template_id_7a3a9e14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Password.vue?vue&type=template&id=7a3a9e14& */ "./resources/js/components/users/users/Password.vue?vue&type=template&id=7a3a9e14&");
/* harmony import */ var _Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Password.vue?vue&type=script&lang=js& */ "./resources/js/components/users/users/Password.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Password_vue_vue_type_template_id_7a3a9e14___WEBPACK_IMPORTED_MODULE_0__.render,
  _Password_vue_vue_type_template_id_7a3a9e14___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/users/Password.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/users/Permission.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/users/users/Permission.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Permission_vue_vue_type_template_id_425c49f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Permission.vue?vue&type=template&id=425c49f0& */ "./resources/js/components/users/users/Permission.vue?vue&type=template&id=425c49f0&");
/* harmony import */ var _Permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Permission.vue?vue&type=script&lang=js& */ "./resources/js/components/users/users/Permission.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Permission_vue_vue_type_template_id_425c49f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Permission_vue_vue_type_template_id_425c49f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/users/Permission.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/users/create.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/users/users/create.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_7d94b415___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=7d94b415& */ "./resources/js/components/users/users/create.vue?vue&type=template&id=7d94b415&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/users/users/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_7d94b415___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_7d94b415___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/users/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/users/edit.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/users/users/edit.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_63f6133a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=63f6133a& */ "./resources/js/components/users/users/edit.vue?vue&type=template&id=63f6133a&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/components/users/users/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_63f6133a___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_63f6133a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/users/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/users/index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/users/users/index.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_34518fc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=34518fc9&scoped=true& */ "./resources/js/components/users/users/index.vue?vue&type=template&id=34518fc9&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/users/users/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_34518fc9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=34518fc9&scoped=true&lang=css& */ "./resources/js/components/users/users/index.vue?vue&type=style&index=0&id=34518fc9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_34518fc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_34518fc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "34518fc9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/users/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/users/Password.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/users/users/Password.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/Password.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/users/Permission.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/users/users/Permission.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Permission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/Permission.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/users/create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/users/users/create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/users/edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/users/users/edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/users/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/users/users/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/users/index.vue?vue&type=style&index=0&id=34518fc9&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/users/users/index.vue?vue&type=style&index=0&id=34518fc9&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34518fc9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=34518fc9&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/index.vue?vue&type=style&index=0&id=34518fc9&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/users/users/Password.vue?vue&type=template&id=7a3a9e14&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/users/users/Password.vue?vue&type=template&id=7a3a9e14& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_template_id_7a3a9e14___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_template_id_7a3a9e14___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_template_id_7a3a9e14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Password.vue?vue&type=template&id=7a3a9e14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/Password.vue?vue&type=template&id=7a3a9e14&");


/***/ }),

/***/ "./resources/js/components/users/users/Permission.vue?vue&type=template&id=425c49f0&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/users/users/Permission.vue?vue&type=template&id=425c49f0& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_template_id_425c49f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_template_id_425c49f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_template_id_425c49f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Permission.vue?vue&type=template&id=425c49f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/Permission.vue?vue&type=template&id=425c49f0&");


/***/ }),

/***/ "./resources/js/components/users/users/create.vue?vue&type=template&id=7d94b415&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/users/users/create.vue?vue&type=template&id=7d94b415& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_7d94b415___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_7d94b415___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_7d94b415___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=7d94b415& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/create.vue?vue&type=template&id=7d94b415&");


/***/ }),

/***/ "./resources/js/components/users/users/edit.vue?vue&type=template&id=63f6133a&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/users/users/edit.vue?vue&type=template&id=63f6133a& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_63f6133a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_63f6133a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_63f6133a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=63f6133a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/edit.vue?vue&type=template&id=63f6133a&");


/***/ }),

/***/ "./resources/js/components/users/users/index.vue?vue&type=template&id=34518fc9&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/users/users/index.vue?vue&type=template&id=34518fc9&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_34518fc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_34518fc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_34518fc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=34518fc9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/index.vue?vue&type=template&id=34518fc9&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/Password.vue?vue&type=template&id=7a3a9e14&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/Password.vue?vue&type=template&id=7a3a9e14& ***!
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
              _c("v-card-title", [
                _c(
                  "span",
                  {
                    staticClass: "headline text-center",
                    staticStyle: { margin: "auto" }
                  },
                  [_vm._v("Change password")]
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
                            { attrs: { sm12: "" } },
                            [
                              _c("v-card-text", [
                                _c(
                                  "div",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        "append-icon": _vm.show
                                          ? "visibility"
                                          : "visibility_off",
                                        type: _vm.show ? "text" : "password",
                                        name: "input-10-1",
                                        label: "New password",
                                        counter: ""
                                      },
                                      on: {
                                        "click:append": function($event) {
                                          _vm.show = !_vm.show
                                        }
                                      },
                                      model: {
                                        value: _vm.form.password,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "password", $$v)
                                        },
                                        expression: "form.password"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm.errors.password
                                  ? _c(
                                      "small",
                                      { staticClass: "has-text-danger" },
                                      [_vm._v(_vm._s(_vm.errors.password[0]))]
                                    )
                                  : _vm._e()
                              ])
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
                      on: { click: _vm.passwordChange }
                    },
                    [_vm._v("Update")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/Permission.vue?vue&type=template&id=425c49f0&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/Permission.vue?vue&type=template&id=425c49f0& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/create.vue?vue&type=template&id=7d94b415&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/create.vue?vue&type=template&id=7d94b415& ***!
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
              _c("v-card-title", [
                _c(
                  "span",
                  {
                    staticClass: "headline text-center",
                    staticStyle: { margin: "auto" }
                  },
                  [_vm._v("Create User")]
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _c(
                  "div",
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Full Name")]),
                    _vm._v(" "),
                    _c("el-input", {
                      attrs: { placeholder: "John Doe" },
                      model: {
                        value: _vm.form.name,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "name", $$v)
                        },
                        expression: "form.name"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.name
                      ? _c("small", { staticClass: "has-text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.name[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Email Address")
                    ]),
                    _vm._v(" "),
                    _c("el-input", {
                      attrs: { placeholder: "john@gmail.com" },
                      model: {
                        value: _vm.form.email,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "email", $$v)
                        },
                        expression: "form.email"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.email
                      ? _c("small", { staticClass: "has-text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.email[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Phone Number")
                    ]),
                    _vm._v(" "),
                    _c("el-input", {
                      attrs: { placeholder: "+254..." },
                      model: {
                        value: _vm.form.phone,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "phone", $$v)
                        },
                        expression: "form.phone"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.phone
                      ? _c("small", { staticClass: "has-text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.phone[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Address")]),
                    _vm._v(" "),
                    _c("el-input", {
                      attrs: { placeholder: "main st" },
                      model: {
                        value: _vm.form.address,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "address", $$v)
                        },
                        expression: "form.address"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.address
                      ? _c("small", { staticClass: "has-text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.address[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Role")]),
                    _vm._v(" "),
                    _c(
                      "el-select",
                      {
                        staticStyle: { width: "100%" },
                        attrs: {
                          placeholder: "Select",
                          clearable: "",
                          filterable: ""
                        },
                        model: {
                          value: _vm.form.role_id,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "role_id", $$v)
                          },
                          expression: "form.role_id"
                        }
                      },
                      _vm._l(_vm.roles, function(item) {
                        return _c("el-option", {
                          key: item.id,
                          attrs: { label: item.name, value: item.id }
                        })
                      }),
                      1
                    ),
                    _vm._v(" "),
                    _vm.errors.role_id
                      ? _c("small", { staticClass: "has-text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.role_id[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                )
              ]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/edit.vue?vue&type=template&id=63f6133a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/edit.vue?vue&type=template&id=63f6133a& ***!
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
              _c("v-card-title", [
                _c(
                  "span",
                  {
                    staticClass: "headline text-center",
                    staticStyle: { margin: "auto" }
                  },
                  [_vm._v("Edit User")]
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _c(
                  "div",
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Full Name")]),
                    _vm._v(" "),
                    _c("el-input", {
                      attrs: { placeholder: "John Doe" },
                      model: {
                        value: _vm.form.name,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "name", $$v)
                        },
                        expression: "form.name"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.name
                      ? _c("small", { staticClass: "has-text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.name[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Email Address")
                    ]),
                    _vm._v(" "),
                    _c("el-input", {
                      attrs: { placeholder: "john@gmail.com" },
                      model: {
                        value: _vm.form.email,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "email", $$v)
                        },
                        expression: "form.email"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.email
                      ? _c("small", { staticClass: "has-text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.email[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Phone Number")
                    ]),
                    _vm._v(" "),
                    _c("el-input", {
                      attrs: { placeholder: "+254..." },
                      model: {
                        value: _vm.form.phone,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "phone", $$v)
                        },
                        expression: "form.phone"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.phone
                      ? _c("small", { staticClass: "has-text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.phone[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Address")]),
                    _vm._v(" "),
                    _c("el-input", {
                      attrs: { placeholder: "main st" },
                      model: {
                        value: _vm.form.address,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "address", $$v)
                        },
                        expression: "form.address"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.address
                      ? _c("small", { staticClass: "has-text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.address[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Role")]),
                    _vm._v(" "),
                    _c(
                      "el-select",
                      {
                        staticStyle: { width: "100%" },
                        attrs: {
                          placeholder: "Select",
                          clearable: "",
                          filterable: ""
                        },
                        model: {
                          value: _vm.form.role_id,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "role_id", $$v)
                          },
                          expression: "form.role_id"
                        }
                      },
                      _vm._l(_vm.roles, function(item) {
                        return _c("el-option", {
                          key: item.id,
                          attrs: { label: item.name, value: item.id }
                        })
                      }),
                      1
                    ),
                    _vm._v(" "),
                    _vm.errors.role_id
                      ? _c("small", { staticClass: "has-text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.role_id[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                )
              ]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/index.vue?vue&type=template&id=34518fc9&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/users/index.vue?vue&type=template&id=34518fc9&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
              _c("el-breadcrumb-item", [_vm._v("Users")])
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
                                            on: { click: _vm.getUsers },
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
                          [_vm._v("Users")]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.user.can["User create"]
                        ? _c(
                            "v-flex",
                            { attrs: { "offset-sm8": "", sm3: "" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "info", text: "" },
                                  on: { click: _vm.openCreate }
                                },
                                [_vm._v("New User")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "info", text: "" },
                                  on: { click: _vm.openUpload }
                                },
                                [_vm._v("Upload Users")]
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
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "" } },
                [
                  _vm.users.last_page > 1
                    ? _c("v-pagination", {
                        attrs: {
                          length: _vm.users.last_page,
                          "total-visible": "5",
                          circle: ""
                        },
                        on: {
                          input: function($event) {
                            return _vm.next_page(
                              _vm.users.path,
                              _vm.users.current_page
                            )
                          }
                        },
                        model: {
                          value: _vm.users.current_page,
                          callback: function($$v) {
                            _vm.$set(_vm.users, "current_page", $$v)
                          },
                          expression: "users.current_page"
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
                      items: _vm.users.data,
                      search: _vm.search
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "item.actions",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm.user.can["User edit"]
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
                                                        return _vm.openEdit(
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
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.user.can["User permissions"]
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
                                                        return _vm.openPerm(
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
                                                        color: "orange darken-2"
                                                      }
                                                    },
                                                    [_vm._v("mdi-dialpad")]
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
                                      _vm._v(
                                        "Edit " +
                                          _vm._s(item.name) +
                                          "'s permisions"
                                      )
                                    ])
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.user.can["User reset password"]
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
                                                        return _vm.openPassword(
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
                                                    [_vm._v("mdi-lock")]
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
                                      _vm._v(
                                        "Change " +
                                          _vm._s(item.name) +
                                          "'s' password"
                                      )
                                    ])
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.user.can["User delete"]
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
                              : _vm._e()
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
      _c("myPassword"),
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