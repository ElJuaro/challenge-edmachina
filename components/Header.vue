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
        <div class="perfil">
          <div class="perfil-data">
            <span>Jane Doe</span>
            <span style="text-align: end">Admin</span>
          </div>
          <div 
            class="perfil-img"
            @click="openMenu()">
            <div class="status">
                <div class="status_value"></div>
            </div>
            <img src="../assets/img/imagePerfil.png"/>
          </div>
        </div>
      <v-card
      max-width="300"
      class="menu-profile"
      :style="[drawerPerfil ? {display : 'inline'} : {display : 'none'}]"
      >
          <v-list width="210">
            <v-list-item-group>              
              <v-menu                
                v-for="(item, i) in menuProfile"                
                :key="i"
                nudge-left="230"
                >                     
                  <template v-slot:activator="{ on}">                             
                    <v-list-item 
                    v-on="on" 
                    class="list-items"
                    @click="openMenu(i)"
                    :style="[setStyleBorder(i)]"
                    >
                      <v-list-item-icon v-if="item.icon" class="iconTitle">
                        <i class="material-icons">{{item.icon}}</i>
                      </v-list-item-icon>              
                      <v-list-item-content  class="iconTitle">
                        <v-list-item-title :style="[item.title == 'Teclab' ? {fontWeight:'bold'}: null]">{{item.title}}</v-list-item-title>
                        <v-list-item-subtitle v-if="item.subTitle" class="iconTitle">{{item.subTitle}}</v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action v-if="item.options" class="iconTitle">
                        <i class="material-icons" small>chevron_right</i>
                      </v-list-item-action>
                    </v-list-item>
                  </template>                   
                  <v-card v-if="item.options" style="border-radius:6px;">
                    <div  class="square"></div> 
                      <v-list>
                        <v-list-item 
                        class="menu-accounts"
                        v-for="(options, e) in item.options" 
                        @click="openMenu()"
                        :key="e"
                        :class="{menuProfilAccounts : options.allAccounts}">
                      <v-list-item-content>
                         <v-list-item-title ><strong>{{options.allAccounts}}</strong></v-list-item-title>
                         <v-list-item-subtitle v-if="options.subTitle" class="iconTitle"><strong>{{options.title}}</strong>: {{options.subTitle}}</v-list-item-subtitle>
                      </v-list-item-content>
                      </v-list-item>
                    </v-list>
                </v-card>                
               </v-menu>            
            </v-list-item-group>
          </v-list>
        </v-card>
   <!--  </v-menu> -->
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
        drawerPerfil: false,
        selectedItem: 1,
        statusProfile: {status:'Active'},
        menuProfile : [
          {title:'Profile', icon:'person'},
          {title:'Teclab', subTitle:'1221719211',
           options : [
            {allAccounts:'All Accounts'},
            {title:'Teclab', subTitle:'12829347'},
            {title:'IPP', subTitle:'12829333'}
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
        if(key == 0){
          return { borderTopLeftRadius: '6px', borderTopRightRadius:'6px'}
        }
        if(key == 1){
          return { borderBottom : '1px solid #80808061', borderTop: '1px solid #80808061' };
        }
        if(key == 4){
        return  { borderBottom: '1px solid #80808061' };
        } 
        if(key == 6){
          return { borderBottomLeftRadius: '6px', borderBottomRightRadius:'6px' };
        }
      },
      

      openMenu(value){
        if(value){
          if(value != 1){
           this.drawerPerfil = false;
          }else{
            this.drawerPerfil = true;
          }
        }else{
          this.drawerPerfil = !this.drawerPerfil;
        }
      },
  }
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

 .menu-accounts{
  padding:0 11px !important;
}

.square{
    height: 30px;
    width: 30px;
    top: 6%;
    left:90%;
    border-radius:3px;
    transform: rotate(45deg);
    position: absolute;
    background:var(--menu-accounts-item-allAcounts);
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
    background-color: #EA5455;
    height:1.1rem;
    width:auto;
    aspect-ratio:1/1;
    position: absolute;
    margin-bottom: 1.2rem;
    margin-right: -.9rem;
  }
}

 .v-menu__content{
  width:210px !important;
  contain:none;
  box-shadow:0px 0px 4px -2px rgb(0 0 0 / 75%) !important;
  border-radius:6px !important;
  overflow: visible;
}

.v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){
  border-radius:3px;
}

.v-sheet .v-list{
  background:var(--menu) !important;
}


.menu-profile{
position:absolute; 
top:90%; 
right:1%; 
border-radius:6px !important;
}  

.menuProfilAccounts{
  border-bottom: 1px solid var(--menu-accounts);
  color:var(--menu-accounts-item) !important;
  pointer-events:none;
  background:var(--menu-accounts-item-allAcounts);
  border-top-left-radius:6px; 
  border-top-right-radius:6px;
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
    cursor:pointer;
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
    right: 1.2%;
    top: 60%;
    &_value{
      position: absolute;
      background-color: #28C76F;
      width: 7px;
      height: 7px;
      border-radius: 6.25rem;
      right: 2px;
      top: 23%;
    }
}

@media(max-height:676px){
  .status{
    right:1.4%;
  }
}

</style>
