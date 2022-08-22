<template>
    <v-navigation-drawer 
    class="navigation-draw"
    app 
    color="false"
    v-model="drawer" 
    hide-overlay
    stateless= "stateless"
    width="260">   
                <v-list class="list-all">
                    <v-list-item-group 
                    v-model="selectedItem"              
                    style="height:100%;">
                        <v-list-item
                        class="list-items mt-2"
                        v-for="(item, i) in menuInit"
                        :key="i"
                        @click="itemSelect(item.id)">
                            <v-list-item-icon class="iconTitle">
                               <i class="material-icons-round">{{item.icon}}</i>
                            </v-list-item-icon> 
                            <v-list-item-content class="iconTitle">
                               <v-list-item-title >{{item.text}}</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action v-if="selectedItem == item.id">
                                    <span class="material-icons-round iconTitle">
                                        chevron_right
                                    </span>
                                </v-list-item-action>
                        </v-list-item>

                        <div class="reports">
                            <div class="list d-flex justify-space-between mt-5 mb-2">
                                <span>REPORTS</span>
                                <i class="material-icons" right>list_alt</i>
                            </div>
                            <v-list-item
                            class="list-items mt-2"
                            v-for="(item, i) in menuReport"
                            :key="'A' + i"
                            @click="itemSelect(item.id)">
                                <v-list-item-icon class="iconTitle">
                                     <i class="material-icons" v-if="!item.sharp">{{item.icon}} </i>
                                     <i class="material-icons-sharp" v-if="item.sharp">{{item.icon}}</i>
                                </v-list-item-icon> 
                                <v-list-item-content class="iconTitle">
                                    <v-list-item-title >{{item.text}}</v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action v-if="selectedItem == item.id">
                                    <span class="material-icons-round iconTitle">
                                        chevron_right
                                    </span>
                                </v-list-item-action>
                            </v-list-item>
                        </div>                       
                        <div  class="settings">
                            <span class="list mb-2">SETTINGS</span>
                            <v-list-item
                            class="list-items mt-2"
                            v-for="(item, i) in menuSettings"
                            :key="'b'+ i"
                            @click="itemSelect(item.id)">
                                <v-list-item-icon class="iconTitle">
                                     <i class="material-icons-round">{{item.icon}}</i>      
                                </v-list-item-icon> 
                                <v-list-item-content class="iconTitle">
                                    <v-list-item-title >{{item.text}}</v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action v-if="selectedItem == item.id">
                                    <span class="material-icons-round iconTitle">
                                        chevron_right
                                    </span>
                                </v-list-item-action>
                            </v-list-item>
                        </div>
                    </v-list-item-group>
                </v-list>
    </v-navigation-drawer>
</template>

<script>
import Content from './Content.vue';
import { EventBus } from '@/event-bus';

export default {
    name: "Menu",
    components: { Content },
    data() {
        return {        
            stateless: true,
            drawer: false,
            selectedItem: 0,
            menuInit: [
                { id: 0 , text: "Dashboard", icon: "home"},
                { id: 1 , text: "Calendar", icon: "calendar_today"},
            ],
            menuReport: [
                { id: 2 ,text: "Machina Hi", icon: "add_box"},
                { id: 3 ,text: "Heads Up", icon: "outbound", sharp: true},
                { id: 4 ,text: "Stay Around", icon: "sync"},
                { id: 5 ,text: "Analytics", icon: "insert_chart"},
                { id: 6 ,text: "My Reports", icon: "equalizer"}
            ],
            menuSettings: [
                { id:7 ,text: "Manage Users", icon: "person"},
                { id:8 ,text: "Cloud Connect", icon: "cloud_download"},
                { id:9 ,text: "Api Manager", icon: "api"},
                { id:10 ,text: "Help/Support", icon: "help"},
            ]
        };
    },
    created(){
        EventBus.$on('changeIt', (data) => {
            this.drawer = data;
        })
    }, 

    methods: {
        itemSelect(value){
            value = this.selectedItem;
        }
    }
    
}
</script>

<style  lang="scss">

.list-all{
        height:91%;
}

.navigation-draw{
    padding: 0px 15px;
    margin-top:3.9rem; 
    .list{
        color: var(--menu-header);
        font-size:12px;
        i{
            display:flex;
            justify-content:end;
            font-size:14px;
        }
    }

    .list-items{
        min-height:auto !important;
        height:2.3rem;
        padding:1.1rem 0.8rem ;
        border-radius:5px;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
        .v-list-item__icon{
            margin: 0;
            align-self: normal;
        }
    }

    .settings{
        position:absolute; 
        bottom:0;
        width:100%;
    }

    .v-list-item-group .v-list-item--active{
        background-color:var(--btnActive);
        .iconTitle{
            color: var(--btnActive-color) !important;
        }
    } 
} 


@media(max-height:676px){
   .list-all{
    height:87%;
   }
   .navigation-draw{
       .list-items{
        height:2rem !important;
        padding: 1.05rem 0.8rem !important;
       } 
   }
}

</style>