<script lang="ts" setup>
import { computed } from "vue";
import SearchResult, { type ISearchResult } from "./SearchResult.vue";

interface ISearchResultGroup {
  title: string;
  results: ISearchResult[];
}
const props = defineProps<ISearchResultGroup>();

const emits = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (event: "result-picked", value?: ISearchResult): void;
}>();

const pickedOrAll = computed(() => {
  const picked = props.results.find((result) => result.picked);
  return picked ? [picked] : props.results;
});

const resultClicked = (result: ISearchResult) => {
  result.picked = !result.picked;
  emits("result-picked", result.picked ? result : undefined);
};
</script>

<template>
  <div class="flex flex-col gap-y-5">
    <h2 class="text-2xl font-bold text-gray-700">{{ title }}</h2>
    <div class="grid gap-5">
      <SearchResult
        v-for="result in pickedOrAll"
        :key="result.id"
        v-bind="result"
        @click="resultClicked(result)"
      />
    </div>
  </div>
</template>
