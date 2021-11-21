<template>
<v-card style="width:100%">
    <v-card-title primary-title>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Dashboard</el-breadcrumb-item>
            <el-breadcrumb-item>Clients</el-breadcrumb-item>
        </el-breadcrumb>
    </v-card-title>
    <v-card-text style="padding-top: 30px">

        <v-layout justify-center align-center wrap>
            <v-flex sm12>
                <!-- <myFilter :form="form" :user="user" style></myFilter> -->
            </v-flex>
            <v-flex sm12>
                <v-layout row>
                    <v-flex sm1 style="margin-left: 10px">
                        <v-tooltip right>
                            <template v-slot:activator="{ on }">
                                <v-btn icon v-on="on" slot="activator" class="mx-0" @click="getClients">
                                    <v-icon color="blue darken-2" small>mdi-refresh</v-icon>
                                </v-btn>
                            </template>
                            <span>Refresh</span>
                        </v-tooltip>
                    </v-flex>

                    <v-flex sm1 style="margin-left: 10px">
                        <download-excel :data="clients.data" :fields="json_fields">
                            <v-tooltip right>
                                <template v-slot:activator="{ on }">
                                    <v-btn icon v-on="on" slot="activator" class="mx-0">
                                        <v-icon color="blue darken-2" small>mdi-file-excel</v-icon>
                                    </v-btn>
                                </template>
                                <span>Download</span>
                            </v-tooltip>
                        </download-excel>
                    </v-flex>
                    <v-flex sm2>
                        <h3 style="margin-left: 30px !important; margin-top: 10px">
                            Clients
                        </h3>
                    </v-flex>
                    <v-flex offset-sm5 sm3>
                        <v-btn-toggle dense background-color="primary" dark>
                            <v-btn @click="openCreate">New Client</v-btn>
                            <v-btn @click="openUpload" v-if="user.can['Client create']">Upload</v-btn>
                        </v-btn-toggle>
                        <!-- <v-btn color="info" @click="openCreate" text v-if="user.can['Client create']">New Client</v-btn>
                       <v-btn color="info" @click="openUpload" text v-if="user.can['Client create']">Upload Clients</v-btn> -->
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex sm12>
                <v-pagination v-model="clients.current_page" :length="clients.last_page" total-visible="5" @input="next_page(clients.path, clients.current_page)" circle v-if="clients.last_page > 1"></v-pagination>
            </v-flex>
            <v-flex sm12>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                <v-data-table :headers="headers" :items="clients.data" :search="search">
                    <template v-slot:item.status="{ item }">

                        <v-tooltip bottom v-if="item.status == 1">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn icon v-bind="attrs" v-on="on">
                                    <v-icon color="success" small>
                                        mdi-check-circle
                                    </v-icon>
                                </v-btn>
                            </template>
                            <span>Active</span>
                        </v-tooltip>
                        <v-tooltip bottom v-else-if="item.status == 2">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn icon v-bind="attrs" v-on="on">
                                    <v-icon color="warning" small>
                                        mdi-close
                                    </v-icon>
                                </v-btn>
                            </template>
                            <span>Inactive</span>
                        </v-tooltip>
                        <v-tooltip bottom v-else-if="item.status == 3">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn icon v-bind="attrs" v-on="on">
                                    <v-icon color="red" small>
                                        mdi-cancel
                                    </v-icon>
                                </v-btn>
                            </template>
                            <span>Terminated</span>
                        </v-tooltip>
                        <v-tooltip bottom v-else-if="item.status == 3">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn icon v-bind="attrs" v-on="on">
                                    <v-icon color="primary" small>
                                        mdi-target
                                    </v-icon>
                                </v-btn>
                            </template>
                            <span>Lead</span>
                        </v-tooltip>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn v-on="on" icon class="mx-0" @click="openEdit(item)" slot="activator">
                                    <v-icon small color="blue darken-2">mdi-pen</v-icon>
                                </v-btn>
                            </template>
                            <span>Edit {{ item.name }}</span>
                        </v-tooltip>
                        <v-tooltip bottom>
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
    </v-card-text>

    <Create />
    <Edit />
    <PermUser />
</v-card>
</template>

