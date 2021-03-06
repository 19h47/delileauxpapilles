import StartingBlocks, { polyfills } from 'starting-blocks';

import WebpackAsyncBlockBuilder from 'services/WebpackAsyncBlockBuilder';

import GiftCouponPage from 'pages/GiftCouponPage';

import Guid from 'common/Guid';
import Baseline from 'common/Baseline';

const production = 'production' !== process.env.NODE_ENV;

(() => {
	window.MAIN_EXECUTED = true;

	polyfills();

	if (production) {
		const guid = new Guid();

		guid.init();
	}

	const images = [...document.querySelectorAll('.js-baseline')];

	images.map($image => new Baseline($image).init());

	const startingBlocks = new StartingBlocks({
		// manualDomAppend: true,
		debug: production ? 1 : 0,
	});

	startingBlocks.provider('BlockBuilder', WebpackAsyncBlockBuilder);

	startingBlocks.instanceFactory('GiftCouponPage', c => new GiftCouponPage(c));

	startingBlocks.boot();
})();
