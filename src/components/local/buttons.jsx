import { useDispatch, useSelector } from 'react-redux';
import { showMoreTickets } from '../../store/actions';

const Button = () => {
   const dispatch = useDispatch();
   const tickets = useSelector(state => state.tickets) 
   const ticketsToShow = useSelector(state => state.ticketsToShow)

   const handlerPaginations = () => {
      if(ticketsToShow === tickets.length) {
         document.querySelector('.content__button').style.display = 'none';
      } else {
         dispatch(showMoreTickets())
      }
   }

   return ( 
      <div className="content__button">
         <button className="content__btn" onClick={handlerPaginations}>Загрузить еще билеты</button>
      </div>
   )
} 

export default Button