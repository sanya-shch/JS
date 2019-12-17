function flattenMap(map) {
    function iter(part, keys) {
        Object.keys(part).forEach(function (k) {
            if (part[k] !== null && !Array.isArray(part[k]) && typeof part[k] === 'object') {
                return iter(part[k], keys.concat(k));
            }
            flat[keys.concat(k).join('/')] = part[k];
        });
    }

    var flat = {};
    iter(map, []);
    return flat;
}

function flattenMap2(map, way, res) {
    way = way || [];
    res = res || {};
    for (var key in map) {
        // console.log("key is " + key);
        // console.log("way is "+ way);
        var arr = way.concat([key]);
        // console.log("arr is " + arr);
        if ({}.toString.call(map[key]) === '[object Object]') {
            flattenMap2(map[key], arr, res);
        } else {
            res[arr.join('/')] = map[key];
        }
    }
    return res;
}

var input = {
    'a': {
        'b': {
            'c': 12,
            'd': 'Hello World'
        },
        'e': [1,2,3]
    }
};

console.log(flattenMap(input));
console.log(flattenMap2(input));