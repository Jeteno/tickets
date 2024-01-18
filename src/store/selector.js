export const getFilteredTickets = (state) => {
  const { tickets, selectedCompany, connectionAmountArr, ticketsToShow, sortedTicketPrice, sortedTicketDurations, sortedTicketOptimal } = state;

  let filteredTickets = tickets;

  if (selectedCompany.length > 0) {
    filteredTickets = filteredTickets.filter(ticket => ticket.company === selectedCompany);
  }

  if (connectionAmountArr.length > 0) {
    filteredTickets = filteredTickets.filter(ticket => connectionAmountArr.includes(ticket.connectionAmount));
  }

  if (sortedTicketPrice.length > 0) {
    filteredTickets = sortedTicketPrice;
  }

  if (sortedTicketDurations.length > 0) {
    filteredTickets = sortedTicketDurations;
  }

  if (sortedTicketOptimal.length > 0) {
    filteredTickets = sortedTicketOptimal;
  }

  if (ticketsToShow < filteredTickets.length) {
    filteredTickets = filteredTickets.slice(0, ticketsToShow);
  }
  
  return filteredTickets;
};


