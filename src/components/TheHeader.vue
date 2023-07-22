<template>
    <div>
        <v-navigation-drawer 
            class="hidden-md-and-up"
            temporary
            absolute
            v-model="drawer">
            <v-list 
                nav
                v-for="(item, i) in menuItems"
                :key="`navdrawer${i}`">
                <v-list-item 
                    :prepend-icon="item.icon" 
                    :title="item.title" 
                    :to="item.route">
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="primary">
            <v-toolbar-items class="hidden-md-and-up">
                <v-btn
                    flat
                    append-icon="mdi mdi-menu"
                    @click.stop="drawer = !drawer"
                ></v-btn>
            </v-toolbar-items>
            <router-link to="/" class="pointer" style="text-decoration: none; color: white;">
                <v-toolbar-title class="px-3">Learn English</v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                    :append-icon="item.icon" 
                    v-for="(item, i) in menuItems" 
                    :key="i" 
                    :to="item.route" 
                    flat>{{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    
    export default {
        name: 'TheHeader',
        data() {
            return {
                drawer: false
            }
        },  
        computed: {
            isUserAuth() {
                return this.$store.getters.getUserAuth
            },
            menuItems() {
                return this.isUserAuth ?
                 [
                    {
                        title: 'Читать',
                        route: '/books',
                        icon: 'mdi mdi-read'
                    },
                    {
                        title: 'Учить слова',
                        route: '/words',
                        icon: 'mdi mdi-school-outline'
                    },
                    {
                        title: 'Мой кабинет',
                        route: '/profile',
                        icon: 'mdi mdi-account-outline'
                    },
                    {
                        title: 'Выйти',
                        route: '/logout',
                        icon: 'mdi mdi-logout'
                    },
                    
                ] :
                [
                    {
                        title: 'Читать',
                        route: '/books',
                        icon: 'mdi mdi-read'
                    },
                    {
                        title: 'Учить слова',
                        route: '/words',
                        icon: 'mdi mdi-school-outline'
                    },
                    {
                        title: 'Войти',
                        route: '/signin',
                        icon: 'mdi mdi-login'
                    },
                    {
                        title: 'Зарегистрироваться',
                        route: '/signup',
                        icon: 'mdi mdi-account-plus-outline'
                    }
                ]

            }
        }

    }
</script>

<style scoped>

</style>