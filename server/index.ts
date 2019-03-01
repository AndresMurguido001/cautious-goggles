import * as express from "express";
import * as next from "next";

const port = parseInt(process.env.PORT!, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/user/confirm/:token", (req, res) => {
      const actualPage = "/confirm";
      const queryParams = { token: req.params.token };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/user/change-password/:token", (req, res) => {
      const actualPage = "/change-password";
      const queryParams = { token: req.params.token };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err: any) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex: any) => {
    console.error(ex.stack);
    process.exit(1);
  });
