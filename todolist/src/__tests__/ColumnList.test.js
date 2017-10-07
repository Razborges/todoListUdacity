import React from 'react';
import ColumnList from '../ColumnList';
import { shallow, mount, render } from 'enzyme';

it('renderiza corretamente', () => {
  expect(shallow(<ColumnList/>)).toMatchSnapshot();
});

it('renderiza toda arvore de componente, Done', () => {
  expect(render(<ColumnList title='Done'/>)).toMatchSnapshot();
});

it('renderiza toda arvore de componente, To Do', () => {
  expect(render(<ColumnList title='To Do'/>)).toMatchSnapshot();
});

it('ao submeter o formulario, chamada addTask', () => {
  const addTask = jest.fn();
  const test = mount(
    <ColumnList
      title='To Do'
      addTask={addTask}
    />
  );
  test.find('form').simulate('submit');
  expect(addTask).toHaveBeenCalledTimes(1);
});

it('renderiza lista de elementos', () => {
  const test = mount(
    <ColumnList title='To Do' items={[{ id: 'id', title: 'Meu teste', status: 'To Do' }]}/>
  );
  expect(test.find('li').length).toBe(1);
});

describe('Usuário interage com Lista', () => {
  it('usuario seleciona to do da lista', () => {
    const updateTask = jest.fn();
    const test = mount(
      <ColumnList
        title='To Do'
        items={[{ id: 'id', title: 'Meu teste', status: 'To Do' }]}
        updateTask={updateTask}
      />
    );
    test.find('li').find('input').simulate('change');
    expect(updateTask).toHaveBeenCalledTimes(1);
  });
});