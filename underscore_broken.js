(function() {
  
  // Call callback(value, key, obj) for each element of obj
  var each = function(obj, callback) {
    if(Array.isArray(obj)){
      for(var i=0; i<obj.length; i++){
        callback(obj[i], i, obj);
      }
    }else{
      for (var key in obj){
        if(obj.hasOwnProperty(key)){
          callback(obj[key], key, obj);
        }
      }
    }
  };

  // Determine if the array or object contains a given value (using `===`).
  var contains = function(obj, target) {
    var doesContain = false;
    _.each(obj, function(val){
      if(val === target){
        doesContain = true;
      }
    });   
    return doesContain;
  };

  // Return the results of applying an iterator to each element.
  var map = function(array, iterator) {
    if(array === null){
      return [];
    } else {
      var result = [];
      for(var i=0;i<array.length;i++){
        result.push(iterator(array[i]));
      }
      return result;
    }
  };



  // Takes an array of objects and returns an array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  var pluck = function(obj, property) {
    var result = _.map(obj, function(thisElement){
      return thisElement[property];
    });
    return result;
  };

  // Return an array of the last n elements of an array. If n is 1, return
  // just the last element
  var last = function(array, n) {
    if(n === null || array === null){return undefined;};
    if(n === undefined){n = 1};
    if(n > array.length){n = array.length};

    var resultArray = [];
    for(var i=array.length - n; i < array.length; i++){
      resultArray.push(array[i]);  
    }

    return resultArray;
  };

  // Like last, but for the first elements
  var first = function(array, n) {
    if(n === null || array === null){return undefined;};
    if(n === undefined){n = 1};
    if(n > array.length){n = array.length};

    var resultArray = [];
    for(var i=0; i < n; i++){
      resultArray.push(array[i]);  
    }

    return resultArray;

  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(previousValue, item) for each item. previousValue should be
  // the return value of the previous iterator call.
  // 
  // You can pass in an initialValue that is passed to the first iterator
  // call. Defaults to 0.
  //
  // Example:
  //   var numbers = [1,2,3];
  //   var sum = _.reduce(numbers, function(previous_value, item){
  //     return previous_value + item;
  //   }, 0); // should be 6
  //
  var reduce = function(obj, iterator, initialValue) {
    var currentValue = initialValue || 0;

    _.each(obj,function(value){
      currentValue=iterator(currentValue,value)

    });
    return currentValue;





    // //iterator(sum, num)
    // for(var i=0; i < obj.length; i++){
    //   currentValue = iterator(currentValue, obj[i]);
    // }

    // return currentValue;
  };

  // Return all elements of an array that pass a truth test.
  var select = function(array, iterator) {
    var newArray = [];

    _.map(array,function(value){
      if(iterator(value)===true){
        newArray.push(value);
      }
    });   
    return newArray;
  } 
    

  // Return all elements of an array that don't pass a truth test.
  var reject = function(array, iterator) {
    var newArray = [];

    _.map(array,function(value){
      if(iterator(value)===false){
        newArray.push(value);
      }
    });   
    return newArray;

  };

  // Determine whether all of the elements match a truth test.
  var every = function(obj, iterator) {
  //     return !!_.reduce(obj, function(truthySoFar, value){
  //       return truthySoFar && iterator(value);
  //     }, true);
  // };

      if(obj.length === 0){ return obj; }
      var truthAccumulator=0;

      _.each(obj, function(value){
        if(iterator(value)){truthAccumulator++; };
      });

      if (truthAccumulator === obj.length){
        return true
      } else {return false}
      
  };

  // Determine whether any of the elements pass a truth test.
  var any = function(obj, iterator) {
    if(iterator){
      var isTrue = false;
      _.each(obj, function(value){
      
        if(iterator(value)){
          isTrue = true;
        } 
      });
      return isTrue;
    } else { 
        var isTrue = false;
      _.each(obj, function(value){
        if(value){
          isTrue = true;
        }
      });
      return isTrue;
    }
  };

  // Produce a duplicate-free version of the array.
  var uniq = function(array) {

    //if the array contains the element in question, don't add it to a 
    //new array.
    var resultArray = [];

    _.each(array, function(value){
      if(!_.contains(resultArray, value)){
        resultArray.push(value);
      }
    });
    return resultArray;
  };

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  var once = function(func) {
    var hasRun = false;
    var result;
    return function(){
      if(hasRun){return result};
      result = func();
      hasRun = true;
      return result;
    };

  };

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // Memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  var memoize = function(func) {
    var hasRun = false;
    var result;
    return function(){
      if(hasRun){return result};
      result = func();
      hasRun = true;
      return result;
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  var delay = function(func, wait) {
  };

  // Extend a given object with all the properties of the passed in 
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  //
  var extend = function(obj) {
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  var defaults = function(obj) {
  };

  // Flattens a multidimensional array to a one-dimensional array that
  // contains all the elements of all the nested arrays.
  //
  // Hints: Use Array.isArray to check if something is an array
  //
  var flatten = function(nestedArray, result) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  var sortBy = function(obj, iterator) {
  };

  // Zip together two or more arrays with elements of the same index 
  // going together.
  // 
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3]]
  var zip = function() {
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  var intersection = function(array) {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  var difference = function(array) {
  };

  // Shuffle an array.
  var shuffle = function(obj) {
  };

  // EXTRA CREDIT:
  // Return an object that responds to chainable function calls for
  // map, pluck, select, etc
  //
  // See README for details
  var chain = function(obj) {
  };

  // EXTRA CREDIT:
  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  //
  // See README for details
  var throttle = function(func, wait) {
  };

  this._ = {
    each: each,
    contains: contains,
    map: map,
    pluck: pluck,
    last: last,
    first: first,
    reduce: reduce,
    select: select,
    reject: reject,
    every: every,
    any: any,
    uniq: uniq,
    once: once,
    memoize: memoize,
    delay: delay,
    extend: extend,
    defaults: defaults,
    flatten: flatten,
    sortBy: sortBy,
    zip: zip,
    intersection: intersection,
    difference: difference,
    shuffle: shuffle,
    chain: chain,
    throttle: throttle
  };


}).call(this);
