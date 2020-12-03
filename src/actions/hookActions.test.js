import moxios from 'moxios'

import hookActions from './hookActions'

describe('moxios tests', () => {
  beforeEach(() =>{
    moxios.install()
  });

  afterEach(() =>{
    moxios.uninstall()
  });

  test('call getSecretWord callback on axios response', async () => {
    const sw = 'party'
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status:200,
        response:sw,
      })

    })

    const mockSecretWord = jest.fn()
    await hookActions.getSecretWord(mockSecretWord)
    expect(mockSecretWord).toHaveBeenCalledWith(sw)

  })

})
