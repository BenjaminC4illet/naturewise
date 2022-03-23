module.exports={
    "source": ['src/tokens/*.json'],
    // "tokens": {
    //   "color": {
    //     "primary": { value: '#fbbf24' },
    //   },
    // },
    "platforms": {
      "css": {
        "transformGroup": "css",
        "prefix": "sd",
        "buildPath": "build/css/",
        "files": [
          {
            "destination": "_variables.css",
            "format": "css/variables"
          }
        ]
      },

      "js": {
        "transformGroup": "js",
        "buildPath": "build/js/",
        "files": [
          {
            "destination": "variables.js",
            "format": "javascript/es6"
          }
        ]
      }
    }
  }