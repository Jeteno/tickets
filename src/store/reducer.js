import { ACTIONS } from './actions';
import data from '../mock.json';


const initialState = {
   tickets: data,
   connectionAmountArr: [],
   selectedCompany: [],
   sortedTicketPrice: [],
   sortedTicketDurations: [],
   sortedTicketOptimal: [],
   ticketsToShow: 3
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ACTIONS.CHANGE_OF_TRANSFERS:
         return {
            ...state,
            connectionAmountArr: [...state.connectionAmountArr, action.quantitiesOfTransfers]
         };
      case ACTIONS.DELETE_OF_TRANSFERS: 
         return {
            ...state,
            connectionAmountArr: state.connectionAmountArr.filter(quantitiesOfTransfers => quantitiesOfTransfers !== action.quantitiesOfTransfers)
         }
      case ACTIONS.FILTER_BY_COMPANY:
         return {
            ...state,
            selectedCompany: action.company,
         };
      case ACTIONS.SORT_BY_PRICE:
         const sortedTicketsPrice = state.tickets.slice().sort((a, b) => a.price - b.price);
         return {
            ...state,
            sortedTicketPrice: sortedTicketsPrice
         }
      case ACTIONS.SORT_BY_DURATION: 
         const sortedTicketsDurations = state.tickets.slice().sort((a, b) => a.duration - b.duration);
         return {
            ...state,
            sortedTicketDurations: sortedTicketsDurations
         }
      case ACTIONS.SORT_BY_OPTIMAL: 
         function compareTickets(a, b) {
            const optimalTicketsOne = a.duration  / a.price;
            const optimalTicketsTwo = b.duration / b.price;
            return optimalTicketsOne - optimalTicketsTwo;
          }
         const sortedTickets = state.tickets.sort(compareTickets);
         return {
            ...state,
            sortedTicketOptimal: sortedTickets
         }
      case ACTIONS.SHOW_MORE_TICKETS:
         return {
            ...state,
            ticketsToShow: state.ticketsToShow + 3
         }
      default: 
         return state
   }
}

export default reducer

