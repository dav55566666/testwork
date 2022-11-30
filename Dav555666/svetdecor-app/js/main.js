var arrListSearchTown = [
	'Казань, Татарстан',
	'Калачь, Воронежская область',
	'Калачь-на-Дону, Волгоградская область',
	'Калининград, Калининградская область',
	'Калуга, Калужская область',
	'Калачь-на-Дону, Волгоградская область',
	'Калуга, Калужская область',
	'Калачь, Воронежская область',
	'Казань, Татарстан',
	'Калачь, Воронежская область',
	'Калачь-на-Дону, Волгоградская область',
	'Калининград, Калининградская область',
	'Калуга, Калужская область',
	'Калачь-на-Дону, Волгоградская область',
	'Калуга, Калужская область',
	'Калачь, Воронежская область',
	'Казань, Татарстан',
	'Калачь, Воронежская область',
	'Калачь-на-Дону, Волгоградская область',
	'Калининград, Калининградская область',
	'Калуга, Калужская область',
	'Калачь-на-Дону, Волгоградская область',
	'Калуга, Калужская область',
	'Калачь, Воронежская область',
]

document.getElementById('search-input').onkeyup = function(){
    document.getElementById('result-box').innerHTML = '';
    var l = this.value.length;
    if(l>0){
    	document.querySelector('.popup_select-town .result').classList.add('result_active')
        for(var i=0;i<arrListSearchTown.length;i++){
            var valuesResults = arrListSearchTown[i].split('').slice(0,l).join('');
            if(valuesResults==this.value){
                document.getElementById('result-box').innerHTML+="<li><a href='#'><span>"+this.value+"</span>"+arrListSearchTown[i].slice(l)+'</a></li>';
            }
        }
    }else{
    	document.querySelector('.popup_select-town .result').classList.remove('result_active')
    }
};

var arrListSearchTown = [
	'Казань, Татарстан',
	'Калачь, Воронежская область',
	'Калачь-на-Дону, Волгоградская область',
	'Калининград, Калининградская область',
	'Калуга, Калужская область',
	'Калачь-на-Дону, Волгоградская область',
	'Калуга, Калужская область',
	'Калачь, Воронежская область',
	'Казань, Татарстан',
	'Калачь, Воронежская область',
	'Калачь-на-Дону, Волгоградская область',
	'Калининград, Калининградская область',
	'Калуга, Калужская область',
	'Калачь-на-Дону, Волгоградская область',
	'Калуга, Калужская область',
	'Калачь, Воронежская область',
	'Казань, Татарстан',
	'Калачь, Воронежская область',
	'Калачь-на-Дону, Волгоградская область',
	'Калининград, Калининградская область',
	'Калуга, Калужская область',
	'Калачь-на-Дону, Волгоградская область',
	'Калуга, Калужская область',
	'Калачь, Воронежская область',
]

document.getElementById('search-input').onkeyup = function(){
    document.getElementById('result-box').innerHTML = '';
    var l = this.value.length;
    if(l>0){
    	document.querySelector('.popup_select-town .result').classList.add('result_active')
        for(var i=0;i<arrListSearchTown.length;i++){
            var valuesResults = arrListSearchTown[i].split('').slice(0,l).join('');
            if(valuesResults==this.value){
                document.getElementById('result-box').innerHTML+="<li><a href='#'><span>"+this.value+"</span>"+arrListSearchTown[i].slice(l)+'</a></li>';
            }
        }
    }else{
    	document.querySelector('.popup_select-town .result').classList.remove('result_active')
    }
};


document.querySelectorAll('.header__search input').forEach((input) => {
	input.onkeyup = function(){
		this.closest('.header__search').querySelector('.result').innerHTML = '';

		var l = this.value.length;
	    if(l>0){
	    	this.closest('.header__search').querySelector('.result').classList.add('result_active')
	        for(var i=0;i<arrListSearchTown.length;i++){
	            var valuesResults = arrListSearchTown[i].split('').slice(0,l).join('');
	            if(valuesResults==this.value){
	                this.closest('.header__search').querySelector('.result').innerHTML+="<li><a href='#'><span>"+this.value+"</span>"+arrListSearchTown[i].slice(l)+'</a></li>';
	            }
	        }
	    }else{
	    	this.closest('.header__search').querySelector('.result').classList.remove('result_active')
	    }
	};
})





// Wow JS

if(document.querySelector('.wow'))
	new WOW().init();

// Wow JS



