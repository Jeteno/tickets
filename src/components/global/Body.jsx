import Content from '../local/content';

const  Body = (props) => {
   const {tikets, setTikets} = props

   return (
      <main className="main">
         <Content tikets={tikets} setTikets={setTikets}/>
      </main>
   )
}

export default Body;