
export default class cprItemSheet extends ItemSheet {
/**@override */
    get template() {
        return `systems/cpr/templates/sheets/${this.item.data.type}-sheet.html`
    }
/** @override */
    getData() {
        const data = super.getData();

        EntitySheetHelper.getAttributeData(data);

        return data;
    }
}