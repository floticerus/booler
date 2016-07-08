/** The MIT License (MIT)

Copyright (c) 2016 Kevin von Flotow

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */
+function()
{
  // required for classes
  'use strict'

  // default truthy values to use
  const truthy_values = [
    true,
    1,
    'true',
    '1',
    'on',
    'yes',
    'active'
  ]

  class Booler
  {
    constructor( conf )
    {
      conf = conf || {}

      // store as plain-object for faster searches
      this.truthy_values = {}

      // no need to filter since we're inserting into an object
      truthy_values.concat( ( conf.truthy_values || [] ) ).forEach( ( v ) =>
        {
          this.truthy_values[ v ] = true
        }
      )
    }

    test( b )
    {
      if ( typeof b === 'undefined' )
      {
        return false
      }

      return this.truthy_values[ b ] ? true : false
    }

    setTrue( values )
    {
      if ( typeof values === 'undefined' )
      {
        return
      }

      if ( !Array.isArray( values ) )
      {
        values = [ values ]
      }

      values.forEach( ( value ) =>
        {
          this.truthy_values[ value ] = true
        }
      )
    }

    setFalse( values )
    {
      if ( typeof values === 'undefined' )
      {
        // remove ALL
        this.truthy_values = {}

        return
      }

      if ( !Array.isArray( values ) )
      {
        values = [ values ]
      }

      values.forEach( ( value ) =>
        {
          if ( this.truthy_values[ value ] )
          {
            this.truthy_values[ value ] = null
            delete this.truthy_values[ value ]
          }
        }
      )
    }
  }

  module.exports = Booler
}()
