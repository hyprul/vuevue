import { createApp } from "vue";
import App from "./App.vue";
import Contact from "./components/Contact.vue";
import Form from "./components/Form.vue";

const app = createApp(App);
app.component("Contact", Contact);
app.component("Form", Form);

app.mount("#app");
