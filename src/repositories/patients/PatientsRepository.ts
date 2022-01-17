import { createServer, Model } from 'miragejs';

createServer({
    models: {
        patient: Model,
    },

    seeds(server) {
        server.db.loadData({
            patients: [
                {
                    id: 1,
                    key: 1,
                    name: "André Luiz da Silva",
                    age: 34,
                    address: "Rua Padre petrus Dingenouts",
                    tags: ["PHP", "Java"],
                }
            ]
        })
    },

    routes(){
        this.namespace = 'api';

        this.get('/patients', () => {
            return this.schema.all('patient');
        });

        this.post('/patients', (schema, request) => {
            const data = JSON.parse(request.requestBody)

            return schema.create('patient', data);
        });

        this.get('/patient/:id', (schema, request) => {
            const data = JSON.parse(request.requestBody)

            console.log(data);
            
            return "teste";
        });
    }
});

export default createServer;