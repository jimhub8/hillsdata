<template>
<div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y transition="slide-y-transition">
        <!-- <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x> -->
        <template v-slot:activator="{ on, attrs }">
            <v-btn dark icon v-bind="attrs" v-on="on" small>
                <v-icon color="white lighten-1">
                    mdi-account-circle
                </v-icon>
            </v-btn>
        </template>

        <v-card>

            <v-list dense>
                <v-list-item-group color="primary">
                    <v-list-item>
                        <v-list-item-avatar>
                            <!-- <avatar :username="user.name" style="font-size: 20px;margin: auto;padding: 0px;"></avatar> -->
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>{{ user.name }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                <v-divider></v-divider>

                <router-link to="/profile" class="v-list-item v-list-item--link theme--light">
                    <div class="v-list__tile__action">
                        <v-icon>mdi-face-profile</v-icon>
                    </div>
                    <div class="v-list-item__content">
                        <div class="v-list-item__title">My Profile</div>
                    </div>
                </router-link>

            </v-list>

            <v-card-actions>
                <form action="/logout" method="post">
                    <input type="hidden" name="_token" :value="csrf">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">

                            <v-btn v-on="on" text slot="activator" color="primary" icon class="mx-0" type="submit">
                                <v-icon>mdi-logout</v-icon>
                            </v-btn>
                        </template>
                        <span>Logout from this device</span>
                    </v-tooltip>
                </form>

                <form action="/logoutOther" method="get">
                    <input type="hidden" name="_token" :value="csrf">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn v-on="on" text slot="activator" color="orange" icon class="mx-0" type="submit">
                                <v-icon>mdi-logout-variant</v-icon>
                            </v-btn>
                        </template>
                        <span>Logout other devices</span>
                    </v-tooltip>
                </form>
                <v-spacer></v-spacer>
                <v-btn text @click="menu = false">close</v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</div>
</template>

<script>
// import Avatar from 'vue-avatar'
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
        }
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
