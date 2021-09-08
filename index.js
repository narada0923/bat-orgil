import { menu } from "./modules/menu.js";
import { cursor } from "./modules/cursor.js";
import { hide } from "./modules/loader.js";
import { show } from "./modules/show.js";
import { RevealOnScroll } from "./modules/revealOnScroll.js";

menu();
cursor();
hide();
show();

let revealOnScroll = new RevealOnScroll();
