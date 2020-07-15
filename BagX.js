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

    mutate(stateFeature,payload=null) {
       if (typeof stateFeature === 'string'){
        this.state[stateFeature] = payload;
        } else {
            throw 'stateKey must be in string';
        }
    }

    publish(stateFeature='') {
        if ((typeof stateFeature === 'string') & (stateFeature !== '')) {
           return this.state[stateFeature];
        } else if (key === '') {
            return this.state
        } else {
            throw 'The argument `key` must be in string.'
        }
    }

}