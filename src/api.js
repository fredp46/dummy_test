const delay = (t) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, t)
    })
}

class DataLoader{
    dataLoader = null
    async loadOnce() {
        this.dataLoader = this.dataLoader || this.load()
        return this.dataLoader        
    }

    async load() {
        console.log('loading');
        await delay(1000)
        return {
            value: "REAL"
        }
    }
}

class Api extends DataLoader{
    url = '/features'
}

const ApiInstance = new Api()

export default ApiInstance