import './Section.css'

const Section = () => {
  return (
    <section>
              <div>
                  <h1>Cadastrar novos produtos</h1>
                  <button className="btn btn-success">Cadastrar</button>
              </div>

              <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  <span className="input-group-text" id="basic-addon1"><button type="button" className="btn btn-primary">Buscar</button></span>
              </div>

              <div className="div-table table-responsive">

                  <table className="table table-hover">
                      <thead className="">
                          <tr className="text-center">
                              <th scope="col">Id</th>
                              <th scope="col">Name</th>
                              <th scope="col">Preço</th>
                              <th scope="col">Tamanho</th>
                              <th scope="col">Ações</th>
                          </tr>
                      </thead>

                      <tbody>
                          <tr className="text-center">
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                              <td>
                                  <button type="button" className="btn btn-success">Visualizar</button>
                                  <button type="button" className="btn btn-primary">Editar</button>
                                  <button type="button" className="btn btn-danger">Apagar</button>
                              </td>
                          </tr>
                          <tr className="text-center">
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                              <td>
                                  <button type="button" className="btn btn-success">Visualizar</button>
                                  <button type="button" className="btn btn-primary">Editar</button>
                                  <button type="button" className="btn btn-danger">Apagar</button>
                              </td>
                          </tr>

                          <tr className="text-center">
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                              <td>
                                  <button type="button" className="btn btn-success">Visualizar</button>
                                  <button type="button" className="btn btn-primary">Editar</button>
                                  <button type="button" className="btn btn-danger">Apagar</button>
                              </td>
                          </tr>
                          <tr className="text-center">
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                              <td>
                                  <button type="button" className="btn btn-success">Visualizar</button>
                                  <button type="button" className="btn btn-primary">Editar</button>
                                  <button type="button" className="btn btn-danger">Apagar</button>
                              </td>
                          </tr>

                          <tr className="text-center">
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                              <td>
                                  <button type="button" className="btn btn-success">Visualizar</button>
                                  <button type="button" className="btn btn-primary">Editar</button>
                                  <button type="button" className="btn btn-danger">Apagar</button>
                              </td>
                          </tr>
                          <tr className="text-center">
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                              <td>
                                  <button type="button" className="btn btn-success">Visualizar</button>
                                  <button type="button" className="btn btn-primary">Editar</button>
                                  <button type="button" className="btn btn-danger">Apagar</button>
                              </td>
                          </tr>

                          <tr className="text-center">
                              <th scope="row">3</th>
                              <td>Larry the Bird</td>
                              <td>Larry the Bird</td>
                              <td>@twitter</td>
                              <td>
                                  <button type="button" className="btn btn-success">Visualizar</button>
                                  <button type="button" className="btn btn-primary">Editar</button>
                                  <button type="button" className="btn btn-danger">Apagar</button>
                              </td>
                          </tr>

                          <tr className="text-center">
                              <th scope="row">3</th>
                              <td>Larry the Bird</td>
                              <td>Larry the Bird</td>
                              <td>@twitter</td>
                              <td>
                                  <button type="button" id="teste" className="btn btn-success">Visualizar</button>
                                  <button type="button" className="btn btn-primary">Editar</button>
                                  <button type="button" className="btn btn-danger">Apagar</button>
                              </td>
                          </tr>

                          <tr className="text-center">
                              <th scope="row">3</th>
                              <td>Larry the Bird</td>
                              <td>Larry the Bird</td>
                              <td>@twitter</td>
                              <td>
                                  <button type="button" className="btn btn-success">Visualizar</button>
                                  <button type="button" className="btn btn-primary">Editar</button>
                                  <button type="button" className="btn btn-danger">Apagar</button>
                              </td>
                          </tr>

                          <tr className="text-center">
                              <th scope="row">3</th>
                              <td>Larry the Bird</td>
                              <td>Larry the Bird</td>
                              <td>@twitter</td>
                              <td>
                                  <button type="button" className="btn btn-success">Visualizar</button>
                                  <button type="button" className="btn btn-primary">Editar</button>
                                  <button type="button" className="btn btn-danger">Apagar</button>
                              </td>
                          </tr>

                          <tr className="text-center">
                              <th scope="row">3</th>
                              <td>Larry the Bird</td>
                              <td>Larry the Bird</td>
                              <td>@twitter</td>
                              <td>
                                  <button type="button" className="btn btn-success">Visualizar</button>
                                  <button type="button" className="btn btn-primary">Editar</button>
                                  <button type="button" className="btn btn-danger">Apagar</button>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>


          </section>
  )
}

export default Section