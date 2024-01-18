import { LIST_TYPES, LIST_COPY } from '../../config';
import { changeOfTransfers, deleteOfTransfers, filterByCompany } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

const Sidebar = () => {
   const dispatch = useDispatch();
   const selectedQuantitiesOfTransfers = useSelector(state => state.connectionAmountArr);
   const selectedCompany = useSelector(state => state.selectedCompany)

   const handleFilterByCompany = (event) => {
      const selectedCompanyValue = event.target.value;
      dispatch(filterByCompany(selectedCompanyValue));
   };

   const handleFilterByQuantitiesOfTransfers = (event) => {
      const selectedQuantitiesOfTransfersValue = event.target.value;
      const isSelectedQuantitiesOfTransfers = selectedQuantitiesOfTransfers.indexOf(selectedQuantitiesOfTransfersValue) !== -1;
      console.log(selectedQuantitiesOfTransfersValue)

      if (isSelectedQuantitiesOfTransfers) {
         dispatch(deleteOfTransfers(selectedQuantitiesOfTransfersValue));
      } else {
         dispatch(changeOfTransfers(selectedQuantitiesOfTransfersValue));
      }
   }

   const [sidebarCard, setSidebarCard] = useState(false);
   const [sidebarCardChange, setSitebarCardChange] = useState(false)

   const toggleSidebarCardChange = () => {
      setSitebarCardChange(!sidebarCardChange)
   }

   useEffect(() => {
      const handleWindowSizeChange = () => {
         if(window.innerWidth > 768) {
            setSidebarCard(!sidebarCard);
         } else {
            setSidebarCard(sidebarCard);
         }
      }

      window.addEventListener('resize', handleWindowSizeChange)

      return () => {
         window.removeEventListener('resize', handleWindowSizeChange)
      }
   }, [])

   return (
      <div className={sidebarCardChange ||  sidebarCard ? 'content__sidebar' : 'content__sidebar-nonactive'}>
         {!sidebarCard && (
            <>
               <div className="sidebar__selected">
                  <div className="sidebar__title">
                     {selectedQuantitiesOfTransfers.length === 0 ? (
                        <h2 className="sidebar__title-h" key="any-transfers">
                           Любое кол-во пересадок, 
                        </h2>
                     ) : (
                     selectedQuantitiesOfTransfers.map((selected, index) => (
                        <h2 className="sidebar__title-h" key={selected}>
                           {selected}
                           {index >= 0 ? ', ' : ''}
                        </h2>
                     ))
                     )}
                  </div>
                  <div className="sidebar__title">
                     {selectedCompany.length === 0 ? (
                        <h2 className="sidebar__title-h" key="any-transfers">
                           любая авиакомпания
                        </h2>
                     ) : (
                        <h2 className="sidebar__title-h" key="any-transfers">
                           {selectedCompany}
                        </h2>
                     )}
                  </div>
               </div>
               <div className="sidebar__acordeon">
                  <div className="sidebar__acordeon-title"> 
                     <h2 className="acardeon__title">
                        Открыть настройки 
                     </h2>
                  </div>
                  <div className="header__profile-accordion">
                     <span  className={sidebarCardChange ? 'acordion-icon-active' : 'acordion-icon'} onClick={toggleSidebarCardChange}></span>
                  </div>
               </div>
            </>
         )}
         {sidebarCard || sidebarCardChange ? (
            <>
               <div className="sidebar__card checkbox">
                  <div className="sidebar__card-title">
                     <h2 className="card__title">
                        Количество пересадок
                     </h2>
                  </div>
                  <form className="sidebar_card-checkbox">
                     {Object.values(LIST_TYPES.CONNECTIONAMOUNT).map((type) => {
                        return (
                           <label className="checkbox" key={LIST_COPY[type]} htmlFor={LIST_COPY[type].id}>
                              <input type="checkbox" onChange={handleFilterByQuantitiesOfTransfers} value={LIST_COPY[type]} name={`check_${LIST_COPY[type].id}`} id={LIST_COPY[type].id}/>
                                 {LIST_COPY[type]}
                           </label>
                        )
                     })}
                  </form>
               </div>
               <div className="sidebar__card radio">
                  <div className="sidebar__card-title">
                     <h2 className="card__title">
                        Компании
                     </h2>
                  </div>
                  <form className="sidebar_card-checkbox">
                     {Object.values(LIST_TYPES.COMPANY).map((type) => {
                        return (
                           <label className="checkbox" key={type} htmlFor={type.id}>
                              <input type="radio" onChange={handleFilterByCompany} value={LIST_COPY[type]} name={`radio_${type.id}`} id={type.id} />
                                 {LIST_COPY[type]}
                           </label>
                        )
                     })}
                  </form>
               </div>
            </>
         ) : null}
      </div>
   )
}

export default Sidebar;