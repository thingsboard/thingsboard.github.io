 //modal close button
(function(){
	//π.modalCloseButton = function(closingFunction){
	//	return π.button('pi-modal-close-button', null, null, closingFunction);
	//};
})();

// globals
var body;

function booleanAttributeValue(element, attribute, defaultValue){
	// returns true if an attribute is present with no value
	// e.g. booleanAttributeValue(element, 'data-modal', false);
	if (element.hasAttribute(attribute)) {
		var value = element.getAttribute(attribute);
		if (value === '' || value === 'true') {
			return true;
		} else if (value === 'false') {
			return false;
		}
	}

	return defaultValue;
}

function classOnCondition(element, className, condition) {
	if (condition)
		$(element).addClass(className);
	else
		$(element).removeClass(className);
}

function highestZ() {
	var Z = 1000;

	$("*").each(function(){
		var thisZ = $(this).css('z-index');

		if (thisZ != "auto" && thisZ > Z) Z = ++thisZ;
	});

	return Z;
}

function newDOMElement(tag, className, id){
	var el = document.createElement(tag);

	if (className) el.className = className;
	if (id) el.id = id;

	return el;
}

function px(n){
	return n + 'px';
}

var tb = (function () {
	var HEADER_HEIGHT;
	var OPEN_NAV_HEIGHT = 250;
	var html, header, navs, navItems, quickstartButton, hero, encyclopedia, footer, headlineWrapper;

	$(document).ready(function () {
		html = $('html');
		body = $('body');
		header = $('header');
		navs = header.find('nav');
		navItems = header.find('.nav-item');
		quickstartButton = $('#quickstartButton');
		hero = $('#hero');
		encyclopedia = $('#encyclopedia');
		footer = $('footer');
		headlineWrapper = $('#headlineWrapper');
		HEADER_HEIGHT = header.outerHeight();

		resetTheView();

		window.addEventListener('resize', resetTheView);
		window.addEventListener('scroll', resetTheView);
		window.addEventListener('keydown', handleKeystrokes);

		document.onunload = function(){
			window.removeEventListener('resize', resetTheView);
			window.removeEventListener('scroll', resetTheView);
			window.removeEventListener('keydown', handleKeystrokes);
		};

		setInterval(setFooterType, 10);
	});

	function setFooterType() {
		var windowHeight = window.innerHeight;
        var footerHeight = footer.outerHeight();
		var bodyHeight;

		switch (html[0].id) {
            case 'common': {
				bodyHeight = hero.outerHeight() + encyclopedia.outerHeight();
				break;
			}

            case 'docs': {
                if ($(body).hasClass('fixed')) {
                    bodyHeight = encyclopedia.outerHeight();
                } else {
                    bodyHeight = encyclopedia.outerHeight() - footerHeight;
                }
                break;
            }
			case 'home':
			case 'thingsboard-pe':
            case 'mobile-app':
			case 'edge':
            case 'pe-aws':
            case 'pricing':
            case 'partner-program':
			case 'installations':
            case 'partners':
				bodyHeight = windowHeight;
				break;

			case 'caseStudies':
				bodyHeight = windowHeight * 2;
				break;

			default: {
				bodyHeight = hero.outerHeight() + $('#mainContent').outerHeight();
			}
		}

		classOnCondition(body, 'fixed', windowHeight - footerHeight > bodyHeight);
	}

	function resetTheView(event) {
		if (html.hasClass('open-nav') && event.type !== "scroll") {
			toggleMenu();
		} else if (!event || event.type !== "scroll") {
			HEADER_HEIGHT = header.outerHeight();
		}

		classOnCondition(html, 'flip-nav', window.pageYOffset > 0);

		if (html[0].id == 'home') {
			setHomeHeaderStyles();
		}
	}

	function setHomeHeaderStyles() {
		var Y = window.pageYOffset;
		var heroBottom = hero[0].getBoundingClientRect().bottom;

		classOnCondition(html[0], 'y-enough', Y > heroBottom);
	}

	function toggleMenu(targetNavId) {
		if (window.innerWidth < 886) {
			pushmenu.show('primary');
		}
		else {
			var newHeight = HEADER_HEIGHT;
			if (!targetNavId) {
				targetNavId = 'mainNav';
			}
			navs.hide();
			navItems.removeClass('nav-item-on');

			if (!html.hasClass('open-nav')) {
				var targetNavElement = $('#'+targetNavId);
				targetNavElement.show();
				newHeight = OPEN_NAV_HEIGHT + HEADER_HEIGHT;
			}

			header.css({height: px(newHeight)});
			html.toggleClass('open-nav');
		}
	}

	function openMenu(targetNavId, navItemId) {
		var targetNavItem = $('#'+navItemId);
		if (targetNavItem.hasClass('nav-item-on')) {
			toggleMenu(targetNavId);
			return;
		}
		navs.hide();
		navItems.removeClass('nav-item-on');
		var targetNavElement = $('#'+targetNavId);
		targetNavElement.show();
		var newHeight = OPEN_NAV_HEIGHT + HEADER_HEIGHT;
		targetNavItem.addClass('nav-item-on');
		header.css({height: px(newHeight)});
		html.addClass('open-nav');
	}

	function handleKeystrokes(e) {
		switch (e.which) {
			case 27: {
				if (html.hasClass('open-nav')) {
					toggleMenu();
				}
				break;
			}
		}
	}

	function showVideo() {
		$('body').css({overflow: 'hidden'});

		var videoPlayer = $("#videoPlayer");
		var videoIframe = videoPlayer.find("iframe")[0];
		videoIframe.src = videoIframe.getAttribute("data-url");
		videoPlayer.css({zIndex: highestZ()});
		videoPlayer.fadeIn(300);
		videoPlayer.click(function(){
			$('body').css({overflow: 'auto'});

			videoPlayer.fadeOut(300, function(){
				videoIframe.src = '';
			});
		});
	}

	function openAccordionItem(itemId) {
	    var thisItem = $('#'+itemId);
        if (!thisItem) return;
        var thisWrapper = $(thisItem).find('.wrapper').eq(0);
        if (!thisWrapper) return;
        var contentHeight = thisWrapper.find('.content').eq(0).innerHeight() + 'px';
        if (!$(thisItem).hasClass('on')) {
            $(thisItem).addClass('on');
            thisWrapper.css({height: contentHeight});

            var duration = parseFloat(getComputedStyle(thisWrapper[0]).transitionDuration) * 1000;

            setTimeout(function(){
                thisWrapper.css({height: ''});
                moving = false;
            }, duration);
        }
    }

	return {
		toggleMenu: toggleMenu,
		openMenu: openMenu,
		showVideo: showVideo,
        openAccordionItem: openAccordionItem
	};
})();

