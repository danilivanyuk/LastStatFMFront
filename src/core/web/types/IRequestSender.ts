import { ISubmitRequestParams } from './ISubmitRequestParams';
import WebVerb from './WebVerb';

export interface IRequestSender<TBaseResponseObjectDto> {
  submitRequestAsync: <TResponseObjectDto, TWebVerb extends WebVerb>(
    method: TWebVerb,
    url: string,
    args: ISubmitRequestParams<TWebVerb>
  ) => Promise<TResponseObjectDto>;

  /**
   * Uploads files to server
   * @param url Url to upload files to
   * @param args Argements of the request
   * @param fileParameterName Name of parameter associated  with a file, default is `file`
   */
  uploadFilesAsync: <TResponseObjectDto = TBaseResponseObjectDto>(
    url: string,
    args: ISubmitRequestParams<WebVerb.POST, File[]>,
    fileParameterName?: string
  ) => Promise<TResponseObjectDto>;
}
