import { cpr } from "./module/config.js";
import cprItemSheet from "./module/sheets/cprItemSheet.js";


Hooks.once("init", function() {
    console.log("cpr | Init CPR confirmed");

    CONFIG.cpr = cpr;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("cpr", cprItemSheet, {makeDefault: true});
});
