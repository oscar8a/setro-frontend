import React from 'react';

import IntroText from './IntroText';

export default {
    title: 'Example/IntroText',
    component: IntroText,
  };
  
  const Template = (args) => <IntroText {...args} />;
  
  export const Welcome = Template.bind({});
  Welcome.args = {
    user: {},
  };
  
//   export const LoggedOut = Template.bind({});
//   LoggedOut.args = {};