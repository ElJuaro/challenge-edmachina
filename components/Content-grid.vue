<template>
<v-row no-gutters class="content-grid">
    <v-col
    cols="12" 
    class="d-flex" style="gap:1.25rem">
        <v-col  
        v-for="(item, i) in [0,1,2,3]" 
        :key="i"
        class="first-row_column">
        </v-col>
    </v-col>
    <v-col 
    cols="12" 
    class="d-flex mt-5" style="gap:1rem">
        <v-col   
        v-for="(item,i) in [0,1,2]"
        :key="'A' + i"
        class="second-row_column" >
        </v-col>
    </v-col>
    <span class="title-grids my-5" >New Group</span>
    <v-col 
    cols="12" 
    class="d-flex" style="gap:0.9rem">
        <div 
        class="three-row_column_1">
        </div>
        <v-col 
        class="three-row_column_2">
        </v-col>
    </v-col>
</v-row>
</template>

<script>
export default{
    name: "ContentGrid",
}
</script>

<style lang="scss">
    .content-grid{
        .title-grids{
            width:8.65rem;
        }
    }
    .span{
        padding: .3rem .3rem;
    }

    .first-row_column{
        height:10.2rem;
        width:16.7rem;
        border-radius:6px;
        gap:1.25rem;
    }

    .second-row_column{
        width:22.8rem;
        height: 22.3rem;
        border-radius: 6px;
    }

    .three-row_column{
        &_1{
            width:22.8rem;
            height:22.3rem;
            border-radius:6px;
        }
        &_2{
            height:22.3rem;
            width:46.7rem;
            border-radius:6px;
        }
    }


</style>