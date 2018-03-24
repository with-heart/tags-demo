import React from 'react'

const BubbleTags = ({ tags, removeTag, inputAttrs, inputEvents }) => (
  <div className="tags-input mb-2">
    {tags.map((tag, i) => (
      <span key={i} className="tags-input-tag">
        <span>{tag}</span>
        <button
          type="button"
          onClick={() => removeTag(tag)}
          className="tags-input-remove"
        >
          &times;
        </button>
      </span>
    ))}
    <input
      {...inputEvents}
      {...inputAttrs}
      className="tags-input-text"
      placeholder="Add tag..."
    />
  </div>
)

export default BubbleTags
