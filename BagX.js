import bgxStore from './store.js'

export default class BagX extends bgxStore{

    constructor (stateFeatures={},methods={}) {
        super(stateFeatures,methods)
    }

    dispatch(action, payload=null) {
        if (typeof action === 'string') {
            this.method[action](payload);
        }else {
            throw 'action must be in string'
        }
    }

    mutate(stateKey,payload=null) {
       if (typeof stateKey === 'string'){
        this.state[stateKey] = payload;
        } else {
            throw 'stateKey must be in string';
        }
    }

    publish(key='') {
        if ((typeof key === 'string') & (key !== '')) {
           return this.state[key];
        } else if (key === '') {
            return this.state
        } else {
            throw 'The argument `key` must be in string.'
        }
    }

}