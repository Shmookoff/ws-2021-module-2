<script lang="ts" setup>
import SearchResultGroup from "@/components/Search/SearchResultGroup.vue";
import { searchStore } from "@/stores/search";
import { ref } from "vue";
import { InputField, InputSelect } from "../Input";
import type { ISearchResult } from "./SearchResult.vue";
import { flightsStore } from "@/stores/flights";

export interface ISearchResultPicker {
  to: ISearchResult[];
  back: ISearchResult[];
}
defineProps<ISearchResultPicker>();

const sort = ref();
</script>

<template>
  <div>
    <div class="flex gap-x-10">
      <div class="flex gap-x-5">
        <div>Время вылета</div>
        <div class="flex gap-x-2">
          <InputField id="filter-from" type="time" label="С" />
          <InputField id="filter-to" type="time" label="По" />
        </div>
      </div>
      <div>
        <div>Сортировать по</div>
        <InputSelect
          id="sort"
          name="sort"
          :options="['Самый дешевый', 'Самый быстрый']"
          v-model="sort"
        />
      </div>
    </div>
    <div class="grid gap-y-5">
      <SearchResultGroup
        v-if="to.length"
        title="Туда"
        :results="to"
        @result-picked="flightsStore.to = $event"
      />
      <SearchResultGroup
        v-if="flightsStore.to && searchStore.data?.returning"
        title="Обратно"
        :results="back"
        @result-picked="flightsStore.back = $event"
      />
    </div>
  </div>
</template>
