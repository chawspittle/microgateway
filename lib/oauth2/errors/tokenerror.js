// © Copyright IBM Corporation 2016,2017.
// Node module: microgateway
// LICENSE: Apache 2.0, https://www.apache.org/licenses/LICENSE-2.0

'use strict';

var util = require('util');
/**
 * Module dependencies.
 */
var OAuth2Error = require('./oauth2error');

/**
 * `TokenError` error.
 *
 * @api public
 */
function TokenError(message, code, uri, status) {
  if (!status) {
    switch (code) {
      case 'invalid_request': status = 400; break;
      case 'invalid_client': status = 401; break;
      case 'invalid_grant': status = 403; break;
      case 'unauthorized_client': status = 403; break;
      case 'unsupported_grant_type': status = 400; break;
      case 'invalid_scope': status = 400; break;
      case 'unsupported_token_type': status = 400; break;
      default: throw new Error('Invalid code for TokenError');
    }
  }

  OAuth2Error.call(this, message, code, uri, status);
  Error.captureStackTrace(this, TokenError);
  this.name = 'TokenError';
}

/**
 * Inherit from `OAuth2Error`.
 */
util.inherits(TokenError, OAuth2Error);

/**
 * Expose `TokenError`.
 */
module.exports = TokenError;
