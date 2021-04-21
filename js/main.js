'use strict';

/*================================
    ▽ 変数・定数
================================*/
// ID:open,closeの読み込み(ハンバーガーメニュー操作)
const $open = document.getElementById('open');
const $overlay = document.querySelector('.overlay');
const $close = document.getElementById('close');

// ハンバーガーメニューの選択肢
const $about = document.getElementById('link-about');
const $works = document.getElementById('link-works');
const $contact = document.getElementById('link-contact');

// worksのマスク切り替え用
const $mask = document.querySelector('.mask');
const $work1 = document.getElementById('work1');
const $work2 = document.getElementById('work2');

// マスク切り替え用変数
let isMask = false;

/*================================
    ▽ ハンバーガーメニュー
================================*/
// ハンバーガーメニューのOpen用関数
function HamburgerOpen() {
	$overlay.classList.add('show');
	$open.classList.add('hide');
}
// ハンバーガーメニューのClose用関数
function HamburgerClose() {
	$overlay.classList.remove('show');
	$open.classList.remove('hide');
}

// ハンバーガーメニューのopen
$open.addEventListener('click', () => {
	HamburgerOpen();
});
// ハンバーガーメニューのclose
$close.addEventListener('click', () => {
	HamburgerClose();
});

$about.addEventListener('click', () => {
	HamburgerClose();
});
$works.addEventListener('click', () => {
	HamburgerClose();
});
$contact.addEventListener('click', () => {
	HamburgerClose();
});

/*================================
    ▽ worksの処理
================================*/
$work1.addEventListener('click', () => {
	$mask.classList.remove('hide');
	$mask.classList.add('show');
	isMask = true;
	if (isMask === true) {
		$mask.addEventListener('click', () => {
			$mask.classList.remove('show');
			$mask.classList.add('hide');
		});
	}
});

$work2.addEventListener('click', () => {
	$mask.classList.remove('hide');
	$mask.classList.add('show');
	isMask = true;
	if (isMask === true) {
		$mask.addEventListener('click', () => {
			$mask.classList.remove('show');
			$mask.classList.add('hide');
		});
	}
});
