import { useSelector } from 'react-redux';
import { getFilteredTickets } from '../../store/selector';

const Tikets = () => {
   const filteredTickets = useSelector(getFilteredTickets);

   return (
      <div className="content__tikets">
         {filteredTickets.map(ticket => {
            return (
               <div className="tiket__body" key={ticket.id}>
                  <div className="tiket__price">
                     <h2 className="tiket__price-text">
                        {ticket.price} Р
                     </h2>
                  </div>
                  <div className="tiket__logo">
                     <img src={ticket.img} alt="Logo" className="tiket__logo-img" />
                  </div>
                  <div className="tiket__time tiket__details">
                     <div className="tiket__title">
                        <h2 className="tiket__title-text">
                           SVO - LED
                        </h2>
                     </div>
                     <div className="tiket__subtitle">
                        <h2 className="tiket__subtitle-text">
                           {ticket.time}
                        </h2>
                     </div>
                  </div>
                  <div className="tiket__duration tiket__details">
                     <div className="tiket__title">
                        <h2 className="tiket__title-text">
                           В пути
                        </h2>
                     </div>
                     <div className="tiket__subtitle">
                        <h2 className="tiket__subtitle-text">
                           {ticket.duration}
                        </h2>
                     </div>
                  </div>
                  <div className="tiket__transplants tiket__details">
                     <div className="tiket__title">
                        <h2 className="tiket__title-text">
                           Пересадки
                        </h2>
                     </div>
                     <div className="tiket__subtitle">
                        <h2 className="tiket__subtitle-text">
                           {ticket.connectionAmount}
                        </h2>
                     </div>
                  </div>
               </div>
            )
         })}

      </div>
   )
}

export default Tikets;