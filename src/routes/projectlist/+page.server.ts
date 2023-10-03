import type { PageServerLoad } from './$types';
import type { PageLoad } from './$types';
import { PUBLIC_GITHUB } from '$env/static/public'
import { Octokit } from "octokit";
import { createTokenAuth } from "@octokit/auth-token";

export const load: PageLoad = async ({ params }) => {

    const octokit = new Octokit({
        auth: PUBLIC_GITHUB
    })

    await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: 'TPDs',
        repo: 'mp_Python1',
        path: 'README.md',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    console.log(octokit);




    return {
        data: [{ rep: 'rep1', readme: 'dette er readme1', link: '/' }, { rep: 'rep1', readme: 'dette er readme2', link: '/' }, { rep: 'rep1', readme: 'dette er readme3', link: '/' }]
    };
};




