'use strict';

const fs = require('fs');

/**
 * Bitmap -- receives a file name, used in the transformer to note the new buffer
 * @param filePath
 * @constructor
 */
function Bitmap(filePath) {
  this.file = filePath;
}

/**
 * Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file
 * @param buffer
 */
Bitmap.prototype.parse = function(buffer) {
  this.type = buffer.toString('utf-8', 0, 2);
  //... and so on
  this.width = buffer.readInt16LE(18);
  this.height = buffer.readInt16LE(22);
  this.size = buffer.readInt16LE(2);
  this.bytePixel = buffer.readInt16LE(28);
  this.buffer = Buffer.from(buffer, this.width, this.height);
};

/**
 * Transform a bitmap using some set of rules. The operation points to some function, which will operate on a bitmap instance
 * @param operation
 */
Bitmap.prototype.transform = function(operation) {
  // This is really assumptive and unsafe
  transforms[operation](this);
  // this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
};

/**
 * Sample Transformer (greyscale)
 * Would be called by Bitmap.transform('greyscale')
 * Pro Tip: Use "pass by reference" to alter the bitmap's buffer in place so you don't have to pass it around ...
 * @param bmp
 */
const transformBackground = (bmp) => {
// Test 
  bitmap.newFile = bitmap.file.replace(/\.bmp/, `.${operation}.bmp`);
  console.log('Transforming Bitmap Background', bmp);

  let changeImg = bmp.buffer;
// Testing different idea
  for(let i = 0; i < changeImg.length ; i= i+2)  {
      if (changeImg[i] >220 && changeImg[i+1] <170 && changeImg[i+2] >220){
          changeImg[i] = 10;
          changeImg[i+1] = 50;
          changeImg[i+2] = 50;
      };
  }
// This color combo makes the bmp look inverted

  fs.writeFile(bitmap.newFile, bmp.buffer, (err,out) =>{
     if (err) {
         throw err;
     }
      console.log(`Bitmap Transformed: ${bitmap.newFile}`);
  });
};

const transformGreyscale = (bmp) => {

  console.log('Transforming bitmap into greyscale', bmp);

  //TODO: Figure out a way to validate that the bmp instance is actually valid before trying to transform it

  //TODO: alter bmp to make the image greyscale ...

};

/**
 * A dictionary of transformations
 * Each property represents a transformation that someone could enter on the command line and then a function that would be called on the bitmap to do this job
 */
const transforms = {
  greyscale: transformGreyscale,
  background: transformBackground
};

// ------------------ GET TO WORK ------------------- //

function transformWithCallbacks() {

  fs.readFile(file, (err, buffer) => {

    if (err) {
      throw err;
    }

    bitmap.parse(buffer);

    bitmap.transform(operation);

    // Note that this has to be nested!
    // Also, it uses the bitmap's instance properties for the name and thew new buffer
    fs.writeFile(bitmap.newFile, bitmap.buffer, (err, out) => {
      if (err) {
        throw err;
      }
      console.log(`Bitmap Transformed: ${bitmap.newFile}`);
    });

  });
}

// TODO: Explain how this works (in your README)
const [file, operation] = process.argv.slice(2);

let bitmap = new Bitmap(file);

transformWithCallbacks();

