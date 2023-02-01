import { Nullable } from './Nullable';
import RequestKind from './RequestKind';
import { RequestPayload } from './IRequestPayloadObjects';
import WebVerb from "./WebVerb";

/**
 * Represents web request parameters
 */
export interface INativeWebRequestParams {
  /**
   * Gets or sets request mode
   */
  requestMode?: RequestMode;

  /**
   * Gets or sets request cache
   */
  requestCache?: RequestCache;

  /**
   * A signal object that allows you to communicate with a DOM request
   * (such as a Fetch) and abort it if required via an AbortController object.
   */
  abortSignal?: AbortSignal;

  /**
   * Gets or sets custom request headers
   */
  headers?: Record<string, string>;

  /**
   * Gets or sets data object to send
   */
  dataToSend?: Nullable<BodyInit>;
}

/**
 * Represents web request parameters
 */
export interface IWebRequestParams<
  TWebVerb extends WebVerb,
  TPayload extends RequestPayload = RequestPayload<TWebVerb>,
> extends Omit<INativeWebRequestParams, 'dataToSend'> {
  /**
   * Gets or sets request ContentType of body
   */
  contentType?: string;

  /**
   * Gets or sets accept ContentType
   */
  acceptContentType?: string;

  /**
   * Gets or sets data object to send
   */
  dataToSend?: TPayload;

}

/**
 * Represents Ajax fetch parameters
 */
export interface ISubmitRequestParams<
  TWebVerb extends WebVerb,
  TPayload extends RequestPayload = RequestPayload<TWebVerb>,
> {
  /**
   * Gets or sets type of the request
   */
  requestKind: RequestKind;
  /**
   * Gets or sets request parameters
   */
  requestArgs?: IWebRequestParams<TWebVerb, TPayload>;
}
