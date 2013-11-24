'use strict';

var has = require('../index.js');

describe('Deep-has', sandbox(function () {
    var res, obj;

    obj = {
        foo: {
            bish: {
                bash: {
                    bosh: 'foobar'
                }
            }
        },
        bar: {
            boom: {
                bish: {
                    bash: {
                        bosh: 'barfoo'
                    }
                }
            }
        },
        bosh: 123,
        bish: {
            bash: {
                bosh: false
            }
        },
        boom: {
            bosh: {
                bish: {
                    bash: true
                }
            }
        }
    };

    beforeEach(function () {
        res = has(obj, 'bosh');
    });

    it('matches no matter how deep', function () {
        res[0].should.deep.equal({ 'bosh': 123 });
        res[1].should.deep.equal({ 'foo.bish.bash.bosh': 'foobar' });
        res[2].should.deep.equal({ 'bar.boom.bish.bash.bosh': 'barfoo' });
        res[3].should.deep.equal({ 'bish.bash.bosh': false });
        res[4].should.deep.equal({ 'boom.bosh': obj.boom.bosh });
    });

}));