<template>
<v-row no-gutters class="content-grid">
    <v-col
    cols="12" 
    class="d-flex">
        <v-col  
        cols="3" 
        style="height:9rem;" 
        v-for="(item, i) in [0,1,2,3]" 
        :key="i">
        <div class="divs" :style="{background: $vuetify.theme.themes[theme].grid}"></div>
        </v-col>
    </v-col>
    <v-col 
    cols="12" 
    class="d-flex" >
        <v-col  
        cols="4" 
        style="height:18rem;" 
        v-for="(item,i) in [0,1,2]"
        :key="'A' + i">
            <div class="divs" :style="{background: $vuetify.theme.themes[theme].grid}"></div>
        </v-col>
    </v-col>
    <span class="title-grids" :style="{color: $vuetify.theme.themes[theme].titleGrid}">New Group</span>
    <v-col 
    cols="12" 
    class="d-flex">
        <v-col  
        cols="4" 
        style="height:15rem" >
            <div class="divs" :style="{background: $vuetify.theme.themes[theme].grid}"></div>
        </v-col>
        <v-col 
        cols="8"  
        style="height:15rem">
            <div class="divs" color="grid" :style="{background: $vuetify.theme.themes[theme].grid}"></div>
        </v-col>
    </v-col>
</v-row>
</template>

<script>
import global from '../mixins/global.js';
export default{
    name: "ContentGrid",
    mixins:[global]
}
</script>

<style lang="scss">
    .col .col-3, .col .col-4, .col .col-8, span{
        padding: .3rem .3rem;
    }
    .divs{
        
        border-radius:4px;
        height:100%; 
        width:100%;
    }
    .title-grids{
        font-size: 1.4rem;
    }
</style>