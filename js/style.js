var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0px";
	} else {
		document.getElementById("navbar").style.top = "-20px";
	}
	prevScrollpos = currentScrollPos;
}
$(document).ready(function() {
	new WOW().init();
});

$('.carousel').carousel({
	interval: 3500
}); 

$(document).ready(function() {
	var itemsMainDiv = ('.MultiCarousel');
	var itemsDiv = ('.MultiCarousel-inner');
	var itemWidth = "";
	$('.leftLst, .rightLst').click(function() {
		var condition = $(this).hasClass("leftLst");
		if (condition) click(0, this);
		elseclick(1, this)
	});
	
	ResCarouselSize();
	
	$(window).resize(function() {
		ResCarouselSize();
	});

	
	function ResCarouselSize() {
		var incno = 0;
		var dataItems = ("data-items");
		var itemClass = ('.item');
		var id = 0;
		var btnParentSb = '';
		var itemsSplit = '';
		var sampwidth = $(itemsMainDiv).width();
		
		var bodyWidth = $('body').width();
		
		$(itemsDiv).each(function() {
			id = id + 1;
			var itemNumbers = $(this).find(itemClass).length;
			btnParentSb = $(this).parent().attr(dataItems);
			itemsSplit = btnParentSb.split(',');
			$(this).parent().attr("id", "MultiCarousel" + id);
			if (bodyWidth >= 1200) {
				incno = itemsSplit[3];
				itemWidth = sampwidth / incno;
			} else if (bodyWidth >= 992) {
				incno = itemsSplit[2];
				itemWidth = sampwidth / incno;
			} else if (bodyWidth >= 768) {
				incno = itemsSplit[1];
				itemWidth = sampwidth / incno;
			} else {
				incno = itemsSplit[0];
				itemWidth = sampwidth / incno;
			}
			$(this).css({
				'transform': 'translateX(0px)',
				'width': itemWidth * itemNumbers
			});
			
			$(this).find(itemClass).each(function() {
				$(this).outerWidth(itemWidth);
			});
			
			$(".leftLst").addClass("over");
			$(".rightLst").removeClass("over");
		});
	}
	function ResCarousel(e, el, s) {
		var leftBtn = ('.leftLst');
		var rightBtn = ('.rightLst');
		var translateXval = '';
		var divStyle = $(el + ' ' + itemsDiv).css('transform');
		var values = divStyle.match(/-?[\d\.]+/g);
		var xds = Math.abs(values[4]);
		if (e == 0) {
			translateXval = parseInt(xds) - parseInt(itemWidth * s);
			$(el + ' ' + rightBtn).removeClass("over");
			if (translateXval <= itemWidth / 2) {
				translateXval = 0;
				$(el + ' ' + leftBtn).addClass("over");
			}
		} else if (e == 1) {
			var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
			
			translateXval = parseInt(xds) + parseInt(itemWidth * s);
			$(el + ' ' + leftBtn).removeClass("over");
			if (translateXval >= itemsCondition - itemWidth / 2) {
				translateXval = itemsCondition;
				$(el + ' ' + rightBtn).addClass("over");
			}
		}
		$(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
	}
	function click(ell, ee) {
		var Parent = "#" + $(ee).parent().attr("id");
		var slide = $(Parent).attr("data-slide");
		ResCarousel(ell, Parent, slide);
	}
});

$('#carouselExample').on('slide.bs.carousel', function(e) {
	var $e = $(e.relatedTarget);
	var idx = $e.index();
	
	var itemsPerSlide = 3;
	var totalItems = $('.carousel-item').length;
	if (idx >= totalItems - (itemsPerSlide - 1)) {
		var it = itemsPerSlide - (totalItems - idx);
		for (var i = 0; i < it; i++) {
			if (e.direction == "left") {
				$('.carousel-item').eq(i).appendTo('.carousel-inner');
			} else {
				$('.carousel-item').eq(0).appendTo('.carousel-inner');
			}
		}
	}
});

$(document).ready(function() {
	$('a.thumb').click(function(event) {
		event.preventDefault();
		
		var content = $('.modal-body');
		content.empty();
		
		var title = $(this).attr("title");
		$('.modal-title').html(title);
		content.html($(this).html());
		$(".modal-profile").modal({
			show: true
		});
	});
});

$('#carousel-example').on('slide.bs.carousel', function(e) {
	var $e = $(e.relatedTarget);
	var idx = $e.index();
	
	var itemsPerSlide = 5;
	var totalItems = $('.carousel-item').length;
	if (idx >= totalItems - (itemsPerSlide - 1)) {
		var it = itemsPerSlide - (totalItems - idx);
		for (var i = 0; i < it; i++) {
			if (e.direction == "left") {
				$('.carousel-item').eq(i).appendTo('.carousel-inner');
			} else {
				$('.carousel-item').eq(0).appendTo('.carousel-inner');
			}
		}
	}
});

$(document).ready(function() {
	$('#Carousel').carousel({
		interval: 5000
	})
});
