// useChannels.js

import {useDispatch, useSelector} from 'react-redux';
const useChannels = () => {
  const {channels} = useSelector(state => state.authenticationSlice);
  return channels;
};

export default useChannels;
