import express from "express";
import routes from "./router"
import path from "path";

/*
*   /   => 프로젝트의 시작점
*  ./   => 현재 파일과 같은 위치
*  ../  => 현재 파일보다 한단계 상위위치
*/

const app = express();
// 1. views 라는 폴더를 찾는다.
// 2. 자동으로 .pug 를 붙인다.
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));

app.get(routes.home, (req, res) => {
    // render는, 파일을 찾아 해당 파일을 로드시켜주는 함수이다.
    res.render("home");
});

app.get(routes.game, (req, res) => {
    res.render("game");
});

app.listen(3000, () => {
    console.log("3000 SERVER START");
});