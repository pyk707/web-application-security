// GET
const user = function(req, res) {
    getUserById(req.query.id).then((user) => {
      if (req.query.updates) { user.update(req.updates); }
      return res.json(user);
    });
  };
  