<template>
  <div id="movie-container">
    <!--  <ul>
      <li style="color: white" v-for="(movie, index) in movies" :key="movie.id">
        Index: {{ index }} - {{ movie.name }}
      </li>
    </ul> -->
    <movie v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import Movie from "./Movie";
export default {
  components: {
    Movie,
  },
  data() {
    return {
      // movies: [],
    };
  },
  computed: {
    movies() {
      return this.$store.getters.getMovies;
    },
  },
  /* created() {
    this.movies = this.$store.getters.getMovies;
  }, */
  created() {
    this.$store.dispatch("fetchMovies");
  },
};
</script>

<style lang='scss' scoped>
#movie-container {
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 3;
  justify-content: center;
}
</style>