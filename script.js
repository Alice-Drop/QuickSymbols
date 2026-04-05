const categoryDefinitions = [
  { id: "all", label: "全部" },
  { id: "common", label: "常用符号" },
  { id: "units", label: "单位温度" },
  { id: "math", label: "数学运算" },
  { id: "logic", label: "集合逻辑" },
  { id: "arrows", label: "箭头方向" },
  { id: "greekLower", label: "希腊小写" },
  { id: "greekUpper", label: "希腊大写" }
];

const library = [
  { category: "common", symbol: "★", label: "实心星", code: "heixing", keywords: ["star", "favorite", "收藏"] },
  { category: "common", symbol: "☆", label: "空心星", code: "kongxing", keywords: ["star", "outline", "星标"] },
  { category: "common", symbol: "✓", label: "对勾", code: "dui", keywords: ["check", "tick", "完成"] },
  { category: "common", symbol: "✗", label: "叉号", code: "cha", keywords: ["cross", "cancel", "错误"] },
  { category: "common", symbol: "☑", label: "选中框", code: "xuankuang", keywords: ["checkbox", "select", "勾选"] },
  { category: "common", symbol: "♥", label: "实心爱心", code: "aixin", keywords: ["heart", "love", "喜欢"] },
  { category: "common", symbol: "♡", label: "空心爱心", code: "kongxin", keywords: ["heart", "outline", "收藏"] },
  { category: "common", symbol: "•", label: "圆点", code: "yuandian", keywords: ["bullet", "dot", "列表"] },
  { category: "common", symbol: "·", label: "间隔点", code: "jiangedian", keywords: ["middle dot", "separator", "间隔"] },
  { category: "common", symbol: "…", label: "省略号", code: "shenglve", keywords: ["ellipsis", "dotdot", "省略"] },
  { category: "common", symbol: "—", label: "破折号", code: "pozhe", keywords: ["dash", "emdash", "连接"] },
  { category: "common", symbol: "‰", label: "千分号", code: "qianfen", keywords: ["permille", "rate", "比例"] },
  { category: "common", symbol: "§", label: "章节符", code: "zhangjie", keywords: ["section", "legal", "条款"] },
  { category: "common", symbol: "№", label: "编号符", code: "bianhao", keywords: ["number", "no", "编号"] },
  { category: "common", symbol: "©", label: "版权", code: "copyright", keywords: ["copyright", "版权", "知识产权"] },
  { category: "common", symbol: "®", label: "注册商标", code: "reg", keywords: ["registered", "商标", "注册"] },
  { category: "common", symbol: "™", label: "商标", code: "tm", keywords: ["trademark", "商标", "品牌"] },
  { category: "common", symbol: "′", label: "单撇", code: "danpie", keywords: ["prime", "minute", "撇"] },
  { category: "common", symbol: "″", label: "双撇", code: "shuangpie", keywords: ["double prime", "second", "双撇"] },
  { category: "common", symbol: "°", label: "度数符", code: "du", keywords: ["degree", "temperature", "温度"] },

  { category: "units", symbol: "°C", label: "摄氏度", code: "duc", keywords: ["celsius", "temperature", "摄氏"] },
  { category: "units", symbol: "°F", label: "华氏度", code: "duf", keywords: ["fahrenheit", "temperature", "华氏"] },
  { category: "units", symbol: "℃", label: "摄氏温标", code: "sheshi", keywords: ["celsius", "thermo", "摄氏"] },
  { category: "units", symbol: "℉", label: "华氏温标", code: "huashi", keywords: ["fahrenheit", "thermo", "华氏"] },
  { category: "units", symbol: "μm", label: "微米", code: "weimi", keywords: ["micrometer", "length", "微米"] },
  { category: "units", symbol: "nm", label: "纳米", code: "nami", keywords: ["nanometer", "length", "纳米"] },
  { category: "units", symbol: "m²", label: "平方米", code: "m2", keywords: ["area", "square meter", "面积"] },
  { category: "units", symbol: "m³", label: "立方米", code: "m3", keywords: ["volume", "cubic meter", "体积"] },
  { category: "units", symbol: "㎡", label: "平方米简写", code: "pingfangmi", keywords: ["area", "square", "平方米"] },
  { category: "units", symbol: "㎥", label: "立方米简写", code: "lifangmi", keywords: ["volume", "cubic", "立方米"] },
  { category: "units", symbol: "㎏", label: "千克简写", code: "kg", keywords: ["kilogram", "weight", "千克"] },
  { category: "units", symbol: "㎞", label: "千米简写", code: "km", keywords: ["kilometer", "distance", "公里"] },
  { category: "units", symbol: "㎜", label: "毫米简写", code: "mm", keywords: ["millimeter", "length", "毫米"] },
  { category: "units", symbol: "㎝", label: "厘米简写", code: "cm", keywords: ["centimeter", "length", "厘米"] },

  { category: "math", symbol: "×", label: "乘号", code: "cheng", keywords: ["multiply", "times", "乘法"] },
  { category: "math", symbol: "÷", label: "除号", code: "chu", keywords: ["divide", "division", "除法"] },
  { category: "math", symbol: "±", label: "正负号", code: "zhengfu", keywords: ["plus minus", "sign", "正负"] },
  { category: "math", symbol: "≈", label: "约等于", code: "yuedeng", keywords: ["approx", "equal", "约等"] },
  { category: "math", symbol: "≠", label: "不等于", code: "budeng", keywords: ["not equal", "inequality", "不等"] },
  { category: "math", symbol: "≤", label: "小于等于", code: "xiaodeng", keywords: ["less equal", "compare", "比较"] },
  { category: "math", symbol: "≥", label: "大于等于", code: "dadeng", keywords: ["greater equal", "compare", "比较"] },
  { category: "math", symbol: "∞", label: "无穷大", code: "wuqiong", keywords: ["infinity", "limit", "无穷"] },
  { category: "math", symbol: "√", label: "根号", code: "gen", keywords: ["sqrt", "root", "开方"] },
  { category: "math", symbol: "∑", label: "求和", code: "sum", keywords: ["sum", "sigma", "累加"] },
  { category: "math", symbol: "∏", label: "连乘", code: "prod", keywords: ["product", "pi", "连乘"] },
  { category: "math", symbol: "∫", label: "积分", code: "jifen", keywords: ["integral", "calculus", "积分"] },
  { category: "math", symbol: "∬", label: "二重积分", code: "erjifen", keywords: ["double integral", "calculus", "二重积分"] },
  { category: "math", symbol: "∮", label: "环路积分", code: "huanji", keywords: ["contour integral", "calculus", "闭合积分"] },
  { category: "math", symbol: "∂", label: "偏导", code: "piandao", keywords: ["partial", "derivative", "偏导"] },
  { category: "math", symbol: "∇", label: "梯度", code: "nabla", keywords: ["gradient", "nabla", "梯度"] },
  { category: "math", symbol: "∝", label: "成正比", code: "chengbi", keywords: ["proportional", "ratio", "比例"] },
  { category: "math", symbol: "∵", label: "因为", code: "yinwei", keywords: ["because", "logic", "因为"] },
  { category: "math", symbol: "∴", label: "所以", code: "suoyi", keywords: ["therefore", "logic", "所以"] },
  { category: "math", symbol: "⊥", label: "垂直", code: "chuizhi", keywords: ["perpendicular", "geometry", "垂直"] },
  { category: "math", symbol: "∥", label: "平行", code: "pingxing", keywords: ["parallel", "geometry", "平行"] },

  { category: "logic", symbol: "∈", label: "属于", code: "shuyu", keywords: ["element of", "set", "属于"] },
  { category: "logic", symbol: "∉", label: "不属于", code: "bushuyu", keywords: ["not element of", "set", "不属于"] },
  { category: "logic", symbol: "∅", label: "空集", code: "kongji", keywords: ["empty set", "set", "空集"] },
  { category: "logic", symbol: "∩", label: "交集", code: "jiao", keywords: ["intersection", "set", "交集"] },
  { category: "logic", symbol: "∪", label: "并集", code: "bing", keywords: ["union", "set", "并集"] },
  { category: "logic", symbol: "⊂", label: "真子集", code: "zhenziji", keywords: ["proper subset", "set", "真子集"] },
  { category: "logic", symbol: "⊃", label: "真超集", code: "zhenchaoji", keywords: ["proper superset", "set", "真超集"] },
  { category: "logic", symbol: "⊆", label: "子集", code: "ziji", keywords: ["subset", "set", "子集"] },
  { category: "logic", symbol: "⊇", label: "超集", code: "chaoji", keywords: ["superset", "set", "超集"] },
  { category: "logic", symbol: "∧", label: "逻辑与", code: "and", keywords: ["logical and", "logic", "且"] },
  { category: "logic", symbol: "∨", label: "逻辑或", code: "or", keywords: ["logical or", "logic", "或"] },
  { category: "logic", symbol: "¬", label: "逻辑非", code: "not", keywords: ["logical not", "logic", "非"] },
  { category: "logic", symbol: "∀", label: "任意", code: "renyi", keywords: ["for all", "logic", "任意"] },
  { category: "logic", symbol: "∃", label: "存在", code: "cunzai", keywords: ["exists", "logic", "存在"] },

  { category: "arrows", symbol: "←", label: "左箭头", code: "zuo", keywords: ["left", "arrow", "方向"] },
  { category: "arrows", symbol: "→", label: "右箭头", code: "you", keywords: ["right", "arrow", "方向"] },
  { category: "arrows", symbol: "↑", label: "上箭头", code: "shang", keywords: ["up", "arrow", "方向"] },
  { category: "arrows", symbol: "↓", label: "下箭头", code: "xia", keywords: ["down", "arrow", "方向"] },
  { category: "arrows", symbol: "↔", label: "左右箭头", code: "zuoyou", keywords: ["leftright", "arrow", "双向"] },
  { category: "arrows", symbol: "↕", label: "上下箭头", code: "shangxia", keywords: ["updown", "arrow", "双向"] },
  { category: "arrows", symbol: "↖", label: "左上箭头", code: "zuoshang", keywords: ["upleft", "arrow", "斜向"] },
  { category: "arrows", symbol: "↗", label: "右上箭头", code: "youshang", keywords: ["upright", "arrow", "斜向"] },
  { category: "arrows", symbol: "↘", label: "右下箭头", code: "youxia", keywords: ["downright", "arrow", "斜向"] },
  { category: "arrows", symbol: "↙", label: "左下箭头", code: "zuoxia", keywords: ["downleft", "arrow", "斜向"] },
  { category: "arrows", symbol: "⇒", label: "推出", code: "tuichu", keywords: ["implies", "logic", "推出"] },
  { category: "arrows", symbol: "⇔", label: "等价", code: "dengjia", keywords: ["iff", "equivalent", "等价"] },

  { category: "greekLower", symbol: "α", label: "alpha", code: "alpha", keywords: ["greek", "alpha", "希腊"] },
  { category: "greekLower", symbol: "β", label: "beta", code: "beta", keywords: ["greek", "beta", "希腊"] },
  { category: "greekLower", symbol: "γ", label: "gamma", code: "gamma", keywords: ["greek", "gamma", "希腊"] },
  { category: "greekLower", symbol: "δ", label: "delta", code: "delta", keywords: ["greek", "delta", "希腊"] },
  { category: "greekLower", symbol: "ε", label: "epsilon", code: "epsilon", keywords: ["greek", "epsilon", "希腊"] },
  { category: "greekLower", symbol: "θ", label: "theta", code: "theta", keywords: ["greek", "theta", "希腊"] },
  { category: "greekLower", symbol: "λ", label: "lambda", code: "lambda", keywords: ["greek", "lambda", "希腊"] },
  { category: "greekLower", symbol: "μ", label: "mu", code: "mu", keywords: ["greek", "mu", "希腊"] },
  { category: "greekLower", symbol: "π", label: "pi", code: "pi", keywords: ["greek", "pi", "圆周率"] },
  { category: "greekLower", symbol: "ρ", label: "rho", code: "rho", keywords: ["greek", "rho", "希腊"] },
  { category: "greekLower", symbol: "σ", label: "sigma", code: "sigma", keywords: ["greek", "sigma", "希腊"] },
  { category: "greekLower", symbol: "τ", label: "tau", code: "tau", keywords: ["greek", "tau", "希腊"] },
  { category: "greekLower", symbol: "φ", label: "phi", code: "phi", keywords: ["greek", "phi", "希腊"] },
  { category: "greekLower", symbol: "ψ", label: "psi", code: "psi", keywords: ["greek", "psi", "希腊"] },
  { category: "greekLower", symbol: "ω", label: "omega", code: "omega", keywords: ["greek", "omega", "希腊"] },

  { category: "greekUpper", symbol: "Γ", label: "Gamma", code: "capgamma", keywords: ["greek", "gamma", "uppercase"] },
  { category: "greekUpper", symbol: "Δ", label: "Delta", code: "capdelta", keywords: ["greek", "delta", "uppercase"] },
  { category: "greekUpper", symbol: "Θ", label: "Theta", code: "captheta", keywords: ["greek", "theta", "uppercase"] },
  { category: "greekUpper", symbol: "Λ", label: "Lambda", code: "caplambda", keywords: ["greek", "lambda", "uppercase"] },
  { category: "greekUpper", symbol: "Ξ", label: "Xi", code: "capxi", keywords: ["greek", "xi", "uppercase"] },
  { category: "greekUpper", symbol: "Π", label: "Pi", code: "cappi", keywords: ["greek", "pi", "uppercase"] },
  { category: "greekUpper", symbol: "Σ", label: "Sigma", code: "capsigma", keywords: ["greek", "sigma", "uppercase"] },
  { category: "greekUpper", symbol: "Φ", label: "Phi", code: "capphi", keywords: ["greek", "phi", "uppercase"] },
  { category: "greekUpper", symbol: "Ψ", label: "Psi", code: "cappsi", keywords: ["greek", "psi", "uppercase"] },
  { category: "greekUpper", symbol: "Ω", label: "Omega", code: "capomega", keywords: ["greek", "omega", "uppercase"] }
].map((item) => ({
  ...item,
  id: `${item.category}-${String(item.code).toLowerCase()}`,
  keywordsText: [item.symbol, item.label, item.code, ...(item.keywords || [])].join(" ").toLowerCase()
}));

