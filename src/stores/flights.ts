import type { ISearchResult } from "@/components/Search/SearchResult.vue";
import { ref, watch } from "vue";

export interface IFlightsStore {
  to?: ISearchResult;
  back?: ISearchResult;
}

export const flightsStore = ref<IFlightsStore>({});

watch(
  () => flightsStore.value.to,
  (to) => {
    if (!to) {
      resetFlightsStoreBack();
    }
  }
);

export const updateFlightsStore = (data: IFlightsStore) => {
  flightsStore.value = data;
};

export const resetFlightsStoreTo = () => {
  if (flightsStore.value.to) {
    flightsStore.value.to.picked = false;
    flightsStore.value.to = undefined;
  }
};

export const resetFlightsStoreBack = () => {
  if (flightsStore.value.back) {
    flightsStore.value.back.picked = false;
    flightsStore.value.back = undefined;
  }
};

export const resetFlightsStore = () => {
  resetFlightsStoreTo();
  resetFlightsStoreBack();
};
