<template>
<v-container 
    fluid 
    class="container" >
    <div v-bind:class="{containbody : drawerIsOpen}">
        <v-row no-gutters>
            <v-col
            cols="12"
            class="d-flex justify-space-between">
                <div class="col-3  first-header_div  d-flex align-center" >
                    <span class="title-grids" :style="{color: $vuetify.theme.themes[theme].titleGrid}">My Report</span>
                    <v-btn class="mx-4" icon>
                        <i class="material-icons-outlined">
                            content_copy
                        </i> 
                    </v-btn>
                    <v-btn icon>
                        <i class="material-icons">
                            share
                        </i> 
                    </v-btn>
                </div>
                <!-- <v-spacer></v-spacer> -->
                <div class="col-9  second-header_div d-flex align-center justify-end" >
                    <div class="second-header_div__actions">
                        <v-btn tile plain v-for = "(btn, i) in groupBtns" :key="i" :style="{color: $vuetify.theme.themes[theme].iconsActions}">
                            <v-icon left>{{btn.icon}}</v-icon>                          
                            {{btn.title}}
                        </v-btn>
                    </div>
                    <div class="ml-3">
                         <v-btn icon>
                            <v-icon >mdi-filter</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <i class="material-icons">
                                dashboard
                            </i>                         
                        </v-btn>
                        <v-menu
                        left
                        nudge-bottom="35"    
                        min-width="220px"
                        rounded="8px"        
                        >
                            <template v-slot:activator="{on , attrs}">
                                <v-btn 
                                icon
                                v-bind="attrs"
                                v-on="on">
                                    <i class="material-icons-outlined">
                                        app_registration
                                     </i>              
                                </v-btn>
                            </template>
                             <v-list>
                                <v-list-item-group 
                                    v-model="selectedItem"
                                    color="primary">
                                    <v-list-item
                                        class="list-items"
                                        v-for="(item, i) in dropdownConfig"
                                        :key="i"
                                        :style="[i == 6 ? {borderTop : '1px solid #80808061'} : {border : 'none'}, {background: $vuetify.theme.themes[theme].menu}]">
                                        <v-list-item-icon>
                                            <i class="material-icons" v-if="!item.mdiIcon">{{item.icon}}</i>
                                             <v-icon  v-if="item.mdiIcon">{{item.icon}}</v-icon>
                                        </v-list-item-icon> 
                                        <v-list-item-content>
                                            <v-list-item-title >{{item.text}}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-menu>
                    </div>

                </div>
                
            </v-col>
        </v-row>
        <ContentGrid />
    </div>
</v-container>
</template>

<script>

 import { EventBus } from '@/event-bus';
 import ContentGrid from '../components/Content-grid.vue'
 import global from '../mixins/global.js';
export default {
    name:"ContentVue",
    components: { ContentGrid },
    mixins:[global],
    data(){
        return {
        drawerIsOpen :false,
        selectedItem:1,
        dropdownConfig: [
            {text:'Export Report' , icon:'file_download'},
            {text:'Share Report' , icon:'share'},
            {text:'Report Settings' , icon:'tune'},
            {text:'ScheduleReport' , icon:'schedule'},
            {text:'EditReport' , icon:'dashboard'},
            {text:'Pin Report' , icon:'mdi-pin', mdiIcon: true},
            {text:'New Report' , icon:'add_chart'},
            {text:'My Reports' , icon:'description'},
            ],
        groupBtns : [
            {title:'A 01-2022', icon:'highlight_off'},
            {title:'Age', icon:'highlight_off'},
            {title:'Career', icon:'highlight_off'},
            {title:'All', icon:'highlight_off'},
            ]
            }
        },

    created(){
        EventBus.$on('changeIt', (data) => {
            this.drawerIsOpen = data;
        })
    }, 
}
</script>

<style lang="scss">

@mixin sizeIcons{
    font-size:1.2rem;
    height:1.2rem;
    width:1.2rem;
}

$paddings-divs : 0.3rem 0.3rem;

.container{
    margin-right:0px !important;
    margin-left:0px !important;
    padding:5px 12px 12px 12px !important;
    .v-list{
        padding:1px 0;
    }
}

.containbody{
    margin-left:15.5rem;
}

.first-header_div{
    padding: $paddings-divs !important;
    border-right:1px solid #80808061; 
    height:40px;

    .v-btn--icon.v-size--default .v-icon{
        @include sizeIcons;
    }
}

.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) .v-btn__content{
     opacity:100 !important;
}

.second-header_div{
    padding: $paddings-divs !important;
    margin-right: 3rem;
    .second-header_div__actions{
        .v-btn{           
            text-transform:none;
        }
    }
    .v-btn:not(.v-btn--round).v-size--default{
        height:1.25rem;
        padding:0;
        margin-left:5px;;
    }


    .v-btn--icon.v-size--default .v-icon{
        @include sizeIcons;
    }
}

.list-items{
    .v-list-item__icon{
        align-items: center;
        margin-right:10px !important;
        .v-icon.v-icon{
            @include sizeIcons;
        }
    }
     .theme--light.v-icon{
            color:black;
        }
}

.title-grids{
    font-size: 1.4rem;
}
</style>