<template>
<div>
    <v-card style="padding: 20px; width: 100%;margin-top: -70px;">
        <v-layout justify-center align-center wrap style="margin-top: 0 !important;">

            <v-flex sm12>
                <el-row :gutter="12" style="width: 100%">
                    <el-col :xs="12" :sm="5" :md="5" :lg="5" :xl="5">
                        <div @click="openPage('delivered')" style="cursor: pointer">
                            <el-card shadow="hover" style="background: #1093de !important;color: white">
                                <div class="text-center">
                                    <p style="font-size: 36px;">{{ dashboard_data.clients }}</p>
                                    <h5>Clients</h5>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="5" :md="5" :lg="5" :xl="5">
                        <div @click="openPage('To be shipped')" style="cursor: pointer">
                            <el-card shadow="hover" style="background: #1093de !important;color: white">
                                <div class="text-center">
                                    <p style="font-size: 36px;">{{ dashboard_data.active }}</p>
                                    <h5>Active</h5>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="5" :md="5" :lg="5" :xl="5">
                        <div @click="openPage('To be delivered')" style="cursor: pointer">
                            <el-card shadow="hover" style="background: #1093de !important;color: white">
                                <div class="text-center">
                                    <p style="font-size: 36px;">{{ dashboard_data.inactive }}</p>
                                    <h5>Inactive</h5>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="5" :md="5" :lg="5" :xl="5">
                        <div @click="openPage('Returned')" style="cursor: pointer">
                            <el-card shadow="hover" style="background: #1093de !important;color: white">
                                <div class="text-center">
                                    <p style="font-size: 36px;">{{ dashboard_data.terminated }}</p>
                                    <h5>Terminated</h5>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
                    <!-- <v-divider vertical></v-divider> -->
                    <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4">
                        <el-card shadow="hover" style="background: #1093de !important;color: white">
                            <div>
                                <strong>Users <span style="float:right;border-left: 1px solid;padding-left: 10px;">{{ dashboard_data.users  }} </span> </strong>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>

            </v-flex>
        </v-layout>
    </v-card>
</div>
</template>

<script>
import {
    mapState
} from "vuex";
export default {
    props: ["user"],
    components: {},
    data() {
        return {
            selectedItem: 0,
            active_chart: {
                "active": 154,
                "inactive": 26
            },
        }
    },
    methods: {
        dashData() {
            var payload = {
                model: 'dashboard_data',
                update: 'updateDashboard',
            }
            this.$store.dispatch('getItems', payload)
        },
    },
    computed: {
        ...mapState([
            'dashboard_data'
        ])
    },
    mounted() {
        this.dashData()
    },
    created() {
        // this.timer = window.setInterval(() => {
        //     this.refresh_dashboard();
        // }, 120000);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
    // filters: {
    //     moment(date) {
    //         return moment(date).format('ddd, MMM Do YYYY');
    //     },
    // },
}
</script>

<style scoped>
.justify-center {
    margin-top: -100px !important;
}

.card-stats {
    margin-top: -10px;
    padding: 20px 0;
}

/* .statistics {
    background: #f0f0f0 !important;
} */

.progress-Ship {
    margin-top: 100px !important;
}

/*
.v-icon {
    font-size: 64px !important;
}

.v-icon {
    box-shadow: 0 9px 30px -6px rgba(255, 54, 54, .5);
    padding: 5px;
    border-radius: 50%;
} */

.info-title {
    margin-top: 20px;
}
</style>
