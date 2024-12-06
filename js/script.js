// globals
var body;

function classOnCondition(element, className, condition) {
	if (condition)
		$(element).addClass(className);
	else
		$(element).removeClass(className);
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
	var html, header, hero, encyclopedia, footer;

	$(document).ready(function () {
		html = $('html');
		body = $('body');
		header = $('header');
		hero = $('#hero');
		encyclopedia = $('#encyclopedia');
		footer = $('footer');

		resetTheView();

		window.addEventListener('resize', resetTheView);
		window.addEventListener('scroll', resetTheView);

		document.onunload = function(){
			window.removeEventListener('resize', resetTheView);
			window.removeEventListener('scroll', resetTheView);
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
			case 'choose-region':
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
		if (checkGTagDataLayer() || !nodeId) {
			return;
		}

		gtag("event", "FaqNode", {
			"event_category": nodeId
		});
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

// toc-toggle

(function () {
	let toggleBlocksIdsToTocsIds = {};
	jqueryDefer(function() {
		$(document).ready(function() {
			const params = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
			$('.tb-content-toggle').each(function(index, contentToggleItem) {
				initContentToggleHandler(contentToggleItem, params[contentToggleItem.id]);
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
		applyCurrentToggleContent(contentToggleItem, targetId);
	}

	function replaceHashWithHeading(id) {
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

	function initContentToggleHandler(contentToggleItem, targetId) {
        toggleBlocksIdsToTocsIds[contentToggleItem.id] = {};
		$(contentToggleItem).find('> .panel > .panel-heading > a.content-toggle-button').each(function() {
			const id = $(this).attr("data-target").substring(1);
			toggleBlocksIdsToTocsIds[contentToggleItem.id][id] = [];
			let i = 0;
			$(contentToggleItem).find('#' + id).find(':header').each(function() {
				let heading = $(this);
				heading.attr('id', heading.attr("id") + i++);
				toggleBlocksIdsToTocsIds[contentToggleItem.id][id].push('markdown-toc-' + $(this).attr('id'));
			});
			replaceHashWithHeading(id);
		});

		window.addEventListener('popstate', function() {
			onPopStateHandler(contentToggleItem);
		});

		if (!targetId) {
			targetId = Object.keys(toggleBlocksIdsToTocsIds[contentToggleItem.id])[0];
		}
		applyCurrentToggleContent(contentToggleItem, targetId);

		$(contentToggleItem).find('> .panel > .panel-heading > a.content-toggle-button')
			.each((idx,element) => parseButtons(element, contentToggleItem));
	}

	function applyCurrentToggleContent(contentToggleItem, targetId) {
		$(contentToggleItem).find('> .panel > .panel-heading > a.content-toggle-button').removeClass('active');
		$(contentToggleItem).find('> .panel > .panel-heading > a.content-toggle-button[data-target="#' + targetId + '\"]').addClass('active');
		$(contentToggleItem).find('> .panel > .panel-collapse').removeClass('show');
		$(contentToggleItem).find('> .panel > .panel-collapse#' + targetId).addClass('show');
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

// expand-code-blocks-button AND copy-code button

(function () {
	jqueryDefer(function () {
		$(document).on('selectionchange', function () {
			$('.clipboard-btn').removeClass('noChars');
			const selectedChars = getSelectedText();
			if (selectedChars == 0) {
				$('.clipboard-btn').addClass('noChars');
			}
		});

		$(document).ready(function () {
			$('.copy-code').each(function (index, codeBlocksItem) {
				const classes = $(codeBlocksItem).attr('class').split(' ');
				const expandableClass = classes.find(className => className.startsWith('expandable'));
				if (classes && expandableClass) {
					const rows = parseInt(expandableClass.split('-')[1]);
					addExpandButton(codeBlocksItem, rows);
				}
			});
			parseAllCodeBlocks();
		})
	});

	function addExpandButton(codeBlock, rows) {
		const pre = $(codeBlock).find('pre').first();
		let collapsedHeight = rows * 28 + 5;
		pre.css('height', collapsedHeight + 'px');

		let button = $('<button class="expand-code-btn"><div class="arrow"></div><p class="btn-text expand">expand</p><p class="btn-text collapse">collapse</p></button>');

		button.on('click', function () {
			if ($(codeBlock).attr('data-expanded') === 'true') {
				$(codeBlock).attr('data-expanded', 'false');
				codeBlock.scrollIntoView({ block: "start" });
			} else {
				$(codeBlock).attr('data-expanded', 'true');
			}
		});

		$(codeBlock).append(button);
	}

	const clipboard = new Clipboard('.noChars');
	clipboard.on('success', function (e) {
		$('.clipboard-btn').removeClass('noChars');
		e.clearSelection();
		const trigger = e.trigger;
		if (!$(trigger).attr('data-skip-tooltip')) {
			showTooltip(e.trigger, 'Copied!');
		} else {
			$(trigger).removeAttr('data-skip-tooltip');
		}
	});

	function clearTooltip(e) {
		const el = $(e.currentTarget);
		el.removeClass('showTool');
		el.attr('aria-label', null);
	}

	function showTooltip(elem, msg) {
		const el = $(elem);
		el.addClass('showTool');
		el.attr('aria-label', msg);
	}

	function getSelectedText() {
		let text;
		if (window.getSelection) {
			text = window.getSelection().toString();
		} else if (document.getSelection) {
			text = document.getSelection();
		} else if (document.selection) {
			text = document.selection.createRange().text;
		}
		return text;
	}

	function parseAllCodeBlocks() {
		const allCodeBlocksElements = $(".highlighter-rouge");
		allCodeBlocksElements.each(function (i) {
			const codeBlock = $(this);
			if (codeBlock.hasClass('copy-code')) {
				codeBlock.each(function () {
					const block = codeBlock.find('pre.highlight > code .rouge-code');
					const currentId = "codeblock" + (i + 1);
					block.attr('id', currentId);
					const clipButton = $('<button class="clipboard-btn" data-clipboard-target="#' + currentId + '"><p>Copy to clipboard</p><div><img src="https://img.thingsboard.io/copy-code-icon.svg" alt="Copy to clipboard"></div></button>');
					const copyCodeButtonContainer = $(this).find('.highlight pre.highlight');
					copyCodeButtonContainer.prepend(clipButton);
					const Tooltip = $('<div class="customTooltip"><div class="tooltipText">Copied!</div></div>');
					copyCodeButtonContainer.append(Tooltip);
					copyCodeButtonContainer.addClass('clipboard-btn');
					copyCodeButtonContainer.attr('data-clipboard-target', "#" + currentId);
					copyCodeButtonContainer.on('mouseleave', clearTooltip);
					copyCodeButtonContainer.on('blur', clearTooltip);
					copyCodeButtonContainer.on('click', function (e) {
						const el = $(e.currentTarget);
						if (el.hasClass('showTool')) {
							clearTooltip(e);
							copyCodeButtonContainer.attr('data-skip-tooltip', "true");
						}
					});
				});
			}
		});
	}
})();

//carousel

(function () {
	jqueryDefer(Owl);

	function Owl() {
		if ($('.owl-carousel').length > 0) {
			const scriptsList = [
				{src: '/css/owl.carousel.min.css', type: 'css'},
				{src: '/css/owl.theme.default.min.css', type: 'css'},
				{src: '/js/owl.carousel.min.js', type: 'script'}
			];
			loadNextScript(0, scriptsList, function() {

				$(document).ready(function() {

					if ($('.owl-carousel').hasClass('timeline')) {

						const timeline = document.querySelector('.timeline')

						const timelineItems = document.querySelectorAll('.timeline-item')

						const timelineTitle = document.querySelectorAll(".timeline-title");

						let maxTitleHeight = 0;

						function searchForTimelineAnimation() {

							const searchedBlockObserver = new IntersectionObserver(entries => {
								entries.forEach(entry => {
									if (entry.isIntersecting) {
										Array.from(timelineItems).slice().reverse().forEach((item, index) => {
											const timelineText = item.querySelector('.timeline-text');
											const listItems = timelineText.querySelectorAll('li');

											setTimeout(() => {
												item.classList.add('active')

												listItems.forEach((li, index) => {
													li.style.transitionDelay = `${index * 0.2}s`;
												});
											}, index * 300)
										})
										searchedBlockObserver.unobserve(entry.target);
									}
								})
							}, {
								threshold: 1
							});

							searchedBlockObserver.observe(timeline);
						}

						searchForTimelineAnimation ();

						Array.from(timelineItems).slice().reverse().forEach((item, index) => {
							const timelineText = item.querySelector('.timeline-text');
							const listItems = timelineText.querySelectorAll('li');

							item.querySelector('.timeline-label').addEventListener('click', () => {
								item.classList.toggle('active')

								if (item.classList.contains('active')) {
									listItems.forEach((li, index) => {
										li.style.transitionDelay = `${index * 0.2}s`;
									});
								} else {
									listItems.forEach((li, index) => {
										li.style.transitionDelay = `${(listItems.length - 1 - index) * 0.1}s`;
									});
								}
							})
						})

						timelineTitle.forEach((element) => {
							const elementHeight = element.offsetHeight;
							if (elementHeight > maxTitleHeight) {
								maxTitleHeight = elementHeight;
							}
						});

						document.documentElement.style.setProperty('--maxTitleHeight', `${maxTitleHeight}px`);
					}

					function setupMarginPadding($carousel, property) {
						return Number(getComputedStyle($carousel[0]).getPropertyValue(property));
					}

					function autoPlayStatus($carousel) {
						return !$carousel[0].classList.contains("no-autoplay");
					}

					function autoWidthStatus($carousel) {
						return $carousel[0].classList.contains("autoWidth");
					}

					function loopStatus($carousel) {
						return $carousel[0].classList.contains("loopEnabled");
					}

					function initializeCarousel() {
						$('.owl-carousel').each(function(index) {

							const $carousel = $(this);
							const carouselId = "owl-carousel-" + index;
							$(this).attr("id", carouselId);

							const settings = $(this).data('setting');
							const itemsHigher0 = settings[0] || 1;
							const itemsHigher600 = settings[600] || 1;
							const itemsHigher960 = settings[960] || 1;
							const defaultItems = settings['defaultItems'] || 1;

							const navStatus = !$(this)[0].classList.contains("disableNav");

							const isSmoothAutoplay = $carousel[0].classList.contains("smoothAutoPlay");
							const isSmallScreen = $(window).width() < 600;

							$('#' + carouselId).owlCarousel({
								lazyLoad: true,
								margin: setupMarginPadding($carousel, '--carousel-margin'),
								stagePadding: setupMarginPadding($carousel, '--stagePadding'),
								autoHeight: false,
								autoWidth: autoWidthStatus($carousel),
								loop: loopStatus($carousel),
								autoplay: isSmoothAutoplay && !isSmallScreen ? true : autoPlayStatus($carousel),
								autoplayTimeout: isSmallScreen ? 5000 : $carousel[0].classList.contains("smoothAutoPlay") ? 0 : 5000,
								autoplaySpeed: isSmallScreen ? false : $carousel[0].classList.contains("smoothAutoPlay") ? 15000 : false,
								autoplayHoverPause: !$carousel[0].classList.contains("smoothAutoPlay"),
								slideTransition: 'linear',
								nav: $carousel[0].classList.contains("timeline"),
								responsiveBaseElement: 'body',
								responsiveClass: true,
								mouseDrag: !$carousel[0].classList.contains("timeline"),
								startPosition: $carousel[0].classList.contains("timeline") ? $carousel.find('.owl-item').length - 1 : 0,
								responsive: {
									0: {
										items: itemsHigher0
									},
									600: {
										items: itemsHigher600
									},
									960: {
										items: itemsHigher960
									},
									1025: {
										nav: navStatus,
										items: itemsHigher960
									},
									1280: {
										nav: navStatus,
										items: defaultItems
									}
								},
								onInitialized: function(event) {
									if ($carousel[0].classList.contains("smoothAutoPlay")) {
										$(event.target).trigger('play.owl.autoplay');
										setTimeout(function() {
											$(event.target).trigger('stop.owl.autoplay');
											$(event.target).trigger('play.owl.autoplay', [15000]);
										}, 10);
									}
								}
							});
						});
					}

					initializeCarousel();

					$(window).on('load', function() {
						$('.owl-carousel').each(function() {
							$(this).trigger('destroy.owl.carousel');
						});
						initializeCarousel();
					});

					let previousWidth = $(window).width();

					$(window).resize(function() {
						const currentWidth = $(window).width();
						const widthDifference = Math.abs(currentWidth - previousWidth);

						if (widthDifference > 1) {

							$('.owl-carousel').each(function() {
								$(this).trigger('destroy.owl.carousel');
							});
							initializeCarousel();

							previousWidth = currentWidth;
						}
					});

				});
			});
		}
	}
})();