const state = {
  activeCategory: "all",
  keyword: "",
  prefix: "u",
  selectedIds: new Set()
};

const tabsElement = document.querySelector("#tabs");
const gridElement = document.querySelector("#grid");
const selectedListElement = document.querySelector("#selectedList");
const selectedCountElement = document.querySelector("#selectedCount");
const prefixPreviewElement = document.querySelector("#prefixPreview");
const prefixInput = document.querySelector("#prefixInput");
const filenameInput = document.querySelector("#filenameInput");
const searchInput = document.querySelector("#searchInput");
const previewOutput = document.querySelector("#previewOutput");
const downloadButton = document.querySelector("#downloadButton");
const copyButton = document.querySelector("#copyButton");
const selectVisibleButton = document.querySelector("#selectVisibleButton");
const clearVisibleButton = document.querySelector("#clearVisibleButton");
const clearAllButton = document.querySelector("#clearAllButton");

render();

prefixInput.addEventListener("input", () => {
  state.prefix = normalizePrefix(prefixInput.value);
  prefixInput.value = state.prefix;
  render();
});

searchInput.addEventListener("input", () => {
  state.keyword = searchInput.value.trim().toLowerCase();
  renderGrid();
});

downloadButton.addEventListener("click", () => {
  const plist = buildPlist(getSelectedItems());
  previewOutput.value = plist;
  downloadText(resolveFilename(filenameInput.value), plist);
});

