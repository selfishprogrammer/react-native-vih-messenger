import {getReq, getReq2} from './api';

export const fetchChannel = async hash_code => {
  return getReq(`channels-tracking-code-sdk-feature/${hash_code}`);
};
export const handleMessageAI = async data => {
  return getReq2(data);
};
