import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Header from '../components/header/index';
import Footer from '../components/footer/index';

describe('<App/>', () => {
  it('is alive at application start', () => {
    let app = shallow(<Header />);
    expect(app.find('h1').exists()).toBeTruthy();
  });

  it('is alive at application start', () => {
    let app = shallow(<Footer />);
    expect(app.find('footer').exists()).toBeTruthy();
  });

 });