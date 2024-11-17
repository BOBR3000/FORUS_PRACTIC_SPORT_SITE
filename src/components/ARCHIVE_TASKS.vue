<script>

import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'ARCHIVE_TASK',
  setup() {
    const router = useRouter();

    const goToAbout = () => {
      router.push('/TASK');
    };

    return { goToAbout };
  },
});
</script>
<template>
 <div>
		<div class="flex">
			<div class="w-[739px] h-[91px] mt-[44px] ml-[60px]">
				<div>
					<div
						class="w-[215px] h-[23px] font-roboto font-semibold text-[20px] leading-[23.44px] text-[#333333]"
					>
						<span>Архив задач</span>
					</div>
					<div class="w-[57px] h-[4px] bg-[#4BA285] rounded-[5px] mt-[8px]"></div>
					<div
						class="w-[739px] h-[48px] font-roboto font-normal text-[14px] leading-[16.41px] mt-[8px] text-[#333333]"
					>
						<p>
							По своей сути рыбатекст является альтернативой традиционному lorem
							ipsum, который вызывает у некоторых людей недоумение при попытках
							прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском
							языке наполнит любой макет непонятным смыслом и придаст неповторимый
							колорит советских времен.
						</p>
					</div>
				</div>
			</div>
			<div class="flex w-[216.79px] h-[41px] ml-[251px] mt-[105px] rounded-[5px]">
						<div class="size-[18px]"><img src="../components/IMG/search 1.svg"></div>
						<div class="text-[14px] leading-[17.07px] text-[#A0A0A0] ml-[11px]"><span>Поиск</span></div>
			</div>
	
			<div class="flex justify-between w-[230.81px] h-[41px] ml-[16.19px] mt-[103px] rounded-[5px]">
				<div class="size-[24px]"><img src="../components/IMG/sorting_left_icon_227394 1.svg"></div>
				<div class="text-[#333333] text-[14px] leading-[17.07px] mt-[3.5px]"><span>Тема</span></div>
				<div class="size-[18px] mt-[0.5px]"><img src="../components/IMG/chevron-down 1.svg"></div>
			</div>
		</div>

		<div class="flex">
			<div class="w-[1437px] h-[881px] mt-[20px] ml-[60px]">
				<div class="flex w-[1437px] h-[36.29px] font-roboto font-medium text-[#000000] text-[14px] leading-[16.41px]">
          <div class="w-[84px] h-[36px] text-center pt-[10px] pl-[16px] pb-[10px] pr-[10px]"><span>Решено</span></div>
					<div class="w-[88px] h-[36px] ml-[16px] text-center pt-[10px] pl-[16px] pb-[10px] pr-[10px]"><span>ID</span></div>
					<div class="w-[306px] h-[36px] ml-[16px] pt-[10px] pl-[16px] pb-[10px] pr-[10px]"><span>Название задачи</span></div>
					<div class="w-[400px] h-[36px] ml-[16px] pt-[10px] pl-[16px] pb-[10px] pr-[10px]"><span>Тема</span></div>
					<div class="w-[80px] h-[36px] ml-[16px] pt-[10px] pl-[16px] pb-[10px] pr-[10px] text-center"><span>Разбор</span></div>
					<div class="w-[107px] h-[36px] ml-[16px] text-center pt-[10px] pl-[16px] pb-[10px] pr-[10px]"><span>Сложность</span></div>
          <div class="w-[116px] h-[36px] ml-[16px] pt-[10px] pl-[16px] pb-[10px] pr-[10px] text-center"><span>Решаемость</span></div>
          <div class="text-center pt-[10px] w-[144px] h-[36px] ml-[16px] pl-[16px] pb-[10px] pr-[10px] "><span>Принято</span></div>
				</div>
				
				<div class="w-[1377px] h-[834.63px] mt-[10px] ml-[16px]">
					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>
					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>

					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>

					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>

					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>

					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>

					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>

					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>

					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>

					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>

					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>
					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>
					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>
					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>
					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>
					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>
					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>
					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>
					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>
					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>
					<div @click="goToAbout" class="flex w-[1377px] h-[16px] text-[#000000] font-roboto text-[14px] leading-[16.41px] mt-[25px]
               bg-white hover:bg-[#EDF5F1] transition duration-300">
              <div class="w-[19px] h-[16px]"><span>Да</span></div>
              <div class="w-[8px] h-[16px] ml-[105px]"><span>1</span></div>
              <div class="w-[233px] h-[16px] ml-[72px]"><span>Какое-то длинное название задачи</span></div>
              <div class="w-[203px] h-[16px] ml-[89px]"><span>Какая-то длинная тема задачи</span></div>
              <div class="w-[30px] h-[16px] ml-[216px]"><span>Есть</span></div>
              <div class="w-[19px] h-[16px] ml-[66px]"><span>1%</span></div>
              <div class="w-[27px] h-[16px] ml-[106px]"><span>99%</span></div>
              <div class="w-[56px] h-[16px] ml-[130px]"><span>1979907</span></div>
          </div>

				</div>



			</div>
			<div class="bg-[#4BA285] w-[6px] h-[175px] mt-[57px] ml-[11px] rounded-[10px] hover:translate-y-[-2px]"></div>
		</div>
	</div>
</template>