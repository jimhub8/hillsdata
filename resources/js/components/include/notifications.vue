<template>
<div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
            <v-badge :content="notifications.count" :value="notifications.count" color="black" overlap>
                <v-btn dark icon v-bind="attrs" v-on="on" small>
                    <!-- <v-btn dark icon v-bind="attrs" v-on="on" @click="read_noty"> -->
                    <v-icon color="white lighten-1" @click="read_noty">
                        mdi-bell
                    </v-icon>
                </v-btn>
            </v-badge>
        </template>

        <v-card>
            <v-list dense>
                <v-list-item-group v-model="item" color="primary">
                    <v-list-item v-for="(item, i) in notifications.notifications" :key="i">
                        <v-list-item-content>
                            <v-list-item-title v-html="item.data.message"></v-list-item-title>
                            <v-list-item-subtitle>
                                {{ item.created_on }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <v-card-actions>
                <v-btn text @click="menu = false">close</v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</div>
</template>

<script>
// import Avatar from 'vue-avatar'
import {
    mapState
} from 'vuex';
// import moment from 'moment'
export default {
    props: ['user'],
    components: {
        // Avatar
    },
    data() {
        return {
            csrf: document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
            menu: false,
            item: 0
        }
    },
    methods: {
        getNotifications() {
            var payload = {
                model: 'notifications',
                update: 'updateNotification',
            }
            this.$store.dispatch('getItems', payload);
        },
        read_noty() {
            var payload = {
                model: 'read_noty',
                update: 'updateNotification',
            }
            this.$store.dispatch('getItems', payload)
                .then((res) => {
                    this.getNotifications()
                })
        }
    },
    mounted() {
        this.getNotifications();

    },
    created() {
        eventBus.$on('orderUploadEvent', data => {
            // console.log("*****************************");
            // console.log(data);
            // console.log("*****************************");

            var payload = {
                data: data,
            }
            this.$store.dispatch("updateNotyEvent", payload);

            // this.sales.sales.index.set(index, data)

            // setTimeout(() => {
            //     this.getNotifications()

            // }, 1500);
        })
    },
    filters: {
        // moment(date) {
        //     return moment(date).format('ddd, MMM Do YYYY');
        // },
    },
    computed: {
        ...mapState(['notifications'])
    },
};
</script>

<style scoped>
.theme--dark.v-btn:not(.v-btn--text):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: transparent !important;
}

a {
    text-decoration: none;
}

.v-avatar {
    height: 60px !important;
    width: 60px !important;
    margin-left: 0 !important;
}

.v-application--is-ltr .v-list-item__avatar:first-child {
    margin-right: 0 !important;
}
</style>
