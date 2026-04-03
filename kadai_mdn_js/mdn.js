// 2024年10月12日をDateクラスで作成（※月は0始まりなので10月=9）
const targetDate = new Date();

// Dateクラスのメソッドで年・月・日を取得
const year = targetDate.getFullYear();
const month = targetDate.getMonth() + 1; // getMonth() は 0-11
const day = targetDate.getDate();

// 文字列として出力
console.log(`${year}年${month}月${day}日`);
