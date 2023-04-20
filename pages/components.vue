<template>
  <div class="pt-3 grid grid-cols-[110px_80%]">

    <div class="border-r-2 border-gray-400">
      <div @click="onSelect('buttons')" :class="`${menuClass} ${menuSelect === 'buttons' && 'bg-gray-200'}`"><cursor-arrow-rays-icon class="w-6 pr-1"/>Buttons</div>
      <div @click="onSelect('inputs')" :class="`${menuClass} ${menuSelect === 'inputs' && 'bg-gray-200'}`"><pencil-square-icon class="w-6 pr-1"/>Inputs</div>
      <div @click="onSelect('loader')" :class="`${menuClass} ${menuSelect === 'loader' && 'bg-gray-200'}`"><arrow-path-icon class="w-6 pr-1"/>Loader</div>
      <div @click="onSelect('text')" :class="`${menuClass} ${menuSelect === 'text' && 'bg-gray-200'}`"><DocumentTextIcon class="w-6 pr-1"/>Text</div>
      <div @click="onSelect('icons')" :class="`${menuClass} ${menuSelect === 'icons' && 'bg-gray-200'}`"><AcademicCapIcon class="w-6 pr-1"/>Icons</div>
      <div @click="onSelect('modal')" :class="`${menuClass} ${menuSelect === 'modal' && 'bg-gray-200'}`"><WindowIcon class="w-6 pr-1"/>Modal</div>
    </div>

    <div class="p-4">
      <div v-if="menuSelect === 'buttons'">
        <Text type="title">Buttons</Text>

        <hr>

        <div class="p-2">
          <Button>
            Primary
          </Button>
          <Button>
            Primary Icon
            <AcademicCapIcon class="h-5 w-5"/>
          </Button>
          <br>
          <Button secondary>Secondary</Button>
          <Button secondary>
            Secondary Icon
            <AcademicCapIcon class="h-5 w-5"/>
          </Button>
        </div>
      </div>

      <div v-else-if="menuSelect === 'inputs'">
        <Text type="title">Inputs</Text>

        <hr>

        <Input
          :placeholder="'placeholder'"
          :on-change="onChange"
        />

        <Input
          type="number"
        />

        <TextArea
          label="Text Area"
          :value="text"
          :on-change="(value: any) => text = value"
        />

        Text: {{ text }}
      </div>

      <div v-else-if="menuSelect === 'loader'">
        <Text type="title">Loader</Text>
        <hr>
        <Loader class="w-14"/>
      </div>

      <div v-else-if="menuSelect === 'icons'">
        <Text type="title">Icons</Text>
        <hr>
        <BeakerIcon class="w-10" />
      </div>

      <div v-else-if="menuSelect === 'text'">
        <Text type="title">Texts</Text>
        <hr>
        <Text type="subtitle">Subtitle</Text>
        <Text>Normal</Text>
      </div>

      <div v-else-if="menuSelect === 'modal'">
        <Modal :is-open="isOpenModal" :on-close="onClose">
          <template v-slot:title>Modal title</template>
          <template v-slot:body>Modal body</template>
          <template v-slot:footer>Modal Footer</template>
        </Modal>
        <Button @click="isOpenModal = true">Open Modal</Button>

        <Dialog :is-open="isOpenDialog" :on-close="onCloseDialog"
          message-accept="Sim"
          message-cancel="Não"
        >
          <template v-slot:title>Você está certo disso ?</template>
          <template v-slot:body><p>Posso perguntar ?</p></template>
        </Dialog>
        <Button @click="isOpenDialog = true">Open Dialog</Button>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { BeakerIcon, CursorArrowRaysIcon, PencilSquareIcon, ArrowPathIcon, AcademicCapIcon, WindowIcon, DocumentTextIcon, } from "@heroicons/vue/24/solid";

type Options = "buttons" | "inputs" | "loader" | "text" | "modal" | "icons";

const text = ref<string | undefined>("valor default");
const menuSelect = ref<Options>("buttons");
const menuClass = "flex hover:bg-gray-200 p-2 rounded-sm cursor-pointer";

const isOpenModal = ref(false);
const isOpenDialog = ref(false);

const onClose = () => isOpenModal.value = false;

const onCloseDialog = (value: boolean) => {
  isOpenDialog.value = false;

  console.log(value);
};

function onSelect(select: Options){
  menuSelect.value = select;
}

function onChange(value: string){
  text.value = value;
}

</script>