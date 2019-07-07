import _ from 'lodash';

class Test {
  constrcutor() {
    _.forEach([1,2,3], () => {
      console.log('hi');
    });
  }
}

_.forEach([1,2,3], () => console.log('hi'));
