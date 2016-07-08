# booler
convert any object to a boolean value

## usage
```javascript
const Booler = require( 'booler' )

const booler = new Booler(
  {
    // force lowercase testing
    lowercase: true,

    // defaults truthy values are...
    // - true
    // - 1
    // - "true"
    // - "on"
    // - "yes"
    // - "active"
    // additional truthy values:
    truthy_values: [ 'sure' ]
  }
)

// returns true
booler.test( 'sure' )

// returns true if lowercase is true
booler.test( 'SuRe' )

// returns false
booler.test( 'no' )

// returns true
booler.test( 1 )

// returns false
booler.test( 0 )
```

### more features...
```javascript
const booler = new Booler()

// removes ALL truthy values
booler.setFalse()

// define some values
booler.setTrue( 'yup' )

// it doesn't have to be a string or number
booler.setTrue( object )

// it can also take an array
booler.setTrue( [ 'yeah', 'yes', 'yep', 1 ] )
```
