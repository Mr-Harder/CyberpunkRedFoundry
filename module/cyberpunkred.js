// Import Modules
import { cprActor } from "./actor/actor.js";
import { cprActorSheet } from "./actor/actor-sheet.js";
import { cprItem } from "./item/item.js";
import { cprItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.cyberpunkred = {
    cprActor,
    cprItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d10",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = cprActor;
  CONFIG.Item.entityClass = cprItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("cyberpunkred", cprActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("cyberpunkred", cprItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});