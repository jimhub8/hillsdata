import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
    state: {
        page_loader: false,
        loading: false,
        errors: [],
        users: [],
        deletedUsers: [],
        roles: [],
        clients: [],
        permissions: [],
        user_permissions: [],
        dashboard_data:[],
        company:[],
    },
    getters,
    mutations,
    actions
}
