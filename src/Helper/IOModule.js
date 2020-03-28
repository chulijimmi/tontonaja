import { stdChannel, runSaga } from "redux-saga";
import { useState, useEffect, useRef } from "react";

export const createIO = () => {
  const channel = stdChannel();
  return {
    // this object works like a buffer
    // you can write to it use "channel.put"
    // you can read from it useing yield take
    channel,

    // this dispatch method is used to resolve yield put(ACTION)
    dispatch: action => {
      setImmediate(() => {
        // here we transfer the action taken from
        // the yield put(ACTION) to the channel. so a call to yield take
        // can read the action object on this channel
        channel.put(action);
      });
    }
  };
};

export const useSaga = (rootSaga, initState) => {
  const [state, setState] = useState(initState);
  const IO = useRef(createIO());
  useEffect(() => {
    //** to pass value from saga to a compopnent, one way is to
    // pass the setter function as an argument to the rootSaga
    // and invoke it anywhere in your sagas when appropriate
    const task = runSaga(IO.current, rootSaga, setState);

    return () => task.cancel();
  }, []);

  return [state, IO.current.dispatch];
};
