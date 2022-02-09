'use strict';

var username = document.querySelector('#email');

/**
 *  NEVER EVER DO THIS! You'll annoy and irritate
 *  your users!
**/

username.addEventListener('focus', function(event) {
  if (this.value === '') {
    console.log('OMG put in a username! This is required!');
  }
})
