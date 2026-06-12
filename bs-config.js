module.exports = {
  proxy: "http://localhost/oolab",
  port: 3000,
  open: false,
  notify: true,
  injectChanges: false,
  ui: false,
  reloadDebounce: 1000,
  files: [
    {
      match: [
        "*.php",
        "sass/**/*.scss",
        "stylesheets/*.css",
        "src/**/*.js",
        "dist/*.js"
      ],
      // fn: function (event, file) { this.reload(); }   // 硬刷新
    },
  ],
}
