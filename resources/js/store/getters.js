export default {

    page_loader(state) {
        return state.page_loader
    },

    loading(state) {
        return state.loading;
    },
    errors(state) {
        return state.errors;
    },
    alertEvent(state) {
        eventBus.$emit('alertEvent', state)
        // return state.alertEvent;
    },
    users(state) {
        return state.users
    },
    deletedUsers(state) {
        return state.deletedUsers
    },
    roles(state) {
        return _.orderBy(state.roles, 'name', 'asc')
    },
    permissions(state) {
        return state.permissions;
    },
    clients(state) {
        return state.clients
    },
    // Dashboard
    user_count(state) {
        return state.user_count
    },
    clients_count(state) {
        return state.clients_count
    },
    updateDashboard(state) {
        return state.dashboard_data;
    },
    company(state) {
        return state.company
    },
}