copyButton.addEventListener("click", async () => {
  const plist = buildPlist(getSelectedItems());
  previewOutput.value = plist;
  if (!navigator.clipboard) {
    previewOutput.select();
    document.execCommand("copy");
    return;
  }
  await navigator.clipboard.writeText(plist);
});

selectVisibleButton.addEventListener("click", () => {
  getVisibleItems().forEach((item) => state.selectedIds.add(item.id));
  render();
});

clearVisibleButton.addEventListener("click", () => {
  getVisibleItems().forEach((item) => state.selectedIds.delete(item.id));
  render();
});

clearAllButton.addEventListener("click", () => {
  state.selectedIds.clear();
  render();
});

function render() {
  renderTabs();
  renderGrid();
  renderSelectedList();
  const plist = buildPlist(getSelectedItems());
  selectedCountElement.textContent = String(state.selectedIds.size);
  prefixPreviewElement.textContent = state.prefix || "无前缀";
  previewOutput.value = plist;
}

function renderTabs() {
  tabsElement.innerHTML = categoryDefinitions
    .map((category) => {
      const count = category.id === "all"
        ? library.length
        : library.filter((item) => item.category === category.id).length;
      return `
        <button class="tab ${state.activeCategory === category.id ? "active" : ""}" data-category="${category.id}">
          ${category.label} ${count}
        </button>
      `;
    })
    .join("");

  tabsElement.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeCategory = button.dataset.category;
      renderGrid();
      renderTabs();
    });
  });
}

