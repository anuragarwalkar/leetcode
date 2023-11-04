var cancellable = function(fn, args, t) {
    fn(...args);
    const setIntervalId = setInterval(() => fn(...args), t);

    return () => {
        clearInterval(setIntervalId)
    }
};

const cancel = cancellable((x) => x * 2, [4], 35);

setTimeout(cancel, 190);