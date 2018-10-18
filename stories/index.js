import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Modal,
  Loading,
  Button,
  Select,
  Checkbox,
} from '../src/components';

storiesOf('Modal', module)
  .add('no title', () => <Modal show={true} onClose={action('Modal -> with text -> onClose')}>with text</Modal>)
  .add('with text', () => <Modal title="title" show={true} onClose={action('Modal -> with text -> onClose')}>with text</Modal>)

storiesOf('Loading', module)
  .add('no loading screen', () => <Loading loading={false} />)
  .add('show loading screen', () => <Loading loading={true} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('Button -> with text -> onClick')}>with text</Button>)
  .add('without any props', () => <Button />)

const options = [{value: 1}, {value: 2}, {value: 3, text: 'three'}, {value: 4}]

storiesOf('Select', module)
  .add('with only options', () => <Select options={options} />)
  .add('with only options, available changing',
    () => <Select options={options} onChange={action('Select -> with only options, available changing -> onChange')}/>)
  .add('without options', () => <Select />)

storiesOf('Checkbox', module)
  .add('checked', () => <Checkbox checked={true} onChange={action('Checkbox -> checked -> onChange')} />)
  .add('unchecked', () => <Checkbox checked={false} onChange={action('Checkbox -> unchecked -> onChange')} />)