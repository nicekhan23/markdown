// Configure marked to handle line breaks
marked.setOptions({
    breaks: true,
    gfm: true
});

// Default markdown content
const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

// Get DOM elements
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Function to update preview
function updatePreview() {
    const markdownText = editor.value;
    const htmlContent = marked.parse(markdownText);
    preview.innerHTML = htmlContent;
}

// Set default content
editor.value = defaultMarkdown;
updatePreview();

// Add event listener for real-time updates
editor.addEventListener('input', updatePreview);

// Handle tab key for better editing experience
editor.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = this.selectionStart;
        const end = this.selectionEnd;
        
        // Insert tab character
        this.value = this.value.substring(0, start) + '\t' + this.value.substring(end);
        
        // Move cursor
        this.selectionStart = this.selectionEnd = start + 1;
        
        // Update preview
        updatePreview();
    }
});
