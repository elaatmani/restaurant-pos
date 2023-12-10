export default (ticket) => {
    let total = 0;

    ticket.items.forEach(i => {
        // if(ticket.mode == 1) {
            total += (parseFloat(i.menu_item_variation.item_price) * parseInt(i.quantity));
        // }

    })

    return (total).toFixed(2);
}