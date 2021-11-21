<template>
<v-card style="width:100%">
    <v-card-title primary-title>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Dashboard</el-breadcrumb-item>
            <el-breadcrumb-item>Clients</el-breadcrumb-item>
        </el-breadcrumb>
    </v-card-title>
    <v-card-text style="padding-top: 30px">
        <v-layout justify-center align-center row>
            <v-flex sm12>
                Roles
                <v-btn @click="openAdd" text color="primary" v-if="user.can['Role create']">Add Roles</v-btn>
                <!-- <v-spacer></v-spacer> -->
                <v-tooltip right>
                    <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on" slot="activator" class="mx-0" @click="getRoles">
                            <v-icon color="blue darken-2" small>mdi-refresh</v-icon>
                        </v-btn>
                    </template>
                    <span>Refresh</span>
                </v-tooltip>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
            </v-flex>
            <v-flex sm12>

                <v-data-table :headers="headers" :items="roles" :search="search">
                    <template v-slot:item.actions="{ item }">
                        <v-tooltip bottom v-if="user.can['Role edit']">
                            <template v-slot:activator="{ on }">
                                <v-btn v-on="on" icon class="mx-0" @click="openEdit(item)" slot="activator">
                                    <v-icon small color="blue darken-2">mdi-pen</v-icon>
                                </v-btn>
                            </template>
                            <span>Edit {{ item.name }}</span>
                        </v-tooltip>
                        <v-tooltip bottom v-if="user.can['Role delete']">
                            <template v-slot:activator="{ on }">
                                <v-btn icon v-on="on" class="mx-0" @click="confirm_delete(item)" slot="activator">
                                    <v-icon small color="pink darken-2">mdi-delete</v-icon>
                                </v-btn>
                            </template>
                            <span>Delete {{ item.name }}</span>
                        </v-tooltip>
                    </template>
                </v-data-table>
            </v-flex>
        </v-layout>
        <myCreate />
        <myEdit />
    </v-card-text>
</v-card>
</template>

<script>
import myCreate from './create'
import myEdit from './Edit'
export default {
    props: ['user'],
    components: {
        myCreate,
        myEdit
    },
    data() {
        return {
            loader: false,
            headers: [{
                    text: 'Id#',
                    value: 'id',
                },
                {
                    text: 'Role',
                    value: 'name',
                },
                {
                    text: 'Description',
                    value: 'description',
                },
                {
                    text: 'Created On',
                    value: 'created_at',
                },
                {
                    text: 'Actions',
                    value: 'actions',
                },
            ],
            search: '',
        }
    },
    methods: {
        openShow(key) {

        },
        openAdd() {
            var data = {
                guard: 'web'
            }
            eventBus.$emit('openCreateRoleEvent', data)
        },
        openEdit(item) {
            console.log(item);
            eventBus.$emit('openEditRoleEvent', item)
            // this.$store.dispatch('getPermissions', item.guard_name)
        },

        deleteItem(item) {
            if (confirm('Are you sure you want to delete this item?')) {
                this.message = 'Deleting...'
                this.color = 'indigo'
                this.snackbar = true
                // this.timeout = 20000
                this.color = 'indigo'
                axios.delete(`/roles/${item}`)
                    .then((response) => {
                        this.snackbar = false
                        this.AllRoles.splice(index, 1)
                        this.message = 'deleted successifully'
                        this.color = 'red'
                        this.snackbar = true
                    })
                    .catch((error) => {
                        this.snackbar = false
                        this.message = 'something went wrong'
                        this.color = 'red'
                        this.snackbar = true
                        this.errors = error.response.data.errors
                    })
            }
        },

        getRoles() {
            var payload = {
                model: 'roles',
                update: 'updateRoleList'
            }
            this.$store.dispatch("getItems", payload);
        },
    },
    mounted() {
        this.loader = true
        this.getRoles()
    },
    computed: {
        roles() {
            return this.$store.getters.roles;
        },
        isLoading() {
            return this.$store.getters.loading;
        },
    },
    //   beforeRouteEnter(to, from, next) {
    //     next(vm => {
    //       if (vm.user.can["view roles"]) {
    //         next();
    //       } else {
    //         next("/");
    //       }
    //     });
    //   }
}
</script>
