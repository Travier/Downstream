<template>
  <v-text-field
    color="secondary"
    v-model="query"
    solo
    dense
    flat
    label="Search Collection...."
    clearable
    hide-details
    hide-selected
    light
  ></v-text-field>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CollectionSearchInput',
  computed: {
    ...mapGetters({
      collection: 'collection/collectionSearchResults',
    }),
  },
  data: () => {
    return {
      items: [],
      query: '',
      value: '',
    }
  },
  mounted() {},
  methods: {},
  watch: {
    query: function(val) {
      this.$store.commit('collection/SET_SEARCH_QUERY', val)

      let indexes = _.map(this.collection, 'guid')
      this.$store.dispatch('player/setGuidIndex', indexes)
    },
  },
}
</script>
