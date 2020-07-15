# BagX-JS
First OOP attempt to test my understanding about tate management by creating a simple library.
//I haven't run some tests of my library because I only wrote it out of boredom.//
# Getting Started
## Store initialization
You can simply initialize the store if you haven't decided what state features and methods you want to include by the given sample code snippet below.
```ruby
var store = new BagX();
```
The class ``BagX()`` can take 2 arguments which are ``stateFeatures`` and ``methods``; both arguments are of object data type.
```ruby
var store = new BagX({feature1: ..., feature2: ..., ....}, {method1: ...., method2...., ....})
```
## Adding stateFeature and method
Both parameters, obj and param, are in object data type. The method that is added is not writable, this means the user can't change the existing function of a certain method once it was added.
```ruby
store.addStateFeature(obj);
store.addMethod(param);
```
## dispatch
The dispatch is where what method you want to execute from the store and it takes two arguments ``action`` and ``payload``. The ``action`` argument is of string type while
the ``payload`` is ```null``` by default.
```ruby
store.dispatch(action,payload=null);
```

## mutate
The mutate function is where you change the contents of the state. It takes two arguments, ``stateFeature`` and ``payload``, the ``payload`` is ``null`` by default and
``stateFeature`` is of string data type.
```ruby
store.mutate(stateFeature,payload=null);
```

## publish
The publish function is where you get the contents of the state. It takes ``stateFeature`` as the argument and returns the contents of stateFeature from the store's state.
The argument is initialized to ``null``, if it's not stated, it'll return the state contents from the store.
```ruby
store.publish(stateFeature=null);
```
