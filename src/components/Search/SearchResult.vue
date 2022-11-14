<script lang="ts" setup>
import Value from "@/components/Value.vue";
import { computed } from "vue";

export interface ISearchResult {
  id: number;
  flight: string;
  aircraft: string;
  departure: Date;
  arrival: Date;
  cost: number;
  picked?: boolean;
}

const props = withDefaults(defineProps<ISearchResult>(), {
  picked: false,
});

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

const timeFormatOptions: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
};

const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  ...dateFormatOptions,
  ...timeFormatOptions,
};

const removeTimezone = (date: Date) => {
  const offset = date.getTimezoneOffset() * 60000;
  if (offset >= 0) return new Date(date.getTime() - offset);
  return new Date(date.getTime() + offset);
};

const departureDateTime = computed(() => {
  return props.departure.toLocaleTimeString("ru-RU", dateTimeFormatOptions);
});

const arrivalTime = computed(() => {
  return props.arrival.toLocaleTimeString("ru-RU", timeFormatOptions);
});

const flightTime = computed(() => {
  let difference = new Date(
    props.arrival.valueOf() - props.departure.valueOf()
  );

  difference = removeTimezone(difference);
  return difference.toLocaleTimeString("ru-RU", timeFormatOptions);
});
</script>
<template>
  <div
    class="flex justify-center bg-blue-500 border-4 border-blue-300 hover:ring-2 hover:bg-blue-700"
    :class="{ 'ring-4 ring-blue-300': picked }"
  >
    <div class="grid grid-flow-col gap-x-10 p-2">
      <Value
        label="Номер рейса"
        :value="flight"
        variant="secondary"
        :size="picked ? 'base' : 'sm'"
      />
      <Value
        label="Самолет"
        :value="aircraft"
        variant="secondary"
        :size="picked ? 'base' : 'sm'"
      />
      <Value
        label="Дата и время отправления"
        :value="departureDateTime"
        variant="secondary"
        :size="picked ? 'base' : 'sm'"
      />
      <Value
        label="Время прибытия"
        :value="arrivalTime"
        variant="secondary"
        :size="picked ? 'base' : 'sm'"
      />
      <Value
        label="Время в полете"
        :value="flightTime"
        variant="secondary"
        :size="picked ? 'base' : 'sm'"
      />
      <Value
        label="Общая цена"
        :value="`${cost} руб.`"
        variant="secondary"
        :size="picked ? 'base' : 'sm'"
      />
    </div>
  </div>
</template>
