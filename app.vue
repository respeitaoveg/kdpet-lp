<template>
  <main class="flex flex-col gap-16 md:gap-20 p-4 md:p-10 md:pl-[200px] items-center md:items-start bg-primary text-white">
    <div class="mt-5 max-w-[200px]">
      <img src="/kdpet-logo.png" alt="" srcset="" width="100%" />
    </div>
    <div>
      <p class="text-5xl md:text-8xl text-center md:text-start font-bold">ESTAMOS</p>
      <p class="text-5xl md:text-8xl text-center md:text-start font-bold">CHEGANDO!</p>
    </div>
    <div class="flex flex-col gap-5 items-center md:items-start">
      <h4 class="text-xl text-center">Entre em nossa lista de espera.</h4>
      <form id="submit-l" action="submit"
        class="w-[300px] md:w-full md:max-w-[720px] flex flex-col md:flex-row gap-5 items-center"
        @submit="handleSubmit"
      >
        <input v-model="name" type="text" placeholder="Nome" />
        <input v-model="email" type="text" placeholder="E-mail" />
        <button type="submit" class="kdpet-button mt-10" role="button">
          Enviar
        </button>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
const name = ref('')
const email = ref('')

async function handleSubmit(e: Event) {
  e.preventDefault()

  const res = await useFetch('/api/brevo', {
    headers: {
      value: 'application/json'
    },
    method: 'POST',
    body: { name: name.value, email: email.value }
  })
}

</script>

<style scoped>
input {
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  padding: 15px;
  padding-left: 25px;
  background-color: transparent;
  outline: 2px solid #fff;
  border-radius: 50px;
}

input::placeholder {
  color: #bababa;
}

.kdpet-button {
  appearance: button;
  background-color: #EDEDED;
  border: solid transparent;
  border-radius: 50px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 18px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter 0.2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;
}

.kdpet-button:after {
  background-clip: padding-box;
  background-color: black;
  border: solid transparent;
  border-radius: 50px;
  border-width: 0 0 2px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

.kdpet-button:main,
.kdpet-button:focus {
  user-select: auto;
}

.kdpet-button:hover:not(:disabled) {
  filter: brightness(1.1);
  -webkit-filter: brightness(1.1);
}

.kdpet-button:disabled {
  cursor: auto;
}

.kdpet-button:active {
  border-width: 4px 0 0;
  background: none;
}
</style>