$(document).ready(function () {


	$('.cookies button').click(function () {
		$(this).parent().hide()
	})


	$(document).mousedown(function () {
		if( $('.tracker') ){

		}
	})



	if( $('.header__menu li').length >= 6 ){
		$('.header__menu-button').addClass('header__menu-button_active')
	}


	$('.header__popup .popup__item .item__delete').click(function () {
		$(this).closest('.popup__item').hide(300)
	})



	$('.review__item .like').click(function () {
		$(this).closest('.review__item').find('.dislike').removeClass('like_active')
		$(this).toggleClass('like_active')
	})
	$('.review__item .dislike').click(function () {
		$(this).closest('.review__item').find('.like').removeClass('like_active')
		$(this).toggleClass('like_active')
	})



	jQuery('.lightzoom').lightzoom({
		speed: 400,
		viewTitle: true,
		isEscClosing: true,
		isWindowClickClosing: true,
	});











	$('.header-catalog__content, .header-menu__content').css('max-height', $('.header-catalog__inner .inner__list .list__ul').height()+10+'px')
	$('.header-catalog__inner .inner__list .list__ul').css('height', 'calc(100vh - 76px - 65px)')

	












	let arrFilename = [];
	$('.page-recall__form #in-file1').change(function () {
		var filename = $(this).val().replace(/C:\\fakepath\\/i, '')
		arrFilename.push(filename)

		$('.attachedFile').html(arrFilename.join(', '))
	})







	// FAST CODE

	$('.page-catalog-inner__fast .fast__top').click(function () {
		$(this).closest('.page-catalog-inner__fast').find('.fast__content').slideToggle(200)
		$(this).closest('.page-catalog-inner__fast').toggleClass('page-catalog-inner__fast_active')
	})
	$('.page-catalog-inner__tags .tags__close').click(function () {
		$(this).closest('.page-catalog-inner__tags').toggleClass('page-catalog-inner__tags_active')
	})

	// FAST CODE











	setTimeout(function () {
		$('.switch__item').each(function () {
			// console.log($(this))
			$(this).addClass('switch__item_hide')
		})
	}, 1000)




	// COMPARE



	$('.table__info').scroll(function () {
		$('.table__top').scrollLeft($(this).scrollLeft())
	})
	// $('.table__top').scroll(function () {
	// 	$('.table__info').scrollLeft($(this).scrollLeft())
	// })



	
	let heightTop = $('.table__top').height()

	setTimeout(function () {
		
		if( $('.page-compare__table').hasClass('page-compare__table_new') ){

			$(document).scroll(function () {
				

				if( $(this).scrollTop() > $('.table__info').offset().top - (heightTop - 50) - $('.header__center').height() && $(this).scrollTop() < ($('.page-compare__inner').offset().top + $('.page-compare__inner').height() - heightTop) ){
					$('.page-compare').addClass('page-compare_sticky')
					$('.page-compare__table').css('padding-top', heightTop+'px')
				}else{
					$('.page-compare').removeClass('page-compare_sticky')
					$('.page-compare__table').css('padding-top', '0px')
				}

			})

		}

	}, 500)


	// COMPARE









	

	$('.info__click button').click(function () {
		$(this).closest('.block-3__lft, .mini-bottom__bottom').find('.info__click').hide()
		$(this).closest('.block-3__lft, .mini-bottom__bottom').find('.info__thanks').addClass('info__thanks_active')
	})
	$('.mini-bottom__block-mob button').click(function () {
		$(this).closest('.fast__mini-bottom').find('.info__click').hide()
		$(this).closest('.fast__mini-bottom').find('.info__thanks').addClass('info__thanks_active')
	})
	$('.count__basket, .basket-mob').click(function () {
		$(this).closest('.card__fast').find('.page-single__product').hide()
		$(this).closest('.card__fast').find('.fast__added').show()
		$('body').css('overflow', 'hidden')

		$(this).closest('.card').removeClass('fast-open')
	})


	$('.button__item_fast').click(function (e) {
		e.preventDefault()
		$('body').css('overflow', 'hidden')
		$('.page-index__products .switch__item').css('overflow', 'visible')



		$(this).closest('.card').addClass('fast-open')



		$(this).closest('.card').addClass('card_fast')
		$(this).closest('.slick-list').addClass('slick-fix')
		$(this).closest('.slick-track').addClass('slick-fix')
		$(this).closest('.card').find('.card__fast').addClass('card__fast_active')
		$(this).closest('.card').find('.page-single__product').show()
		$(this).closest('.card').find('.fast__added').hide()
	})
	$('.card .fast__bgd, .fast__close').click(function (e) {
		e.preventDefault()
		$('.page-index__products .switch__item').css('overflow', 'auto')
		$('body').css('overflow', 'visible')



		$(this).closest('.card').removeClass('fast-open')



		$(this).closest('.card').removeClass('card_fast')
		$(this).closest('.slick-list').removeClass('slick-fix')
		$(this).closest('.slick-track').removeClass('slick-fix')
		$(this).closest('.card').find('.card__fast').removeClass('card__fast_active')
	})







	// HEADER


	$('.header__popup .select-all').click(function () {
		$(this).closest('.header__popup').find('input[type="checkbox"]').prop("checked", true)
	})
	$('.header__popup .clear-all').click(function () {
		$(this).closest('.header__popup').find('input[type="checkbox"]').prop("checked", false)
	})



	$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".buttons__item_active"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.buttons__item').removeClass('buttons__item_active')
		$('.header__popup').slideUp(300)
		$('.page-catalog-inner .filter-fixed_fix').removeClass('filter-top-hide')
    }
  });

	// HEADER









	// POPUPS

	let numCount1 = 59
	let interVal = setInterval(function () {
		numCount1--;
		$('.counting').text(numCount1+' сек')
		if( numCount1 < 1 ){
			// $(this).closest('form').find('.btn-green').removeClass('disabled')
			clearInterval(interVal);
		}
	}, 1000)









	$('.input_pass svg').click(function () {

		if( $(this).closest('.input').find('input').attr('type') == 'password' ){
			$(this).closest('.input').find('input').attr('type', 'text')
			$(this).closest('.input_pass').addClass('input_pass_active')
		}
		else{
			$(this).closest('.input').find('input').attr('type', 'password')
			$(this).closest('.input_pass').removeClass('input_pass_active')
		}

	})








	$('.popup form button[type="submit"]').click(function () {

		let star1 = $(this).closest('form').find('input[id="rate-1"]').is(':checked')
		let star2 = $(this).closest('form').find('input[id="rate-2"]').is(':checked')
		let star3 = $(this).closest('form').find('input[id="rate-3"]').is(':checked')
		let star4 = $(this).closest('form').find('input[id="rate-4"]').is(':checked')
		let star5 = $(this).closest('form').find('input[id="rate-5"]').is(':checked')




		if( star1 == false && star2 == false && star3 == false && star4 == false && star5 == false ){
			
		}else{
			$(this).closest('form').find('.rating-label .p-error').hide()
		}
		


		let inp1 = $(this).closest('form').find('input[type="password"]').eq(0).val()
		let inp2 = $(this).closest('form').find('input[type="password"]').eq(1).val()

		$(this).closest('form').find('input:required').removeClass('input-fail')
		$(this).closest('form').find('.p-error').removeClass('p-error_active')

		$(this).closest('form').find('input:required').each(function () {
			
			if( $(this).val() == "" ){
				$(this).parent().parent().find('.p-error').addClass('p-error_active')
				$(this).addClass('input-fail')
			}else{
				$(this).parent().parent().find('.p-error').removeClass('p-error_active')
				$(this).removeClass('input-fail')
			}

		})

		$(this).parent().parent().find('.p-error-pass').removeClass('p-error-pass_active')
		$(this).parent().parent().find('input[type="password"]').removeClass('p-error-pass-inp')

		if( inp1 != inp2 ){
			$(this).parent().parent().find('.p-error-pass').addClass('p-error-pass_active')
			$(this).parent().parent().find('input[type="password"]').addClass('p-error-pass-inp')
		}



	})






	$('button').click(function () {
		
		if( $(this).data('popup') ){
			let NameClass = $(this).data('popup')

			$('.popup').removeClass('popup_active')
			$('.popup_'+NameClass).addClass('popup_active')

			$('body').css('overflow', 'hidden')
		}

	})

	$('.popup__bgd, .popup__close').click(function () {
		$('.popup').removeClass('popup_active')
		$('body').css('overflow', 'visible')
	})


	$(document).keyup(function (e) {
	    if(e.key === "Escape"){
	    	$('.popup').removeClass('popup_active')
	    	$('body').css('overflow', 'visible')
	    }
	})

	// POPUPS













	// GUARANTEES SWITCHER

	$('.page-guarantees__switcher li').click(function () {
		$('.page-guarantees__switcher li').removeClass('li_active')
		$(this).addClass('li_active')

		$('.page-guarantees__block').hide()
		$('.page-guarantees__block').eq($(this).index()).show()
	})

	// GUARANTEES SWITCHER




	// AKKORDION

	$('.akkordion-head').click(function () {
		$(this).closest('.akkordion').find('.akkordion-body').slideToggle(300)
		$(this).closest('.akkordion').toggleClass('akkordion_open')
	})

	$('.akkordion').each(function () {
		$(this).find('.akkordion-body').hide()
		if( $(this).hasClass('akkordion_open') ){
			$(this).find('.akkordion-body').show()
		}

	})

	// AKKORDION





	// PROFILE

	$('.input__eye').click(function () {
		$(this).toggleClass('inp-txt')

		if( $(this).hasClass('inp-txt') )
			$(this).closest('.input').find('input').attr('type', 'text')
		else
			$(this).closest('.input').find('input').attr('type', 'password')
	})

	// PROFILE









	// BASKET

	$('.page-basket__item .item__add').click(function (e) {
		e.preventDefault();

		$(this).closest('.page-basket__item').toggleClass('page-basket__item_active')
	})

	$('.page-basket__slider .slider__close').click(function (e) {
		$(this).closest('.page-basket__item').removeClass('page-basket__item_active')
	})



	$('.point__ckeckboxes input').change(function () {
		let numBlock = $(this).data('num')

		$('.page-basket__point_else').each(function () {

			if( $(this).data('choice') == numBlock ){
				$('.page-basket__point_else').addClass('page-basket__point_hide')
				$('.page-basket__point_else').removeClass('page-basket__point_show')
				$(this).addClass('page-basket__point_show')
				$(this).removeClass('page-basket__point_hide')
			}
			
		})

	})

	// BASKET