// accordion
(function(){
	var yah = true;
	var moving = false;
	var CSS_BROWSER_HACK_DELAY = 25;

	$(document).ready(function(){
		// Safari chokes on the animation here, so...
		if (navigator.userAgent.indexOf('Chrome') == -1 && navigator.userAgent.indexOf('Safari') != -1){
			var hackStyle = newDOMElement('style');
			hackStyle.innerHTML = '.pi-accordion .wrapper{transition: none}';
			body.append(hackStyle);
		}
		// Gross.

		$('.pi-accordion').each(function () {
			var accordion = this;
			var content = this.innerHTML;
			var container = newDOMElement('div', 'container');
			container.innerHTML = content;
			$(accordion).empty();
			accordion.appendChild(container);
			CollapseBox($(container), 0);
		});

        $('[data-faq-id]').each(function () {
            var faqAnchor = this;
            var nodeId = this.getAttribute('data-faq-id');
            var fontSize = this.getAttribute('data-faq-link-size') || 'smaller';
            var faqLink = newDOMElement('a', 'faq-link');
            $(faqLink).css('fontSize', fontSize);
            faqAnchor.appendChild(faqLink);
            $(faqLink).click(function() {
                openFaqNode(nodeId);
            });
        });

		setYAH();

		setTimeout(function () {
			yah = false;
		}, 500);

        window.addEventListener('popstate', onPopStateFaqNode);
        onPopStateFaqNode();

    });

    function onPopStateFaqNode() {
        var locationHash = window.location.hash;
        if (locationHash && locationHash.startsWith('#')) {
            var nodeId = locationHash.substring(1);
            if (nodeId.endsWith('/')) {
                nodeId = nodeId.substring(0, nodeId.length - 1);
            }
            var item = $('.pi-accordion div[data-item-id='+nodeId+']');
            if (item.length) {
                openFaqNode(nodeId);
            }
        }
    }

    function openFaqNode(nodeId) {
		$('.pi-accordion > .container > div[data-item-id]').each(function () {
			if ($(this).hasClass('on')) {
				var thisWrapper = $(this).find('.wrapper').eq(0);
				if (!thisWrapper) return;
				$(this).removeClass('on');
				thisWrapper.css({height: 0});
			}
		});
        tb.openAccordionItem(nodeId);
        document.getElementById(nodeId).scrollIntoView();
        reportFaqNode(nodeId);
    }

    function reportFaqNode(nodeId) {
        if (!ga.hasOwnProperty("loaded") || ga.loaded !== true || !nodeId) {
            return;
        }
        ga("send", "event", "FaqNode", nodeId);
    }

	function CollapseBox(container, index){
		container.children('.item').each(function(){
			// build the TOC DOM
			// the animated open/close is enabled by having each item's content exist in the flow, at its natural height,
			// enclosed in a wrapper with height = 0 when closed, and height = contentHeight when open.
			var item = this;
			// var paddingLeft = 20 * index;
            // $(item).css('paddingLeft', paddingLeft + 'px');
            $(item).attr('data-level-index', index);

			// only add content wrappers to containers, not to links
			var isContainer = item.tagName === 'DIV';

			var titleText = item.getAttribute('data-title');
			var titleTag = item.getAttribute('data-tag');
            var titleId = item.getAttribute('data-id');
            var itemId = item.getAttribute('data-item-id');
			if (!titleTag) {
                titleTag = 'div';
            }

			var title = newDOMElement(titleTag, 'title');
			title.innerHTML = titleText;
			if (titleId) {
                title.id = titleId;
            }
            if (itemId) {
                item.id = itemId;
            }

			var wrapper, content;

			if (isContainer) {
				wrapper = newDOMElement('div', 'wrapper');
				content = newDOMElement('div', 'content');
				content.innerHTML = item.innerHTML;
				wrapper.appendChild(content);
			}

			item.innerHTML = '';
			item.appendChild(title);

			if (wrapper) {
				item.appendChild(wrapper);
				$(wrapper).css({height: 0, padding: 0});
			}


			$(title).click(function(){
				if (!yah) {
					if (moving) return;
					moving = true;
				}

				if (container[0].getAttribute('data-single')) {
					var openSiblings = item.siblings().filter(function(sib){return sib.hasClass('on');});
					openSiblings.forEach(function(sibling){
						toggleItem(sibling);
					});
				}

				setTimeout(function(){
					if (!isContainer) {
						moving = false;
						return;
					}
					toggleItem(item);
				}, CSS_BROWSER_HACK_DELAY);
			});

			function toggleItem(thisItem){
				var thisWrapper = $(thisItem).find('.wrapper').eq(0);

				if (!thisWrapper) return;

				var contentHeight = thisWrapper.find('.content').eq(0).outerHeight(true) + 'px';

				if ($(thisItem).hasClass('on')) {
					thisWrapper.css({height: contentHeight});
					$(thisItem).removeClass('on');

					setTimeout(function(){
						thisWrapper.css({height: 0});
                        thisWrapper.css({overflow: 'hidden'});
						moving = false;
					}, CSS_BROWSER_HACK_DELAY);
				} else {
					$(item).addClass('on');
					thisWrapper.css({height: contentHeight});

					var duration = parseFloat(getComputedStyle(thisWrapper[0]).transitionDuration) * 1000;

					setTimeout(function(){
						thisWrapper.css({height: ''});
                        thisWrapper.css({overflow: 'visible'});
						moving = false;
					}, duration);

                    var itemId = item.getAttribute('data-item-id');
                    if (itemId && itemId.length) {
                        reportFaqNode(itemId);
                    }
				}
			}

			if (content) {
				var innerContainers = $(content).children('.container');
				if (innerContainers.length > 0) {
					innerContainers.each(function(){
						CollapseBox($(this), index+1);
					});
				}
			}
		});
	}

	function setYAH() {
		var pathname = location.href.split('#')[0]; // on page load, make sure the page is YAH even if there's a hash
        pathname = pathname.split('?')[0];
		var currentLinks = [];

		$('.pi-accordion a').each(function () {
			if (pathname === this.href) currentLinks.push(this);
		});

		currentLinks.forEach(function (yahLink) {
			$(yahLink).parents('.item').each(function(){
				$(this).addClass('on');
				$(this).find('.wrapper').eq(0).css({height: 'auto', overflow: 'visible'});
				$(this).find('.content').eq(0).css({opacity: 1});
			});

			$(yahLink).addClass('yah');
            var levelIndex = Number($(yahLink).attr('data-level-index'));
            var left = -(levelIndex + 1) * 20 + 'px';
            var yahIndicator = $('<div class="yah-indicator"></div>');
            yahIndicator.css('left', left);
            $(yahLink).prepend(yahIndicator);
			yahLink.onclick = function(e){e.preventDefault();};
		});
	}
})();

