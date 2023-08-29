<script setup lang="ts"></script>

<template>
  <section class="home-bg">
    <div
      class="flex flex-col items-center justify-center h-full bg-[#00000060] p-[50px]"
    >
      <h1 class="text-center text-[80px] text-[#fff] font-poppins">Welcome</h1>
      <button
        class="mt-[40px] text-center text-[24px] font-poppins rounded px-[24px] py-[24px] bg-green-500 text-[#fff]"
        @click="$router.push('/builder')"
      >
        Let's Build
      </button>
    </div>
  </section>
</template>

<style scoped>
.home-bg {
  width: 100%;
  height: 100vh;
  background: url("/images/index-hero.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
