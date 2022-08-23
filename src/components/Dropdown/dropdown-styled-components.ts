import styled from 'styled-components';

export const SelectContainer = styled.div<{
  width: number,
  height: number,
  open: boolean
  borderColor?: string,
  background?: string,
}>`
  box-sizing: border-box;
  width: ${(props) => `${props.width}px`};
  min-width: 100px;
  height: ${(props) => `${props.height}px`};
  display: flex;
  align-items: center;
  padding: 1em;
  background: ${(props) => (props.background ? props.background : 'tranparent')};
  border: 1.5px solid ${(props) => (props.borderColor ? props.borderColor : '#000000')};
  border-radius: 6px;
  border-bottom-left-radius: ${(props) => (props.open ? 0 : '6px')};
  border-bottom-right-radius: ${(props) => (props.open ? 0 : '6px')};
  &:hover {
    cursor: pointer;
  };
  &:hover p {
    transform: translate(10px);
    opacity: 0.7;
  }
`;

export const SelectText = styled.p<{ selectColor?: string }>`
  user-select: none;
  font-size: 17px;
  font-style: italic;
  color: ${(props) => (props.selectColor ? props.selectColor : '#ffffff')};
  transition: transform 1s;
  `;

export const OptionsContainer = styled.div<{ width?: number, background?: string }>`
    box-sizing: border-box;
    width: ${(props) => (props.width ? `${props.width}px` : '100%')};
    min-width: 100px;
    background: ${(props) => (props.background ? props.background : 'tranparent')};
    &:hover {
      cursor: pointer;
    }
  `;

export const OptionElement = styled.div<{ color?: string, borderColor?: string, height?: number }>`
  box-sizing: border-box;
  height: ${(props) => (props.height ? `${props.height}px` : '40px')};
  min-height: 50px;
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  color: ${(props) => (props.color ? props.color : '#000000')};
  padding-left: 1.1em;
  border: 1.5px solid ${(props) => (props.borderColor ? props.borderColor : '#000000')};
  border-top: none;
  opacity: 0.8;
  transition: 0.2s ease;
  &:hover {
    opacity: 1;
    border-left: 4px solid ${(props) => (props.borderColor ? props.borderColor : '#000000')};
  }
`;
