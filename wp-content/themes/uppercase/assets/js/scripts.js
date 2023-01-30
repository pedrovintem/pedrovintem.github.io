/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// Create csco object.
var csco = {
	addAction: function addAction(x, y, z) {
		return;
	}
};

if ('undefined' !== typeof wp && 'undefined' !== typeof wp.hooks) {
	csco.addAction = wp.hooks.addAction;
}

/**
 * Window size
 */
var $ = jQuery;
var $window = $(window);
var $doc = $(document);
var $body = $('body');

var wndW = 0;
var wndH = 0;
var docH = 0;

function csGetWndSize() {
	exports.wndW = wndW = $window.width();
	exports.wndH = wndH = $window.height();
	exports.docH = docH = $doc.height();
}

$window.on('resize load orientationchange', csGetWndSize);

csGetWndSize();

/**
 * Throttle scroll
 * thanks: https://jsfiddle.net/mariusc23/s6mLJ/31/
 */
var csHideOnScrollList = [];

var csDidScroll = void 0;
var csLastST = 0;

$window.on('scroll load resize orientationchange', function () {
	if (csHideOnScrollList.length) {
		csDidScroll = true;
	}
});

function csHasScrolled() {
	var ST = $window.scrollTop();

	var type = null;

	if (ST > csLastST) {
		type = 'down';
	} else if (ST < csLastST) {
		type = 'up';
	} else {
		type = 'none';
	}

	if (ST === 0) {
		type = 'start';
	} else if (ST >= docH - wndH) {
		type = 'end';
	}

	csHideOnScrollList.forEach(function (item) {
		if (typeof item === 'function') {
			item(type, ST, csLastST, $window);
		}
	});

	csLastST = ST;
}

setInterval(function () {
	if (csDidScroll) {
		csDidScroll = false;
		window.requestAnimationFrame(csHasScrolled);
	}
}, 250);

function csThrottleScroll(callback) {
	csHideOnScrollList.push(callback);
}

/**
 * In Viewport checker
 */
$.fn.isInViewport = function () {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();

	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	return elementBottom > viewportTop && elementTop < viewportBottom;
};

/**
 * Cookies
 */
