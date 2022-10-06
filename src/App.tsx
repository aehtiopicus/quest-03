import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/QuestDesignSystem5LightTheme';
import Frame1 from 'src/components/Frame1/Frame1';
import OtherCom from 'src/components/OtherCom/OtherCom';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="index" element={<Frame1/>} />
          <Route path="switch" element={<OtherCom/>} />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;