

import { ToggleButtonGroup } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import { useState } from 'react';
//import { dataList } from '../../components/test/mock/dataList';

export default function FilterListToggle({options, value, selectToggle}) {
  const [selected, setSelected] = useState(false);

  return (
    <ToggleButtonGroup value={value} exclusive onChange={selectToggle}>
            {options.map(({ label, id, value }) => (
        <ToggleButton key={id} value={value}>
          {label}
        </ToggleButton>
      ))}
     </ToggleButtonGroup>   
  );
}