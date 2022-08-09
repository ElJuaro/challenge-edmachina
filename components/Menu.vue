<template>
    <v-navigation-drawer 
    class="navigation"
    app 
    v-model="drawer" 
    hide-overlay
    stateless= "stateless"
    width="250"
    :style="{background: $vuetify.theme.themes[theme].menu}">   
                <v-list class="list-all">
                    <v-list-item-group 
                    v-model="selectedItem" 
                    active-class="bla"                
                    style="height:100%;">
                        <v-list-item
                        class="list-items mt-2"
                        v-for="(item, i) in menuInit"
                        :style="{background: $vuetify.theme.themes[theme].menu}"
                        :key="i">
                            <v-list-item-icon>
                               <i class="material-icons-round">{{item.icon}}</i>
                            </v-list-item-icon> 
                            <v-list-item-content>
                               <v-list-item-title >{{item.text}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
    
                        <div class="reports mt-3">
                            <div class="list d-flex justify-space-between">
                                <span>REPORTS</span>
                                <v-icon right>mdi-clipboard-text-outline</v-icon>
                            </div>
                            <v-list-item
                            class="list-items mt-2"
                            v-for="(item, i) in menuReport"
                            :style="{background: $vuetify.theme.themes[theme].menu}"
                            :key="'A' + i">
                                <v-list-item-icon>
                                     <i class="material-icons" v-if="!item.mdiIcon">{{item.icon}} </i>
                                     <v-icon class="mdi-rotate-315" v-if="item.mdiIcon">{{item.icon}}</v-icon>
                                </v-list-item-icon> 
                                <v-list-item-content>
                                    <v-list-item-title >{{item.text}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </div>                       
                        <div  class="settings">
                            <span class="list">SETTINGS</span>
                            <v-list-item
                            class="list-items mt-2"
                            v-for="(item, i) in menuSettings"
                            :style="{background: $vuetify.theme.themes[theme].menu}"
                            :key="'b'+ i">
                                <v-list-item-icon>
                                     <i class="material-icons-round">{{item.icon}}</i>      
                                </v-list-item-icon> 
                                <v-list-item-content>
                                    <v-list-item-title >{{item.text}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </div>
                    </v-list-item-group>
                </v-list>
    </v-navigation-drawer>
</template>

<script>
import Content from './Content.vue';
import { EventBus } from '@/event-bus';
import global from '../mixins/global.js';

export default {
    name: "Menu",
    mixins:[global],
    components: { Content },
    data() {
        return {        
            stateless: true,
            drawer: false,
            selectedItem: 1,
            menuInit: [
                { text: "Dashboard", icon: "home"},
                { text: "Calendar", icon: "calendar_today"},
            ],
            menuReport: [
                { text: "Machina Hi", icon: "add_box"},
                { text: "Heads Up", icon: "mdi-arrow-right-bold-circle", mdiIcon: true},
                { text: "Stay Around", icon: "sync"},
                { text: "Analytics", icon: "insert_chart"},
                { text: "My Reports", icon: "equalizer"}
            ],
            menuSettings: [
                { text: "Manage Users", icon: "person"},
                { text: "Cloud Connect", icon: "cloud_download"},
                { text: "Api Manager", icon: "api"},
                { text: "Help/Support", icon: "help"},
            ]
        };
    },
    created(){
        EventBus.$on('changeIt', (data) => {
            this.drawer = data;
        })
    }, 
    
}
</script>

<style lang="scss">

.list-all{
        height:94%;
}
.navigation{
    margin-top:40px; 
    .list{
        width:90%;
        opacity: .3;
        color: grey;
        font-size:0.8rem;
        .v-icon{
            font-size:0.8rem !important;
        }
    }

    .list-items{
        min-height:auto !important;
        height:1.8rem;
        margin: 0 0.5rem;
        width:90%;
        border-radius:0.25rem;
        background-color: #fff;
        box-shadow: 0 3px 1px -2px rgba(0 ,0 ,0 , 0), 0 2px 2px 0 rgba(0 ,0 ,0 , 0), 0 1px 5px 0 rgba(0, 0 ,0,  0.08);
        .v-list-item__icon{
            margin: 0;
            align-self: normal;
        }
        .v-list-item__title{
            font-size:0.8rem;
        }
        .theme--light.v-icon{
            color:black;
        }
    }

    .v-list-item-group .v-list-item--active{
        color:#fff !important; 
        background-color:#4434fc !important;
    }

    .settings{
        position:absolute; 
        bottom:0;
        width:100%;
    }
}

@media(max-height:967px){
   .list-all{
    height:90%;
   }
}

</style>