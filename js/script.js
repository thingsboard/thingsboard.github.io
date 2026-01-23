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
			thisWrapper.css({overflow: 'visible'});

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
		if (navigator.userAgent.indexOf('Chrome') == -1 && navigator.userAgent.indexOf('Safari') != -1){
			const hackStyle = newDOMElement('style');
			hackStyle.innerHTML = '.pi-accordion .wrapper{transition: none}';
			body.append(hackStyle);
		}

		$('.pi-accordion').each(function () {
			const accordion = this;
			const content = this.innerHTML;
			const container = newDOMElement('div', 'container');
			container.innerHTML = content;
			$(accordion).empty();
			accordion.appendChild(container);
			CollapseBox($(container), 0);
		});

		if ($('[data-faq-id]').length > 0) {
			const scriptsList = [
				{ src: 'https://unpkg.com/@popperjs/core@2', type: 'script' },
				{ src: 'https://unpkg.com/tippy.js@6', type: 'script' },
				{ src: 'https://unpkg.com/tippy.js@6/themes/light.css', type: 'css' },
			];

			$('[data-faq-id]').each(function () {
				let faqAnchor = this;
				let nodeId = this.getAttribute('data-faq-id');
				let fontSize = this.getAttribute('data-faq-link-size') || 'smaller';
				let faqLink = newDOMElement('a', 'faq-link');
				$(faqLink).css('fontSize', fontSize);
				faqAnchor.appendChild(faqLink);
				$(faqLink).on('click', function() {
					navigateToFaq(nodeId);
				});
			});

			loadNextScript(0, scriptsList, function () {
				$('[data-faq-id]').each(function () {
					let faqAnchor = this;
					let nodeId = this.getAttribute('data-faq-id');
					let faqLink = $(faqAnchor).children('a')[0];
					let contentSource = document.querySelector('div[data-item-id="' + nodeId + '"] .container');

					if (contentSource) {
						let fullText = $(contentSource).text().trim().replace(/\s+/g, ' ');
						let customTooltip = this.getAttribute('data-faq-tooltip');
						let charsPerLine = 24;
						let maxLines = 5;
						let maxChars = charsPerLine * maxLines;
						let tooltipContent = newDOMElement('span', 'tooltip-content');

						if (customTooltip) {
							tooltipContent.innerHTML = customTooltip;
						} else if (fullText.length > maxChars && !customTooltip) {
							let truncatedText = fullText.substring(0, maxChars);
							let lastSpaceIndex = truncatedText.lastIndexOf(' ');
							if (lastSpaceIndex > maxChars - 20) {
								truncatedText = truncatedText.substring(0, lastSpaceIndex);
							}

							tooltipContent.textContent = truncatedText + '… ';
							let readMoreLink = newDOMElement('a', 'read-more-link');
							readMoreLink.href = 'javascript:void(0)';
							readMoreLink.textContent = 'read more';
							tooltipContent.appendChild(readMoreLink);
						} else {
							tooltipContent.textContent = fullText;
						}

						tippy(faqLink, {
							content: tooltipContent,
							allowHTML: true,
							interactive: true,
							maxWidth: 320,
							placement: 'right',
							delay: [100, 200],
							theme: 'light',
							onShow(instance) {
								instance.popper.querySelector('.read-more-link')?.addEventListener('click', (e) => {
									e.preventDefault();
									navigateToFaq(nodeId);
								});
							},
							popperOptions: {
								modifiers: [
									{
										name: 'offset',
										options: {
											offset: (item) => {
												if (item.placement.includes('right') || item.placement.includes('top')) {
													return [0, 20];
												}

												if (item.placement.includes('left') || item.placement.includes('bottom')) {
													return [10, 5];
												}

												return [0, 5];
											},
										},
									},
								],
							},
						});
					}
				});
			});
		}

		function navigateToFaq(nodeId) {
			const faqElement = document.querySelector(`div[data-item-id="${nodeId}"]`);
			if (!faqElement) return;

			const faqSection = faqElement.closest('section[id^="faq-"]');
			if (faqSection) {
				const containerId = faqSection.id.replace('faq-', '');

				if (typeof currentFaqContainer !== 'undefined' && containerId !== currentFaqContainer) {
					const productIdMap = {
						'thingsboard-ce': 'thingsboard-ce',
						'thingsboard-cloud': 'thingsboard-cloud',
						'thingsboard-private-cloud': 'thingsboard-private-cloud',
						'pe-pay-as-you-go': 'thingsboard-pe',
						'tbmq-ce': 'tbmq-ce',
						'tbmq-private-cloud': 'tbmq-private-cloud',
						'tbmq-pe-pay-as-you-go': 'tbmq-pe'
					};

					const productId = productIdMap[containerId];
					if (productId && typeof activateProductSection === 'function') {
						activateProductSection(productId);
					}
				}
			}

			const sectionIdArr = faqElement.parentElement.parentElement.id.split('-');
			const sectionId = sectionIdArr[sectionIdArr.length - 1];
			switchFaqSection(sectionId);

			openFaqNode(nodeId);
		}

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
				retryOpenNodeFromHash(nodeId, 0);
            }
        }
    }

	function retryOpenNodeFromHash(nodeId, tries) {
		if (sectionSwitched) {
			openFaqNode(nodeId);
		} else {
			if (tries < 10) {
				setTimeout(() => retryOpenNodeFromHash(nodeId, ++tries), 150);
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

		const questionEl = document.querySelector(`div[data-item-id="${nodeId}"]`);
		if (questionEl) {
			var $parent = $(questionEl).parent();
			var $loadMoreBtn = $parent.find('.load-more');
			if ($(questionEl).hasClass('hidden') && $loadMoreBtn.length) {
				loadMoreFaq($loadMoreBtn[0]);
			}
		}

		tb.openAccordionItem(nodeId);

		setTimeout(() => {
			const targetElement = document.getElementById(nodeId);
			if (targetElement) {
				const headerOffset = 100;
				const elementPosition = targetElement.getBoundingClientRect().top;
				const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth'
				});

				targetElement.classList.remove('highlight-answer');
				void targetElement.offsetWidth;
				targetElement.classList.add('highlight-answer');

				setTimeout(() => {
					targetElement.classList.remove('highlight-answer');
				}, 2500);
			}
		}, 50);

		reportFaqNode(nodeId);
	}

    function reportFaqNode(nodeId) {
		if (checkGTagDataLayer() || !nodeId) {
			return;
		}
		window.dataLayer.push({'event': 'faq_node_interaction',
			'faq_node_id': nodeId
		});
    }

	function CollapseBox(container, index){
		container.children('.item').each(function(){
			var item = this;
            $(item).attr('data-level-index', index);

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

		const accordionHasActiveMenuItemClick = $('.pi-accordion').hasClass('active-menu-item-click');

		$('.pi-accordion a').each(function () {
			if (pathname === this.href || (accordionHasActiveMenuItemClick && pathname.includes(this.href))) currentLinks.push(this);
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

			if (!accordionHasActiveMenuItemClick) {
				yahLink.onclick = function(e){ e.preventDefault(); };
			} else {
				yahLink.onclick = null;
			}
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
					const clipButton = $('<button class="clipboard-btn" data-clipboard-target="#' + currentId + '"><p>Copy to clipboard</p><div><img src="/images/copy-code-icon.svg" alt="Copy to clipboard"></div></button>');
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
				{ src: '/css/owl.carousel.min.css', type: 'css' },
				{ src: '/css/owl.theme.default.min.css', type: 'css' },
				{ src: '/js/owl.carousel.min.js', type: 'script' }
			];

			loadNextScript(0, scriptsList, function () {
				$(document).ready(function () {
					function initializeCarousel() {
						$('.owl-carousel').each(function (index) {
							const $carousel = $(this);
							const carouselId = "owl-carousel-" + index;
							$carousel.attr("id", carouselId);

							function startSmoothAutoPlay (event) {
								$(event.target).trigger('play.owl.autoplay');
								setTimeout(function() {
									$(event.target).trigger('stop.owl.autoplay');
									$(event.target).trigger('play.owl.autoplay', [15000]);
								}, 10);
							}

							function timelineContentOpen() {
								const timeline = document.querySelector('.timeline');

								const timelineItems = document.querySelectorAll('.timeline-item');

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

							function timelineContentToggle() {
								$('.timeline-item .timeline-label').off('click').on('click', function () {
									const $item = $(this).closest('.timeline-item');
									const $listItems = $item.find('.timeline-text li');

									$item.toggleClass('active');

									if ($item.hasClass('active')) {
										$listItems.each(function (index) {
											$(this).css('transition-delay', `${index * 0.2}s`);
										});
									} else {
										const count = $listItems.length;
										$listItems.each(function (index) {
											$(this).css('transition-delay', `${(count - 1 - index) * 0.1}s`);
										});
									}
								});
							}

							function navigateToItemByClick () {
								$carousel.find('.owl-item').on('click', function () {
									if (!$(this).hasClass('center')) {
										const position = $('[data-position]',  $(this)).data('position')
										$carousel.trigger('to.owl.carousel', [position, 300]);
									}
								});
							}

							const carouselContentToggle = $(`.owl-carousel-toggle-content#${carouselId}`)

							function owlCarouselToggleContent() {
								const currentItem = $carousel.find('.owl-item.active.center');
								const currentItemContent = currentItem.children().first();
								const currentItemContentId = currentItemContent.attr('id');
								carouselContentToggle.children().each(function() {
									if($(this).is(`#${currentItemContentId}`)) {
										$(this).addClass("current-content");
									} else {
										$(this).removeClass("current-content")
									}
								})

							}

							function scrollToToggleContent(time) {
								const targetPosition = carouselContentToggle.offset().top - 150;

								$('html, body').stop(true, false).animate({
									scrollTop: targetPosition
								}, time);
							}

							function courseBelowScroll() {
								$carousel.find('.course-below').on('click', function() {
									scrollToToggleContent(150)
								});
							}

							//courses handle url param
							let isCoursesVisible = false;
							let skipInitialUrlReset = false;

							const urlParams = new URLSearchParams(window.location.search);
							if (urlParams.has("course")) {
								skipInitialUrlReset = true;
							}

							function updateUrl() {
								const currentItem = $carousel.find('.owl-item.active.center');
								const currentItemContent = currentItem.children().first();
								const currentItemContentId = currentItemContent.attr('id');

								const url = new URL(window.location);
								url.searchParams.set("course", currentItemContentId);
								history.replaceState(null, "", url);
							}

							function resetUrl() {
								const url = new URL(window.location);
								url.searchParams.delete("course");
								history.replaceState(null, "", url);
							}

							function handleCourseCarouselUrlTracking() {
								const observer = new IntersectionObserver(entries => {
									entries.forEach(entry => {
										if (entry.target === carouselContentToggle[0]) {
											if (entry.isIntersecting) {
												isCoursesVisible = true;
												skipInitialUrlReset = false;

												updateUrl();
											} else {
												isCoursesVisible = false;

												if (skipInitialUrlReset) {
													skipInitialUrlReset = false;
												} else {
													resetUrl();
												}
											}
										}
									});
								}, { threshold: 0 });

								observer.observe(carouselContentToggle[0]);
							}

							if($carousel[0].classList.contains("courses-carousel")) {
								handleCourseCarouselUrlTracking();
							};
							
							function setUpCourseFromUrl() {
								const urlParams = new URLSearchParams(window.location.search);
								const courseId = urlParams.get('course');

								if(courseId) {
									const itemIndex = $carousel.data('id');
									scrollToToggleContent(500);
									return itemIndex[courseId];
								} else {
									return 0;
								}
							}

							const initialSettings = {
								loop: true,
								nav: true,
								lazyLoad: true,
								autoHeight: false,
								slideTransition: 'linear',
								responsiveBaseElement: 'body',
								responsiveClass: true,
								autoplayHoverPause: true,
								autoplay: true,
								startPosition: $carousel[0].classList.contains("courses-carousel") ? setUpCourseFromUrl() : 0,
								onInitialized: function(event) {
									if ($carousel[0].classList.contains("smooth-carousel")) {
										startSmoothAutoPlay(event);
									}
									if($carousel[0].classList.contains("timeline")) {
										timelineContentOpen();
										timelineContentToggle();
									}
									if($carousel[0].classList.contains("courses-carousel")) {
										courseBelowScroll();
									}
									if($carousel[0].classList.contains("cardMode")) {
										navigateToItemByClick();
									}
								},
								onChanged: function (event) {
									if($carousel[0].classList.contains("carousel-content-toggle")) {
										setTimeout(() => {
											owlCarouselToggleContent();
										}, 0)
									}
									if ($carousel[0].classList.contains("courses-carousel") && isCoursesVisible) {
										setTimeout(() => {
											updateUrl();
										}, 0)
									}
								}
							}

							const customSettings = $carousel.data('settings');
							const settings = Object.assign(initialSettings, customSettings);

							$('#' + carouselId).owlCarousel(settings);
						});
					}

					initializeCarousel();

					$(window).on('load', function () {
						$('.owl-carousel').each(function () {
							$(this).trigger('destroy.owl.carousel');
						});
						initializeCarousel();
					});

					let previousWidth = $(window).width();

					$(window).resize(function () {
						const currentWidth = $(window).width();
						const widthDifference = Math.abs(currentWidth - previousWidth);

						if (widthDifference > 1) {
							$('.owl-carousel').each(function () {
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


//new-accordion
(function () {
	$(document).ready(function () {
		$('.accordion-toggle').on('click', function () {
			const targetId = $(this).attr('id');
			const $content = $(`.accordion-content#${targetId}`);

			$(this).toggleClass('opened');
			$content.toggleClass('opened');
		});
	});
})();

//filter
(function () {
	$(document).ready(function () {

		if (!$('.filter').length) return;

		const containerId = $('.filter').attr('data-container-id');
		const filterMode = $('.filter').attr('data-mode');
		const container = document.getElementById(containerId);
		const content = container ? Array.from(container.children) : null;
		const checkboxes = $('.filter .check-box');
		const isCaseStudies = document.URL.includes('case-studies');

		checkboxes.on('click', function() {
			const checkboxId = $(this).attr('id');
			handleCheckboxes(this, checkboxId);
			const checkedIds = getCheckedIds();

			filter(checkedIds);

			if (isCaseStudies) {
				addUrlParameter('category', checkboxId);
			}
		});

		function handleCheckboxes(clickedElement, checkboxId) {
			if(checkboxId === "main") {
				checkboxes.not('#main').removeClass('checked');
				checkboxes.filter('#main').addClass('checked');
			} else {
				$(clickedElement).toggleClass('checked');

				const anyChecked = checkboxes.is('.checked');

				if(!anyChecked) {
					checkboxes.filter('#main').addClass('checked');
				} else {
					if(filterMode === 'checkbox') {
						checkboxes.filter('#main').removeClass('checked');
					} else if(filterMode === 'tab') {
						checkboxes.not($(clickedElement)).removeClass('checked');
					}
				}
			}
		}

		function getCheckedIds() {
			return $('.filter .check-box.checked').map(function () {
				return this.id;
			}).get();
		}

		function filter(checkedIds) {
			if (checkedIds.includes('main')) {
				$(content).removeClass('filter-hidden');
				return;
			}

			content.forEach(item => {
				const itemIds = item.id.split('|');
				const currentItemStatus = checkedIds.some(id => itemIds.includes(id));
				const shouldBeVisible = currentItemStatus || itemIds[0] === 'all';

				$(item).toggleClass('filter-hidden', !shouldBeVisible);
			});
		}

		if (document.URL.includes('case-studies')) {
			console.log(document.URL);
		}

		function addUrlParameter(key, value) {
			const url = new URL(window.location.href);
			url.searchParams.set(key, value.replaceAll(' ', '-'));
			window.history.pushState({ path: url.toString() }, '', url.toString());
		}

		const slider = document.getElementById('filterScrollContainer');

		const leftArrow = document.getElementById('filterScrollLeft');
		const rightArrow = document.getElementById('filterScrollRight');

		if (slider) {
			const checkArrows = () => {
				const scrollLeft = Math.ceil(slider.scrollLeft);
				const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

				leftArrow.classList.toggle('hidden', scrollLeft <= 0);
				rightArrow.classList.toggle('hidden', scrollLeft >= maxScrollLeft - 1);
			};


			let isDown = false;
			let startX;
			let scrollLeft;

			const startDragging = (e) => {
				isDown = true;
				slider.style.cursor = 'grabbing';
				startX = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
				scrollLeft = slider.scrollLeft;
			};

			const stopDragging = () => {
				isDown = false;
				slider.style.cursor = 'grab';
			};

			const onDrag = (e) => {
				if (!isDown) return;
				e.preventDefault();
				const x = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
				const walk = (x - startX);
				slider.scrollLeft = scrollLeft - walk;
			};

			slider.addEventListener('mousedown', startDragging);
			slider.addEventListener('mouseup', stopDragging)
			slider.addEventListener('mouseleave', stopDragging);
			slider.addEventListener('mousemove', onDrag);

			slider.addEventListener('touchstart', startDragging);
			slider.addEventListener('touchend', stopDragging);
			slider.addEventListener('touchmove', onDrag);

			slider.addEventListener('scroll', checkArrows);
			leftArrow.addEventListener('click', () => {
				slider.scrollBy({ left: -250, behavior: 'smooth' });
			});

			rightArrow.addEventListener('click', () => {
				slider.scrollBy({ left: 250, behavior: 'smooth' });
			});

			checkArrows();

			window.addEventListener('resize', checkArrows);
		}
	});
})();

//compare images
(function () {
	$(document).ready(function () {

		if (!$('.img-comp-container').length) return;

		$(window).on('load', function handler() {
			$(window).off('load', handler);

			function compareImages() {
				const $container = $(".img-comp-container").first();
				const $highPerfBlock = $(".img-comp-overlay").first();
				const $trad = $(".traditional-background").first();

				if (!$highPerfBlock.length) return;

				let clicked = false;

				$highPerfBlock.css({
					maxHeight: 'unset',
					width: ($trad.outerWidth() / 2) + "px"
				});
				$highPerfBlock.children().first().css({
					maxHeight: 'unset',
					width: $trad.outerWidth() + "px"
				});
				$container.css("height", $trad.outerHeight() + "px");

				const $slider = $("<div><div></div></div>").addClass("img-comp-slider");
				$highPerfBlock.parent().prepend($slider);
				$slider.css({
					left: ($trad.outerWidth() / 2) - ($slider.outerWidth() / 2) + "px",
					height: $trad.outerHeight() + "px"
				});

				$slider.on("mousedown touchstart", slideReady);
				$(window).on("mouseup touchend", slideFinish);

				$(window).on("resize", function () {
					$highPerfBlock.children().first().css({
						width: $trad.outerWidth() + "px",
						height: 'auto'
					});
					$highPerfBlock.css("width", ($trad.outerWidth() / 2) + "px");
					$slider.css({
						left: ($trad.outerWidth() / 2) - ($slider.outerWidth() / 2) + "px",
						height: $trad.outerHeight() + "px"
					});
					$container.css("height", $trad.outerHeight() + "px");
				});

				function slideReady(e) {
					e.preventDefault();
					$slider.css("animation", "unset");
					$slider.parent().css("animation", "unset");
					clicked = true;
					$(window).on("mousemove touchmove", slideMove);
				}

				function slideFinish() {
					clicked = false;
					$(window).off("mousemove touchmove", slideMove);
				}

				function slideMove(e) {
					if (!clicked) return false;

					let pos = getCursorPos(e);
					pos = Math.max(0, Math.min(pos, $trad.outerWidth()));
					slide(pos);
				}

				function getCursorPos(e) {
					e = (e.originalEvent.changedTouches) ? e.originalEvent.changedTouches[0] : e;
					const rect = $highPerfBlock[0].getBoundingClientRect();
					let position = e.pageX - rect.left;
					position -= window.pageXOffset;
					return position;
				}

				function slide(x) {
					$highPerfBlock.css("width", x + "px");
					$slider.css("left", x - ($slider.outerWidth() / 2) + "px");
				}
			}

			compareImages();
		});
	});
})();

//animation for installation options cards, which are without tabs
(function () {
	$(document).ready(function () {

		if (!$('.deployment-div').length) return;

		animateBlocks();
		function animateBlocks() {
			$('.deployment-div .deployment-section.animate-from-start.active .installation-card-container').each((index, el) => {
				if (!$(el).hasClass('installation-card-animation')) {
					setTimeout(() => {
						$(el).addClass('installation-card-animation');
					}, index * 120);
				}
			})
		}
	});
})();

//script for tabs (on-premises, live demo, cloud) in installation option
(function () {
	$(document).ready(function () {

		if (!$('.install-navigation').length) return;

		window.addEventListener('popstate', onPopStateCeInstallOptions);
		onPopStateCeInstallOptions();

		$('.install-navigation .menu-item').click(function () {
			const activeId = $(this).attr('data-tab');
			activateInstallSection(activeId);
		});

		function activateInstallSection(id) {
			var param =  $('.install-navigation').attr('data-target-id');
			var params = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
			params[param] = id;
			var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + Qs.stringify(params);
			if (window.location.hash) {
				newurl += window.location.hash;
			}
			window.history.pushState({ path: newurl }, '', newurl);
			selectTargetCeInstallOption(id);
		}

		function onPopStateCeInstallOptions() {
			var params = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
			var targetId = params[$('.install-navigation').attr('data-target-id')];
			if (!targetId) {
				targetId = 'onPremise';
			}
			selectTargetCeInstallOption(targetId);
		}

		function selectTargetCeInstallOption(targetId) {
			$("li.menu-item").removeClass("active");
			$("li.menu-item#menu-item-"+targetId).addClass("active");
			$('.deployment-div .deployment-section').removeClass("active");
			$('.deployment-div .deployment-section#'+targetId).addClass("active");

			animateBlocks();
		}

		function animateBlocks() {
			$('.deployment-div .deployment-section.active .installation-card-container').each((index, el) => {
				if (!$(el).hasClass('installation-card-animation')) {
					setTimeout(() => {
						$(el).addClass('installation-card-animation');
					}, index * 120);
				}
			})
		}
	});
})();

