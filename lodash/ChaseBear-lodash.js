// for (let [key, value] of a.entries()) {
//     console.log(key, value);
// }



var _ = {
    compact: function (array) {
        return array.filter((item, index, array) =>
            !(item === 0 || item === null || item === "" || item === false || item === undefined || isNaN(item) === true)
        )

    },

    concat: function (array, ...values) {
        array.push(...values);

        return array;

    },

    difference: function (array, values) {
        return array.filter((item, index, array) => {

            for (let i = 0; i < values.length; i++) {
                if (item === values[i])
                    return false;
            }
            return true;
        })
    },


    difference2: function (array, values) {
        var s = new Set(array);
        var t = new Set(values);
        var diff = new Set([...s].filter(item => !t.has(item)))
        return [...diff];
    },

    differenceBy: function (array, values = 0, iteratee = 0) {
        if (this.arguments === 1)
            return array;
        else if (this.arguments === 2) {
            var s = new Set(array);
            var t = new Set(values);
            var diff = new Set([...s].filter(item => !t.has(item)))
            return [...diff];
        }
        else {
            var s = new Set(array.map((item) => iteratee(item)));
            var t = new Set(values.map((item) => iteratee(item)));
            var diff = new Set([...s].filter(item => !t.has(item)))
            return [...diff];
        }
    },

    drop: function (array, n = 1) {
        return array.filter((item, index) => (index >= n));
    },

    dropRight: function (array, n = 1) {
        return array.filter((item, index) => (index < n));
    },

    fill: function (array, value, start = 0, end = array.length) {
        let st = start;
        let ed = end;
        return array.map((element, index) => {
            if (index >= st && index < ed) {
                element = value;
                return element;
            }
        }).filter(item => (!item === undefined));
    },

    findIndex: function (array, predicate = null, fromIndex = 0) {
        return array.map((item, index) => {
            if (predicate(item) !== undefined && index >= fromIndex) {
                return index;
            }
        })
    },

    head: function (array) {
        if (array.length < 1)
            return undefined;
        return array[0];
    },



    flatten: function (array) {
        var out = [];
        for (let i = 0; i < array.length; i++) {
            if (typeof (array[i]) === 'object') {
                out = out.concat(array[i]);

            }
            else {
                out.push(array[i]);
            }
        };
        return out;
    },

    flattenDeep: function (array) {
        var str = JSON.stringify(array).replace(/\[|\]/g, "");
        return JSON.parse(Array.of('[' + str + ']')[0]);
    },

    flattenDepth: function (array, depth = 1) {
        while (depth--) {
            let a = (e_array) => (this.flatten(e_array));
            array = a(array);
        }
        return array;
    },

    fromPairs: function (ary) {
        return ary.reduce((result, element) => {
            result[element[0]] = element[1];
            return result;
        }, {});
    },

    head: function (ary) {
        return ary.length > 0 ? ary[0] : ary
    },

    indexOf: function (array, value, fromIndex = 0) {
        if (fromIndex >= 0) {
            for (let i = fromIndex; i < array.length; i++) {
                if (value === array[i])
                    return i;
            }
        }

        else {
            for (let i = array.length + fromIndex; i < array.length; i++) {
                if (value === array[i])
                    return i;
            }

        }
        return -1;
    },

    initial: function (array) {
        array.length > 0 ? array.pop() : array = [];
        return array;

    },

    intersection: function (...array) {
        // var s1 = arguments[0];
        // for (let i = 1; i < arguments.length; i++) {
        //     var s2 = new Set(arguments[i]);
        //     s1 = s1.filter(item => s2.has(item)==true)
        // }
        // return Array.from(s1);

        var arg = Array.from(arguments);
        return arg.reduce((result, item) => {
            let s2 = new Set(item);
            result = result.filter(item => s2.has(item) == true);
            return result;
        }, arguments[0])
    },

    intersectionBy: function (f, ...array) {

        var arg = Array.from(arguments);
        arg.shift();
        var result = arg.map((item) => { return item.map((sub_item) => f(sub_item)) });
        return ((result) => (this.intersection(...result)))(result);
    },

    intersectionWith: function (compare, ...array) {
        var arg = Array.from(arguments);
        arg.shift();
        if (arg.length <= 1)
            return arg;
        var result = arg.reduce((prev, item) => { var data = item; var res = prev.filter((sub_item, index) => compare(sub_item, data)); prev = res; return res });
        var my_array = Array.from(new Set(result));
        return my_array;
    },
    join: function (array, sep) {
        if (array.length == 0) return "";
        var res = array.reduce((prev, element) => {
            prev += sep;
            prev += element;
            return prev;
        });

        return res;
    },

    last: function (array) {
        return array.length < 1 ? [] : array[array.length - 1];
    },

    lastIndexOf: function (array, value, fromIndex = array.length - 1) {
        for (let i = fromIndex; i >= 0; i--) {
            if (array[i] === value)
                return i;
        }
        return -1;
    },

    nth: function (array, n = 0) {
        if (n > 0)
            n = n - 1;
        else if (n === 0)
            return array[0];
        else
            n = array.length + n;
        var rel = array.filter((item, index) => {
            if (index === n) return item;
        });

        return rel && 1 ? rel : -1;
    },

    pull: function (array, ...value) {
        var s2 = new Set(value);
        return array.filter((item, index) => !s2.has(item))
    },

    pullAll: function (array, ary) {
        var s = new Set(ary);
        var res = array.filter((item) => (!s.has(item)));
        return res;
    },

    pullAllBy: function (array, values, iteratee = f) {
        var res = array.filter((item) => item == iteratee());
        var src = values.filter((item) => item == iteratee());

        return ((res, src) => this.pullAll(res, src))(res, src);

    },

    pullAllWith: function (array, values, comparator = f) {


    },

    pullAt: function (array, indexes = 0) {
        // if (indexes < 0 || indexes >= array.length)
        //     return -1;
        let res, out;
        if (Array.isArray(indexes)) {
            res = array.slice(...indexes);
            out = array.slice(indexes[1] + 1);
        }

        else {
            res = array.slice(0, indexes);
            out = array.slice(indexes + 1);
        }
        return res.concat(out);
    }

}
function compare(item, array) {
    return array.some((sub_item) => (item === sub_item));
}
