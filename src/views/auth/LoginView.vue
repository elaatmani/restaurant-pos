<template>
  <div
    class="tw-min-h-screen tw-bg-gray-100 tw-py-6 tw-flex tw-flex-col tw-justify-center sm:tw-py-12"
  >
    <div class="tw-relative tw-py-3 sm:tw-max-w-xl sm:tw-mx-auto">
      <div
        class="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-blue-300 tw-to-blue-600 tw-shadow-lg tw-transform tw--skew-y-6 sm:tw-skew-y-0 sm:tw--rotate-6 sm:tw-rounded-3xl"
      ></div>
      <div
        class="tw-relative tw-px-4 tw-py-10 tw-bg-white tw-shadow-lg sm:tw-rounded-3xl sm:tw-p-20 sm:tw-px-10"
      >
        <div class="tw-min-w-[350px]">
          <div class="tw-p-6 tw-space-y-4 md:tw-space-y-6 sm:tw-p-8">
            <h1
              class="tw-text-xl tw-font-bold tw-leading-tight tw-tracking-tight tw-text-gray-900 md:tw-text-2xl dark:tw-text-white"
            >
              Sign in to your account
            </h1>
            <form class="tw-space-y-4 md:tw-space-y-6">
              <div>
                <label
                  class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                  >Email</label
                >
                <input
                autocomplete="email"
                  v-model="email"
                  @input="errors.email = null"
                  type="text"
                  :class="[errors.email && '!tw-border-red-400']"
                  class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-500 focus:tw-border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-primary-500 dark:focus:tw-border-primary-500"
                  placeholder="name@example.com"
                  required
                />
                <label
                  v-if="errors.email"
                  class="tw-block tw-mb-2 tw-mt-1 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white"
                  >{{ errors.email }}</label
                >
              </div>

              <div>
                <label
                  class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                  >Password</label
                >
                <input
                autocomplete="new-password"
                  v-model="password"
                  @keyup.enter="login"
                  @input="errors.password = null"
                  type="password"
                  :class="[errors.password && '!tw-border-red-400']"
                  class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-500 focus:tw-border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-primary-500 dark:focus:tw-border-primary-500"
                  placeholder="********"
                  required
                />
                <label
                  v-if="errors.password"
                  class="tw-block tw-mb-2 tw-mt-1 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white"
                  >{{ errors.password }}</label
                >
              </div>

              <button
                type="button"
                @click="login"
                class="tw-flex tw-items-center tw-justify-center tw-h-[40px] tw-w-full tw-text-white tw-bg-primary-600 hover:tw-bg-primary-700 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center dark:tw-bg-primary-600 dark:hover:tw-bg-primary-700 dark:focus:tw-ring-primary-800"
              >
                <svg
                  v-if="loading"
                  class="tw-stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke-linecap="round" stroke-width="2">
                    <path
                      stroke-dasharray="60"
                      stroke-dashoffset="60"
                      stroke-opacity=".3"
                      d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="1.3s"
                        values="60;0"
                      />
                    </path>
                    <path
                      stroke-dasharray="15"
                      stroke-dashoffset="15"
                      d="M12 3C16.9706 3 21 7.02944 21 12"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.3s"
                        values="15;0"
                      />
                      <animateTransform
                        attributeName="transform"
                        dur="1.5s"
                        repeatCount="indefinite"
                        type="rotate"
                        values="0 12 12;360 12 12"
                      />
                    </path>
                  </g>
                </svg>
                <span v-else>Sign in</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/services/auth/login'

export default {
    data() {
        return {
            loading: false,

            email: '',
            password: '',

            errors: {}
        }
    },

    methods: {
        login() {
            login(this);
        }
    },

    mounted() {
        // this.$alert({type: 'success', body: 'Hello World'})
    }
};
</script>

<style>
</style>