# UC Santa Cruz Content Blocks

A collection of WordPress blocks for [UC Santa Cruz](https://www.ucsc.edu/). Built with [@wordpress/scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/). Additional blocks will be added as use cases arise.

## Current Blocks

- **Details** -- a block that utilizes the `<details>` element that can be used as an accordion
- **Details Wrapper** -- a block that wraps multiple Details blocks, enabling them to be opened and closed simultaneously

## Requirements

Cloning and installing this plugin requires:

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [GitHub Cli](https://cli.github.com/manual/installation) (optional but helpful)
- [Node.js/npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Composer](https://getcomposer.org/)

Block development will require a local WordPress development environment such as [@wordpress/env](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/).

## Clone and install

- Clone repo: `gh repo clone ucsc/ucsc-content-blocks`
- `cd ucsc-content-blocks/`
- `npm install`
- `composer install`

## Directory structure and scripts

This plugin was developed using [@wordpress/scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) (see the `"devDependencies"` object in `package.json`).

Both `src/` and `build/` directories are located within the `blocks/` directory at the project root.

```text
blocks/
 -build/
  --block-one/
  --block-two/
 -src/
  --block-one/
  --block-two/
```

### Build and Start

The following npm scripts will build (or start) the entire plugin.

`npm run build`

`npm run start` (start will initiate a perpetual build after every file save)

### Additional scripts

There are `build` and `start` scripts for individual blocks and for various additional tasks such as linting and packaging. Please review the `"scripts"` object in `package.json`. All additional scripts are provided by the `@wordpress/scripts` package.

## Creating a new block

If you'd like to contribute to this project and create a new block, please review our [contributing guidelines](CONTRIBURING.md).

### Scaffold files

The `@wordpress/scripts` package includes a script called `create-block` that allows you to initiate a new block for development.

From within the `blocks/src/` directory, issue the command

`npx @wordpress/create-block --no-plugin`

and follow the prompts to name and namespace your new block.

You will see a new directory in `blocks/src/` that contains your new block's files.

The script will create a functioning "Hello World" block that you can enqueue via this plugin and review in your development environment prior to digging into the code.

The `--no-plugin` flag will restrict creation to block scaffolding only, which is helpful when developing a plugin that has multiple blocks.

For more information, see the [@wordpress/create-block](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) documentation in the WordPress [Block Editor Handbook](https://developer.wordpress.org/block-editor/).

### Enqueue block

Once the new block is created, it must be enqueued via the `ucsc_register_content_blocks()` function in the `ucsc-content-blocks.php` file.

```php
/**
 * Register blocks
 */
function ucsc_register_content_blocks() {

 // Register blocks in the format $dir => $render_callback.
 $blocks = array(
  'details'  => '',
  'details-wrapper'  => '',
 );
...
}

```

Enqueue the newly created block by adding a line to the `$blocks` array with the name of the directory that was created with the `block-creation` script:

```php

 $blocks = array(
  'details'  => '',
  'details-wrapper'  => '',
  'new-block'  => '',
 );

```

Activate this plugin in your development environment. If the new block was enqueued propperly, you'll be able to chose the newly created "Hello World" block in the block editor of a WordPress Page or Post.

Once you've verified it was built and enqueued properly, configure the `build` and `start` scripts for your new block.

### Add build and start scripts for new block

As described above, the `npm build` and `npm start` commands will build and start the entire plugin. When developing a new block, it's convenient to _build_ and _start_ just the block you're working on.

You can add `build` and `start` scripts for your new block by editing the `"scripts"` object in the `package.json` file.

```JSON
"scripts": {
  "start": "wp-scripts start --webpack-src-dir=blocks/src/ --output-path=blocks/build/",
  "build": "wp-scripts build --webpack-src-dir=blocks/src/ --output-path=blocks/build/",
 ...
  "start:details": "wp-scripts start --webpack-src-dir=blocks/src/details --output-path=blocks/build/details",
  "build:details": "wp-scripts build --webpack-src-dir=blocks/src/details --output-path=blocks/build/details",
  "start:details-wrapper": "wp-scripts start --webpack-src-dir=blocks/src/details-wrapper --output-path=blocks/build/details-wrapper",
  "build:details-wrapper": "wp-scripts build --webpack-src-dir=blocks/src/details-wrapper --output-path=blocks/build/details-wrapper",
 ...
 }
```

Use the entries for the existing blocks as a template and add entries to `build` and `start` your new block.

```JSON
"scripts": {
  "start": "wp-scripts start --webpack-src-dir=blocks/src/ --output-path=blocks/build/",
  "build": "wp-scripts build --webpack-src-dir=blocks/src/ --output-path=blocks/build/",
 ...
  "start:details": "wp-scripts start --webpack-src-dir=blocks/src/details --output-path=blocks/build/details",
  "build:details": "wp-scripts build --webpack-src-dir=blocks/src/details --output-path=blocks/build/details",
  "start:details-wrapper": "wp-scripts start --webpack-src-dir=blocks/src/details-wrapper --output-path=blocks/build/details-wrapper",
  "build:details-wrapper": "wp-scripts build --webpack-src-dir=blocks/src/details-wrapper --output-path=blocks/build/details-wrapper",
  "start:new-block": "wp-scripts start --webpack-src-dir=blocks/src/new-block --output-path=blocks/build/new-block",
  "build:new-block": "wp-scripts build --webpack-src-dir=blocks/src/new-block --output-path=blocks/build/new-block",
 ...
 }
```

Save your changes to `package.json` and test that they work:

- `npm run start:new-block`
- `npm run build:new-block`

Bingo!

Go develop your new block.

## Resources

- [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [Create a Block Tutorial](https://developer.wordpress.org/block-editor/getting-started/create-block/)
- [@wordpress/scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/)
- [@wordpress/create-block](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/)
- [@wordpress/env](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/)

## Contributors

- [Jason Chafin](https://github.com/Herm71)
