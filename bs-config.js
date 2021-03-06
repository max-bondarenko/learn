module.exports = {
    port: 8080,
    browser: "chromium-browser",
    logLevel: "verbose",
    startPath: "/",
    localOnly: true,
    open: "local",
    server: {
        index: "/index-jit.html",
        baseDir: "src",
        routes: {
            "/node_modules": "node_modules"
        },
        middleware: {
            "1": null //remove fallback function.
        }
    }

};
