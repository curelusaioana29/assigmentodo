import React from 'react';
import styled from 'styled-components';

const IEPanelContainer = styled.div`
  display: none;
  background: #212121;
  padding: 10px 0;
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.3);
  clear: both;
  text-align: center;
  position: relative;
  z-index: 1;

  html.ie-10 &,
  html.lt-ie-10 & {
    display: block;
  }
`;

const IEPanel = () => {
  return (
    <IEPanelContainer className="ie-panel">
      <a href="http://windows.microsoft.com/en-US/internet-explorer/">
        <img
          src="images/ie8-panel/warning_bar_0000_us.jpg"
          height="42"
          width="820"
          alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."
        />
      </a>
    </IEPanelContainer>
  );
};

export default IEPanel;
