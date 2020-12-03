import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import Enzyme, { shallow, mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import hookActions from './actions/hookActions'

Enzyme.configure({adapter: new EnzymeAdapter()})

it('renders without crashinggg', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  const mockSetName = jest.fn()
  React.useState = jest.fn(() => ["sau", mockSetName])
  const wrapper = shallow(<App />)
  // console.log(wrapper.debug())
  const input = wrapper.find("[data-attribute='textfield']")
  const mockEvent = {target: {value: 'train'}}
  input.simulate('change', mockEvent)
  expect(mockSetName).toBeCalledWith('train')
});

describe('get secret word calls', () => {
  test('getSecretWord', () => {
    const mockGetSecretWord = jest.fn()
    hookActions.getSecretWord = mockGetSecretWord
    const wrapper = mount(<App />)
    expect(mockGetSecretWord).toHaveBeenCalled()
  })

  test('getSecretWord is not called on update', () => {
    const mockGetSecretWord = jest.fn()
    hookActions.getSecretWord = mockGetSecretWord
    const wrapper = mount(<App />)
    mockGetSecretWord.mockClear()
    wrapper.setProps()
    expect(mockGetSecretWord).not.toHaveBeenCalled()
  })
})

describe('loading spinner', () => {

  test('no spinner if there is a secret word', () => {
    React.useState = jest.fn(() => ["", jest.fn()])

    const wrapper = shallow(<App />)
    const spinner = wrapper.find("[data-attribute='loader']")
    expect(spinner.exists()).toBe(true)
  })

})

describe('multiple useStates', () => {

  test('useStates', () => {
    React.useState = jest.fn().mockReturnValueOnce(["saurabh", jest.fn()]).mockReturnValueOnce([30, jest.fn()])
    const wrapper = shallow(<App />)
    const display = wrapper.find("[data-attribute='name']").text()
    const displayAge = wrapper.find("[data-attribute='age']").text()
    expect(display).toBe('saurabh')
    expect(displayAge).toBe("30")
  })

})
