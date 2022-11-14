import type { ISearchResult } from "@/components/Search/SearchResult.vue";
import { ref } from "vue";

export interface IFlightsConfirmedStore {
  to: ISearchResult;
  back?: ISearchResult;
}

export const flightsConfirmedStore = ref<{ data?: IFlightsConfirmedStore }>({});
