import Noty from 'noty';

const defaultOptions = {
  animation: {
    easing: 'swing',
    speed: 500,
  },
  theme: 'nest',
};

export function notySuccess(text, layout = 'bottomRight', timeout = 1500) {
  return new Noty({
    ...defaultOptions,
    type: 'alert',
    layout,
    text,
    timeout,
  }).show();
}

export function notySuccessCallback(text, callbacks, layout = 'bottomRight', timeout = 1500) {
  return new Noty({
    ...defaultOptions,
    type: 'alert',
    layout,
    text,
    timeout,
    callbacks,
  }).show();
}
export function notyError(text, layout = 'bottomRight', timeout = 1500) {
  return new Noty({
    ...defaultOptions,
    type: 'error',
    layout,
    text,
    timeout,
  }).show();
}

export function notyCustom(text, type, layout = 'bottomRight', timeout = 1500) {
  return new Noty({
    ...defaultOptions,
    type,
    layout,
    text,
    timeout,
  }).show();
}
