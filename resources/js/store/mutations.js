export default {
    page_loader(state, payload) {
        state.page_loader = payload
    },
    loading(state, payload) {
        state.loading = payload
    },
    errors(state, payload) {
        state.errors = payload
    },
    alertEvent(state, payload) {
        state.alertEvent = payload
    },
    updateUsersList(state, payload) {
        state.users = payload
    },
    updateDeletedUsersList(state, payload) {
        state.deletedUsers = payload
    },
    updateRoleList(state, payload) {
        state.roles = payload
    },
    updatePermissionList(state, payload) {
        state.permissions = payload
    },
    updateUserPermission(state, payload) {
        state.user_permissions = payload
    },
    updateClientList(state, payload) {
        state.clients = payload
    },

    updateDashboard(state, payload) {
        state.dashboard_data = payload
    },
    updateCompany(state, payload) {
        state.company = payload
    },



}


