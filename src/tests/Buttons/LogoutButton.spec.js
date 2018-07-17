import React from 'react';
import { shallow } from 'enzyme';
import LogoutButton from '../../components/Buttons/LogoutButton';

const props = {
  text: 'Logout',
  onClick: jest.fn()
};

const component = shallow(<LogoutButton {...props} />);

describe('<LogoutButton />', () => {
  it('renders successfully', () => {
    expect(component).toHaveLength(1);
  });

  it('should render the correct text', () => {
    expect(component.find('button').text()).toContain('Logout');
  });

  // it('should call onChange when clicked', () => {
  //   wrapper.find('input').simulate('click');
  //   expect(onChangeMock).toHaveBeenCalledTimes(1);
  // });
});
