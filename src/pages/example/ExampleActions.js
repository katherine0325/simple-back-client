import alt from '../../lib/alt';

class ExampleActions
{
	constructor() {
		this.generateActions(
			'initSuccess'
		)
	}

	init() {
		fetch('http://url.com/api/init', res => {
			this.actions.initSuccess(res);
		})
	}
}

export default alt.createActions(ExampleActions);