<script>
import {
    mapState
} from 'vuex';
import Create from "./create";
import Edit from "./edit";
// import myUpload from "./excel";
import PermUser from './Permission'

export default {
    props: ['user'],
    components: {
        Create,
        Edit,
        PermUser
    },
    data() {
        return {
            form: {},
            loader: false,
            search: "",
            headers: [{
                    text: "Client code",
                    value: "code"
                },
                {
                    text: "Client name",
                    value: "client_name"
                },
                {
                    text: "Contact.",
                    value: "contact"
                },
                {
                    text: "Address",
                    value: "location"
                },
                {
                    text: "Engagement date",
                    value: "engaged_date"
                },
                {
                    text: "Renewal date",
                    value: "renewal_date"
                },
                {
                    text: "Status",
                    value: "status"
                },
                {
                    text: "Created On",
                    value: "created_at",
                },
                {
                    text: "Actions",
                    value: "actions",
                    sortable: false
                }
            ],
            json_fields: {
                'Client code': 'code',
                'Client name': 'client_name',
                'contact': 'contact',
                'Location': 'location',
                'Engagement date': 'engaged_date',
                'Renewal date': 'renewal_date',
                'Status': 'active',
            },
        };
    },
    methods: {
        openCreate() {
            eventBus.$emit("openCreateClient");
        },
        openUpload() {
            eventBus.$emit("openExcelUploadEvent");
        },
        openEdit(data) {
            eventBus.$emit("openEditClient", data);
        },
        openPerm(id) {
            console.log(id);
            var payload = {
                model: 'client/getClientPerm',
                update: 'updateUserPermission',
                id: id
            }

            this.$store.dispatch("showItem", payload).then((response) => {
                eventBus.$emit('permEvent', {
                    data: response.data,
                    id: id
                });
            });
        },

        openShow(data) {
            eventBus.$emit("openShowClient", data);
        },

        confirm_delete(item) {
            this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                this.deleteItem(item)
            }).catch(() => {
                this.$message({
                    type: 'error',
                    message: 'Delete canceled'
                });
            });
        },

        deleteItem(item) {
            this.$store.dispatch("deleteItem", "clients/" + item.id).then(response => {
                this.$message({
                    type: 'success',
                    message: 'Delete completed'
                });
                this.getClients();
            });
        },
        openShow(data) {
            eventBus.$emit("openShowClient", data);
        },
        getClients() {
            var payload = {
                model: '/clients',
                update: 'updateClientList'
            }
            this.$store.dispatch("getItems", payload);
        },
        updateSelected(url) {
            // alert('test')
            if (this.checkedRows.length < 1) {
                eventBus.$emit("errorEvent", "Please select atleast one row");
                return;
            }

            this.$store
                .dispatch("updateSelected", {
                    url,
                    checked: this.checkedRows
                })
                .then(response => {
                    eventBus.$emit("alertRequest", "Updated");
                    this.checkedRows = [];
                    this.getClients();
                });
        },
        selectionChanged(params) {
            this.checkedRows = params.selectedRows;
        },

        next_page(path, page) {
            var payload = {
                path: path,
                page: page,
                update: 'updateClientsList'
            }
            this.$store.dispatch("nextPage", payload);
        },
    },
    computed: {
        ...mapState(['clients', 'isLoading'])
    },
    mounted() {
        // this.$store.dispatch('getClients');
        eventBus.$emit("LoadingEvent");
        this.getClients();
    },
    created() {
        eventBus.$on("clientEvent", data => {
            this.getClients();
        });

        eventBus.$on("responseChooseEvent", data => {
            console.log(data);
            if (data == "Excel") {
                eventBus.$emit("openEditClient");
            } else {
                eventBus.$emit("openCreateClient");
            }
        });
    },

    //   beforeRouteEnter(to, from, next) {
    //     next(vm => {
    //       if (vm.user.can["view clients"]) {
    //         next();
    //       } else {
    //         next("/");
    //       }
    //     });
    //   }
};
</script>

<style scoped>
.el-input--prefix .el-input__inner {
    border-radius: 50px !important;
}

.v-toolbar__content,
.v-toolbar__extension {
    height: auto !important;
}

.v-avatar {
    height: 10px !important;
    width: 10px !important;
    margin-left: 40% !important;
}
</style>
