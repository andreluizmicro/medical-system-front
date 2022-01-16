import { createServer } from 'miragejs';

createServer({
    routes(){
        this.namespace = 'api';

        this.get('/appointments', () => {
            return [
                {
                    message: "Sem nada por enquanto..."
                },
            ]
        });
    }
});

export default createServer;