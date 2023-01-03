import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

// const markdown = `
// Just a link: https://reactjs.com.

// # A demo of \`react-markdown\`

// ## Overview

// * Follows [CommonMark](https://commonmark.org) (ဖြစ်တတ်ပါတယ်။)
// * Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
// * Renders actual React elements instead of using \`dangerouslySetInnerHTML\`
// * Lets you define your own components (to render \`MyHeading\` instead of \`h1\`)
// * Has a lot of plugins


// \`\`\`js
// import React from 'react'
// import ReactDOM from 'react-dom'
// import ReactMarkdown from 'react-markdown'
// import rehypeHighlight from 'rehype-highlight'

// ReactDOM.render(
//   <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,
//   document.querySelector('#content')
// )
// \`\`\`

// | Syntax      | Description | Test Text     |
// | :---        |    :----:   |          ---: |
// | Header      | Title       | Here's this   |
// | Paragraph   | Text        | And more      |

// `;

const Markdown = (prose) => {
  return (
    <div className=" container mx-auto px-3 lg:px-0 mt-5">
      <div className="prose prose-slate max-w-none">
        {/* <h1 className="text-3xl font-bold underline text-emerald-500">
          Hello Markdown Project!
        </h1> */}

        <ReactMarkdown
          className="markdown-body"
          children={prose.DataMarkdown}
          remarkPlugins={[remarkGfm]}
          components={CodeBlock}
        />
      </div>
    </div>
  );
};

const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default Markdown;