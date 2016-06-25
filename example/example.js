
import { present } from '../lib/representer';


class User {
  id = -1;
  username = '';
}

const data = {
  "user": {
    id: 12,
    username: 'LestaD'
  }
};


const UserRepresenter = present(User, {

});
