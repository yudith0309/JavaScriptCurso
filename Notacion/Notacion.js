const /** !Array<number> */ exportedArray = [1, 2, 3];

const /** !Array<number> */ moduleLocalArray = [4, 5, 6];

/** @return {number} */
function moduleLocalFunction() {
    return moduleLocalArray.length;
}

/** @return {number} */
function exportedFunction() {
    return moduleLocalFunction() * 2;
}

exports = { exportedArray, exportedFunction };

/** @const {number} */
exports.CONSTANT_ONE = 1;

/** @const {string} */
exports.CONSTANT_TWO = 'Another constant';

/** @const */
exports = { exportedFunction }

exports = FancyClass;

// Import paths
import './sideeffects.js';

import * as goog from '../closure/goog/goog.js';
import * as parent from '../parent.js';
import { name } from './sibling.js';

//File extensions in import paths

import '../directory/file';
import '../directory/file.js';
// Importing the same file multiple times
import { short } from './long/path/to/a/file.js';
import { aLongNameThatBreaksAlignment } from './long/path/to/a/file.js';

// Bad: both foo and mutateFoo are exported and mutated.
export let /** number */ foo = 0;

/**
 * Mutates foo.
 */
export function mutateFoo() {
    ++foo;
}

/**
 * @param {function(number): number} newMutateFoo
 */
export function setMutateFoo(newMutateFoo) {
    // Exported classes and functions can be mutated!
    mutateFoo = () => {
        foo = newMutateFoo(foo);
    };
}


// Standard alias style.
const asserts = goog.require('goog.asserts');
// Namespace-based alias used to disambiguate.
const testingAsserts = goog.require('goog.testing.asserts');
// Standard destructuring into aliases.
const { MyClass } = goog.require('some.package');
const { MyType } = goog.requireType('other.package');
const { clear, clone } = goog.require('goog.array');
const { Rgb } = goog.require('goog.color');
// Namespace-based destructuring into aliases used to disambiguate.
const { MyClass: NsMyClass } = goog.require('other.ns');
const { SomeType: FooSomeType } = goog.requireType('foo.types');
const { clear: objectClear, clone: objectClone } = goog.require('goog.object');
// Namespace-based destructuring into aliases used to prevent masking native type.
const { Element: RendererElement } = goog.require('web.renderer');
// Out of sequence namespace-based aliases used to improve readability.
// Also, require lines longer than 80 columns must not be wrapped.
const { SomeDataStructure: SomeDataStructureModel } = goog.requireType('identical.package.identifiers.models');
const { SomeDataStructure: SomeDataStructureProto } = goog.require('proto.identical.package.identifiers');
// goog.require without an alias in order to trigger side effects.
/** @suppress {extraRequire} Initializes MyFramework. */
goog.require('my.framework.initialization');