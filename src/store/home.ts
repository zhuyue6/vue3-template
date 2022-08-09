import { reactive } from "vue";

export default reactive({
  count: 0,
  increment() {
    this.count++;
  },
});
