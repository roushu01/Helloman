/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} title
 * @property {string} vendor
 * @property {number} price
 * @property {number} rating
 * @property {number} reviewsCount
 * @property {number} stock
 * @property {string} category
 * @property {string[]} images
 * @property {string} description
 * @property {Record<string, string>} details
 * @property {string[]} keyFeatures
 * @property {string} [styleTip]
 * @property {string} [packageIncludes]
 * @property {string} [idealFor]
 * @property {boolean} [isNew]
 */

/**
 * @typedef {Object} CartItem
 * @property {Product} product
 * @property {number} quantity
 */

/**
 * @typedef {Object} CarouselSlide
 * @property {number} id
 * @property {string} image
 * @property {string} title
 * @property {string} subtitle
 * @property {string} categoryLink
 */
