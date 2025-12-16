'use client';

import { useState, useRef, useEffect } from 'react';

interface RichTextEditorProps {
  label: string;
  value: string;
  onChange: (html: string) => void;
  required?: boolean;
}

export default function RichTextEditor({ label, value, onChange, required = false }: RichTextEditorProps) {
  const [content, setContent] = useState(value);
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (editorRef.current && !isInitialized) {
      editorRef.current.innerHTML = value || "";
      setContent(value || "");
      setIsInitialized(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized]);

  useEffect(() => {
    if (editorRef.current && isInitialized && value !== content) {
      const currentSelection = window.getSelection();
      const cursorPosition = currentSelection?.focusOffset || 0;

      editorRef.current.innerHTML = value;
      setContent(value);

      if (currentSelection && editorRef.current.firstChild) {
        const range = document.createRange();
        try {
          range.setStart(
            editorRef.current.firstChild,
            Math.min(cursorPosition, editorRef.current.textContent?.length || 0)
          );
          range.collapse(true);
          currentSelection.removeAllRanges();
          currentSelection.addRange(range);
        } catch (e) {
          // Ignore cursor restore errors
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleInput = () => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      setContent(html);
      onChange(html);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      const selection = window.getSelection();
      if (selection && selection.anchorNode) {
        const parentElement = selection.anchorNode.parentElement;
        if (parentElement?.tagName === 'LI') {
          return;
        }
      }
    }
  };

  const execCommand = (command: string, value: string | undefined = undefined) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    setTimeout(() => handleInput(), 10);
  };

  const insertHeading = (level: number) => {
    const tag = `h${level}`;
    execCommand('formatBlock', tag);
  };

  const insertLink = () => {
    const selection = window.getSelection();
    const selectedText = selection?.toString() || '';
    
    const url = prompt('Enter URL:', 'https://');
    if (url && url.trim()) {
      if (selectedText) {
        execCommand('createLink', url);
      } else {
        const linkText = prompt('Enter link text:', url);
        if (linkText) {
          document.execCommand('insertHTML', false, `<a href="${url}" target="_blank">${linkText}</a>`);
          handleInput();
        }
      }
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        insertImageToEditor(imageUrl);
      };
      reader.readAsDataURL(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const insertImageToEditor = (url: string) => {
    if (editorRef.current) {
      editorRef.current.focus();
      document.execCommand('insertHTML', false, 
        `<img src="${url}" alt="Image" style="max-width: 100%; height: auto; border-radius: 0.5rem; margin: 1rem 0;" />`
      );
      handleInput();
    }
  };

  const insertImage = () => {
    const choice = confirm('Click OK to enter URL, or Cancel to upload from device');
    if (choice) {
      const url = prompt('Enter Image URL:', 'https://');
      if (url && url.trim()) {
        insertImageToEditor(url);
      }
    } else {
      fileInputRef.current?.click();
    }
  };

  const clearFormatting = () => {
    execCommand('removeFormat');
    execCommand('unlink');
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold text-black">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      
      <div className="border border-gray-300 rounded-t-md bg-gray-50 p-2 flex flex-wrap gap-1">
        <select
          onChange={(e) => {
            if (e.target.value) {
              if (e.target.value === 'p') {
                execCommand('formatBlock', 'p');
              } else {
                insertHeading(parseInt(e.target.value));
              }
              e.target.value = '';
            }
          }}
          className="px-2 py-1 border border-gray-300 rounded text-sm bg-white text-black"
        >
          <option value="">Format</option>
          <option value="p">Paragraph</option>
          <option value="2">Heading 2</option>
          <option value="3">Heading 3</option>
          <option value="4">Heading 4</option>
          <option value="5">Heading 5</option>
          <option value="6">Heading 6</option>
        </select>

        <div className="border-l border-gray-300 mx-1"></div>

        <button
          type="button"
          onClick={() => execCommand('bold')}
          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 text-black font-bold"
          title="Bold"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => execCommand('italic')}
          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 text-black italic"
          title="Italic"
        >
          I
        </button>
        <button
          type="button"
          onClick={() => execCommand('underline')}
          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 text-black underline"
          title="Underline"
        >
          U
        </button>
        <button
          type="button"
          onClick={() => execCommand('strikeThrough')}
          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 text-black line-through"
          title="Strikethrough"
        >
          S
        </button>

        <div className="border-l border-gray-300 mx-1"></div>

        <button
          type="button"
          onClick={() => execCommand('insertUnorderedList')}
          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 text-black"
          title="Bullet List"
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => execCommand('insertOrderedList')}
          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 text-black"
          title="Numbered List"
        >
          1. List
        </button>

        <div className="border-l border-gray-300 mx-1"></div>

        <button
          type="button"
          onClick={() => execCommand('justifyLeft')}
          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 text-black"
          title="Align Left"
        >
          ⇐
        </button>
        <button
          type="button"
          onClick={() => execCommand('justifyCenter')}
          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 text-black"
          title="Align Center"
        >
          =
        </button>
        <button
          type="button"
          onClick={() => execCommand('justifyRight')}
          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 text-black"
          title="Align Right"
        >
          ⇒
        </button>

        <div className="border-l border-gray-300 mx-1"></div>

        <button
          type="button"
          onClick={insertLink}
          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 text-black"
          title="Insert Link"
        >
          🔗 Link
        </button>
        <button
          type="button"
          onClick={insertImage}
          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 text-black"
          title="Insert Image (URL or Upload)"
        >
          🖼️ Image
        </button>

        <div className="border-l border-gray-300 mx-1"></div>

        <button
          type="button"
          onClick={clearFormatting}
          className="px-3 py-1 border border-gray-300 rounded hover:bg-red-100 text-red-600"
          title="Clear Formatting"
        >
          ✕ Clear
        </button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        className="border border-gray-300 border-t-0 rounded-b-md p-4 min-h-[400px] bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
        style={{
          maxWidth: '100%',
          overflowWrap: 'break-word',
        }}
        suppressContentEditableWarning={true}
      />

      <p className="text-xs text-gray-500 mt-2">
        💡 Press Enter for new line | Select text before adding link | Image: Upload from device or enter URL
      </p>
    </div>
  );
}
