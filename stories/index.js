import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Modal,
  Loading,
  Message,
  Button,
  Select,
  Checkbox,
  Table, Tr, Th, Td,
} from '../src/components';

storiesOf('Modal', module)
  .add('no title', () => <Modal show={true} onClose={action('Modal -> with text -> onClose')}>no title with text</Modal>)
  .add('with title', () => <Modal title="title" show={true} onClose={action('Modal -> with title -> onClose')}>with title, text</Modal>)

storiesOf('Loading', module)
  .add('no loading screen', () => <Loading loading={false} />)
  .add('show loading screen', () => <Loading loading={true} />)

storiesOf('Message', module)
  .add('no message', () => <Message message="" />)
  .add('with message', () => <Message message="Error Message" />)

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

storiesOf('Table', module)
  .add('with tr, th and td', () => <Table><Tr><Th>Header</Th></Tr><Tr><Td>Content</Td></Tr></Table>)
  .add('with tr and th', () => <Table><Tr><Th>Header</Th></Tr></Table>)
  .add('with tr and td', () => <Table><Tr><Td>Content</Td></Tr></Table>)
  .add('with th and td', () => <Table><Th>Header</Th><Td>Content</Td></Table>)
  .add('with tr and 2 columns of th, td', 
    () => <Table>
        <Tr><Th>Header</Th><Th>Header 1</Th></Tr>
        <Tr><Td>Content</Td><Td>Content 2</Td></Tr>
      </Table>)