<template>
<v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
            <v-card-title>
                <span class="headline text-center" style="margin: auto;">Create Client</span>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout row wrap>
                        <v-flex sm6>
                            <label for="">Client code</label>
                            <el-input placeholder="ABC " v-model="form.code"></el-input>
                            <small class="has-text-danger" v-if="errors.code">{{ errors.code[0] }}</small>
                        </v-flex>
                        <v-flex sm6>
                            <label for="">Client name</label>
                            <el-input placeholder="ABC " v-model="form.client_name"></el-input>
                            <small class="has-text-danger" v-if="errors.client_name">{{ errors.client_name[0] }}</small>
                        </v-flex>
                        <v-flex sm6>
                            <label for="">Location</label>
                            <el-input placeholder="123 mainst" v-model="form.location"></el-input>
                            <small class="has-text-danger" v-if="errors.company_location">{{ errors.company_location[0] }}</small>
                        </v-flex>
                        <v-flex sm6>
                            <label for="">Contact</label>
                            <el-input placeholder="123 mainst" v-model="form.contact"></el-input>
                            <small class="has-text-danger" v-if="errors.contact">{{ errors.contact[0] }}</small>
                        </v-flex>
                        <v-flex sm6>
                            <label for="">Engaged date</label>
                            <el-date-picker v-model="form.engaged_date" type="date" placeholder="Pick a Date" format="yyyy/MM/dd"></el-date-picker>
                            <small class="has-text-danger" v-if="errors.engaged_date">{{ errors.engaged_date[0] }}</small>
                        </v-flex>
                        <v-flex sm6>
                            <label for="">Renewal date</label>
                            <el-date-picker v-model="form.renewal_date" type="date" placeholder="Pick a Date" format="yyyy/MM/dd"></el-date-picker>
                            <small class="has-text-danger" v-if="errors.renewal_date">{{ errors.renewal_date[0] }}</small>
                        </v-flex>
                        <v-flex sm6>
                            <el-radio v-model="form.status" label="1">Active</el-radio>
                            <el-radio v-model="form.status" label="2">Inactive</el-radio>
                            <el-radio v-model="form.status" label="3">Terminated</el-radio>
                            <el-radio v-model="form.status" label="4">Lead</el-radio>
                            <small class="has-text-danger" v-if="errors.company_website">{{ errors.company_website[0] }}</small>
                        </v-flex>
                        <!-- <v-flex sm6>
                            <label for="">Postal Code</label>
                            <el-input placeholder="000192" v-model="form.postal_code"></el-input>
                            <small class="has-text-danger" v-if="errors.postal_code">{{ errors.postal_code[0] }}</small>
                        </v-flex> -->
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-btn color="blue darken-1" text @click="close">Close</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="save" :loading="loading" :disabled="loading">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-layout>
</template>

<script>
import {
    mapState
} from 'vuex';
export default {
    data: () => ({
        dialog: false,
        form: {
            'code': '',
            'client_name': '',
            'location': '',
            'contact': '',
            'engaged_date': '',
            'renewal_date': '',
            'status': '1',
        },
    }),
    created() {
        eventBus.$on("openCreateClient", data => {
            this.dialog = true;
        });
    },

    methods: {
        save() {
            this.form.services = this.services
            var payload = {
                data: this.form,
                model: '/clients',
            }
            this.$store.dispatch('postItems', payload)
                .then(response => {
                    eventBus.$emit("clientEvent")
                });
        },
        close() {
            this.dialog = false;
        }
    },
    computed: {
        ...mapState(['errors', 'loading', 'services'])
    },
};
</script>
