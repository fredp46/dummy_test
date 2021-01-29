export const dummyApi = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                value: 'yes'
            })
        }, 100)
    })
}

const delay = (t) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, t)
    })
}

class Api {
    async dummyApi() {
        await delay(10)
        return {
            value: "REAL"
        }
    }
}

export default Api