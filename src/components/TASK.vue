<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'TASK',
});
</script>

<template>
<div>
  <div class="w-[383.69px] h-[69px] mt-[44px] ml-[60px]">
    <div class="w-[376px] h-[23px] text-[#333333] text-[20px] font-roboto font-semibold leading-[23.44px]"><span>Задача</span></div>
    <div class="w-[101px] h-[36px] mt-[10px] bg-[#EDF5F1] flex justify-center rounded-[5px] text-[14px] leading-[16.41px] font-roboto text-[#333333]"><button>
      <router-link to="/ARCHIVE_TASKS">Вернуться</router-link>
    </button></div>
  </div>

  <div class="w-[1220px] mt-[20px] ml-[60px]">
      <div class="w-[1220px] h-[34px] flex">
          <div class="flex w-[165px] h-[34px]">
            <div class=" text-[#333333] font-roboto text-[16px] leading-[18.75px] font-medium mt-[7px]"><span>Фамилия И. О.</span></div>
          </div>
          <div class="text-[#333333] font-roboto text-[16px] leading-[18.75px] font-medium ml-[936px] mt-[7px]"><span>18 января 13:15 </span></div>
      </div>
      <div class="mt-[20px] w-[1220px] h-[220px] font-roboto text-[14px] leading-[16.41px] text-[#333333]">
        <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезызвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</p>
        <p class="mt-[20px]">По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некоторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.</p>
        <p class="mt-[20px]">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезызвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</p>
        <p class="mt-[20px]">По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некоторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.</p>
      </div>
  </div>

  <div class="mt-[50px] ml-[60px]">
    <div class="flex mt-[20px] font-roboto text-[14px] leading-[16.41px] text-[#333333]">
      <img class="size-[16px]" src="../components/IMG/Checkboxes.svg">
      <span class="ml-[25px]">Вариант 1</span>
    </div>
    <div class="flex mt-[20px] font-roboto text-[14px] leading-[16.41px] text-[#333333]">
      <img class="size-[16px]" src="../components/IMG/Checkboxes.svg">
      <span class="ml-[25px]">Вариант 2</span>
    </div>
    <div class="flex mt-[20px] font-roboto text-[14px] leading-[16.41px] text-[#333333]">
      <img class="size-[16px]" src="../components/IMG/Checkboxes.svg">
      <span class="ml-[25px]">Вариант 3</span>
    </div>
    <div class="flex mt-[20px] font-roboto text-[14px] leading-[16.41px] text-[#333333]">
      <img class="size-[16px]" src="../components/IMG/Checkboxes.svg">
      <span class="ml-[25px]">Вариант 4</span>
    </div>
  </div>

  <div class="w-[1220px] h-[284px] mt-[209px] ml-[60px] border-[1px] p-[20px] rounded-[10px]">
      <div class="w-[1180px] h-[93px] flex">
        <div class="size-[34px] rounded-[25px] bg-slate-600"><img src="../components/IMG/Rectangle 6.svg"></div>
        <div class="ml-[10px]"><img src="../components/IMG/otvet_FORUM.svg"></div>
      </div>
       <div class="flex bg-[#4BA285] w-[137px] h-[32px] rounded-[5px] mt-[119px] ml-[1043px] justify-center text-white font-roboto text-[14px] leading-[16.41px]"><button>Добавить ответ</button></div>
  </div>
</div>
</template>
