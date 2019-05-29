'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Country', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.voice.v1.dialingPermissions
                                   .countries('US').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var isoCode = 'US';
      var url = `https://voice.twilio.com/v1/DialingPermissions/Countries/${isoCode}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'iso_code': 'US',
          'name': 'United States/Canada',
          'country_codes': [
              '+1'
          ],
          'continent': 'NORTH_AMERICA',
          'low_risk_numbers_enabled': false,
          'high_risk_special_numbers_enabled': false,
          'high_risk_tollfraud_numbers_enabled': false,
          'url': 'https://voice.twilio.com/v1/DialingPermissions/Countries/US',
          'links': {
              'highrisk_special_prefixes': 'https://voice.twilio.com/v1/DialingPermissions/Countries/US/HighRiskSpecialPrefixes'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.voice.v1.dialingPermissions
                                   .countries('US').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'content': [
              {
                  'iso_code': 'US',
                  'name': 'United States/Canada',
                  'country_codes': [
                      '+1'
                  ],
                  'continent': 'NORTH_AMERICA',
                  'low_risk_numbers_enabled': false,
                  'high_risk_special_numbers_enabled': false,
                  'high_risk_tollfraud_numbers_enabled': false,
                  'url': 'https://voice.twilio.com/v1/DialingPermissions/Countries/US',
                  'links': {
                      'highrisk_special_prefixes': 'https://voice.twilio.com/v1/DialingPermissions/Countries/US/HighRiskSpecialPrefixes'
                  }
              }
          ],
          'meta': {
              'first_page_url': 'https://voice.twilio.com/v1/DialingPermissions/Countries?IsoCode=US&PageSize=50&Page=0',
              'key': 'content',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://voice.twilio.com/v1/DialingPermissions/Countries?IsoCode=US&PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.voice.v1.dialingPermissions
                     .countries.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'content': [
              {
                  'iso_code': 'US',
                  'name': 'United States/Canada',
                  'country_codes': [
                      '+1'
                  ],
                  'continent': 'NORTH_AMERICA',
                  'low_risk_numbers_enabled': false,
                  'high_risk_special_numbers_enabled': false,
                  'high_risk_tollfraud_numbers_enabled': false,
                  'url': 'https://voice.twilio.com/v1/DialingPermissions/Countries/US',
                  'links': {
                      'highrisk_special_prefixes': 'https://voice.twilio.com/v1/DialingPermissions/Countries/US/HighRiskSpecialPrefixes'
                  }
              }
          ],
          'meta': {
              'first_page_url': 'https://voice.twilio.com/v1/DialingPermissions/Countries?IsoCode=US&PageSize=50&Page=0',
              'key': 'content',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://voice.twilio.com/v1/DialingPermissions/Countries?IsoCode=US&PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.voice.v1.dialingPermissions
                     .countries.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://voice.twilio.com/v1/DialingPermissions/Countries',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'content': [
              {
                  'iso_code': 'US',
                  'name': 'United States/Canada',
                  'country_codes': [
                      '+1'
                  ],
                  'continent': 'NORTH_AMERICA',
                  'low_risk_numbers_enabled': false,
                  'high_risk_special_numbers_enabled': false,
                  'high_risk_tollfraud_numbers_enabled': false,
                  'url': 'https://voice.twilio.com/v1/DialingPermissions/Countries/US',
                  'links': {
                      'highrisk_special_prefixes': 'https://voice.twilio.com/v1/DialingPermissions/Countries/US/HighRiskSpecialPrefixes'
                  }
              }
          ],
          'meta': {
              'first_page_url': 'https://voice.twilio.com/v1/DialingPermissions/Countries?IsoCode=US&PageSize=50&Page=0',
              'key': 'content',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://voice.twilio.com/v1/DialingPermissions/Countries?IsoCode=US&PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.voice.v1.dialingPermissions
                     .countries.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.voice.v1.dialingPermissions
                                   .countries.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://voice.twilio.com/v1/DialingPermissions/Countries';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_us response',
    function() {
      var body = JSON.stringify({
          'content': [
              {
                  'iso_code': 'US',
                  'name': 'United States/Canada',
                  'country_codes': [
                      '+1'
                  ],
                  'continent': 'NORTH_AMERICA',
                  'low_risk_numbers_enabled': false,
                  'high_risk_special_numbers_enabled': false,
                  'high_risk_tollfraud_numbers_enabled': false,
                  'url': 'https://voice.twilio.com/v1/DialingPermissions/Countries/US',
                  'links': {
                      'highrisk_special_prefixes': 'https://voice.twilio.com/v1/DialingPermissions/Countries/US/HighRiskSpecialPrefixes'
                  }
              }
          ],
          'meta': {
              'first_page_url': 'https://voice.twilio.com/v1/DialingPermissions/Countries?IsoCode=US&PageSize=50&Page=0',
              'key': 'content',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://voice.twilio.com/v1/DialingPermissions/Countries?IsoCode=US&PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.voice.v1.dialingPermissions
                                   .countries.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});
