const Sidebar = () => {
   return (
      <div className="content__sidebar">
         <div className="sidebar__card">
            <div className="sidebar__card-title">
               <h2 className="card__title">
                  Количество пересадок
               </h2>
            </div>
            <from className="sidebar_card-checkbox">
               <label className="checkbox">
                  <input type="checkbox" />
                  Без пересадок
               </label>
               <label className="checkbox">
                  <input type="checkbox"/>
                  1 пересадка
               </label>
               <label className="checkbox">
                  <input type="checkbox"/>
                  2 пересадки
               </label>
               <label className="checkbox">
                  <input type="checkbox"/>
                  3 пересадки
               </label>
            </from>
         </div>
      </div>
   )
}

export default Sidebar;