// images gallery
(function () {
	window.addEventListener("load", function() {
		window.removeEventListener("load", arguments.callee, false);
		if(!document.getElementsByClassName('pswp').length) {
			document.body.insertAdjacentHTML('beforeend',
				'<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">\n' +
				'        <div class="pswp__bg"></div>\n' +
				'        <div class="pswp__scroll-wrap">\n' +
				'            <div class="pswp__container">\n' +
				'                <div class="pswp__item"></div>\n' +
				'                <div class="pswp__item"></div>\n' +
				'                <div class="pswp__item"></div>\n' +
				'            </div>\n' +
				'\n' +
				'            <div class="pswp__ui pswp__ui--hidden">\n' +
				'\n' +
				'                <div class="pswp__top-bar">\n' +
				'                    <div class="pswp__counter"></div>\n' +
				'\n' +
				'                    <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>\n' +
				'\n' +
				'                    <button class="pswp__button pswp__button--share" title="Share"></button>\n' +
				'\n' +
				'                    <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>\n' +
				'\n' +
				'                    <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>\n' +
				'\n' +
				'                    <div class="pswp__preloader">\n' +
				'                        <div class="pswp__preloader__icn">\n' +
				'                            <div class="pswp__preloader__cut">\n' +
				'                                <div class="pswp__preloader__donut"></div>\n' +
				'                            </div>\n' +
				'                        </div>\n' +
				'                    </div>\n' +
				'                </div>\n' +
				'                <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">\n' +
				'                    <div class="pswp__share-tooltip"></div>\n' +
				'                </div>\n' +
				'                <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">\n' +
				'                </button>\n' +
				'                <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">\n' +
				'                </button>\n' +
				'                <div class="pswp__caption">\n' +
				'                    <div class="pswp__caption__center"></div>\n' +
				'                </div>\n' +
				'            </div>\n' +
				'        </div>\n' +
				'    </div>'
			);
		}

		var initPhotoSwipeFromDOM = function(gallerySelector) {
			var parseThumbnailElements = function(el) {
				var thumbElements = el.childNodes,
					numNodes = thumbElements.length,
					items = [],
					figureEl,
					linkEl,
					size,
					item;

				for(var i = 0; i < numNodes; i++) {

					figureEl = thumbElements[i];
					if(figureEl.nodeType !== 1) {
						continue;
					}
					linkEl = figureEl.children[0];
					size = linkEl.children[0];
					item = {
						src: linkEl.getAttribute('href'),
						w: 2500,
						h: 0,
						sizeLoaded: false
					};

					if(figureEl.children.length > 1) {
						item.title = figureEl.children[1].innerHTML;
					}
					if(linkEl.children.length > 0) {
						item.msrc = linkEl.children[0].getAttribute('src');
					}
					if(item.msrc === item.src){
						item.w = parseInt(size.naturalWidth, 10);
						item.h = parseInt(size.naturalHeight, 10);
					}

					item.el = figureEl;
					items.push(item);
				}
				return items;
			};

			var closest = function closest(el, fn) {
				return el && ( fn(el) ? el : closest(el.parentNode, fn) );
			};

			var onThumbnailsClick = function(e) {
				e = e || window.event;
				e.preventDefault ? e.preventDefault() : e.returnValue = false;

				var eTarget = e.target || e.srcElement;

				var clickedListItem = closest(eTarget, function(el) {
					return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
				});

				if(!clickedListItem) {
					return;
				}

				var clickedGallery = clickedListItem.parentNode,
					childNodes = clickedListItem.parentNode.childNodes,
					numChildNodes = childNodes.length,
					nodeIndex = 0,
					index;

				for (var i = 0; i < numChildNodes; i++) {
					if(childNodes[i].nodeType !== 1) {
						continue;
					}

					if(childNodes[i] === clickedListItem) {
						index = nodeIndex;
						break;
					}
					nodeIndex++;
				}

				if(index >= 0) {
					openPhotoSwipe( index, clickedGallery );
				}
				return false;
			};

			var photoswipeParseHash = function() {
				var hash = window.location.hash.substring(1),
					params = {};

				if(hash.length < 5) {
					return params;
				}

				var vars = hash.split('&');
				for (var i = 0; i < vars.length; i++) {
					if(!vars[i]) {
						continue;
					}
					var pair = vars[i].split('=');
					if(pair.length < 2) {
						continue;
					}
					params[pair[0]] = pair[1];
				}

				if(params.gid) {
					params.gid = parseInt(params.gid, 10);
				}

				return params;
			};

			var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
				var pswpElement = document.querySelectorAll('.pswp')[0],
					gallery,
					options,
					items;

				items = parseThumbnailElements(galleryElement);

				options = {
					galleryUID: galleryElement.getAttribute('data-pswp-uid'),
					getThumbBoundsFn: function(index) {
						var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
							pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
							rect = thumbnail.getBoundingClientRect();
						return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
					},
					bgOpacity: 0.8,
					closeOnScroll: false,
					shareEl: false,
					fullscreenEl: false,
					zoomEl: true,
					history: false,
					loop: false
				};

				if(fromURL) {
					if(options.galleryPIDs) {
						for(var j = 0; j < items.length; j++) {
							if(items[j].pid == index) {
								options.index = j;
								break;
							}
						}
					} else {
						options.index = parseInt(index, 10) - 1;
					}
				} else {
					options.index = parseInt(index, 10);
				}

				if( isNaN(options.index) ) {
					return;
				}

				if(disableAnimation) {
					options.showAnimationDuration = 0;
				}

				gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

				gallery.next = () => {
					if (gallery.options.loop || gallery.getCurrentIndex() < gallery.items.length - 1) {
						gallery.goTo(gallery.getCurrentIndex() + 1);
					}
				}

				gallery.prev = () => {
					if (gallery.options.loop || gallery.getCurrentIndex() > 0) { // This condition added
						gallery.goTo(gallery.getCurrentIndex() - 1);
					}
				}

				gallery.listen('gettingData', function(index, item) {
					if (!item.sizeLoaded) {
						item.sizeLoaded = true;
						var img = new Image();
						img.onload = function() {
							item.w = this.width;
							item.h = this.height;
							gallery.updateSize(true);
						}
						img.src = item.src;
					}
				});

				gallery.init();

				var buttonLeft = pswpElement.getElementsByClassName('pswp__button--arrow--left')[0];
				var buttonRight = pswpElement.getElementsByClassName('pswp__button--arrow--right')[0];

				buttonLeft.hidden = gallery.getCurrentIndex() === 0;
				buttonRight.hidden = gallery.getCurrentIndex() + 1 === gallery.items.length;

				gallery.listen('beforeChange', function() {
						buttonLeft.hidden = gallery.getCurrentIndex() === 0;
						buttonRight.hidden = gallery.getCurrentIndex() + 1 === gallery.items.length;
					}
				);
			};

			var galleryElements = document.querySelectorAll( gallerySelector );

			for(var i = 0, l = galleryElements.length; i < l; i++) {
				galleryElements[i].setAttribute('data-pswp-uid', i+1);
				galleryElements[i].onclick = onThumbnailsClick;
			}

			var hashData = photoswipeParseHash();
			if(hashData.pid && hashData.gid) {
				openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
			}
		};

		initPhotoSwipeFromDOM('.images-gallery');
	}, false);
})();

