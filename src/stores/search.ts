import { ref } from "vue";

export interface ISearchStore {
  flightFrom: string;
  flightTo: string;
  departing: string;
  returning?: string;
  passengers: number;
}

export const searchStore = ref<{ data: ISearchStore | undefined }>({
  data: undefined,
});

export const updateSearchStore = (data: ISearchStore) => {
  searchStore.value = { data };
};
