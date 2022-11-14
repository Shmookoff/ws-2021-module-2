<script lang="ts" setup>
import { seatStore } from "@/stores/seat";
import { ref } from "vue";

export interface ISeat {
  plate: string;
}
const props = defineProps<ISeat>();

const taken = ref(false);

const onClick = () => {
  if (seatStore.value.currentPassenger) {
    if (!taken.value) {
      taken.value = true;
      seatStore.value.currentPassenger.seat = props.plate;
    } else if (
      taken.value &&
      props.plate === seatStore.value.currentPassenger.seat
    ) {
      taken.value = false;
      seatStore.value.currentPassenger.seat = null;
    }
  }
};
</script>

<template>
  <div class="p-1" @click="onClick">
    <div
      class="flex justify-center bg-blue-500 text-gray-50 border-4 border-blue-300"
      :class="{
        'bg-gray-400': taken,
        'hover:ring-2 hover:bg-blue-700': !taken,
      }"
    >
      <div class="text-sm p-0.5">
        {{ plate }}
      </div>
    </div>
  </div>
</template>
