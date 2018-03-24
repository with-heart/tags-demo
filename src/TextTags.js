import React from 'react'

const TextTags = ({ tags, addTag, removeTag, inputEvents, inputAttrs }) => (
  <div className="p-4 rounded border bg-white">
    <div className="flex">
      <input
        {...inputEvents}
        {...inputAttrs}
        className="text-input flex-1 mr-2"
        placeholder="New tag"
      />
      <button type="button" className="btn btn-primary" onClick={addTag}>
        Add
      </button>
    </div>
    <ul className="mt-4 pl-6">
      {tags.map((tag, i) => (
        <li key={i} className="mb-2">
          <span className="mr-2">{tag}</span>
          <button
            className="text-grey-dark hover:text-grey-darkest underline text-sm"
            onClick={() => removeTag(tag)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  </div>
)

export default TextTags
