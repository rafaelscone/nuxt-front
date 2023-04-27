import { useApi, } from "~/composables/api";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const route = useRoute();
  const api = useApi();

  console.log("start front");

  return {
    provide: {
      api,
      idUser: 7,
      userName: "user"
    }
  };
});