var pushmenu = (function(){
	var allPushMenus = {};

	$(document).ready(function(){
		$('[data-auto-burger]').each(function(){
			var container = this;
			var id = container.getAttribute('data-auto-burger');

			var autoBurger = document.getElementById(id) || newDOMElement('div', 'pi-pushmenu', id);
			var ul = autoBurger.querySelector('ul') || newDOMElement('ul');

			$(container).find('a[href], button').each(function () {
				if (!booleanAttributeValue(this, 'data-auto-burger-exclude', false)) {
					var clone = this.cloneNode(true);
					clone.id = '';

					if (clone.tagName == "BUTTON") {
						var aTag = newDOMElement('a');
						aTag.href = '';
						aTag.innerHTML = clone.innerHTML;
						aTag.onclick = clone.onclick;
						clone = aTag;
					}
					var li = newDOMElement('li');
					li.appendChild(clone);
					ul.appendChild(li);
				}
			});

			autoBurger.appendChild(ul);
			body.append(autoBurger);
		});

		$(".pi-pushmenu").each(function(){
			allPushMenus[this.id] = PushMenu(this);
		});
	});

	function show(objId) {
		allPushMenus[objId].expose();
	}

	function PushMenu(el) {
		var html = document.querySelector('html');

		var overlay = newDOMElement('div', 'overlay');
		var content = newDOMElement('div', 'content');
		content.appendChild(el.querySelector('*'));

		var side = el.getAttribute("data-side") || "right";

		var sled = newDOMElement('div', 'sled');
		$(sled).css(side, 0);

		sled.appendChild(content);

		var closeButton = newDOMElement('button', 'push-menu-close-button');
		closeButton.onclick = closeMe;

		sled.appendChild(closeButton);

		overlay.appendChild(sled);
		el.innerHTML = '';
		el.appendChild(overlay);

		sled.onclick = function(e){
			e.stopPropagation();
		};

		overlay.onclick = closeMe;

		window.addEventListener('resize', closeMe);

		function closeMe(e) {
			if (e.target == sled) return;

			$(el).removeClass('on');
			setTimeout(function(){
				$(el).css({display: 'none'});

				$(body).removeClass('overlay-on');
			}, 300);
		}

		function exposeMe(){
			$(body).addClass('overlay-on'); // in the default config, kills body scrolling

			$(el).css({
				display: 'block',
				zIndex: highestZ()
			});

			setTimeout(function(){
				$(el).addClass('on');
			}, 10);
		}

		return {
			expose: exposeMe
		};
	}

	return {
		show: show
	};
})();

