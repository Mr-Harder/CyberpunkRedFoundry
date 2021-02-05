/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class cprActor extends Actor {

  /**
   * Augment the basic actor data with additional dynamic data.
   */
  prepareData() {
    super.prepareData();

    const actorData = this.data;
    const data = actorData.data;
    const flags = actorData.flags;
    
    data.attributes.health.max = Math.ceil((data.abilities.body.value + data.abilities.will.value)/2) * 5 + 10;
    data.attributes.humanity.max = 10*data.abilities.emp.value;
    data.attributes.luckrolls.max = data.abilities.luck.value;


    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.

    if (actorData.type === 'character') this._prepareCharacterData(actorData);
  }

  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(actorData) {
    const data = actorData.data;

    

  }

}