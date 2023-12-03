<template>
  <div class="tw-h-full tw-min-h-[550px]">
    <div class="tw-p-5 tw-bg-gray-50 tw-h-full">
      <div
        class="tw-bg-white tw-p-5 tw-rounded-lg tw-shadow tw-w-full tw-h-full"
      >
        <div class="tw-flex tw-items-center tw-justify-between">
          <h1 class="tw-font-bold tw-text-gray-600">
            Ajouter une mouvements d'argents
          </h1>
        </div>

        <div class="tw-mt-5">
          <form action="#">
            <div class="tw-grid tw-gap-4 sm:tw-grid-cols-2 sm:tw-gap-6">
              <div class="tw-col-span-2">
                <label
                  for="amount"
                  class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                  >Montant</label
                >
                <input
                  type="number"
                  v-model="amount"
                  min="0"
                  id="amount"
                  class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Tapez le montant"
                  required=""
                />
                <label
                  v-if="errors.amount"
                  class="tw-block tw-mb-2 tw-mt-1 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white"
                  >{{ errors.amount }}</label
                >
              </div>

              <div class="tw-w-full md:tw-col-span-1 tw-col-span-2">
                <label
                  class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                  >Type</label
                >
                <div class="tw-grid tw-grid-cols-2 tw-gap-5">
                  <button
                    @click="type = 'minus'"
                    type="button"
                    :class="[
                      type == 'minus' && 'tw-bg-primary-500 !tw-text-white',
                    ]"
                    class="tw-h-[40px] tw-rounded-lg tw-bg-gray-100 tw-duration-200 hover:tw-shadow tw-flex tw-items-center tw-justify-center"
                  >
                    <icon icon="ic:round-minus" class="tw-text-xl" />
                  </button>
                  <button
                    @click="type = 'plus'"
                    type="button"
                    :class="[
                      type == 'plus' && 'tw-bg-primary-500 tw-text-white',
                    ]"
                    class="tw-h-[40px] tw-rounded-lg tw-bg-gray-100 tw-duration-200 hover:tw-shadow tw-flex tw-items-center tw-justify-center"
                  >
                    <icon icon="ic:round-plus" class="tw-text-xl" />
                  </button>
                </div>
              </div>

              <div class="tw-w-full md:tw-col-span-1 tw-col-span-2">
                <label
                  for="description"
                  class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                  >Description</label
                >
                <textarea
                  type="text"
                  v-model="description"
                  id="description"
                  class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Tapez la description"
                  required=""
                  rows="1"
                ></textarea>
                <label
                  v-if="errors.description"
                  class="tw-block tw-mb-2 tw-mt-1 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white"
                  >{{ errors.description }}</label
                >
              </div>
              <div>
                <label
                  for="name"
                  class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                  >Image du l'élément</label
                >
                <div
                  class="tw-flex tw-items-center tw-justify-center tw-w-full tw-relative"
                >
                  <label
                  for="dropzone-file"
                    class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full tw-h-64 tw-border-2 tw-border-gray-300 tw-border-dashed tw-rounded-lg tw-cursor-pointer tw-bg-gray-50 dark:hover:bg-bray-800 dark:tw-bg-gray-700 hover:tw-bg-gray-100 dark:tw-border-gray-600 dark:hover:tw-border-gray-500 dark:hover:tw-bg-gray-600"
                  >
                    <div
                  v-if="!showImage"
                      class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-pt-5 tw-pb-6"
                    >
                      <svg
                        class="tw-w-8 tw-h-8 tw-mb-4 tw-text-gray-500 dark:tw-text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p
                        class="tw-mb-2 tw-text-sm tw-text-gray-500 dark:tw-text-gray-400"
                      >
                        <span class="tw-font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p
                        class="tw-text-xs tw-text-gray-500 dark:tw-text-gray-400"
                      >
                        SVG, PNG oû JPG (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      @change="handleImageChange"
                      id="dropzone-file"
                      type="file"
                      class="tw-hidden"
                    />
                  </label>
                  <div
                    v-show="!!image"
                    class="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-p-2 tw-absolute tw-top-0 tw-left-0 tw-rounded-lg tw-overflow-hidden tw-pointer-events-none"
                  >
                    <img
                      ref="image"
                      class="tw-w-full tw-h-full tw-object-contain tw-rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tw-flex tw-items-center tw-justify-end tw-w-full tw-mt-5"
            >
              <button
                type="button"
                @click="create"
                :disabled="isLoading"
                :loading="isLoading"
                class="tw-border-solid tw-flex tw-items-center tw-justify-center tw-text-white tw-bg-primary-600 hover:tw-bg-primary-700 tw-duration-200 focus:tw-ring-4 focus:tw-ring-primary-300 tw-font-medium tw-rounded-md tw-text-sm tw-px-5 tw-py-2 dark:tw-bg-primary-600 dark:hover:tw-bg-primary-700 focus:tw-outline-none dark:focus:tw-ring-primary-800"
              >
              <icon icon="line-md:loading-twotone-loop" v-if="isLoading" class="tw-text-2xl tw-absolute" />
                <span :class="[isLoading && 'tw-invisible']">Ajouter</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script setup>
// import useMovementStore from "@/stores/cachier/movementStore";
import { ref } from "vue";
import CashMovement from "@/api/cashier/CashMovement";
import useAlert from "@/composables/useAlert";

// const store = useMovementStore();

const isLoading = ref(false);
const showImage = ref(false);

const amount = ref(0);
const description = ref("");
const type = ref("minus");
const image = ref(null);
const imageFile = ref(null);

const errors = ref({});
const create = async () => {
  const movement = {
    amount: amount.value,
    mouvement_type: type.value,
    mouvement_description: description.value,
    image_url: imageFile.value
  };

  isLoading.value = true;
  await CashMovement.create(movement)
  .then(
    res => {
      console.log(res.data)
      useAlert('Mouvement est été ajouté !');
    }
  )
  // store.addMovement({
  //   amount: amount.value,
  //   description: description.value,
  //   type: type.value,
  //   image: image.value,
  //   image_file: imageFile.value
  // });
  isLoading.value = false;


  image.value.src = '';
  imageFile.value = null;
  type.value = 'minus';
  description.value = "";
  amount.value = 0;
  showImage.value = false;
};

const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (!file) return false;

  image.value = file;
  imageFile.value = file;

  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      image.value.src = this.result;
      showImage.value = true
    });
    reader.readAsDataURL(file);
  }
};
</script>
    
<style></style>