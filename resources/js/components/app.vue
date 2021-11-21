<template>
<v-main :style="[ ($vuetify.theme.dark) ? {'background': '#1e1e1e'} : '']" style="height: 100vh !important;">
    <router-view :user="user" v-loading="page_loader" :element-loading-text="app_name + '...'" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)"></router-view>
</v-main>
</template>

<script>
import {
    mapState
} from 'vuex'
export default {
    props: ['user'],
    data() {
        return {
            app_name: 'Elitlodgit'
        }
    },
    computed: {
        ...mapState(['page_loader'])
    },
}
</script>

<style>
.el-loading-mask {
    position: fixed !important;
}
</style>
