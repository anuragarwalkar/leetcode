class EventEmitter {

    constructor() {
        this.events = new Map();
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
	subscribe(eventName, callback) {

        if(!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        const callbackArray = this.events.get(eventName);
        callbackArray.push(callback);
      	
		return {
			unsubscribe: () => {
				const callbackArray = this.events.get(eventName)
                const callbackIndex = callbackArray.findIndex(i => i === callback);
                this.events.set(callbackArray.splice(callbackIndex, 1));
			}
		};
	}
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
	emit(eventName, args = []) {
        if(!this.events.has(eventName)) {
            return;
        }

        const callbackArray = this.events.get(eventName);
        return callbackArray.map(callback => callback(...args));
	}
}


const emitter = new EventEmitter();
 // Subscribe to the onClick event with onClickCallback
function onClickCallback() { return 99 }
const sub = emitter.subscribe('onClick', onClickCallback);
const sub2 = emitter.subscribe('onClick', () => {return 100});

sub.unsubscribe(); // undefined

console.log(emitter.emit('onClick')); // [99]
