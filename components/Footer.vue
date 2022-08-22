<template>
<div class="container-footer" :class="{marginMenu : drawerIsOpen}">
    <v-footer
    :padless="false"
    height="40"
    >
        <v-card
        fxLayout="row"
        tile
        width="100%"
        height="100%"
        class="color-footer d-flex align-center">
        <v-card-text
        class=" ml-5 white--text"
        style="fontSize:14px;"
        height="100%">
            COPYRIGHT @ 2022 <strong>EdMachina</strong>
        </v-card-text>
        </v-card>
    </v-footer>
</div>
</template>

<script>
import { EventBus } from '@/event-bus';
export default {
    name: "Footer",
    data () {
        return {
            drawerIsOpen : false,
        }
    },

    created(){
        EventBus.$on('changeIt', (data) => {
            this.drawerIsOpen = data;
        })
    }, 
};

</script>

<style lang="scss">
.v-footer{
    padding:0 !important;  
    .v-card__text{
        padding: 0 !important;
    }
}

.container-footer{
    margin-top:10.6rem;
    width:100%;
    bottom:0;
}

.marginMenu{
    margin-left:16.2rem;
}
</style>