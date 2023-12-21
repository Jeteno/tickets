const  Header = () => {
   return (
      <header className="header__page page">
         <div className="header__container container">
            <div className="header__body body">
               <div className="header__logo">
                  <img src="./img/header/logo.svg" alt="Logo" className="header__logo-img" />
                  <div className="header__logo-title">
                     <h1 className="header__logo-title-h">Поиск авиабилетов</h1>
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header;