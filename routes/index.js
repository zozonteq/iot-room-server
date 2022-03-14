var express = require('express');
const {exec} = require('child_process')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'root' });
});

router.get("/light-on",function(req,res,next){
exec("sudo bash sh/light-on.sh ", (error, stdout, stderr) => {
  if (error) {
      console.error(`exec error: ${error}`);
      return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
})
  res.send("ok");
});
router.get("/light-off",function(req,res,next){
  exec("sudo bash sh/light-off.sh ", (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
})
    res.send("ok");
});

router.get("/light-night",function(req,res,next){
  exec("sudo bash sh/light-night.sh ", (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
})
    res.send("ok");
});

router.get("/light-full",function(req,res,next){
  exec("sudo bash sh/light-full.sh ", (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
})
    res.send("ok");
});
module.exports = router;
