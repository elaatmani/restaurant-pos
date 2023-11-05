export default (ticket) => {
    let total = 0;

    ticket.items.forEach(i => {
        // if(ticket.mode == 1) {
            total += (i.menu_item.price * i.quantity);
        // }

    })

    return (total).toFixed(2);
}