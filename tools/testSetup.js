import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import toBeType from 'jest-tobetype';

expect.extend(toBeType);

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
