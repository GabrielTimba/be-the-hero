const generateUniqueID=require('../../src/utils/generateUniqueId');

describe('Generate Unique ID',()=>{
    it('shoud generate a unique id',()=>{
        const id=generateUniqueID();

        expect(id).toHaveLength(8);
    })
});