function renderGrid() {
  const visibleItems = getVisibleItems();
  if (visibleItems.length === 0) {
    gridElement.innerHTML = `<div class="empty-state">没有匹配的条目，试试换个关键词。</div>`;
    return;
  }

  gridElement.innerHTML = visibleItems
    .map((item) => {
      const shortcut = composeShortcut(item);
      const selected = state.selectedIds.has(item.id);
      return `
        <div class="symbol-card ${selected ? "selected" : ""}" data-id="${item.id}" tabindex="0" role="button" aria-pressed="${selected}">
          <div class="symbol-top">
            <div class="symbol-char">${escapeHtml(item.symbol)}</div>
            <input type="checkbox" ${selected ? "checked" : ""} aria-label="选择 ${escapeHtml(item.label)}">
          </div>
          <div>
            <p class="symbol-label">${escapeHtml(item.label)}</p>
          </div>
          <div class="symbol-meta">
            <span class="shortcut">${escapeHtml(shortcut)}</span>
          </div>
        </div>
      `;
    })
    .join("");

  gridElement.querySelectorAll(".symbol-card").forEach((card) => {
    const checkbox = card.querySelector('input[type="checkbox"]');

    checkbox.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        state.selectedIds.add(card.dataset.id);
      } else {
        state.selectedIds.delete(card.dataset.id);
      }
      render();
    });

    card.addEventListener("click", () => {
      const nextChecked = !checkbox.checked;
      checkbox.checked = nextChecked;
      if (nextChecked) {
        state.selectedIds.add(card.dataset.id);
      } else {
        state.selectedIds.delete(card.dataset.id);
      }
      render();
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }
      event.preventDefault();
      const input = card.querySelector('input[type="checkbox"]');
      const nextChecked = !input.checked;
      input.checked = nextChecked;
      if (nextChecked) {
        state.selectedIds.add(card.dataset.id);
      } else {
        state.selectedIds.delete(card.dataset.id);
      }
      render();
    });
  });
}

