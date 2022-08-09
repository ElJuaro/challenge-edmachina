export default {
    computed:{
        theme(){
          return (this.$vuetify.theme.dark) ? 'dark' : 'light'
        }
    },
}