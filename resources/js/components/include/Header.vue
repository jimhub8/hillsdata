<template>
<v-app id="inspire">
    <!-- <v-navigation-drawer
      v-model="drawer"
      app
    >

    </v-navigation-drawer> -->
    <v-navigation-drawer v-model="drawer" :clipped="clipped" app>

        <v-list dense id="navigation">
            <v-img :aspect-ratio="16/9" src="/storage/app/app_image.jpeg">
                <v-layout pa-2 column fill-height class="lightbox white--text">
                    <v-spacer></v-spacer>
                    <v-flex shrink>
                        <div class="subheading">{{ user.name }}</div>
                        <div class="body-1">{{ user.email }}</div>
                    </v-flex>
                </v-layout>
            </v-img>
            <template>
                <v-card>
                    <router-link to="/" class="v-list-item v-list-item--link theme--light">
                        <div class="v-list__tile__action">
                            <v-icon>mdi-view-dashboard</v-icon>
                        </div>
                        <div class="v-list-item__content">
                            <div class="v-list-item__title">Dashboard</div>
                        </div>
                    </router-link>

                    <router-link to="/clients" class="v-list-item v-list-item--link theme--light" v-if="user.can['Clients view']">
                        <div class="v-list__tile__action">
                            <v-icon>mdi-account-group</v-icon>
                        </div>
                        <div class="v-list-item__content">
                            <div class="v-list-item__title">Clients</div>
                        </div>
                    </router-link>

                    <v-list-group prepend-icon="mdi-account-circle">
                        <!-- <v-list-group prepend-icon="mdi-account-circle" v-if="user.can['Manage user']"> -->
                        <template v-slot:activator>
                            <v-list-item-title>Users</v-list-item-title>
                        </template>
                        <router-link to="/users" class="v-list-item v-list-item--link theme--light" v-if="user.can['User view']">
                            <div class="v-list__tile__action">
                                <v-icon>mdi-account-circle</v-icon>
                            </div>
                            <div class="v-list-item__content">
                                <div class="v-list-item__title">Users</div>
                            </div>
                        </router-link>
                        <router-link to="/roles" class="v-list-item v-list-item--link theme--light" v-if="user.can['Role view']">
                            <div class="v-list__tile__action">
                                <v-icon>mdi-account-multiple-check</v-icon>
                            </div>
                            <div class="v-list-item__content">
                                <div class="v-list-item__title">User Roles</div>
                            </div>
                        </router-link>
                    </v-list-group>

                    <v-list-group prepend-icon="mdi-clock-outline" v-if="user.can['Manage company']">
                        <template v-slot:activator>
                            <v-list-item-title>Company</v-list-item-title>
                        </template>

                        <router-link to="/company" class="v-list-item v-list-item--link theme--light">
                            <div class="v-list__tile__action">
                                <v-icon>mdi-office-building</v-icon>
                            </div>
                            <div class="v-list-item__content">
                                <div class="v-list-item__title">Company</div>
                            </div>
                        </router-link>

                    </v-list-group>

                    <v-list-group prepend-icon="mdi-cogs" v-if="user.can['Setting view']">
                        <template v-slot:activator>
                            <v-list-item-title>Settings</v-list-item-title>
                        </template>

                        <router-link to="/custom" class="v-list-item v-list-item--link theme--light">
                            <div class="v-list__tile__action">
                                <v-icon>mdi-face-agent</v-icon>
                            </div>
                            <div class="v-list-item__content">
                                <div class="v-list-item__title">Settings</div>
                            </div>
                        </router-link>
                    </v-list-group>

                    <router-link to="/clients" class="v-list-item v-list-item--link theme--light">
                        <div class="v-list__tile__action">
                            <v-icon>mdi-account-multiple-plus</v-icon>
                        </div>
                        <div class="v-list-item__content">
                            <div class="v-list-item__title">Clients</div>
                        </div>
                    </router-link>
                </v-card>
            </template>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" app color="red darken-3" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
            <img src="/logo/logo.jpg" alt style="width: 90px; height: 46px;">
        </v-toolbar-title>
        <v-spacer />
        <v-spacer />

        <Logout :user="user" />
        <Notifications :user="user" />
    </v-app-bar>

    <v-main>
        <!--  -->
    </v-main>
</v-app>
</template>

<script>
import Logout from "./Logout";
import Notifications from "./notifications";
// import moment from 'moment'
import {
    mapState
} from "vuex";
export default {
    components: {
        Logout,
        Notifications
    },
    props: ["user"],
    data() {
        return {
            csrf: document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
            color: "#ea1812",
            clipped: false,
            dialog: false,
            drawer: true,
        };
    },
    filters: {
        // moment(date) {
        // return moment(date).format('ddd, MMM Do YYYY');
        // },
    },
    methods: {
        close() {
            this.dialog = false;
        },

        showalert(data) {
            this.$message({
                type: 'success',
                message: data
            });
        },
        showError(data) {
            this.$message({
                type: 'error',
                message: data
            });
        },
        getCompany() {
            var payload = {
                model: 'company',
                update: 'updateCompany',
            }
            this.$store.dispatch('getItems', payload);
        },

        playSound(sound) {
            var audio = new Audio('http://soundbible.com/mp3/Air%20Plane%20Ding-SoundBible.com-496729130.mp3');
            audio.play();
        },

        refresh_dash() {
            eventBus.$emit('Refreshdashboard')
        }

    },
    created() {
        // this.playSound()

        eventBus.$on("progressEvent", data => {
            this.$refs.topProgress.start();
        });
        eventBus.$on("StoprogEvent", data => {
            this.$refs.topProgress.done();
        });
        eventBus.$on("alertRequest", data => {
            this.showalert(data)
        });
        eventBus.$on("errorEvent", data => {
            this.showError(data)
        });
        eventBus.$on("LoadingEvent", data => {
            // this.openFullScreen(data)
        });
        eventBus.$on("stopLoadingEvent", data => {
            // this.closeFullScreen(data)
        });

        eventBus.$on('playSoundEvent', data => {
            this.playSound()
        })

    },
    computed: {
        ...mapState(['page_loader', 'company', 'loading']),

    },
    mounted() {
        // this.getCompany();
    },
};
</script>

<style scoped>
.v-expansion-panel__container:hover {
    border-radius: 10px !important;
    width: 90% !important;
    margin-left: 15px !important;
    background: #e3edfe !important;
    color: #1a73e8 !important;
}

.theme--light {
    background-color: #212120 !important;
    /* background: url('storage/logo1.jpg') !important; */
    color: #fff !important;
}

.v-toolbar[data-booted=true] {
    transition: .2s cubic-bezier(.4, 0, .2, 1);
    z-index: 100 !important;
}

.theme--light[data-v-67cb1297] {
    z-index: 101 !important;
}

.theme--dark.v-btn:not(.v-btn--text):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: transparent !important;
}

.theme--light.v-application {
    /* margin-top: -650px; */
}

.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
    /* height: 74px !important; */

}

#navigation .v-list-item--link,
#navigation .v-list-item--link {
    width: 100% !important;
}
</style>
