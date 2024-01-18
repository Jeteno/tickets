import { useDispatch } from "react-redux";
import { sortByPrice, sortByDuration, sortByOptimal } from '../../store/actions'
import React, { useState } from 'react'

const Filtration = () => {
   const dispatch = useDispatch()
   const [sortByPriceBtn, setSortByPriceBtn] = useState(false)
   const [sortByDurationBtn, setSortByDurationBtn] = useState(false)
   const [sortByOptimalBtn, setSortByOptimalBtn] = useState(false)

   const handleSortByPrice = () => {
      dispatch(sortByPrice());
      setSortByPriceBtn(true);
      setSortByDurationBtn(false);
      setSortByOptimalBtn(false)
   }

   const handleSortByDuration = () => {
      dispatch(sortByDuration());
      setSortByDurationBtn(true);
      setSortByPriceBtn(false);
      setSortByOptimalBtn(false)
   }

   const handleSortByOptimal = () => {
      dispatch(sortByOptimal());
      setSortByOptimalBtn(true)
      setSortByPriceBtn(false);
      setSortByDurationBtn(false);
   }
 
   return (
      <div className="content__filtration">
         <button className={sortByPriceBtn ? 'filtration__btn-active' : 'filtration__btn'} onClick={handleSortByPrice}>
            Самый дешевый
         </button>
         <button className={sortByDurationBtn ? 'filtration__btn-active' : 'filtration__btn'} onClick={handleSortByDuration}>
            Самый быстрый
         </button>
         <button className={sortByOptimalBtn ? 'filtration__btn-active' : 'filtration__btn'} onClick={handleSortByOptimal}>
            Самый оптимальный
         </button>
      </div>
   )
}

export default Filtration;