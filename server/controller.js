module.exports = {
  getAll: (req, res, next) => {
    const db = req.app.get('db');
    
    db.get_houses()
    .then( response => res.status(200).send(response) )
    .catch( err => {
      res.status(500).send({errorMessage: "no homes for you!"})
      console.log(err)
    })
  },
  deleteHouse: (req, res, next) => {
    const db = req.app.get('db');
    let {id} = req.params
    db.delete_house({id})
    .then( response => {
      res.status(200).send(response)
    } )
    .catch( err => {
      res.status(500).send({errorMessage: "couldn't delete house"})
      console.log(err)
    } )
  },
  addHouse: (req, res, next) => {
    const db = req.app.get('db');
    let { name, address, city, state, zip } = req.body
    db.add_house({ name, address, city, state, zip })
    .then( response => {
      res.status(200).send( response )
    })
    .catch( err => {
      res.status(500).send({errorMessage: "couldn't add house"})
      console.log(err)
    } )
  }
}