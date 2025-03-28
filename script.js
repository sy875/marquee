
/**
 
 * @description this is configuration for marker.js library 
 * 
 * @param {Object} options - options needed to configure marker
 * @param {Function} options.highlight - it is used to highlight the code sntax
 * @param {boolean} options.breaks - Enable for line break
 * @param {boolean} options.gfm - Enable GitHub type readme reader
 * 
 **/

marked.setOptions({
    highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
    },
    breaks: true,
    gfm: true
});


/**
 * @description this is used to store html element to manipulate based on user interaction
 */

// --------------- select elements by their respective ids -------------------
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Update preview in real-time
editor.addEventListener('input', function () {

    //#Use DOMPurify to protect from cross site scripting attack
    //Example : try to insert write this in marquee preview by removing dompurify
    // <img src="x" onerror="alert('XSS Attack!')">

    preview.innerHTML = DOMPurify.sanitize(marked.parse(editor.value));

    // --------- vulnerable to xss attack ----------------
    // preview.innerHTML = marked.parse(editor.value);

});
/**
 * @description function to clear markup content
 */

function clearEditor() {
    editor.value = '';
    preview.innerHTML = '';
}


/**
 * @description function to load dummy data for showing 
 */

function loadSampleMarkdown() {
    const sampleMarkdown = `# Markdown Previewer

## Features Demonstration

This is a **powerful** Markdown *previewer* with XSS Protection that supports:

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

![Placeholder Image](https://placehold.co/600x400)

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

/**
 * @description call function to show dummy data
 */
loadSampleMarkdown();