function csGetCookie(name) {
	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function csSetCookie(name, value) {
	var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


	props = {
		path: '/'
	};

	if (props.expires instanceof Date) {
		props.expires = props.expires.toUTCString();
	}

	var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

	for (var optionKey in props) {
		updatedCookie += "; " + optionKey;
		var optionValue = props[optionKey];
		if (optionValue !== true) {
			updatedCookie += "=" + optionValue;
		}
	}

	document.cookie = updatedCookie;
}

exports.$ = $;
exports.$window = $window;
exports.$doc = $doc;
exports.$body = $body;
exports.csco = csco;
exports.wndW = wndW;
exports.wndH = wndH;
exports.docH = docH;
exports.csThrottleScroll = csThrottleScroll;
exports.csGetCookie = csGetCookie;
exports.csSetCookie = csSetCookie;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
module.exports = __webpack_require__(10);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utility = __webpack_require__(0);

(function () {
	(0, _utility.$)(document).on('click', '.cs-entry__comments-show button', function (e) {
		(0, _utility.$)(this).parent().siblings('.cs-entry__comments-collapse').show();
		(0, _utility.$)(this).parent().remove();
	});
})(); /** ----------------------------------------------------------------------------
       * Comments Dropdown */

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utility = __webpack_require__(0);

(function () {
	(0, _utility.$)('.cs-menu__nav  .menu-item-has-children').each(function (e) {
		(0, _utility.$)(this).append('<span class="menu-caret"></span>');
	});

	var mainSubmenuSlideUp = function mainSubmenuSlideUp(mainElement) {
		var height = 0;

		mainElement.find('.sub-menu:visible').each(function () {
			height += (0, _utility.$)(this).outerHeight();
		});

		mainElement.css('margin-bottom', height).attr('data-margin-value', height);

		return height;
	};

	var mainSubmenuSlideDown = function mainSubmenuSlideDown(mainSubmenuMargin, mainElement, thisElement) {
		var height = thisElement.outerHeight();

		mainElement.css('margin-bottom', mainSubmenuMargin + height).attr('data-margin-value', mainSubmenuMargin + height);
	};

	(0, _utility.$)('.cs-menu__nav-inner').on('click', '> .menu-item', function (e) {
		var $mainSubmenu = (0, _utility.$)(this).children('.sub-menu');

		if ('#' === e.target.getAttribute('href') || e.target.className === 'menu-caret') {

			e.preventDefault();

			(0, _utility.$)(this).removeClass('menu-item-expanded');
			(0, _utility.$)(this).siblings('.menu-item').removeClass('click-disable-color').removeClass('menu-item-expanded');
			(0, _utility.$)(this).find('.menu-item').removeClass('click-disable-color').removeClass('menu-item-expanded');

			if ($mainSubmenu.is(':visible')) {
				$mainSubmenu.slideUp().promise().done(function () {
					$mainSubmenu.css('margin-bottom', '').attr('data-margin-value', 0);
					$mainSubmenu.find('.sub-menu').hide();
				});
			} else {
				(0, _utility.$)(this).addClass('menu-item-expanded');
				(0, _utility.$)(this).removeClass('click-disable-color').siblings('.menu-item').addClass('click-disable-color');
				(0, _utility.$)(this).siblings('.menu-item').find('.menu-item').removeClass('click-disable-color');
				$mainSubmenu.slideDown();

				(0, _utility.$)(this).siblings('.menu-item').children('.sub-menu').slideUp().promise().done(function () {
					(0, _utility.$)(this).css('margin-bottom', '').attr('data-margin-value', 0);
					(0, _utility.$)(this).find('.sub-menu').hide();
				});
			}
		}
	});

	(0, _utility.$)(window).on('resize', function () {
		(0, _utility.$)('.cs-menu__nav-inner > .menu-item .sub-menu').each(function () {
			mainSubmenuSlideUp((0, _utility.$)(this));
		});
	});

	(0, _utility.$)('.cs-menu__nav-inner > .menu-item .sub-menu').on('click', '.menu-item-has-children > .menu-caret, .menu-item-has-children > a[href="#"]', function (e) {
		e.stopPropagation();
		e.preventDefault();

		var $menuItem = (0, _utility.$)(this).parent('.menu-item-has-children');
		var $mainSubmenu = $menuItem.closest('.cs-menu__nav-inner > .menu-item > .sub-menu');
		var mainSubmenuMargin = $mainSubmenu.attr('data-margin-value') ? +$mainSubmenu.attr('data-margin-value') : 0;

		if ($menuItem.siblings('.menu-item').find('.sub-menu:visible').length) {

			$menuItem.removeClass('menu-item-expanded').siblings('.menu-item').addClass('click-disable-color').removeClass('menu-item-expanded');
			$menuItem.find('.menu-item').removeClass('menu-item-expanded');
			$menuItem.siblings('.menu-item').find('.sub-menu:visible').slideUp({
				progress: function progress() {
					mainSubmenuMargin = mainSubmenuSlideUp($mainSubmenu);
				}
			}).promise().done(function () {
				$menuItem.addClass('menu-item-expanded').removeClass('click-disable-color').siblings('.menu-item').addClass('click-disable-color');
				$menuItem.children('.sub-menu').slideDown({
					progress: function progress() {
						mainSubmenuSlideDown(mainSubmenuMargin, $mainSubmenu, (0, _utility.$)(this));
					}
				});
			});
		} else {
			if (!$menuItem.children('.sub-menu').is(':visible')) {

				$menuItem.addClass('menu-item-expanded').removeClass('click-disable-color').siblings('.menu-item').addClass('click-disable-color');
				$menuItem.children('.sub-menu').slideDown({
					progress: function progress() {
						mainSubmenuSlideDown(mainSubmenuMargin, $mainSubmenu, (0, _utility.$)(this));
					}
				});
			} else {

				$menuItem.removeClass('menu-item-expanded').removeClass('click-disable-color').siblings('.menu-item').removeClass('click-disable-color');
				$menuItem.find('.menu-item').removeClass('menu-item-expanded');
				$menuItem.find('.sub-menu:visible').slideUp({
					progress: function progress() {
						mainSubmenuMargin = mainSubmenuSlideUp($mainSubmenu);
					}
				});
			}
		}
	});
})(); /** ----------------------------------------------------------------------------
       * Widget Nav Menu */

(function () {

	(0, _utility.$)(".cs-menu__nav-inner  .menu-item").hover(function () {
		(0, _utility.$)(this).addClass('active-color').siblings('.menu-item').addClass('disable-color');
	}, function () {
		(0, _utility.$)(this).removeClass('active-color').siblings('.menu-item').removeClass('disable-color');
	});
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utility = __webpack_require__(0);

(function () {
	var totalParent = (0, _utility.$)('.cs-page-header-area'),
	    activeClass = 'cs-active-prev-next';

	var titleItem = (0, _utility.$)('.cs-entry__header-description'),
	    titleNext = (0, _utility.$)('.cs-entry__title-next'),
	    titlePrev = (0, _utility.$)('.cs-entry__title-prev');

	var imgItem = (0, _utility.$)('.cs-page-header-background__inner'),
	    imgNext = (0, _utility.$)('.cs-page-header-background__inner-next'),
	    imgPrev = (0, _utility.$)('.cs-page-header-background__inner-prev');

	(0, _utility.$)('.cs-entry__next-label').hover(function () {
		(0, _utility.$)(this).addClass(activeClass).closest(totalParent).find(titleNext).addClass(activeClass).siblings(titleItem).removeClass(activeClass);

		(0, _utility.$)(this).closest(totalParent).find(imgNext).addClass(activeClass).siblings(imgItem).removeClass(activeClass);
	}, function () {
		(0, _utility.$)(this).removeClass(activeClass);
		(0, _utility.$)(titleNext).removeClass(activeClass).siblings('.cs-entry__title-current').addClass(activeClass);

		(0, _utility.$)(imgNext).removeClass(activeClass).siblings('.cs-page-header-background__inner-current').addClass(activeClass);
	});

	(0, _utility.$)('.cs-entry__prev-label').hover(function () {
		(0, _utility.$)(this).addClass(activeClass).closest(totalParent).find(titlePrev).addClass(activeClass).siblings(titleItem).removeClass(activeClass);

		(0, _utility.$)(this).closest(totalParent).find(imgPrev).addClass(activeClass).siblings(imgItem).removeClass(activeClass);
	}, function () {
		(0, _utility.$)(this).removeClass(activeClass);
		(0, _utility.$)(titlePrev).removeClass(activeClass).siblings('.cs-entry__title-current').addClass(activeClass);

		(0, _utility.$)(imgPrev).removeClass(activeClass).siblings('.cs-page-header-background__inner-current').addClass(activeClass);
	});
})(); /** ----------------------------------------------------------------------------
       * Comments Dropdown */

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utility = __webpack_require__(0);

(function () {

	(0, _utility.$)(document).on('keyup', '.cs-search__nav-form .cs-search__input[data-swplive="true"]', function (e) {
		if (this.value.length > 0) {
			(0, _utility.$)('.cs-search__posts, .cs-search__tags-wrapper').fadeOut();
		} else {
			(0, _utility.$)('.cs-search__posts, .cs-search__tags-wrapper').fadeIn();
		}
	});
})(); /** ----------------------------------------------------------------------------
       * Live Search */

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utility = __webpack_require__(0);

if ('undefined' === typeof window.load_more_query) {
	window.load_more_query = [];
}

/**
 * Get next posts
 */
/**
 * AJAX Load More.
 *
 * Contains functions for AJAX Load More.
 */

function csco_ajax_get_posts(object) {
	var container = (0, _utility.$)(object).closest('.cs-posts-area');

	var settings = (0, _utility.$)(object).data('settings');
	var page = (0, _utility.$)(object).data('page');

	(0, _utility.$)(object).data('loading', true);

	// Set button text to Load More.
	(0, _utility.$)(object).text(settings.translation.loading);

	var data = {
		action: 'csco_ajax_load_more',
		page: page,
		posts_per_page: settings.posts_per_page,
		query_data: settings.query_data,
		attributes: settings.attributes,
		options: settings.options,
		_ajax_nonce: settings.nonce
	};

	// Request Url.
	var csco_pagination_url;

	if ('ajax_restapi' === settings.type) {
		csco_pagination_url = settings.rest_url;
	} else {
		csco_pagination_url = settings.url;
	}

	// Send Request.
	_utility.$.post(csco_pagination_url, data, function (res) {
		if (res.success) {

			// Get the posts.
			var data = (0, _utility.$)(res.data.content);

			if (data.length) {

				var cscoAppendEnd = function cscoAppendEnd() {

					// WP Post Load trigger.
					(0, _utility.$)(document.body).trigger('post-load');

					// Reinit Facebook widgets.
					if ((0, _utility.$)('#fb-root').length) {
						FB.XFBML.parse();
					}

					// Set button text to Load More.
					(0, _utility.$)(object).text(settings.translation.load_more);

					// Increment a page.
					page = page + 1;

					(0, _utility.$)(object).data('page', page);

					// Set the loading state.
					(0, _utility.$)(object).data('loading', false);
				};

				// Check archive type.
				if ((0, _utility.$)(container).find('.cs-posts-area__outer').hasClass('cs-posts-area__type-mixed')) {

					for (var key in data) {

						if (key % 1 !== 0) {
							continue;
						}

						var last_section = (0, _utility.$)(container).find('.cs-posts-area__outer .cs-posts-area__main ').last();

						var last_posts = (0, _utility.$)(last_section).find('article').length;
						var last_class = (0, _utility.$)(last_section).attr('class');
						var new_section = false;
						var point_end = window.getComputedStyle((0, _utility.$)(last_section)[0]).getPropertyValue('--cs-posts-area-grid-columns-const') * 2;

						if ((0, _utility.$)(last_section).hasClass('cs-posts-area__alt')) {
							new_section = 'cs-posts-area__grid';
						}

						if ((0, _utility.$)(last_section).hasClass('cs-posts-area__grid') && last_posts === point_end) {
							new_section = 'cs-posts-area__alt';
						}

						// Append new section.
						if (new_section) {
							(0, _utility.$)('<div></div>').appendTo((0, _utility.$)(container).find('.cs-posts-area__outer')).addClass(last_class).removeClass('cs-posts-area__alt cs-posts-area__grid').addClass(new_section);
						}

						// Append new posts to layout.
						(0, _utility.$)(container).find('.cs-posts-area__outer .cs-posts-area__main').last().append(data[key]);
					}

					cscoAppendEnd();
				} else {
					(0, _utility.$)(container).find('.cs-posts-area__main').append(data);

					cscoAppendEnd();
				}
			}

			// Remove Button on Posts End.
			if (res.data.posts_end || !data.length) {

				// Remove Load More button.
				(0, _utility.$)(object).remove();
			}
		} else {
			// console.log(res);
		}
	}).fail(function (xhr, textStatus, e) {
		// console.log(xhr.responseText);
	});
}

/**
 * Initialization Load More
 */
function csco_load_more_init(infinite) {
	(0, _utility.$)('.cs-posts-area').each(function () {

		if ((0, _utility.$)(this).data('init')) {
			return;
		}

		var csco_ajax_settings;

		if (typeof csco_ajax_pagination !== 'undefined') {
			csco_ajax_settings = csco_ajax_pagination;
		}

		var archive_data = (0, _utility.$)(this).data('posts-area');

		if (archive_data) {
			csco_ajax_settings = JSON.parse(window.atob(archive_data));
		}

		if (csco_ajax_settings) {

			if (!infinite && csco_ajax_settings.infinite_load) {
				return;
			}

			// Add load more button.
			(0, _utility.$)(this).append('<div class="cs-posts-area__pagination"><button class="cs-load-more">' + csco_ajax_settings.translation.load_more + '</button></div>');

			// Set load more settings.
			(0, _utility.$)(this).find('.cs-load-more').data('settings', csco_ajax_settings);
			(0, _utility.$)(this).find('.cs-load-more').data('page', 2);
			(0, _utility.$)(this).find('.cs-load-more').data('loading', false);
			(0, _utility.$)(this).find('.cs-load-more').data('scrollHandling', {
				allow: _utility.$.parseJSON(csco_ajax_settings.infinite_load),
				delay: 400
			});
		}

		(0, _utility.$)(this).data('init', true);
	});
}

csco_load_more_init(true);

_utility.csco.addAction('canvas.components.serverSideRender.onChange', 'posts-init-loadmore', function (props) {
	if ('canvas/posts' === props.block) {
		csco_load_more_init(false);
	}
});

// On Scroll Event.
(0, _utility.$)(window).scroll(function () {

	(0, _utility.$)('.cs-posts-area .cs-load-more').each(function () {

		var loading = (0, _utility.$)(this).data('loading');
		var scrollHandling = (0, _utility.$)(this).data('scrollHandling');

		if ('undefined' === typeof scrollHandling) {
			return;
		}

		if ((0, _utility.$)(this).length && !loading && scrollHandling.allow) {

			scrollHandling.allow = false;

			(0, _utility.$)(this).data('scrollHandling', scrollHandling);

			var object = this;

			setTimeout(function () {
				var scrollHandling = (0, _utility.$)(object).data('scrollHandling');

				if ('undefined' === typeof scrollHandling) {
					return;
				}

				scrollHandling.allow = true;

				(0, _utility.$)(object).data('scrollHandling', scrollHandling);
			}, scrollHandling.delay);

			var offset = (0, _utility.$)(this).offset().top - (0, _utility.$)(window).scrollTop();
			if (4000 > offset) {
				csco_ajax_get_posts(this);
			}
		}
	});
});

// On Click Event.
(0, _utility.$)('body').on('click', '.cs-load-more', function () {
	var loading = (0, _utility.$)(this).data('loading');

	if (!loading) {
		csco_ajax_get_posts(this);
	}
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * AJAX Auto Load Next Post.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Contains functions for AJAX Auto Load Next Post.
                                                                                                                                                                                                                                                                               */

var _utility = __webpack_require__(0);

/**
 * Check if Load Nextpost is defined by the wp_localize_script
 */
if (typeof csco_ajax_nextpost !== 'undefined') {

	var objNextparent = (0, _utility.$)('.cs-site-primary > .cs-site-content'),
	    objNextsect = '.cs-nextpost-section',
	    objNextpost = null,
	    currentNTitle = document.title,
	    currentNLink = window.location.href,
	    loadingNextpost = false,
	    scrollNextpost = {
		allow: true,
		reallow: function reallow() {
			scrollNextpost.allow = true;
		},
		delay: 400 //(milliseconds) adjust to the highest acceptable value
	};

	// Init.
	if (csco_ajax_nextpost.next_post) {
		(0, _utility.$)(objNextparent).after('<div class="cs-nextpost-inner"></div>');

		objNextpost = (0, _utility.$)('.cs-nextpost-inner');
	}
}

/**
 * Get next post
 */
function csco_ajax_get_nextpost() {
	loadingNextpost = true;

	// Set class loading.
	var data = {
		action: 'csco_ajax_load_nextpost',
		not_in: csco_ajax_nextpost.not_in,
		current_user: csco_ajax_nextpost.current_user,
		archive_singular: csco_ajax_nextpost.archive_singular,
		nonce: csco_ajax_nextpost.nonce,
		next_post: csco_ajax_nextpost.next_post
	};

	// Request Url.
	var csco_ajax_nextpost_url;
	if ('ajax_restapi' === csco_ajax_nextpost.type) {
		csco_ajax_nextpost_url = csco_ajax_nextpost.rest_url;
	} else {
		csco_ajax_nextpost_url = csco_ajax_nextpost.url;
	}

	// Send Request.
	_utility.$.post(csco_ajax_nextpost_url, data, function (res) {

		csco_ajax_nextpost.next_post = false;

		if (res.success) {

			// Get the posts.
			var data = (0, _utility.$)(res.data.content);

			// Check if there're any posts.
			if (data.length) {
				// Set the loading state.
				loadingNextpost = false;

				// Set not_in.
				csco_ajax_nextpost.not_in = res.data.not_in;

				// Set next data.
				csco_ajax_nextpost.next_post = res.data.next_post;

				// Remove loader.
				(0, _utility.$)(objNextpost).siblings('.cs-nextpost-loading').remove();

				// Append new post.
				(0, _utility.$)(objNextpost).append(data);

				// Reinit facebook.
				if ((0, _utility.$)('#fb-root').length) {
					FB.XFBML.parse();
				}

				(0, _utility.$)(document.body).trigger('post-load');
			}
		} else {
			// console.log(res);
		}
	}).fail(function (xhr, textStatus, e) {
		// console.log(xhr.responseText);
	});
}

/**
 * Check if Load Nextpost is defined by the wp_localize_script
 */
if (typeof csco_ajax_nextpost !== 'undefined') {

	// On Scroll Event.
	(0, _utility.$)(window).scroll(function () {
		var scrollTop = (0, _utility.$)(window).scrollTop();

		// Init nextpost.
		if (csco_ajax_nextpost.next_post) {

			if (objNextpost.length && !loadingNextpost && scrollNextpost.allow) {
				scrollNextpost.allow = false;
				setTimeout(scrollNextpost.reallow, scrollNextpost.delay);
				// Calc current offset.
				var offset = objNextpost.offset().top + objNextpost.innerHeight() - scrollTop;
				// Load nextpost.
				if (4000 > offset) {
					(0, _utility.$)(objNextpost).after('<div class="cs-nextpost-loading"></div>');

					csco_ajax_get_nextpost();
				}
			}
		}

		// Reset browser data link.
		var objFirst = (0, _utility.$)(objNextsect).first();

		if (objFirst.length) {
			var firstTop = (0, _utility.$)(objFirst).offset().top;
			// If there has been a change.
			if (scrollTop < firstTop && window.location.href !== currentNLink) {
				document.title = currentNTitle;
				window.history.pushState(null, currentNTitle, currentNLink);
			}
		}

		// Fade in\out header.
		var csco_ajax_nextpost_active = 0;

		(0, _utility.$)('.cs-page-header-area').each(function (index, elem) {
			if ((0, _utility.$)(elem).isInViewport()) {
				csco_ajax_nextpost_active++;
			}
		});

		if (csco_ajax_nextpost_active > 1) {
			_utility.$body.addClass('cs-nextpost-changing');
		} else {
			_utility.$body.removeClass('cs-nextpost-changing');
		}

		// Set browser data link.
		(0, _utility.$)(objNextsect).each(function (index, elem) {

			var elemTop = (0, _utility.$)(elem).offset().top;
			var elemHeight = (0, _utility.$)(elem).innerHeight();

			if (scrollTop > elemTop && scrollTop < elemTop + elemHeight) {
				// If there has been a change.
				if (window.location.href !== (0, _utility.$)(elem).data('url')) {
					// New title.
					document.title = (0, _utility.$)(elem).data('title');
					// New link.
					window.history.pushState(null, (0, _utility.$)(elem).data('title'), (0, _utility.$)(elem).data('url'));
					// Google Analytics.
					if (typeof gtag === 'function' && _typeof(window.gaData) === 'object') {

						var trackingId = Object.keys(window.gaData)[0];
						if (trackingId) {
							gtag('config', trackingId, {
								'page_title': (0, _utility.$)(elem).data('title'),
								'page_location': (0, _utility.$)(elem).data('url')
							});

							gtag('event', 'page_view', { 'send_to': trackingId });
						}
					}
				}
			}
		});
	});
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utility = __webpack_require__(0);

var cscoDarkMode = {}; /** ----------------------------------------------------------------------------
                        * Color Scheme Toogle */

(function () {
	var $this;

	cscoDarkMode = {

		/** Initialize */
		init: function init(e) {
			$this = cscoDarkMode;

			// Init events.
			$this.events(e);
		},

		/** Events */
		events: function events(e) {
			if ((0, _utility.$)('body').hasClass('wp-admin')) {
				return;
			}

			// DOM Load
			window.addEventListener('load', function (e) {
				$this.initMode(e);
			});

			window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
				$this.initMode(e);
			});

			// Switch
			(0, _utility.$)(document).on('click', '.cs-site-scheme-toggle', function (e) {
				$this.changeMode(e);
			});
		},

		/** Detect Color Scheme */
		detectColorScheme: function detectColorScheme(color) {
			var level = 190;

			// Set alpha channel.
			var alpha = 1;

			var rgba = [255, 255, 255];

			var color_rgba = false;

			// Trim color.
			color = color.trim();

			// If HEX format.
			if ('#' === color[0]) {
				// Remove '#' from start.
				color = color.replace('#', '').trim();

				if (3 === color.length) {
					color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
				}

				rgba[0] = parseInt(color.substr(0, 2), 16);
				rgba[1] = parseInt(color.substr(2, 2), 16);
				rgba[2] = parseInt(color.substr(4, 2), 16);
			} else if (color_rgba = color.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i)) {
				// Convert RGB or RGBA.
				rgba[0] = parseInt(color_rgba[1]);
				rgba[1] = parseInt(color_rgba[2]);
				rgba[2] = parseInt(color_rgba[3]);

				if (color_rgba[4] !== undefined) {
					alpha = parseFloat(color_rgba[4]);
				}
			}

			// Apply alpha channel.
			rgba.forEach(function myFunction(channel, key, stack) {
				stack[key] = String(channel + Math.ceil((255 - channel) * (1 - alpha))).padStart(2, '0');
			});

			// Set default scheme.
			var scheme = 'default';

			// Get brightness.
			var brightness = (rgba[0] * 299 + rgba[1] * 587 + rgba[2] * 114) / 1000;

			// If color gray.
			if (rgba[0] === rgba[1] && rgba[1] === rgba[2]) {
				if (brightness < level) {
					scheme = 'dark';
				}
			} else {
				if (brightness < level) {
					scheme = 'inverse';
				}
			}

			return scheme;
		},

		/** Set Individual Scheme */
		setIndividualScheme: function setIndividualScheme() {
			var list = {
				'body': '--cs-color-site-background'
			};

			for (var key in list) {
				if ((0, _utility.$)(key).length <= 0) {
					continue;
				}

				/* jshint ignore:start */
				(0, _utility.$)(key).each(function (index, element) {

					var color = window.getComputedStyle((0, _utility.$)(element)[0]).getPropertyValue(list[key]);

					var scheme = $this.detectColorScheme(color);

					(0, _utility.$)(element).attr('data-scheme', scheme);
				});
				/* jshint ignore:end */
			}

			if ('true' !== (0, _utility.$)('.cs-page-header-area').attr('data-force')) {
				(0, _utility.$)('.cs-page-header-area').attr('data-scheme', (0, _utility.$)(_utility.$body).attr('data-scheme'));
			}
		},

		/** Init Mode */
		initMode: function initMode(e) {

			// Get system scheme.
			var systemSchema = 'default';

			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				systemSchema = 'dark';
			}

			(0, _utility.csSetCookie)('_color_system_schema', systemSchema, { expires: 2592000 });

			// Set site scheme.
			var siteScheme = 'default';

			switch (csLocalize.siteSchemeMode) {
				case 'dark':
					siteScheme = 'dark';
					break;
				case 'light':
					siteScheme = 'default';
					break;
				case 'system':
					siteScheme = systemSchema;
					break;
			}

			if (csLocalize.siteSchemeToogle) {
				if ('default' === (0, _utility.csGetCookie)('_color_schema')) {
					siteScheme = 'default';
				}
				if ('dark' === (0, _utility.csGetCookie)('_color_schema')) {
					siteScheme = 'dark';
				}
			}

			// Change site scheme
			if (siteScheme !== _utility.$body.attr('site-data-scheme')) {
				$this.changeScheme(siteScheme, false);
			}
		},

		/** Change Mode */
		changeMode: function changeMode(e) {
			if ('dark' === _utility.$body.attr('site-data-scheme')) {
				$this.changeScheme('default', true);
			} else {
				$this.changeScheme('dark', true);
			}
		},

		/** Change Scheme */
		changeScheme: function changeScheme(scheme, cookie) {
			_utility.$body.addClass('cs-scheme-toggled');

			_utility.$body.attr('site-data-scheme', scheme);

			$this.setIndividualScheme();

			if (cookie) {
				(0, _utility.csSetCookie)('_color_schema', scheme, { expires: 2592000 });
				(0, _utility.csSetCookie)('_color_system_schema', null, { expires: 2592000 });
			}

			setTimeout(function () {
				_utility.$body.removeClass('cs-scheme-toggled');
			}, 100);
		}
	};
})();

// Initialize.
cscoDarkMode.init();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utility = __webpack_require__(0);

(function () {
	var timeouts = [];
	/*let headerPrimary =  $('.cs-header-primary');*/
	var mainMenu = (0, _utility.$)('.cs-menu__nav-inner > .menu-item');
	var mainSubmenu = mainMenu.children('.sub-menu');
	var searchForm = (0, _utility.$)('.cs-search__nav-form');

	var elementHide = function elementHide(element, callback) {
		var showWrappers = element.find('.cs-show-wrapper');
		var maxItems = 0;
		_utility.$.each(showWrappers, function (index, wrapper) {
			var showItems = (0, _utility.$)(wrapper).children();
			if (maxItems < showItems.length) {
				maxItems = showItems.length;
			}
			_utility.$.each(showItems, function (itemIndex, itemElement) {
				timeouts[itemIndex] = setTimeout(function () {
					(0, _utility.$)(itemElement).removeClass("cs-showed-item");
				}, (showItems.length - 1 - itemIndex) * 85);
			});
		});
		timeouts[maxItems] = setTimeout(function () {
			element.fadeOut(function () {
				if (callback) {
					callback();
				}
			});
		}, maxItems * 85);

		mainMenu.removeClass('menu-item-expanded');
		mainMenu.siblings('.menu-item').removeClass('click-disable-color').removeClass('menu-item-expanded');
		mainMenu.find('.menu-item').removeClass('click-disable-color').removeClass('menu-item-expanded');

		if (mainSubmenu.is(':visible')) {
			mainSubmenu.stop().fadeOut().promise().done(function () {
				mainSubmenu.css('margin-bottom', '').attr('data-margin-value', 0);
				mainSubmenu.find('.sub-menu').hide();
			});
		}
	};
	var elementShow = function elementShow(element, callback) {

		_utility.$body.addClass('cs-component-opened');

		element.fadeIn(function () {
			var showWrappers = element.find('.cs-show-wrapper');
			var maxItems = 0;
			_utility.$.each(showWrappers, function (index, wrapper) {
				var showItems = (0, _utility.$)(wrapper).children();
				if (maxItems < showItems.length) {
					maxItems = showItems.length;
				}
				_utility.$.each(showItems, function (itemIndex, itemElement) {
					timeouts[itemIndex] = setTimeout(function () {
						(0, _utility.$)(itemElement).addClass('cs-showed-item');
					}, 85 + itemIndex * 85);
				});
			});

			timeouts[maxItems] = setTimeout(function () {
				if (callback) {
					callback();
				}
			}, maxItems * 85);
		});
	};

	var slideMenu = (0, _utility.$)('.cs-menu'),
	    slideSearch = (0, _utility.$)('.cs-search');
	var isMenuOpened = false,
	    isSearchOpened = false,
	    isClidked = false;

	(0, _utility.$)(".cs-header__search-toggle").click(function () {
		if (!isClidked) {
			isClidked = true;
			if (isMenuOpened) {
				elementHide(slideMenu, function () {
					elementShow(slideSearch, function () {
						isSearchOpened = true;
						isClidked = false;
						(0, _utility.$)('.cs-search__input').focus();
					});
					isMenuOpened = false;
				});
			} else {
				if (isSearchOpened) {
					elementHide(slideSearch, function () {
						isSearchOpened = false;
						isClidked = false;
						searchForm[0].reset();

						_utility.$body.removeClass('cs-component-opened');
					});
				} else {
					elementShow(slideSearch, function () {
						isSearchOpened = true;
						isClidked = false;
						(0, _utility.$)('.cs-search__input').focus();
					});
				}
			}
		}
	});
	(0, _utility.$)(".cs-header__menu-toggle").click(function () {
		if (!isClidked) {
			isClidked = true;
			if (isSearchOpened) {
				elementHide(slideSearch, function () {
					elementShow(slideMenu, function () {
						isMenuOpened = true;
						isClidked = false;
					});
					isSearchOpened = false;
				});
			} else {
				if (isMenuOpened) {
					elementHide(slideMenu, function () {
						isMenuOpened = false;
						isClidked = false;
						_utility.$body.removeClass('cs-component-opened');
					});
				} else {
					elementShow(slideMenu, function () {
						isMenuOpened = true;
						isClidked = false;
					});
				}
			}
		}
	});
	(0, _utility.$)(".cs-search__close").click(function () {
		if (!isClidked) {
			isClidked = true;
			elementHide(slideSearch, function () {
				isSearchOpened = false;
				isClidked = false;
				searchForm[0].reset();
				_utility.$body.removeClass('cs-component-opened');
			});
		}
	});
})(); /** ----------------------------------------------------------------------------
       * Search Dropdown */

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utility = __webpack_require__(0);

(function () {
	var initAPI = false;
	var process = false;
	var contex = [];
	var players = [];
	var attrs = [];

	// Create deferred object
	var YTdeferred = _utility.$.Deferred();
	window.onYouTubePlayerAPIReady = function () {
		// Resolve when youtube callback is called
		// passing YT as a parameter.
		YTdeferred.resolve(window.YT);
	};

	// Embedding youtube iframe api.
	function embedYoutubeAPI() {
		var tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/iframe_api';
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}

	// Video rescale.
	function rescaleVideoBackground() {
		(0, _utility.$)('.cs-video-init').each(function () {
			var w = (0, _utility.$)(this).parent().width();
			var h = (0, _utility.$)(this).parent().height();

			var hideControl = 400;

			var id = (0, _utility.$)(this).attr('data-uid');

			if (w / h > 16 / 9) {
				players[id].setSize(w, w / 16 * 9 + hideControl);
			} else {
				players[id].setSize(h / 9 * 16, h + hideControl);
			}
		});
	}

	// Init video background.
	function initVideoBackground() {
		if ((0, _utility.$)('body').hasClass('wp-admin')) {
			return;
		}

		if (process) {
			return;
		}

		process = true;

		// Smart init API.
		if (!initAPI) {
			var elements = (0, _utility.$)('.cs-video-wrapper[data-video-id]');

			if (elements.length) {
				embedYoutubeAPI();

				initAPI = true;
			}
		}

		if (!initAPI) {
			process = false;

			return;
		}

		// Whenever youtube callback was called = deferred resolved
		// your custom function will be executed with YT as an argument.
		YTdeferred.done(function (YT) {

			(0, _utility.$)('.cs-video-inner').each(function () {

				// The state.
				var isInit = (0, _utility.$)(this).hasClass('cs-video-init');

				var id = null;

				// Generate unique ID.
				if (!isInit) {
					id = Math.random().toString(36).substr(2, 9);
				} else {
					id = (0, _utility.$)(this).attr('data-uid');
				}

				// Create contex.
				contex[id] = this;

				// The actived.
				var isActive = (0, _utility.$)(contex[id]).hasClass('active');

				// The monitor.
				var isInView = (0, _utility.$)(contex[id]).isInViewport();

				// Initialization.
				if (isInView && !isInit) {
					// Add init class.
					(0, _utility.$)(contex[id]).addClass('cs-video-init');

					// Add unique ID.
					(0, _utility.$)(contex[id]).attr('data-uid', id);

					// Get video attrs.
					var videoID = (0, _utility.$)(contex[id]).parent().data('video-id');
					var videoStart = (0, _utility.$)(contex[id]).parent().data('video-start');
					var videoEnd = (0, _utility.$)(contex[id]).parent().data('video-end');

					// Check video id.
					if (typeof videoID === 'undefined' || !videoID) {
						return;
					}

					// Video attrs.
					attrs[id] = {
						'videoId': videoID,
						'startSeconds': videoStart,
						'endSeconds': videoEnd,
						'suggestedQuality': 'hd720'
					};

					// Creating a player.
					players[id] = new YT.Player(contex[id], {
						playerVars: {
							autoplay: 0,
							autohide: 1,
							modestbranding: 1,
							rel: 0,
							showinfo: 0,
							controls: 0,
							disablekb: 1,
							enablejsapi: 0,
							iv_load_policy: 3,
							playsinline: 1,
							loop: 1
						},
						events: {
							'onReady': function onReady() {
								players[id].loadVideoById(attrs[id]);
								players[id].mute();
							},
							'onStateChange': function onStateChange(e) {
								if (e.data === 1) {
									(0, _utility.$)(contex[id]).parents('.cs-overlay, .cs-video-wrap').addClass('cs-video-bg-init');
									(0, _utility.$)(contex[id]).addClass('active');
								} else if (e.data === 0) {
									players[id].seekTo(attrs[id].startSeconds);
								}
							}
						}
					});
					rescaleVideoBackground();
				}

				// Pause and play.
				var control = (0, _utility.$)(contex[id]).parents('.cs-overlay, .cs-video-wrap').find('.cs-player-state');

				if (isActive && isInit && !(0, _utility.$)(control).hasClass('cs-player-upause')) {

					if (isInView && (0, _utility.$)(control).hasClass('cs-player-play')) {
						// Change icon.
						(0, _utility.$)(control).removeClass('cs-player-play').addClass('cs-player-pause');
						// Pause video.
						players[id].playVideo();
					}

					if (!isInView && (0, _utility.$)(control).hasClass('cs-player-pause')) {
						// Change icon.
						(0, _utility.$)(control).removeClass('cs-player-pause').addClass('cs-player-play');
						// Pause video.
						players[id].pauseVideo();
					}
				}
			});
		});

		process = false;
	}

	// State Control.
	_utility.$doc.on('click', '.cs-player-state', function () {
		var container = (0, _utility.$)(this).parents('.cs-overlay, .cs-video-wrap').find('.cs-video-inner');

		var id = (0, _utility.$)(container).attr('data-uid');

		(0, _utility.$)(this).toggleClass('cs-player-pause cs-player-play');

		if ((0, _utility.$)(this).hasClass('cs-player-pause')) {
			(0, _utility.$)(this).removeClass('cs-player-upause');
			players[id].playVideo();
		} else {
			(0, _utility.$)(this).addClass('cs-player-upause');
			players[id].pauseVideo();
		}
	});

	// Stop Control.
	_utility.$doc.on('click', '.cs-player-stop', function () {
		var container = (0, _utility.$)(this).parents('.cs-overlay, .cs-video-wrap').find('.cs-video-inner');

		var id = (0, _utility.$)(container).attr('data-uid');

		(0, _utility.$)(this).siblings('.cs-player-state').removeClass('cs-player-pause').addClass('cs-player-play');

		(0, _utility.$)(this).siblings('.cs-player-state').addClass('cs-player-upause');

		players[id].pauseVideo();
	});

	// Volume Control.
	_utility.$doc.on('click', '.cs-player-volume', function () {
		var container = (0, _utility.$)(this).parents('.cs-overlay, .cs-video-wrap').find('.cs-video-inner');

		var id = (0, _utility.$)(container).attr('data-uid');

		(0, _utility.$)(this).toggleClass('cs-player-mute cs-player-unmute');

		if ((0, _utility.$)(this).hasClass('cs-player-unmute')) {
			players[id].unMute();
		} else {
			players[id].mute();
		}
	});

	// Document scroll.
	_utility.$window.on('load scroll resize scrollstop', function () {
		initVideoBackground();
	});

	// Document ready.
	_utility.$doc.ready(function () {
		initVideoBackground();
	});

	// Post load.
	_utility.$body.on('post-load', function () {
		initVideoBackground();
	});

	// Document resize.
	_utility.$window.on('resize', function () {
		rescaleVideoBackground();
	});

	// Init.
	initVideoBackground();
})(); /** ----------------------------------------------------------------------------
       * Video Background */

/***/ })
/******/ ]);