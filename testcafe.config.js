let os=require("os");
module.exports={
    browsers:['chrome','edge'],
    src:'./tests/login.js',
    skipJsErrors:true,
    hostname:os.hostname(),
    baseUrl:"https://beta.deepthought.education.com",
}