const BASE_URL = 'https://wagon-chat.herokuapp.com';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';
export const CHANNEL_SELECTED = 'CHANNEL_SELECTED';

export function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url).then(r => r.json());
  // console.log("THE PROMISE:");
  // console.log(promise);
  return {
    type: FETCH_MESSAGES,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createMessage(channel, author, content) {
  const url = `${BASE_URL}/${channel}/messages`;
  const body = { author, content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
    type: MESSAGE_POSTED,
    payload: promise // Will be resolved by redux-promise
  };
}

export function SelectChannels(channel) {
  return {
    type: CHANNEL_SELECTED,
    payload: channel
  };
}
