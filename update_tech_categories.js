const fs = require('fs');

const file = fs.readFileSync('src/features/portfolio/data/tech-stack.ts', 'utf8');

let newLines = file.split('\n').map(line => {
  if (line.includes('categories: ["Backend & Database"]')) {
    return line.replace('categories: ["Backend & Database"]', 'categories: ["Backend"]');
  }
  return line;
});

// Write it back
fs.writeFileSync('src/features/portfolio/data/tech-stack.ts', newLines.join('\n'));
