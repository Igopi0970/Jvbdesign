import React from 'react';
import { action } from '@storybook/addon-actions';
import PopoverDemo from '../src/components/PopoverBtn'
import '../src/components/ComponentsStyles.css'
export default {
    title: 'popover',             
  };
  export const popover = () => (
    <div className="UI-Section-content">
      <PopoverDemo position="bottom" />
        </div>
  
  );