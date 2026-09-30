// 引っ越し・賃貸サイトのツール一覧（このサイト専用。ほかのサイトとは別管理）
const TOOLS = [
  { path: "/hikkoshi/", name: "賃貸の初期費用 計算", desc: "敷金・礼金・仲介手数料・前家賃・日割り・保証会社まで、契約時の総額を計算" },
  { path: "/hikkoshi/yachin/", name: "家賃の目安 計算", desc: "年収・手取りから、無理なく払える家賃と審査に通りやすい家賃を計算" },
  { path: "/hikkoshi/hiwari/", name: "日割り家賃 計算", desc: "月の途中で入居・退去するときの家賃を日割りで計算" },
  { path: "/hikkoshi/hiyou/", name: "引越し費用の目安", desc: "人数・距離・時期から、引越し料金の相場を確認" },
  { path: "/hikkoshi/yarukoto/", name: "引っ越し やることリスト", desc: "役所・ライフライン・ネット回線など、期限つきのチェックリスト" },
  { path: "/hikkoshi/taikyo/", name: "退去費用 計算（原状回復）", desc: "国土交通省のガイドラインで、借主の負担と敷金の戻りを計算" },
];

const yen = n => Math.round(n).toLocaleString("ja-JP") + "円";
const num = id => Math.max(0, Number(document.getElementById(id).value) || 0);
const pad = n => String(n).padStart(2, "0");
const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parseDate = v => { if (!v) return null; const [y, m, d] = v.split("-").map(Number); return new Date(y, m - 1, d); };
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const WD = ["日", "月", "火", "水", "木", "金", "土"];
const fmtDate = d => `${d.getMonth() + 1}月${d.getDate()}日（${WD[d.getDay()]}）`;
const daysInMonth = d => new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("related");
  if (!el) return;
  const here = location.pathname.replace(/index\.html$/, "");
  el.innerHTML = `<h2>ほかのツール</h2><ul class="tools">${TOOLS.filter(t => t.path !== here)
    .map(t => `<li><a href="${t.path}"><b>${t.name}</b><span>${t.desc}</span></a></li>`).join("")}</ul>`;
});
