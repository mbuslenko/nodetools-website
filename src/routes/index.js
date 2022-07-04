/** @type {import('./index').RequestHandler} */
export function get(event) {
	return {
		body: {
			version: '0.0.10',
			currentStage: 'Prealpha'
		}
	};
}
