/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import createHTML from '../createHTML';

describe('createHTML', () => {
  it('should return the default template if no arguments are specified', () => {
    const expected = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>CarteBlanche</title>
    <link rel="stylesheet" type="text/css" href="client-bundle.css" />
  </head>
  <body>
    <div id='carte-blanche-root'></div>


    <script src="client-bundle.js"></script>
    <script src="user-bundle.js"></script>
  </body>
</html>`;
    expect(createHTML()).to.equal(expected);
  });

  it('should handle the dest option', () => {
    const dest = 'examples';
    const expected = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>CarteBlanche</title>
    <link rel="stylesheet" type="text/css" href="/examples/client-bundle.css" />
  </head>
  <body>
    <div id='carte-blanche-root'></div>


    <script src="/examples/client-bundle.js"></script>
    <script src="/examples/user-bundle.js"></script>
  </body>
</html>`;
    expect(createHTML(dest)).to.equal(expected);
  });

  it('should inject scripts', () => {
    const scripts = ['console.log("Hello World!")'];
    const expected = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>CarteBlanche</title>
    <link rel="stylesheet" type="text/css" href="client-bundle.css" />
  </head>
  <body>
    <div id='carte-blanche-root'></div>
    <script>console.log("Hello World!")</script>

    <script src="client-bundle.js"></script>
    <script src="user-bundle.js"></script>
  </body>
</html>`;
    expect(createHTML(undefined, scripts)).to.equal(expected);
  });

  it('should inject styles', () => {
    const styles = ['body { background: red; }'];
    const expected = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>CarteBlanche</title>
    <link rel="stylesheet" type="text/css" href="client-bundle.css" />
  </head>
  <body>
    <div id='carte-blanche-root'></div>
    <style>body { background: red; }</style>

    <script src="client-bundle.js"></script>
    <script src="user-bundle.js"></script>
  </body>
</html>`;
    expect(createHTML(undefined, undefined, styles)).to.equal(expected);
  });
});
