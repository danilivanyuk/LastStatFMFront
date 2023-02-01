import { IRequestSender } from "../core/web/types/IRequestSender";

abstract class BaseApi {
  /**
   * Хост на API izipoint
   */
  private _apiHost: string;

  protected get apiHost() {
    return this._apiHost;
  }

  /**
   * Отправитель запросов
   */
  private _requestSender: IRequestSender<any>;

  protected get requestSender() {
    return this._requestSender;
  }

  /**
   * Создаёт инстенс класса HttpProxy
   * @param requestSender Отправитель запросов
   * @param apiHost Хост на API
   */
  constructor(
    requestSender: IRequestSender<any>,
    apiHost: string,
  ) {
    this._requestSender = requestSender;
    this._apiHost = apiHost;
  }
}

export default BaseApi;
