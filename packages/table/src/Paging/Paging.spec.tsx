import * as React from 'react';
import { create } from 'react-test-renderer';
import Paging from './Paging';

describe('Table.Paging', () => {
  it('renders correctly', () => {
    const handleOnChangeMock = jest.fn();
    handleOnChangeMock.mockImplementationOnce(() => 'My mock is called');

    const component = create(
      <Paging
        numberItems={20}
        numberPages={10}
        onChange={handleOnChangeMock}
        currentPage={1}
        id="pagingid"
      />
    );

    expect(component).toMatchSnapshot();
  });
});
