export default class bgxStore {
    constructor (stateFeatures={},methods={}) {
        this.state = stateFeatures;
        this.method = methods;
    }

    addStateFeature(obj) {
        if (typeof obj === 'object') {
            let props = Object.keys(obj);

            props.forEach((key) => {
                Object.defineProperty(this.state, props[key], {
                    value: param[key],
                    writable: true
                });
            })
        } else {
            throw 'The argument obj must be in object data-type.'
        }
    }

    addMethod(param) {
        if (typeof param === 'object') {
            let props = Object.keys(param);

            propValue.forEach((key) => {
                Object.defineProperty(this.method, props[key], {
                    value: param[key],
                    writable: false
                })
            });
        }
    }

}