const StyleDictionary = require('style-dictionary').extend('src/config.js');

const {fileHeader} = StyleDictionary.formatHelpers;

const myCustomFormat = ({ dictionary, file }) => {
    return `${fileHeader({file, commentStyle: 'short'})}${dictionary.allTokens.map(token => {
      return `--${token.name}: ${token.value};`
    }).join(`\n`)}`
  }

  // Adding a custom file header with the `.registerFileHeader`
StyleDictionary.registerFileHeader({
    name: `customFileHeader`,
    fileHeader: () => {
      return [
        `Do not edit directly`,
        `build hash ${hash}`
      ]
    }
  });


StyleDictionary.buildAllPlatforms();