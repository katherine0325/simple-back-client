import alt from '../../lib/alt';
import ExampleActions from './ExampleActions';

class ExampleStore {
  constructor() {
    this.bindActions(ExampleActions);
    this.name = 'katherine';
    this.init_res = '';
  }

  initSuccess(res) {
    this.init_res = res;
  }
}

export default alt.createStore(ExampleStore);