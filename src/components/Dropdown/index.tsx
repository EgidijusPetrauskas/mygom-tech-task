import React, { useState, useRef } from 'react';

import {
  OptionElement,
  SelectContainer,
  SelectText,
  OptionsContainer,
} from './dropdown-styled-components';

type Option = {
  id: string,
  title: string
};

type DropdownProps = {
  options: Option[],
  width?: number,
  height?: number,
  background?: string,
  borderColor?: string,
  color?: string,
  selectColor?: string,
  onSelect: (title: string, id?: string) => void;
};

const Dropdown:React.FC<DropdownProps> = ({
  options,
  onSelect,
  width = 160,
  height = 40,
  color,
  selectColor,
  borderColor,
  background,
}) => {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const optionsMenu = useRef<HTMLDivElement | null>(null);

  const closeOnOfflick = (e: MouseEvent) => {
    if (optionsMenu.current && dropDownOpen && !optionsMenu.current.contains(e.target as Node)) {
      setDropDownOpen(false);
    }
  };

  document.addEventListener('mousedown', closeOnOfflick);

  return (
    <div ref={optionsMenu}>
      <SelectContainer
        width={width}
        height={height}
        onClick={() => setDropDownOpen(!dropDownOpen)}
        background={background}
        borderColor={borderColor}
        open={dropDownOpen}
      >
        <SelectText selectColor={selectColor}>Select...</SelectText>
      </SelectContainer>
      {dropDownOpen && (
      <OptionsContainer
        width={width}
        background={background}
      >
        {options.map((opt) => (
          <OptionElement
            key={opt.id}
            color={color}
            height={height}
            borderColor={borderColor}
            onClick={() => onSelect(opt.title)}
          >
            {opt.title}
          </OptionElement>
        ))}
      </OptionsContainer>
      )}
    </div>
  );
};

export default Dropdown;
