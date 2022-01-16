import { createServer } from 'miragejs';

createServer({
    routes(){
        this.namespace = 'api';

        this.get('/patients', () => {
            return [
                {
                    key: "1",
                    name: "André Luiz",
                    age: 34,
                    address: "Rua Padre Petrus Dingenouts",
                    tags: ["nice", "developer"],
                  },
            ]
        })
    }
});

export default createServer;