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
import { Switch, FormControlLabel } from '@mui/material';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import { OtherComProps } from 'src/types';

 
const DemoTestFrame3: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: "100%",  
  height: "100%",  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const FormControlLabel1: any = styled(FormControlLabel)({  
  position: `absolute`,  
  left: `60px`,  
  top: `43px`,  
  margin: `0px`,  
});
 
function OtherCom(props: OtherComProps): JSX.Element {
  return (
    <DemoTestFrame3 className={props.className} >
      <Helmet>
        <title>Frame 5</title>
      </Helmet>
      <FormControlLabel1 control={<Switch defaultChecked={false} color="warning" size="medium" />} label={"Label"} />
    </DemoTestFrame3>
  );
}

export default OtherCom;
