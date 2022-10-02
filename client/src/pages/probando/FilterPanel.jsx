import React from 'react';


import FilterListToggle  from './FilterListToggle';

import { dataList, ratingList } from '../../components/test/mock/dataList';

const FilterPanel = ({
    
    selectedRating,
    selectRating,
    category,
    changeChecked,  
  }) => (
    <div>
    // <div>
      
    //   {/* <div className='input-group'>
    //     <p className='label'>Categorias</p>
    //     {dataList.map((categoria) => (
          
          
    //     ))} */}
    //   </div>
      
      <div className='input-group'>
        <p className='label'>Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );

  export default FilterPanel ;
  