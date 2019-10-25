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
  Tabs,
  Table, Tr, Th, Td,
  Text,
} from '../src/components';

storiesOf('Modal', module)
  .add('with title no footer', () => <Modal title="title" show onClose={action('Modal -> with title no footer -> onClose')}>with title, text</Modal>)
  .add('no title with footer', () => <Modal show fixedBottom onClose={action('Modal -> no title with footer -> onClose')}>no title with footer</Modal>)
  .add('no title no footer', () => <Modal show>no title no footer</Modal>)
  .add('with title fixed bottom', () => <Modal title="title" show fixedBottom onClose={action('Modal -> with title fixed bottom -> onClose')}>no title no footer</Modal>);

storiesOf('Loading', module)
  .add('no loading screen', () => <Loading loading={false} />)
  .add('show loading screen', () => <Loading loading />);

storiesOf('Message', module)
  .add('no message', () => <Message message="" />)
  .add('with message', () => <Message message="Error Message" />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('Button -> with text -> onClick')}>with text</Button>)
  .add('without any props', () => <Button />);

const options = [{ value: 1 }, { value: 2 }, { value: 3, text: 'three' }, { value: 4 }];

storiesOf('Select', module)
  .add('with only options', () => <Select options={options} />)
  .add('with only options, available changing',
    () => <Select options={options} onChange={action('Select -> with only options, available changing -> onChange')} />)
  .add('without options', () => <Select />);

storiesOf('Checkbox', module)
  .add('checked', () => <Checkbox checked onChange={action('Checkbox -> checked -> onChange')} />)
  .add('unchecked', () => <Checkbox checked={false} onChange={action('Checkbox -> unchecked -> onChange')} />);

storiesOf('Table', module)
  .add('with tr, th and td', () => (
    <Table>
      <Tr>
        <Th>Header</Th>
      </Tr>
      <Tr>
        <Td>Content</Td>
      </Tr>
    </Table>
  ))
  .add('with tr and th', () => <Table><Tr><Th>Header</Th></Tr></Table>)
  .add('with tr and td', () => <Table><Tr><Td>Content</Td></Tr></Table>)
  .add('with th and td', () => (
    <Table>
      <Th>Header</Th>
      <Td>Content</Td>
    </Table>
  ))
  .add('with tr and 2 columns of th, td',
    () => (
      <Table>
        <Tr>
          <Th>Header</Th>
          <Th>Header 1</Th>
        </Tr>
        <Tr>
          <Td>Content</Td>
          <Td>Content 2</Td>
        </Tr>
      </Table>
    ));

storiesOf('Tabs', module)
  .add('tabs', () => <Tabs />);

storiesOf('Text', module)
  .add('without text', () => <Text />)
  .add('one sentence', () => <Text>akdjhflakuerhgliuerhg</Text>)
  .add('two sentences', () => (
    <Text>
      <div>asdfghjkl</div>
      <div>zxcvbnm</div>
    </Text>));
