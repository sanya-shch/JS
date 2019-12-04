const person = {
    name: 'Sanya'
};

function info(phone, email) {
    console.log(`Name: ${this.name}, Phone: ${phone}, Email: ${email}`);
}



console.log('bind');

function bind(fn, context, ...rest) {
  return function(...args) {
    const uniqId = Date.now().toString();

    context[uniqId] = fn;

    const result = context[uniqId](...rest.concat(args));

    delete context[uniqId];

    return result;
  }
}

bind(info, person)('12-34-56', 'sanya@gmail.com');
bind(info, person, '12-34-56')('sanya@gmail.com');
bind(info, person, '12-34-56', 'sanya@gmail.com')();



console.log('bind es5');

function bindES5(fn, context) {
    const rest = Array.prototype.slice.call(arguments, 2);
    return function() {
        const args = Array.prototype.slice.call(arguments);
        return fn.apply(context, rest.concat(args));
    }
}

bindES5(info, person)('12-34-56', 'sanya@gmail.com');
bindES5(info, person, '12-34-56')('sanya@gmail.com');
bindES5(info, person, '12-34-56', 'sanya@gmail.com')();



console.log('call');

function call(fn, context, ...args) {
    const uniqId = Date.now().toString();

    context[uniqId] = fn;

    const result = context[uniqId](...args);

    delete context[uniqId];

    return result;
}

call(info, person, '12-34-56', 'sanya@gmail.com');



console.log('apply');

function apply(fn, context, args) {
    const uniqId = Date.now().toString();

    context[uniqId] = fn;

    const result = context[uniqId](...args);

    delete context[uniqId];

    return result;
}

apply(info, person, ['12-34-56', 'sanya@gmail.com']);