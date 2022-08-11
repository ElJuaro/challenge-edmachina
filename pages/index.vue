<template>
  <v-app id="app">
  <div class="contain-home">
    <HeaderVue />
   <v-main>
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
};
</script>
<style>

html{
  font-size:100%;
  line-height: 1.5;
  overflow-y: auto !important;
}
#app{
  font-family: 'Montserrat';
  font-style: normal;
}

.contain-home{
  height:100%;
}

.v-main{
  padding:63px 0px 0px 0px !important;
  height:100%;
}

</style>
