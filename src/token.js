const { Promise } = PipefyApp

export const getToken = pipefy => new Promise((resolve, reject) => {
    const key = `rung-token-${pipefy.pipeId}`
    const cachedToken = window.sessionStorage.getItem(key)

    if (cachedToken && cachedToken !== 'null') {
        return resolve(cachedToken)
    }

    return pipefy.get('pipe', 'private', 'token')
        .then(token => {
            window.sessionStorage.setItem(key, token)
            resolve(token)
        })
        .catch(reject)
})
