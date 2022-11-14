<script lang="ts" setup>
import { InputSelect } from "@/components/Input";
import { ref, watch } from "vue";

enum Car {
  BMW = "BMW",
  Mercedes = "Mercedes",
  Audi = "Audi",
}

const carToBonus = {
  [Car.BMW]: 100,
  [Car.Mercedes]: 200,
  [Car.Audi]: 300,
};

const cars = Object.keys(carToBonus);

const car = ref(Car.BMW);

const medianPrice = 500;

const finalPrice = ref(medianPrice - carToBonus[car.value]);

watch(car, (newCar) => {
  finalPrice.value = medianPrice - carToBonus[newCar];
});
</script>

<template>
  <section class="bg-traffic-img">
    <div class="backdrop-blur-sm py-28">
      <div class="container-md mx-auto p-5 bg-gray-100">
        <div class="text-gray-900 text-4xl mb-5">
          <span class="font-bold">Владей поездкой,</span> а не автомобилем!
        </div>
        <div class="grid grid-flow-col grid-cols-2 gap-x-10">
          <div class="grid gap-y-5">
            <div class="grid gap-y-1">
              <div class="text-2xl">Выбери автомобиль</div>
              <div class="text-gray-700">
                Автомобиль, подходящий именно тебе
              </div>
              <div class="m-2">
                <InputSelect v-model="car" id="car" name="car" :options="cars" variant="secondary" />
              </div>
            </div>
            <div class="grid gap-y-1">
              <div class="text-2xl">Накапливай баллы</div>
              <div class="text-gray-700">Бонусные баллы за каждую поездку</div>
              <div class="
                  bg-gray-50
                  text-gray-900
                  border border-gray-200
                  m-2
                  p-5
                  flex flex-col
                ">
                <div class="mx-auto">
                  <div class="text-4xl">
                    <span class="font-bold">{{ carToBonus[car] }}</span>
                    баллов
                  </div>
                  <div class="mx-auto w-fit">за поездку на {{ car }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="text-2xl">Бронируй дешевле</div>
            <div class="text-gray-700">
              Баллы можно потратить на любую поездку
            </div>
            <div class="bg-blue-500 text-gray-50 h-full m-2 p-5">
              <div class="flex flex-col h-full">
                <div class="m-auto">
                  <div class="w-fit mx-auto text-xl">
                    {{ medianPrice }}₽* - {{ carToBonus[car] }} баллов =
                  </div>
                  <div class="w-fit mx-auto text-6xl">
                    <span :style="`--final-price: ${finalPrice}`" class="font-bold final-price-transition"></span>
                    рублей
                  </div>
                </div>
                <div class="text-sm">*средняя цена поездки в Москве</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@property --final-price {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

.final-price-transition {
  transition: --final-price 1s;
  counter-reset: num var(--final-price);
}

.final-price-transition::after {
  content: counter(num);
}
</style>