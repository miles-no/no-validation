var config = module.exports;

config["My tests"] = {
    rootPath: "../",
    environment: "node", // or "node"
    sources: [
        "lib/mylib.js",
        "lib/**/*.js"
    ],
    tests: [
        "test/*.js"
    ]
}