// toc-toggle

(function () {
	let toggleBlocksIdsToTocsIds = {};
	jqueryDefer(function() {
		$(document).ready(function() {
			const blocks = [];
			$('.tb-content-toggle').each(function(index, contentToggleItem) {
				blocks.push(contentToggleItem);
			});

			blocks.forEach(function(contentToggleItem) {
				toggleBlocksIdsToTocsIds[contentToggleItem.id] = {};
				initContentToggleHandler(contentToggleItem)
			});
		})
	});

	function onPopStateHandler(contentToggleItem) {
		var params = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
		var targetId = params[contentToggleItem.id];
		if (!targetId) {
			const activeLinkItem = $(contentToggleItem).find('a.content-toggle-button.active:first')
			if (activeLinkItem && activeLinkItem.attr("data-target")) {
				targetId = $(activeLinkItem).attr("data-target").substring(1);
			} else {
				targetId = $(contentToggleItem).find('a.content-toggle-button').first().attr("data-target").substring(1);
			}
		}
		selectTargetHandler(contentToggleItem, targetId);
	}

	function selectTargetHandler(contentToggleItem, targetId) {
		for (let toggleBlockId in toggleBlocksIdsToTocsIds[contentToggleItem.id]) {
			for (let tocid of toggleBlocksIdsToTocsIds[contentToggleItem.id][toggleBlockId]) {
				let tocItem = $('#' + tocid);
				if(tocItem && tocItem.parentNode) {
					if (contentToggleItem.id === targetId) {
						tocItem.parent().removeClass('hide');
						continue;
					}
					tocItem.parent().addClass('hide');
				}
			}
		}

		$('.tb-content-toggle#' + contentToggleItem.id + ' > .panel > .panel-heading > a.content-toggle-button').removeClass("active");
		$(".tb-content-toggle#" + contentToggleItem.id + " > .panel > .panel-heading > a.content-toggle-button[data-target='#" + targetId + "']").addClass("active");
		$(".tb-content-toggle#" + contentToggleItem.id +  " > .panel > .panel-collapse").removeClass("show");
		$(".tb-content-toggle#" + contentToggleItem.id +  " > .panel > .panel-collapse#" + targetId).addClass("show");
	}

	function replaceHashWithHeading(id) {
		const headers = $('#' + id).find(":header");
		const filteredHeaders = $('#' + id).find('p');
		const siblingParagraphs = $(filteredHeaders).map(function(idx, el) {
			return $(el).nextAll('p:first');
		});

		$(siblingParagraphs).each(function() {
			if ($(this).text().startsWith('##')) {
				const paragraph = $(this);
				const headerLevel = paragraph.text().split(' ')[0].length;
				const newHeader = $("<h" + headerLevel + ">").text(paragraph.text().replace(/^#+/, ''));
				newHeader.attr("id", newHeader.text().trim().split(' ').join('-').trim().toLowerCase());
				paragraph.replaceWith(newHeader);
			}
		});
	}

	function initContentToggleHandler(contentToggleItem) {
		let toggleBlocksIds = [];
		$('#' + contentToggleItem.id + ' > .panel .panel-heading > a.content-toggle-button').each(function() {
			toggleBlocksIds.push($(this).attr("data-target").substring(1));
		});
		let i = 0;
		for (let id of toggleBlocksIds) {
			toggleBlocksIdsToTocsIds[contentToggleItem.id][id] = [];
			$('#' + id).find(":header").each(function() {
				let heading = $(this);
				heading.attr("id", heading.attr("id") + i++);
				toggleBlocksIdsToTocsIds[contentToggleItem.id][id].push('markdown-toc-' + $(this).attr('id'));
			});
			replaceHashWithHeading(id);
		}

		window.addEventListener('popstate', function() {
			onPopStateHandler(contentToggleItem);
		});

		onPopStateHandler(contentToggleItem);

		$('.tb-content-toggle#' + contentToggleItem.id + ' > .panel > .panel-heading > a.content-toggle-button')
			.each((idx,element) => parseButtons(element, contentToggleItem));

		const firstId = Object.keys(toggleBlocksIdsToTocsIds[contentToggleItem.id])[0];

		$('.tb-content-toggle#' + contentToggleItem.id + ' > .panel > .panel-heading > a.content-toggle-button').removeClass("active");
		$(".tb-content-toggle#" + contentToggleItem.id + " > .panel > .panel-heading > a.content-toggle-button[data-target='#" + firstId + "']").addClass("active");

		$(".tb-content-toggle#" + contentToggleItem.id + " > .panel > .panel-collapse").removeClass("show");
		$(".tb-content-toggle#" + contentToggleItem.id + " > .panel > .panel-collapse#" + firstId).addClass("show");
	}

	function parseButtons(element, contentToggleItem) {
		element.addEventListener('click', function(event) {
			event.preventDefault();
			var id = element.getAttribute("data-target").substring(1);
			var param = contentToggleItem.id;
			var params = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
			params[param] = id;

			var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + Qs.stringify(params);
			if (window.location.hash) {
				newurl += window.location.hash;
			}
			window.history.pushState({ path: newurl }, '', newurl);
			selectTargetHandler(contentToggleItem, id);
		});
	}
})();
