import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from '../components/SearchBox';

describe('SearchBox component', () => {
  it('expect to render SearchBox component', () => {
    expect(shallow(<SearchBox />)).toMatchSnapshot();
  });
});
