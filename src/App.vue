<script>
import { defineAsyncComponent } from 'vue';
import StarRating from './components/StarRating.vue'

export default {
  name: 'App',
  components: {
    StarRating,
    MaterialButton: defineAsyncComponent(() => import('./components/MaterialButton.vue')),
    MaterialCardBox: defineAsyncComponent(() => import('./components/MaterialCardBox.vue')),
  },
  /**
   * When the ref property is added to the component, Vue adds a link to the referenced element to the $refs property inside the this property object of JavaScript.
   * From there, you have full access to the component.
   * This method is commonly used to manipulate HTML DOM elements without the need to call for document query selector functions.
   * However, the main function of this property is to give access to the Vue component directly, enabling you to execute functions and see the computed properties, variables, and changed variables of the component –
   * this is like having full access to the component from the outside.
   */
  methods: {
    resetVote() {
      this.$refs.starRating.vote(0)
      this.$refs.starRating.voted = false
    },
    forceVote() {
      this.$refs.starRating.vote(5)
    }
  }
}
</script>

<template>
  <div id="app">
    <MaterialCardBox header="Material Card Header" sub-header="Card Sub Header" show-media show-actions
      img-src="https://picsum.photos/300/200">
      <p>
        <StarRating ref="starRating" />
      </p>
      <p>
        The path of the righteous man is beset on all sides by the iniquities of the selfish and the
        tyranny of evil men.
      </p>
      <!-- <template v-slot:header>
              <strong>Card Title</strong><br>
              <span>Card Sub-Title</span>
            </template>
            <template v-slot:media>
              <img src="https://via.placeholder.com/350x150">
            </template>
            <p>Main Section</p>
            <template v-slot:action>
              <button>Action Button</button>
              <button>Action Button</button>
            </template> -->
      <template v-slot:action>
        <MaterialButton background-color="#027be3" text-color="#fff" @click="resetVote">
          Reset
        </MaterialButton>
        <MaterialButton background-color="#26a69a" text-color="#fff" is-flat @click="forceVote">
          Rate 5 Stars
        </MaterialButton>
      </template>
    </MaterialCardBox>
  </div>
</template>

<style>
body {
  font-size: 14px;
}
</style>
