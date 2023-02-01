import WebVerb from './WebVerb';

export type IRequestPayloadObjects0 = Record<
string | number,
string | number | boolean | null | undefined
>;

export type IRequestPayloadObjects2 = Record<
string | number,
| string
| number
| boolean
| null
| undefined
| (string | number | boolean | null | IRequestPayloadObjects2)[]
>;

export type RequestPayloadObjects3 = File[];

export type RequestPayload<TWebVerb = WebVerb> = TWebVerb extends
| WebVerb.GET
| WebVerb.DELETE
  ? IRequestPayloadObjects0
  :
  | IRequestPayloadObjects0
  | IRequestPayloadObjects2
  | RequestPayloadObjects3
  | FormData;
