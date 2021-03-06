import * as React from 'react';
import { create } from 'react-test-renderer';
import Pager from './Pager';

describe('Table.Pager', () => {
  it('renders correctly', () => {
    const handleOnChangeMock = jest.fn();
    handleOnChangeMock.mockImplementationOnce(() => 'My mock is called');

    const component = create(
      <Pager numberPages={10} onChange={handleOnChangeMock} currentPage={1} />
    );

    expect(component).toMatchSnapshot();
  });
});
