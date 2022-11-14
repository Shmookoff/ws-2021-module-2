import type { ISeatPassenger } from "@/components/Seat/SeatPassenger.vue";
import { ref } from "vue";

export interface ISeatStore {
  currentPassenger?: ISeatPassenger;
}

export const seatStore = ref<ISeatStore>({});
