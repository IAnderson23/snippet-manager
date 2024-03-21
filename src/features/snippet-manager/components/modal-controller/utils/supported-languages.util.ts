import {LanguageName} from "@uiw/codemirror-extensions-langs";

interface ISupportedLanguages{
  name: string;
  lang: LanguageName;
}

export const supportedLanguages: ISupportedLanguages[] = [
  {name: 'JS', lang: 'javascript'},
  {name: 'Python', lang: 'python'},
  {name: 'Java', lang: 'java'},
  {name: 'TS', lang: 'typescript'},
  {name: 'JSX', lang: 'jsx'},
  {name: 'TSX', lang: 'tsx'},
  {name: 'Vue', lang: 'vue'},
  {name: 'Angular', lang: 'angular'},
  {name: 'C++', lang: 'cpp'},
  {name: 'C#', lang: 'csharp'},
  {name: 'C', lang: 'c'},
  {name: 'CMake', lang: 'cmake'},
  {name: 'Json', lang: 'json'},
  {name: 'HTML', lang: 'html'},
  {name: 'CSS', lang: 'css'},
  {name: 'Sass', lang: 'sass'},
  {name: 'Swift', lang: 'swift'},
  {name: 'PHP', lang: 'php'},
  {name: 'Cobol', lang: 'cobol'},
  {name: 'Markdown', lang: 'markdown'},
  {name: 'Rust', lang: 'rust'},
  {name: 'Go', lang: 'go'},
  {name: 'Lua', lang: 'lua'},
  {name: 'Ruby', lang: 'ruby'},
  {name: 'R', lang: 'r'},
]
