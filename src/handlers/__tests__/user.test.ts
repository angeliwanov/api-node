import * as user from "../users";

describe('user handler', () => {
  
  it('should create new user', async () => {
    const req = {body: {username: 'bobi', password: '12345'}};
    const res = {json({token}) {
      expect(token).toBeTruthy()
    }}
    await user.createNewUser(req, res, ()=>{})
  })
})