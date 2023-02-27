<script>
import StarRatingInput from './StarRatingInput.vue'
import StarRatingDisplay from './StarRatingDisplay.vue'
import StarRatingDisplayMixin from '../mixins/starRatingDisplay.js'

export default {
  name: 'StarRating',
  components: { StarRatingDisplay, StarRatingInput },
  mixins: [StarRatingDisplayMixin],
  /**
   * Component Injection
   */
  // To check whether the component is a child of the specific component
  provide: {
    starRating: true
  },
  data: () => ({
    rank: 0,
    voted: false
  }),
  computed: {
    starComponent() {
      if (!this.voted) return StarRatingInput
      return StarRatingDisplay
    }
  },
  methods: {
    vote(rank) {
      this.rank = rank
      this.voted = true
    }
  }
}
</script>

<template>
  <!-- <div>
          <StarRatingInput
            v-if="!voted"
            :max-rating="maxRating"
            @final-vote="vote"
          >
            Rate this Place
          </StarRatingInput>
          <StarRatingDisplay
            v-else
            :max-rating="maxRating"
            :rating="rating || rank"
            :votes="votes"
          />
        </div> -->
  <component
    :is="starComponent"
    :max-rating="maxRating"
    :rating="rating || rank"
    :votes="votes"
    @final-vote="vote"
  >
    Rate this Place
  </component>
</template>
