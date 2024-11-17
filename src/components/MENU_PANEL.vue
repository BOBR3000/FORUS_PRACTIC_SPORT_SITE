<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MENU_PANEL',
});
</script>


<template>
  <div class="w-[300px] h-[1040px] mt-[20px] ml-[20px]">

    <div class="w-[300px] h-[72px] rounded-[10px] bg-[#4BA285]">
        <div class="flex">
          <div class="size-[32px] mt-[20px] ml-[20px]"><img src="../components/IMG/medicine_icon-icons.com_66070 2.svg"></div>
          <div class="font-roboto font-semibold text-[20px] leading-[23.44px] text-white mt-[24px] ml-[29px]"><p>
            <router-link to="/">Medical School</router-link>
          </p></div> 
        </div>
    </div>

    <div class="w-[300px] h-[157px] rounded-[10px] bg-[#4BA285] p-[20px] mt-[18px]">
        <div class="flex justify-center w-[260px] h-[19px]">
          <span class="font-roboto font-semibold text-[16px] leading-[18.75px] text-center text-white">Профиль</span>
        </div>
        <div class="w-[260px] h-[34px] flex mt-[16px] gap-[16px]">
            <div class="size-[34px] rounded-[25px]"><img src="../components/IMG/Rectangle 6.svg"></div>
            <div class="font-roboto text-[14px] leading-[16.41px] text-white"><p>Фамилия Имя Отчество</p></div>
            <div class="w-[55px] h-[23px] "><img src="../components/IMG/Group 1.svg"></div>
        </div>
        <div class="flex justify-center w-[260px] h-[32px] rounded-[5px] pt-[8px] pl-[16px] pr-[16px] pb-[8px] bg-[#6EBB91] mt-[16px]">
          <div class="text-white text-[14px] leading-[16.41px] font-roboto"><span>Редактировать</span></div>
        </div>
    </div>

    <div  class="w-[300px] h-[324px] rounded-[10px] bg-[#4BA285] p-[20px] mt-[18px]">
        <div class="font-roboto font-semibold text-[16px] text-white leading-[18.75px] flex text-center justify-center">
          <span>Информация</span></div>
        <div class="font-roboto text-[14px] leading-[16.41px] mt-[10px] text-white">
          <div class="mt-[10px]"><span>О школе</span></div>
          <div class="mt-[10px]"><span>Правила</span></div>
          <div class="mt-[10px]"><span>
            <router-link to="/FORUM">Форум</router-link>
          </span></div>
          <div class="mt-[10px]"><span>Олимпиады</span></div>
        </div>
    </div>


    <div  class="w-[300px] h-[252px] rounded-[10px] bg-[#4BA285] p-[20px] mt-[18px]">
        <div class="font-roboto font-semibold text-[16px] text-white leading-[18.75px] flex text-center justify-center">
          <span>Задачник</span></div>
        <div class="font-roboto text-[14px] leading-[16.41px] mt-[10px] text-white">
          <div class="mt-[10px]"><span>
            <router-link to="/ARCHIVE_TASKS">Архив задач</router-link>
          </span></div>
          <div class="mt-[10px]"><span>
            <router-link to="/SYSTEM_INFO">Состояние системы</router-link>
          </span></div>
          <div class="mt-[10px]"><span>Рейтинг</span></div>
          <div class="mt-[10px]"><span>Курсы</span></div>
        </div>
    </div>

    <div  class="w-[300px] h-[163px] rounded-[10px] bg-[#4BA285] p-[20px] mt-[18px]">
        <div class="font-roboto font-semibold text-[16px] text-white leading-[18.75px] flex text-center justify-center">
          <span>Методичка</span></div>
        <div class="text-[14px] leading-[16.41px] mt-[10px] text-white font-roboto">
          <div class="mt-[10px]"><span>Новичкам</span></div>
          <div class="mt-[10px]"><span>Статьи</span></div>
          <div class="mt-[10px]"><span>Ссылки</span></div>
          <div class="mt-[10px]"><span>Работа в системе</span></div>
        </div>
    </div>

  </div>
</template>