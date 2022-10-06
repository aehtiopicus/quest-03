/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';
import { Frame2Props } from 'src/types';

 
const Frame21: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: "100%",  
  height: `143px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const Rectangle1: any = styled("div")({  
  backgroundColor: `rgba(217, 217, 217, 1)`,  
  width: `259px`,  
  height: `247px`,  
  position: `absolute`,  
  left: `173px`,  
  top: `-29px`,  
});
 
function Frame2(props: Frame2Props): JSX.Element {
  return (
    <Frame21 className={props.className} >
      <Rectangle1 >
      </Rectangle1>
    </Frame21>
  );
}

export default Frame2;