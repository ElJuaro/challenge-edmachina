<template>
<div class="contain-header">
  <v-app-bar
  class="header-mode"
  height="63"
  app
  dark
  dense>
    <v-app-bar-nav-icon @click="changeStatus()"></v-app-bar-nav-icon>
    <v-toolbar-title class="d-flex"><img src="../assets/img/logo-edmachina.png" width="146" height="22"/></v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="btns">
      <v-btn icon>
      <span class="material-icons">
          search
      </span>
      </v-btn>
      <v-btn icon>
      <i class="material-icons-sharp" 
        v-if="$colorMode.preference == 'dark'"
        @click="darkMode(true)">
        light_mode</i>
      <i 
      class="material-icons-sharp" 
       v-if="$colorMode.preference == 'light'"
        @click="darkMode(false)"
        >dark_mode</i>
      </v-btn>
      <v-btn icon v-for="(items,i) in btnsGroup" :key="i">
        <i class="material-icons">{{items.icon}}</i>
        <div v-if="items.notification > 0" class=" btns-notification rounded-circle d-inline-block">
        4
        </div>
      </v-btn>
    </div>
    <v-menu
      left
      nudge-bottom="40">
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
            <div class="status">
                <div class="status_value"></div>
            </div>
            <img src="../assets/img/imagePerfil.png"/>
          </div>
        </div>
         </template>
          <v-list width="208">
            <v-list-item-group 
              v-model="selectedItem">
               <v-list-item
                  class="list-items"
                  v-for="(item, i) in menuProfile"                
                  :key="i"
                  :style="[setStyleBorder(i)]" >
                    <v-list-item-icon v-if="item.icon" class="iconTitle">
                      <i class="material-icons">{{item.icon}}</i>
                    </v-list-item-icon> 
                    <v-list-item-content  class="iconTitle">
                      <v-list-item-title :style="[item.title == 'Teclab' ? {fontWeight:'bold'}: null]">{{item.title}}</v-list-item-title>
                      <v-list-item-subtitle v-if="item.subTitle" class="iconTitle">{{item.subTitle}}</v-list-item-subtitle>
                    </v-list-item-content >
                    <v-list-item-action v-if="item.options" class="iconTitle">
                      <i class="material-icons" small>chevron_right</i>
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
  export default {
    name: "Header",
    components: { MenuVue },
    data() {
      return {
        drawer:false, 
        selectedItem: 1,
        statusProfile: {status:'Active'},
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
       this.$colorMode.preference = "light";
    },

    methods:{

      darkMode(status) {
         status ? this.$colorMode.preference = "light" : this.$colorMode.preference = "dark";
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
  padding:0px 0px !important;
}
header{
  left:0px !important;
  right:0px !important; 
}

.btns{
  margin-right:20px;
  display:flex;
  gap:14px;

  .v-btn{
    height:1.9rem!important;
    width:1.9rem!important;
  }
  &-notification{
    background-color: red;
    height:1.1rem;
    width:auto;
    aspect-ratio:1/1;
    position: absolute;
    margin-bottom: 1.2rem;
    margin-right: -.9rem;
  }
}

.perfil{
  display:flex;
  align-items: center;

  &-data{
    display:flex;
    flex-direction:column;
    margin-right: 0.2rem;
    font-size:14px;
    line-height: 1rem;
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
  margin-top:0;
  height:1rem;
  padding:1.318rem 0.8rem;

    
    .v-list-item__icon{
      margin: 0;
      align-self: normal;
    }

    .v-list-item__subtitle{
      font-size:0.8rem;
    }
}

.status{
    position: absolute;
    background-color: #fff;
    width: 11px;
    height: 11px;
    border-radius: 100px;
    right: 1.5%;
    top: 65%;
    &_value{
      position: absolute;
    background-color: #28C76F;
    width: 7px;
    height: 7px;
    border-radius: 6.25rem;
    right: 1.3px;
    top: 23%;
    }
}

@media(min-height:678px){
  .status{
    right: 1%;
    top:60%;
    &_value{
      right:1.5px;
    }
  }
}

</style>
