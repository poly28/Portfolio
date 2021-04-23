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

// worksのmodal-window切り替え用
const $modal = document.getElementById('modal-window');
const $mask = document.getElementById('modal-overlay');
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
// ハンバーガーメニューのclose
$about.addEventListener('click', () => {
	HamburgerClose();
});
// ハンバーガーメニューのclose
$works.addEventListener('click', () => {
	HamburgerClose();
});
// ハンバーガーメニューのclose
$contact.addEventListener('click', () => {
	HamburgerClose();
});

/*================================
    ▽ worksの処理
================================*/
// モーダルウィンドウの表示
$work1.addEventListener('click', () => {
	$mask.classList.toggle('hide');
	$modal.classList.toggle('hide');
	// $mask.classList.add('show');
	// isMask = true;
	// if (isMask === true) {
	// 	$mask.addEventListener('click', () => {
	// 		$mask.classList.remove('show');
	// 		$mask.classList.add('hide');
	// 	});
	// }
});

// モーダルウィンドウの表示
$work2.addEventListener('click', () => {
	$mask.classList.toggle('hide');
	$modal.classList.toggle('hide');

	// $mask.classList.add('show');
	// isMask = true;
	// if (isMask === true) {
	// 	$mask.addEventListener('click', () => {
	// 		$mask.classList.remove('show');
	// 		$mask.classList.add('hide');
	// 	});
	// }
});

// モーダルウィンドウを閉じる
$mask.addEventListener('click', () => {
	$mask.classList.toggle('hide');
	$modal.classList.toggle('hide');
});
