<template>
  <div class="h-screen grid grid-flow-col grid-cols-2 bg-cover bg-traffic-img">
    <div></div>
    <div class="flex backdrop-blur-md bg-opacity-90">
      <div class="w-96 m-auto grid gap-y-7 bg-white text-gray-900 p-5">
        <slot />
      </div>
    </div>
  </div>
</template>