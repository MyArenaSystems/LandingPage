// Language data
const languages = [
  { code: "ar", name: "العربية", flag: "ps" },
  { code: "en", name: "English", flag: "us" },
  { code: "es", name: "Español", flag: "es" },
  { code: "de", name: "Deutsch", flag: "de" },
  { code: "fr", name: "Français", flag: "fr" },
  { code: "it", name: "Italiano", flag: "it" },
  { code: "tr", name: "Türkçe", flag: "tr" },
  { code: "ru", name: "Русский", flag: "ru" },
  { code: "pt", name: "Português", flag: "pt" },
  { code: "hi", name: "हिन्दी", flag: "in" },
  { code: "ro", name: "Română", flag: "ro" },
  { code: "ja", name: "日本語", flag: "jp" },
  { code: "ko", name: "한국어", flag: "kr" },
  { code: "he", name: "עברית", flag: "il" }
];

const listContainer = document.getElementById("languageList");

// Render the list
function renderLanguages() {
  listContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();

  languages.forEach(lang => {
    const li = document.createElement("li");
    li.setAttribute("role", "menuitem");
    li.innerHTML = `
      <a class="dropdown-item d-flex align-items-center" href="../${lang.code}/index.html">
        <img src="https://flagcdn.com/20x15/${lang.flag}.png" alt="${lang.name}" class="language-flag" loading="lazy">
      &nbsp;  ${lang.name} &nbsp;
      </a>
    `;
    fragment.appendChild(li);
  });

  listContainer.appendChild(fragment);
}

// Initial render
renderLanguages();