$(document).scroll(function (e) {
	

	$('.page-single__tabs a').each(function () {
		
		var idHref = $(this).attr('href');

		if( ($(window).scrollTop() + 230) > $(idHref).offset().top ){
			$('.page-single__tabs a').removeClass('tabs__item_active')
			$(this).addClass('tabs__item_active')
		}

	})
})


$('.page-single__tabs a').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
    	    scrollTop: $(dest).offset().top - 200 // прокручиваем страницу к требуемому элементу
        }, 500 );
    }
    return false;
});

$('.info__rating').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
    	    scrollTop: $(dest).offset().top - 200 // прокручиваем страницу к требуемому элементу
        }, 500 );
    }
    return false;
});

$('.rht__item li a').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
    	    scrollTop: $(dest).offset().top - 200 // прокручиваем страницу к требуемому элементу
        }, 500 );
    }
    return false;
});


	





	// SINGLE


	$('.count__input').each(function () {

		$(this).find('.input__minus').click(function () {
			var valueToInput = $(this).closest('.count__input').find('.input__field input').val();

			let valInp = $(this).closest('.count__input').find('.input__field input').val()

			if( valueToInput > 1 )
				valueToInput--;

			$(this).closest('.count__input').find('.input__field input').val(valueToInput)

		})

		$(this).find('.input__plus').click(function () {
			var valueToInput = $(this).closest('.count__input').find('.input__field input').val();

			let valInp = $(this).closest('.count__input').find('.input__field input').val()

			valueToInput++;

			$(this).closest('.count__input').find('.input__field input').val(valueToInput)

		})



	})






	$('.photo__nav').slick({
		asNavFor: '.photo__for',
		slidesToShow: 5,
		swipeToSlide: true,
		vertical: true,
		focusOnSelect: true,
		nextArrow: '.arr__rht',
		prevArrow: '.arr__lft',
		loop: true,
		responsive:[
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 576,
			settings: {
				vertical: false,
				slidesToShow: 3,
			}
		}
		]
	})
	$('.photo__for').slick({
		asNavFor: '.photo__nav',
		slidesToShow: 1,
		arrows: false,
		adaptiveHeight: true,
		// swipe: false,
	})

	$('.photo__nav .nav__item').on("mouseenter", function () {
		$(this).trigger('click')
	})

	// SINGLE







	  $(".click__input").mask("+7 (999) 999 - 99 - 99");
	  $("#id-phone-point").mask("+7 (999) 999 - 99 - 99");
	  $("#pr-bl1-tel1").mask("+7 (999) 999 - 99 - 99");
	  $(".popup-phone-input").mask("+7 (999) 999 - 99 - 99");

		


    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $('.range-ot').val(ui.values[ 0 ]+' ₽')
        $('.range-do').val(ui.values[ 1 ]+' ₽')
      }
    });
    $('.range-ot').val($( "#slider-range" ).slider( "values", 0 )+' ₽')
    $('.range-do').val($( "#slider-range" ).slider( "values", 1 )+' ₽')




	// CATALOG TAGS

	$('.button__tabs .tab__item').click(function () {
		
		$('.button__tabs .tab__item').removeClass('tab__item_active')
		$(this).addClass('tab__item_active')

	})

	// CATALOG TAGS









	// SELECT


	$('.button__tabs .tab__item').click(function () {
		let dataThis = $(this).data('tab')

		$('.button__tabs .tab__item').removeClass('tab__item_active')
		$(this).addClass('tab__item_active')

		$('.cards__block').removeClass('cards__block_line')
		$('.cards__block').addClass('cards__block_'+dataThis)
	})





	$('.select .select__head').click(function () {
		$(this).closest('.select').toggleClass('select_active')
		$(this).closest('.select').find('.select__body').slideToggle(300)
	})

	$('.select__item').click(function () {

		$(this).closest('.select').find('.select__item').removeClass('select__item_active')
		$(this).addClass('select__item_active')

		$(this).closest('.select').find('.select__head').html($(this).html())

		$(this).closest('.select').removeClass('select_active')
		$(this).closest('.select').find('.select__body').slideUp(300)

		let chData = $(this).data('change')

		$(this).closest('.select').parent().find('.inpHiddenVal').hide()
		$(this).closest('.select').parent().find('.inpHiddenVal-'+chData).show()
	})

	  $(document).mouseup(function (e){ // событие клика по веб-документу
	    var div = $(".select_active"); // тут указываем ID элемента
	    if (!div.is(e.target) // если клик был не по нашему блоку
	        && div.has(e.target).length === 0) { // и не по его дочерним элементам
	        $('.select').removeClass('select_active')
			$('.select').find('.select__body').slideUp(300)
	    }
	  });

	// SELECT







	// CATALOG2


	$('.button__switcher-type input').change(function () {

		if( $(this).is(':checked') ){
			$('.cards__block').addClass('cards__block_collections')
		}else{
			$('.cards__block').removeClass('cards__block_collections')
		}

	})





	$('.card').each(function () {
		$(this).find('.card__nav').slick({
			slidesToShow: 3,
			asNavFor: $(this).closest('.card').find('.card__photo'),
			focusOnSelect: true,
			speed: 300,
			infinite: true,
			arrows: false
		})
		$(this).find('.card-line__bottom__nav').slick({
			slidesToShow: 3,
			asNavFor: $(this).closest('.card').find('.card__photo'),
			focusOnSelect: true,
			speed: 300,
			arrows: false
		})
		$(this).find('.card__photo').slick({
			slidesToShow: 1,
			asNavFor: $(this).closest('.card').find('.card__nav'),
			fade: true,
			speed: 200,
			arrows: false
		})


	})





	// $('.page-catalog-inner__slider-content .slider__content, .page-single__slider .slider__content').slick({
	$('.block-slider-three .slider__content').slick({
		slidesToShow: 3,
		infinite: false,
		responsive:[
			{
				breakpoint: 1360,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 700,
				settings: 'unslick'
			}
		]
	})




	$('.filter__block.filter__block_active').find('.filter__content').show()

	$('.filter__block .filter__top').click(function () {
		
		$(this).closest('.filter__block').toggleClass('filter__block_active')
		$(this).closest('.filter__block').find('.filter__content').slideToggle(300)

	})


	$('.filter__inner-block.filter__inner-block_active').find('.filter__inner-block__content').show()

	$('.filter__inner-block__top').click(function () {
		$(this).closest('.filter__inner-block').toggleClass('filter__inner-block_active')
		$(this).closest('.filter__inner-block').find('.filter__inner-block__content').slideToggle(300)
	})




	$('.page-catalog-inner__slider-top, .page-single__slider-top').slick({
		slidesToShow: 4,
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 700,
				settings: 'unslick'
			}
		]
	})

	// CATALOG2







	// CATALOG1

	$('.page-catalog__item').each(function (w, q) {


		let itemBlock = $(this)
		
		if( $(this).find('li').length > 4 ){

			let countSum = 0;

			$(this).find('li').each(function (count) {
				let all = count - 4

				countSum = all

				if( $(this).index() >= 4 ){
					$(this).hide()
				}
			})

			$(this).find('.item__more').text('+'+(countSum + 1)+' категории')


			///////////////////////////////////////////////////


			$(this).find('.item__more').click(function (e) {
				e.preventDefault();

				if( $(this).hasClass('moreActive') ){

					$(this).parent().find('li').each(function (count) {
						let all = count - 4

						countSum = all

						if( $(this).index() >= 4 ){
							$(this).hide()
						}
					})

					$(this).text('+'+(countSum + 1)+' категории')
					$(this).removeClass('moreActive')

				}else{
					$(this).parent().find('.item__list li').show()
					$(this).text('-'+(countSum + 1)+' категории')
					$(this).addClass('moreActive')
				}


			})



		}else{
			$(this).find('.item__more').hide()
		}




	})

	// CATALOG1









	let countItemsNew = 0

	$('.switch__buttons li').click(function () {

		countItemsNew = 4

		let liIndex = $(this).index()
		
		$('.switch__block .switch__item').removeClass('switch__item_active')
		$('.switch__block .switch__item').eq(liIndex).addClass('switch__item_active')

		$('.switch__buttons li').removeClass('li_active')
		$(this).addClass('li_active')

	})

	$('.block-more-view').each(function () {

		let countItems = $(this).data('more-view')

		countItemsNew = countItems

		$(this).find('.item-more-view').each(function () {
			
			if( countItems <= $(this).index() ){
				let tthis = $(this)
				setTimeout(function () {
					tthis.hide()	
				}, 500)
			}else{
				$(this).show()
			}

		})



		$(this).parent().find('.show-more').click(function () {

			countItemsNew += countItems

			$(this).parent().find('.item-more-view').each(function (e, w) {

				
				if( countItemsNew <= $(this).index() ){
					$(this).hide()
				}
				else{
					$(this).show()
				}


				if( countItemsNew >= e ){
					$(this).closest('.block-more-view').parent().find('.show-more').hide()
				}else{
					$(this).closest('.block-more-view').parent().find('.show-more').show()
				}

			})

		})
	})






	$('.fix-catalog__lft li').mousemove(function (e) {
		e.preventDefault();


		let aIndex = $(this).index()

		$('.fix-catalog__lft li').removeClass('li_active')
		$(this).addClass('li_active')

		$('.fix-catalog__rht .catalog__block').removeClass('catalog__block_active')
		$('.fix-catalog__rht .catalog__block').eq(aIndex).addClass('catalog__block_active')
	})





	$('.header__catalog, .header__catalog-button_mob').click(function () {
		$(this).toggleClass('header__catalog_active')
	})

	$(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $('.header__catalog, .header__catalog-button_mob, .header__fix-catalog')
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			$('.header__catalog, .header__catalog-button_mob').removeClass('header__catalog_active')
			$('.header__fix-catalog').slideUp(300);
		}
	});




	$('.header__bottom li').mousemove(function () {

		let crlLft = $('.header__slider ul').scrollLeft()
		$('.header__slider ul').css('margin-left', '-'+crlLft+'px')

		$(this).addClass('li_active')

		if( $(this).hasClass('li_active') ){
			$('.header__bottom').addClass('header__bottom_active')
		}else{
			$('.header__bottom').removeClass('header__bottom_active')
		}

		$(this).closest('li').find('.categories__fixed').slideDown(150)
	})

	$('.header__bottom li').mouseleave( function(e){ // событие клика по веб-документу
		var div = $( ".header__bottom li.li_active" ); // тут указываем ID элемента
			$('.header__bottom li').removeClass('li_active')

			$('.header__bottom li').closest('li').find('.categories__fixed').slideUp(150)

			$('.header__bottom').css('overflow', 'hidden')
			$('.body-inner').css('overflow', 'visible')

			$('.header__bottom').removeClass('header__bottom_active')

			$('.header__slider ul').css('margin-left', '0px')
	});
	$(document).click( function(e){ // событие клика по веб-документу
		var div = $( ".header__bottom li.li_active" ); // тут указываем ID элемента
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			$('.header__bottom li').removeClass('li_active')

			$('.header__bottom li').closest('li').find('.categories__fixed').slideUp(150)

			$('.header__bottom').css('overflow', 'hidden')
			$('.body-inner').css('overflow', 'visible')

			$('.header__bottom').removeClass('header__bottom_active')

			$('.header__slider ul').css('margin-left', '0px')
		}
	});





	$('.arr__lft').click(function () {
		$(this).parent().parent().find('.slick-prev').click()
		$(this).closest('.block-slider-three').find('.slick-prev').click()
	})
	$('.arr__rht').click(function () {
		$(this).parent().parent().find('.slick-next').click()
		$(this).closest('.block-slider-three').find('.slick-next').click()
	})

	$('.header__slider ul').slick({
		slidesToShow: 9,
		variableWidth: true,
		swipeToSlide: true,
		infinite: false,
		responsive:[
			{
				breakpoint: 576,
				settings: 'unslick'
			}
		]
	})
	.on('afterChange', function () {
		$('.header__slider .slick-next').each(function () {
			if( $(this).hasClass('slick-disabled') ){
				$('.header__slider .arr__rht').addClass('arr__rht_hide')
				$('.header__slider .arr__lft').removeClass('arr__lft_hide')
			}else{
				$('.header__slider .arr__rht').removeClass('arr__rht_hide')
			}
		})
		$('.header__slider .slick-prev').each(function () {
			if( $(this).hasClass('slick-disabled') ){
				$('.header__slider .arr__lft').addClass('arr__lft_hide')
				$('.header__slider .arr__rht').removeClass('arr__rht_hide')
			}else{
				$('.header__slider .arr__lft').removeClass('arr__lft_hide')
			}
		})
	})

	$('.header__slider .slick-next').each(function () {
		if( $(this).hasClass('slick-disabled') ){
			$('.header__slider .arr__rht').addClass('arr__rht_hide')
			$('.header__slider .arr__lft').removeClass('arr__lft_hide')
		}else{
			$('.header__slider .arr__rht').removeClass('arr__rht_hide')
		}
	})
	$('.header__slider .slick-prev').each(function () {
		if( $(this).hasClass('slick-disabled') ){
			$('.header__slider .arr__lft').addClass('arr__lft_hide')
			$('.header__slider .arr__rht').removeClass('arr__rht_hide')
		}else{
			$('.header__slider .arr__lft').removeClass('arr__lft_hide')
		}
	})

	$('.header__slider .slick-next').click(function () {
		if( $(this).hasClass('slick-disabled') ){
			$('.header__slider .arr__rht').addClass('arr__rht_hide')
		}else{
			$('.header__slider .arr__rht').removeClass('arr__rht_hide')
			$('.header__slider .arr__lft').removeClass('arr__lft_hide')
		}
	})
	$('.header__slider .slick-prev').click(function () {
		if( $(this).hasClass('slick-disabled') ){
			$('.header__slider .arr__lft').addClass('arr__lft_hide')
		}else{
			$('.header__slider .arr__rht').removeClass('arr__rht_hide')
			$('.header__slider .arr__lft').removeClass('arr__lft_hide')
		}
	})



	$('.brands__slider .slider__block').slick({
		slidesToShow: 5,
		swipeToSlide: true,
		responsive:[

			{
				breakpoint: 992,
				settings:{
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 576,
				settings: 'unslick'
			}

		]
	})






	$('.list__item .item__inner').click(function () {

		if( $(this).closest('.list__item').hasClass('list__item_active') ){
			$(this).closest('.list__item').removeClass('list__item_active')
		}else{
			$('.list__item_active').removeClass('list__item_active')
			$(this).closest('.list__item').addClass('list__item_active')
		}

	})
	$('.list__item_sub_back').click(function () {

		$('.list__item .item__inner').closest('.list__item').removeClass('list__item_active')

	})
	$('.list__item .item__inner_sub').click(function () {
		
		$(this).closest('.list__item_sub').toggleClass('list__item_sub_active')
		$(this).closest('.list__item_sub').find('.list__sub-menu_2').slideToggle(300)

	})








// COPY TEXT

// $('.page-requisites__item').click(function () {
// 	let textInner = $(this).find('input')

// 	textInner.select();
//   document.execCommand("copy");
//   alert("Copied the text: " + textInner.value);
// })


document.querySelectorAll('.page-requisites__item').forEach((item) => {
	item.onclick = function () {
		let textInner = this.querySelector('input');
		textInner.select();
	  document.execCommand("copy");
	  alert("Текст скопирован");
	}
})


// COPY TEXT






$('.block__top').click(function () {
	$(this).parent().find('.block__bottom').slideToggle()
})









// PAGE DELIVERY

$('.page-delivery__nav a').click(function (e) {
	e.preventDefault();
	$('.page-delivery__nav li').removeClass('li_active')
	$(this).closest('li').addClass('li_active')

	$('.page-delivery__block').hide()
	$('.page-delivery__block').eq($(this).closest('li').index()).show()
})

// PAGE DELIVERY


	$('.header__menu-button').click(function () {
		$('.header-menu_mob').addClass('header-menu_mob_active')
	})
	$('.header-menu__close, .header-menu__bgd').click(function () {
		$('.header__menu').removeClass('header__menu_active')
		$('.header-menu_mob').removeClass('header-menu_mob_active')
	})













	

	let halfWidthWindow = $(window).width() / 2

	$('.header__slider li').mousemove(function () {

		$('.header__bottom').css('overflow', 'visible')
		$('.body-inner').css('overflow', 'hidden')

		if( ($(this).offset().left + 6) > halfWidthWindow ){
			$(this).find('.categories__fixed').addClass('categories__fixed_rtl')
		}else{
			$(this).find('.categories__fixed').removeClass('categories__fixed_rtl')
		}
	})

	// MEDIA

	if( $(window).width() > 992 ){

		


		$('.navigation a').on( 'click', function(){ 
	    var el = $(this);
	    var dest = el.attr('href'); // получаем направление
	    if(dest !== undefined && dest !== '') { // проверяем существование
	        $('html').animate({ 
	    	    scrollTop: $(dest).offset().top - 100 // прокручиваем страницу к требуемому элементу
	        }, 500 );
	    }
	    return false;
	});


		$(document).scroll(function (e) {
	

			$('.navigation li').each(function () {
				
				var idHref = $(this).find('a').attr('href');

				if( ($(window).scrollTop() + 130) > $(idHref).offset().top ){
					$('.navigation li').removeClass('li_active')
					$(this).addClass('li_active')
				}

			})

		})




		$('.header__catalog, .header__catalog-button_mob').click(function () {
			$('.header__fix-catalog').slideToggle(300);
		})

		$(document).scroll(function () {
		
			if( $(this).scrollTop() > 100 ){
				$('.header').addClass('header_fixed')
				$('.header__bottom').css('margin-top', $('.header__center').outerHeight()+'px')
			}
			else{
				$('.header').removeClass('header_fixed')
				$('.header__bottom').css('margin-top', '0px')
			}

		})

	}

	$('.buttons__item .buttons__button').click(function () {
		$(this).parent().toggleClass('buttons__item_active')
		$(this).parent().find('.header__popup').slideToggle(300)

		if( $(this).parent().hasClass('buttons__item_active') )
			$('.page-catalog-inner .filter-fixed_fix').addClass('filter-top-hide')
		else
			$('.page-catalog-inner .filter-fixed_fix').removeClass('filter-top-hide')
	})

	$('.header__popup_top svg').click(function () {
		$('.buttons__item .buttons__button').parent().removeClass('buttons__item_active')
		$('.buttons__item .buttons__button').parent().find('.header__popup').slideUp(300)
		$('body').css('overflow', 'visible')
	})

	if( $(window).width() < 992 ){

		$('#sw-tov1').click(function () {
			if( $(this).is(':checked') ){
				$('.tab__item[data-tab="line"]').click()
				$('.tab__item[data-tab="blocks"]').hide()
			}else{
				$('.tab__item[data-tab="blocks"]').show()
			}
		})


		var sBrowser, sUsrAg = navigator.userAgent;

		//The order matters here, and this may report false positives for unlisted browsers.

		if (sUsrAg.indexOf("Firefox") > -1) {
		     sBrowser = "Mozilla Firefox";
		     //"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
		} else if (sUsrAg.indexOf("Opera") > -1) {
		     sBrowser = "Opera";
		} else if (sUsrAg.indexOf("Trident") > -1) {
		     sBrowser = "Microsoft Internet Explorer";
		     //"Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
		} else if (sUsrAg.indexOf("Edge") > -1) {
		     sBrowser = "Microsoft Edge";
		     //"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
		} else if (sUsrAg.indexOf("Chrome") > -1) {
		    sBrowser = "Google Chrome or Chromium";
		    //"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
		} else if (sUsrAg.indexOf("Safari") > -1) {
		    sBrowser = "Apple Safari";
		    //"Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
		} else {
		    sBrowser = "unknown";
		}

		if( sBrowser == 'Apple Safari' ){
			$('body').addClass('safari')
		}else if( sBrowser == 'Google Chrome or Chromium'){
			$('body').addClass('chrome')
		}



		$('.buttons__item .buttons__button').click(function () {

			if( $('.buttons__item').hasClass('buttons__item_active') ){
				$('body').css('overflow', 'hidden')
			}else{
				$('body').css('overflow', 'visible')
			}
		})




		$('.tab__item[data-tab="line"]').click()




		$(document).scroll(function () {
			if( $(this).scrollTop() > 1600 ){
				$('.fix-line').addClass('fix-line_active')
			}else{
				$('.fix-line').removeClass('fix-line_active')
			}
		})


		// $('.buttons__button').click(function () {
		// 	$(this).toggleClass('button-active')
		// 	if( $(this).hasClass('button-active') )
		// 		$('body').css('overflow-y', 'hidden')
		// 	else
		// 		$('body').css('overflow-y', 'visible')
		// })


		// $('.header__slider li').click(function () {
		// 	if( ($(this).offset().left + 6) > 400 ){
		// 		$(this).find('.categories__fixed').addClass('categories__fixed_rtl')
		// 	}else{
		// 		$(this).find('.categories__fixed').removeClass('categories__fixed_rtl')
		// 	}
		// })


		$('.navigation a').on( 'click', function(){ 
		    var el = $(this);
		    var dest = el.attr('href'); // получаем направление
		    if(dest !== undefined && dest !== '') { // проверяем существование
		        $('html').animate({ 
		    	    scrollTop: $(dest).offset().top - 180 // прокручиваем страницу к требуемому элементу
		        }, 500 );
		    }
		    return false;
		});



		$(document).scroll(function (e) {
	
			$('.navigation li').each(function () {
				
				var idHref = $(this).find('a').attr('href');

				if( ($(window).scrollTop() + 220) > $(idHref).offset().top ){
					$('.navigation li').removeClass('li_active')
					$(this).addClass('li_active')
				}

			})

		})











		$('.filter__block').removeClass('filter__block_active')
		$('.filter__block .filter__content').hide()

		$('.filter-fixed__button, .filter-fixed__tags .tag').click(function () {
			$('.page-catalog-inner__filter').addClass('page-catalog-inner__filter_active')
			$('body').css('overflow', 'hidden')
		})
		$('.filter-fixed__close').click(function () {
			$('.page-catalog-inner__filter').removeClass('page-catalog-inner__filter_active')
			$('body').css('overflow', 'visible')
		})

		$(document).scroll(function () {

		
			if( $(this).scrollTop() > 100 ){
				$('.header').addClass('header_fixed')
				$('.header__bottom').css('margin-top', $('.header__center').outerHeight()+$('.header__search-mob').outerHeight()+'px')
				$('.filter-fixed').addClass('filter-fixed_fix')
			}
			else{
				$('.filter-fixed').removeClass('filter-fixed_fix')
				$('.header').removeClass('header_fixed')
				$('.header__bottom').css('margin-top', '0px')
			}

		})

		$('.header__catalog, .header__catalog-button_mob').click(function () {
			$('.header-catalog_mob').addClass('header-catalog_mob_active')
			$('.header_fixed').css('z-index', '100')
		})
		$('.header-catalog__close, .header-catalog__bgd').click(function () {
			$('.header__catalog').removeClass('header__catalog_active')
			$('.header__catalog-button_mob').removeClass('header__catalog_active')
			$('.header-catalog_mob').removeClass('header-catalog_mob_active')
			$('.list__item .item__inner').closest('.list__item').removeClass('list__item_active')
			$('.header_fixed').css('z-index', '10')
		})

		$('.header-menu_mob .list__li').click(function () {
			$(this).toggleClass('list__li_active')
			$(this).find('.list__submenu').slideToggle(300)
		})

		let countItemsNew = 0


	$('.switch__buttons li').click(function () {

		countItemsNew = 3

		let liIndex = $(this).index()
		
		$('.switch__block .switch__item').removeClass('switch__item_active')
		$('.switch__block .switch__item').eq(liIndex).addClass('switch__item_active')

		$('.switch__buttons li').removeClass('li_active')
		$(this).addClass('li_active')

	})

	$('.block-more-view').each(function () {

		let countItems = 3

		countItemsNew = countItems

		$(this).find('.item-more-view').each(function () {
			
			if( countItems <= $(this).index() ){
				$(this).hide()
			}else{
				$(this).show()
			}

		})



		$(this).parent().find('.show-more').click(function () {

			countItemsNew += countItems

			$(this).parent().find('.item-more-view').each(function (e, w) {

				
				if( countItemsNew <= $(this).index() ){
					$(this).hide()
				}
				else{
					$(this).show()
				}


				if( countItemsNew >= e ){
					$(this).closest('.block-more-view').parent().find('.show-more').hide()
				}else{
					$(this).closest('.block-more-view').parent().find('.show-more').show()
				}

			})

		})
	})

	}

	if( $(window).width() < 700 ){

		$('.button__item_fast').click(function () {
			$('.slider__content').css('overflow', 'visible')
			$('.page-single__left').css('overflow', 'visible')
		})
		$('.fast__close').click(function () {
			$('.slider__content').css('overflow', 'auto')
			$('.page-single__left').css('overflow', 'hidden')
		})

	}


	if( $(window).width() < 576 ){




		$('.header__slider li').mousemove(function () {
			$(this).find('.categories__fixed').css('left', '-'+($(this).offset().left)+'px')
		})



		$('.block-more-view').each(function () {

			$(this).find('.item-more-view').show()
		
		})

		$(document).scroll(function () {
		
			if( $(this).scrollTop() > 100 ){
				$('.header').addClass('header_fixed')
				$('.header__bottom').css('margin-top', $('.header__center').outerHeight()+'px')
			}
			else{
				$('.header').removeClass('header_fixed')
				$('.header__bottom').css('margin-top', '0px')
			}

		})

		$('.page-index__banner').slick({
			centerMode: true,
			centerPadding: '12px',
			arrows: false
		})

	}

	if( document.querySelector('.photo-zoom') ){

		$('.photo__for .photo-zoom.slick-current img').imagezoomsl({ 
			 zoomrange: [1, 1],
			 zoomstart: 1.5,
			 innerzoom: true,
			 magnifierborder: "none"	
		});

		$('.page-single__photo .arr__rht, .page-single__photo .arr__lft, .page-single__photo .nav__item').click(function () {
			$('.tracker').hide()

			setTimeout(function () {
				$('.photo__for .photo-zoom.slick-current img').imagezoomsl({ 
					 zoomrange: [1, 1],
					 zoomstart: 1.5,
					 innerzoom: true,
					 magnifierborder: "none"	
				});		
			}, 500)
		})
	}




	// VALIDATE

	$('#form-to-val button[type="submit"]').click(function () {
		
	    var form = document.querySelector("#form-to-val");
	    var email = document.getElementById("email").value;
	    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
	    if(email.match(pattern))
	    {
	        $(this).closest('form').find('.label-for-email input').removeClass('input-fail')
	        $(this).closest('form').find('.label-for-email .p-error').removeClass('p-error_active')
	    }
	    else{
	    	$(this).closest('form').find('.label-for-email input').addClass('input-fail')
	        $(this).closest('form').find('.label-for-email .p-error').addClass('p-error_active')
	    }
	    if (email == "") {
	        $(this).closest('form').find('.label-for-email input').addClass('input-fail')
	        $(this).closest('form').find('.label-for-email .p-error').addClass('p-error_active')
	        // $(this).closest('form').find('.label-for-email input').removeClass('input-fail')
	        // $(this).closest('form').find('.label-for-email .p-error').removeClass('p-error_active')
	    }
	})

	// VALIDATE


	$('.page-basket__item .input__plus').click(function () {
		let num = $(this).closest('.page-basket__item').find('.price__main').data('price')
		let val = $(this).parent().find('input').val()
		let sum = val * num;
		var result = sum.toLocaleString();
		
	    $(this).closest('.page-basket__item').find('.price__main').text(result +' ₽')
	})
	$('.page-basket__item .input__minus').click(function () {
		let num = $(this).closest('.page-basket__item').find('.price__main').data('price')
		let val = $(this).parent().find('input').val()
		let sum = val * num;
		var result = sum.toLocaleString();

	    $(this).closest('.page-basket__item').find('.price__main').text(result +' ₽')
	})







})































