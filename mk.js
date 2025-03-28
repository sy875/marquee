// Configure marked with highlight.js
marked.setOptions({
    highlight: function(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
    },
    breaks: true,
    gfm: true
});

const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Update preview in real-time
editor.addEventListener('input', function() {
    preview.innerHTML = marked.parse(editor.value);
});

// Clear editor function
function clearEditor() {
    editor.value = '';
    preview.innerHTML = '';
}

// Load sample Markdown
function loadSampleMarkdown() {
    const sampleMarkdown = `# Markdown Previewer

## Features Demonstration

This is a **powerful** Markdown *previewer* that supports:

### Code Blocks
\`\`\`javascript
function greet(name) {
    return \`Hello, \${name}!\`;
}
\`\`\`

### Lists
- Unordered list item 1
- Unordered list item 2
  - Nested item

1. Ordered list item
2. Another ordered list item

### Links and Images
[OpenAI Website](https://openai.com)

![Placeholder Image](https://via.placeholder.com/350x150)

### Blockquote
> Markdown makes writing on the web easy and fun!

### Horizontal Rule
---

### Inline Code
Use \`inline code\` within your text.
`;
    editor.value = sampleMarkdown;
    preview.innerHTML = marked.parse(sampleMarkdown);
}

// Load sample markdown on initial page load
loadSampleMarkdown();