function renderSelectedList() {
  const selectedItems = getSelectedItems();
  if (selectedItems.length === 0) {
    selectedListElement.className = "selected-list empty";
    selectedListElement.textContent = "还没有选择任何条目。";
    return;
  }

  selectedListElement.className = "selected-list";
  const grouped = categoryDefinitions
    .filter((category) => category.id !== "all")
    .map((category) => ({
      label: category.label,
      count: selectedItems.filter((item) => item.category === category.id).length
    }))
    .filter((item) => item.count > 0);

  selectedListElement.innerHTML = grouped
    .map((group) => `
      <div class="selected-item">
        <div class="selected-symbol">${group.count}</div>
        <div>
          <strong>${escapeHtml(`${group.count} 个 ${group.label}`)}</strong>
          <p>${escapeHtml(`已选择 ${group.count} 个条目`)}</p>
        </div>
      </div>
    `)
    .join("");
}

function getVisibleItems() {
  return library.filter((item) => {
    const categoryMatch = state.activeCategory === "all" || item.category === state.activeCategory;
    const keywordMatch = !state.keyword || item.keywordsText.includes(state.keyword);
    return categoryMatch && keywordMatch;
  });
}

function getSelectedItems() {
  return library.filter((item) => state.selectedIds.has(item.id));
}

function composeShortcut(item) {
  return `${state.prefix}${String(item.code).toLowerCase()}`;
}

function buildPlist(items) {
  const rows = items
    .map((item) => {
      return `\t<dict>
\t\t<key>phrase</key>
\t\t<string>${escapeXml(item.symbol)}</string>
\t\t<key>shortcut</key>
\t\t<string>${escapeXml(composeShortcut(item))}</string>
\t</dict>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<array>
${rows}
</array>
</plist>`;
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function escapeHtml(value) {
  return escapeXml(value);
}

function normalizePrefix(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 6);
}

function resolveFilename(value) {
  const base = value.trim() || "apple-symbols.plist";
  return base.endsWith(".plist") ? base : `${base}.plist`;
}

function downloadText(filename, content) {
  const blob = new Blob([content], { type: "application/x-plist;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
