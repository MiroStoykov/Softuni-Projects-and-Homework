import { page } from "./lib.js";
import { showExample } from "./views/exsampleView.js";


page("/", showExample);

page.start();