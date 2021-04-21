'use strict';

// ID:open,closeの読み込み(ハンバーガーメニュー操作)
const $open = document.getElementById('open');
const $overlay = document.querySelector('.overlay');
const $close = document.getElementById('close');
const $mask = document.querySelector('.mask');
const $work1 = document.getElementById('work1');
const $work2 = document.getElementById('work2');

let isMask = false;

$open.addEventListener('click', () => {
	$overlay.classList.add('show');
	$open.classList.add('hide');
});
$close.addEventListener('click', () => {
	$overlay.classList.remove('show');
	$open.classList.remove('hide');
});

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
