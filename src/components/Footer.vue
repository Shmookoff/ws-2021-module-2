<template>
  <footer class="bg-gray-200 text-gray-900">
    <div class="container grid gap-y-2 pb-12 pt-16 px-5 mx-auto">
      <div class="grid grid-cols-3 gap-x-28">
        <div class="flex flex-col gap-y-1">
          <RouterLink to="/" class="text-2xl font-bold">
            <img src="" alt="Logo" class="h-10 w-auto" />
          </RouterLink>
          <div class="flex flex-col gap-y-1 text-sm text-gray-600">
            <div>153654 Москва, ул. Чапаева, д.4</div>
            <div>
              Non labore laboris duis ea laboris fugiat reprehenderit Lorem
              laborum et.
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-y-1 text-lg font-semibold">
          <RouterLink to="/" class="hover:text-blue-500 w-fit">
            Приложение
          </RouterLink>
          <RouterLink to="/" class="hover:text-blue-500 w-fit">
            Политика конфиденциальности
          </RouterLink>
          <RouterLink to="/" class="hover:text-blue-500 w-fit">
            Пользовательское соглашение
          </RouterLink>
          <RouterLink to="/" class="hover:text-blue-500 w-fit">
            Договор оферты
          </RouterLink>
        </div>
        <div class="flex flex-col gap-y-1">
          <a href="tel:8 (800) 555-35-35" class="hover:text-blue-500 text-lg font-semibold w-fit">
            8 (800) 555-35-35
          </a>
          <div class="text-sm text-gray-600">
            Id tempor nostrud ea incididunt ipsum nostrud sunt ad exercitation.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>