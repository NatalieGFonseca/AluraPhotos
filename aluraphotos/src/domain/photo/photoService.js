export default class PhotoService {
  constructor(resource) {
    this._resource = resource("v1/fotos{/id}");
  }

  list() {
    return this._resource
    .query()
    .then(res => res.json(),
    err => {
        console.log(err);
        throw new Error('Não foi possível obter os dados')
    });
  }

  cadastra(foto) {
      if(foto._id){
        return this._resource.update({id: foto._id}, foto)
      }else {
        return this._resource.save(foto);
      }
  }

  remove(id) {
    return this._resource
    .delete({ id })
    .then(null,
        err => {
            console.log(err);
            throw new Error('Não foi possível remover a foto')
        }
    );
  }

  findById(id) {
    return this._resource
    .get({ id })
    .then(res => res.json());
  }
}
