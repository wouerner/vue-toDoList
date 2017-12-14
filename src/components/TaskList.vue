<template>
 <v-list>
     <v-list-tile avatar v-for="item in todoList" v-bind:key="item.title" @click="">
         <v-list-tile-action>
             <v-icon v-if="item.icon" color="pink">star</v-icon>
         </v-list-tile-action>
         <v-list-tile-content>
             <v-list-tile-title v-text="item.title"></v-list-tile-title>
         </v-list-tile-content>
         <v-list-tile-avatar>
             <img v-bind:src="item.avatar"/>
         </v-list-tile-avatar>
     </v-list-tile>
 </v-list>
</template>
<script>
  export default {
    props: ['todoList']
  }
</script>
<style>
/* omitido */
</style>
