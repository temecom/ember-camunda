import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class CreateTaskRoute extends Route {
    @service store;
    model() {
        var task = this.store.createRecord('task-dto', {
            name: "New task", 
        });

        return task; 
    }
}
