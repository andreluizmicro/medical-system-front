import { createServer } from 'miragejs';

createServer({
    routes(){
        this.namespace = 'api';

        this.get('/patients', () => {
            return [
                {
                    key: "1",
                    name: "André Luiz da Silva",
                    age: 34,
                    address: "Rua Padre Petrus Dingenouts",
                    tags: ["nice", "developer"],
                },
                {
                    key: "2",
                    name: "Paulo Renato da Silva",
                    age: 32,
                    address: "Rua Padre Petrus Dingenouts",
                    tags: ["TOP", "developer"],
                },
                {
                    key: "3",
                    name: "Ana Paula da Silva Morato",
                    age: 36,
                    address: "Rua Nossa Senhora do Rosário",
                    tags: ["developer", "PHP"],
                },
            ]
        });

        this.post('/patient', )
    }
});

export default createServer;