import React, { useState } from "react";

interface EditableTextProps {
  text?: string;
}

const EditableText: React.FC<EditableTextProps> = ({ text = "" }) => {
  const [editableText, setEditableText] = useState<string>(text);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return !isEdit ? (
    <p
      onDoubleClick={() => setIsEdit(true)}
      className="hover: cursor-pointer hover:border hover:border-black/30 p-2 rounded-lg"
    >
      {editableText}
    </p>
  ) : (
    <textarea
      value={editableText}
      className="p-2 bg-transparent w-full border border-black rounded-lg"
      onChange={(e) => setEditableText(e.target.value)}
      onBlur={() => setIsEdit(false)}
    />
  );
};

export default EditableText;
