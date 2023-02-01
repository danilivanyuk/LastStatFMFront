import BaseApi from '../BaseApi';
import RequestKind from '../../core/web/types/RequestKind';
import WebVerb from '../../core/web/types/WebVerb';

export class GetProfileApi extends BaseApi {
  public async getLastFmProfile(
    requestKind: RequestKind,
    nickname: string,
  ): Promise<string> {
    return this.requestSender.submitRequestAsync<string, WebVerb.POST>(
      WebVerb.POST,
      `${this.apiHost}/getProfile`,
      {
        requestKind,
        requestArgs: {
          contentType: 'Application/json',
          dataToSend: nickname as any,
        },
      },
    );
  }
}
