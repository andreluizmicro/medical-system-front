import { createServer } from 'miragejs';

createServer({
    routes(){
        this.namespace = 'api';

        this.get('/doctors', () => {
            return [
                {
                    key: "1",
                    name: "Jorge Luiz da Silva",
                    age: 53,
                    address: "Avenida BPS",
                    tags: ["nice", "developer"],
                },
            ]
        });
    }
});

export default createServer;