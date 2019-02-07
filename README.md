[![Build Status](https://www.travis-ci.com/mattoattacko/lab-04.svg?branch=master)](https://www.travis-ci.com/mattoattacko/lab-04)

![CF](http://i.imgur.com/7v5ASc8.png) LAB: Buffers - Bitmap Transformer
=======================================================================
Command to change the bitmap

node index.js assets/baldy.bmp background

## Resources  
* [Bitmap Specification](https://en.wikipedia.org/wiki/BMP_file_format)
* [Buffer Docs](https://nodejs.org/api/buffer.html)

## Feature Tasks
* For this assignment you will be building a bitmap (`.bmp`) transformer CLI. It will read a bitmap in from disk, run one or more color or raster transforms and then write it out to a new file. This project will require the use of node buffers in order to manipulate binary data. Your solution should be composed of small tested modules that solve specific problems. Your modules should be thoughfuly named and well documented. The entry point to your CLI should be an index.js file in the root of your package, and all helper modules should be placed in your lib/ directory. Your bitmap transformer modules should not use any third party libraries.

#### TODO
* I ended up with a bitmap image that inverted all of the colors to green and a weird blue. It's not pretty, but it's interesting. 
* The process.argv.slice() and corrosponding array contain everything on the CLI. 
* Node is our first item in the path, and the second item is the path to the script for the program that we want to run.
* Slicing at the the second index will mean we are discarding both of these, simply returning all the other things.
* File and operation were set to this sliced array of data. 
* It instantiates a new bitmap and sets that bitmap to the variable bitmap. Then, 
* Finally, we call the transformWithCallbacks() function which then reads our file process. 

#### Time Spent
* By my self, it took me about 6 hours of working on it before I realized that I really needed help. I ended up getting help from JB and Hai. Total it took me about 11 hours to complete.
