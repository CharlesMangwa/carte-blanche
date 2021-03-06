# Carte Blanche

Carte Blanche is an isolated development space with integrated fuzz testing for your components. See them individually, explore them in different states and quickly and confidently develop them.

![Screenshot of Carte Blanche](https://cloud.githubusercontent.com/assets/7525670/15761445/8ae05d4a-2918-11e6-8573-bd9bd0ef2330.png)

## 30 seconds feature video on Youtube

[<img width="450" src="http://img.youtube.com/vi/6g3-TQ6aaw8/maxresdefault.jpg" >](http://www.youtube.com/watch?v=6g3-TQ6aaw8)

**Please note that this project is in a beta state and under heavy development. We encourage you to try it out on your projects and letting us know of any issues you run into!**

## Setup

Setting up Carte Blanche is an easy two-step process:

1. Install the plugin with `npm install --save-dev carte-blanche`

2. Add it to the plugins in your development webpack configuration, specifying a relative path to the folder with your components in the `componentRoot` option:
  ```JS
  var CarteBlanche = require('carte-blanche');
  /* … */
  plugins: [
    new CarteBlanche({
      componentRoot: './src/components'
    })
  ],
  ```

That's it, now start your development environment and go to `/carte-blanche` to see your Carte Blanche!

## Options

You can specify some options for the webpack plugin:

- `componentRoot` (required): Folder where your component modules are.

  ```JS
    plugins: [
      new CarteBlanche({
        componentRoot: 'src/components'
      })
    ]
  ```

- `dest` (default: `'carte-blanche'`): Change the location of your Carte Blanche. Needs to be a path.

  ```JS
    plugins: [
      new CarteBlanche({
        componentRoot: 'src/components',
        dest: 'components'
      })
    ]
  ```

- `plugins` (default: `ReactPlugin`): An array of plugins to use in your Carte Blanche. *(Want to write your own? See [writing-plugins.md](./WRITING-PLUGINS.md) for more information!)*

  ```JS
    var ReactPlugin = require('carte-blanche-react-plugin');
    var SourcePlugin = require('carte-blanche-source-plugin');

    plugins: [
      new CarteBlanche({
        componentRoot: 'src/components',
        plugins: [
         new SourcePlugin({ /* …options for the plugin here… */ }),
         new ReactPlugin()
        ]
      })
    ]
  ```

- `filter` (default: matches uppercase files and uppercase folders with an index file): Regex that matches your components in the `componentRoot` folder. *We do not recommend changing this, as it might have unintended side effects.*

  ```JS
    plugins: [
      new CarteBlanche({
        filter: /.*\.jsx$/ // Matches all files ending in .jsx
      })
    ]
  ```

This project has a custom plugin system to make it as extensible as possible. By default, we include the `ReactPlugin`, which has options of itself. *(to pass these in you'll have to explicitly specify it with the `plugins` option)*

### ReactPlugin Options

- `variationFolderName` (default: `variations`): The name of the folders that stores the variation files.
  ```JS
  new ReactPlugin({
    variationFolderName: 'examples'
  })
  ```

- `port` (default: 8082): The port the variations server runs at.
  ```JS
  new ReactPlugin({
    port: 7000
  })
  ```

- `hostname` (default: `localhost`): The URL the variations server runs at.
  ```JS
  new ReactPlugin({
    hostname: 'mydomain.com'
  })
  ```

## Plugins

This is a list of endorsed plugins that are useable right now:

- **[`carte-blanche-react-plugin`](./plugins/react)**: CarteBlanche + React = ❤︎ (installed if no other plugins are specified)
- [`carte-blanche-source-plugin`](./plugins/source): Show the source code of your components right in the interface!

Want to write your own plugin? Check out [`writing-plugins.md`](./WRITING-PLUGINS.md)!

## License

Copyright (c) 2016 Nikolaus Graf and Maximilian Stoiber, licensed under the MIT License.
