var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/nickmanning-dev',// <-- replace yourproject with your repo name
    {
        branch: 'gh-pages',
        repo: 'https://github.com/seenickcode/nickmanning-dev.git',
        user: {
            name: 'Nicholas Manning',
            email: 'hello@manninglabs.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)