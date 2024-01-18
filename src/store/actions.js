export const ACTIONS = {
   CHANGE_OF_TRANSFERS: 'CHANGE_OF_TRANSFERS',
   DELETE_OF_TRANSFERS: 'DELETE_OF_TRANSFERS',
   FILTER_BY_COMPANY: 'FILTER_BY_COMPANY',
   SORT_BY_PRICE: 'SORT_BY_PRICE',
   SORT_BY_DURATION: 'SORT_BY_DURATION',
   SORT_BY_OPTIMAL: 'SORT_BY_OPTIMAL',
   SHOW_MORE_TICKETS: 'SHOW_MORE_TICKETS',
}

export const changeOfTransfers = (quantitiesOfTransfers) => {
   return {
      type: ACTIONS.CHANGE_OF_TRANSFERS,
      quantitiesOfTransfers
   }
}

export const deleteOfTransfers = (quantitiesOfTransfers) => {
   return {
      type: ACTIONS.DELETE_OF_TRANSFERS,
      quantitiesOfTransfers
   }
}

export const filterByCompany = (company) => {
   return {
      type: ACTIONS.FILTER_BY_COMPANY,
      company
   }
}

export const sortByPrice = () => {
   return {
      type: ACTIONS.SORT_BY_PRICE,
   }
}

export const sortByDuration = () => {
   return {
      type: ACTIONS.SORT_BY_DURATION,
   }
}

export const sortByOptimal = () => {
   return {
      type: ACTIONS.SORT_BY_OPTIMAL,
   }
}

export const showMoreTickets = () => {
   return {
      type: ACTIONS.SHOW_MORE_TICKETS,
   }
}
