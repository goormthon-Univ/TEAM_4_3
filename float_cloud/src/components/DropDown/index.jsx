import React, { useState } from 'react';
import ArrowDrop from '../../arrow_drop.png';
import * as S from './style';

function Dropdown({ zIdx, items, isOpen, onToggle, onItemSelect, holder }) {
  const [selectedItem, setSelectedItem] = useState({});

  const handleSelect = item => {
    setSelectedItem(item);
    onItemSelect(item);
  };

  return (
      <S.DropdownContainer>
        <S.DropdownToggle onClick={onToggle} style={{zIndex:zIdx}}>
          <span>{selectedItem.name || holder}</span>
          <img src={ArrowDrop} alt=''/>
        </S.DropdownToggle>
        {isOpen && (
          <S.DropdownMenu style={{zIndex:zIdx-1}}>
            {items.map(item => (
              <S.MenuItem key={item.id} onClick={() => handleSelect(item)}>{item.name}</S.MenuItem>
            ))}
          </S.DropdownMenu>
        )}
      </S.DropdownContainer>
  );
}

export default Dropdown;