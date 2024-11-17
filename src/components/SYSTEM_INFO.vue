<script>
import { defineComponent } from 'vue';
import SYSTEM_INFO_PART from './SYSTEM_INFO_PART.vue';
export default defineComponent({
  name: 'SYSTEM_INFO',
	components: {
		SYSTEM_INFO_PART,
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
						<span>Состояние системы</span>
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
			<div class="flex w-[216px] h-[41px] ml-[17px] mt-[105px] rounded-[5px]">
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
			<div class="w-[1220px] h-[841px] mt-[20px] ml-[60px]">
				<div class="flex w-[1220px] h-[36px] font-roboto font-medium text-[#000000] text-[14px] leading-[16.41px]">
					<div class="w-[51px] h-[36px]"><span class="pt-[10px] pl-[16px] pr-[16px] pb-[10px]">ID</span></div>
					<div class="w-[276px] h-[36px] ml-[16px] text-center">
						<span class="pt-[10px] pl-[16px] pr-[16px] pb-[10px]">Дата</span></div>
					<div class="w-[156px] h-[36px] ml-[16px]"><span class="pt-[10px] pl-[16px] pr-[16px] pb-[10px]">№ Задачи</span></div>
					<div class="w-[480px] h-[36px] ml-[16px]"><span class="pt-[10px] pl-[16px] pr-[16px] pb-[10px]">Автор решения</span></div>
					<div class="w-[193px] h-[36px]"><span class="pt-[10px] pl-[16px] pr-[16px] pb-[10px]">Статус ответа</span></div>
				</div>
				
				<div class="w-[1135px] h-[795px] mt-[10px] ml-[16px]">
						<SYSTEM_INFO_PART class="mt-[0px]"></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
						<SYSTEM_INFO_PART></SYSTEM_INFO_PART>
				</div>
			</div>
			<div class="bg-[#4BA285] w-[6px] h-[175px] mt-[57px] ml-[11px] rounded-[10px] hover:translate-y-[-2px]"></div>
		</div>
	</div>
</template>
