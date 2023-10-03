
import type { PageLoad } from './$types';


export const prerender = true;

export const load: PageLoad = ({ params }) => {
	return {
        data: [ {rep: 'rep1', readme: 'dette er readme1', link :'/'}, {rep: 'rep1', readme: 'dette er readme2', link :'/'}, {rep: 'rep1', readme: 'dette er readme3', link :'/'} ]
	};
};




