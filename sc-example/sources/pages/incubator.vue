<template>
  <div>
    <h2>
      Incubator
    </h2>

    <div class="my-tree">
      <!-- recursive component -->
      <tree :root="root"></tree>
    </div>
  </div>
</template>

<script>
  import Tree from '../components/tree.vue'

  export default {

    data () {
      return {
        root: {
          id: 1,
          name: 'root',
          children: [
            {
              id: 2,
              name: '2-1',
              children: [
                {
                  id: 4,
                  name: '3-1'
                },
                {
                  id: 5,
                  name: '3-2'
                }
              ]
            },
            {
              id: 3,
              name: '2-2'
            }
          ]
        }
      }
    },

    components: {
      Tree
    }
  }
</script>