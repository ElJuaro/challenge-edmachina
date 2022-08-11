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
        class="color-footer text-center d-flex align-center">
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
export default {
    name: "Footer",
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
</style>