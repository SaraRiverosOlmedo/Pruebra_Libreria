import React from 'react';
import Table from '../Components/Table';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    isFavoritesView: { control: 'boolean' },
  },
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'Country', accessor: 'country' },
  ],
  data: [
    { name: 'John', age: 30, country: 'USA' },
    { name: 'Alice', age: 25, country: 'Canada' },
    { name: 'Bob', age: 35, country: 'UK' },
  ],
};

export const FavoritesView = Template.bind({});
FavoritesView.args = {
  ...Default.args,
  isFavoritesView: true,
  data: [
    { name: 'John', age: 30, country: 'USA', favorite: true },
    { name: 'Alice', age: 25, country: 'Canada', favorite: false },
    { name: 'Bob', age: 35, country: 'UK', favorite: true },
  ],
};

export const EmptyState = Template.bind({});
EmptyState.args = {
  ...Default.args,
  data: [],
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  ...Default.args,
  data: null,
};
