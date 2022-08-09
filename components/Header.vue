<template>
<div class="contain-header">
  <v-app-bar
  :style="{background: $vuetify.theme.themes[theme].header}"
  height="40"
  app
  dark
  dense>
    <v-app-bar-nav-icon @click="changeStatus()"></v-app-bar-nav-icon>
    <v-toolbar-title>Ed Machina</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="btns">
      <v-btn icon>
      <span class="material-icons">
          search
      </span>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-box-multiple</v-icon>
      </v-btn>
      <v-btn icon @click="dark_mode">
       <v-icon  class="mdi-rotate-315" v-if="!this.$vuetify.theme.dark">mdi-moon-waning-crescent</v-icon>
        <v-icon v-if="this.$vuetify.theme.dark">mdi-white-balance-sunny</v-icon>
      </v-btn>
      <v-btn icon v-for="(items,i) in btnsGroup" :key="i">
        <v-icon>{{items.icon}}
        </v-icon>
        <div v-if="items.notification > 0" class=" btns-notification rounded-circle d-inline-block">
        <span>{{items.notification}}</span>
        </div>
      </v-btn>
    </div>
    <v-menu
      left
      nudge-bottom="38">
        <template v-slot:activator="{on , attrs}">
        <div class="perfil">
          <div class="perfil-data">
            <span>Jane Doe</span>
            <span style="text-align: end">Admin</span>
          </div>
          <div 
            class="perfil-img"
            v-bind="attrs"                               
            v-on="on">
            <img src="../assets/img/imagePerfil.png"/>
          </div>
        </div>
         </template>
          <v-list>
            <v-list-item-group 
              v-model="selectedItem"
              color="primary">
               <v-list-item
                  class="list-items"
                  v-for="(item, i) in menuProfile"                
                  :key="i"
                  :style="[setStyleBorder(i), {background: $vuetify.theme.themes[theme].menu}]" >
                    <v-list-item-icon v-if="item.icon">
                      <v-icon >{{item.icon}}</v-icon>
                    </v-list-item-icon> 
                    <v-list-item-content>
                      <v-list-item-title :style="[item.title == 'Teclab' ? {fontWeight:'bold'}: null]">{{item.title}}</v-list-item-title>
                      <v-list-item-subtitle v-if="item.subTitle">{{item.subTitle}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action v-if="item.options">
                      <v-icon small>mdi-chevron-right</v-icon>
                    </v-list-item-action>
                </v-list-item>
            </v-list-item-group>
          </v-list>
    </v-menu>
  </v-app-bar>
   <MenuVue />
</div>
</template>

<script>
  import MenuVue from '@/components/Menu.vue';
 import { EventBus } from '@/event-bus';
 import global from '../mixins/global.js';
  export default {
    name: "Header",
    components: { MenuVue },
    mixins:[global],
    data() {
      return {
        drawer:false, 
        selectedItem: 1,
        menuProfile : [
          {title:'Profile', icon:'person'},
          {title:'Teclab', subTitle:'1221719211',
           options : [
            {title:'All Accounts'},
            {title:'Teclab:12829347'},
            {title:'IPP:12829333'}
          ]},
          {title:'Inbox', icon:'mail'},
          {title:'Notifications', icon:'notifications'},
          {title:'Account Settings', icon:'settings'},
          {title:'Billing', icon:'receipt'},
          {title:'Log Out', icon:'logout'},
        ],
        btnsGroup: [
          {icon:'settings'},
          {icon:'notifications',  notification: 4},
        ]
      }
    },

    mounted(){
      this.$vuetify.theme.dark = false;
    },

    methods:{
      dark_mode(){
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      },

      changeStatus(){
        this.drawer = !this.drawer;
        EventBus.$emit('changeIt', this.drawer);
      },

      setStyleBorder(key){
        if(key == 1){
          let styleA = {
            borderBottom : '1px solid #80808061',
            borderTop: '1px solid #80808061'
          }
          return styleA;
        };
        if(key == 4){
          let styleB = {
            borderBottom: '1px solid #80808061'
          }
        return  styleB
        }
       
      }
    },
}
</script>
<style lang="scss">

.v-list{
  padding:1px 0px !important;
}
header{
  left:0px !important;
  right:0px !important; 
}

.btns{
  margin-right:8px;
  .v-btn{
    height:30px !important;
    width:30px !important;
  }
  &-notification{
    background-color: red;
    position: absolute;
    top: 2%;
    margin-right: -0.9rem;
  }
  .v-icon{
    font-size:1.2rem !important;
  }
}

.perfil{
  display:flex;
  align-items: center;

  &-data{
    display:flex;
    flex-direction:column;
    margin-right: 0.2rem;
    font-size:0.8rem;
    line-height: 0.2rem;
  }

  &-img{
    height:2.4rem;
    img{
      padding:3px;
      height:100%;
      line-height:0;
    }
  }
} 

.list-items{
  min-height:auto !important;
  margin-top:0;
  height:1.8rem;
  padding:1.2rem 1rem !important;
    
    .v-list-item__icon{
      margin: 0;
      align-self: normal;
    }

    .v-list-item__title{
      font-size:0.9rem;
    }

    .v-list-item__subtitle{
      font-size:0.8rem;
    }
}

</style>
