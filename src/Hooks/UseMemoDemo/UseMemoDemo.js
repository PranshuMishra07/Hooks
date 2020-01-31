// Sometimes you have to compute a value, either through a complex calculation or by reaching to the
// database to make a costly query or to the network.

// Using this hook, this operation is done only once, then the value will be stored in the memoized value
// and the next time you want to reference it, you’ll get it much faste

// Here’s how to use it:
// import React, { useMemo } from 'react';
// const memoizedValue = useMemo(() => expensiveOperation(param1, param2), [param1, param2]);

//Make sure you add that empty array as a second parameter to useMemo(),
// otherwise no memoization will happen at all

// If you need to pass arguments, you also need to pass them in the array
//If one of the parameters change when you try to access the value, the value of
// course will be calculated without memoization.
