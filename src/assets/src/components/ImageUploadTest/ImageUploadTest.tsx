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
import ImgQ3DCurrentView2Image from 'src/assets/images/imageuploadtest_img_Q_3D_Current_View2.png';
import VectorImage from 'src/assets/images/imageuploadtest_Vector.png';
import Q3DCurrentView21Image from 'src/assets/images/imageuploadtest_Q_3D_Current_View2_1.png';
import { styled } from '@mui/material/styles';
import ImgFrame4Image from 'src/assets/images/imageuploadtest_img_Frame4.png';
import { ImageUploadTestProps } from 'src/types';

 
const Property1Default: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `9px 60px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
  width: "100%",  
});
  
const ImgFrame4: any = styled("div")({  
  backgroundImage: `url(${ImgFrame4Image})`,  
  backgroundPosition: `center`,  
  backgroundSize: `cover`,  
  backgroundRepeat: `no-repeat`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  height: `137px`,  
  width: `160px`,  
  margin: `0px`,  
  overflow: `hidden`,  
});
  
const Frame5: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `10px 0px 0px 0px`,  
});
  
const Frame3: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  width: `416.41px`,  
  margin: `0px`,  
});
  
const ImgQ3DCurrentView2: any = styled("img")({  
  height: `171.41px`,  
  width: `171.41px`,  
  objectFit: `cover`,  
  flexGrow: `1`,  
  margin: `0px`,  
});
  
const Frame1: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  width: `235px`,  
  margin: `0px 0px 0px 10px`,  
});
  
const EngineeringStandup: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: theme.typography["Typography"]["Body 2"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 2"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 2"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 2"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 2"].letterSpacing,  
  textDecoration: theme.typography["Typography"]["Body 2"].textDecoration,  
  lineHeight: theme.typography["Typography"]["Body 2"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 2"].textTransform,  
  flexGrow: `1`,  
  margin: `0px`,  
}));
  
const PlaylistAddCheck: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 2px`,  
  overflow: `hidden`,  
});
  
const Vector: any = styled("img")({  
  height: `8.67px`,  
  width: `12.67px`,  
  margin: `0px`,  
});
  
const Q3DCurrentView21: any = styled("img")({  
  height: `31.47px`,  
  width: `31.47px`,  
  objectFit: `cover`,  
  margin: `10px 0px 0px 0px`,  
});
 
function ImageUploadTest(props: ImageUploadTestProps): JSX.Element {
  return (
    <Property1Default className={props.className} >
      <ImgFrame4 >
      </ImgFrame4>
      <Frame5 >
        <Frame3 >
          <ImgQ3DCurrentView2  src={ImgQ3DCurrentView2Image} alt={"img:Q_3D-Current-View2"}/>
          <Frame1 >
            <EngineeringStandup >
              {`Engineering Standup`}
                </EngineeringStandup>
            <PlaylistAddCheck >
              <Vector  src={VectorImage} alt={"Vector"}/>
              <Q3DCurrentView21  src={Q3DCurrentView21Image} alt={"Q_3D-Current-View2 1"}/>
            </PlaylistAddCheck>
          </Frame1>
        </Frame3>
      </Frame5>
    </Property1Default>
  );
}

export default ImageUploadTest;
