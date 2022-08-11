<template>
<v-container 
    fluid 
    class="container" >
    <div v-bind:class="{containbody : drawerIsOpen}">
        <v-row no-gutters style="margin:1.7rem 0px;">
            <v-col
            cols="12"
            class="d-flex justify-space-between" style="height:1.3rem;">
                <div class="first-header_div  d-flex align-center justify-space-between">
                    <div class="title-grids">My Report</div>
                    <div class="first_header_div_icons">
                        <v-btn icon class="iconsContent">
                            <i class="material-icons-outlined">
                                content_copy
                            </i> 
                        </v-btn>
                        <v-btn icon class="iconsContent">
                            <i class="material-icons">
                                share
                            </i> 
                        </v-btn>
                    </div>
                </div>
                <div class="col-9  second-header_div d-flex align-center justify-end" >
                    <div class="second-header_div__actions">
                        <v-btn tile  text="true" class="btns-filter" v-for = "(btn, i) in groupBtns" :key="i">
                            <i class="material-icons" left>{{btn.icon}}</i>                          
                            {{btn.title}}
                        </v-btn>
                    </div>
                    <div class="second-header_div__filters ">
                         <v-btn icon class="iconsContent">
                            <i class="material-icons-round">filter_alt</i>
                        </v-btn>
                        <v-btn icon class="iconsContent">
                            <i class="material-icons">dashboard</i>                         
                        </v-btn>
                        <v-menu
                        left
                        nudge-bottom="34"    
                        min-width="210px"
                        rounded="8px"        
                        >
                            <template v-slot:activator="{on , attrs}">
                                <v-btn 
                                icon
                                v-bind="attrs"
                                v-on="on"
                                class="iconsContent">
                                    <i class="material-icons-outlined">
                                        app_registration
                                     </i>              
                                </v-btn>
                            </template>
                             <v-list height="338" width="208">
                                <v-list-item-group 
                                    v-model="selectedItem">
                                    <v-list-item
                                        class="list-items"
                                        v-for="(item, i) in dropdownConfig"
                                        :key="i"
                                        :style="[i == 6 ? {borderTop : '1px solid #80808061'} : {border : 'none'}]">
                                        <v-list-item-icon class="iconTitle">
                                            <i class="material-icons" v-if="!item.sharp">{{item.icon}}</i>
                                            <i class="material-icons-sharp" v-if="item.sharp">{{item.icon}}</i>
                                        </v-list-item-icon> 
                                        <v-list-item-content class="iconTitle">
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
export default {
    name:"ContentVue",
    components: { ContentGrid },
    data(){
        return {
        drawerIsOpen :false,
        selectedItem:1,
        dropdownConfig: [
            {text:'Export Report' , icon:'file_download'},
            {text:'Share Report' , icon:'share'},
            {text:'Report Settings' , icon:'tune'},
            {text:'Schedule Report' , icon:'schedule'},
            {text:'Edit Report' , icon:'dashboard'},
            {text:'Pin Report' , icon:'push_pin', sharp: true},
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

.container{
    margin-right:0px !important;
    margin-left:0px !important;
    padding:1px 20px 12px 20px !important;
    .v-list{
        padding:0;
        height:19.3rem;
    }
}

.containbody{
    margin-left:16.2rem;
}

.first_header_div{
    width:14.8rem;
    height:1.3rem;
    &_icons{
        margin-left: 1.1rem;
        height:100%;
        display:flex;
        align-items:center;
        gap:10px;
    }
}


.v-btn__content{
     opacity:100 !important;
     gap:10px;
}

.second-header_div{
    padding:0;
    &__actions{
        display: flex;
        gap: 5px;
        margin-right:15px;
        .v-btn{          
            text-transform:none;
        }
    }
    &__filters{
        display:flex; 
        gap:12px
        
    }
    .v-btn:not(.v-btn--round).v-size--default{
        height:1.25rem;
        padding:0;
        margin-left:5px;;
    }

    
}

.v-list-item-group .v-list-item--active{
    .iconTitle{
        color: var(--menu-profile-content) !important;
    }
}  
.list-items{
    height:1rem;
    .v-list-item__icon{
        align-items: center;
        margin-right:10px !important;
    }
    .v-list-item__title{
        font-size:14px;
    }
} 

</style>