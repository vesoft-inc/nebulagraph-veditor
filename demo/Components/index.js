const allComponents = require.context("./", true, /^\.\/.*\/index\.js/);
const Components = [];
const refreshs = [];
const validates = [];
const refreshBroadcasts = [];
const makeSQLs = [];
allComponents.keys().forEach(item => {
	const each = allComponents(item);
	const component = each.default;
	const validate = each.validate;
	const refresh = each.refresh;
	const refreshBroadcast = each.refreshBroadcast;
	// const makeSQL = each.makeSQL;
	const name = item
		.replace(/\.*\/index.js/, "")
		.replace("./", "")
		.toLowerCase();
	Components[name] = component;
	refreshs[name] = refresh;
	refreshBroadcasts[name] = refreshBroadcast;
	validates[name] = validate;
	// makeSQLs[name] = makeSQL;
});
export { Components, refreshs, validates, refreshBroadcasts, makeSQLs };
