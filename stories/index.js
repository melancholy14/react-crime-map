import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Modal,
} from '../src/components';

storiesOf('Modal', module)
  .add('with text', () => <Modal show={true} onClose={action('clicked')}></Modal>)
  .add('showFooter - false', () => <Modal show={true} showFooter={false}></Modal>);
