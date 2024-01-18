import Sidebar from './sidebar'
import Filtration from './filtration'
import Tikets from './tikets'
import Button from './buttons'

const Content = () => {

   return (
      <section className="content__page page">
         <div className="content__container container">
            <div className="content__body body">
               <div className="content__card">
                  <Sidebar/>
                  <Filtration/>
                  <Tikets/>
                  <Button/>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Content