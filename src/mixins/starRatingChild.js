/**
 * Component Injection
 */
// ! This function will log an error if this component is not a child of the StarRating component:
// if the parent component does not provide this value, it will log an error to the console.
export default {
  inject: {
    starRating: {
      default() {
        console.error('StarRatingDisplay need to be a child of StarRating')
      }
    }
  }
}
