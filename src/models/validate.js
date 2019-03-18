const linkCheck = require('node-fetch');

export const verifyLinks = (arrayLinks) => {
    const arrOfLinks = arrayLinks.map(links => new Promise((resolve, reject) => {
        linkCheck(links.href)
            .then(result => {
                if (result.status >= 200 && result.status < 400) {
                    links.status = result.status;
                    links.value = 'ok';
                    resolve(links);
                } else if (result.status >= 400) {
                    links.status = result.status;
                    links.value = 'fail';
                    resolve(links);
                }
            });
    }));
    return Promise.all(arrOfLinks);
};