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
                    phone: '(35) 991099329',
                    email: 'andreluizmicro@gmail.com',
                    address: "Rua Padre petrus Dingenouts",
                    neighborhood: 'Boa Vista',
                    number: 328,
                    city: 'Itajubá',
                    state: "MG",
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
            let id = request.params.id;
            return schema.find('patient', id);
        });
    }
});

export default createServer;