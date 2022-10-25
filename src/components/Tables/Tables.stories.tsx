import { ComponentMeta } from '@storybook/react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
  key: string;
  header1: string;
  header2: string;
  header3: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Table Header',
    dataIndex: 'header1',
  },
  {
    title: 'Table Header',
    dataIndex: 'header2',
  },
  {
    title: 'Table Header',
    dataIndex: 'header3',
  },

  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>View | Update | Remove</a>,
  }
];

const data: DataType[] = [
  {
    key: '1',
    header1: 'Table row',
    header2: 'Table row',
    header3: 'Table row',
  },
  {
    key: '2',
    header1: 'Table row',
    header2: 'Table row',
    header3: 'Table row',
  },
  {
    key: '3',
    header1: 'Table row',
    header2: 'Table row',
    header3: 'Table row',
  },
  {
    key: '4',
    header1: 'Table row',
    header2: 'Table row',
    header3: 'Table row',
  },
  {
    key: '5',
    header1: 'Table row',
    header2: 'Table row',
    header3: 'Table row',
  },
];

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    bordered
  />
);

export const table = App;

export default {
    title: 'Tables',
    component: Table,
    argTypes: {
    },
  } as ComponentMeta<typeof Table>;