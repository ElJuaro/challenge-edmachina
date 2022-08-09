<template>
<div class="container-footer">
    <v-footer
    :padless="false"
    height="40"
    >
        <v-card
        fxLayout="row"
        tile
        width="100%"
        height="100%"
        class="text-center d-flex align-center"
        :style="{background: $vuetify.theme.themes[theme].footer}">
        <v-card-text
        class="white--text"
        height="100%">
            COPYRIGHT @ 2022 <strong>EdMachina</strong>
        </v-card-text>
        </v-card>
    </v-footer>
</div>
</template>

<script>
import global from '../mixins/global.js';
export default {
    name: "Footer",
    mixins:[global],
};

</script>

<style lang="scss">
.v-footer{
    padding:0 !important;  
    .v-card__text{
        padding: 0 !important;
    }
}

@media(min-height:969px){
    .container-footer{
        position:absolute !important;
    }
}


.container-footer{
    position:initial;
    width:100%;
    bottom:0;
}
</style>