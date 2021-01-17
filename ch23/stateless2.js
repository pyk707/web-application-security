// GET
const getUser = function(req, res) {
    getUserById(req.query.id).then((user) => {
      return res.json(user);
    });
  };
  
  // POST
  const updateUser = function(req, res) {
    getUserById(req.query.id).then((user) => {
      user.update(req.updates).then((updated) => {
        if (!updated) { return res.sendStatus(400); }
        return res.sendStatus(200);
      });
    });
  };
  