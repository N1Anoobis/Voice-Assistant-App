import React from 'react';

const App = () => {

  //  const person = {
  //       firstName: 'John',
  //       lastName: 'Doe',
  //       address: {
  //           street: 'North 1st street',
  //           city: 'San Jose',
  //           state: 'CA',
  //           country: 'USA',
  //           supprise:[1,2,3,4,5,6,]
  //       }
  //   }

  //   const deepCopyFunction = (inObject) => {
  //       let outObject, value, key

  //       if (typeof inObject !== "object" || inObject === null) {
  //         return inObject // Return the value if inObject is not an object
  //       }

  //       // Create an array or object to hold the values
  //       outObject = Array.isArray(inObject) ? [] : {}

  //       for (key in inObject) {
  //         value = inObject[key]
  //       //   console.log(key)
  //         // Recursively (deep) copy for nested objects, including arrays
  //         outObject[key] = deepCopyFunction(value)
  //       }

  //       return outObject
  //     }


  function digital_root(n) {
    let reduced = [];
    let other = [];
    let result = n.toString();
    result = [...result];
    other = result.map(n => n * 1);
    reduced = other.reduce(
      (a, c) => a + c,
      0
    );
    if (reduced > 9) {
      digital_root(reduced);
    }
    if (reduced <= 9) {
        console.log(reduced, 'returned value')
      return reduced
    }
  };

  digital_root(9)

  return (
    <div>
    </div>
  );
}

export default App;