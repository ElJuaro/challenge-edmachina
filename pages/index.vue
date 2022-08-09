<template>
  <v-app id="app" :style="{background: $vuetify.theme.themes[theme].body}">
  <div class="contain-home">
   <v-main>
    <HeaderVue />
    <ContentVue />
    <FooterVue />
  </v-main>
 </div>
  </v-app>
</template>

<script>
import HeaderVue from '@/components/Header.vue'
import MenuVue from '@/components/Menu.vue'
import ContentVue from '@/components/Content.vue'
import FooterVue from '@/components/Footer.vue'
export default {
    name: "App",
    components: {
    HeaderVue,
    MenuVue,
    ContentVue,
    FooterVue
    },
    computed:{
        theme(){
          return (this.$vuetify.theme.dark) ? 'dark' : 'light'
        }
    }
};
</script>
<style>

html{
  font-size:100%;
  line-height: 1.5;
  overflow-y: auto !important;
}
#app{
    
  background-color:  #f4f4f4;
   font-family: 'Montserrat';
}

.contain-home{
  height:100%;
}

.v-main{
  padding:48px 0px 0px 0px !important;
  height:100%;
}

.material-icons, .material-icons-outlined, .material-icons-round{
    font-size: 1.2rem !important;
}
</style>
