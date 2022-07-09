/** @type {import('./index').RequestHandler} */
export function get(event) {
	return {
		body: {
			version: '0.1.1',
			currentStage: 'Alpha'
		}
	};
}
