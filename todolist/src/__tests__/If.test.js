import React from 'react';
import If from '../If';
import { shallow } from 'enzyme';

it('renderiza corretamente', () => {
  const test = (
    <If test = { true }>
      <span>Olá Teste</span>
    </If>
  );
  expect(shallow(test)).toMatchSnapshot();
});

it('renderiza corretamente sem elemento filho', () => {
  const test = (
    <If test = { false }>
      <span>Olá Teste</span>
    </If>
  );
  expect(shallow(test)).toMatchSnapshot();
});