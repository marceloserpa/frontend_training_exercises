
import { expect } from '../test_base'
import { signinLogin } from '../../src/actions/index';

describe('actions', () => {

    it('should have the correct type', () => {
        const action = signinLogin({username: 'test', password: '123'});
        expect(action.type).to.be.equal('SIGNIN_LOGIN');
    });

});
