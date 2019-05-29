/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2 = require('../../V2');
import { SerializableClass } from '../../../../interfaces';

type VerificationChannel = 'sms'|'call';

type VerificationStatus = 'canceled'|'approved';

/**
 * Initialize the VerificationList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Service that the resource is associated with
 */
declare function VerificationList(version: V2, serviceSid: string): VerificationListInstance;

/**
 * Options to pass to update
 *
 * @property status - The new status of the resource
 */
interface VerificationInstanceUpdateOptions {
  status: VerificationStatus;
}

interface VerificationListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): VerificationContext;
  /**
   * create a VerificationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: VerificationListInstanceCreateOptions, callback?: (error: Error | null, item: VerificationInstance) => any): Promise<VerificationInstance>;
  /**
   * Constructs a verification
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): VerificationContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property amount - The amount of the associated PSD2 compliant transaction.
 * @property channel - The verification method to use
 * @property customCode - A pre-generated code
 * @property customMessage - The text of a custom message to use for the verification
 * @property locale - The locale to use for the verification SMS or call
 * @property payee - The payee of the associated PSD2 compliant transaction
 * @property sendDigits - The digits to send after a phone call is answered
 * @property to - The phone number to verify
 */
interface VerificationListInstanceCreateOptions {
  amount?: string;
  channel: string;
  customCode?: string;
  customMessage?: string;
  locale?: string;
  payee?: string;
  sendDigits?: string;
  to: string;
}

interface VerificationPayload extends VerificationResource, Page.TwilioResponsePayload {
}

interface VerificationResource {
  account_sid: string;
  amount: string;
  channel: VerificationChannel;
  date_created: Date;
  date_updated: Date;
  lookup: string;
  payee: string;
  service_sid: string;
  sid: string;
  status: string;
  to: string;
  url: string;
  valid: boolean;
}

interface VerificationSolution {
  serviceSid?: string;
}


declare class VerificationContext {
  /**
   * Initialize the VerificationContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the verification Service to fetch the resource from
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2, serviceSid: string, sid: string);

  /**
   * fetch a VerificationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: VerificationInstance) => any): Promise<VerificationInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a VerificationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: VerificationInstanceUpdateOptions, callback?: (error: Error | null, items: VerificationInstance) => any): Promise<VerificationInstance>;
}


declare class VerificationInstance extends SerializableClass {
  /**
   * Initialize the VerificationContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Service that the resource is associated with
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2, payload: VerificationPayload, serviceSid: string, sid: string);

  private _proxy: VerificationContext;
  accountSid: string;
  amount: string;
  channel: VerificationChannel;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a VerificationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: VerificationInstance) => any): void;
  lookup: string;
  payee: string;
  serviceSid: string;
  sid: string;
  status: string;
  to: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a VerificationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: VerificationInstanceUpdateOptions, callback?: (error: Error | null, items: VerificationInstance) => any): void;
  url: string;
  valid: boolean;
}


declare class VerificationPage extends Page<V2, VerificationPayload, VerificationResource, VerificationInstance> {
  /**
   * Initialize the VerificationPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: VerificationSolution);

  /**
   * Build an instance of VerificationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: VerificationPayload): VerificationInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { VerificationContext, VerificationInstance, VerificationList, VerificationListInstance, VerificationListInstanceCreateOptions, VerificationPage, VerificationPayload, VerificationResource, VerificationSolution }
