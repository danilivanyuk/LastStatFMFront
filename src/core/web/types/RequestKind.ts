enum RequestKind {
  /**
   * Request sent by user synchronously, can be only one
   */
  SEND_BY_USER_SYNCHRONOUSLY = 'send_by_user_synchronously',

  /**
   * Request sent by user asynchronously, number of requests depends on settings.
   */
  SEND_BY_USER_ASYNCHRONOUSLY = 'send_by_user_asynchronously',

  /**
   * Request sent by robot, for example by a bot, unlimited number of requests can be sent
   */
  SEND_BY_ROBOT = 'send_by_robot',
}

export default RequestKind;
